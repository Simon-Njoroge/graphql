import { Module } from '@nestjs/common';
import { DrugInteractionsService } from './drug-interactions.service';
import { DrugInteractionsResolver } from './drug-interactions.resolver';

@Module({
  providers: [DrugInteractionsResolver, DrugInteractionsService],
})
export class DrugInteractionsModule {}
