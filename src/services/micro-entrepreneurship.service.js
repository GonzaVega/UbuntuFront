import { repository } from '@/services/shared/repository';

export class MicroEntrepreneurshipService {
  collection = '/microentrepreneurship';

  async find({ searchParams = {}, abortController }) {
    const path = this.collection;

    return await repository.find({ path, searchParams, abortController });
  }

  async findOne({ id, abortController }) {
    id = this.collection + '/' + id;

    return await repository.findOne({ id, abortController });
  }

  async findLatest({ searchParams = {}, abortController }) {
    const path = this.collection + '/count';

    return await repository.find({ path, searchParams, abortController });
  }

  async create({ payload, abortController }) {
    const path = this.collection;

    return repository.save({ path, payload, abortController });
  }

  async update({ id, payload, abortController }) {
    id = this.collection + '/' + id;

    return repository.update({ id, payload, abortController });
  }

  async delete({ id, abortController }) {
    id = this.collection + '/' + id;

    return repository.delete({ id, abortController });
  }
  async findManaged({ searchParams = {}, abortController }) {
    const path = this.collection + '/count/active';

    return await repository.find({ path, searchParams, abortController });
  }

  async findUnmanaged({ searchParams = {}, abortController }) {
    const path = this.collection + '/count/notactive';

    return await repository.find({ path, searchParams, abortController });
  }
}
