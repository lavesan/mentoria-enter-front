import axios from "axios";

class AddressService {
  INSTANCE;

  async findByCep(cep) {
    return await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
  }

  static getInstance() {
    if (!this.INSTANCE) this.INSTANCE = new AddressService();
    return this.INSTANCE;
  }
}

export { AddressService };
