import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BudgetsService } from './budgets.service';
import { Budget } from './entities/budget.entity';
import { CreateBudgetInput } from './dto/create-budget.input';
import { UpdateBudgetInput } from './dto/update-budget.input';

@Resolver(() => Budget)
export class BudgetsResolver {
  constructor(private readonly budgetsService: BudgetsService) {}

  @Mutation(() => Budget)
  createBudget(@Args('createBudgetInput') createBudgetInput: CreateBudgetInput) {
    return this.budgetsService.create(createBudgetInput);
  }

  @Query(() => [Budget], { name: 'budgets' })
  findAll() {
    return this.budgetsService.findAll();
  }

  @Query(() => Budget, { name: 'budget' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.budgetsService.findOne(id);
  }

  @Mutation(() => Budget)
  updateBudget(@Args('updateBudgetInput') updateBudgetInput: UpdateBudgetInput) {
    return this.budgetsService.update(updateBudgetInput.id, updateBudgetInput);
  }

  @Mutation(() => Budget)
  removeBudget(@Args('id', { type: () => Int }) id: number) {
    return this.budgetsService.remove(id);
  }
}
