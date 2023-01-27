import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit{

  constructor(private toastController: ToastController) { }


  ngOnInit(): void {
    //this.presentToast()
  }


  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Hello',
      duration: 3000,
      cssClass: 'custom-toast',
      // buttons: [
      //   {
      //     text: 'Dismiss',
      //     role: 'cancel'
      //   }
      // ],
    });

    await toast.present();
  }

   
    
    

  

}
