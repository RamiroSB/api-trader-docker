"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMarcas = void 0;
const database_1 = require("../database/database");
function GetMarcas(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const sql_marcas = `SELECT DISTINCT
      m.Codigo AS Codigo,
      m.Descripcion AS Descripcion,
      m.Marca_madre as Marca_madre
     FROM articulos a
     LEFT JOIN marcas m ON (a.Marca=m.Codigo)
     WHERE a.Habilitado_web AND CODIGO IS NOT NULL
     ORDER BY m.Descripcion`;
        const conn = yield (0, database_1.Connect)();
        const marcas = yield conn.query(sql_marcas).catch();
        return res.json(marcas[0]);
    });
}
exports.GetMarcas = GetMarcas;
