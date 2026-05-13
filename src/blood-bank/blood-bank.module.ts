import { Module } from '@nestjs/common';
import { BloodBankService } from './blood-bank.service';
import { BloodBankResolver } from './blood-bank.resolver';

@Module({
  providers: [BloodBankResolver, BloodBankService],
})
export class BloodBankModule {}
