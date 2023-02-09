import { create } from 'zustand'
import produce from 'immer'

export const useModalStore = create((set) => ({
  open: false,
	setOpen: (open) => set(produce(state=> {state.open = open})),
}))
