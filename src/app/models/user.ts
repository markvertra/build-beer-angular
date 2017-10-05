export class User {
  username: string;
  password: string;

  constructor(obj: Object = {}) {
    Object.assign(this, obj);
  }
}
