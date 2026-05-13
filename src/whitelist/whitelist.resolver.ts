import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { WhitelistService } from './whitelist.service';
import { Whitelist } from './entities/whitelist.entity';
import { CreateWhitelistInput } from './dto/create-whitelist.input';
import { UpdateWhitelistInput } from './dto/update-whitelist.input';

@Resolver(() => Whitelist)
export class WhitelistResolver {
  constructor(private readonly whitelistService: WhitelistService) {}

  @Mutation(() => Whitelist)
  createWhitelist(@Args('createWhitelistInput') createWhitelistInput: CreateWhitelistInput) {
    return this.whitelistService.create(createWhitelistInput);
  }

  @Query(() => [Whitelist], { name: 'whitelist' })
  findAll() {
    return this.whitelistService.findAll();
  }

  @Query(() => Whitelist, { name: 'whitelist' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.whitelistService.findOne(id);
  }

  @Mutation(() => Whitelist)
  updateWhitelist(@Args('updateWhitelistInput') updateWhitelistInput: UpdateWhitelistInput) {
    return this.whitelistService.update(updateWhitelistInput.id, updateWhitelistInput);
  }

  @Mutation(() => Whitelist)
  removeWhitelist(@Args('id', { type: () => Int }) id: number) {
    return this.whitelistService.remove(id);
  }
}
