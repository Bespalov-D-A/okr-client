import { create } from 'zustand'
import produce from 'immer'

export const useGreetingModal = create((set) => ({
  open: false,
	setOpen: (open) => set(produce(state=> {state.open = open})),
}))

export const useAddTaskModal = create((set) => ({
  open: false,
	setOpen: (open) => set(produce(state=> {state.open = open})),
  BtnDisabled: true,
	setBtnDisabled: (bool) => set(produce(state=> {state.BtnDisabled = bool})),

}))


export const useForgotPassModal = create((set) => ({
  open: false,
	setOpen: (open) => set(produce(state=> {state.open = open})),
}))


export const useLoginModal = create((set) => ({
  open: false,
	setOpen: (open) => set(produce(state=> {state.open = open})),
  authBtnDisabled: true,
	setAuthBtnDisabled: (bool) => set(produce(state=> {state.authBtnDisabled = bool})),
}))

export const useRecoveryModal = create((set) => ({
  open: false,
	setOpen: (open) => set(produce(state=> {state.open = open})),
  BtnDisabled: true,
	setBtnDisabled: (bool) => set(produce(state=> {state.BtnDisabled = bool})),

}))
