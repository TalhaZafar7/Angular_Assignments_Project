import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  url1: string = "http://www.mocky.io/v2/5c7fbf22330000aa24848313";
  url2: string = "http://www.mocky.io/v2/5c7fc26a330000aa24848336";
  url3: string = "http://www.mocky.io/v2/5c7fd57d330000c53784841e";
  url4: string = "http://www.mocky.io/v2/5c7fd98b3300006338848439";
  constructor(private http:HttpClient) { }

  ngOnInit() {
  }
  test:string;

  ts:string;
  
  count:number;
  
  response1: any;
  responses1:string[]=["","",""];
  
  response2: any;
  responses2:string[]=["","",""];
  
  response3: any;
  responses3:string[]=["","",""];
  
  response4: any;
  responses4:string[]=["","",""];

response:any;
  //web Assignments list
  web_assign() {
    this.http.get(this.url1).subscribe( e => {
    this.response1 = e;
    this.responses1=[this.response1.web_as1,this.response1.web_as2,this.response1.web_as3];
    });
    this.test = "OK";
    return false;
  }

  asp_assign() {
    this.http.get(this.url2).subscribe( e => {
    this.response2 = e;
    this.responses2=[this.response2.asp_as1,this.response2.asp_as2,this.response2.asp_as3];
    });
    this.test = "OK";
    return false;
  }

  aoa_assign() {
    this.http.get(this.url3).subscribe( e => {
    this.response3 = e;
    this.responses3 =[this.response3.aoa_as1,this.response3.aoa_as2,this.response3.aoa_as3];
    });
    this.test = "OK";
    return false;
  }

  aI_assign() {
    this.http.get(this.url4).subscribe( e => {
    this.response4 = e;
    this.responses4=[this.response4.aI_as1,this.response4.aI_as2,this.response4.aI_as3];
    });
    this.test = "OK";
    return false;
  }
}