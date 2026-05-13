import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ImmunizationsService } from './immunizations.service';
import { Immunization } from './entities/immunization.entity';
import { CreateImmunizationInput } from './dto/create-immunization.input';
import { UpdateImmunizationInput } from './dto/update-immunization.input';

@Resolver(() => Immunization)
export class ImmunizationsResolver {
  constructor(private readonly immunizationsService: ImmunizationsService) {}

  @Mutation(() => Immunization)
  createImmunization(@Args('createImmunizationInput') createImmunizationInput: CreateImmunizationInput) {
    return this.immunizationsService.create(createImmunizationInput);
  }

  @Query(() => [Immunization], { name: 'immunizations' })
  findAll() {
    return this.immunizationsService.findAll();
  }

  @Query(() => Immunization, { name: 'immunization' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.immunizationsService.findOne(id);
  }

  @Mutation(() => Immunization)
  updateImmunization(@Args('updateImmunizationInput') updateImmunizationInput: UpdateImmunizationInput) {
    return this.immunizationsService.update(updateImmunizationInput.id, updateImmunizationInput);
  }

  @Mutation(() => Immunization)
  removeImmunization(@Args('id', { type: () => Int }) id: number) {
    return this.immunizationsService.remove(id);
  }
}
