import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {path: "", component: HomeComponent, children:[
    {path:"article", loadChildren:()=>import('../article/article.module').then(m=>m.ArticleModule)},
    {path:"", redirectTo:"home", pathMatch:"full"}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
