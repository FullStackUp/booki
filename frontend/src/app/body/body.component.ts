import { Component, OnInit } from '@angular/core';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent implements OnInit {
  infoIcon = faInfo;

  constructor() {}

  ngOnInit(): void {}
}
