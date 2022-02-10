import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsOptional()
  _id: string;

  @IsString()
  @IsOptional()
  createdAt: Date;

  @IsString()
  @IsOptional()
  id: string;

  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  password: string;
  
  @IsString()
  @IsOptional()
  ownerNumber: string;

  @IsString()
  @IsOptional()
  code: string;

  @IsString()
  @IsOptional()
  number: string;
}