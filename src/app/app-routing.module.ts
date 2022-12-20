import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { ProductComponent } from './product/product.component';
import { TestimonialComponent } from './testimonial/testimonial.component';

const routes: Routes = [
  {path:'',component:IndexComponent},
  {path:'index',component:IndexComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'blog',component:BlogComponent},
  {path:'product',component:ProductComponent},
  {path:'testimonial',component:TestimonialComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
