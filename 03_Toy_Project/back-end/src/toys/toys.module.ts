import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Toy, ToySchema } from './entities/toys.entity';
import { ToysController } from './toys.controller';
import { ToysService } from './toys.service';

@Module({
    imports: [
        MongooseModule.forFeatureAsync([
            { 
                name: Toy.name,
                useFactory: () => {
                    const schema = ToySchema;
                    schema.pre('save', function() { console.log('Hello from pre save')});
                    return schema;
                },
             },
        ], 'toys'),
      ],
    controllers: [ToysController],
    providers: [ToysService],
})
export class ToysModule {}
