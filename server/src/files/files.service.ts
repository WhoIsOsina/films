import { Injectable } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';
import * as uuid from 'uuid'

export enum FileType {
   PICTURE = "picture",
   VIDEO = 'video'
}

@Injectable()
export class FilesService {
   async saveFile(fileType: FileType, file) {
      console.log(file)
      const fileExpansion = file[0].originalname.split('.').pop()
      const fileName = uuid.v4() + '.' + fileExpansion;
      const filePath = path.resolve(__dirname, '..', 'static', fileType);
      if (!fs.existsSync(filePath)) {
         fs.mkdirSync(filePath, { recursive: true })
      }
      fs.writeFileSync(path.resolve(filePath, fileName), file[0].buffer)
      const fullPath = fileType + '/' + fileName;
      return fullPath;
   }
}
