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
}));

