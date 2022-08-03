import { category_note_fail, category_note_request, category_note_success, notes_fail, notes_request, notes_success, single_note_fail, single_note_request, single_note_success } from "../actionTypes";

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

export const getSingleNote = (
  state = {
    loading: false,
    note: null,
  },
  action
) => {
  const { payload, type } = action;

  switch (type) {
    case single_note_request:
      return {
        ...state,
        loading: true,
      };

    case single_note_success:
      return {
        ...state,
        loading: false,
        note: payload,
      };

    case single_note_fail:
      return {
        ...state,
        loading: false,
        note: null,
        error: payload,
      };
    default:
      return state;
  }
};

export const getNotesByCategory = (
  state = {
    loading: false,
    notes: null,
  },
  action
) => {
  const { payload, type } = action;

  switch (type) {
    case category_note_request:
      return {
        ...state,
        loading: true,
      };

    case category_note_success:
      return {
        ...state,
        loading: false,
        notes: payload,
      };

    case category_note_fail:
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
