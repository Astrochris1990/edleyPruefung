import { Component, Prop, h ,State} from '@stencil/core';
import { modalController } from '@ionic/core';
type myKind ="Typo"|"Fact"
@Component({
  tag: 'app-modal',
  styleUrl: 'app-modal.css',
  shadow: true,
})
export class AppModal {
  @Prop() url: string;

  @State() title: string = '';
  
  @State() kind: myKind ;
  
  handleTitleChange(value: string) {
  this.title = value;
}
  handleKindChange(value: myKind) {
  this.kind = value;
}

  close() {
    modalController.dismiss();
  
  }
  submitReport(event) {
    event.preventDefault();
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-title>Report improvements</ion-title>
          <ion-buttons slot='end'>
            <ion-button onClick={() => this.close()}>
              <ion-icon name='close' slot='icon-only' />
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,
      <ion-content class='ion-padding'>
      <form onSubmit={(event) => this.submitReport(event)}>
        <ion-list lines='full'>
          <ion-item>
            <ion-label position='stacked'>
              SWAPI resource
            </ion-label>
            <ion-input readonly disabled name='url' value={this.url} />
          </ion-item>
          <ion-item>
            <ion-label position='stacked'>
              Kind
            </ion-label>
            <ion-select name='kind' placeholder='Please select...' onIonChange={(event) => this.handleKindChange(event.detail.value)}>
              <ion-select-option value='bacon'>Typo</ion-select-option>
              <ion-select-option value='olives'>Fact</ion-select-option>
            </ion-select>
          </ion-item>
          <ion-item>
            <ion-label position='stacked'>
              Title
            </ion-label>
            <ion-input name='title' onIonChange={(event) => this.handleTitleChange(event.detail.value)} />
          </ion-item>
          <ion-item>
            <ion-label position='stacked'>
              Message
            </ion-label>
            <ion-text-area  name='message' />
            
          </ion-item>
        </ion-list>
        <ion-button class='ion-float-right' fill='clear' type='submit' disabled={ !!!this.kind || !!!this.title}>Send</ion-button>
      </form>
    </ion-content>
    ];
    ;
  }

}
