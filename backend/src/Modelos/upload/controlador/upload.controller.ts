import { Controller, Post, UploadedFile, UseInterceptors, HttpException, HttpStatus } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadService } from '../servicios/upload.services';
import { imageFileFilter } from '../dto/upload.dto';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file', {
    fileFilter: imageFileFilter,
  }))
  async uploadFile(@UploadedFile() file: Express.Multer.File): Promise<{ filePath: string }> {
    try {
      const filePath = await this.uploadService.saveFile(file);
      return { filePath };
    } catch (error) {
      throw new HttpException('Failed to upload file', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}