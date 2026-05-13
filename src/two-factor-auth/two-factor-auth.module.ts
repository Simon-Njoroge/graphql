import { Module } from '@nestjs/common';
import { TwoFactorAuthService } from './two-factor-auth.service';
import { TwoFactorAuthResolver } from './two-factor-auth.resolver';

@Module({
  providers: [TwoFactorAuthResolver, TwoFactorAuthService],
})
export class TwoFactorAuthModule {}
