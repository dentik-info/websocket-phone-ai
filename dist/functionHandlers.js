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
const functions = [];
functions.push({
    schema: {
        name: "get_weather_from_coords",
        type: "function",
        description: "Get the current weather",
        parameters: {
            type: "object",
            properties: {
                latitude: {
                    type: "number",
                },
                longitude: {
                    type: "number",
                },
            },
            required: ["latitude", "longitude"],
        },
    },
    handler: (args) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const response = yield fetch(`https://api.open-meteo.com/v1/forecast?latitude=${args.latitude}&longitude=${args.longitude}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`);
        const data = yield response.json();
        const currentTemp = (_a = data.current) === null || _a === void 0 ? void 0 : _a.temperature_2m;
        return JSON.stringify({ temp: currentTemp });
    }),
});
exports.default = functions;
