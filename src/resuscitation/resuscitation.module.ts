import { Module } from '@nestjs/common';
import { ResuscitationService } from './resuscitation.service';
import { ResuscitationResolver } from './resuscitation.resolver';

@Module({
  providers: [ResuscitationResolver, ResuscitationService],
})
export class ResuscitationModule {}
