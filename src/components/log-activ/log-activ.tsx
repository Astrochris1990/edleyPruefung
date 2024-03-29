import { Component, h, State, Event, EventEmitter, Fragment } from '@stencil/core';
import { format, parseISO } from 'date-fns';
import { modalController } from '@ionic/core';
import { Toast } from '@capacitor/toast';

@Component({
  tag: 'log-activ',
  styleUrl: 'log-activ.css',
  shadow: true,
})
export class LogActiv {
  @State() startDate: string = format(parseISO(format(new Date(), 'yyy-MM-dd HH:mm')), 'HH:mm,  d MMM');
  @State() endDate: string = format(parseISO(format(new Date(), 'yyy-MM-dd HH:mm')), 'HH:mm,  d MMM');
  @State() reportedStartDate: string = format(new Date(), 'yyy-MM-dd HH:mm');
  @State() reportedEndDate: string = format(new Date(), 'yyy-MM-dd HH:mm');
  @State() hour: string;
  @State() title: string = '';

  handleClose = () => {
    modalController.dismiss();
  };

  async showToast() {
    await Toast.show({
      text: 'Your activity has been added to the ledger!',
    });
    console.log('Your activity has been added to the ledger!');
  }

  async showModal() {
    const modal = await modalController.create({
      component: 'app-modal',
    });

    await modal.present();
  }
  async showModalTwo() {
    const modal = await modalController.create({
      component: 'app-modal-two',
    });

    await modal.present();
  }

  handleReportSubmitted = (event: CustomEvent<{ date }>) => {
    const { date } = event.detail;
    this.reportedStartDate = date;
    this.startDate = format(parseISO(date), 'HH:mm, d MMM');
    this.calculateHour();
  };
  handleReportSubmittedTwo = (event: CustomEvent<{ datetwo }>) => {
    const { datetwo } = event.detail;
    this.reportedEndDate = datetwo;
    this.endDate = format(parseISO(datetwo), 'HH:mm, d MMM');
    this.calculateHour();
  };

  connectedCallback() {
    window.addEventListener('reportSubmitted', this.handleReportSubmitted);
    window.addEventListener('reportSubmittedTwo', this.handleReportSubmittedTwo);
  }

  disconnectedCallback() {
    window.removeEventListener('reportSubmitted', this.handleReportSubmitted);
    window.addEventListener('reportSubmittedTwo', this.handleReportSubmittedTwo);
  }

  handleTitleChange = (event: Event) => {
    this.title = (event.target as HTMLInputElement).value;
  };

  @Event() formOneSubmit: EventEmitter<{ name: string; dateone: string; datetwo: string; hour: string }>;
  @State() formDataOnes: { name: string; dateone: string; datetwo: string; hour: string }[] = [];
  @State() formDataOne: { name: string; dateone: string; datetwo: string; hour: string };
  
  handleSubmit = (event: Event) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);

    const name = formData.get('input') as string;
    const dateone = this.startDate;

    const datetwo = this.endDate;
    const hour = this.hour;
    this.formOneSubmit.emit({ name, dateone, datetwo, hour });

    const storedData = localStorage.getItem('form');
    if (storedData) {
      this.formDataOnes = JSON.parse(storedData);
    }
    this.formDataOne = { name, dateone, datetwo, hour };
    this.formDataOnes = [...this.formDataOnes, this.formDataOne];
    console.log('log data: ', this.formDataOnes);
    localStorage.setItem('form', JSON.stringify(this.formDataOnes));

    this.showToast();
    this.handleClose();
  };

  calculateHour() {
    const date1 = new Date(this.reportedEndDate);
    const date2 = new Date(this.reportedStartDate);

    const diffInMilliseconds = date1.getTime() - date2.getTime();
    const diffInMinutes = diffInMilliseconds / (1000 * 60);

    const hours = Math.floor(diffInMinutes / 60);
    const minutes = diffInMinutes % 60;

    this.hour = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0');
  }

  render() {
    return (
      <Fragment>
        <ion-header>
          <ion-toolbar color="primary">
            <ion-buttons slot="start">
              <ion-back-button defaultHref="/tab/home" onClick={() => this.handleClose()} />
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
        ,
        <ion-content class="ion-padding">
          <ion-card>
            <form onSubmit={this.handleSubmit}>
              <ion-card-header>
                {' '}
                <ion-card-title>Log new activity</ion-card-title>
              </ion-card-header>

              <ion-item>
                <ion-input name="input" placeholder="Name activity" clear-On-Edit="true" onIonChange={this.handleTitleChange}></ion-input>
              </ion-item>
              <ion-item onClick={() => this.showModal()}>
                <ion-label>Start</ion-label>
                {this.startDate}
              </ion-item>
              <ion-item onClick={() => this.showModalTwo()}>
                <ion-label>Finish</ion-label> {this.endDate}
              </ion-item>
              <ion-item>
                {!!this.hour && <ion-label>Hours spent </ion-label>}
                {!!this.hour && <ion-label slot="end">{this.hour}</ion-label>}
              </ion-item>
              <ion-item>
                <ion-button fill="clear" type="submit" disabled={!this.title}>
                  Log activity
                </ion-button>
              </ion-item>
            </form>
          </ion-card>
        </ion-content>
      </Fragment>
    );
  }
}
