import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { EmergencyService } from './emergency.service';
import { Emergency } from './entities/emergency.entity';
import { CreateEmergencyInput } from './dto/create-emergency.input';
import { UpdateEmergencyInput } from './dto/update-emergency.input';

@Resolver(() => Emergency)
export class EmergencyResolver {
  constructor(private readonly emergencyService: EmergencyService) {}

  @Mutation(() => Emergency)
  createEmergency(@Args('createEmergencyInput') createEmergencyInput: CreateEmergencyInput) {
    return this.emergencyService.create(createEmergencyInput);
  }

  @Query(() => [Emergency], { name: 'emergency' })
  findAll() {
    return this.emergencyService.findAll();
  }

  @Query(() => Emergency, { name: 'emergency' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.emergencyService.findOne(id);
  }

  @Mutation(() => Emergency)
  updateEmergency(@Args('updateEmergencyInput') updateEmergencyInput: UpdateEmergencyInput) {
    return this.emergencyService.update(updateEmergencyInput.id, updateEmergencyInput);
  }

  @Mutation(() => Emergency)
  removeEmergency(@Args('id', { type: () => Int }) id: number) {
    return this.emergencyService.remove(id);
  }
}
