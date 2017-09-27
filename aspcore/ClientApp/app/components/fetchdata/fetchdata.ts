import { HttpClient } from 'aurelia-fetch-client';
import { inject } from 'aurelia-framework';

@inject(HttpClient)
export class Fetchdata {
    public forecasts: WeatherForecast[];

    constructor(private http: HttpClient) {

    }

    async attached(){
        // this.http.fetch('api/SampleData/WeatherForecasts')
        // .then(result => result.json() as Promise<WeatherForecast[]>)
        // .then(data => {
        //     this.forecasts = data;
        // });

        let result = await this.http.fetch('api/SampleData/WeatherForecasts');
        this.forecasts  =  await result.json() as WeatherForecast[];
        

    }
}

interface WeatherForecast {
    dateFormatted: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}
