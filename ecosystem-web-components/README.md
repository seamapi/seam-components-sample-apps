# Ecosystem Web Components

## Run

```
$ npm i
$ npm start
```

Then open http://localhost:8080.

## Stack

- Web Components: https://www.webcomponents.org/introduction
- Seam Ecosystem Components: https://www.seam.co/docs/ui-components/overview/ecosystem-components

### Bootstrap

Create an `index.html` file that loads `ecosystem.js` from the Seam CDN and serve it over HTTP.

### Configuration

Replace `eco_live_your_embed_key` in `index.html` with your Seam Ecosystem embed key.
To get one, email support@getseam.com with the origins you will embed the components on.

Embed keys work on `http://localhost` and `http://127.0.0.1` on any port,
so no extra configuration is needed to run this app locally.
Serve the page over HTTP: opening `index.html` directly from disk will not work,
as the embed key is checked against the page origin.
