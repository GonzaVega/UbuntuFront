import { repository } from '@/services/shared/repository';

export class MessageService {
  collection = '/message';

  // no 'all messages' endpoint created so far.
  // async find({ searchParams = {}, abortController }) {
  //   const path = '/all';

  //   return await repository.find({ path, searchParams, abortController });
  // }

  async findOne({ id, abortController }) {
    const path = this.collection + `/getMessage/${id}`;

    return await repository.findOne({ path, abortController });
  }

  //get messages by microentrepreneurships.
  async findByMicroentrepreneurship({ microentrepreneurshipId, abortController }) {
    const path =
      this.collection + `/getMessagesByMicroentrepreneurshipId/${microentrepreneurshipId}`;

    return await repository.find({ path, abortController });
  }
  //creates messages assigned to a microentrepreneurship
  async create({ payload, microentrepreneurshipId, abortController }) {
    const path = this.collection + `/save/${microentrepreneurshipId}`;

    return repository.save({ path, payload, abortController });
  }

  async update({ id, payload, abortController }) {
    const path = this.collection + `/${id}/change/`;

    return repository.update({ path, payload, abortController });
  }

  //no 'delete messages' endpoint created so far.
  // async delete({ id, abortController }) {
  //   id = this.collection + '/' + id;

  //   return repository.delete({ id, abortController });
  // }
}
