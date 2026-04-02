/* test/fetch-test.mjs */
const API_URL = 'http://localhost:3003'

const res = await fetch(`${API_URL}/works`)

if (!res.ok) {
    console.error('エラー:', res.status, res.statusText)
    process.exit(1)
}

const data = await res.json()
console.log(`取得件数: ${data.length} 件`)
console.log(data)