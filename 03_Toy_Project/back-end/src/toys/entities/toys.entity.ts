import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ToyDocument = Toy & Document;

@Schema()
export class Toy {
    @Prop()
    id: number;

    @Prop()
    name: string;

    @Prop()
    password: string;
    
    @Prop()
    email: string;
    
    @Prop()
    etc: string[];
}

export const ToySchema = SchemaFactory.createForClass(Toy);