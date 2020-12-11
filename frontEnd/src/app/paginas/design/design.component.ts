import { Component, OnInit } from '@angular/core';
import { EditorChangeContent, EditorChangeSelection, QuillModule } from 'ngx-quill';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnInit {
  regionVisible:string = 'herramientas';
  imagenes:any= [
    {url: '1.jpg'},{url: '2.jpg'},{url: '3.jpg'},{url: '4.jpg'},{url: '5.jpg'},{url: '6.jpg'},{url: '7.jpg'},
    {url: '8.jpg'},{url: '9.jpg'},{url: '10.jpg'}, {url: '11.jpg'},{url: '12.jpg'}
   ]; 
   colores: any = [
    { color: '#1abc9c'},{ color: '#e8f8f5' },{ color: '#d1f2eb' },{ color: '#a3e4d7' },{ color: '#76d7c4' },{ color: '#48c9b0' },
    { color: '#17a589' },{ color: '#148f77' },{ color: '#117864' },{ color: '#0e6251' },
    { color: '#3498db' },{ color: '#ebf5fb' },{ color: '#d6eaf8' },{ color: '#aed6f1' },{ color: '#85c1e9' },{ color: '#5dade2' },
    { color: '#2e86c1' },{ color: '#2874a6' },{ color: '#21618c' },{ color: '#1b4f72' },
    { color: '#9b59b6' },{ color: '#f5eef8' },{ color: '#ebdef0' },{ color: '#d7bde2' },{ color: '#c39bd3' },
    { color: '#af7ac5' },{ color: '#884ea0' },{ color: '#76448a' },{ color: '#633974' },{ color: '#512e5f' },
    { color: '#2c3e50' },{ color: '#eaecee' },{ color: '#d5d8dc' },{ color: '#abb2b9' },{ color: '#808b96' },{ color: '#566573' },
    { color: '#273746' },{ color: '#212f3d' },{ color: '#1c2833' },{ color: '#17202a' },
    { color: '#f39c12' }, { color: '#fef5e7' },{ color: '#fdebd0' },{ color: '#fad7a0' },{ color: '#f8c471' },{ color: '#f5b041' },
    { color: '#d68910' },{ color: '#b9770e' },{ color: '#9c640c' },{ color: '#7e5109' },
    { color: '#c0392b' },{ color: '#f9ebea' },{ color: '#f2d7d5' },{ color: '#e6b0aa' },{ color: '#d98880' },
    { color: '#cd6155' },{ color: '#a93226' },{ color: '#922b21' },{ color: '#7b241c' },{ color: '#641e16' }
  ];
  colorSeleccionado: any = 'white';
  urlImagen: any;
  colorBloques: any = 'white';
  colorHeader: any = 'white';
  editor : FormGroup;
  editorContent: String;
  bloque1: string;
  bloque2: string;
  bloque3: string;
  bloque4: string;
  bloque5: string;
  
  paginaWeb : any = [];

  constructor() { }

  ngOnInit(): void {
    this.editor = new FormGroup({
      'texto': new FormControl(null)
    });
    
  }
  changedEditor(event: EditorChangeContent | EditorChangeSelection){
    console.log(event);   
  }
  verInicio(){
    this.regionVisible = 'herramientas';

  }
  verPlantilla(){
    this.regionVisible = 'plantillas';

  }
  verTexto(){
    this.regionVisible = 'texto';

  }
  verImagenes(){
    this.regionVisible = 'imagenes';

  }
  verColores(){
    this.regionVisible = 'colores';
  }
  seleccionarColor(color){
    this.colorSeleccionado= color;
    this.urlImagen = null;
    //console.log(this.colorSeleccionado);
  }
  seleccionarImagen(url){
    this.urlImagen= url;
    //console.log(this.urlImagen);
  }
  agregarColorBloque(color){
    this.colorBloques = color;
  }
  agregarColorHeader(color){
    this.colorHeader = color;
  }
  guardarPagina(){
    this.paginaWeb = [
      {
        'colorFondo': this.colorSeleccionado,
        'colorHeader': this.colorHeader,
        'colorBloques': this.colorBloques,
        'urlImagen': this.urlImagen,
        'infoHeader': this.editorContent,
        'infoBloque1': this.bloque1,
        'infoBloque2': this.bloque2,
        'infoBloque3': this.bloque3,
        'infoBloque4': this.bloque4,
        'infoBloque5': this.bloque5
      }
    ];
    console.log(this.paginaWeb);

  }
  textoHeader(){
    this.editorContent = this.editor.get('texto').value;
  }
  textoBloque1(){
    this.bloque1 = this.editor.get('texto').value;
   
  }
  textoBloque2(){
    this.bloque2 = this.editor.get('texto').value;
  }
  textoBloque3(){
    this.bloque3 = this.editor.get('texto').value;
  }
  textoBloque4(){
    this.bloque4 = this.editor.get('texto').value;
  }
  textoBloque5(){
    this.bloque5 = this.editor.get('texto').value;
  }
}
