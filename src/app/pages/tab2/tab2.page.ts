import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  categorias  =["business", "entertainment","health","science", "sports" ,"technology"]
 @ViewChild(IonSegment) segmmet :IonSegment
  constructor() {}
 
ngOnInit(){
  this.segmmet.value = this.categorias[0]
}

}
