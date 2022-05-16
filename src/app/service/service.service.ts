import { Injectable } from '@angular/core';
import { Carro } from 'src/app/carro';

@Injectable({
  providedIn: 'root'
})
export class Service {

  constructor() { }

  private vetorCarros: Carro[] = [
    new Carro(1, 1983, 'GM', 'Chevette', 'Azul', 65, 'Traseira', 'OHC 1.6'),
    new Carro(2, 1983, 'Volkswagem', 'Gol GTI', 'Branco', 88, 'Dianteira', 'AP 1.8'),
    new Carro(3, 1983, 'BMW', '135I', 'Preta', 165, 'Traseira', '6 cilindros'),
  ];
  private carro: Carro = new Carro(0, 0, '', '', '', 0, '', '' );
  //Cadastro
  public cadastroCarro(carro: Carro){
    this.vetorCarros.push(carro);
  }

  //Listar todos carros
  public listarCarros(){
    return this.vetorCarros;
  }

  //listar um carro
  public listarPeloId(id: number){
    console.log('id ->', id);
    var index = this.vetorCarros.findIndex(e =>{
      return e.id == id;
    });
    if(index !== -1){
      return this.vetorCarros[index];
    }else {
      return null;
    }
  }

  //alterar carro
  public alterar(carro: Carro){
    var index = this.vetorCarros.map(e => e.id).indexOf(carro.id);
    console.log( 'INDEX -> ', index);
    this.vetorCarros[index] = carro;
  }

  //excluir
  public excluir(id: number){
    var index = this.vetorCarros.map(e => e.id).indexOf(id);
    this.vetorCarros.splice(index, 1);
  }
}
