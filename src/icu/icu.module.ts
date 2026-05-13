import { Module } from '@nestjs/common';
import { IcuService } from './icu.service';
import { IcuResolver } from './icu.resolver';

@Module({
  providers: [IcuResolver, IcuService],
})
export class IcuModule {}
