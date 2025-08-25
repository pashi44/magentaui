"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var app_config_1 = require("./app/app.config");
var app_1 = require("./app/app");
(0, platform_browser_1.bootstrapApplication)(app_1.App, app_config_1.appConfig)
    .catch(function (err) { return console.error(err); });
