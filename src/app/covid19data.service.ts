import { Injectable } from '@angular/core';
import { Papa } from 'ngx-papaparse';

@Injectable()
export class Covid19DataService {
  data: string;

  constructor(private papa: Papa) {
    let csvData = '"https://github.com/CSSEGISandData/COVID-19/blob/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv"';

    let options = {
        complete: (results, file) => {
            console.log('Parsed: ', results, file);
            this.data = results;
        },
        // Add your options here
        download: true
    };

        this.papa.parse(csvData,options);

  }

  getData(): string {
    return this.data;
  }
}