import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Toy, ToyDocument } from './entities/toy.entity';

@Injectable()
export class ToysService {
    constructor(@InjectModel(Toy.name) private toyModel: Model<ToyDocument>) {}

    async create(toy: Toy): Promise<Toy> {
        const newToy = new this.toyModel(toy);
        return newToy.save();
    }

    async getAll(): Promise<Toy[]> {
        return await this.toyModel.find().exec();
    }

    async getOne(id: ObjectId): Promise<Toy> {
        const toy = this.toyModel.findById(id).exec();
        if (!toy) {
            throw new NotFoundException(`Toy with ID ${id} not found.`);
        }

        return toy;
    }

    async update(id: ObjectId, toy: Toy): Promise<Toy> {
        return await this.toyModel.findByIdAndUpdate(id, toy, {new: true})
    }

    async delete(id: ObjectId): Promise<any>{
        return await this.toyModel.findByIdAndRemove(id);
    }

}
