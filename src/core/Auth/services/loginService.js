import http from "../../../shared/service/httpService";

export const loginUser = (data) => {
  return http.post("/user/login", data);
};
