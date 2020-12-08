import { Injectable } from "@angular/core";
import {
  LoadingController,
  AlertController,
  ToastController,
} from "@ionic/angular";

@Injectable({
  providedIn: "root",
})
export class ToastService {
  loading = null;
  constructor(
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private toastController: ToastController
  ) {}

  public async showBottomShort(msg: string, duration: number = 3000) {
    const toast = await this.toastController.create({
      message: msg,
      position: "bottom",
      duration: duration,
    });
    toast.present();
  }

  public async showLoader() {
    this.loading = await this.loadingCtrl.create({
      message: "Please wait...",
    });
    return await this.loading.present();
  }

  public async showAlert(tit, text) {
    let alert = await this.alertCtrl.create({
      header: tit ? tit : null,
      message: text,
      buttons: ["OK"],
    });
    await alert.present();
  }
}
