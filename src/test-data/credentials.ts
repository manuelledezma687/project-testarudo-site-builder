import users from './users.json';

export type UserRole = 'admin' | 'student';

const emailByRole: Record<UserRole, string> = {
  admin: users.adminUser.email,
  student: users.StudentUser.email,
};

const passwordByRole: Record<UserRole, string> = {
  admin: process.env.ADMIN_PASSWORD!,
  student: process.env.STUDENT_PASSWORD!,
};

export function getCredentials(role: UserRole) {
  return {
    email: emailByRole[role],
    password: passwordByRole[role],
  };
}
