export class User {
  id: string;
  password: string;
  username: string;


  constructor(obj: Object = {}) {
    Object.assign(this, obj);
  }
}
