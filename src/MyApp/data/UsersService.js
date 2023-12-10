class UserService {
  constructor(service) {
    this.service = process.env.REACT_APP_API_URL;
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

    const response = await fetch(`http://localhost:9000/user`, options);

    if(response.status !== 201) throw new Error('Register failed');

    return response.text();
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
