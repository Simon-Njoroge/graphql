import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MedicationsService } from './medications.service';
import { Medication } from './entities/medication.entity';
import { CreateMedicationInput } from './dto/create-medication.input';
import { UpdateMedicationInput } from './dto/update-medication.input';

@Resolver(() => Medication)
export class MedicationsResolver {
  constructor(private readonly medicationsService: MedicationsService) {}

  @Mutation(() => Medication)
  createMedication(@Args('createMedicationInput') createMedicationInput: CreateMedicationInput) {
    return this.medicationsService.create(createMedicationInput);
  }

  @Query(() => [Medication], { name: 'medications' })
  findAll() {
    return this.medicationsService.findAll();
  }

  @Query(() => Medication, { name: 'medication' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.medicationsService.findOne(id);
  }

  @Mutation(() => Medication)
  updateMedication(@Args('updateMedicationInput') updateMedicationInput: UpdateMedicationInput) {
    return this.medicationsService.update(updateMedicationInput.id, updateMedicationInput);
  }

  @Mutation(() => Medication)
  removeMedication(@Args('id', { type: () => Int }) id: number) {
    return this.medicationsService.remove(id);
  }
}
