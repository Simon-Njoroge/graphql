import { Module } from '@nestjs/common';
import { StockAlertsService } from './stock-alerts.service';
import { StockAlertsResolver } from './stock-alerts.resolver';

@Module({
  providers: [StockAlertsResolver, StockAlertsService],
})
export class StockAlertsModule {}
