import { Module } from '@nestjs/common';
import { WhitelistService } from './whitelist.service';
import { WhitelistResolver } from './whitelist.resolver';

@Module({
  providers: [WhitelistResolver, WhitelistService],
})
export class WhitelistModule {}
