import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  // shadow: true,
})
export class AppRoot {

  

  render() {
    return (
      <ion-app>
        <ion-router useHash={false}>
          <ion-route-redirect from="/" to="/tab/home"></ion-route-redirect>
          <ion-route url="/tab" component="app-tabs">
            <ion-route url="/home" component="tab-home">
              <ion-route component="page-home"></ion-route>
            </ion-route>
            <ion-route url="/ledger" component="tab-ledger">
              <ion-route component="page-ledger"></ion-route>
            </ion-route>
            <ion-route url="/log" component="tab-log">
              <ion-route component="log-activ"></ion-route>
            </ion-route>
          </ion-route>
          <ion-route url="/activity/:name" component="app-detail"></ion-route>
        </ion-router>
        <ion-nav></ion-nav>
      </ion-app>
    )
  }
}
