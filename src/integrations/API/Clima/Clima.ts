import KEY from '../../../../ENV';

export default class Clima {
  private CITY: string;

  constructor(city: string) {
    this.CITY = city;
  }

  getData(): Promise<any> {
    return new Promise((resolve, reject) => {
      fetch(`http://api.weatherapi.com/v1/current.json?key=${KEY['WEATHER-API']}&q=${this.CITY}&aqi=no`, {
        'mode':'cors',
      })
        .then((response) => response.json())
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
