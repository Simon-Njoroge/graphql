import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SurgeryService } from './surgery.service';
import { Surgery } from './entities/surgery.entity';
import { CreateSurgeryInput } from './dto/create-surgery.input';
import { UpdateSurgeryInput } from './dto/update-surgery.input';

@Resolver(() => Surgery)
export class SurgeryResolver {
  constructor(private readonly surgeryService: SurgeryService) {}

  @Mutation(() => Surgery)
  createSurgery(@Args('createSurgeryInput') createSurgeryInput: CreateSurgeryInput) {
    return this.surgeryService.create(createSurgeryInput);
  }

  @Query(() => [Surgery], { name: 'surgery' })
  findAll() {
    return this.surgeryService.findAll();
  }

  @Query(() => Surgery, { name: 'surgery' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.surgeryService.findOne(id);
  }

  @Mutation(() => Surgery)
  updateSurgery(@Args('updateSurgeryInput') updateSurgeryInput: UpdateSurgeryInput) {
    return this.surgeryService.update(updateSurgeryInput.id, updateSurgeryInput);
  }

  @Mutation(() => Surgery)
  removeSurgery(@Args('id', { type: () => Int }) id: number) {
    return this.surgeryService.remove(id);
  }
}
