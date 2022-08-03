import request from "../../api";
import { notes_fail, notes_request, notes_success, single_note_fail, single_note_request, single_note_success } from "../actionTypes";

export const getNotes = () => async (dispatch) => {
  try {
    dispatch({
      type: notes_request,
    });

    const { data } = await request("/Notes");

    dispatch({
      type: notes_success,
      payload: data
    });
  } catch (error) {
    dispatch({
        type: notes_fail,
        payload:error
    })
    console.log(error);
  }
};

export const getNoteById = (id) => async (dispatch) => {
  try {
    dispatch({
      type: single_note_request,
    });

    const { data } = await request(`/Notes/${id}`);

    dispatch({
      type: single_note_success,
      payload: data
    });
    console.log(data)
  } catch (error) {
    dispatch({
        type: single_note_fail,
        payload:error
    })
    console.log(error);
  }
};
