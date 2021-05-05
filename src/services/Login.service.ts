function setLoggedInUser(userId: string) {
  localStorage.setItem('userId', userId);
  return Promise.resolve();
}

export const LoginService = { setLoggedInUser };
