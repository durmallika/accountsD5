export class AccountsD5 {

 public  acNo:number;
    public  actype:string;
    public  balance:number;
    public  description:string;

    public constructor(acNo:number , actype:string, balance:number ,  description:string) {
         this.acNo=acNo;
         this.actype=actype;
         this.balance=balance;
         this.description=description;
    }

}
