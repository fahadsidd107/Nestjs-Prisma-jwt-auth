import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto';
import { UpdateAuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('local/signup')
  SignupLocal() {
    this.authService.SignupLocal();
  }

  @Post('local/signin')
  SigninLocal() {
    this.authService.SigninLocal();
  }

  @Post('local/logout')
  Logout() {
    this.authService.Logout();
  }

  @Post('local/refreshtokens')
  RefreshTokens() {
    this.authService.RefreshTokens();
  }
}
