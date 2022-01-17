import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user!: User;
  repo!: any[];
  User!: Promise<void>;
  constructor(public myservice:UserserviceService) {
    this.User=myservice.SearchUser();

   }
searchs(searchName: any){



}


  ngOnInit(): void {

    interface Responce {
      url:string,
      login: string;
      html_url:string;
      location:string
      public_repos:number;
      followers:number;
      following:number;
      avatar_url:string;
      created_at:Date;
    }


    this.myservice.SearchUser();
    this.user= this.myservice.user
    this.searchs('faisoabdirisak');
  }
}
