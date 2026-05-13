import { Injectable } from '@nestjs/common';
import { CreateAmbulanceInput } from './dto/create-ambulance.input';
import { UpdateAmbulanceInput } from './dto/update-ambulance.input';

@Injectable()
export class AmbulanceService {
  create(createAmbulanceInput: CreateAmbulanceInput) {
    return 'This action adds a new ambulance';
  }

  findAll() {
    return `This action returns all ambulance`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ambulance`;
  }

  update(id: number, updateAmbulanceInput: UpdateAmbulanceInput) {
    return `This action updates a #${id} ambulance`;
  }

  remove(id: number) {
    return `This action removes a #${id} ambulance`;
  }
}
