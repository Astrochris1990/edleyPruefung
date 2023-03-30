import { Component, h, State } from '@stencil/core';
import { DatetimeChangeEventDetail, modalController } from '@ionic/core';
import { format } from 'date-fns';

@Component({
  tag: 'app-modal',
  styleUrl: 'app-modal.css',
  shadow: true,
})
export class AppModal {
  handleClose = newData => {
    modalController.dismiss(newData);
  };

  @State() newValue: string | string[] = format(new Date(), 'yyy-MM-dd hh:mm');

  handleSubmit = (event: Event) => {
    event.preventDefault();
    const date = this.newValue;

    this.handleClose(date);
    console.log(date);
  };
  handleDateTimeChange(event: CustomEvent<DatetimeChangeEventDetail>) {
    this.newValue = event.detail.value;
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-title>Select date and time</ion-title>
          <ion-buttons slot="end">
            <ion-button onClick={() => this.handleClose(this.newValue)}>
              <ion-icon name="close" slot="icon-only" />
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,
      <ion-content class="ion-padding">
        <form onSubmit={this.handleSubmit} autocomplete="off">
          <ion-list lines="full">
            <ion-item>
              <ion-label>Start time</ion-label>
            </ion-item>
            <ion-item>
              <ion-datetime
                name="date"
                size="cover"
                presentation="date-time"
                prefer-wheel="true"
                show-default-buttons="false"
                done-text="All set"
                cancel-text="Never mind"
                onIonChange={this.handleDateTimeChange.bind(this)}
              ></ion-datetime>
            </ion-item>
          </ion-list>
          <ion-button class="ion-float-right" fill="clear" type="submit" disabled={!this.newValue}>
            Send
          </ion-button>
        </form>
      </ion-content>,
    ];
  }
}
