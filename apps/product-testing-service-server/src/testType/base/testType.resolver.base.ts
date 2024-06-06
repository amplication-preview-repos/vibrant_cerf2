/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { TestType } from "./TestType";
import { TestTypeCountArgs } from "./TestTypeCountArgs";
import { TestTypeFindManyArgs } from "./TestTypeFindManyArgs";
import { TestTypeFindUniqueArgs } from "./TestTypeFindUniqueArgs";
import { CreateTestTypeArgs } from "./CreateTestTypeArgs";
import { UpdateTestTypeArgs } from "./UpdateTestTypeArgs";
import { DeleteTestTypeArgs } from "./DeleteTestTypeArgs";
import { MeasurementFindManyArgs } from "../../measurement/base/MeasurementFindManyArgs";
import { Measurement } from "../../measurement/base/Measurement";
import { TestTypeService } from "../testType.service";
@graphql.Resolver(() => TestType)
export class TestTypeResolverBase {
  constructor(protected readonly service: TestTypeService) {}

  async _testTypesMeta(
    @graphql.Args() args: TestTypeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [TestType])
  async testTypes(
    @graphql.Args() args: TestTypeFindManyArgs
  ): Promise<TestType[]> {
    return this.service.testTypes(args);
  }

  @graphql.Query(() => TestType, { nullable: true })
  async testType(
    @graphql.Args() args: TestTypeFindUniqueArgs
  ): Promise<TestType | null> {
    const result = await this.service.testType(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => TestType)
  async createTestType(
    @graphql.Args() args: CreateTestTypeArgs
  ): Promise<TestType> {
    return await this.service.createTestType({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => TestType)
  async updateTestType(
    @graphql.Args() args: UpdateTestTypeArgs
  ): Promise<TestType | null> {
    try {
      return await this.service.updateTestType({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => TestType)
  async deleteTestType(
    @graphql.Args() args: DeleteTestTypeArgs
  ): Promise<TestType | null> {
    try {
      return await this.service.deleteTestType(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Measurement], { name: "measurements" })
  async findMeasurements(
    @graphql.Parent() parent: TestType,
    @graphql.Args() args: MeasurementFindManyArgs
  ): Promise<Measurement[]> {
    const results = await this.service.findMeasurements(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}