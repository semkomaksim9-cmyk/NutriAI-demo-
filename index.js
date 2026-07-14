const fs = require('fs')
const path = require('path')
const readline = require('readline')
const sqlite3 = require('sqlite3').verbose()

const DB_PATH = path.join(__dirname, 'data.db')
const CSV_PATH = process.argv[2] || path.join(__dirname, 'products.csv')

if(!fs.existsSync(CSV_PATH)){
  console.error('CSV file not found:', CSV_PATH)
  process.exit(1)
}

const db = new sqlite3.Database(DB_PATH)

db.serialize(()=>{
  db.run('CREATE TABLE IF NOT EXISTS products(id INTEGER PRIMARY KEY, name TEXT, calories_per_100 REAL)')
  const stmt = db.prepare('INSERT OR REPLACE INTO products(id, name, calories_per_100) VALUES(?,?,?)')

  const rl = readline.createInterface({ input: fs.createReadStream(CSV_PATH), crlfDelay: Infinity })
  let first = true
  rl.on('line', (line)=>{
    if(first){ first = false; return } // skip header
    if(!line.trim()) return
    const parts = line.split(',')
    const id = parts[0] ? parseInt(parts[0].trim()) : null
    const name = parts[1] ? parts[1].trim() : ''
    const kcal = parts[2] ? parseFloat(parts[2].trim()) : 0
    stmt.run(id, name, kcal)
  })

  rl.on('close', ()=>{
    stmt.finalize(()=>{
      console.log('Import finished')
      db.close()
    })
  })
})
