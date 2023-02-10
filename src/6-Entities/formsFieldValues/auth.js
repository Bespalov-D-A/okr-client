import {create} from "zustand"
import produce from 'immer'

export const useAuthFieldValues = create((set) => ({
  login: '',
  password: '',
	setLogin: (login) => set(produce(state=> {state.login = login})),
	setPassword: (pas) => set(produce(state=> {state.pas = pas})),
}))

