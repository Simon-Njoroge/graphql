import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LabTestsService } from './lab-tests.service';
import { LabTest } from './entities/lab-test.entity';
import { CreateLabTestInput } from './dto/create-lab-test.input';
import { UpdateLabTestInput } from './dto/update-lab-test.input';

@Resolver(() => LabTest)
export class LabTestsResolver {
  constructor(private readonly labTestsService: LabTestsService) {}

  @Mutation(() => LabTest)
  createLabTest(@Args('createLabTestInput') createLabTestInput: CreateLabTestInput) {
    return this.labTestsService.create(createLabTestInput);
  }

  @Query(() => [LabTest], { name: 'labTests' })
  findAll() {
    return this.labTestsService.findAll();
  }

  @Query(() => LabTest, { name: 'labTest' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.labTestsService.findOne(id);
  }

  @Mutation(() => LabTest)
  updateLabTest(@Args('updateLabTestInput') updateLabTestInput: UpdateLabTestInput) {
    return this.labTestsService.update(updateLabTestInput.id, updateLabTestInput);
  }

  @Mutation(() => LabTest)
  removeLabTest(@Args('id', { type: () => Int }) id: number) {
    return this.labTestsService.remove(id);
  }
}
