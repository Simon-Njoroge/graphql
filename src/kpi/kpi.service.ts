import { Injectable } from '@nestjs/common';
import { CreateKpiInput } from './dto/create-kpi.input';
import { UpdateKpiInput } from './dto/update-kpi.input';

@Injectable()
export class KpiService {
  create(createKpiInput: CreateKpiInput) {
    return 'This action adds a new kpi';
  }

  findAll() {
    return `This action returns all kpi`;
  }

  findOne(id: number) {
    return `This action returns a #${id} kpi`;
  }

  update(id: number, updateKpiInput: UpdateKpiInput) {
    return `This action updates a #${id} kpi`;
  }

  remove(id: number) {
    return `This action removes a #${id} kpi`;
  }
}
