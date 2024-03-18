import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateUserDto } from 'src/dto/users.dto';
import { UsersService } from './users.service';
import { WinstonLogger } from 'src/winston.logger';

@Controller('users')
export class UsersController {
  constructor(
    private readonly userService: UsersService,
    private readonly logger: WinstonLogger, // Inject WinstonLogger
  ) {}

  @Get()
  async findAll() {
    try {
      const users = await this.userService.findAllUser();
      this.logger.info('Fetched all users successfully');
      return users;
    } catch (error) {
      this.logger.error('Failed to fetch users', error.stack);
      throw error;
    }
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      const newUser = await this.userService.createUser(createUserDto);
      this.logger.info('User created successfully');
      return newUser;
    } catch (error) {
      this.logger.error('Failed to create user', error.stack);
      throw error;
    }
  }
}
