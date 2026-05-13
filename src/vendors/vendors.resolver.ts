import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { VendorsService } from './vendors.service';
import { Vendor } from './entities/vendor.entity';
import { CreateVendorInput } from './dto/create-vendor.input';
import { UpdateVendorInput } from './dto/update-vendor.input';

@Resolver(() => Vendor)
export class VendorsResolver {
  constructor(private readonly vendorsService: VendorsService) {}

  @Mutation(() => Vendor)
  createVendor(@Args('createVendorInput') createVendorInput: CreateVendorInput) {
    return this.vendorsService.create(createVendorInput);
  }

  @Query(() => [Vendor], { name: 'vendors' })
  findAll() {
    return this.vendorsService.findAll();
  }

  @Query(() => Vendor, { name: 'vendor' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.vendorsService.findOne(id);
  }

  @Mutation(() => Vendor)
  updateVendor(@Args('updateVendorInput') updateVendorInput: UpdateVendorInput) {
    return this.vendorsService.update(updateVendorInput.id, updateVendorInput);
  }

  @Mutation(() => Vendor)
  removeVendor(@Args('id', { type: () => Int }) id: number) {
    return this.vendorsService.remove(id);
  }
}
