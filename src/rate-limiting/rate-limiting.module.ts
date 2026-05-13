import { Module } from '@nestjs/common';
import { RateLimitingService } from './rate-limiting.service';
import { RateLimitingResolver } from './rate-limiting.resolver';

@Module({
  providers: [RateLimitingResolver, RateLimitingService],
})
export class RateLimitingModule {}
