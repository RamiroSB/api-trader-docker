import e, { Request, Response } from 'express';
import Pool from 'mysql2/typings/mysql/lib/Pool';
import { Connect } from '../database/database';

export async function GetMarcas(req: Request, res: Response): Promise<Response>{
  const sql_marcas = 
    `SELECT DISTINCT
      m.Codigo AS Codigo,
      m.Descripcion AS Descripcion,
      m.Marca_madre as Marca_madre
     FROM articulos a
     LEFT JOIN marcas m ON (a.Marca=m.Codigo)
     WHERE a.Habilitado_web AND CODIGO IS NOT NULL
     ORDER BY m.Descripcion`;

  const conn = await Connect();

  const marcas = await conn.query(sql_marcas).catch();

  return res.json(marcas[0]);
}