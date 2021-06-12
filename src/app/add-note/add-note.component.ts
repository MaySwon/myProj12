import { Component, OnInit,Output,EventEmitter, DoCheck } from '@angular/core';
import {PagesModule}from 'src/app/inerface/pages.module';
import {FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {
  @Output() addPage = new EventEmitter<PagesModule>();
  idd = 1;
  head = "";
  main = "";
  date;
  buttonEnabled = false;
  pageForm:FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.pageForm  =new FormGroup({
      header: new FormControl(null,[Validators.required]),
      text: new FormControl(null,[Validators.required]),
      date: new FormControl(new Date(),[Validators.required]),

    })
  }


  addNew() {
    this.buttonEnabled = true;
    let test:PagesModule = {
      id:this.idd++,
     header: this.head,
     text:this.main,
     date: new Date()
    };

   this.addPage.emit(this.pageForm.value);
    this.head = '';
    this.main = '';
    console.log(test);

  }
}
