import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { ZomatoComponent } from './app/zomato/zomato.component';


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
bootstrapApplication(ZomatoComponent, appConfig).catch((err)=>   window.alert(err));
