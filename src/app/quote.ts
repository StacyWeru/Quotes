export class Quote {

    showDescription = false;
    constructor(
       public id:number,
       public author:string,
       public description:string,
       public user:string,
       public completeDate: Date) {
   }
    
}
