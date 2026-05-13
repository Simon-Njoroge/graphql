import { Injectable } from '@nestjs/common';
import { CreatePainAssessmentInput } from './dto/create-pain-assessment.input';
import { UpdatePainAssessmentInput } from './dto/update-pain-assessment.input';

@Injectable()
export class PainAssessmentService {
  create(createPainAssessmentInput: CreatePainAssessmentInput) {
    return 'This action adds a new painAssessment';
  }

  findAll() {
    return `This action returns all painAssessment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} painAssessment`;
  }

  update(id: number, updatePainAssessmentInput: UpdatePainAssessmentInput) {
    return `This action updates a #${id} painAssessment`;
  }

  remove(id: number) {
    return `This action removes a #${id} painAssessment`;
  }
}
