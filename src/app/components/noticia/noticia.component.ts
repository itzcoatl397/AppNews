import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces/interfaces';
import { ComponentsModule } from '../components.module';
import { NoticiasComponent } from '../noticias/noticias.component';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {
 @Input() noticia : Article;
 @Input() indice : number;
  constructor() { }

  ngOnInit() {}

}
