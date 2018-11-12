import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'myWebSite';

  constructor() {
    var config = {
      apiKey: "AIzaSyBj5Ktl5FBGeT_S9WpJUyHAEiRXXvXIpHY",
      authDomain: "mywebsite-83d0f.firebaseapp.com",
      databaseURL: "https://mywebsite-83d0f.firebaseio.com",
      projectId: "mywebsite-83d0f",
      storageBucket: "",
      messagingSenderId: "141026132225"
    };
    firebase.initializeApp(config);
  }
  ngOnInit() {
    document.body.style.background = "url('/assets/img/color1.png') top center no-repeat fixed";
  }
}
