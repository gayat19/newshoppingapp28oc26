import { ajax } from "rxjs/ajax";
import { baseurl } from "../misc/misc_const";

export const login = (username, password) => {
  const body = { username, password };
  const url = `${baseurl}/auth/login`;

  return ajax.post(url, body, { 'Content-Type': 'application/json' });
}