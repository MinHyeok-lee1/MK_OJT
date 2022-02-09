import { IsString, IsNumber } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateToyDto } from './create-toy.dto';

export class UpdateMovieDto extends PartialType(CreateToyDto) {}