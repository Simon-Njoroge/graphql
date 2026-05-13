import { Module } from '@nestjs/common';
import { CodeBlueService } from './code-blue.service';
import { CodeBlueResolver } from './code-blue.resolver';

@Module({
  providers: [CodeBlueResolver, CodeBlueService],
})
export class CodeBlueModule {}
