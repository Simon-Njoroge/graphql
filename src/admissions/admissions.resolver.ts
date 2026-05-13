import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AdmissionsService } from './admissions.service';
import { Admission } from './entities/admission.entity';
import { CreateAdmissionInput } from './dto/create-admission.input';
import { UpdateAdmissionInput } from './dto/update-admission.input';

@Resolver(() => Admission)
export class AdmissionsResolver {
  constructor(private readonly admissionsService: AdmissionsService) {}

  @Mutation(() => Admission)
  createAdmission(@Args('createAdmissionInput') createAdmissionInput: CreateAdmissionInput) {
    return this.admissionsService.create(createAdmissionInput);
  }

  @Query(() => [Admission], { name: 'admissions' })
  findAll() {
    return this.admissionsService.findAll();
  }

  @Query(() => Admission, { name: 'admission' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.admissionsService.findOne(id);
  }

  @Mutation(() => Admission)
  updateAdmission(@Args('updateAdmissionInput') updateAdmissionInput: UpdateAdmissionInput) {
    return this.admissionsService.update(updateAdmissionInput.id, updateAdmissionInput);
  }

  @Mutation(() => Admission)
  removeAdmission(@Args('id', { type: () => Int }) id: number) {
    return this.admissionsService.remove(id);
  }
}
