import { modalController } from '@ionic/core';
import { Component, Fragment, h,   State } from '@stencil/core';


@Component({
  tag: 'page-ledger',
  styleUrl: 'page-ledger.css',
  // shadow: true,
})
export class PageNotice {
  @State() formDataOnes: { name: string; dateone: string; datetwo: string; hour:string}[] = [];
@State() formDataOne: { name: string; dateone: string; datetwo: string ; hour:string};

async showModal() {
  const modal = await modalController.create({
    component: "log-activ"
    
  })

  await modal.present()
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

  ionViewWillEnter(){
    const storedData = localStorage.getItem('form');
    if (storedData) {
      this.formDataOnes = JSON.parse(storedData);
    }
    console.log("ion view will enter")

  }
  



handleFormOneSubmit = (event: CustomEvent<{ name: string; dateone: string; datetwo: string ; hour:string }>) => {
  this.formDataOne = event.detail;
  
this.formDataOnes = [...this.formDataOnes, this.formDataOne];
localStorage.setItem('form', JSON.stringify(this.formDataOnes));
// console.log("formDataOnes on ledger page: ", this.formDataOnes);
  
};  

connectedCallback() {
  window.addEventListener('formOneSubmit', this.handleFormOneSubmit);
  
}

disconnectedCallback() {
  window.removeEventListener('formOneSubmit', this.handleFormOneSubmit);
}

deleteElement(index:number){
  
  this.formDataOnes.splice(index, 1);
  console.log("DELETE ausgeführt",this.formDataOnes)
  
  localStorage.setItem('form', JSON.stringify(this.formDataOnes));
  window.location.reload()
}


 

  render() {
    return (
      <Fragment>
        <ion-header >
          <ion-toolbar color="primary">
          
            <ion-title>Ledger </ion-title>
            
            
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
        
        <p>All your activities in one place:</p>
        
        
          <ion-card>
          <ion-list>
            {this.formDataOnes.map((oneData,index) => (
              <ion-item   href={`/activity/${index}`} >
                <ion-label>-- {oneData.name}</ion-label>
                <ion-fab onClick={()=>this.deleteElement(index)} horizontal='end' > 
    <ion-icon name="trash-outline"></ion-icon> 
</ion-fab>
              </ion-item>
              
            ))}
            
          </ion-list>
         

          </ion-card>
          <ion-fab horizontal='center'> 
  <ion-fab-button onClick={() => this.showModal()}>
    <ion-icon name="add"></ion-icon>
  </ion-fab-button>
</ion-fab>
        </ion-content>
        
      </Fragment>
    );
    
  }
}
