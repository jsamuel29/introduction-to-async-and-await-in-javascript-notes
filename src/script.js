const login = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('user logged in...');
    }, 2000);
  });
}

const updateAccount = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('updating last login...');
    }, 2000);
  });
}

async function loginActivities() {
  const returnedLogin = await login();
  console.log(returnedLogin);
  
  const returnedUpdateAccount = await updateAccount();
  console.log(returnedUpdateAccount);
}

loginActivities();