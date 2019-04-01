import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropy',
  templateUrl: './dropy.component.html',
  styleUrls: ['./dropy.component.css']
})
export class DropyComponent implements OnInit {
  days : any[] =[
    {one : 1 ,day : 'monday'},
    {one : 2 ,day : 'tuesday'},
    {one : 3 ,day : 'wednesday'},
    {one : 4 ,day : 'thursday'},
    {one : 5 ,day : 'friday'},
    {one : 6 ,day : 'saturday'},
    {one : 7 ,day : 'sunday'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
