import api from "./config";
import { Dispatch, SetStateAction } from 'react';

type Params = Dispatch<SetStateAction<object[]>>

export const getAll = async (setList: Params) => {
  try {
    const { data } = await api.get('/languages');

    setList(data);
  } catch (error) {
    console.log(error);
  }
};

export const getId = async (id: string) => {
  try {
    const data = await api.get(`/languages/${id}`);

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
