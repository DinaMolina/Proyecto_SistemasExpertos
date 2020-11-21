import { Component, OnInit } from '@angular/core';
import { EditorChangeContent, EditorChangeSelection, QuillModule } from 'ngx-quill';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  changedEditor(event: EditorChangeContent | EditorChangeSelection){
    console.log(event);   
  }

}
