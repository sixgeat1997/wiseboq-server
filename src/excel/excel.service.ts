import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateExcelDto } from './dto/create-excel.dto';
import { UpdateExcelDto } from './dto/update-excel.dto';
import * as tmp from 'tmp';

@Injectable()
export class ExcelService {
  private data = [
    {
      name: 'dev',
      email: 'dev@test.com',
    },
    {
      name: 'dev2',
      email: 'dev2@test.com',
    },
    {
      name: 'dev3',
      email: 'dev3@test.com',
    },
  ];

  async dowloadExcel(createExcelDto: CreateExcelDto) {
    const rows = [];
    this.data.forEach((doc) => {
      rows.push(Object.values(doc));
    });
  }

  findAll() {
    return `This action returns all excel`;
  }

  findOne(id: number) {
    return `This action returns a #${id} excel`;
  }

  update(id: number, updateExcelDto: UpdateExcelDto) {
    return `This action updates a #${id} excel`;
  }

  remove(id: number) {
    return `This action removes a #${id} excel`;
  }
}
