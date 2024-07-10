import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { UserRepository } from '../users/users.repository';
import { UsersService } from '../users/users.service';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([UsersService])],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule { }