import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  repo:any= [];
  constructor(private http:HttpClient) { }

  repoSearch(searchName: any){

    
  }
  
  ngOnInit(): void {
    interface Response{
          author: string;
          quote: string;
          name:string;
          html_url:string;
          description:string;
          forks:number;
          watchers:number;
          language:string;
          created_at:Date;
        }

  }

}
