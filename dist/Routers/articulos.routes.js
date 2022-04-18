"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const articulos_controller_1 = require("../Controllers/articulos.controller");
const router = (0, express_1.Router)();
router.route('/articulos').get(articulos_controller_1.GetArticulos);
exports.default = router;
