import NVector from './NVector';

interface User {
  name: string;
  id: number;
}

class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const v1: NVector = new NVector();
const user: User = new UserAccount("Murphy", 1);

console.log(user);
console.log(v1);
console.log(6);

if(module && module.hot) module.hot.accept()
