import { Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    //log
    console.log('hello world');

    return this.appService.getHello();
  }

  @Get('/:id')
  getById(@Param('id') id: string) {
    return this.appService.getById(id);
  }

  @Post()
  getItem() {
    return this.appService.getItem();
  }
}
