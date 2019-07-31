import { Component, ApplicationRef } from '@angular/core';
import { Subscription, concat, interval } from 'rxjs';
import { first } from 'rxjs/operators';
import { NavController, ToastController, AlertController } from '@ionic/angular';
import { SwUpdate, UpdateAvailableEvent } from '@angular/service-worker';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  subscriptions: Subscription[] = [];
  title = 'Approve Time';

  constructor(
    private alertController: AlertController,
    private appRef: ApplicationRef,
    private nav: NavController,
    private toastController: ToastController,
    private updater: SwUpdate) { }

  ngOnInit(): void {
    this.initUpdater();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  initUpdater() {
    // Allow the app to stabilize first, before starting polling for updates with `interval()`.
    // See https://angular.io/guide/service-worker-communications
    const updateInterval$ = interval(1000 * 60 * 1);  // 1 minute - I don't recommend this!
    const appIsStable$ = this.appRef.isStable.pipe(first(isStable => isStable === true));
    const appStableInterval$ = concat(appIsStable$, updateInterval$);

    // Warning! Make sure you use arrow functions here or suffer the wrath of `this`!
    if (this.updater.isEnabled) {
      console.log('Subscribing to updates...');
      this.subscriptions.push(appStableInterval$.subscribe(() => this.checkForUpdate()));
      this.subscriptions.push(this.updater.available.subscribe(e => this.onUpdateAvailable(e)));
      this.subscriptions.push(this.updater.activated.subscribe(() => this.onUpdateActivated()));
    }
  }

  async checkForUpdate() {
    if (this.updater.isEnabled) {
      console.log('Checking for updates...');
      await this.updater.checkForUpdate();
    }
  }

  async onUpdateAvailable(event: UpdateAvailableEvent) {
    const updateMessage = event.available.appData['updateMessage'];
    console.log('A new version is available: ', updateMessage);

    const alert = await this.alertController.create({
      header: 'Update Available!',
      message: 'A new version of the application is available. ' +
        `(Details: ${updateMessage}) ` +
        'Click OK to update now.',
      buttons: [
        {
          text: 'Not Now',
          role: 'cancel',
          cssClass: 'secondary',
          handler: async () => {
            await this.showToastMessage('Update deferred');
          }
        }, {
          text: 'OK',
          handler: async () => {
            await this.updater.activateUpdate();
            window.location.reload();
          }
        }
      ]
    });

    await alert.present();
  }

  async onUpdateActivated() {
    await this.showToastMessage('Application updating.');
  }

  async showToastMessage(msg: string) {
    console.log(msg);
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      showCloseButton: true,
      position: 'top',
      closeButtonText: 'OK'
    });
    toast.present();
  }
  
  goToEmployees() {
    this.nav.navigateForward(`tabs/employees`);
  }
}
