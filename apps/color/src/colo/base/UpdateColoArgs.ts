/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ColoWhereUniqueInput } from "./ColoWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ColoUpdateInput } from "./ColoUpdateInput";

@ArgsType()
class UpdateColoArgs {
  @ApiProperty({
    required: true,
    type: () => ColoWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ColoWhereUniqueInput)
  @Field(() => ColoWhereUniqueInput, { nullable: false })
  where!: ColoWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ColoUpdateInput,
  })
  @ValidateNested()
  @Type(() => ColoUpdateInput)
  @Field(() => ColoUpdateInput, { nullable: false })
  data!: ColoUpdateInput;
}

export { UpdateColoArgs as UpdateColoArgs };
