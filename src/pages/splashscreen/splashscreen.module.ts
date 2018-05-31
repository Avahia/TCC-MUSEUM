import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SplashscreenPage } from './splashscreen';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    SplashscreenPage,
  ],
  imports: [
    IonicPageModule.forChild(SplashscreenPage),
  ],
})
export class SplashscreenPageModule {}
