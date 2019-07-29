import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

const firebaseConfig = {
  apiKey: "AIzaSyAWTkrbHvz5M0r5IUxMR_MjCqI3tP5DL78",
  authDomain: "face-detection-project-f25e3.firebaseapp.com",
  databaseURL: "https://face-detection-project-f25e3.firebaseio.com",
  projectId: "face-detection-project-f25e3",
  storageBucket: "face-detection-project-f25e3.appspot.com",
  messagingSenderId: "741602435541",
  appId: "1:741602435541:web:999b3f98c3974965"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    ReactiveFormsModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
