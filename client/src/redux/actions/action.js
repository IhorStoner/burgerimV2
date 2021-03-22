import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import axios from 'axios';

export const receiveMenu = createAsyncThunk('receive/Menu', async (obj) => {
    const data = axios.get(`http://localhost:5001/api/`).then(
      res => res.data)
    return data;
  });

export const openCloseMenu = createAction('OPEN_CLOSE_MENU');