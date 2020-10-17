
import { NgModule, Component } from '@angular/core';
import {CommonModule } from '@angular/common';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {HomeComponent } from './home/home.component';
import {ServicesComponent } from './services/services.component';
import {PriceComponent } from './price/price.component'
import {PortfolioComponent } from './portfolio/portfolio.component';
import {BlogHomeComponent } from './blog-home/blog-home.component';
import {BlogSingleComponent } from './blog-single/blog-single.component';


@NgModule({
 declarations:[ HomeComponent, AboutComponent, ContactComponent, ServicesComponent,
    PriceComponent, PortfolioComponent, BlogHomeComponent, BlogSingleComponent, AboutComponent
 ],

 imports:[ CommonModule ],

 exports: [  
    HomeComponent,  AboutComponent, ContactComponent, ServicesComponent,
    PriceComponent, PortfolioComponent, BlogHomeComponent, BlogSingleComponent
     ]

})

export class ViewModule{}

