import { Component, Prop, h, State, Event, EventEmitter } from '@stencil/core';
import { DatetimeChangeEventDetail, modalController } from '@ionic/core';
import { format, parseISO } from 'date-fns';

@Component({
  tag: 'app-modal-two',
  styleUrl: 'app-modal-two.css',
  shadow: true,
})
export class AppModal {
  handleClose = () => {
    modalController.dismiss();
  };
  @Prop() url: string;
  // @State() title: string = '';

  @Event() reportSubmittedTwo: EventEmitter<{ datetwo: string | string[] }>;

  @State() newValue: string | string[] = format(parseISO(format(new Date(), 'yyy-MM-dd hh:mm')), 'HH:mm a,  d MMM, yyyy');
  @State() newValueTwo: string | string[] = format(parseISO(format(new Date(), 'yyy-MM-dd hh:mm')), 'HH:mm a,  d MMM, yyyy');

  handleSubmit = (event: Event) => {
    event.preventDefault();

    const datetwo = this.newValueTwo;
    const selectedDates = { datetwo };
    this.reportSubmittedTwo.emit(selectedDates);
    this.handleClose();
  };
  handleDateTimeChange(event: CustomEvent<DatetimeChangeEventDetail>) {
    this.newValue = event.detail.value;
  }
  handleDateTimeChangeTwo(event: CustomEvent<DatetimeChangeEventDetail>) {
    this.newValueTwo = event.detail.value;
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-title>Select date and time</ion-title>
          <ion-buttons slot="end">
            <ion-button onClick={this.handleClose}>
              <ion-icon name="close" slot="icon-only" />
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,
      <ion-content class="ion-padding">
        <form onSubmit={this.handleSubmit} autocomplete="off">
          <ion-list lines="full">
            <ion-item>
              <ion-label>End time</ion-label>
            </ion-item>
            <ion-item>
              <ion-datetime
                name="datetwo"
                size="cover"
                presentation="date-time"
                prefer-wheel="true"
                show-default-buttons="false"
                done-text="All set"
                cancel-text="Never mind"
                onIonChange={this.handleDateTimeChangeTwo.bind(this)}
              ></ion-datetime>
            </ion-item>
          </ion-list>
          <ion-button class="ion-float-right" fill="clear" type="submit" disabled={!this.newValueTwo || !this.newValue}>
            Send
          </ion-button>
        </form>
      </ion-content>,
    ];
  }
}
