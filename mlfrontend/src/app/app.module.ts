import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import {MaterialModule} from './shared/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SideNavComponent} from './shared/layouts/main-layout/side-nav/side-nav.component';
import {NavBarComponent} from './shared/layouts/main-layout/nav-bar/nav-bar.component';
import {MainLayoutComponent} from './shared/layouts/main-layout/main-layout.component';
import {HttpClientModule} from '@angular/common/http';
import {HomeService} from './services/home.service';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SideNavComponent,
    NavBarComponent,
    MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    CommonModule,
    FlexLayoutModule,
    NgxChartsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [HomeService],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
