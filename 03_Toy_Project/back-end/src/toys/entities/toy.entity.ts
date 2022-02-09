import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ToyDocument = Toy & Document;

@Schema()
export class Toy {
    @Prop()
    id: string;

    @Prop()
    name: string;

    @Prop()
    password: string;
    
    @Prop()
    email: string;
}

export const ToySchema = SchemaFactory.createForClass(Toy);