import { Body, Representer } from '@panenco/papi';
import { JsonController, Post } from 'routing-controllers';
import { OpenAPI } from 'routing-controllers-openapi';
import { AccessTokenView, UserBody } from '../../contracts';
import { register } from './handlers/register.handler';

@JsonController('/auth')
export class AuthController {
  @Post('/register')
  @OpenAPI({ summary: 'Register a new user' })
  @Representer(AccessTokenView)
  async register(@Body() body: UserBody) {
    return register(body);
  }
}
