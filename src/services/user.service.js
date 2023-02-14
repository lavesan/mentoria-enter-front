import axios from "axios";

const baseURL = "https://81d7f810-cc14-4eb8-b752-263b6080c113.mock.pstmn.io";

const request = axios.create({
  baseURL
});

class UserService {
  INSTANCE;

  createUser({ name, email }) {
    return request.post("/user", { name, email });
  }

  findUser({ id }) {
    return request.get("/user", { params: { id } });
  }

  ping() {
    return request.get("/");
  }

  static getInstance() {
    if (!this.INSTANCE) this.INSTANCE = new UserService();
    return this.INSTANCE;
  }
}

export { UserService };
