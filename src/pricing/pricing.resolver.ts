import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PricingService } from './pricing.service';
import { Pricing } from './entities/pricing.entity';
import { CreatePricingInput } from './dto/create-pricing.input';
import { UpdatePricingInput } from './dto/update-pricing.input';

@Resolver(() => Pricing)
export class PricingResolver {
  constructor(private readonly pricingService: PricingService) {}

  @Mutation(() => Pricing)
  createPricing(@Args('createPricingInput') createPricingInput: CreatePricingInput) {
    return this.pricingService.create(createPricingInput);
  }

  @Query(() => [Pricing], { name: 'pricing' })
  findAll() {
    return this.pricingService.findAll();
  }

  @Query(() => Pricing, { name: 'pricing' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.pricingService.findOne(id);
  }

  @Mutation(() => Pricing)
  updatePricing(@Args('updatePricingInput') updatePricingInput: UpdatePricingInput) {
    return this.pricingService.update(updatePricingInput.id, updatePricingInput);
  }

  @Mutation(() => Pricing)
  removePricing(@Args('id', { type: () => Int }) id: number) {
    return this.pricingService.remove(id);
  }
}
