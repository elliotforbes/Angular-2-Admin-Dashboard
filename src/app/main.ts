import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// we import our root module file, notice the lack of file-extension
import { AppModule } from './app.module';

// this compiles and launches our AngularJS Application for us
platformBrowserDynamic().bootstrapModule(AppModule);