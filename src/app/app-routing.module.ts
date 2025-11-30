import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {HeaderfooterComponent} from "./headerfooter/headerfooter.component";
import {HomeComponent} from "./home/home.component";
import {UsersComponent} from "./users/users.component";
import {ProductsComponent} from "./products/products.component";
import {LoginComponent} from "./login/login.component";
import {NotfoundComponent} from "./notfound/notfound.component";
import {ModalComponent} from "./modal/modal.component";
import {AjoutproduitComponent} from "./pages/ajoutproduit/ajoutproduit.component";
import {ProduitsComponent} from "./pages/produits/produits.component";

import {DetailsproduitsComponent} from "./pages/detailsproduits/detailsproduits.component";
import {AdminComponent} from "./pages/admin/admin.component";
import {UnauthorizedComponent} from "./pages/unauthorized/unauthorized.component";
import {authGuard, authGuardadmin} from "./services/auth.guard";

const routes: Routes = [
  {path:'acceuil',component:HeaderfooterComponent,canActivate:[authGuard],
  children:[{path:'', component: HomeComponent},
    {path:'users', component: UsersComponent,canActivate:[authGuard]},
    {path:'products', component:ProductsComponent,canActivate:[authGuard]},
    {path:'ajoutproduit', component:AjoutproduitComponent,canActivate:[authGuard]},
    {path:'produits', component:ProduitsComponent,canActivate:[authGuard]},
    {path:'produit/:id', component:DetailsproduitsComponent,canActivate:[authGuard]}
  ]
  },
  {path:'admin', component:AdminComponent,canActivate:[authGuardadmin]},
  {path:'login', component:LoginComponent},
  {path:'unauthorized', component:UnauthorizedComponent},
  {path:'modal', component: ModalComponent},
  {path:'', redirectTo:'acceuil', pathMatch:'full'},
  {path:'notfound', component: NotfoundComponent},
  {path:'**', redirectTo:'notfound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
