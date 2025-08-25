"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appConfig = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var app_routes_1 = require("./app.routes");
var platform_browser_1 = require("@angular/platform-browser");
exports.appConfig = {
    providers: [
        (0, core_1.provideBrowserGlobalErrorListeners)(),
        (0, core_1.provideZonelessChangeDetection)(),
        (0, router_1.provideRouter)(app_routes_1.routes), (0, platform_browser_1.provideClientHydration)((0, platform_browser_1.withEventReplay)())
    ]
};
