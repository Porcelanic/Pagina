import { Module } from '@nestjs/common';
import { UploadController } from './controlador/upload.controller';
import { UploadService } from './servicios/upload.services';

@Module({
  controllers: [UploadController],
  providers: [UploadService],
})
export class UploadModule {}