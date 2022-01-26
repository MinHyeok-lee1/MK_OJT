import { Controller, Delete, Get, Head, Options, Param, Patch, Post, Put } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
    @Get()
    getAll() {
        return "This will return all moives"
    }

    @Get("/:id")
    getOne(@Param('id') movie_id: string) {
        return `This will return one moive with id: ${movie_id}`
    }

    @Post()
    create() {
        return "This will create a moive"
    }

    @Delete("/:id")
    delete(@Param('id') movie_id: string) {
        return `This will delete one moive with id: ${movie_id}`
    }


    @Patch("/:id")
    updateOne(@Param('id') movie_id: string) {
        return `This will update one moive with id: ${movie_id}`
    }

    @Put()
    updateAll() {
        return "This will update all moive"
    }

    @Head("/:id")
    head(@Param('id') movie_id: string) {
        return `Movie's id: ${movie_id} Head`
    }

    @Options("/:id")
    options(@Param('id') movie_id: string) {
        return `Movie's id: ${movie_id} Options`
    }
}
