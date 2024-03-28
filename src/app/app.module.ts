import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient, HttpBackend } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    AppRoutingModule,
    SharedModule,
  ],
  providers: [
    {
      provide: HttpClient,
      useFactory: provideHttpClient,
      deps: [HttpBackend]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function provideHttpClient(handler: HttpBackend) {
  return new HttpClient(handler);
}
