import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {

  @Input() doc:any;
  id:number=0;
  Name:string="";
  Date:string="";
  Created:string="";
  DueDate:string="";
  PriorityId:number=0;

  constructor(private service:SharedService) { }

  ngOnInit(): void {
    this.Name=this.doc.Name;
    this.Date=this.doc.Date;
    this.Created=this.doc.Created;
    this.DueDate=this.doc.DueDate;
    this.PriorityId=this.doc.PriorityId;
  }

  addDoc(){
    var val = {Name:this.Name,
          Date:this.Date,
          Created:this.Created,
          DueDate:this.DueDate,
          PriorityId:this.PriorityId
        };
    this.service.addDoc(val).subscribe(res=>{
    alert(res.toString());
    });
  }

  updateDoc(){
    var val = {id:this.id,
      Name:this.Name,
      Date:this.Date,
      Created:this.Created,
      DueDate:this.DueDate,
      PriorityId:this.PriorityId
    };
    this.service.updateDoc(val).subscribe(res=>{
    alert(res.toString());
    });
  }

}
