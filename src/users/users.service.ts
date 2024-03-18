import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './users.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from 'src/dto/users.dto';

@Injectable()
export class UsersService {
    // constructor(
    //     @InjectRepository(User) private readonly userRepository: Repository<User>,
    // ){}
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>,
      ) {}

      findAllUser(): Promise<User[]> {
        return this.userRepository.find();
      }

      createUser(createUserDto: CreateUserDto): Promise<User> {
        const user: User = new User();
        user.firstName = createUserDto.firstName;
        user.lastName = createUserDto.lastName;
        user.password = createUserDto.password;
        return this.userRepository.save(user);
      }
}
