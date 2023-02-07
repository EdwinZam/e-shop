import { createContext } from 'react'

interface ContextProps {
  isMenuOpen: boolean

  //Methos
  toogleSideMenu: () => void
}

export const UiContext = createContext({} as ContextProps)
