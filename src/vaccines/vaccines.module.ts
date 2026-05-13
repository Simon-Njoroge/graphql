import { Module } from '@nestjs/common';
import { VaccinesService } from './vaccines.service';
import { VaccinesResolver } from './vaccines.resolver';

@Module({
  providers: [VaccinesResolver, VaccinesService],
})
export class VaccinesModule {}
