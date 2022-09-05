import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/modal/modal.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public today = new Date().getFullYear() ;
  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
    
  }

  openModal(id: string) {
    this.modalService.open(id);
}

closeModal(id: string) {
    this.modalService.close(id);
}

}
