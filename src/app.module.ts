import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsModule } from './projects/projects.module';
import { ConfigModule } from '@nestjs/config';
import * as Joi from '@hapi/joi';
import { DatabaseModule } from './database/database.module';
import { ProjectsController } from './projects/projects.controller';
import { ProjectsService } from './projects/projects.service';
import { UploadModule } from './upload/upload.module';
import { ItemsModule } from './items/items.module';
import { UserModule } from './user/user.module';
import { ExcelModule } from './excel/excel.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ProjectsModule,
    DatabaseModule,
    UploadModule,
    ItemsModule,
    UserModule,
    ExcelModule,
  ],
  controllers: [AppController, ProjectsController],
  providers: [AppService],
})
export class AppModule {}
