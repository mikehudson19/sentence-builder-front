import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { SentencesService } from 'src/app/services/sentences.service';
import { ISentence } from 'src/app/types/ISentence';

@Component({
  selector: 'app-view-sentences',
  templateUrl: './view-sentences.component.html',
  styleUrls: ['./view-sentences.component.scss']
})
export class ViewSentencesComponent implements OnInit {

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

  constructor(private router: Router,
              private sentenceService: SentencesService,
              private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {

    this.breakpointObserver.observe('(max-width: 440px)').subscribe(x => {
        this.firstLastButtons = !x.matches;
    });

    this.sentenceService.list()
      .pipe(
        map(res => {
          return res.map((x: ISentence) => x.sentence);
        })
      )
      .subscribe(data => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
      });
  }

  addSentenceClick() {
    this.router.navigate(['/', 'create-sentence']);
  }

}
