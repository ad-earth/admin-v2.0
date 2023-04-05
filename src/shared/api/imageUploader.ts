import ReactS3Client from 'react-aws-s3-typescript';
import type { IConfig } from '../../../node_modules/react-aws-s3-typescript/dist/types';
import { editorConfig, thumbnailConfig } from '../utils/s3Config';

export async function thumbnailUploader(file: any) {
  const s3 = new ReactS3Client(thumbnailConfig as IConfig);
  const fileList = file;
  try {
    return await s3
      .uploadFile(fileList[0], fileList[0].name)
      .then(data => data.location);
  } catch (err) {
    console.error(err);
  }
}

export async function editorUploader(file: any) {
  const s3 = new ReactS3Client(editorConfig as IConfig);
  const fileList = file;
  try {
    return await s3
      .uploadFile(fileList[0], fileList[0].name)
      .then(data => data.location);
  } catch (err) {
    console.error(err);
  }
}
