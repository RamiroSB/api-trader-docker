"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const marcas_controller_1 = require("../Controllers/marcas.controller");
const router = (0, express_1.Router)();
router.route('/marcas').get(marcas_controller_1.GetMarcas);
exports.default = router;
