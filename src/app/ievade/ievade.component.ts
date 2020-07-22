import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-ievade',
  templateUrl: './ievade.component.html',
  styleUrls: ['./ievade.component.scss']
})
export class IevadeComponent implements OnInit {
  @Input() type: string;
  @Input() label: string;
  @Input() control: FormControl;
  
  constructor() { }

  ngOnInit(): void {
  }

}
