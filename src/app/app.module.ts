import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,
  MatFormFieldModule, MatInputModule, MatCardModule } from '@angular/material';
import { MainNavComponent } from './pages/main-nav/main-nav.component';
import { LoginComponent } from './pages/login/login.component';
import { Page1Component } from './pages/page1/page1.component';
import { Page2Component } from './pages/page2/page2.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'page1',      component: Page1Component },
  { path: 'page2',      component: Page2Component },
];

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    LoginComponent,
    Page1Component,
    Page2Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
