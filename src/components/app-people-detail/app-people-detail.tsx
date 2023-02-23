import { modalController } from '@ionic/core';
import { Component, h, ComponentDidLoad, State, Prop } from '@stencil/core';
import { API_URL } from '../../helpers/constants';
interface Person {
  birth_year: string;
  eye_color: string;
  gender: string;
  height: string;
  mass: string;
  name: string;
}
@Component({
  tag: 'app-people-detail',
  styleUrl: 'app-people-detail.css'
})
export class AppPeopleDetail implements ComponentDidLoad {
  @Prop() personId: number;
  @State() person: Person;
  @State() loading = true;
  private apiUrl = `${API_URL}/people`;

  async showModal() {
    const modal = await modalController.create({
      component: "app-modal"
      
    })

    await modal.present()
  }
  


  componentDidLoad() {
    // Load initial Data
    this.loadData();
  }
  async loadData() {
    const response = await fetch(`${this.apiUrl}/${this.personId}`);
    this.person = await response.json();
    this.loading = false;
  }
  render() {
    return [
      <ion-header>
        <ion-toolbar color='primary'>
          <ion-buttons slot='start'>
            <ion-back-button defaultHref='/people' />
          </ion-buttons>
          <ion-title>{ !!this.person ? this.person.name : 'Loading...' }</ion-title>
        </ion-toolbar>
      </ion-header>,
      <ion-content class='ion-text-center ion-padding'>
        {
          this.loading && <ion-spinner class='ion-padding' />
        }
        {
          !!this.person &&
          <ion-card style={{maxWidth: '500px', }}>
            <ion-card-header>
              <ion-card-title>{this.person.name}</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              <ion-list>
                <ion-item>
                  <ion-label>
                    Birthdate
                  </ion-label>
                  {this.person.birth_year}
                </ion-item>
                <ion-item>
                  <ion-label>
                    Eye color
                  </ion-label>
                  {this.person.eye_color}
                </ion-item>
                <ion-item>
                  <ion-label>
                    Gender
                  </ion-label>
                  {this.person.gender}
                </ion-item>
                <ion-item>
                  <ion-label>
                    Height
                  </ion-label>
                  {this.person.height} cm
                </ion-item>
                <ion-item>
                  <ion-label>
                    Mass
                  </ion-label>
                  {this.person.mass} kg
                </ion-item>
                
              </ion-list>
              <div></div><ion-fab vertical='bottom' horizontal='end' slot='fixed'>
                    <ion-fab-button onClick={() => this.showModal()}>
                        <ion-icon name='send'></ion-icon>
                    </ion-fab-button>
                  </ion-fab>
              
            </ion-card-content>
            
          </ion-card>
        }

      </ion-content>
      
    ];
  }
}