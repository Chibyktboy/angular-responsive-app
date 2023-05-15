import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatCardHeader} from '@angular/material/card';
import { MatCardTitle} from '@angular/material/card';
import { MatCardContent} from '@angular/material/card';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // Component code goes here

  ngOnInit(): void {
    // Initialization code goes here
  }
}
