import { repository } from '@/services/shared/repository';

export class PublicationService {
  collection = '/publication';

  async find({ abortController }) {
    const path = this.collection;

    return await repository.find({ path, abortController });
  }

  async findOne({ id, abortController }) {
    const path = this.collection + `/${id}`;

    return await repository.findOne({ path, abortController });
  }

  async findActive({ abortController }) {
    const path = this.collection + '/activas';

    return await repository.find({ path, abortController });
  }

  async findLastTen({ abortController }) {
    const path = this.collection + '/ultimas10';

    return await repository.find({ path, abortController });
  }

  //creates a publication, auth token must be included.
  async create({ payload, token, abortController }) {
    const path = this.collection + `/create`;
    const authenticatedPayload = [...payload, token];

    return repository.save({ path, authenticatedPayload, abortController });
  }

  //edits a publication, auth token must be included.
  async update({ id, token, payload, abortController }) {
    const path = this.collection + `/change/${id}`;
    const authenticatedPayload = [...payload, token];

    return repository.update({ path, authenticatedPayload, abortController });
  }

  // deletes a publication, auth token must be included.No endpoint created so far.
  // async delete({ id, token, payload, abortController }) {
  //   const path = this.collection + `/delete/${id}`;
  //   const authenticatedPayload = [...payload, token];

  //   return repository.delete({ path, authenticatedPayload, abortController });
  // }
}
