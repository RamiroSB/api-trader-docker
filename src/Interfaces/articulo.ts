export interface IArticulo{
  Marca:string;
  Alias:string;
  Produc_Manager:string;
  Descripcion_corta:string;
  Garantia_meses:number;
  Stock:number;
  Video:string;
  Imagen:string;
  Peso:string;
  Alto:string;
  Ancho:string;
  Profundo:string;
}

export class articulo{
  Marca: string;
  Alias: string;
  Produc_Manager: string;
  Descripcion_corta: string | null;
  Garantia_meses: number | null;
  Stock: number | null;
  Video: string | null;
  Imagen: string | null;
  Peso: string | null;
  Alto: string | null;
  Ancho: string | null;
  Profundo: string | null;

  constructor(arg: IArticulo){
    this.Marca = arg.Marca;
    this.Alias = arg.Alias;
    this.Produc_Manager = arg.Produc_Manager;
    this.Descripcion_corta = arg.Descripcion_corta;
    this.Garantia_meses = arg.Garantia_meses;
    this.Stock = arg.Stock;
    this.Video = arg.Video;
    this.Imagen = arg.Imagen;
    if (this.Imagen){
      let Position: number = this.Imagen.lastIndexOf('//');
     this.Imagen = this.Imagen.substr(Position, this.Imagen.length);                       
    }
    this.Peso = arg.Peso;
    this.Alto = arg.Alto;
    this.Ancho = arg.Ancho;
    this.Profundo = arg.Profundo;                          
  }                             
}
