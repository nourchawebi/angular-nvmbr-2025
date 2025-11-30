import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Produit} from "../models/produits";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {

  constructor(private http: HttpClient,private authService:AuthService) {
  }
  private baseUrl: string = 'http://localhost:8082/Produits';
  //Create a new product
  createProduit(produit: Produit, image: any) {
    const formData = new FormData();
    formData.append('libelle', produit.libelle || '');
    formData.append('description', produit.description || '');
    formData.append('prixHC', produit.prixHC != null ? produit.prixHC.toString() : '');
    formData.append('prixHT', produit.prixHT != null ? produit.prixHT.toString() : '');
    formData.append('TVA', produit.tva || '');
    formData.append('marque', produit.marque || '');
    formData.append('etat', produit.etat != null ? produit.etat.toString() : '');
    formData.append('creationDate', produit.creationDate.toString());
    formData.append('livraisonGratuite', produit.livraisonGratuite != null ? produit.livraisonGratuite.toString() : '');
    formData.append('picture', image);
    return this.http.post<Produit>(`${this.baseUrl}C`, formData,this.authService.createAuthorization());
  }

  getAllProduits() {
    return this.http.get<Produit[]>(this.baseUrl,this.authService.createAuthorization())
  }

  deleteProduit(id: number) {
    return this.http.delete<void>(`${this.baseUrl}D/${id}`,this.authService.createAuthorization());
  }
  getProduitById(id:number){
    return this.http.get<Produit>(`${this.baseUrl}/${id}`,this.authService.createAuthorization());
  }
  updateProduit(id:number,produit:Produit){
    return this.http.put<Produit>(`${this.baseUrl}U/${id}`,produit,this.authService.createAuthorization());
  }
}
