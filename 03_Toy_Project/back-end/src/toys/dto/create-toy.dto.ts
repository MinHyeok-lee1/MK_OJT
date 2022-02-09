import { IsString, IsOptional } from 'class-validator';

export class CreateToyDto {
  @IsString()
  readonly id: string;

  @IsString()
  readonly name: number;

  @IsString()
  readonly password: string;

  @IsString()
  readonly email: string;
}