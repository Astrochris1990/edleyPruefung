import { Component, h, State, Fragment } from '@stencil/core';

import { modalController } from '@ionic/core';

@Component({
  tag: 'page-home',
  styleUrl: 'page-home.css',
})
export class PageHome {
  @State() mode: string;

  constructor() {
    this.mode = this.isIOS() ? 'ios' : 'md';
    localStorage.setItem('mode', this.mode);
  }

  isIOS() {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod/.test(userAgent);
  }

  // This will call the Log-Activity Modal
  async showModal() {
    const modal = await modalController.create({
      component: 'log-activ',
    });
    await modal.present();
  }

  render() {
    return (
      <Fragment>
        <ion-header>
          <ion-toolbar color="primary">
            <ion-title>Welcome to Hour Tracker.</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
          <p>Need to keep track of your work hours, log ahead!</p>
          <ion-list>
            <ion-button onClick={() => this.showModal()}>
              <ion-label>Log new activity</ion-label>
            </ion-button>
          </ion-list>
        </ion-content>
      </Fragment>
    );
  }
}
