import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HelpersService } from './shared/services/helpers.service';
import { SharedModule } from './shared/components/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthGuard } from './shared/guards/auth.guard';
import { RestrictGuard } from './shared/guards/restrict.guard';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [HelpersService, AuthGuard, RestrictGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
