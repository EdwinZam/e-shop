import { FC, useEffect, useReducer } from "react";
import Cookie from "js-cookie";
import { ICartProduct } from "../../interfaces";
import { CartContext, cartReducer } from "./";

export interface CartState {
  cart: ICartProduct[];
  numberOfItems: number;
  subTotal: number;
  tax: number;
  total: number;
}
type Props = {
  children?: React.ReactNode;
};

const CART_INITIAL_STATE: CartState = {
  cart: [],
  numberOfItems: 0,
  subTotal: 0,
  tax: 0,
  total: 0,
};

export const CartProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE);

  useEffect(() => {
    try {
      const cookieProducts = Cookie.get("cart")
        ? JSON.parse(Cookie.get("cart")!)
        : [];
      dispatch({
        type: "Cart - LoadCart from cookies | storage",
        payload: cookieProducts,
      });
    } catch (error) {
      dispatch({
        type: "Cart - LoadCart from cookies | storage",
        payload: [],
      });
    }
  }, []);

  useEffect(() => {
    Cookie.set("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  useEffect(() => {
    const numberOfItems = state.cart.reduce(
      (prev, current) => current.quantity + prev,
      0
    );
    const subTotal = state.cart.reduce(
      (prev, current) => current.price * current.quantity + prev,
      0
    );
    //impuesto manejar db
    const taxRate = Number(process.env.NEXT_PUBLIC_TAX_RATE || 0);

    const orderSumary = {
      numberOfItems,
      subTotal,
      tax: subTotal * taxRate,
      total: subTotal * (taxRate + 1),
    };

    dispatch({ type: "Cart - Update order sumary", payload: orderSumary });
  }, [state.cart]);

  const addProductToCart = (product: ICartProduct) => {
    //dispatch({ type: "Cart - Update products in cart", payload: product });

    const productInCart = state.cart.some((p) => p._id === product._id);
    if (!productInCart)
      return dispatch({
        type: "Cart - Update products in cart",
        payload: [...state.cart, product],
      });

    const productInCartButDifferentSize = state.cart.some(
      (p) => p._id === product._id && p.size === product.size
    );
    if (!productInCartButDifferentSize)
      return dispatch({
        type: "Cart - Update products in cart",
        payload: [...state.cart, product],
      });

    // Acumular
    const updateProducts = state.cart.map((p) => {
      if (p._id !== product._id) return p;
      if (p.size !== product.size) return p;

      //Actualizr la cantidd

      p.quantity += product.quantity;
      return p;
    });

    dispatch({
      type: "Cart - Update products in cart",
      payload: updateProducts,
    });
  };

  const updateCartQuantity = (product: ICartProduct) => {
    dispatch({ type: "Cart - Change cart quantity", payload: product });
  };

  const removeCartProduct = (product: ICartProduct) => {
    dispatch({ type: "Cart - Remove product in cart", payload: product });
  };

  return (
    <CartContext.Provider
      value={{
        ...state,

        //Methos
        addProductToCart,
        updateCartQuantity,
        removeCartProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
