import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ResuscitationService } from './resuscitation.service';
import { Resuscitation } from './entities/resuscitation.entity';
import { CreateResuscitationInput } from './dto/create-resuscitation.input';
import { UpdateResuscitationInput } from './dto/update-resuscitation.input';

@Resolver(() => Resuscitation)
export class ResuscitationResolver {
  constructor(private readonly resuscitationService: ResuscitationService) {}

  @Mutation(() => Resuscitation)
  createResuscitation(@Args('createResuscitationInput') createResuscitationInput: CreateResuscitationInput) {
    return this.resuscitationService.create(createResuscitationInput);
  }

  @Query(() => [Resuscitation], { name: 'resuscitation' })
  findAll() {
    return this.resuscitationService.findAll();
  }

  @Query(() => Resuscitation, { name: 'resuscitation' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.resuscitationService.findOne(id);
  }

  @Mutation(() => Resuscitation)
  updateResuscitation(@Args('updateResuscitationInput') updateResuscitationInput: UpdateResuscitationInput) {
    return this.resuscitationService.update(updateResuscitationInput.id, updateResuscitationInput);
  }

  @Mutation(() => Resuscitation)
  removeResuscitation(@Args('id', { type: () => Int }) id: number) {
    return this.resuscitationService.remove(id);
  }
}
