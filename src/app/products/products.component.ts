import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
titre:string= "Welcome to products page"
  imageUrl= "assets/img/bg/footer-left.svg";
  property:boolean=false;
  name='nour';
  isvisible=false;
  items:string[]=["item1", "item2", "item3"];
  buttonClass:string='template1';

  onClick(){
    alert('button clicked!')
  }
 togglecolor(){
    this.buttonClass= this.buttonClass==='template1'?'template2':'template1';
 }
 color:string[]=['purple','blue','red','green','orange','pink', 'yellow'];
  currentColor:string=this.color[0];
  colorindex:number=0;
  changecolor(){
    this.colorindex=(this.colorindex+1)% this.color.length;
    this.currentColor=this.color[this.colorindex]
  }
}
