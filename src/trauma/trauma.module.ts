import { Module } from '@nestjs/common';
import { TraumaService } from './trauma.service';
import { TraumaResolver } from './trauma.resolver';

@Module({
  providers: [TraumaResolver, TraumaService],
})
export class TraumaModule {}
