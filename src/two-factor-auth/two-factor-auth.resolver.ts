import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TwoFactorAuthService } from './two-factor-auth.service';
import { TwoFactorAuth } from './entities/two-factor-auth.entity';
import { CreateTwoFactorAuthInput } from './dto/create-two-factor-auth.input';
import { UpdateTwoFactorAuthInput } from './dto/update-two-factor-auth.input';

@Resolver(() => TwoFactorAuth)
export class TwoFactorAuthResolver {
  constructor(private readonly twoFactorAuthService: TwoFactorAuthService) {}

  @Mutation(() => TwoFactorAuth)
  createTwoFactorAuth(@Args('createTwoFactorAuthInput') createTwoFactorAuthInput: CreateTwoFactorAuthInput) {
    return this.twoFactorAuthService.create(createTwoFactorAuthInput);
  }

  @Query(() => [TwoFactorAuth], { name: 'twoFactorAuth' })
  findAll() {
    return this.twoFactorAuthService.findAll();
  }

  @Query(() => TwoFactorAuth, { name: 'twoFactorAuth' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.twoFactorAuthService.findOne(id);
  }

  @Mutation(() => TwoFactorAuth)
  updateTwoFactorAuth(@Args('updateTwoFactorAuthInput') updateTwoFactorAuthInput: UpdateTwoFactorAuthInput) {
    return this.twoFactorAuthService.update(updateTwoFactorAuthInput.id, updateTwoFactorAuthInput);
  }

  @Mutation(() => TwoFactorAuth)
  removeTwoFactorAuth(@Args('id', { type: () => Int }) id: number) {
    return this.twoFactorAuthService.remove(id);
  }
}
