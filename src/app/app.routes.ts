import { Routes } from '@angular/router';
import WelcomeComponent from './welcome/welcome.component';
import LogInComponent from './log-in/log-in.component';
import ControUserComponent from './contro-user/contro-user.component';
import StateUserComponent from './state-user/state-user.component';

export const routes: Routes = [

    {path: 'welcome',component:WelcomeComponent},
    {path: 'log-in',component:LogInComponent },
    {path: 'contro-user',component:ControUserComponent },
    {path: 'state-user',component: StateUserComponent },

    {path: '',redirectTo :'/welcome',pathMatch:'full'},

];

