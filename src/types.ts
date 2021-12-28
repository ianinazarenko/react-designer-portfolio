import { Action, Lang } from './enums'

export interface StateInf {
  lang: 'ENG' | 'RUS'
  isSideBarShown: boolean
}

export interface ActionInf {
  type: Action
  payload?: any
}

export interface ContextInf {
  state: StateInf
  toggleSidebar: () => void
  changeLang: (arg: Lang) => void
}
