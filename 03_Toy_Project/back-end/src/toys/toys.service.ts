import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateToyDTO } from './dto/create-toys.dto';
import { UpdateToyDTO } from './dto/update-toys.dto';
import { Toy } from './entities/toys.entity';

@Injectable()
export class ToysService {
    private toys: Toy[] = [];

    getAll(): Toy[] {
        return this.toys;
    }

    getOne(id: number): Toy {
        const toy = this.toys.find(toy => toy.id === id);
        if (!toy) {
            throw new NotFoundException(`Toy with ID ${id} not found.`);
        }

        return toy;
    }

    deleteOne(id: number) {
        this.getOne(id);
        this.toys = this.toys.filter(toy => toy.id !== id);
    }

    create(toyData: CreateToyDTO) {
        this.toys.push({
            id: this.toys.length + 1,
            ...toyData
        });
    }

    update(id: number, updateData: UpdateToyDTO) {
        const toy = this.getOne(id);
        this.deleteOne(id);
        this.toys.push({ ...toy, ...updateData });
    }
}
