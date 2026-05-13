import { Injectable } from '@nestjs/common';
import { CreatePricingInput } from './dto/create-pricing.input';
import { UpdatePricingInput } from './dto/update-pricing.input';

@Injectable()
export class PricingService {
  create(createPricingInput: CreatePricingInput) {
    return 'This action adds a new pricing';
  }

  findAll() {
    return `This action returns all pricing`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pricing`;
  }

  update(id: number, updatePricingInput: UpdatePricingInput) {
    return `This action updates a #${id} pricing`;
  }

  remove(id: number) {
    return `This action removes a #${id} pricing`;
  }
}
