class UserService {
  constructor(service) {
    //this.service = "http://localhost:9000";
    this.service = "https://valorar.ar/api";
  }

  async RegisterUser(data){

    const registerObject = {
      username: data.email,
      company_name: data.company,
      name: data.name,
      password: data.password
    }

    const body = JSON.stringify(registerObject);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body
    };

    const response = await fetch(`${this.service}/user`, options);

    if(response.status !== 201) throw new Error('Register failed');

    return response.text();
  }

  async GetHistory(username) {
    const body = JSON.stringify({username: username});

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: body
    };

    const response = await fetch(`${this.service}/user/history`, options);

    if(response.status !== 200) throw new Error('Get history failed');

    return response.json();
  }

  async GetUsage(username) {
    const body = JSON.stringify({username: username});
    const token = localStorage.getItem('token');

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST",
        "Access-Control-Allow-Headers": "Content-Type",
        "Authorization": "Bearer " + token,
      },
      body: body
    };

    const response = await fetch(`${this.service}/user/usage`, options);

    if(response.status !== 200) throw new Error('Get usage failed');

    return await response.json();
  }

  GetUsers(limit = 0, offset = 0) {
    return new Promise(function (resolve, reject) {
      resolve([
        {
          id: 1,
          name: "Anna",
          email: "anna@example.com",
          phone: 113214971,
          created_at: "2021-01-01",
          sucursal: "Sucursal 1",
          role: "Administrador",
          status: "Activo",
        },
        {
          id: 2,
          name: "Jose",
          email: "jose@example.com",
          phone: 113214972,
          created_at: "2021-01-01",
          sucursal: "Sucursal 2",
          role: "Administrador",
          status: "Activo",
        },
      ]);

      reject(
        new Error(
          "Ocurrió un error al querer obtener el listado de usuarios. Contactese con el administrador del Sitio."
        )
      );
    });
  }

  GetDefaultUser() {
    return new Promise(function (resolve, reject) {
      resolve({
        id: 1,
        name: "Anna",
        email: "anna@example.com",
        phone: 113214971,
        created_at: "2021-01-01",
        sucursal: "Sucursal 1",
        role: "Administrador",
        status: "Activo",
      });
      reject(
        new Error(
          "Ocurrió un error al querer obtener el listado de usuarios. Contactese con el administrador del Sitio."
        )
      );
    });
  }
}

export default new UserService();
