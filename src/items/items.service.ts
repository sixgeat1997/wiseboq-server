import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Items } from 'src/upload/entities/items.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Items)
    private readonly itemsDatabase: Repository<Items>,
  ) {}

  create(createItemDto: CreateItemDto) {
    return 'This action adds a new item';
  }

  findAll() {
    return this.itemsDatabase.find();
  }

  async findOne(name: string) {
    const data = await this.itemsDatabase
      .createQueryBuilder('items')
      .where('LOWER(items.name) LIKE LOWER(:name)', {
        name: `%${name}%`,
      })
      .getMany();
    return data;
  }

  update(id: number, updateItemDto: UpdateItemDto) {
    return `This action updates a #${id} item`;
  }

  remove(id: number) {
    return `This action removes a #${id} item`;
  }
}
