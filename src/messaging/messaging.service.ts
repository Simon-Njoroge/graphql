import { Injectable } from '@nestjs/common';
import { CreateMessagingInput } from './dto/create-messaging.input';
import { UpdateMessagingInput } from './dto/update-messaging.input';

@Injectable()
export class MessagingService {
  create(createMessagingInput: CreateMessagingInput) {
    return 'This action adds a new messaging';
  }

  findAll() {
    return `This action returns all messaging`;
  }

  findOne(id: number) {
    return `This action returns a #${id} messaging`;
  }

  update(id: number, updateMessagingInput: UpdateMessagingInput) {
    return `This action updates a #${id} messaging`;
  }

  remove(id: number) {
    return `This action removes a #${id} messaging`;
  }
}
