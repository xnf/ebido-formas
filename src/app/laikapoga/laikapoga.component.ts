import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-laikapoga',
  templateUrl: './laikapoga.component.html',
  styleUrls: ['./laikapoga.component.scss']
})
export class LaikapogaComponent implements OnInit {
  @Input() vaards: string;
  @Output() klikinaats = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
