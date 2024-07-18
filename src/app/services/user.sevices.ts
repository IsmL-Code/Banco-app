import { Injectable } from '@angular/core';
import { User } from '../models/user';
import * as bcrypt from 'bcryptjs';
import { Question } from '../models/questions';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [];
  preguntas: Question[] = [];

  constructor() {
    this.generateUser();
    this.buildQuestions();
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
        password: bcrypt.hashSync('divco123', 10),
        icon: 'televisor',
        first_name: 'jefferson',
        last_name: 'Cepeda',
        question1: 'pollo',
        question2: 'mora' ,
        question3: 'Pedro',
        question4: 'julio'

      }, {

        identification: '0208463532',
        customertype: 'TITULAR',
        accounttype: ' CUENTA ACTIVA',
        accountnumber: '112880453654',
        salC: '$300,73',
        salD: '$70,73',
        Status: 'ACTIVA',
        salR: '$60,00',
        salA: '$461,00',
        user: 'isml',
        password: bcrypt.hashSync('isml123', 10),
        icon: 'corazon',
        first_name: 'Ismael',
        last_name: 'Condo',
        question1: 'inguana',
        question2: 'manzana' ,
        question3: 'Esteban',
        question4: 'febrero'

      }, {

        identification: '0208463532',
        customertype: 'TITULAR',
        accounttype: ' CUENTA ACTIVA',
        accountnumber: '122880453654',
        salC: '$10,73',
        salD: '$700,73',
        Status: 'ACTIVA',
        salR: '$600,00',
        salA: '$460,00',
        user: 'glory',
        password: bcrypt.hashSync('glory123', 10),
        icon: 'telefono',
        first_name: 'Kasandra',
        last_name: 'Condo',
        question1: 'gato',
        question2: 'pera' ,
        question3: 'Esteban',
        question4: 'junio'

      }];
  }

  buildQuestions(){
    this.preguntas = [{
      llave:1,
      descripcion:'¿Cuales su  animal  favorito?'
    }, {
      llave:2,
      descripcion:'¿Cual es fruta preferida?'
    }, {
      llave:3,
      descripcion:'¿Como se llama  tu papá?'
    },
    {
      llave:4,
      descripcion:'¿En que mes es tu cumpleanios?'
    }]
  }


}
