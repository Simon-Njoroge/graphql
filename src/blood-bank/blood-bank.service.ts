import { Injectable } from '@nestjs/common';
import { CreateBloodBankInput } from './dto/create-blood-bank.input';
import { UpdateBloodBankInput } from './dto/update-blood-bank.input';

@Injectable()
export class BloodBankService {
  create(createBloodBankInput: CreateBloodBankInput) {
    return 'This action adds a new bloodBank';
  }

  findAll() {
    return `This action returns all bloodBank`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bloodBank`;
  }

  update(id: number, updateBloodBankInput: UpdateBloodBankInput) {
    return `This action updates a #${id} bloodBank`;
  }

  remove(id: number) {
    return `This action removes a #${id} bloodBank`;
  }
}
