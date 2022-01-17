import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { RepositoriesComponent } from './repositories/repositories.component';

const routes: Routes = [
{path:"user-profile", component:ProfileComponent},
{path:"search-repo", component:RepositoriesComponent},
{path: "**", redirectTo:"/user-profile", pathMatch:"full"},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
