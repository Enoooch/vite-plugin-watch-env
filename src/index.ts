import type { Plugin, ViteDevServer } from 'vite'
import { name } from '../package.json'
import dotenv from 'dotenv'
import fs from 'fs'

export function loadEnv(filePath: string) {
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const envConfig = dotenv.parse(fs.readFileSync(filePath))
    for (const k in envConfig) {
      process.env[k] = envConfig[k]
    }
  }
}

export function watchEnv(): Plugin {
  return {
    name,
    configureServer(server: ViteDevServer) {
      server.watcher.on('change', async path => {
        const filename = path.split('/').pop()
        if (filename?.startsWith('.env')) {
          server.config.logger.info('env file changed, restarting server...', {
            clear: true,
            timestamp: true,
          })
          await server.restart()
        }
      })
    }
  }
}