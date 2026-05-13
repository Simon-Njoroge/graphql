import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CodeBlueService } from './code-blue.service';
import { CodeBlue } from './entities/code-blue.entity';
import { CreateCodeBlueInput } from './dto/create-code-blue.input';
import { UpdateCodeBlueInput } from './dto/update-code-blue.input';

@Resolver(() => CodeBlue)
export class CodeBlueResolver {
  constructor(private readonly codeBlueService: CodeBlueService) {}

  @Mutation(() => CodeBlue)
  createCodeBlue(@Args('createCodeBlueInput') createCodeBlueInput: CreateCodeBlueInput) {
    return this.codeBlueService.create(createCodeBlueInput);
  }

  @Query(() => [CodeBlue], { name: 'codeBlue' })
  findAll() {
    return this.codeBlueService.findAll();
  }

  @Query(() => CodeBlue, { name: 'codeBlue' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.codeBlueService.findOne(id);
  }

  @Mutation(() => CodeBlue)
  updateCodeBlue(@Args('updateCodeBlueInput') updateCodeBlueInput: UpdateCodeBlueInput) {
    return this.codeBlueService.update(updateCodeBlueInput.id, updateCodeBlueInput);
  }

  @Mutation(() => CodeBlue)
  removeCodeBlue(@Args('id', { type: () => Int }) id: number) {
    return this.codeBlueService.remove(id);
  }
}
