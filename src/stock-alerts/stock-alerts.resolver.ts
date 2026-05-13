import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { StockAlertsService } from './stock-alerts.service';
import { StockAlert } from './entities/stock-alert.entity';
import { CreateStockAlertInput } from './dto/create-stock-alert.input';
import { UpdateStockAlertInput } from './dto/update-stock-alert.input';

@Resolver(() => StockAlert)
export class StockAlertsResolver {
  constructor(private readonly stockAlertsService: StockAlertsService) {}

  @Mutation(() => StockAlert)
  createStockAlert(@Args('createStockAlertInput') createStockAlertInput: CreateStockAlertInput) {
    return this.stockAlertsService.create(createStockAlertInput);
  }

  @Query(() => [StockAlert], { name: 'stockAlerts' })
  findAll() {
    return this.stockAlertsService.findAll();
  }

  @Query(() => StockAlert, { name: 'stockAlert' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.stockAlertsService.findOne(id);
  }

  @Mutation(() => StockAlert)
  updateStockAlert(@Args('updateStockAlertInput') updateStockAlertInput: UpdateStockAlertInput) {
    return this.stockAlertsService.update(updateStockAlertInput.id, updateStockAlertInput);
  }

  @Mutation(() => StockAlert)
  removeStockAlert(@Args('id', { type: () => Int }) id: number) {
    return this.stockAlertsService.remove(id);
  }
}
