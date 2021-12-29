import { defineConfig } from 'vite'
import { loadEnv, watchEnv } from '../src/index'

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
      },
    },
    server: {
      open: false,
      host: '0.0.0.0',
      port: 3010,
    },
  })
}
