import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccountsD5 } from './model/accounts-d5.model';
import { Observable } from 'rxjs';
import { AppResponse } from './model/app.response.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'accountsD5';

  acNo:number=0;
  actype:string="";
  balance:number=0;
  description:string="";
  jocker:string="NAMSTE!";
  //Creating ArrayList =new ArrayList<>()
  public accounts:AccountsD5[]=[]; 

  private httpClient : HttpClient;

  //@Autowired
  //'constructor(httpClient:  ' this is constructor injection 
  //& here , we have autowired httpClient, & what it does:: ....
  public constructor(httpClient : HttpClient){
     this.httpClient = httpClient;
  }

  ngOnInit(): void {
     let ac1:AccountsD5=new AccountsD5(939393939,"Current",234324,"This new account");
     let ac2:AccountsD5=new AccountsD5(324324324,"Saving",1000,"This new account1");
     let ac3:AccountsD5=new AccountsD5(543544,"Checking",29292,"This new account2");
     let ac4:AccountsD5=new AccountsD5(9879789,"Family",2000,"This new account3");
     let ac5:AccountsD5=new AccountsD5(10000,"Not Okay",3000,"This old account3");
     this.accounts.push(ac1); //[0]
     this.accounts.push(ac2); //[1]
     this.accounts.push(ac3); //[2]
     this.accounts.push(ac4); //[3]
     this.accounts.push(ac5);
     
  }

  public createAccount():void {
    console.log("Ahahahah");
    let ac:AccountsD5=new AccountsD5(this.acNo,this.actype,this.balance,this.description);
    this.accounts.push(ac);

    //Make a call to Rest API - his.httpClient.post<AppResponse>("http://localhost:444/v4/accounts",
    // here, 1st one 'acNo' is key & the 2nd one 'this.acNo' is value..
    var obj ={acNo:this.acNo,type:this.actype,balance:this.balance,description:this.description};
    let result:Observable<AppResponse> =this.httpClient.post<AppResponse>("http://localhost:444/v4/accounts",obj);
    result.subscribe(function(data){
      console.log(data);
    });
    this.cleatText();
  }

  private cleatText(){
    this.acNo=0;
    this.actype="";
    this.balance=0;
    this.description="";
  }

  public cdelete(account:AccountsD5):void {
    console.log(account); 
    this.accounts=this.accounts.filter(ac=>ac.acNo!=account.acNo);
  }

}
