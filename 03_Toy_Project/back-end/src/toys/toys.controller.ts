import { Body, Controller, Delete, Get, Head, Options, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { CreateToyDTO } from './dto/create-toys.dto';
import { UpdateToyDTO } from './dto/update-toys.dto';
import { Toy } from './entities/toys.entity';
import { ToysService } from './toys.service';

@Controller('toys')
export class ToysController {

    constructor(private readonly toysService: ToysService) { }

    @Get()
    getAll(): Toy[] {
        return this.toysService.getAll();
    }

    @Get('search')
    search(@Query('year') searchingYear: string) {
        return `We are searching for a toy made after: ${searchingYear}`;
    }

    @Get("/:id")
    getOne(@Param('id') toy_id: number): Toy {
        return this.toysService.getOne(toy_id);
    }

    @Post()
    create(@Body() toyData: CreateToyDTO) {
        return this.toysService.create(toyData);
    }

    @Delete("/:id")
    delete(@Param('id') toy_id: number) {
        return this.toysService.deleteOne(toy_id);
    }

    @Patch("/:id")
    updateOne(@Param('id') toy_id: number, @Body() updateData: UpdateToyDTO) {
        return this.toysService.update(toy_id, updateData);
    }

    @Put()
    updateAll() {
        return "This will update all toys"
    }
}
