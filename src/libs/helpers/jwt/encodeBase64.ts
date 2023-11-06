import { Buffer } from 'buffer';

export const encodeBase64 = (data: any) => {
  return Buffer.from(data, 'base64').toString('utf8');
};

export default encodeBase64;
