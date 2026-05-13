import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BloodBankService } from './blood-bank.service';
import { BloodBank } from './entities/blood-bank.entity';
import { CreateBloodBankInput } from './dto/create-blood-bank.input';
import { UpdateBloodBankInput } from './dto/update-blood-bank.input';

@Resolver(() => BloodBank)
export class BloodBankResolver {
  constructor(private readonly bloodBankService: BloodBankService) {}

  @Mutation(() => BloodBank)
  createBloodBank(@Args('createBloodBankInput') createBloodBankInput: CreateBloodBankInput) {
    return this.bloodBankService.create(createBloodBankInput);
  }

  @Query(() => [BloodBank], { name: 'bloodBank' })
  findAll() {
    return this.bloodBankService.findAll();
  }

  @Query(() => BloodBank, { name: 'bloodBank' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.bloodBankService.findOne(id);
  }

  @Mutation(() => BloodBank)
  updateBloodBank(@Args('updateBloodBankInput') updateBloodBankInput: UpdateBloodBankInput) {
    return this.bloodBankService.update(updateBloodBankInput.id, updateBloodBankInput);
  }

  @Mutation(() => BloodBank)
  removeBloodBank(@Args('id', { type: () => Int }) id: number) {
    return this.bloodBankService.remove(id);
  }
}
