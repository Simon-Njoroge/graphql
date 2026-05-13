import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CarePlansService } from './care-plans.service';
import { CarePlan } from './entities/care-plan.entity';
import { CreateCarePlanInput } from './dto/create-care-plan.input';
import { UpdateCarePlanInput } from './dto/update-care-plan.input';

@Resolver(() => CarePlan)
export class CarePlansResolver {
  constructor(private readonly carePlansService: CarePlansService) {}

  @Mutation(() => CarePlan)
  createCarePlan(@Args('createCarePlanInput') createCarePlanInput: CreateCarePlanInput) {
    return this.carePlansService.create(createCarePlanInput);
  }

  @Query(() => [CarePlan], { name: 'carePlans' })
  findAll() {
    return this.carePlansService.findAll();
  }

  @Query(() => CarePlan, { name: 'carePlan' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.carePlansService.findOne(id);
  }

  @Mutation(() => CarePlan)
  updateCarePlan(@Args('updateCarePlanInput') updateCarePlanInput: UpdateCarePlanInput) {
    return this.carePlansService.update(updateCarePlanInput.id, updateCarePlanInput);
  }

  @Mutation(() => CarePlan)
  removeCarePlan(@Args('id', { type: () => Int }) id: number) {
    return this.carePlansService.remove(id);
  }
}
