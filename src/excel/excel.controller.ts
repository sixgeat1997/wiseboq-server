import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  Header,
  StreamableFile,
} from '@nestjs/common';
import { ExcelService } from './excel.service';
import { CreateExcelDto } from './dto/create-excel.dto';
import { UpdateExcelDto } from './dto/update-excel.dto';
import type { Response } from 'express';
import * as Excel from 'exceljs';
interface WeeklySalesNumbers {
  product: string;
  week1: number;
  week2: number;
  week3: number;
}
@Controller('excel')
export class ExcelController {
  constructor(private readonly excelService: ExcelService) {}

  @Get('download')
  @Header('Content-Type', 'text/xlsx')
  async dowloadExcel(
    @Body() createExcelDto: CreateExcelDto,
    @Res() res: Response,
  ) {
    const result = await this.excelService.dowloadExcel(createExcelDto);
    const workbook = new Excel.Workbook();
    const worksheet = workbook.addWorksheet('Sales Data');
    worksheet.columns = [
      { header: 'Id', key: 'id', width: 10 },
      { header: 'Name', key: 'name', width: 32 },
      { header: 'D.O.B.', key: 'dob', width: 10 },
    ];
    worksheet.addRow({ id: 1, name: 'John Doe', dob: new Date(1970, 1, 1) });
    worksheet.addRow({ id: 2, name: 'Jane Doe', dob: new Date(1965, 1, 7) });
    const buffer = await workbook.xlsx.writeBuffer();
    const file = await workbook.xlsx.writeFile('filename');
    res.header('Content-disposition', 'attachment; filename=saddsds.xlsx');
    res.type(
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    );
    // res.writeHead
    // const wk = await workbook.xlsx.writeFile('sales-report.xlsx');
    return res.end(buffer);
    // return new StreamableFile(buffer);
  }

  @Get()
  findAll() {
    return this.excelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.excelService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExcelDto: UpdateExcelDto) {
    return this.excelService.update(+id, updateExcelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.excelService.remove(+id);
  }
}
