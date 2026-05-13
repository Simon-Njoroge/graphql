import { Injectable } from '@nestjs/common';
import { CreateRefundInput } from './dto/create-refund.input';
import { UpdateRefundInput } from './dto/update-refund.input';

@Injectable()
export class RefundsService {
  create(createRefundInput: CreateRefundInput) {
    return 'This action adds a new refund';
  }

  findAll() {
    return `This action returns all refunds`;
  }

  findOne(id: number) {
    return `This action returns a #${id} refund`;
  }

  update(id: number, updateRefundInput: UpdateRefundInput) {
    return `This action updates a #${id} refund`;
  }

  remove(id: number) {
    return `This action removes a #${id} refund`;
  }
}
