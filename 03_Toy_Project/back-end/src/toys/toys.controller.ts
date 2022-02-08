import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Query, Res } from '@nestjs/common';
import { response } from 'express';
import { Toy } from './toy.schema';
import { ToysService } from './toys.service';

@Controller('toys')
export class ToysController {
    constructor(private readonly toysService: ToysService) { }

    @Post()
    async create(@Res() response: any, @Body() toy: Toy) {
        const toys = await this.toysService.create(toy);
        return response.status(HttpStatus.CREATED).json({
            toys
        })
    }

    @Get()
    async getAll(@Res() response: any) {
        const toys = await this.toysService.getAll();
        return response.status(HttpStatus.OK).json({
            toys
        })
    }

    @Get("/:id")
    async getOne(@Res() response: any, @Param('id') toy_id: number) {
        const toy = await this.toysService.getOne(toy_id);
        return response.status(HttpStatus.OK).json({
            toy
        })
    }

    @Put(':/id')
    async update(@Res() response: any, @Param('id') toy_id:number, @Body() toy: Toy) {
        const updatedToy = await this.toysService.update(toy_id, toy);
        return response.status(HttpStatus.OK).json({
            updatedToy
        })
    }

    @Delete("/:id")
    async delete(@Res() reponse: any, @Param('id') toy_id: number) {
        const deletedToy = await this.toysService.delete(toy_id);
        return response.status(HttpStatus.OK).json({
          deletedToy  
        })
    }

}
