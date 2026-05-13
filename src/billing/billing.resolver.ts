import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BillingService } from './billing.service';
import { Billing } from './entities/billing.entity';
import { CreateBillingInput } from './dto/create-billing.input';
import { UpdateBillingInput } from './dto/update-billing.input';

@Resolver(() => Billing)
export class BillingResolver {
  constructor(private readonly billingService: BillingService) {}

  @Mutation(() => Billing)
  createBilling(@Args('createBillingInput') createBillingInput: CreateBillingInput) {
    return this.billingService.create(createBillingInput);
  }

  @Query(() => [Billing], { name: 'billing' })
  findAll() {
    return this.billingService.findAll();
  }

  @Query(() => Billing, { name: 'billing' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.billingService.findOne(id);
  }

  @Mutation(() => Billing)
  updateBilling(@Args('updateBillingInput') updateBillingInput: UpdateBillingInput) {
    return this.billingService.update(updateBillingInput.id, updateBillingInput);
  }

  @Mutation(() => Billing)
  removeBilling(@Args('id', { type: () => Int }) id: number) {
    return this.billingService.remove(id);
  }
}
