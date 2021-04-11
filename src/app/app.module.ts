import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/views/home/home.component';
import { DetailComponent } from './components/views/detail/detail.component';
import { FormComponent } from './components/form/form.component';
import { GridComponent } from './components/grid/grid.component';
import { GridItemComponent } from './components/grid-item/grid-item.component';
import { GridItemDetailsComponent } from './components/grid-item-details/grid-item-details.component';
import { localStorageService } from './services/istorage.service';
import { ISTORAGESERVICE } from './services/injection.tokens';
import { AddFormComponent } from './components/add-form/add-form.component';
import { EditFormComponent } from './components/edit-form/edit-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
    FormComponent,
    GridComponent,
    GridItemComponent,
    GridItemDetailsComponent,
    AddFormComponent,
    EditFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  bootstrap: [AppComponent],
  providers: [{
    provide: ISTORAGESERVICE,
    useValue: localStorageService
  }]
})
export class AppModule { }
