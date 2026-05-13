import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MedicalRecordsService } from './medical-records.service';
import { MedicalRecord } from './entities/medical-record.entity';
import { CreateMedicalRecordInput } from './dto/create-medical-record.input';
import { UpdateMedicalRecordInput } from './dto/update-medical-record.input';

@Resolver(() => MedicalRecord)
export class MedicalRecordsResolver {
  constructor(private readonly medicalRecordsService: MedicalRecordsService) {}

  @Mutation(() => MedicalRecord)
  createMedicalRecord(@Args('createMedicalRecordInput') createMedicalRecordInput: CreateMedicalRecordInput) {
    return this.medicalRecordsService.create(createMedicalRecordInput);
  }

  @Query(() => [MedicalRecord], { name: 'medicalRecords' })
  findAll() {
    return this.medicalRecordsService.findAll();
  }

  @Query(() => MedicalRecord, { name: 'medicalRecord' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.medicalRecordsService.findOne(id);
  }

  @Mutation(() => MedicalRecord)
  updateMedicalRecord(@Args('updateMedicalRecordInput') updateMedicalRecordInput: UpdateMedicalRecordInput) {
    return this.medicalRecordsService.update(updateMedicalRecordInput.id, updateMedicalRecordInput);
  }

  @Mutation(() => MedicalRecord)
  removeMedicalRecord(@Args('id', { type: () => Int }) id: number) {
    return this.medicalRecordsService.remove(id);
  }
}
