import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TraumaService } from './trauma.service';
import { Trauma } from './entities/trauma.entity';
import { CreateTraumaInput } from './dto/create-trauma.input';
import { UpdateTraumaInput } from './dto/update-trauma.input';

@Resolver(() => Trauma)
export class TraumaResolver {
  constructor(private readonly traumaService: TraumaService) {}

  @Mutation(() => Trauma)
  createTrauma(@Args('createTraumaInput') createTraumaInput: CreateTraumaInput) {
    return this.traumaService.create(createTraumaInput);
  }

  @Query(() => [Trauma], { name: 'trauma' })
  findAll() {
    return this.traumaService.findAll();
  }

  @Query(() => Trauma, { name: 'trauma' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.traumaService.findOne(id);
  }

  @Mutation(() => Trauma)
  updateTrauma(@Args('updateTraumaInput') updateTraumaInput: UpdateTraumaInput) {
    return this.traumaService.update(updateTraumaInput.id, updateTraumaInput);
  }

  @Mutation(() => Trauma)
  removeTrauma(@Args('id', { type: () => Int }) id: number) {
    return this.traumaService.remove(id);
  }
}
