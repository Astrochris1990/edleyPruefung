import { Component, h, State,  Fragment } from '@stencil/core';

import { modalController } from '@ionic/core';



@Component({
  tag: 'page-home',
  styleUrl: 'page-home.css',
})
export class PageHome {

  async showModal() {
    const modal = await modalController.create({
      component: "log-activ"
      
    })

    await modal.present()
  }

  

  @State() mode: string;
  
  constructor() {

    this.mode = this.isIOS() ? 'ios' : 'md';
    localStorage.setItem('mode', this.mode);
    const storedData = localStorage.getItem('form');
    if (storedData) {
      this.formDataOnes = JSON.parse(storedData);
    }
  }

  isIOS() {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod/.test(userAgent);
  }

  
  @State() formDataOnes: { name: string; dateone: string; datetwo: string; hour:string}[] = [];
  @State() formDataOne: { name: string; dateone: string; datetwo: string; hour:string };



  
  async loadData() {
    const storedData = localStorage.getItem('form');
    if (storedData) {
      this.formDataOnes = JSON.parse(storedData);
    }
  }
 

  handleFormOneSubmit = (event: CustomEvent<{ name: string; dateone: string; datetwo: string ; hour:string}>) => {
    this.formDataOne = event.detail;
    
  this.formDataOnes = [...this.formDataOnes, this.formDataOne];
  localStorage.setItem('form', JSON.stringify(this.formDataOnes));
  console.log("formDataOnes: ", this.formDataOnes);
    
  };  

  connectedCallback() {
    window.addEventListener('formOneSubmit', this.handleFormOneSubmit);
    
  }

  disconnectedCallback() {
    window.removeEventListener('formOneSubmit', this.handleFormOneSubmit);
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
            
              <ion-button onClick={() =>this.showModal()}>
              <ion-label>Log new activity</ion-label>       
              </ion-button> 
              {/* {this.formDataOnes.map(formDataOne=>
              // <ion-item ion-router-link href={`/activity/${formDataOne?.name.toLowerCase()}`} >
              <ion-list  >
              <ion-item ion-router-link href={`/activity/${formDataOne?.name.toLowerCase()}`}> 
              {formDataOne?.name}
              <ion-item>
              {formDataOne?.dateone}</ion-item>
              <ion-item>
             {formDataOne?.datetwo}</ion-item>
            </ion-item> </ion-list>           
            )}   */}
            


              </ion-list>
        </ion-content>
      </Fragment>
    );
  }
}
