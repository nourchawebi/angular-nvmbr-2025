import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderfooterComponent } from './headerfooter/headerfooter.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { NotfoundComponent } from './notfound/notfound.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ModalComponent } from './modal/modal.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { AjoutproduitComponent } from './pages/ajoutproduit/ajoutproduit.component';
import { ProduitsComponent } from './pages/produits/produits.component';

import { ModifierproduitComponent } from './pages/modifierproduit/modifierproduit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatStepperModule} from "@angular/material/stepper";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatCardModule} from "@angular/material/card";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatDialogModule} from "@angular/material/dialog";
import {MatTableModule} from "@angular/material/table";
import { DetailsproduitsComponent } from './pages/detailsproduits/detailsproduits.component';
import { AdminComponent } from './pages/admin/admin.component';
import { UnauthorizedComponent } from './pages/unauthorized/unauthorized.component';
import {NgChartsModule} from "ng2-charts";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeaderfooterComponent,
    HomeComponent,
    LoginComponent,
    UsersComponent,
    ProductsComponent,
    NotfoundComponent,
    ModalComponent,
    AjoutproduitComponent,
    ProduitsComponent,
    ModifierproduitComponent,
    DetailsproduitsComponent,
    AdminComponent,
    UnauthorizedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatStepperModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatPaginatorModule,
    MatDialogModule,
    MatTableModule,
    NgChartsModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
