import { Controller, HttpCode, Post , Body, HttpStatus} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('login')
    @HttpCode(HttpStatus.OK)
    login(@Body()login: AuthDto ) {
        return this.authService.login(login);
    }
}
