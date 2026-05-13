import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TelemedicineService } from './telemedicine.service';
import { Telemedicine } from './entities/telemedicine.entity';
import { CreateTelemedicineInput } from './dto/create-telemedicine.input';
import { UpdateTelemedicineInput } from './dto/update-telemedicine.input';

@Resolver(() => Telemedicine)
export class TelemedicineResolver {
  constructor(private readonly telemedicineService: TelemedicineService) {}

  @Mutation(() => Telemedicine)
  createTelemedicine(@Args('createTelemedicineInput') createTelemedicineInput: CreateTelemedicineInput) {
    return this.telemedicineService.create(createTelemedicineInput);
  }

  @Query(() => [Telemedicine], { name: 'telemedicine' })
  findAll() {
    return this.telemedicineService.findAll();
  }

  @Query(() => Telemedicine, { name: 'telemedicine' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.telemedicineService.findOne(id);
  }

  @Mutation(() => Telemedicine)
  updateTelemedicine(@Args('updateTelemedicineInput') updateTelemedicineInput: UpdateTelemedicineInput) {
    return this.telemedicineService.update(updateTelemedicineInput.id, updateTelemedicineInput);
  }

  @Mutation(() => Telemedicine)
  removeTelemedicine(@Args('id', { type: () => Int }) id: number) {
    return this.telemedicineService.remove(id);
  }
}
