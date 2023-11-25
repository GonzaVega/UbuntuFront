import { HttpAdapter } from '@/services/shared/http-adapter';

class Repository {
  #http = new HttpAdapter();

  async find({ path = '', searchParams = {}, abortController }) {
    return await this.#http.get({ path, searchParams, abortController });
  }

  async findOne({ id }) {
    return await this.#http.get({ path: id });
  }

  async save({ payload }) {
    return payload;
  }

  async update({ id, payload }) {
    return { id, payload };
  }

  async delete({ id }) {
    return id;
  }
}

export const repository = new Repository();
