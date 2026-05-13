import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { NursesService } from './nurses.service';
import { Nurse } from './entities/nurse.entity';
import { CreateNurseInput } from './dto/create-nurse.input';
import { UpdateNurseInput } from './dto/update-nurse.input';

@Resolver(() => Nurse)
export class NursesResolver {
  constructor(private readonly nursesService: NursesService) {}

  @Mutation(() => Nurse)
  createNurse(@Args('createNurseInput') createNurseInput: CreateNurseInput) {
    return this.nursesService.create(createNurseInput);
  }

  @Query(() => [Nurse], { name: 'nurses' })
  findAll() {
    return this.nursesService.findAll();
  }

  @Query(() => Nurse, { name: 'nurse' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.nursesService.findOne(id);
  }

  @Mutation(() => Nurse)
  updateNurse(@Args('updateNurseInput') updateNurseInput: UpdateNurseInput) {
    return this.nursesService.update(updateNurseInput.id, updateNurseInput);
  }

  @Mutation(() => Nurse)
  removeNurse(@Args('id', { type: () => Int }) id: number) {
    return this.nursesService.remove(id);
  }
}
