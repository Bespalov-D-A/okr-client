import { create } from "zustand";
import produce from "immer";

export const useCommon = create((set) => ({
  formBtnDisabled: true,
  setFormBtnDisabled: (bool) =>
    set(
      produce((state) => {
        state.formBtnDisabled = bool;
      })
    ),
}));

export const useAlert = create((set) => ({
  type: null,
  message: null,
  setType: (str) =>
    set(
      produce((state) => {
        state.type = str;
      })
    ),
  setMessage: (str) =>
    set(
      produce((state) => {
        state.message = str;
      })
    ),
  setAlert: (obj) =>
    set(
      produce((state) => {
        state.type = obj.type;
        state.msg = obj.message;
      })
    ),
}));
