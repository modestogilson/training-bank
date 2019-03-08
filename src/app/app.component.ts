import { Component, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Template } from '../../node_modules/@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  constructor(public dialog: MatDialog){
  }

  openDialog() {
    const dialogRef = this.dialog.open(AppComponent, {
      height: '350px'
    });

    dialogRef.afterClosed().subscribe( result => {
      console.log('Dialog result: ${result}');
    });
  }

  title = 'training-bank';
}
