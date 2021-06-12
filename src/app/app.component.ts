import { Component } from '@angular/core';
import { PagesModule } from './inerface/pages.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Заметки';
  pages: PagesModule[]=[];

  addNewPage(page: PagesModule ) {
    this.pages.push(page);
  }

  onDeletePage(index:number) {
    this.pages.splice(index,1);
  }
  onEditNote() {
    console.log(this.pages);
  }
}
