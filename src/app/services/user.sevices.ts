import { Injectable } from '@angular/core';
import { User } from '../models/user';
import * as bcrypt from 'bcryptjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [];

  constructor() {
    this.generateUser();
  }

  login(user: string, password: string): User | null {

    const foundUser = this.users.find(u => u.user === user);
    if (foundUser && bcrypt.compareSync(password, foundUser.password!)) {
      return foundUser;
    }
    return null;
  }

  generateUser() {

    this.users = [

      {
        identification: '0106453631',
        customertype: 'TITULAR',
        accounttype: 'CUENTA ACTIVA',
        accountnumber: '20010453654',
        salC: '$40,73',
        salD: '$80,73',
        Status: 'ACTIVA',
        salR: '$0,00',
        salA: '$1,00',
        user: 'user',
        password: bcrypt.hashSync('pass1234', 10),
        icon: 'metro',
        question: '¿Cuál fue tu prime sueldo?',
        answer: '100',
        first_name: 'Diana',
        last_name: 'Lopez'

      },

      {
        identification: '0109453634',
        customertype: 'TITULAR',
        accounttype: ' CUENTA INACTIVA',
        accountnumber: '33010453654',
        salC: '$60,73',
        salD: '$100,73',
        Status: 'INACTIVA',
        salR: '$30,00',
        salA: '$15,00',
        user: 'userad',
        password: bcrypt.hashSync('pass12', 10),
        icon: 'impresora',
        question: '¿Cuál es tu color favorito?',
        answer: 'azul',
        first_name: 'Carolina',
        last_name: 'Calle'

      },
      {
        identification: '0107453631',
        customertype: 'TITULAR',
        accounttype: ' CUENTA ACTIVA',
        accountnumber: '90010453654',
        salC: '$10,73',
        salD: '$200,73',
        Status: 'ACTIVA',
        salR: '$0,00',
        salA: '$1,00',
        user: 'jeff',
        password: bcrypt.hashSync('pass123', 10),
        icon: 'calculadora',
        question: '¿Cuál es su animal favorito?',
        answer: 'iguana',
        first_name: 'Ismael',
        last_name: 'Condo'

      }, {

        identification: '0107463532',
        customertype: 'TITULAR',
        accounttype: ' CUENTA ACTIVA',
        accountnumber: '112310453654',
        salC: '$100,73',
        salD: '$200,73',
        Status: 'ACTIVA',
        salR: '$60,00',
        salA: '$41,00',
        user: 'divco',
        password: bcrypt.hashSync('upcat33', 10),
        icon: 'corazon',
        answer: 'maria',
        question: '¿Cuál como se llama tu mama?',
        first_name: 'jefferson',
        last_name: 'Cepeda'

      }];
  }


}
