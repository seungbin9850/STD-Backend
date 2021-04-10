import config from './src/config';
import { ConnectionOptions } from 'typeorm';
import { User } from 'src/entities/user';

const connectionOptions: ConnectionOptions = {
  type: 'mysql',
  host: config.mysql.host,
  port: 3306,
  username: config.mysql.username,
  password: config.mysql.password,
  database: config.mysql.name,
  synchronize: true,
  logging: true,
  entities: [User],
};

export default connectionOptions;
