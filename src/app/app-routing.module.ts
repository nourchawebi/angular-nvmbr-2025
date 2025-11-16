import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {HeaderfooterComponent} from "./headerfooter/headerfooter.component";
import {HomeComponent} from "./home/home.component";
import {UsersComponent} from "./users/users.component";
import {ProductsComponent} from "./products/products.component";
import {LoginComponent} from "./login/login.component";
import {NotfoundComponent} from "./notfound/notfound.component";

const routes: Routes = [
  {path:'acceuil',component:HeaderfooterComponent,
  children:[{path:'', component: HomeComponent},
    {path:'users', component: UsersComponent},
    {path:'products', component:ProductsComponent}
  ]
  },
  {path:'login', component:LoginComponent},
  {path:'', redirectTo:'acceuil', pathMatch:'full'},
  {path:'notfound', component: NotfoundComponent},
  {path:'**', redirectTo:'notfound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
