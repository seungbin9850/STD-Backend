import config from './src/config';
import { ConnectionOptions } from 'typeorm';
import { User, Post, Tag, Apply, Study, Member } from './src/entities';

const connectionOptions: ConnectionOptions = {
  type: 'mysql',
  host: config.mysql.host,
  port: 3306,
  username: config.mysql.username,
  password: config.mysql.password,
  database: config.mysql.name,
  synchronize: true,
  logging: true,
  entities: [User, Post, Tag, Apply, Study, Member],
};

export default connectionOptions;
