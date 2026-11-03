import { ajax } from "rxjs/ajax";
import { baseurl, baseUrlNew } from "../misc/misc_const";
import axios from "axios";

export const login = (username, password) => {
  const body = { username, password };
  const url = `${baseurl}/auth/login`;

  return ajax.post(url, body, { 'Content-Type': 'application/json' });
}

export const getPosts = () => {
  const url = `${baseUrlNew}/posts`;
  return axios.get(url);
}


