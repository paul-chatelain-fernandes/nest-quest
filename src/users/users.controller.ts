import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Param,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity/user.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {
  constructor(private service: UsersService) {}

  @Get()
  getAll() {
    return this.service.getUsers();
  }

  @Get(':id')
  getOne(@Param() params) {
    return this.service.getUser(params.id);
  }

  @Post()
  create(@Body() user: User) {
    return this.service.saveUser(user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put()
  update(@Body() user: User) {
    return this.service.saveUser(user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  deleteUser(@Param() params) {
    this.service.deleteUser(params.id);
    return;
  }
}
