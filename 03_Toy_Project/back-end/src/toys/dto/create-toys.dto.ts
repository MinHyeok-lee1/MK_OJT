import { IsNumber, IsOptional, IsString, ValidateNested } from "class-validator";
import { ApiProperty } from "@nestjs/swagger"

export class CreateToyDTO {
    @ApiProperty({ description: '회원 가입에 사용할 사용자 id' })
    @ValidateNested()
    @IsString()
    readonly uid: string;

    @ApiProperty({ description: '회원 가입에 사용할 사용자 password' })
    @ValidateNested()
    @IsString()
    readonly password: string;

    @ApiProperty({ description: '회원 가입에 사용할 사용자 email' })
    @ValidateNested()
    @IsString()
    readonly email: string;

    @ApiProperty({ description: '회원 가입에 사용할 사용자 et cetera Information' })
    @IsOptional()
    @IsString({each: true})
    readonly etc: string[];
}