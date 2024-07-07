import { Injectable } from '@nestjs/common';
import { extname, join } from 'path';
import { promises as fsPromises } from 'fs';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UploadService {
  async saveFile(file: Express.Multer.File): Promise<string> {
    try {
      const safeFilename = `${file.fieldname}-${Date.now()}${extname(file.originalname)}`;
      const uploadPath = join(__dirname, '..', '..', '..', '..', 'Uploads','Estampados', safeFilename);
      await fsPromises.writeFile(uploadPath, file.buffer);
      return safeFilename;
    } catch (error) {
      // Handle error (e.g., log it, throw custom error)
      console.error('Error saving file:', error);
      throw new Error('Error saving file');
    }
  }

  private getExtension(filename: string): string {
    return filename.substring(filename.lastIndexOf('.'));
  }
}