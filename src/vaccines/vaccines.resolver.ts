import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { VaccinesService } from './vaccines.service';
import { Vaccine } from './entities/vaccine.entity';
import { CreateVaccineInput } from './dto/create-vaccine.input';
import { UpdateVaccineInput } from './dto/update-vaccine.input';

@Resolver(() => Vaccine)
export class VaccinesResolver {
  constructor(private readonly vaccinesService: VaccinesService) {}

  @Mutation(() => Vaccine)
  createVaccine(@Args('createVaccineInput') createVaccineInput: CreateVaccineInput) {
    return this.vaccinesService.create(createVaccineInput);
  }

  @Query(() => [Vaccine], { name: 'vaccines' })
  findAll() {
    return this.vaccinesService.findAll();
  }

  @Query(() => Vaccine, { name: 'vaccine' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.vaccinesService.findOne(id);
  }

  @Mutation(() => Vaccine)
  updateVaccine(@Args('updateVaccineInput') updateVaccineInput: UpdateVaccineInput) {
    return this.vaccinesService.update(updateVaccineInput.id, updateVaccineInput);
  }

  @Mutation(() => Vaccine)
  removeVaccine(@Args('id', { type: () => Int }) id: number) {
    return this.vaccinesService.remove(id);
  }
}
