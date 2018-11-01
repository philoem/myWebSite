import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { ContentListComponent } from './content/content-list/content-list.component';
import { ContentFormComponent } from './content/content-form/content-form.component';
import { BoostComponent } from './content/boost/boost.component';

const appRoutes: Routes = [
  { path: 'content', component: ContentComponent },
  { path: 'content/list', component: ContentListComponent },
  { path: 'content/form', component: ContentFormComponent },
  { path: 'content/boost', component: BoostComponent },
  { path: '', redirectTo: 'content', pathMatch: 'full' },
  { path: '**', redirectTo: 'content' }

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    ContentListComponent,
    ContentFormComponent,
    BoostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
