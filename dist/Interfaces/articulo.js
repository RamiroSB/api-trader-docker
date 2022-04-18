"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.articulo = void 0;
class articulo {
    constructor(arg) {
        this.Marca = arg.Marca;
        this.Alias = arg.Alias;
        this.Produc_Manager = arg.Produc_Manager;
        this.Descripcion_corta = arg.Descripcion_corta;
        this.Garantia_meses = arg.Garantia_meses;
        this.Stock = arg.Stock;
        this.Video = arg.Video;
        this.Imagen = arg.Imagen;
        if (this.Imagen) {
            let Position = this.Imagen.lastIndexOf('//');
            this.Imagen = this.Imagen.substr(Position, this.Imagen.length);
        }
        this.Peso = arg.Peso;
        this.Alto = arg.Alto;
        this.Ancho = arg.Ancho;
        this.Profundo = arg.Profundo;
    }
}
exports.articulo = articulo;
