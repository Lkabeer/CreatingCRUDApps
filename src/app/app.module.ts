import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database-deprecated";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http/src/http_module';

var firebaseConfig = {
  apiKey: "AIzaSyAEYJPSnXKBSTsqYUTpXyi9seSP_RrbnEo",
  authDomain: "creatingcrudapp.firebaseapp.com",
  databaseURL: "https://creatingcrudapp.firebaseio.com",
  projectId: "creatingcrudapp",
  storageBucket: "creatingcrudapp.appspot.com",
  messagingSenderId: "30783503389"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
