import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { RapidResponseService } from './rapid-response.service';
import { RapidResponse } from './entities/rapid-response.entity';
import { CreateRapidResponseInput } from './dto/create-rapid-response.input';
import { UpdateRapidResponseInput } from './dto/update-rapid-response.input';

@Resolver(() => RapidResponse)
export class RapidResponseResolver {
  constructor(private readonly rapidResponseService: RapidResponseService) {}

  @Mutation(() => RapidResponse)
  createRapidResponse(@Args('createRapidResponseInput') createRapidResponseInput: CreateRapidResponseInput) {
    return this.rapidResponseService.create(createRapidResponseInput);
  }

  @Query(() => [RapidResponse], { name: 'rapidResponse' })
  findAll() {
    return this.rapidResponseService.findAll();
  }

  @Query(() => RapidResponse, { name: 'rapidResponse' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.rapidResponseService.findOne(id);
  }

  @Mutation(() => RapidResponse)
  updateRapidResponse(@Args('updateRapidResponseInput') updateRapidResponseInput: UpdateRapidResponseInput) {
    return this.rapidResponseService.update(updateRapidResponseInput.id, updateRapidResponseInput);
  }

  @Mutation(() => RapidResponse)
  removeRapidResponse(@Args('id', { type: () => Int }) id: number) {
    return this.rapidResponseService.remove(id);
  }
}
