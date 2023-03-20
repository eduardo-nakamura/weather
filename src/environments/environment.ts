// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  weatherApiBaseUrl: 'https://api.open-meteo.com/v1/forecast?latitude=-23.55&longitude=-46.64&hourly=temperature_2m,relativehumidity_2m,windspeed_10m&daily=temperature_2m_max,temperature_2m_min&forecast_days=1&timezone=America%2FSao_Paulo&current_weather=true',
  // XRapidAPIHostHeaderName: 'X-RapidAPI-Host',
  // XRapidAPIHostHeaderValue: 'open-weather13.p.rapidapi.com',
  // XRapidAPIKeyHeaderName: 'X-RapidAPI-Key',
  // XRapidAPIKeyHeaderValue: 'fd8aebff94mshc8f6abdcdefdf33p11d954jsn13874c8e1d59',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
