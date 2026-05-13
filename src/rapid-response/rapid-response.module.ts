import { Module } from '@nestjs/common';
import { RapidResponseService } from './rapid-response.service';
import { RapidResponseResolver } from './rapid-response.resolver';

@Module({
  providers: [RapidResponseResolver, RapidResponseService],
})
export class RapidResponseModule {}
