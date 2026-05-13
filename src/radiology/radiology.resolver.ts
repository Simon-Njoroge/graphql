import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { RadiologyService } from './radiology.service';
import { Radiology } from './entities/radiology.entity';
import { CreateRadiologyInput } from './dto/create-radiology.input';
import { UpdateRadiologyInput } from './dto/update-radiology.input';

@Resolver(() => Radiology)
export class RadiologyResolver {
  constructor(private readonly radiologyService: RadiologyService) {}

  @Mutation(() => Radiology)
  createRadiology(@Args('createRadiologyInput') createRadiologyInput: CreateRadiologyInput) {
    return this.radiologyService.create(createRadiologyInput);
  }

  @Query(() => [Radiology], { name: 'radiology' })
  findAll() {
    return this.radiologyService.findAll();
  }

  @Query(() => Radiology, { name: 'radiology' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.radiologyService.findOne(id);
  }

  @Mutation(() => Radiology)
  updateRadiology(@Args('updateRadiologyInput') updateRadiologyInput: UpdateRadiologyInput) {
    return this.radiologyService.update(updateRadiologyInput.id, updateRadiologyInput);
  }

  @Mutation(() => Radiology)
  removeRadiology(@Args('id', { type: () => Int }) id: number) {
    return this.radiologyService.remove(id);
  }
}
