import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Carro } from '../carro';
import { Service } from '../service/service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  isEditar: boolean = false;
  public vetorCarros:Carro[] = [];
  public carro:Carro = new Carro(0, 0, '', '', '', 0, '', '' );


  constructor( private service: Service, private _snackBar: MatSnackBar, private route: ActivatedRoute) { }

  ngOnInit(): void {
    var getIdUrl = this.route.snapshot.paramMap.get('id');
    if(getIdUrl != null){
      var result = this.service.listarPeloId(parseInt(getIdUrl));
      if(result != null){
        this.carro = result;
        this.isEditar = true;
      }else{
        this.openSnackBar('Carro não encontrado!', 'snackbar-red');
      }
    }
  }

  cadastrar(){
    this.service.cadastroCarro(this.carro);
    //abre um snackbar alertando do cadastro
    this.openSnackBar('Cadastrado com sucesso!', 'snackbar-green');
    //limpar campos
    this.carro = new Carro(0, 0, '', '', '', 0, '', '' );
  }

  editar(){
    this.service.alterar(this.carro);
    this.openSnackBar('Carro alterado com sucesso!', 'snackbar-green');
    this.carro = new Carro(0, 0, '', '', '', 0, '', '' );
    this.isEditar = false;
  }

  openSnackBar(menssagem: string, classSnackBar: string){
    this._snackBar.open(menssagem, 'fechar', {
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: [classSnackBar]
    });
  }

}
