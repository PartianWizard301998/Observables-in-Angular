import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  
  title = 'OBSERVABLES DEMO';

  myObservable = new Observable((observer) =>{

    console.log("Observable stared...");
    setTimeout(() =>{observer.next("1")}, 1000)
    setTimeout(() =>{observer.next("2")}, 2000)
    setTimeout(() =>{observer.next("3")}, 3000)
    setTimeout(() =>{observer.next("4")}, 4000)
    setTimeout(() =>{observer.next("5")}, 5000)
  });


  ngOnInit(): void {
    this.myObservable.subscribe((val) =>{
      console.log(val);
    });
  }
}

