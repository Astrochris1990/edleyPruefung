import { modalController } from '@ionic/core';
import { Component, Fragment, h, State } from '@stencil/core';

@Component({
  tag: 'page-ledger',
  styleUrl: 'page-ledger.css',
  // shadow: true,
})
export class PageNotice {
  navigateToPage() {
    const nav = document.querySelector('ion-nav');
    nav.push('page-two', { name: this.formDataOne });
  }

  @State() formDataOnes: { name: string; dateone: string; datetwo: string; hour: string }[] = [];
  @State() formDataOne: { name: string; dateone: string; datetwo: string; hour: string };

  async showModalLogActive() {
    const modal = await modalController.create({
      component: 'log-activ',
    });

    await modal.present();
  }

  handleFormOneSubmit = (event: CustomEvent<{ name: string; dateone: string; datetwo: string; hour: string }>) => {
    this.formDataOne = event.detail;

    this.formDataOnes = [...this.formDataOnes, this.formDataOne];
    localStorage.setItem('form', JSON.stringify(this.formDataOnes));
  };

  connectedCallback() {
    window.addEventListener('formOneSubmit', this.handleFormOneSubmit);
  }

  disconnectedCallback() {
    window.removeEventListener('formOneSubmit', this.handleFormOneSubmit);
  }

  componentWillLoad() {
    this.loadData();
  }

  async loadData() {
    const storedData = localStorage.getItem('form');
    if (storedData) {
      this.formDataOnes = JSON.parse(storedData);
    }
  }

  deleteElement(index: number) {
    this.formDataOnes.splice(index, 1);

    localStorage.setItem('form', JSON.stringify(this.formDataOnes));

    console.log('DELETE ausgeführt', this.formDataOnes);
    console.log('DELETE ausgeführt', index);
    window.location.reload(); // Ich hab keine bessere Lösung gefunden
  }

  viewProfile(oneDate) {
    const navCtrl = document.querySelector('ion-nav');
    navCtrl.push('app-detail', {
      param1: oneDate.name,
      param2: oneDate.dateone,
      param3: oneDate.datetwo,
      param4: oneDate.hour,
    });
  }

  render() {
    return (
      <Fragment>
        <ion-header>
          <ion-toolbar color="primary">
            <ion-title>Ledger </ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
          <p>All your activities in one place:</p>

          <ion-card>
            <ion-list>
              {this.formDataOnes.map((oneData, index) => (
                <ion-grid>
                  <ion-row class="ion-justify-content-between">
                    <ion-col size="auto">
                      <ion-item href={`/activity/${index}`} lines="none">
                        <ion-icon name="arrow-forward-circle-outline"></ion-icon>
                        <ion-label>{oneData.name}</ion-label>
                      </ion-item>
                    </ion-col>
                    <ion-col size="auto">
                      <ion-item onClick={() => this.viewProfile(oneData)} lines="none">
                        <ion-icon name="arrow-forward-circle-outline"></ion-icon>
                        <ion-label>{oneData.name}</ion-label>
                      </ion-item>
                    </ion-col>
                    <ion-col size="auto" class="ion-text-end">
                      <ion-item lines="none">
                        <ion-fab onClick={() => this.deleteElement(index)}>
                          <ion-icon name="trash-outline"></ion-icon>
                        </ion-fab>
                      </ion-item>
                    </ion-col>
                  </ion-row>
                </ion-grid>
              ))}
            </ion-list>
          </ion-card>
          <ion-fab horizontal="center">
            <ion-fab-button onClick={() => this.showModalLogActive()}>
              <ion-icon name="add"></ion-icon>
            </ion-fab-button>
          </ion-fab>
        </ion-content>
      </Fragment>
    );
  }
}
