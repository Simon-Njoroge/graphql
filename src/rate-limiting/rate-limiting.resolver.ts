import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { RateLimitingService } from './rate-limiting.service';
import { RateLimiting } from './entities/rate-limiting.entity';
import { CreateRateLimitingInput } from './dto/create-rate-limiting.input';
import { UpdateRateLimitingInput } from './dto/update-rate-limiting.input';

@Resolver(() => RateLimiting)
export class RateLimitingResolver {
  constructor(private readonly rateLimitingService: RateLimitingService) {}

  @Mutation(() => RateLimiting)
  createRateLimiting(@Args('createRateLimitingInput') createRateLimitingInput: CreateRateLimitingInput) {
    return this.rateLimitingService.create(createRateLimitingInput);
  }

  @Query(() => [RateLimiting], { name: 'rateLimiting' })
  findAll() {
    return this.rateLimitingService.findAll();
  }

  @Query(() => RateLimiting, { name: 'rateLimiting' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.rateLimitingService.findOne(id);
  }

  @Mutation(() => RateLimiting)
  updateRateLimiting(@Args('updateRateLimitingInput') updateRateLimitingInput: UpdateRateLimitingInput) {
    return this.rateLimitingService.update(updateRateLimitingInput.id, updateRateLimitingInput);
  }

  @Mutation(() => RateLimiting)
  removeRateLimiting(@Args('id', { type: () => Int }) id: number) {
    return this.rateLimitingService.remove(id);
  }
}
