class AuthService {
  constructor() {
    this.service = process.env.REACT_APP_API_URL;
  }

  async Login(username, password) {
    
    const body = JSON.stringify({
      username: username,
      password: password,
    });

    const headers = {
        "Content-Type": "application/json",
    };

    const options = {
        method: "POST",
        mode: "cors",
        body: body,
        redirect: "follow",
    };

    const response = await fetch(`${this.service}/auth/login`, options);

    return response.text();
  }
}

export default new AuthService();
