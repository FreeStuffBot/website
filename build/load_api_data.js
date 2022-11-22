
const axios = require('axios')
const fs = require('fs')
const path = require('path')

const url = 'https://api.freestuffbot.xyz/public/ci/build-web'
const headers = { authorization: process.env.FSBCI_API_AUTH }
const dest = path.join(__dirname, '..', 'static', 'test.json')

async function run() {
  const res = await axios.get(url, { headers })
  if (res.status !== 200) return
  fs.writeFileSync(dest, JSON.stringify(res.data))
}
run().then(() => process.exit())
