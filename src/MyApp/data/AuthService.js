class AuthService {
  constructor() {
    //this.service = "http://localhost:9000";
    this.service = "https://valorar.ar/api";
  }

  async Login(username, password) {
    const body = JSON.stringify({
      username: username,
      password: password,
    });

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    };

    const response = await fetch(`${this.service}/auth/login`, options);

    if (response.status !== 200) throw new Error("Error al iniciar sesión.");

    const result = await response.json();

    return result;
  }

  async IsValid(username, token) {
    const body = JSON.stringify({
      username: username,
      token: token,
    });

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: body,
    };

    const response = await fetch(`${this.service}/auth/validate`, options);

    if (response.status !== 200)
      throw new Error("La información de sesión no es válida.");

    const result = await response.json();

    return result;
  }
}

export default new AuthService();
