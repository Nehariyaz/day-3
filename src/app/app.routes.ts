import {  RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { DestinationsComponent } from './pages/destinations/destinations.component';
import { provideRouter, RouterOutlet } from '@angular/router';
import { SingleComponent } from './pages/single/single.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'destinations', component: DestinationsComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'destinations/:id', component: SingleComponent},
  { path: 'single', component: SingleComponent }

]

