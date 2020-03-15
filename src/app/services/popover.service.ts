import { Injectable } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ComponentRef } from '@ionic/core';

@Injectable({
    providedIn: 'root'
})
export class PopoverService {

    private isBusy = false;
    private modal: HTMLIonPopoverElement;

    constructor(private popoverController: PopoverController) {
    }

    async abrir(component: ComponentRef) {
        if (!this.isBusy) {
            this.isBusy = true;
            this.modal = await this.popoverController.create({component});
            await this.modal.present();
            this.modal.onDidDismiss().then(() => this.isBusy = false);
        }
    }

    async fechar() {
        if (this.isBusy) {
            await this.modal.dismiss();
        }
    }
}
