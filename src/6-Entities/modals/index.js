import { create } from 'zustand'
import produce from 'immer'

export const useGreetingModal = create((set) => ({
  open: false,
	setOpen: (open) => set(produce(state=> {state.open = open})),
}))

//selectedList - для изменения листа в уже
//созданной задаче. null || object 
export const useEditTaskListItemModal = create((set) => ({
  selectedList: null,
	setSelectedList: (list) => set(produce(state=> {state.selectedList = list})),
  open: false,
	setOpen: (open) => set(produce(state=> {state.open = open})),
  BtnDisabled: true,
	setBtnDisabled: (bool) => set(produce(state=> {state.BtnDisabled = bool})),
}))


//selectedType - для изменения типа в уже
//созданной задаче. null || object 
export const useEditTaskTypeItemModal = create((set) => ({
  selectedType: null,
	setSelectedType: (type) => set(produce(state=> {state.selectedType = type})),
  taskId: null,
	setTaskId: (id) => set(produce(state=> {state.taskId = id})),
  open: false,
	setOpen: (open) => set(produce(state=> {state.open = open})),
  BtnDisabled: true,
	setBtnDisabled: (bool) => set(produce(state=> {state.BtnDisabled = bool})),
}))


export const useAddTaskListItemModal = create((set) => ({
  selectedList: null,
  open: false,
	setOpen: (open) => set(produce(state=> {state.open = open})),
  BtnDisabled: true,
	setBtnDisabled: (bool) => set(produce(state=> {state.BtnDisabled = bool})),
}))


export const useAddTaskTypeItemModal = create((set) => ({
  open: false,
	setOpen: (open) => set(produce(state=> {state.open = open})),
  BtnDisabled: true,
	setBtnDisabled: (bool) => set(produce(state=> {state.BtnDisabled = bool})),
}))


export const useDeleteTaskModal = create((set) => ({
  open: false,
  task: null,
	setOpen: (open) => set(produce(state=> {state.open = open})),
	setTask: (task) => set(produce(state=> {state.task = task})),
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
