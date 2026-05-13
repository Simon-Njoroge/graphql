import { Module } from '@nestjs/common';
import { ImmunizationsService } from './immunizations.service';
import { ImmunizationsResolver } from './immunizations.resolver';

@Module({
  providers: [ImmunizationsResolver, ImmunizationsService],
})
export class ImmunizationsModule {}
