import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'exo1';
  name:string='';
  fontFamily: string = '';
  fontSize: number = 16; 
  textAlign: string = 'left';
   
  get message(): string {
    return `Bonjour ${this.name.toUpperCase()}`;
  }
}
