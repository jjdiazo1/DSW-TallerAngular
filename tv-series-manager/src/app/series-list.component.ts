import { Component, OnInit } from '@angular/core';
import { SerieService } from './serie.service'; // Adjust the path as necessary
import { Serie } from './serie'; // Adjust the path as necessary

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css'] // Include if you have CSS
})
export class SeriesListComponent implements OnInit {
  series: Serie[] = [];

  constructor(private serieService: SerieService) {}

  ngOnInit() {
    this.serieService.getSeries().subscribe((data: Serie[]) => {
      this.series = data;
    }, error => {
      console.error('There was an error retrieving the series data', error);
    });
  }
}
