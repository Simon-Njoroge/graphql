import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MedicalEquipmentService } from './medical-equipment.service';
import { MedicalEquipment } from './entities/medical-equipment.entity';
import { CreateMedicalEquipmentInput } from './dto/create-medical-equipment.input';
import { UpdateMedicalEquipmentInput } from './dto/update-medical-equipment.input';

@Resolver(() => MedicalEquipment)
export class MedicalEquipmentResolver {
  constructor(private readonly medicalEquipmentService: MedicalEquipmentService) {}

  @Mutation(() => MedicalEquipment)
  createMedicalEquipment(@Args('createMedicalEquipmentInput') createMedicalEquipmentInput: CreateMedicalEquipmentInput) {
    return this.medicalEquipmentService.create(createMedicalEquipmentInput);
  }

  @Query(() => [MedicalEquipment], { name: 'medicalEquipment' })
  findAll() {
    return this.medicalEquipmentService.findAll();
  }

  @Query(() => MedicalEquipment, { name: 'medicalEquipment' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.medicalEquipmentService.findOne(id);
  }

  @Mutation(() => MedicalEquipment)
  updateMedicalEquipment(@Args('updateMedicalEquipmentInput') updateMedicalEquipmentInput: UpdateMedicalEquipmentInput) {
    return this.medicalEquipmentService.update(updateMedicalEquipmentInput.id, updateMedicalEquipmentInput);
  }

  @Mutation(() => MedicalEquipment)
  removeMedicalEquipment(@Args('id', { type: () => Int }) id: number) {
    return this.medicalEquipmentService.remove(id);
  }
}
