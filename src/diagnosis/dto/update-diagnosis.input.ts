import { CreateDiagnosisInput } from './create-diagnosis.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateDiagnosisInput extends PartialType(CreateDiagnosisInput) {
  @Field(() => Int)
  id: number;
}
