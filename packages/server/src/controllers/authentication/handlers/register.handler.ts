import { RequestContext } from '@mikro-orm/core';
import { UserBody } from '../../../contracts';
import { User } from '../../../entities';

export const register = async (body: UserBody) => {
  const em = RequestContext.getEntityManager();
  const user = em.create(User, body);
  await em.persistAndFlush(user);
  return user;
};
