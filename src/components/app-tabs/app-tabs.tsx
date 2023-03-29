import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'app-tabs',
  styleUrl: 'app-tabs.css',
  // shadow: true,
})
export class AppTabs {
  @State() archive: number;
  @State() activeTab: string;

  render() {
    return (
      <ion-tabs>
        <ion-tab tab="tab-home">
          <ion-nav></ion-nav>
        </ion-tab>
        <ion-tab tab="tab-ledger">
          <ion-nav></ion-nav>
        </ion-tab>
        <ion-tab tab="tab-log">
          <ion-nav></ion-nav>
        </ion-tab>
        <ion-tab-bar slot="bottom">
          <ion-tab-button tab="tab-home">
            <ion-icon name="home"></ion-icon>
            <ion-label>Home</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="tab-ledger">
            <ion-icon name="archive"></ion-icon>
            <ion-badge color="danger"></ion-badge>
            <ion-label>Ledger</ion-label>
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
    );
  }
}
