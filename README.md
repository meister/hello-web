# Hello Web

[![CI](https://github.com/meister/hello-web/actions/workflows/ci.yml/badge.svg)](https://github.com/meister/hello-web/actions/workflows/ci.yml)

This is a simple Hello World app which can be used for any kind of quick testing. Simply download, fork or checkout the app and do what you like. I use it to test and develop Kubernetes manifests or Helm charts. A simple app that reports a container's hostname, IP and client IP.

## Using

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

To run the app, just run:

```bash

node build
```
## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## License

See the [LICENSE](./LICENSE.md) file for license rights and limitations (MIT).