import { Component, Input, OnInit } from '@angular/core';
import { SedeDetail } from '../sede-detail';
import { SedeService } from '../sede.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sede-detail',
  templateUrl: './sede-detail.component.html',
  styleUrls: ['./sede-detail.component.css']
})
export class SedeDetailComponent implements OnInit {

  sedeId!: string;
  @Input() sedeDetail!: SedeDetail;


  constructor(
    private route: ActivatedRoute,
    private sedeService: SedeService) { }

  getSede() {

    this.sedeService.getSede(this.sedeId).subscribe(sede => {
      this.sedeDetail = sede;
    });
  }

  ngOnInit() {
    if (this.sedeDetail === undefined) {
      this.sedeId = this.route.snapshot.paramMap.get('id')!
      if (this.sedeId) {
        this.getSede();
      }
    }

  }


}
