import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { WardsService } from './wards.service';
import { Ward } from './entities/ward.entity';
import { CreateWardInput } from './dto/create-ward.input';
import { UpdateWardInput } from './dto/update-ward.input';

@Resolver(() => Ward)
export class WardsResolver {
  constructor(private readonly wardsService: WardsService) {}

  @Mutation(() => Ward)
  createWard(@Args('createWardInput') createWardInput: CreateWardInput) {
    return this.wardsService.create(createWardInput);
  }

  @Query(() => [Ward], { name: 'wards' })
  findAll() {
    return this.wardsService.findAll();
  }

  @Query(() => Ward, { name: 'ward' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.wardsService.findOne(id);
  }

  @Mutation(() => Ward)
  updateWard(@Args('updateWardInput') updateWardInput: UpdateWardInput) {
    return this.wardsService.update(updateWardInput.id, updateWardInput);
  }

  @Mutation(() => Ward)
  removeWard(@Args('id', { type: () => Int }) id: number) {
    return this.wardsService.remove(id);
  }
}
