import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { AddComponent } from './body/add/add.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from  '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { ViewComponent } from './body/view/view.component';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatInputModule} from '@angular/material/input';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './features/login/login.component';
import { ProductsComponent } from './tabs/products/products.component';
import { RulesComponent } from './tabs/rules/rules.component';
import { AboutComponent } from './tabs/about/about.component';
import { NotFoundComponent } from './tabs/not-found/not-found.component';
import { ChangelogComponent } from './features/changelog/changelog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { AuthguardGuard } from './authguard.guard';




@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    AddComponent,
    ViewComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    ProductsComponent,
    RulesComponent,
    AboutComponent,
    NotFoundComponent,
    ChangelogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    FormsModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatIconModule
    
    
  ],
  providers: [AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
