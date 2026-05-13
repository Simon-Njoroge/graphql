import { Injectable } from '@nestjs/common';
import { CreateSupplyInput } from './dto/create-supply.input';
import { UpdateSupplyInput } from './dto/update-supply.input';

@Injectable()
export class SuppliesService {
  create(createSupplyInput: CreateSupplyInput) {
    return 'This action adds a new supply';
  }

  findAll() {
    return `This action returns all supplies`;
  }

  findOne(id: number) {
    return `This action returns a #${id} supply`;
  }

  update(id: number, updateSupplyInput: UpdateSupplyInput) {
    return `This action updates a #${id} supply`;
  }

  remove(id: number) {
    return `This action removes a #${id} supply`;
  }
}
