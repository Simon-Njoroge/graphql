import { Module } from '@nestjs/common';
import { PurchaseOrdersService } from './purchase-orders.service';
import { PurchaseOrdersResolver } from './purchase-orders.resolver';

@Module({
  providers: [PurchaseOrdersResolver, PurchaseOrdersService],
})
export class PurchaseOrdersModule {}
