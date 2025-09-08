import api from "../lib/axios";

export const userService = {
  register: (data: { name: string; email: string; password: string }) =>
    api.post("/users/register", data).then((res) => res.data),

  login: (data: { email: string; password: string }) =>
    api.post("/users/login", data).then((res) => res.data),

  profile: () => api.get("/users/profile").then((res) => res.data),

  logout: () => api.post("/users/logout").then((res) => res.data),
};
