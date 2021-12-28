import React, { useContext, useReducer, ReactNode } from 'react'

import { reducer } from './reducer'
import { Lang, Action } from '../enums'
import { StateInf, ContextInf } from '../types'

const initialValue: StateInf = {
  lang: Lang.ENG,
  isSideBarShown: false,
}

const GlobalContext = React.createContext<ContextInf>({} as ContextInf)

function GlobalProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialValue)

  function toggleSidebar() {
    dispatch({ type: Action.TOGGLE_SIDEBAR })
  }

  function changeLang(lang: Lang) {
    dispatch({ type: Action.CHANGE_LANG, payload: lang })
  }

  return (
    <GlobalContext.Provider value={{ state, toggleSidebar, changeLang }}>
      {children}
    </GlobalContext.Provider>
  )
}

function useGlobalContext() {
  return useContext(GlobalContext)
}

export { GlobalProvider, useGlobalContext }
