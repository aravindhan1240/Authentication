import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionAdventureComponent } from './action-adventure/action-adventure.component';
import { ChildrenComponent } from './children/children.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';
import { HorrorComponent } from './horror/horror.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RomanceComponent } from './romance/romance.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"home",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"register",component:RegisterComponent},
  {path:"romance",component:RomanceComponent},
  {path:"horror",component:HorrorComponent},
  {path:"history",component:HistoryComponent},
  {path:"action-adventure",component:ActionAdventureComponent},
  {path:"children",component:ChildrenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
