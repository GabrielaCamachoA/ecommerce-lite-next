import { authenticateUser, getUserByEmail, isUserActive } from '../../utils/auth';

describe('Auth Utils', () => {
  test('should authenticate valid user', () => {
    const result = authenticateUser('john.perez@example.com', 'password123');
    expect(result).toBeTruthy();
    expect(result?.email).toBe('john.perez@example.com');
  });

  test('should not authenticate invalid user', () => {
    const result = authenticateUser('invalid@example.com', 'password');
    expect(result).toBeNull();
  });

  test('should get user by email', () => {
    const user = getUserByEmail('maria.gomez@example.com');
    expect(user).toBeTruthy();
    expect(user?.fullName).toBe('Maria Gomez');
  });

  test('should check if user is active', () => {
    const activeUser = getUserByEmail('john.perez@example.com');
    const inactiveUser = getUserByEmail('carlos.rodriguez@example.com');

    expect(isUserActive(activeUser!)).toBe(true);
    expect(isUserActive(inactiveUser!)).toBe(false);
  });
});
