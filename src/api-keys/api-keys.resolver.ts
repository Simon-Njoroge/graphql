import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ApiKeysService } from './api-keys.service';
import { ApiKey } from './entities/api-key.entity';
import { CreateApiKeyInput } from './dto/create-api-key.input';
import { UpdateApiKeyInput } from './dto/update-api-key.input';

@Resolver(() => ApiKey)
export class ApiKeysResolver {
  constructor(private readonly apiKeysService: ApiKeysService) {}

  @Mutation(() => ApiKey)
  createApiKey(@Args('createApiKeyInput') createApiKeyInput: CreateApiKeyInput) {
    return this.apiKeysService.create(createApiKeyInput);
  }

  @Query(() => [ApiKey], { name: 'apiKeys' })
  findAll() {
    return this.apiKeysService.findAll();
  }

  @Query(() => ApiKey, { name: 'apiKey' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.apiKeysService.findOne(id);
  }

  @Mutation(() => ApiKey)
  updateApiKey(@Args('updateApiKeyInput') updateApiKeyInput: UpdateApiKeyInput) {
    return this.apiKeysService.update(updateApiKeyInput.id, updateApiKeyInput);
  }

  @Mutation(() => ApiKey)
  removeApiKey(@Args('id', { type: () => Int }) id: number) {
    return this.apiKeysService.remove(id);
  }
}
