import { Component, OnInit } from '@angular/core';
import { Article, RespuestaTopHeadlines } from 'src/app/interfaces/interfaces';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
 noticias :Article [] = []
  constructor(private  noticiasServices: NoticiasService) {}
    
  ngOnInit(){
    this.noticiasServices.getTopHeadLines().subscribe(

     resp => {
        console.log(resp);
       this.noticias.push(...resp.articles)
      }
    )
  }
}
