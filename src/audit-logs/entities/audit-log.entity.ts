import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class AuditLog {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
