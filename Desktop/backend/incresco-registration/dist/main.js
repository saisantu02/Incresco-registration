"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const serverless_express_1 = __importDefault(require("@vendia/serverless-express"));
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
let server;
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { logger: ['log', 'error', 'warn', 'debug', 'verbose'] });
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.enableVersioning({
        type: common_1.VersioningType.HEADER,
        header: 'version'
    });
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Registration form')
        .setDescription('Incresco is hiring')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('documentation', app, document);
    await app.init();
    const expressApp = app.getHttpAdapter().getInstance();
    return (0, serverless_express_1.default)({ app: expressApp });
}
const handler = async (event, context, callback) => {
    server = server !== null && server !== void 0 ? server : (await bootstrap());
    return server(event, context, callback);
};
exports.handler = handler;
//# sourceMappingURL=main.js.map