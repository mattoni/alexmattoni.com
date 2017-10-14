import * as Hapi from "hapi";
import * as Chalk from "chalk";
import "isomorphic-fetch";
import { handleAppRequest } from "./request";
import * as inert from "inert";
import { initPageStyles } from "common/styles";

const start = async () => {
    const server = new Hapi.Server();
    await server.register(inert);

    server.connection({ port: 3000, host: '127.0.0.1' });
    server.route({
        method: '*',
        path: '/{p*}',
        handler: handleAppRequest,
    });

    server.route({
        method: 'GET',
        path: '/js/{file*}',
        handler: {
            directory: {
                path: './dist/public/js',
            }
        }
    });

    server.route({
        method: 'GET',
        path: '/assets/{file*}',
        handler: {
            directory: {
                path: './dist/public/assets',
            }
        }
    })

    initPageStyles();

    const err = await server.start();
    if (err) { throw err; }
    console.log(
        Chalk.black.bgYellow(
            `\n\n👻  Server running at: ${server.info!.uri}`,
        ),
    );
}

try {
    start();
} catch (e) {
    console.error(e);
}
