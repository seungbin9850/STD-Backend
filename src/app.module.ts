import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import connectionOptions from 'ormconfig';
import { CatchException } from './exception';
import { UserModule, AuthModule } from './modules';

@Module({
  imports: [TypeOrmModule.forRoot(connectionOptions), UserModule, AuthModule],
  providers: [{ provide: APP_FILTER, useClass: CatchException }],
})
export class AppModule {}
