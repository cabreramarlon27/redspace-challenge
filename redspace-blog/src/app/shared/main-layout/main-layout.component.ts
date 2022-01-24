import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { TemplateRef } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {

  @Input('bodyTemplate')
  bodyTemplate: TemplateRef<any> | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
