import zustand, { create } from "zustand";
import produce from "immer";

export const useTaskList = create((set, get) => ({
  list: null,
  setList: (list) =>
    set(
      produce((state) => {
        state.list = list;
      })
    ),
   getTaskById: (id) => {
    return get().list.find((item) => item.id === id);
  },
  taskSwitcher: false,
  setTaskSwitcher: () =>
    set(
      produce((state) => {
        state.taskSwitcher = !state.taskSwitcher;
      })
    ),
  selectedTaskTypeId: null,
  setSelectedTaskTypeId: (typeId) =>
    set(
      produce((state) => {
        state.selectedTaskTypeId = typeId
      })
    ),
  selectedTaskListId: null,
  setSelectedTaskListId: (listId) =>
    set(
      produce((state) => {
        state.selectedTaskListId = listId
      })
    ),
}));
