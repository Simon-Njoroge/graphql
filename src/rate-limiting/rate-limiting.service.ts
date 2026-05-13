import { Injectable } from '@nestjs/common';
import { CreateRateLimitingInput } from './dto/create-rate-limiting.input';
import { UpdateRateLimitingInput } from './dto/update-rate-limiting.input';

@Injectable()
export class RateLimitingService {
  create(createRateLimitingInput: CreateRateLimitingInput) {
    return 'This action adds a new rateLimiting';
  }

  findAll() {
    return `This action returns all rateLimiting`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rateLimiting`;
  }

  update(id: number, updateRateLimitingInput: UpdateRateLimitingInput) {
    return `This action updates a #${id} rateLimiting`;
  }

  remove(id: number) {
    return `This action removes a #${id} rateLimiting`;
  }
}
