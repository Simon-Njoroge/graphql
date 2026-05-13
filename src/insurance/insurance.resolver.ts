import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { InsuranceService } from './insurance.service';
import { Insurance } from './entities/insurance.entity';
import { CreateInsuranceInput } from './dto/create-insurance.input';
import { UpdateInsuranceInput } from './dto/update-insurance.input';

@Resolver(() => Insurance)
export class InsuranceResolver {
  constructor(private readonly insuranceService: InsuranceService) {}

  @Mutation(() => Insurance)
  createInsurance(@Args('createInsuranceInput') createInsuranceInput: CreateInsuranceInput) {
    return this.insuranceService.create(createInsuranceInput);
  }

  @Query(() => [Insurance], { name: 'insurance' })
  findAll() {
    return this.insuranceService.findAll();
  }

  @Query(() => Insurance, { name: 'insurance' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.insuranceService.findOne(id);
  }

  @Mutation(() => Insurance)
  updateInsurance(@Args('updateInsuranceInput') updateInsuranceInput: UpdateInsuranceInput) {
    return this.insuranceService.update(updateInsuranceInput.id, updateInsuranceInput);
  }

  @Mutation(() => Insurance)
  removeInsurance(@Args('id', { type: () => Int }) id: number) {
    return this.insuranceService.remove(id);
  }
}
