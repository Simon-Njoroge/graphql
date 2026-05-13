import { Injectable } from '@nestjs/common';
import { CreateTwoFactorAuthInput } from './dto/create-two-factor-auth.input';
import { UpdateTwoFactorAuthInput } from './dto/update-two-factor-auth.input';

@Injectable()
export class TwoFactorAuthService {
  create(createTwoFactorAuthInput: CreateTwoFactorAuthInput) {
    return 'This action adds a new twoFactorAuth';
  }

  findAll() {
    return `This action returns all twoFactorAuth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} twoFactorAuth`;
  }

  update(id: number, updateTwoFactorAuthInput: UpdateTwoFactorAuthInput) {
    return `This action updates a #${id} twoFactorAuth`;
  }

  remove(id: number) {
    return `This action removes a #${id} twoFactorAuth`;
  }
}
