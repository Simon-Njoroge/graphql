import { Module } from '@nestjs/common';
import { ApiKeysService } from './api-keys.service';
import { ApiKeysResolver } from './api-keys.resolver';

@Module({
  providers: [ApiKeysResolver, ApiKeysService],
})
export class ApiKeysModule {}
