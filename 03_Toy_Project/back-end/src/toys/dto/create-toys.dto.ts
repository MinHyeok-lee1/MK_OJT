import { IsNumber, IsOptional, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger"

export class CreateToyDTO {
    @IsString()
    readonly uid: string;
    @IsNumber()
    readonly year: number;

    @IsOptional()
    @IsString({each: true})
    readonly generes: string[];
}