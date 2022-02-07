import { IsNumber, IsOptional, IsString, ValidateNested } from "class-validator";
import { ApiProperty } from "@nestjs/swagger"

export class CreateToyDTO {
    @ApiProperty({ description: '회원 가입에 사용할 사용자 정보' })
    @ValidateNested()
    @IsString()
    readonly uid: string;
    @IsNumber()
    readonly year: number;

    @IsOptional()
    @IsString({each: true})
    readonly generes: string[];
}