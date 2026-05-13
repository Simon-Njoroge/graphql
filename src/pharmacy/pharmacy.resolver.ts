import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PharmacyService } from './pharmacy.service';
import { Pharmacy } from './entities/pharmacy.entity';
import { CreatePharmacyInput } from './dto/create-pharmacy.input';
import { UpdatePharmacyInput } from './dto/update-pharmacy.input';

@Resolver(() => Pharmacy)
export class PharmacyResolver {
  constructor(private readonly pharmacyService: PharmacyService) {}

  @Mutation(() => Pharmacy)
  createPharmacy(@Args('createPharmacyInput') createPharmacyInput: CreatePharmacyInput) {
    return this.pharmacyService.create(createPharmacyInput);
  }

  @Query(() => [Pharmacy], { name: 'pharmacy' })
  findAll() {
    return this.pharmacyService.findAll();
  }

  @Query(() => Pharmacy, { name: 'pharmacy' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.pharmacyService.findOne(id);
  }

  @Mutation(() => Pharmacy)
  updatePharmacy(@Args('updatePharmacyInput') updatePharmacyInput: UpdatePharmacyInput) {
    return this.pharmacyService.update(updatePharmacyInput.id, updatePharmacyInput);
  }

  @Mutation(() => Pharmacy)
  removePharmacy(@Args('id', { type: () => Int }) id: number) {
    return this.pharmacyService.remove(id);
  }
}
