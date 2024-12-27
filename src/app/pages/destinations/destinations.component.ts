import { Component } from '@angular/core';
import { HomeComponent } from "../home/home.component";
import { NavbarComponent } from "../../ui/navbar/navbar.component";
import { ContactsComponent } from "../contacts/contacts.component";
import { CardsComponent } from "../../ui/cards/cards.component";
import { FooterComponent } from "../../ui/footer/footer.component";
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-destinations',
  standalone: true,
  imports: [CardsComponent],
  templateUrl: './destinations.component.html',
  styleUrl: './destinations.component.scss'
})
export class DestinationsComponent {
  
  constructor(public api:ApiService){}


}
