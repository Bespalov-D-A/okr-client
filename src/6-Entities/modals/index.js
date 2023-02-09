import { create } from 'zustand'
import produce from 'immer'

export const useGreetingModal = create((set) => ({
  open: false,
	setOpen: (open) => set(produce(state=> {state.open = open})),
}))

export const useLoginModal = create((set) => ({
  open: false,
	setOpen: (open) => set(produce(state=> {state.open = open})),
}))
