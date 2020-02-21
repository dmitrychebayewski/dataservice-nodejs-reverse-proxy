import axios from 'axios';
import User from '../entities/user.entity';

const RANDOM_USER_ENDPOINT = 'https://randomuser.me/api';
const RANDOM_USER_OPTIONS = {
  params: {
    nat: 'nl',
    inc: 'gender,name,dob,email,login'
  }
};
const RANDOM_PASSWORD_ENDPOINT = 'https://www.passwordrandom.com/query';
const RANDOM_PASSWORD_OPTIONS = {
  params: {
    command: 'password',
    format: 'json',
    count: 1
  }
};

function userData(response) {
  return {
    email: JSON.stringify(response.data.results[0].email),
    userId: JSON.stringify(response.data.results[0].login.username),
    firstName: JSON.stringify(response.data.results[0].name.first),
    lastName: JSON.stringify(response.data.results[0].name.last)
  };
}

export default class UserService {
  async randomUser(ctx) {
    const response = await axios.get(RANDOM_USER_ENDPOINT, RANDOM_USER_OPTIONS);
    const userDataObject = userData(response);
    const passwordObject = await axios.get(
      RANDOM_PASSWORD_ENDPOINT,
      RANDOM_PASSWORD_OPTIONS
    );
    [userDataObject.password] = passwordObject.data.char;
    return User.create(userDataObject);
  }
}
