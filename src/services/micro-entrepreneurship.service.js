import { repository } from '@/services/shared/repository';

export class MicroEntrepreneurshipService {
  collection = '/microentrepreneurship';

  async find({ path = '', searchParams = {} }) {
    path = this.collection + path;

    return await repository.find({ path, searchParams });
  }

  async findOne({ id }) {
    id = this.collection + '/' + id;

    return await repository.findOne({ id });
  }

  async create({ payload }) {
    return repository.save({ payload });
  }

  async update({ id, payload }) {
    return repository.update({ id, payload });
  }

  async delete({ id }) {
    return repository.delete({ id });
  }
}
