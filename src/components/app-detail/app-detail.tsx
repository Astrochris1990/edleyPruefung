import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'app-detail',
  styleUrl: 'app-detail.css',
  shadow: true,
})
export class AppDetail {

  @Prop() thispage;

  constructor(){
    const items = JSON.parse(localStorage.getItem('form'))
    const currentUrl = window.location.href;
    const urlname = currentUrl.split("/")[4];
    const item = items[urlname]
    
    this.thispage=item
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color='primary'>
          <ion-buttons slot='start'>
            <ion-back-button defaultHref='/tab/ledger' />
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,
      <ion-content class='ion-text-center ion-padding'>
       
       <ion-card style={{maxWidth: '500px', margin: '0 auto'}}>
            <ion-card-header>
              <ion-card-title>{this.thispage.name}</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              <ion-list>
                <ion-item>
                  <ion-label>
                    Start time
                  </ion-label>
                  {this.thispage.dateone}
                </ion-item>
                <ion-item>
                  <ion-label>
                    End time
                  </ion-label>
                  {this.thispage.datetwo}
                </ion-item>
                <ion-item>
                  <ion-label>
                    Hours spent
                  </ion-label>
                  {this.thispage.hour}
                </ion-item>
              
                
              </ion-list>
              </ion-card-content>
              </ion-card>
        

      </ion-content>
      
      ];

      
  }
}