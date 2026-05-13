import { CreatePainAssessmentInput } from './create-pain-assessment.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePainAssessmentInput extends PartialType(CreatePainAssessmentInput) {
  @Field(() => Int)
  id: number;
}
