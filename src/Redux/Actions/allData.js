import request from "../../api";
import { notes_fail, notes_request, notes_success } from "../actionTypes";

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
    console.log(data[0]);
  } catch (error) {
    dispatch({
        type: notes_fail,
        payload:error
    })
    console.log(error);
  }
};
