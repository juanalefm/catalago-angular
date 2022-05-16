import { Component, OnInit, ViewChild } from '@angular/core';
import { Carro } from '../carro';
import { Service } from '../service/service.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  vetorCarros: Carro[] = [];
  dataSource = new MatTableDataSource(this.service.listarCarros());
  public displayedColumns = ['marca', 'modelo', 'ano', 'cor', 'potencia', 'tracao', 'motor', 'id'];

  @ViewChild(MatTable,{static:true}) table!: MatTable<any>;

  constructor(private service: Service, public dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.vetorCarros = this.service.listarCarros();
  }

  excluir(id: number){
    this.service.excluir(id);
    this.table.renderRows();
  }

  editar(id: number){
    var url = '/cadastro/' + id;
    this.router.navigateByUrl(url);
  }

  openDialog(){
    const dialogRef = this.dialog.open(DialogCadastro);
    dialogRef.afterClosed().subscribe(result =>{
      console.log('DIALOG RESULT: ', result);
    })
  }
}

@Component({
  selector: 'dialog-cadastro',
  templateUrl: 'dialog-cadastro.html'
})
export class DialogCadastro {}
