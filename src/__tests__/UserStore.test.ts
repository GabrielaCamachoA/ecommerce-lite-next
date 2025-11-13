import { UserStore } from '../../utils/UserStore';
import { User } from '../interfaces/user';

describe('UserStore', () => {
  let userStore: UserStore;
  const mockUser: User = {
    id: 1,
    fullName: 'Test User',
    email: 'test@example.com',
    password: 'password123',
    isActive: true,
    role: 'user',
    address: '123 Test St',
    createdAt: new Date().toISOString(),
  };

  beforeEach(() => {
    userStore = new UserStore();
  });

  test('should create a user', () => {
    userStore.create(mockUser);
    const users = userStore.list();
    expect(users).toContain(mockUser);
  });

  test('should find user by name', () => {
    userStore.create(mockUser);
    const foundUser = userStore.findByName('Test User');
    expect(foundUser).toEqual(mockUser);
  });

  test('should update user', () => {
    userStore.create(mockUser);
    userStore.update(1, { fullName: 'Updated User' });
    const users = userStore.list();
    expect(users[0].fullName).toBe('Updated User');
  });

  test('should remove user', () => {
    userStore.create(mockUser);
    userStore.remove(1);
    const users = userStore.list();
    expect(users).not.toContain(mockUser);
  });
});
