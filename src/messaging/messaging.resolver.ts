import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MessagingService } from './messaging.service';
import { Messaging } from './entities/messaging.entity';
import { CreateMessagingInput } from './dto/create-messaging.input';
import { UpdateMessagingInput } from './dto/update-messaging.input';

@Resolver(() => Messaging)
export class MessagingResolver {
  constructor(private readonly messagingService: MessagingService) {}

  @Mutation(() => Messaging)
  createMessaging(@Args('createMessagingInput') createMessagingInput: CreateMessagingInput) {
    return this.messagingService.create(createMessagingInput);
  }

  @Query(() => [Messaging], { name: 'messaging' })
  findAll() {
    return this.messagingService.findAll();
  }

  @Query(() => Messaging, { name: 'messaging' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.messagingService.findOne(id);
  }

  @Mutation(() => Messaging)
  updateMessaging(@Args('updateMessagingInput') updateMessagingInput: UpdateMessagingInput) {
    return this.messagingService.update(updateMessagingInput.id, updateMessagingInput);
  }

  @Mutation(() => Messaging)
  removeMessaging(@Args('id', { type: () => Int }) id: number) {
    return this.messagingService.remove(id);
  }
}
