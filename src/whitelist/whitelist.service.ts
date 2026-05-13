import { Injectable } from '@nestjs/common';
import { CreateWhitelistInput } from './dto/create-whitelist.input';
import { UpdateWhitelistInput } from './dto/update-whitelist.input';

@Injectable()
export class WhitelistService {
  create(createWhitelistInput: CreateWhitelistInput) {
    return 'This action adds a new whitelist';
  }

  findAll() {
    return `This action returns all whitelist`;
  }

  findOne(id: number) {
    return `This action returns a #${id} whitelist`;
  }

  update(id: number, updateWhitelistInput: UpdateWhitelistInput) {
    return `This action updates a #${id} whitelist`;
  }

  remove(id: number) {
    return `This action removes a #${id} whitelist`;
  }
}
