import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsOptional, IsString } from 'class-validator';
import { Document } from 'mongoose';

export class DeleteObjectIds {
    @ApiProperty({ description: '삭제할 데이터들의 오브젝트 ID들' })
    @IsArray()
    ids: string[];
  }
  
export class DeleteResult {
    @ApiProperty({ description: '삭제된 데이터의 수' })
    deletedCount: number;
}

export class DbErrorInfo {
    name: string;
    code: string | number;
    key?: string;
}