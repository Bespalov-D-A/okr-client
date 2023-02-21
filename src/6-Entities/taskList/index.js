import { create } from "zustand";
import produce from "immer";

export const useTaskList = create((set) => ({
  list: null,
  setList: (list) =>
    set(
      produce((state) => {
        state.list = list;
      })
    ),
  taskSwitcher: false,
  setTaskSwitcher: () =>
    set(
      produce((state) => {
        state.taskSwitcher = !state.taskSwitcher;
      })
    ),
}));
