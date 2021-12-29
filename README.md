# vite-plugin-watch-env
> Apply .env file to process.env and watch file changes in vite.

## Install
```sh
npm install vite-plugin-watch-env --save-dev
```
```sh
yarn add vite-plugin-watch-env -D
```
```sh
pnpm add vite-plugin-watch-env -D
```

## Usage
```ts
// vite.config.ts
import { loadEnv, watchEnv } from 'vite-plugin-watch-env'

export default ({ mode }) => {
  loadEnv(`./.env.${mode}`)
  // here you can access env values from .env file
  console.log(process.env.TEST_ENV_VALUE)

  return defineConfig({
    plugins: [
      watchEnv(),
    ],
    define: {
      'process.env': {
        TEST_ENV_VALUE: process.env.TEST_ENV_VALUE,
      }
    }
  })
}
```