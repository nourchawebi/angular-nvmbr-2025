import {AfterViewInit, Component} from '@angular/core';
import {Modal} from "bootstrap";
import {Item} from "../models/items.model";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements AfterViewInit{
  Items: Item []=[
    {id:1, name:"Item1", quantity:5, available:true},
    {id:2, name:"Item2", quantity:5, available:false},
    {id:3, name:"Item3", quantity:5, available:true},
    {id:4, name:"Item4", quantity:5, available:false},
  ]
  modal!:Modal;
  ngAfterViewInit(){
    const el = document.getElementById('deleteModal')!;
    this.modal = Modal.getOrCreateInstance(el);
  }
  //ngOninit
  confirmDelete(){
   this.modal.show();
  }
  closeDelete(){
    this.modal.hide();
  }
  deleteItem(){
    console.log("Item deleted");
    this.closeDelete();
  }
  itemClick(item:Item){
    console.log('item clicked:', item);
  }
}
