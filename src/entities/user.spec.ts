import { describe, it, expect } from 'vitest';
import { User } from './user';

describe('User entity', () => {
  it('should create an user entity', () => {
    const user = new User({
      name: 'John Doe',
    });

    expect(user).toBeInstanceOf(User);
  });

  it('should return user name and id', () => {
    const user = new User({
      name: 'John Doe',
      id: 6969696969,
    });

    expect(user.name).toEqual('John Doe');
    expect(user.id).toEqual(6969696969);
  });
});
