import { Body, Controller, Delete, Get, Head, Options, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { CreateMovieDTO } from './dto/create-movie.dto';
import { UpdateMovieDTO } from './dto/update-movie.dto';
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
    getOne(@Param('id') movie_id: number): Movie {
        return this.moviesService.getOne(movie_id);
    }

    @Post()
    create(@Body() movieData: CreateMovieDTO) {
        return this.moviesService.create(movieData);
    }

    @Delete("/:id")
    delete(@Param('id') movie_id: number) {
        return this.moviesService.deleteOne(movie_id);
    }

    @Patch("/:id")
    updateOne(@Param('id') movie_id: number, @Body() updateData: UpdateMovieDTO) {
        return this.moviesService.update(movie_id, updateData);
    }

    @Put()
    updateAll() {
        return "This will update all moive"
    }
}
