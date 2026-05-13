import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { VitalsService } from './vitals.service';
import { Vital } from './entities/vital.entity';
import { CreateVitalInput } from './dto/create-vital.input';
import { UpdateVitalInput } from './dto/update-vital.input';

@Resolver(() => Vital)
export class VitalsResolver {
  constructor(private readonly vitalsService: VitalsService) {}

  @Mutation(() => Vital)
  createVital(@Args('createVitalInput') createVitalInput: CreateVitalInput) {
    return this.vitalsService.create(createVitalInput);
  }

  @Query(() => [Vital], { name: 'vitals' })
  findAll() {
    return this.vitalsService.findAll();
  }

  @Query(() => Vital, { name: 'vital' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.vitalsService.findOne(id);
  }

  @Mutation(() => Vital)
  updateVital(@Args('updateVitalInput') updateVitalInput: UpdateVitalInput) {
    return this.vitalsService.update(updateVitalInput.id, updateVitalInput);
  }

  @Mutation(() => Vital)
  removeVital(@Args('id', { type: () => Int }) id: number) {
    return this.vitalsService.remove(id);
  }
}
