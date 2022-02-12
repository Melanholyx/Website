import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './authguard.guard';
import { BodyComponent } from './body/body.component';
import { AboutComponent } from './tabs/about/about.component';
import { NotFoundComponent } from './tabs/not-found/not-found.component';
import { ProductsComponent } from './tabs/products/products.component';
import { RulesComponent } from './tabs/rules/rules.component';

const routes: Routes = [
  { path: '',   redirectTo: 'main', pathMatch: 'full' }, // redirect to `first-component`
  { path: 'main', component: BodyComponent },
  { path: 'products', canActivate: [AuthguardGuard], component: ProductsComponent },
  { path: 'rules', component: RulesComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: NotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})


export class AppRoutingModule { 
    
}
