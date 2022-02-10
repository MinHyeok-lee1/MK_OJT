import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
       
    @ApiProperty({ description: '사용자의 회원가입시 사업자 등록번호', required: false })
    @Prop()
    public ownerNumber: string;

    @ApiProperty({ description: '사용자의 이름', required: false })
    @Prop()
    public name: string;

    @ApiProperty({ description: '사용자의 전화번호', required: false })
    @Prop()
    public number: string;
    
    @ApiProperty({ description: '사용자의 회사코드', required: false })
    @Prop()
    public code: string;

    @ApiProperty({ description: '사용자의 회원가입시 ID', required: false })
    @Prop()
    public id: string;

    @ApiProperty({ description: '사용자의 회원가입시 PWD', required: false })
    @Prop()
    public password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);