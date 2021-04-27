function setLoggedInUser(userData: any) {
    console.log(userData);
    
  localStorage.setItem('user', JSON.stringify(userData));
  return Promise.resolve();
}

export const LoginService = { setLoggedInUser };
