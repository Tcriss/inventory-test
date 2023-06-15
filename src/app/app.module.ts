import { TuiRootModule, TuiDialogModule, TuiAlertModule, TuiSvgModule } from "@taiga-ui/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ItemsComponent } from './views/items/items.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AppbarComponent } from './components/appbar/appbar.component';
import { ItemComponent } from './components/item/item.component';
import { CardsComponent } from './components/cards/cards.component';
import { TuiMarkerIconModule } from "@taiga-ui/kit";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ItemsComponent,
    SidebarComponent,
    AppbarComponent,
    ItemComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      BrowserAnimationsModule,
      TuiRootModule,
      TuiDialogModule,
      TuiAlertModule,
      TuiSvgModule,
      TuiMarkerIconModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
