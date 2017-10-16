import * as Hapi from "hapi";
import * as Chalk from "chalk";
import "isomorphic-fetch";
import { handleAppRequest } from "./request";
import * as inert from "inert";
import { initPageStyles } from "common/styles";
import * as fs from "fs";
import * as path from "path";

const start = async () => {
    const server = new Hapi.Server({});
    await server.register(inert);

    const tlsDir = process.env.TLSDIR || "/tls";
    const key = process.env.TLSKEY || "current.key";
    const chain = process.env.TLSCHAIN || "current.chain";
    let tls;

    if (fs.existsSync(path.join(tlsDir, key))) {
        tls = {
            key: fs.readFileSync(path.join(tlsDir, key)),
            cert: fs.readFileSync(path.join(tlsDir, chain))
        }
        const http = new Hapi.Server();
        http.connection({
            port: 80,
        });

        http.route({
            method: '*',
            path: '/{path*}',
            handler: (req, resp) => resp.redirect('https://alexmattoni.com/' + req.params.path)
        });
        const httpErr = await http.start();
        if (httpErr) { throw httpErr; }
        console.log(
            Chalk.black.bgYellow(
                `\n\n👻 <~ HTTP redirect server running at: ${http.info!.uri}`,
            ),
        );
    }

    server.connection({
        port: process.env.PORT || 3000,
        tls
    });

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
            `\n\n👻 !!! Server running at: ${server.info!.uri}`,
        ),
    );
}

try {
    start();
} catch (e) {
    console.error(e);
}
