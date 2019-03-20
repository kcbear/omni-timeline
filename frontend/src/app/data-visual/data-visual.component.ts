import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data/data.service';

@Component({
  selector: 'app-data-visual',
  templateUrl: './data-visual.component.html',
  styleUrls: ['./data-visual.component.css']
})
export class DataVisualComponent implements OnInit {

  model: any;

  constructor(private service: DataService) { }

  ngOnInit() {
    this.service.getAll().subscribe(data => {
      this.model = data;
    });
  }

}
