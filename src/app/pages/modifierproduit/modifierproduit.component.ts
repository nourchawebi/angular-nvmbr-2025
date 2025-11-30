import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProduitsService} from "../../services/produits.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import Swal from "sweetalert2";

@Component({
  selector: 'app-modifierproduit',
  templateUrl: './modifierproduit.component.html',
  styleUrls: ['./modifierproduit.component.css']
})
export class ModifierproduitComponent implements  OnInit{
  produit:any;
  produitForm:FormGroup;
  constructor(private produitService:ProduitsService,
              private formBuilder:FormBuilder,
              public dialogRef:MatDialogRef<ModifierproduitComponent>,
              @Inject(MAT_DIALOG_DATA) public data:any
              ) {
    this.produit=data.produit;
    this.produitForm = this.formBuilder.group({
      idProduit:[this.produit.idProduit],
      libelle: [this.produit.libelle, Validators.required],
      description: [this.produit.description, Validators.required],
      prixHC: [this.produit.prixHC, Validators.required],
      prixHT: [this.produit.prixHT, Validators.required],
      tva: [this.produit.tva, Validators.required],
      marque: [this.produit.marque, Validators.required],
      etat: [this.produit.etat, Validators.required],
      livraisonGratuite: [this.produit.livraisonGratuite, Validators.required]

    })

  }
 ngOnInit() {
    this.initializeForm();
 }
 initializeForm(){
   this.produitForm = this.formBuilder.group({
     idProduit:[this.produit.idProduit],
     libelle: [this.produit.libelle, Validators.required],
     description: [this.produit.description, Validators.required],
     prixHC: [this.produit.prixHC, Validators.required],
     prixHT: [this.produit.prixHT, Validators.required],
     tva: [this.produit.tva, Validators.required],
     marque: [this.produit.marque, Validators.required],
     etat: [this.produit.etat, Validators.required],
     livraisonGratuite: [this.produit.livraisonGratuite, Validators.required]

   })
 }
 onNoClick(){
    this.dialogRef.close();
 }
 onSubmit(){
    if(this.produitForm.valid){
      const produitData= this.produitForm.value;
      this.updateProduit(this.produit.idProduit,produitData);

    }
 }
 @Output() update= new EventEmitter<any>();
 updateProduit(id:number,produitdata:any){
    this.produitService.updateProduit(id,produitdata).subscribe({
      next:(u)=>{
        this.update.emit(produitdata);
        Swal.fire({
          icon:'success',
          title:'modifier',
          text:'Produit modifié avec succès'
        });
        this.dialogRef.close();
      }
    })
 }
}
