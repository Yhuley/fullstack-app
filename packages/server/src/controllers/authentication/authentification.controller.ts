import { Body, Representer } from '@panenco/papi';
import { JsonController, Post } from 'routing-controllers';
import { OpenAPI } from 'routing-controllers-openapi';
import { UserView, UserBody, AccessTokenView, LoginBody } from '../../contracts';
import { login } from './handlers/login.handler';
import { register } from './handlers/register.handler';

@JsonController('/auth')
export class AuthController {
  @Post('/register')
  @OpenAPI({ summary: 'Register a new user' })
  @Representer(UserView)
  async register(@Body() body: UserBody) {
    return register(body);
  }

  @Post('/login')
  @OpenAPI({ summary: 'Login' })
  @Representer(AccessTokenView)
  async login(@Body() body: LoginBody) {
    return login(body);
  }
}
