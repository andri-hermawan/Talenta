import { Component, OnInit,TemplateRef } from '@angular/core';
import { LoopbackService } from '../.././shared/loopback.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public data = [];
  public modalRef: BsModalRef;
  employeesName:string; images:string; jobPositions:string; totalCourse:number; signUp:string ="2017-10-07 13:52:39";
  constructor(private service: LoopbackService, private modalService: BsModalService) {}
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  onSave(){
    console.log("vvavas")
    var data ={
      employeesName:this.employeesName, images:this.images,
      jobPositions:this.jobPositions, totalCourse:this.totalCourse,
      signUp:this.signUp
    }

    this.service.service("/api/usersses", data).subscribe(cb => {
      // this.capacity.push(cb);
      console.log(cb)
    })
  }


  ngOnInit() {
    this.service.read("/api/usersses").subscribe(result => {
      this.data = result;
      // console.log(this.data)
    })
  }



}
