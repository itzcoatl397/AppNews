import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http:HttpClient) { }

  getTopHeadLines(){
     return this.http.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=3b36c8f40df749e1a6ca50b3db4e6c59`);
  }
}
