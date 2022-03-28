import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-sentences',
  templateUrl: './view-sentences.component.html',
  styleUrls: ['./view-sentences.component.scss']
})
export class ViewSentencesComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = [ 'sentence' ];
  dataSource!: MatTableDataSource<any>;
  isHandset: boolean = false;

  // MatPaginator Inputs
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  firstLastButtons = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort: MatSort = new MatSort();

  constructor(private router: Router) {}

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    const data = <any>[
      'Tumblr kitsch cred VHS pok pok, shaman seitan direct trade enamel pin',
      'Banjo meggings biodiesel mixtape retro migas.',
      'Vice PBR&B kale chips, cloud bread messenger bag stumptown street art butcher dreamcatcher retro trust fund.',
      'Vice PBR&B kale chips, cloud bread messenger bag stumptown street art butcher dreamcatcher retro trust fund.','Tumblr kitsch cred VHS pok pok, shaman seitan direct trade enamel pin',
      'Banjo meggings biodiesel mixtape retro migas.',
      'Vice PBR&B kale chips, cloud bread messenger bag stumptown street art butcher dreamcatcher retro trust fund.',
      'Vice PBR&B kale chips, cloud bread messenger bag stumptown street art butcher dreamcatcher retro trust fund.','Tumblr kitsch cred VHS pok pok, shaman seitan direct trade enamel pin',
      'Banjo meggings biodiesel mixtape retro migas.',
      'Vice PBR&B kale chips, cloud bread messenger bag stumptown street art butcher dreamcatcher retro trust fund.',
      'Vice PBR&B kale chips, cloud bread messenger bag stumptown street art butcher dreamcatcher retro trust fund.'
  ];
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
  }

  addSentenceClick() {
    this.router.navigate(['/', 'create-sentence']);
  }

}
