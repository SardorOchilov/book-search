import {regex} from './regex'

export async function auth(username: string, type: "register" | "login") {
  if (regex(username)) {
    await new Promise((res) =>
      setTimeout(() => {
        res("");
      }, 3000)
    );
    if (type === "register") {
      const storage =
        (JSON.parse(localStorage.getItem("tokens")!) as string[]) || [];
      if (storage.indexOf(username) !== -1) {
        throw new Error("this user is already registered");
      }
      let tokens = storage || [];
      tokens.push(username);
      localStorage.setItem("tokens", JSON.stringify(tokens));
      localStorage.setItem("isAuth", "true");
      localStorage.setItem("username", username);
      return username;
    }
    if (type === "login") {
      const tokens =
        (JSON.parse(localStorage.getItem("tokens")!) as string[]) || [];
      if (tokens.indexOf(username) !== -1) {
        localStorage.setItem("isAuth", "true");
        localStorage.setItem("username", username);
      } else {
        throw new Error("user is not found");
      }
    }

    return username;
  }
  throw new Error("username is incorrect");
}

