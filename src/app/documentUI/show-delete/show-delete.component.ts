import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-delete',
  templateUrl: './show-delete.component.html',
  styleUrls: ['./show-delete.component.css']
})
export class ShowDeleteComponent implements OnInit {

  constructor(private service:SharedService) { }

  DocumentList:any=[];

  ModalTitle:string="";
  ActiveAddEditDocComp:boolean=false;
  doc:any;

  ngOnInit(): void {
    this.refreshDocList();
  }

  addClick(){
    this.doc={
      Name:"",
      Date:"",
      Created:"",
      DueDate:"",
      Priority:""
    }
    this.ModalTitle="Add Document";
    this.ActiveAddEditDocComp=true;
  }

  editClick(item: any){
    this.doc=item;
    this.ModalTitle="Edit Document";
    this.ActiveAddEditDocComp=true;
  }

  closeClick(){
    this.ActiveAddEditDocComp=false;
    this.refreshDocList();
  }

  refreshDocList(){
    this.service.getDocList().subscribe(data=>{
      this.DocumentList=data;
    });
  }

}
