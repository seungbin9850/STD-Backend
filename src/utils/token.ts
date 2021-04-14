import { sign, verify } from 'jsonwebtoken';
import config from '../config';

export const makeToken = async (id: string): Promise<string> => {
  return await sign({ id }, config.jwt, { expiresIn: '2w' });
};

export const verifyToken = async (token: string): Promise<any> => {
  return await verify(token, config.jwt);
};
