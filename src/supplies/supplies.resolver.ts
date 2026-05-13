import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SuppliesService } from './supplies.service';
import { Supply } from './entities/supply.entity';
import { CreateSupplyInput } from './dto/create-supply.input';
import { UpdateSupplyInput } from './dto/update-supply.input';

@Resolver(() => Supply)
export class SuppliesResolver {
  constructor(private readonly suppliesService: SuppliesService) {}

  @Mutation(() => Supply)
  createSupply(@Args('createSupplyInput') createSupplyInput: CreateSupplyInput) {
    return this.suppliesService.create(createSupplyInput);
  }

  @Query(() => [Supply], { name: 'supplies' })
  findAll() {
    return this.suppliesService.findAll();
  }

  @Query(() => Supply, { name: 'supply' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.suppliesService.findOne(id);
  }

  @Mutation(() => Supply)
  updateSupply(@Args('updateSupplyInput') updateSupplyInput: UpdateSupplyInput) {
    return this.suppliesService.update(updateSupplyInput.id, updateSupplyInput);
  }

  @Mutation(() => Supply)
  removeSupply(@Args('id', { type: () => Int }) id: number) {
    return this.suppliesService.remove(id);
  }
}
