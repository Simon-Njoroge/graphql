import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { IcuService } from './icu.service';
import { Icu } from './entities/icu.entity';
import { CreateIcuInput } from './dto/create-icu.input';
import { UpdateIcuInput } from './dto/update-icu.input';

@Resolver(() => Icu)
export class IcuResolver {
  constructor(private readonly icuService: IcuService) {}

  @Mutation(() => Icu)
  createIcu(@Args('createIcuInput') createIcuInput: CreateIcuInput) {
    return this.icuService.create(createIcuInput);
  }

  @Query(() => [Icu], { name: 'icu' })
  findAll() {
    return this.icuService.findAll();
  }

  @Query(() => Icu, { name: 'icu' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.icuService.findOne(id);
  }

  @Mutation(() => Icu)
  updateIcu(@Args('updateIcuInput') updateIcuInput: UpdateIcuInput) {
    return this.icuService.update(updateIcuInput.id, updateIcuInput);
  }

  @Mutation(() => Icu)
  removeIcu(@Args('id', { type: () => Int }) id: number) {
    return this.icuService.remove(id);
  }
}
