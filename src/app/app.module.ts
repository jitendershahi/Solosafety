import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppComponent } from '@app/app.component'
import { BaseModule } from '@app/layout/base.module'
import { approuting } from '@app/app.routing'
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'
import { HttpModule } from '@angular/http'

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    BaseModule,
    approuting,
    HttpClientModule,
    HttpModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
