import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions, BarcodeScanResult} from '@ionic-native/barcode-scanner';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the ScanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scan',
  templateUrl: 'scan.html',
})
export class ScanPage {
  result: BarcodeScanResult;
  constructor(public navCtrl: NavController, public navParams: NavParams, private bcs: BarcodeScanner, private toastCtrl: ToastController) {
  }
  ionViewWillEnter(){
    this.scanBarcode();
  }
  scanBarcode(){
    const options: BarcodeScannerOptions ={
      prompt: 'Pointer votre camera vers un Qr Code',
      torchOn: false
    };

    this.bcs.scan(options)
      .then(res =>{
        this.result = res;
      })
      .catch(err => {
        this.toastCtrl.create({
          message:err.message
        }).present ();
      })
  }
}
