import ReactS3Client from 'react-aws-s3-typescript';
import type { IConfig } from 'react-aws-s3-typescript/dist/types';
import { editorConfig, thumbnailConfig } from '../utils/s3Config';

const uploadFile = async (file: any, config: IConfig) => {
  const s3 = new ReactS3Client(config);
  try {
    const data = await s3.uploadFile(file, file.name);
    return data.location;
  } catch (err) {
    console.error(err);
  }
};

export const thumbnailUploader = async (file: any) => {
  return uploadFile(file[0], thumbnailConfig);
};

export const editorUploader = async (file: any) => {
  return uploadFile(file[0], editorConfig);
};
