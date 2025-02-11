
import { Controller, Post, Body, UseGuards, Get, Request } from '@nestjs/common';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';

@Controller('users')
export class UsersController {
  constructor() {}

  @UseGuards(LocalAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Get()
  teste() {
    return 'teste';
  }
}