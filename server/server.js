const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const plans = require('./data/available-plans.json');

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = 3000;
const app = next({dev, hostname, port});
const handle = app.getRequestHandler();

app.prepare().then(() => {
    createServer(async (req, res) => {
        try {
            const parseUrl = parse(req.url, true);
            const {pathName, query} = parseUrl;

            if (pathName === "/plans") {
                console.log(plans);
                await app.render(req, res, '/plans', query);
            }
            else {
                console.log("num deu");
                await handle(req, res, parseUrl);
            }
        } catch (err) {
            console.error('Error occurred handling', req.url, err)
            res.statusCode = 500
            res.end('internal server error')
        }
    }).listen(port, (err) => {
        if (err) throw err
        console.log(`> Ready on http://${hostname}:${port}`);
    });
});