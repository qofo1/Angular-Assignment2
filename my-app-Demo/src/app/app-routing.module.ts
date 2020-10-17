import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent, AboutComponent,  ContactComponent,
         ServicesComponent, PriceComponent,
          PortfolioComponent, BlogHomeComponent, BlogSingleComponent} from './view';

const routes: Routes = [
  {path: '', component:HomeComponent},
   {path: 'about', component: AboutComponent},
   {path: 'contact', component: ContactComponent},
  {path: 'services', component:ServicesComponent},
  {path: 'price', component:PriceComponent},
  {path: 'portfolio', component:PortfolioComponent},
  {path: 'bloghome', component:BlogHomeComponent},
  {path: 'blogsingle', component:BlogSingleComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
