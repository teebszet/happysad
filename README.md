README.md for HappySad

SYNOPSIS:

1. Ensure installation of node, preferrably v4.x
    https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions

    sudo apt-get install node

2. Install dependencies of project

    npm install

3. Run tests

    npm test

4. Start app in dev mode

    npm start

5. (optional) inspect the node express server with

    curl "http://localhost:3000/happysad?text=glad%20glad"


DESIGN CHOICES:

Backend service is written in node.js behind an express server.

Frontend service is written in React.js which proxies its requests to the
backend listening on localhost:3000.

I initially wrote the backend service as a perl script so I could get a proof
of concept out reasonably quickly and make sure I understood the specifications
of the app.

I decided on React for the web page because I like the declarative syntax for a
single-page-app and took the opportunity to learn some more about modern
frameworks.  And since I was coding JS in ES6 already (with babel transpiler),
it made sense for me to write the backend out in JS as well - node is supposed
to be fast! This was my first experience connecting up a node express server
with a React page (and testing with Mocha), so I at least have a better
understanding about the crazy amount of tools in the JS community now.

I used the starter kit from:
https://github.com/fortruce/react-fullstack-skeleton to get an example of how
the app might be wired up with a webpack-dev-server, but removed the react
router and flux parts to keep it simple.

I would've like to write more tests for the react frontend, and an integration
test, but I think the backend is solid enough with the unit tests I wrote.
