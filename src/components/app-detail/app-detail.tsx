import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'app-detail',
  styleUrl: 'app-detail.css',
  shadow: true,
})
export class AppDetail {
  
  @Prop() param1: string;
  @Prop() param2?: string;
  @Prop() param3?: string;
  @Prop() param4?: string;

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/tab/ledger" />
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,
      <ion-content class="ion-text-center ion-padding">
        <ion-card style={{ maxWidth: '500px', margin: '0 auto' }}>
          <ion-card-header>
            <ion-card-title>{this.param1}</ion-card-title>
          </ion-card-header>

          <ion-card-content>
            <ion-list>
              <ion-item>
                <ion-label>Start time</ion-label>
                {this.param2}
              </ion-item>
              <ion-item>
                <ion-label>End time</ion-label>
                {this.param3}
              </ion-item>
              <ion-item>
                <ion-label>Hours spent</ion-label>
                {this.param4}
              </ion-item>
            </ion-list>
          </ion-card-content>
        </ion-card>
      </ion-content>,
    ];
  }
}
