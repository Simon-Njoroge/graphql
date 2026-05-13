import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PatientSatisfactionService } from './patient-satisfaction.service';
import { PatientSatisfaction } from './entities/patient-satisfaction.entity';
import { CreatePatientSatisfactionInput } from './dto/create-patient-satisfaction.input';
import { UpdatePatientSatisfactionInput } from './dto/update-patient-satisfaction.input';

@Resolver(() => PatientSatisfaction)
export class PatientSatisfactionResolver {
  constructor(private readonly patientSatisfactionService: PatientSatisfactionService) {}

  @Mutation(() => PatientSatisfaction)
  createPatientSatisfaction(@Args('createPatientSatisfactionInput') createPatientSatisfactionInput: CreatePatientSatisfactionInput) {
    return this.patientSatisfactionService.create(createPatientSatisfactionInput);
  }

  @Query(() => [PatientSatisfaction], { name: 'patientSatisfaction' })
  findAll() {
    return this.patientSatisfactionService.findAll();
  }

  @Query(() => PatientSatisfaction, { name: 'patientSatisfaction' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.patientSatisfactionService.findOne(id);
  }

  @Mutation(() => PatientSatisfaction)
  updatePatientSatisfaction(@Args('updatePatientSatisfactionInput') updatePatientSatisfactionInput: UpdatePatientSatisfactionInput) {
    return this.patientSatisfactionService.update(updatePatientSatisfactionInput.id, updatePatientSatisfactionInput);
  }

  @Mutation(() => PatientSatisfaction)
  removePatientSatisfaction(@Args('id', { type: () => Int }) id: number) {
    return this.patientSatisfactionService.remove(id);
  }
}
