import { TuiRootModule, TuiDialogModule, TuiAlertModule, TuiSvgModule, TuiButtonModule } from "@taiga-ui/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ItemsComponent } from './views/items/items.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AppbarComponent } from './components/appbar/appbar.component';
import { ItemComponent } from './components/recentItems/item.component';
import { CardsComponent } from './components/cards/cards.component';
import { TuiDataListWrapperModule, TuiFilterByInputPipeModule, TuiInputModule, TuiMarkerIconModule } from "@taiga-ui/kit";
import { ProductsComponent } from './components/products/products.component';
import { TuiMoneyModule } from "@taiga-ui/addon-commerce";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TuiBlockStatusModule } from "@taiga-ui/layout";
import { EmptyComponent } from './components/empty/empty.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ItemsComponent,
    SidebarComponent,
    AppbarComponent,
    ItemComponent,
    CardsComponent,
    ProductsComponent,
    EmptyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
      BrowserAnimationsModule,
      TuiRootModule,
      TuiDialogModule,
      TuiAlertModule,
      TuiSvgModule,
      TuiMarkerIconModule,
      TuiMoneyModule,
      TuiInputModule,
      TuiButtonModule,
      TuiDialogModule,
      TuiAlertModule,
      TuiMarkerIconModule,
      TuiBlockStatusModule,
      TuiDataListWrapperModule,
      TuiFilterByInputPipeModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
