"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", (_, res) => {
    res.send("respond with a resource");
});
exports.default = router;
//# sourceMappingURL=accommodations.routes.js.map