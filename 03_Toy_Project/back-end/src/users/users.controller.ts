import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './models/user.entity';
import { response } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getAll(@Res() response: any) {
      const users = await this.usersService.getAll();
      return response.status(HttpStatus.OK).json({
          users
      })
  }

  @Get("/:id")
  async getOne(@Res() response: any, @Param('id') id: string) {
      const users = await this.usersService.getOne(id);
      return response.status(HttpStatus.OK).json({
          users
      })
  }

  @Delete("/:id")
  async delete(@Param('id') id: string) {
      const deletedusers= await this.usersService.delete(id);
      return response.status(HttpStatus.OK).json({
        deletedusers
      })
  }

  @Delete()
  async deleteAll() {
      const deletedusers= await this.usersService.deleteAll();
      return response.status(HttpStatus.OK).json({
        deletedusers
      })
  }

  
  @Post()
  async create(@Res() response: any, @Body() user: CreateUserDto) {
      const users = await this.usersService.create(user);
      return response.status(HttpStatus.CREATED).json({
          users
      })
  }

  @Patch('/:id')
  async update(@Res() response: any, @Param('id') id:string, @Body() updateUserDto: UpdateUserDto) {
    const updatedusers = await this.usersService.update(id, updateUserDto);
      return response.status(HttpStatus.OK).json({
          updatedusers
      })
  }
}
