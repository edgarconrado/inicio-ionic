import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  loading: HTMLIonLoadingElement;

  constructor(private loadingController: LoadingController) { }

  ngOnInit() {
  }

  mostrarButton() {
    this.presentLoading("Hola Edgar");

    setTimeout(() => {
      this.loading.dismiss();
    }, 2000);
  }

  async presentLoading( message: string ) {
    this.loading = await this.loadingController.create({
      message,
    });
    await this.loading.present();

  }
}
