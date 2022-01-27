import { IsNumber, IsString } from "class-validator";

export class UpdateMovieDTO {
    @IsString()
    readonly title?: string;
    @IsNumber()
    readonly year?: number;
    @IsString({each: true})
    readonly generes?: string[];
}