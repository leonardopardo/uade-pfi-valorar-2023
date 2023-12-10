class PriceService {
  constructor() {
    // this.service = `http://localhost:9000`;
    this.service = `https://valorar.ar/api/rent`;
  }

  async getPrice(data) {
    const body = {
      caracteristicas: data.features,
      amenities: data.amenities,
      antiguedad: data.antiquity,
      ambientes: data.ambients,
      cuartos: data.rooms,
      banos: data.bathrooms,
      superficie_total: data.surface,
      barrio: data.neighborhood,
    };

    const response = await fetch(this.service, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const result = await response.json();

    return result;
  }
}

export default new PriceService();
