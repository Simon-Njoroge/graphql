import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DiagnosisService } from './diagnosis.service';
import { Diagnosis } from './entities/diagnosis.entity';
import { CreateDiagnosisInput } from './dto/create-diagnosis.input';
import { UpdateDiagnosisInput } from './dto/update-diagnosis.input';

@Resolver(() => Diagnosis)
export class DiagnosisResolver {
  constructor(private readonly diagnosisService: DiagnosisService) {}

  @Mutation(() => Diagnosis)
  createDiagnosis(@Args('createDiagnosisInput') createDiagnosisInput: CreateDiagnosisInput) {
    return this.diagnosisService.create(createDiagnosisInput);
  }

  @Query(() => [Diagnosis], { name: 'diagnosis' })
  findAll() {
    return this.diagnosisService.findAll();
  }

  @Query(() => Diagnosis, { name: 'diagnosis' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.diagnosisService.findOne(id);
  }

  @Mutation(() => Diagnosis)
  updateDiagnosis(@Args('updateDiagnosisInput') updateDiagnosisInput: UpdateDiagnosisInput) {
    return this.diagnosisService.update(updateDiagnosisInput.id, updateDiagnosisInput);
  }

  @Mutation(() => Diagnosis)
  removeDiagnosis(@Args('id', { type: () => Int }) id: number) {
    return this.diagnosisService.remove(id);
  }
}
