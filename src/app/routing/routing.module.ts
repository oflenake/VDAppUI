import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { ServicesComponent } from '../services/services.component';
import { ProductsComponent } from '../products/products.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ContactComponent } from '../contact/contact.component';
import { AboutComponent } from '../about/about.component';
import { BlogComponent } from '../blog/blog.component';

import { RegisterComponent } from '../core/auth/components/register/register.component';
import { LoginComponent } from '../core/auth/components/login/login.component';

import { TermsComponent } from '../pages/legal/terms/terms.component';
import { PrivacyComponent } from '../pages/legal/privacy/privacy.component';
import { NotFoundComponent } from '../pages/errors/not-found/not-found.component';
import { ServerErrorComponent } from '../pages/errors/server-error/server-error.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'about', component: AboutComponent },
    { path: 'blog', component: BlogComponent },

    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },

    { path: 'legal/terms-of-service', component: TermsComponent },
    { path: 'legal/privacy-policy', component: PrivacyComponent },
    { path: '404', component: NotFoundComponent },
    { path: '500', component: ServerErrorComponent },

    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/404', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
