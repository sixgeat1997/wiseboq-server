import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userDatabase: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const uuid = uuidv4();

    const user = new User();
    user.userId = uuid;
    user.email = createUserDto.email;
    user.firstName = createUserDto.firstName;
    user.lastName = createUserDto.lastName;
    user.phoneNumber = createUserDto.phoneNumber;

    return await this.userDatabase.save(user);
  }

  async findAll() {
    return await this.userDatabase.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const updateUser = await this.userDatabase
      .createQueryBuilder()
      .update(User)
      .set({
        email: updateUserDto.email,
        firstName: updateUserDto.firstName,
        lastName: updateUserDto.lastName,
        lineId: updateUserDto.lineId,
        phoneNumber: updateUserDto.phoneNumber,
      })
      .where('userId = :userId', { userId: id })
      .execute();
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
