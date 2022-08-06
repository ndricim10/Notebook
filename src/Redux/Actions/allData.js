import request from "../../api";
import { add_note_fail, add_note_request, add_note_success, category_note_fail, category_note_request, category_note_success, edit_note_fail, edit_note_request, edit_note_success, name_category_note_fail, name_category_note_request, name_category_note_success, notes_fail, notes_request, notes_success, single_note_fail, single_note_request, single_note_success } from "../actionTypes";

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

export const getNoteByCategory = (category) => async (dispatch) => {
  try {
    dispatch({
      type: category_note_request,
    });

    const { data } = await request("/Notes",{
      params:{
        categoryId: category
      }
    });

    dispatch({
      type: category_note_success,
      payload: data
    });
  } catch (error) {
    dispatch({
        type: category_note_fail,
        payload:error
    })
    console.log(error);
  }
};

export const getNoteByCategoryName = (category) => async (dispatch) => {
  try {
    dispatch({
      type: name_category_note_request,
    });

    const { data } = await request("/Notes",{
      params:{
        category: category
      }
    });

    dispatch({
      type: name_category_note_success,
      payload: data
    });
  } catch (error) {
    dispatch({
        type: name_category_note_fail,
        payload:error
    })
    console.log(error);
  }
};

export const addNote = (title, description, category, categoryId) => async (dispatch) => {
  try {
    dispatch({
      type: add_note_request,
    });

    const obj = {
      title: title,
      description: description,
      category: category,
      categoryId: categoryId
    }

    const { data } = await request.post("/Notes", obj);

    dispatch({
      type: add_note_success
    });
    setTimeout(()=>{
      dispatch(getNotes())
    }, 100)
  } catch (error) {
    dispatch({
        type: add_note_fail
    })
    console.log(error);
  }
};

export const editNote = (id, title, description, category, categoryId) => async (dispatch) => {
  try {
    dispatch({
      type: edit_note_request,
    });

    const obj = {
      title: title,
      description: description,
      category: category,
      categoryId: categoryId
    }

    const { data } = await request.put(`/Notes/${id}`, obj);

    dispatch({
      type: edit_note_success
    });
    setTimeout(()=>{
      dispatch(getNotes())
    }, 100)
  } catch (error) {
    dispatch({
        type: edit_note_fail
    })
    console.log(error);
  }
};