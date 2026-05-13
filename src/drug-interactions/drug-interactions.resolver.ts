import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DrugInteractionsService } from './drug-interactions.service';
import { DrugInteraction } from './entities/drug-interaction.entity';
import { CreateDrugInteractionInput } from './dto/create-drug-interaction.input';
import { UpdateDrugInteractionInput } from './dto/update-drug-interaction.input';

@Resolver(() => DrugInteraction)
export class DrugInteractionsResolver {
  constructor(private readonly drugInteractionsService: DrugInteractionsService) {}

  @Mutation(() => DrugInteraction)
  createDrugInteraction(@Args('createDrugInteractionInput') createDrugInteractionInput: CreateDrugInteractionInput) {
    return this.drugInteractionsService.create(createDrugInteractionInput);
  }

  @Query(() => [DrugInteraction], { name: 'drugInteractions' })
  findAll() {
    return this.drugInteractionsService.findAll();
  }

  @Query(() => DrugInteraction, { name: 'drugInteraction' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.drugInteractionsService.findOne(id);
  }

  @Mutation(() => DrugInteraction)
  updateDrugInteraction(@Args('updateDrugInteractionInput') updateDrugInteractionInput: UpdateDrugInteractionInput) {
    return this.drugInteractionsService.update(updateDrugInteractionInput.id, updateDrugInteractionInput);
  }

  @Mutation(() => DrugInteraction)
  removeDrugInteraction(@Args('id', { type: () => Int }) id: number) {
    return this.drugInteractionsService.remove(id);
  }
}
