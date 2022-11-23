
const fs = require('fs')
const path = require('path')

const url = 'https://api.freestuffbot.xyz/public/ci/build-web'
const headers = { authorization: process.env.FSBCI_API_AUTH }
const dest = path.join(__dirname, '..', 'static', 'test.json')

async function run() {
  const res = await fetch(url, { headers })
    .then(res => res.json())
  if (res.status !== 200) return
  fs.writeFileSync(dest, JSON.stringify(res))
}
run().then(() => process.exit())
