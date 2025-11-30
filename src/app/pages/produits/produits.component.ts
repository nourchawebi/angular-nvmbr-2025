import {Component, OnInit} from '@angular/core';
import {ProduitsService} from "../../services/produits.service";
import {PageEvent} from "@angular/material/paginator";
import {filter} from "rxjs";
import Swal from "sweetalert2";
import {MatDialog} from "@angular/material/dialog";
import {ModifierproduitComponent} from "../modifierproduit/modifierproduit.component";

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit{
  constructor(private productService:ProduitsService, public dialog:MatDialog) {
  }
  message:string='';
  produits:any=[];
  filtredproduit:any=[];
  getProducts(){
    this.productService.getAllProduits().subscribe({
      next:(response)=>{
        this.message="success";
        this.produits=this.filtredproduit=response;
        this.paginatedProducts()
      }
    })

  }
  ngOnInit() {
    this.getProducts()
  }
  paginatedProduit:any=[];
  pageSize=3;
  currentPage=0;
  handlePageEvent(event: PageEvent){
    this.pageSize=event.pageSize;
    this.currentPage=event.pageIndex
    this.paginatedProducts()
  }
  paginatedProducts(){
    const startIndex= this.currentPage*this.pageSize;
    const endIndex= startIndex + this.pageSize
    this.paginatedProduit=this.filtredproduit.slice(startIndex,endIndex);
  }
  filter:any;

  selecteetat: string= 'ALL';
  filtredproducts(){
    if(this.selecteetat!==undefined && this.selecteetat!=null && this.selecteetat!="ALL"){
      const selectdEtatNumber= Number(this.selecteetat);
     this.filter= this.filtredproduit=this.produits.filter((produit:any)=>produit.etat===selectdEtatNumber);
    }else{
      this.getProducts();

    }
    this.paginatedProducts();
  }
  searchKeyword='';
    searchProduits(){

      if(this.searchKeyword){
        this.filtredproduit=this.filtredproduit.filter((produit:any)=>
          produit.libelle.toLowerCase().includes(this.searchKeyword.toLowerCase())||
          produit.marque.toLowerCase().includes(this.searchKeyword.toLowerCase())
        )
      } else {
        this.filtredproduit=this.filter||this.produits;
      }
    this.paginatedProducts();
  }
  OndeleteProduct(id:number|undefined){
      if(id!=null){
        Swal.fire({
          title:'étes-vous sur?',
          text:'Vous ne pourrez pas revenir en arrière!',
          icon: 'warning',
          showCancelButton:true,
          cancelButtonColor:'#3085d6',
          confirmButtonColor:'#d33',
          confirmButtonText:'Oui, supprimez-le!'
        }).then((result)=>{
          if(result.isConfirmed){
            this.productService.deleteProduit(id).subscribe(
              data =>{
                Swal.fire('Supprimé', 'Votre produit aa été supprimé','success');
                this.getProducts();
              }
            )
          }
        })
      }
  }
  selectedProduit:any;
  openDialog(produit:any){
      this.selectedProduit=produit;
      const dialogRef= this.dialog.open(
        ModifierproduitComponent,
        {
          width:'auto',
          data:{
            produit:this.selectedProduit
          }
        }  );
        dialogRef.componentInstance.update.subscribe(
          (updateproduit:any)=>{
            const index=this.produits.findIndex((item:any)=>item.idProduit===updateproduit.idProduit);
            if(index!=-1){
              this.produits[index].libelle=updateproduit.libelle;
              this.produits[index].description=updateproduit.description;
              this.produits[index].marque=updateproduit.marque;
              this.filtredproduit=this.produits;
            }
          }

      )

  }
}
