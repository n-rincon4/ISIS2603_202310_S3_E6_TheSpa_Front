import { Component, OnInit } from '@angular/core';
import { PackService } from '../pack.service';
import { PackDetail } from '../pack-detail';

@Component({
  selector: 'app-pack-list',
  templateUrl: './pack-list.component.html',
  styleUrls: ['./pack-list.component.css']
})
export class PackListComponent implements OnInit {

  packs: PackDetail[] = [];
  selectedPack: PackDetail = undefined as any;
  selected = false;

  constructor(private packService: PackService) { }

  getPacks(): void {
    this.packService.getPacks().subscribe(packs => this.packs = packs);
  }

  selectPack(pack: PackDetail): void {
    this.selected = true;
    this.selectedPack = pack;
  }

  ngOnInit() {
    this.getPacks();
  }

}
