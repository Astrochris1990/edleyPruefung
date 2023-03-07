import { modalController} from '@ionic/core';
import { Component, Fragment, h, Prop, State } from '@stencil/core';
import { API_URL } from '../../helpers/constants';
import { Toast } from '@capacitor/toast';





interface Person {
  birth_year: string;
  eye_color: string;
  gender: string;
  height: string;
  mass: string;
  name: string;
  url:string;
}
interface ResponseData {
  count: number;
  next: string;
  results: Person[];
}

@Component({
  tag: 'page-profile',
  styleUrl: 'page-profile.css',
  // shadow: true,
})

export class PageProfile {

  async showHelloToast() {
    await Toast.show({
      text: 'Hello!',
      
    });
    console.log("sdfas")
  };

  

  async showModal() {
    const modal = await modalController.create({
      component: "app-modal"
      
    })

    await modal.present()
  }
  
  
  
  

  @Prop() name: string

  normalize(name: string): string {
    name = name || ''
    return name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase();
  }

  private infiniteScroll: HTMLIonInfiniteScrollElement;
  private page: number = 1;

  
  @State() people: Person[] = [];
  private apiUrl = `${API_URL}/people`;
  @State() loading = true;

  

  async componentWillLoad() {
    await this.fetchData();
  }

  

  async fetchData() {
    
    const response = await fetch(this.apiUrl);
    const json : ResponseData = await response.json();
    const newpeople = json.results;
    // const newData = json.results.map((result) => result.name);

    this.people = [...this.people, ...newpeople];
    this.page++;
    console.log(json);
    
  
  }

  async loadData(ev) {
    setTimeout(async () => {
      this.apiUrl =`https://swapi.dev/api/people/?page=${this.page}`
      await this.fetchData();
      console.log('Loaded data');
      console.log(this.people)
      ev.target.complete();

      if (this.people.length === 87) {
        ev.target.disabled = true;
      }
    }, 500);
  }
  async loadData_noevent() {
    setTimeout(async () => {
      await this.fetchData();
      console.log('Search data');
      console.log(this.people)
      
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  triggerSearch(query: string) {
    // reset latest people searchs
    this.people = [];
    // search with new query
    this.apiUrl = `${API_URL}/people?search=${query}`;
    console.log(`${API_URL}/people?search=${query}`)
    // show loading indicator again
    this.loading = true;
    // use the existing load function
    
    this.loadData_noevent();
  }
  getId(url:string){
    const segments = url.split("/");
    const idStr = segments[segments.length - 2];
    const id = parseInt(idStr, 10);
    console.log(id)
    return id;
  }

  @State() reportedTitle: string = '';

  handleReportSubmitted = (event: CustomEvent<string>) => {
    this.reportedTitle = event.detail;
  };

  connectedCallback() {
    window.addEventListener('reportSubmitted', this.handleReportSubmitted);
  }

  disconnectedCallback() {
    window.removeEventListener('reportSubmitted', this.handleReportSubmitted);
  }

  render() {
    return (
      <Fragment>
        <ion-datetime></ion-datetime>
        <ion-header>
          <ion-button onClick={()=> this.showHelloToast() }>TOast tester</ion-button>
          <ion-toolbar color="primary">
            <ion-buttons slot="start">
              <ion-back-button defaultHref="/"></ion-back-button>
            </ion-buttons>
            <ion-title>Profile: {this.name}</ion-title>
            <div>
        <h1>Reported Title: {this.reportedTitle}</h1>
      </div>
          </ion-toolbar>
        </ion-header>
        <ion-content class='ion-text-center'>
          <ion-card>
            <ion-card-header onClick={() =>this.showModal()}>
              <h1>
              People search (test Modal)
              </h1>
              <ion-searchbar debounce={500} onIonChange={(event) => this.triggerSearch(event.detail.value)} ></ion-searchbar>
            </ion-card-header>
            
            <ion-card-content >
              <ion-button onClick={() => this.toggleInfiniteScroll()} expand="block">
          Toggle Infinite Scroll
        </ion-button>

        <ion-list>
          {this.people.map((item) => (
            <ion-item href={`/people/${this.getId(item.url)}`}>
              <ion-label>{item.name}</ion-label>
            </ion-item>
          ))}
        </ion-list>

        <ion-infinite-scroll ref={(el) => (this.infiniteScroll = el)} onIonInfinite={(ev) => this.loadData(ev)}>
          <ion-infinite-scroll-content
            loadingSpinner="bubbles"
            loadingText="Loading more data..."
          ></ion-infinite-scroll-content>
        </ion-infinite-scroll>

              
              
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
