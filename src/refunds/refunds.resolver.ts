import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { RefundsService } from './refunds.service';
import { Refund } from './entities/refund.entity';
import { CreateRefundInput } from './dto/create-refund.input';
import { UpdateRefundInput } from './dto/update-refund.input';

@Resolver(() => Refund)
export class RefundsResolver {
  constructor(private readonly refundsService: RefundsService) {}

  @Mutation(() => Refund)
  createRefund(@Args('createRefundInput') createRefundInput: CreateRefundInput) {
    return this.refundsService.create(createRefundInput);
  }

  @Query(() => [Refund], { name: 'refunds' })
  findAll() {
    return this.refundsService.findAll();
  }

  @Query(() => Refund, { name: 'refund' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.refundsService.findOne(id);
  }

  @Mutation(() => Refund)
  updateRefund(@Args('updateRefundInput') updateRefundInput: UpdateRefundInput) {
    return this.refundsService.update(updateRefundInput.id, updateRefundInput);
  }

  @Mutation(() => Refund)
  removeRefund(@Args('id', { type: () => Int }) id: number) {
    return this.refundsService.remove(id);
  }
}
