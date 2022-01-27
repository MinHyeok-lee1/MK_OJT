import { Body, Controller, Delete, Get, Head, Options, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {

    constructor(private readonly moviesService: MoviesService) { }

    @Get()
    getAll(): Movie[] {
        return this.moviesService.getAll();
    }

    @Get('search')
    search(@Query('year') searchingYear: string) {
        return `We are searching for a movie made after: ${searchingYear}`;
    }

    @Get("/:id")
    getOne(@Param('id') movie_id: string): Movie {
        return this.moviesService.getOne(movie_id);
    }

    @Post()
    create(@Body() movieData) {
        return this.moviesService.create(movieData);
    }

    @Delete("/:id")
    delete(@Param('id') movie_id: string) {
        return this.moviesService.deleteOne(movie_id);
    }

    @Patch("/:id")
    updateOne(@Param('id') movie_id: string) {
        return `This will update one moive with id: ${movie_id}`
    }

    @Put()
    updateAll() {
        return "This will update all moive"
    }
}
