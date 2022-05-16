export class Carro {
  public id: number = 0;
  public ano: number = 0;
  public marca: string = '';
  public modelo: string = '';
  public cor: string = '';
  public potencia: number = 0;
  public tracao: string = '';
  public motor: string = '';

  constructor(
    id: number,
    ano: number, 
    marca: string,
    modelo: string,
    cor: string,
    potencia:number,
    tracao: string,
    motor: string,
  ){
    this.id = id;
    this.ano = ano;
    this.marca = marca;
    this.modelo = modelo;
    this.cor = cor;
    this.potencia = potencia;
    this.tracao = tracao;
    this.motor = motor;
  }

}