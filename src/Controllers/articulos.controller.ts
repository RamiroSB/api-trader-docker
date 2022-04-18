import e, { Request, Response } from 'express';
import { Connect } from '../database/database';

export async function GetArticulos(req: Request, res: Response): Promise<Response>{
    let sql_articulos = 
      `SELECT
         mar.Descripcion AS Marca,
         art.Alias,
         art.Descripcion as Nombre,
         ven.Nombre AS Produc_Manager,
         /* desc_art.Descripcion_Web AS Descripcion_corta, */
         art.Garantia_meses,
         Stock_articulo(art.Alias,'D') AS Stock,
         /* med_vid.Path_Local AS Video, */
         med_img.Path_Local AS Imagen,
         /* CONCAT(art.Peso, ' ', uni_pes.Simbolo) AS Peso, */
         /* CONCAT(art.Alto_pack ,' ',uni_dim.Simbolo) AS Alto, */
         /* CONCAT(art.Ancho_pack,' ',uni_dim.Simbolo) AS Ancho, */
         CONCAT(art.Profundidad_pack,' ',uni_dim.Simbolo) AS Profundo
       FROM articulos art
       LEFT JOIN marcas mar ON mar.Codigo = art.Marca
       LEFT JOIN vendedores ven ON ven.Codigo = art.Respon_del_artic
       LEFT JOIN descrip_web_art desc_art ON desc_art.Alias = art.Alias
       LEFT JOIN arch_multimedia med_vid ON med_vid.Alias = art.Alias AND med_vid.Tipo_MM = 'V'/*ART_MM_VIDEO*/
       LEFT JOIN arch_multimedia med_img ON med_img.Alias = art.Alias AND med_img.Tipo_MM = 'I'/*ART_MM_VIDEO*/ and  med_img.Renglon = '1'
       LEFT JOIN unidades uni_pes ON uni_pes.Codigo = art.Uni_peso_pack
       LEFT JOIN unidades uni_dim ON uni_dim.Codigo = art.Uni_medida_pack
       WHERE
           art.Habilitado_web = '1'
       AND art.Bundle <> '1'`;

    const sku = req.query.sku;
    const marca = req.query.marca;

    const conn = await Connect();

    //aca iria funcion

    if (sku) {
        sql_articulos = sql_articulos + `AND art.Artic_nro_parte = ?`;
        const articulos = await conn.query(sql_articulos,[sku]);
        // @ts-ignore
        let art = [];
         
        // @ts-ignore
        Object.assign(art,articulos[0])

         // @ts-ignore
         
         if (art[0].Imagen){
            // @ts-ignore
           let Position: number = art[0].Imagen.lastIndexOf('\\') + 1;
            // @ts-ignore
           art[0].Imagen = art[0].Imagen.substr(Position, art[0].Imagen.length);                    
         }
        // @ts-ignore
        return res.json(art); 
        
    }else if (marca){
        sql_articulos = sql_articulos + `AND art.Marca = ?`;
        const articulos = await conn.query(sql_articulos,[marca])
        // @ts-ignore
        let xmarcas = [];
         
        // @ts-ignore
        Object.assign(xmarcas,articulos[0]);

        for (let i=0; i<xmarcas.length; i++) {
         // @ts-ignore
         if (xmarcas[i].Imagen){
            // @ts-ignore
           let Position: number = xmarcas[i].Imagen.lastIndexOf('\\') + 1;
            // @ts-ignore
            xmarcas[i].Imagen = xmarcas[i].Imagen.substr(Position, xmarcas[i].Imagen.length);                       
         }            
        }
        // @ts-ignore
        return res.json(xmarcas);

    }else{
        const articulos = await conn.query(sql_articulos);
        // @ts-ignore
        let xarticulos = [];

        // @ts-ignore
        Object.assign(xarticulos,articulos[0]);

        for (let i=0; i<xarticulos.length; i++) {
         // @ts-ignore
         if (xarticulos[i].Imagen){
            // @ts-ignore
           let Position: number = xarticulos[i].Imagen.lastIndexOf('\\') + 1;
            // @ts-ignore
            xarticulos[i].Imagen = xarticulos[i].Imagen.substr(Position, xarticulos[i].Imagen.length);                       
         }            
        }

        // @ts-ignore
        return res.json(xarticulos);
    }  
}