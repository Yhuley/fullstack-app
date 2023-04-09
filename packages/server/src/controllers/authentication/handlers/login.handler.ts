import { RequestContext } from '@mikro-orm/core';
import { createAccessToken, Unauthorized } from '@panenco/papi';
import config from '../../../config';
import { LoginBody } from '../../../contracts';
import { User } from '../../../entities';

export const login = async (body: LoginBody) => {
  const em = RequestContext.getEntityManager();
  const user = await em.findOne(User, { email: body.email });

  if (!user || user.password !== body.password) {
    throw new Unauthorized('WrongCredentials', 'Wrong password or email');
  }
  const token = await createAccessToken(config.jwtSecret, config.tokenAccessLifetime, {
    userId: user.id,
    name: user.name,
    email: user.email,
  });
  return token;
};
