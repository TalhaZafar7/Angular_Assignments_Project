import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {
  result:"Login Success ";
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  validating(fname: HTMLInputElement,lname: HTMLInputElement, 
    email: HTMLInputElement,  pwd: HTMLInputElement){
      if(fname.value === "")
      {
        if(lname.value==="")
        {
          if(email.value==="")
          {
            if(pwd.value===""){
              fname.style.backgroundColor="lightpink";
              lname.style.backgroundColor="lightpink";
              email.style.backgroundColor="lightpink";
              pwd.style.backgroundColor="lightpink";
              alert("Must Enter the First & Last Names,email and password.!");
            }
            else{
              fname.style.backgroundColor="lightpink";
              lname.style.backgroundColor="lightpink";
              email.style.backgroundColor="lightpink";
              pwd.style.backgroundColor="lightgreen";
              alert("Must Enter the First & Last Names and email.!");
            }
          }
          else if(pwd.value===""){
            fname.style.backgroundColor="lightpink";
            lname.style.backgroundColor="lightpink";
            email.style.backgroundColor="lightgreen";
            pwd.style.backgroundColor="lightpink";
            alert("Must Enter the First & Last Names and password.!");
          }
          else{
            fname.style.backgroundColor="lightpink";
            lname.style.backgroundColor="lightpink";
            email.style.backgroundColor="lightgreen";
            pwd.style.backgroundColor="lightgreen";
            alert("Must Enter the First & Last Names.!");
          }
        }
        else if(email.value==="")
        {
          if(pwd.value===""){
            fname.style.backgroundColor="lightpink";
            lname.style.backgroundColor="lightgreen";
            email.style.backgroundColor="lightpink";
            pwd.style.backgroundColor="lightpink";
            alert("Must Enter the First Name,email and password.!");
          }
          else{
            fname.style.backgroundColor="lightpink";
            lname.style.backgroundColor="lightgreen";
            email.style.backgroundColor="lightpink";
            pwd.style.backgroundColor="lightgreen";
            alert("Must Enter the First Name and email.!");
          }
        }
        else if(pwd.value===""){
          fname.style.backgroundColor="lightpink";
          lname.style.backgroundColor="lightgreen";
          email.style.backgroundColor="lightgreen";
          pwd.style.backgroundColor="lightpink";
          alert("Must Enter the First Name and password.!");
        }
        else
        {
          fname.style.backgroundColor="lightpink";
          lname.style.backgroundColor="lightgreen";
          email.style.backgroundColor="lightgreen";
          pwd.style.backgroundColor="lightgreen";
          alert( "Must Enter the First Name.!");
        }
      }
      else
      {
        if(lname.value==="")
        {
          if(email.value==="")
          {
            if(pwd.value===""){
              fname.style.backgroundColor="lightgreen";
              lname.style.backgroundColor="lightpink";
              email.style.backgroundColor="lightpink";
              pwd.style.backgroundColor="lightpink";
              alert("Must Enter the Last Name,email and password.!");
            }
            else{
              fname.style.backgroundColor="lightgreen";
              lname.style.backgroundColor="lightpink";
              email.style.backgroundColor="lightpink";
              pwd.style.backgroundColor="lightgreen";
              alert("Must Enter the  Last Name and email.!");
            }
          }
          else if(pwd.value===""){
            fname.style.backgroundColor="lightgreen";
            lname.style.backgroundColor="lightpink";
            email.style.backgroundColor="lightgreen";
            pwd.style.backgroundColor="lightpink";
            alert("Must Enter the Last Name and password.!");
          }
          else{
            fname.style.backgroundColor="lightgreen";
            lname.style.backgroundColor="lightpink";
            email.style.backgroundColor="lightgreen";
            pwd.style.backgroundColor="lightgreen";
            alert("Must Enter the Last Name.!");
          }
        }
        else if(email.value==="")
        {
          if(pwd.value===""){
            fname.style.backgroundColor="lightgreen";
            lname.style.backgroundColor="lightgreen";
            email.style.backgroundColor="lightpink";
            pwd.style.backgroundColor="lightpink";
            alert("Must Enter the email and password.!");
          }
          else{
            fname.style.backgroundColor="lightgreen";
            lname.style.backgroundColor="lightgreen";
            email.style.backgroundColor="lightpink";
            pwd.style.backgroundColor="lightgreen";
            alert("Must Enter the email.!");
          }
        }
        else if(pwd.value===""){
          fname.style.backgroundColor="lightgreen";
          lname.style.backgroundColor="lightgreen";
          email.style.backgroundColor="lightgreen";
          pwd.style.backgroundColor="lightpink";
          alert("Must Enter the password.!");
        }
        else{
          fname.style.backgroundColor="lightgreen";
          lname.style.backgroundColor="lightgreen";
          email.style.backgroundColor="lightgreen";
          pwd.style.backgroundColor="lightgreen";
          alert("SUCCEED.!");
        }
      }    
    }
}

