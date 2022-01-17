import { Injectable } from '@angular/core';
import { User } from './user';
import { Repos } from './repos'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
 
  user!: User;
  allRepos!: Repos;

  constructor(private http: HttpClient) { 
    this.user = new User("","",""," ","","",0,0,0,"",new Date);
    this.allRepos = new Repos("","","",new Date,0,0,"");
  }

SearchUser(){

  let promise = new Promise<void>((resolve,reject)=>{
    this.http.get<Response>(environment.apiKey).toPromise().then(()=>{
      this.user.user = Response.name;
      resolve()
    },
    error=>{
      
      console.log(error)
    

      reject(error)
    })
  })
  return promise
}

getReopos(searchName: string){

  let promise = new Promise<void>((resolve,reject)=>{
    this.http.get<Response>(environment.apiKey).toPromise().then(()=>{
      this.allRepos.allRepo = Response;
      resolve()
    },
    error=>{
      
      console.log(error)
    

      reject(error)
    })
  })
  return promise
}

}