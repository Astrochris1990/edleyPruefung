import { Component, Fragment, h, State } from '@stencil/core';

@Component({
  tag: 'page-home',
  styleUrl: 'page-home.css',
  // shadow: true,
})
export class PageHome {
  categories = [{
    title: 'People',
    description: 'All your beloved characters.',
    image: '../../assets/movies.JPG'
  }, {
    title: 'Planets',
    description: 'Everything you should know about you favorite planets.',
    image: '../../assets/movies.JPG'
  }, {
    title: 'Starships',
    description: 'Everything you should know about you favorite planets.',
    image: '../../assets/movies.JPG'
  }, {
    title: 'Species',
    description: 'From Ewok to Wookies!',
    image: '../../assets/movies.JPG'
  }, {
    title: 'Vehicles',
    description: 'How many passengers fit into an AT-AT?',
    image: '../../assets/movies.JPG'
  }, {
    title: 'Films',
    description: 'Facts about the real films... not that animated thing!',
    image: '../../assets/movies.JPG'
  }
];

  @State() mode: string

  constructor() {
    this.mode = localStorage.getItem('mode') || 'auto'
  }

  setMode(mode: string) {
    if (mode == this.mode) {
      return
    }
    this.mode = mode
    switch (mode) {
      case 'md':
      case 'ios':
        localStorage.setItem('mode', mode)
        break
      default:
        localStorage.removeItem('mode')
        break
    }
    location.reload()
  }

  render() {
    return (
      <Fragment>
        
        <ion-menu contentId="main-content">
              <ion-header>
                <ion-toolbar>
                  <ion-title>Menu Content</ion-title>
                </ion-toolbar>
              </ion-header>
              <ion-content class="ion-padding">This is the menu content.</ion-content>
        </ion-menu>
        <ion-header>
          <ion-toolbar color="primary">
            <ion-buttons slot="start">
              <ion-menu-button></ion-menu-button>
            </ion-buttons>
            <ion-title>Home</ion-title>
            
          </ion-toolbar> 
          
          
        </ion-header>
        <ion-content class="ion-padding" id="main-content">
          <p>Welcome to Stencil App Starter.</p>
          <ion-list>
            <ion-radio-group value={this.mode} onIonChange={e => this.setMode(e.detail.value)}>
              <ion-list-header>
                <ion-label>Theme Mode</ion-label>
              </ion-list-header>
              <ion-note class="ion-padding-start">
                (Changing theme will reload the whole app.)
              </ion-note>
              <ion-item>
                <ion-label>Auto Detect</ion-label>
                <ion-radio value='auto'></ion-radio>
              </ion-item>
              <ion-item>
                <ion-label>Material Design</ion-label>
                <ion-radio value='md'></ion-radio>
              </ion-item>
              <ion-item>
                <ion-label>iOS</ion-label>
                <ion-radio value='ios'></ion-radio>
              </ion-item>
            </ion-radio-group>
          </ion-list>
          <p>Let's try navigating with ionic router!</p>
          <ion-list>
            <ion-item href="/tab/notice">
              <ion-label>Notice Page (/tab/notice)</ion-label>
            </ion-item>
            <ion-item href="/profile/ionic">
              <ion-label>Profile Page (/profile/ionic)</ion-label>
            </ion-item>
          </ion-list>
          <ion-grid>
            <ion-row>
              {  this.categories.map((category) =>
                  <ion-col sizeXs='12' sizeSm='6' sizeMd='4' sizeLg='3'>
                    <ion-card class='flex'>
                      <div class='card-image' style={{backgroundImage: `url(${category.image})`}}></div>
                      {/* <img src={`${category.image}`} /> */}
                      <ion-card-header>
                        <ion-card-title>{ category.title }</ion-card-title>
                      </ion-card-header>
                      <ion-card-content>
                        { category.description }
                      </ion-card-content>
                      <ion-button
                        fill='clear'
                        href={"/profile/"+category.title.toLowerCase()} 
                      >
                        show more
                      </ion-button>
                    </ion-card>
                  </ion-col>
                )
              }
            </ion-row>
          </ion-grid>
        </ion-content>
       
  


      </Fragment>
    );
  }

}
