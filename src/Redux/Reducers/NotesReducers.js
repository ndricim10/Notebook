import { notes_fail, notes_request, notes_success } from "../actionTypes";

export const getAllNotes = (
  state = {
    loading: false,
    notes: [],
  },
  action
) => {
  const { payload, type } = action;

  switch (type) {
    case notes_request:
      return {
        ...state,
        loading: true,
      };

    case notes_success:
      return {
        ...state,
        loading: false,
        notes: payload,
      };

    case notes_fail:
      return {
        ...state,
        loading: false,
        notes: null,
        error: payload,
      };
    default:
      return state;
  }
};
