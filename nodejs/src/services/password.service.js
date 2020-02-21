import axios from 'axios';
const RANDOM_PASSWORD_ENDPOINT = 'https://www.passwordrandom.com/query';
const RANDOM_PASSWORD_OPTIONS = {
  params: {
    command: 'password',
    format: 'json',
    count: 1
  }
};

export default class PasswordService {
  async randomPassword(ctx) {
    const passwordObject = await axios.get(
      RANDOM_PASSWORD_ENDPOINT,
      RANDOM_PASSWORD_OPTIONS
    );
    return passwordObject.data.char;
  }
}
