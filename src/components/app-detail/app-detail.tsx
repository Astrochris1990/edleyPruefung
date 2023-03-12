import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'app-detail',
  styleUrl: 'app-detail.css',
  shadow: true,
})
export class AppDetail {
  // @Prop() thispage;

  // constructor() {
  //   const items = JSON.parse(localStorage.getItem('form'));
  //   console.log("paramet1:", this.param1)
  //   console.log("items:", items)
  //   const index = items.indexOf(this.param1);
  //   console.log("items:", index)
  //   const item = items[index];

  //   this.thispage = item;
  //   console.log("thispage:", this.thispage)

  // }

  // ionNavWillChange() {
  //   this.myfunction();
  // }

  // async myfunction(){
  //   const items = JSON.parse(localStorage.getItem('form'));
  //   const navCtrl = document.querySelector("ion-nav");
  //   console.log(navCtrl); // check if navCtrl is defined and contains the correct element
  //   const activePage = await navCtrl.getActive();
  //   console.log(activePage); // check if activePage is defined and contains the correct page object
  //   console.log(activePage.params.name); // check the value of the params prope
  //   const item = items[activePage.params.name];

  //     this.thispage = item;
  //   }

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
