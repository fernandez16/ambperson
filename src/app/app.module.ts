import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './Person/list/list.component';
import { AddComponent } from './Person/add/add.component';
import { EditComponent } from './Person/edit/edit.component';
import { ServiceService } from './Service/service.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, ListComponent, AddComponent, EditComponent],
  imports: [FormsModule, BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [ServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
