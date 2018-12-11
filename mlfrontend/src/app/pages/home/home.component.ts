import { Component, OnInit } from '@angular/core';
import {DataLocation, Prediction, TrainingResult, WineProperties} from '../../model/models';
import {HomeService} from '../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dataLocation: DataLocation = new DataLocation();
  wineProperties: WineProperties = new WineProperties();
  trainingResult: TrainingResult;
  predictedResult: Prediction[];
  constructor(private _homeService: HomeService) { }

  // graph styling
  public colorScheme = {
    domain: ['#1a242c', '#e81746', '#e67303', '#f0f0f0']
  };

  ngOnInit() {

  }

  public trainModel() {
        this._homeService.trainModel(this.dataLocation).subscribe((response) => {
          this.trainingResult = response;
    });
  }


  public predictQuality() {
    this._homeService.predictQuality(this.wineProperties).subscribe((response) => {
      this.predictedResult = response;
    });
  }
}
