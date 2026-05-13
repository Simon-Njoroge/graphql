import { Injectable } from '@nestjs/common';
import { CreateApiKeyInput } from './dto/create-api-key.input';
import { UpdateApiKeyInput } from './dto/update-api-key.input';

@Injectable()
export class ApiKeysService {
  create(createApiKeyInput: CreateApiKeyInput) {
    return 'This action adds a new apiKey';
  }

  findAll() {
    return `This action returns all apiKeys`;
  }

  findOne(id: number) {
    return `This action returns a #${id} apiKey`;
  }

  update(id: number, updateApiKeyInput: UpdateApiKeyInput) {
    return `This action updates a #${id} apiKey`;
  }

  remove(id: number) {
    return `This action removes a #${id} apiKey`;
  }
}
