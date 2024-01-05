import { HttpAdapter } from '@/services/shared/http-adapter';

class Repository {
  #http = new HttpAdapter();

  async find({ path = '', searchParams = {}, abortController }) {
    return await this.#http.get({ path, searchParams, abortController });
  }

  async findOne({ id, abortController }) {
    return await this.#http.get({ path: id, abortController });
  }

  async save({ path, payload, abortController }) {
    return await this.#http.post({ path, payload, abortController });
  }

  async update({ id, payload, abortController }) {
    return await this.#http.patch({ path: id, payload, abortController });
  }

  async delete({ id, abortController }) {
    return await this.#http.delete({ path: id, abortController });
  }
}

export const repository = new Repository();
