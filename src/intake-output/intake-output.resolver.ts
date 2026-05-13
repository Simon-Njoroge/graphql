import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { IntakeOutputService } from './intake-output.service';
import { IntakeOutput } from './entities/intake-output.entity';
import { CreateIntakeOutputInput } from './dto/create-intake-output.input';
import { UpdateIntakeOutputInput } from './dto/update-intake-output.input';

@Resolver(() => IntakeOutput)
export class IntakeOutputResolver {
  constructor(private readonly intakeOutputService: IntakeOutputService) {}

  @Mutation(() => IntakeOutput)
  createIntakeOutput(@Args('createIntakeOutputInput') createIntakeOutputInput: CreateIntakeOutputInput) {
    return this.intakeOutputService.create(createIntakeOutputInput);
  }

  @Query(() => [IntakeOutput], { name: 'intakeOutput' })
  findAll() {
    return this.intakeOutputService.findAll();
  }

  @Query(() => IntakeOutput, { name: 'intakeOutput' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.intakeOutputService.findOne(id);
  }

  @Mutation(() => IntakeOutput)
  updateIntakeOutput(@Args('updateIntakeOutputInput') updateIntakeOutputInput: UpdateIntakeOutputInput) {
    return this.intakeOutputService.update(updateIntakeOutputInput.id, updateIntakeOutputInput);
  }

  @Mutation(() => IntakeOutput)
  removeIntakeOutput(@Args('id', { type: () => Int }) id: number) {
    return this.intakeOutputService.remove(id);
  }
}
