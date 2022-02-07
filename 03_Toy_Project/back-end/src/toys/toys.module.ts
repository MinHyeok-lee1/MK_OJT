import { Module } from '@nestjs/common';
import { ToysController } from './toys.controller';
import { ToysService } from './toys.service';

@Module({
    controllers: [ToysController],
    providers: [ToysService],
})
export class ToysModule {}
