import { Injectable } from '@nestjs/common';
import { CreateUploadDto } from './dto/create-upload.dto';
import { UpdateUploadDto } from './dto/update-upload.dto';
import * as XLSX from 'xlsx';
import { Items } from './entities/items.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UploadService {
  constructor(
    @InjectRepository(Items)
    private itemsDatabase: Repository<Items>,
  ) {}

  async create(workbook: XLSX.WorkBook) {
    const sheet_name_list = workbook.SheetNames;
    const wb: Items[] = XLSX.utils.sheet_to_json(
      // Step 4

      workbook.Sheets[sheet_name_list[0]],
    );

    console.log(wb[wb.length - 1]);

    for (let i = 1; i < wb.length; i++) {
      if (wb[i]?.name && wb[i].price && wb[i].cost) {
        const findItem = await this.itemsDatabase.findOne({
          where: {
            name: wb[i].name,
          },
        });
        if (!findItem) {
          const item = new Items();
          item.itemId = wb[i]?.itemId || '';
          item.name = wb[i]?.name;
          item.unit = wb[i]?.unit || 'หน่วย';
          item.price = +wb[i]?.price > 0 ? +wb[i]?.price : 0;
          item.cost = +wb[i]?.cost > 0 ? +wb[i]?.cost : 0;
          await this.itemsDatabase.save(item);
        }
      }
    }

    return 'This action adds a new upload';
  }

  findAll() {
    return `This action returns all upload`;
  }

  findOne(id: number) {
    return `This action returns a #${id} upload`;
  }

  update(id: number, updateUploadDto: UpdateUploadDto) {
    return `This action updates a #${id} upload`;
  }

  remove(id: number) {
    return `This action removes a #${id} upload`;
  }
}
