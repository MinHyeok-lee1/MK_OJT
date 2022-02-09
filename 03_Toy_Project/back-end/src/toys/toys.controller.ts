import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, Put, Query, Res } from '@nestjs/common';
import { response } from 'express';
import { ObjectId } from 'mongoose';
import { Toy } from '../models/toy.entity';
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
    async getOne(@Res() response: any, @Param('id') id: ObjectId) {
        const toy = await this.toysService.getOne(id);
        return response.status(HttpStatus.OK).json({
            toy
        })
    }

    @Patch(':/id')
    async update(@Res() response: any, @Param('id') id:ObjectId, @Body() toy: Toy) {
        const updatedToy = await this.toysService.update(id, toy);
        return response.status(HttpStatus.OK).json({
            updatedToy
        })
    }

    @Delete("/:id")
    async delete(@Res() reponse: any, @Param('id') id: ObjectId) {
        const deletedToy = await this.toysService.delete(id);
        return response.status(HttpStatus.OK).json({
          deletedToy  
        })
    }

}
