import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './models/user.entity';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { DeleteResult } from './models/base.entity';

@Injectable()
export class UsersService {
  findAll() {
    throw new Error('Method not implemented.');
  }
  findOne(arg0: number) {
    throw new Error('Method not implemented.');
  }
  remove(arg0: number) {
    throw new Error('Method not implemented.');
  }
  constructor(@InjectModel(User.name) private UserModel: Model<UserDocument>) {}

  async create(user: CreateUserDto): Promise<User> {
      return await this.UserModel.create(user);
  }

  async getAll(): Promise<User[]> {
      return await this.UserModel.find().exec();
  }

  async getOne(id: string): Promise<User> {
      const User = this.UserModel.findById(id).exec();
      if (!User) {
          throw new NotFoundException(`User with ID ${id} not found.`);
      }

      return User;
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    return await this.UserModel.findByIdAndUpdate(id, updateUserDto, {new: true})
  }

  async delete(id: string): Promise<DeleteResult>{
    return await this.UserModel.findByIdAndRemove(id);
  }
  async deleteAll(): Promise<any>{
    return await this.UserModel.remove();
  }
}