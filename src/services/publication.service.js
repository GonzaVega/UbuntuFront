import { repository } from "@/services/shared/repository";

export class PublicationService {
    collection = '/publication'

    async find({ searchParams = {}, abortController }) {
        const path = this.collection;
    
        return await repository.find({ path, searchParams, abortController });
      }
}