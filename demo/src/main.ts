import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
  <h3>${process.env.TEST_ENV_VALUE}</h3>
`

console.log(process.env.TEST_ENV_VALUE)