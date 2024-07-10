import { Injectable, UnprocessableEntityException } from '@nestjs/common';
// import { UserRepository } from '../users/users.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { User } from '../users/user.entity';
import { UserRole } from '../users/user-roles.enum';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService) { }

  async signUp(createUserDto: CreateUserDto): Promise<User> {
    if (createUserDto.password != createUserDto.passwordConfirmation) {
      throw new UnprocessableEntityException('As senhas não conferem');
    } else {
      return await this.userService.createUser(createUserDto, UserRole.USER);
    }
  }
}