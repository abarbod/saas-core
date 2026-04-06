import { Injectable } from '@nestjs/common';

export interface StorageWriteInput {
  tenantId: string;
  filePath: string;
  contentType: string;
  bytes: Buffer;
}

@Injectable()
export class StorageService {
  async putObject(input: StorageWriteInput) {
    return {
      key: `${input.tenantId}/${input.filePath}`,
      contentType: input.contentType,
      byteLength: input.bytes.byteLength
    };
  }
}
