import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TriageService } from './triage.service';
import { Triage } from './entities/triage.entity';
import { CreateTriageInput } from './dto/create-triage.input';
import { UpdateTriageInput } from './dto/update-triage.input';

@Resolver(() => Triage)
export class TriageResolver {
  constructor(private readonly triageService: TriageService) {}

  @Mutation(() => Triage)
  createTriage(@Args('createTriageInput') createTriageInput: CreateTriageInput) {
    return this.triageService.create(createTriageInput);
  }

  @Query(() => [Triage], { name: 'triage' })
  findAll() {
    return this.triageService.findAll();
  }

  @Query(() => Triage, { name: 'triage' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.triageService.findOne(id);
  }

  @Mutation(() => Triage)
  updateTriage(@Args('updateTriageInput') updateTriageInput: UpdateTriageInput) {
    return this.triageService.update(updateTriageInput.id, updateTriageInput);
  }

  @Mutation(() => Triage)
  removeTriage(@Args('id', { type: () => Int }) id: number) {
    return this.triageService.remove(id);
  }
}
