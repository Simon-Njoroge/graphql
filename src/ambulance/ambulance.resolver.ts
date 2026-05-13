import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AmbulanceService } from './ambulance.service';
import { Ambulance } from './entities/ambulance.entity';
import { CreateAmbulanceInput } from './dto/create-ambulance.input';
import { UpdateAmbulanceInput } from './dto/update-ambulance.input';

@Resolver(() => Ambulance)
export class AmbulanceResolver {
  constructor(private readonly ambulanceService: AmbulanceService) {}

  @Mutation(() => Ambulance)
  createAmbulance(@Args('createAmbulanceInput') createAmbulanceInput: CreateAmbulanceInput) {
    return this.ambulanceService.create(createAmbulanceInput);
  }

  @Query(() => [Ambulance], { name: 'ambulance' })
  findAll() {
    return this.ambulanceService.findAll();
  }

  @Query(() => Ambulance, { name: 'ambulance' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.ambulanceService.findOne(id);
  }

  @Mutation(() => Ambulance)
  updateAmbulance(@Args('updateAmbulanceInput') updateAmbulanceInput: UpdateAmbulanceInput) {
    return this.ambulanceService.update(updateAmbulanceInput.id, updateAmbulanceInput);
  }

  @Mutation(() => Ambulance)
  removeAmbulance(@Args('id', { type: () => Int }) id: number) {
    return this.ambulanceService.remove(id);
  }
}
