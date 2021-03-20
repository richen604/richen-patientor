"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiBaseUrl = void 0;
if (process.env.NODE_ENV === "development") {
    exports.apiBaseUrl = "http://localhost:3000/api";
}
if (process.env.NODE_ENV === "production") {
    exports.apiBaseUrl = "/api";
}
