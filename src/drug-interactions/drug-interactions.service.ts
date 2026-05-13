import { Injectable } from '@nestjs/common';
import { CreateDrugInteractionInput } from './dto/create-drug-interaction.input';
import { UpdateDrugInteractionInput } from './dto/update-drug-interaction.input';

@Injectable()
export class DrugInteractionsService {
  create(createDrugInteractionInput: CreateDrugInteractionInput) {
    return 'This action adds a new drugInteraction';
  }

  findAll() {
    return `This action returns all drugInteractions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} drugInteraction`;
  }

  update(id: number, updateDrugInteractionInput: UpdateDrugInteractionInput) {
    return `This action updates a #${id} drugInteraction`;
  }

  remove(id: number) {
    return `This action removes a #${id} drugInteraction`;
  }
}
