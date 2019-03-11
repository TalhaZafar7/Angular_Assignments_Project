import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  tester(username: HTMLInputElement, password: HTMLInputElement) {
    if(username.value === "eagle7@eye.com" && password.value === "lier") {
      alert("Login Success...");
    } else {
      alert("Incorrect Email or Password...!");
    }
  }

}