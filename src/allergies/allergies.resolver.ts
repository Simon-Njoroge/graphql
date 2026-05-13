import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AllergiesService } from './allergies.service';
import { Allergy } from './entities/allergy.entity';
import { CreateAllergyInput } from './dto/create-allergy.input';
import { UpdateAllergyInput } from './dto/update-allergy.input';

@Resolver(() => Allergy)
export class AllergiesResolver {
  constructor(private readonly allergiesService: AllergiesService) {}

  @Mutation(() => Allergy)
  createAllergy(@Args('createAllergyInput') createAllergyInput: CreateAllergyInput) {
    return this.allergiesService.create(createAllergyInput);
  }

  @Query(() => [Allergy], { name: 'allergies' })
  findAll() {
    return this.allergiesService.findAll();
  }

  @Query(() => Allergy, { name: 'allergy' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.allergiesService.findOne(id);
  }

  @Mutation(() => Allergy)
  updateAllergy(@Args('updateAllergyInput') updateAllergyInput: UpdateAllergyInput) {
    return this.allergiesService.update(updateAllergyInput.id, updateAllergyInput);
  }

  @Mutation(() => Allergy)
  removeAllergy(@Args('id', { type: () => Int }) id: number) {
    return this.allergiesService.remove(id);
  }
}
