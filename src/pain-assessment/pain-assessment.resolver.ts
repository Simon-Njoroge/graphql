import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PainAssessmentService } from './pain-assessment.service';
import { PainAssessment } from './entities/pain-assessment.entity';
import { CreatePainAssessmentInput } from './dto/create-pain-assessment.input';
import { UpdatePainAssessmentInput } from './dto/update-pain-assessment.input';

@Resolver(() => PainAssessment)
export class PainAssessmentResolver {
  constructor(private readonly painAssessmentService: PainAssessmentService) {}

  @Mutation(() => PainAssessment)
  createPainAssessment(@Args('createPainAssessmentInput') createPainAssessmentInput: CreatePainAssessmentInput) {
    return this.painAssessmentService.create(createPainAssessmentInput);
  }

  @Query(() => [PainAssessment], { name: 'painAssessment' })
  findAll() {
    return this.painAssessmentService.findAll();
  }

  @Query(() => PainAssessment, { name: 'painAssessment' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.painAssessmentService.findOne(id);
  }

  @Mutation(() => PainAssessment)
  updatePainAssessment(@Args('updatePainAssessmentInput') updatePainAssessmentInput: UpdatePainAssessmentInput) {
    return this.painAssessmentService.update(updatePainAssessmentInput.id, updatePainAssessmentInput);
  }

  @Mutation(() => PainAssessment)
  removePainAssessment(@Args('id', { type: () => Int }) id: number) {
    return this.painAssessmentService.remove(id);
  }
}
