import { modalController } from '@ionic/core';
import { Component, Fragment, h, Prop } from '@stencil/core';

@Component({
  tag: 'cat-profile',
  styleUrl: 'cat-profile.css', 
  // shadow: true,
})
export class CatProfile {

  async showModal() {
    const modal = await modalController.create({
      component: "app-modal"
      
    })

    await modal.present()
  }

  @Prop() name: string
  @Prop() description: string
  @Prop() title:string

  normalize(name: string): string {
    name = name || ''
    return name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase();
  } 

  render() {
    return (
      <Fragment>
        <ion-header>
          <ion-toolbar color="primary">
            <ion-buttons slot="start">
              <ion-back-button defaultHref="/tab/notice"> </ion-back-button>
            </ion-buttons>
            <ion-title>Profile: {this.description}</ion-title>
          </ion-toolbar> 
        </ion-header>
        <ion-content fullscreen class="ion-padding">
          <ion-card>
            <ion-card-header>
              <h1>
                {this.normalize(this.title)}
              </h1>
            </ion-card-header>
            <ion-card-content onClick={() =>this.showModal()}>
              <p>
                This name is passed in through a route param!
              </p>
            </ion-card-content>
          </ion-card>
        </ion-content>
      </Fragment>
    );
  }

}
