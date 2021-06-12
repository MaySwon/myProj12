import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {PagesModule} from '../inerface/pages.module';

@Component({
  selector: 'app-pages-card',
  templateUrl: './pages-card.component.html',
  styleUrls: ['./pages-card.component.css']
})
export class PagesCardComponent implements OnInit {


  @Input() newPage: PagesModule;
  @Output() noteDelete = new EventEmitter<null>();
  @Output() noteEdit = new EventEmitter<PagesModule>();
  status = false;
  constructor() { }

  ngOnInit(): void {
  }


  deletePage() {
    this.noteDelete.emit();
  }
  onEditNote() {
    this.status = !this.status;
    if (this.status == false)
      this.noteEdit.emit();
  }
}
