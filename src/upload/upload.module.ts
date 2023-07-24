import { Module } from '@nestjs/common';
import { UploadService } from './upload.service';
import { UploadController } from './upload.controller';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Items } from './entities/items.entity';

@Module({
  imports: [MulterModule.register(), TypeOrmModule.forFeature([Items])],
  controllers: [UploadController],
  providers: [UploadService],
})
export class UploadModule {}
