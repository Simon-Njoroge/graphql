import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ShiftsService } from './shifts.service';
import { Shift } from './entities/shift.entity';
import { CreateShiftInput } from './dto/create-shift.input';
import { UpdateShiftInput } from './dto/update-shift.input';

@Resolver(() => Shift)
export class ShiftsResolver {
  constructor(private readonly shiftsService: ShiftsService) {}

  @Mutation(() => Shift)
  createShift(@Args('createShiftInput') createShiftInput: CreateShiftInput) {
    return this.shiftsService.create(createShiftInput);
  }

  @Query(() => [Shift], { name: 'shifts' })
  findAll() {
    return this.shiftsService.findAll();
  }

  @Query(() => Shift, { name: 'shift' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.shiftsService.findOne(id);
  }

  @Mutation(() => Shift)
  updateShift(@Args('updateShiftInput') updateShiftInput: UpdateShiftInput) {
    return this.shiftsService.update(updateShiftInput.id, updateShiftInput);
  }

  @Mutation(() => Shift)
  removeShift(@Args('id', { type: () => Int }) id: number) {
    return this.shiftsService.remove(id);
  }
}
