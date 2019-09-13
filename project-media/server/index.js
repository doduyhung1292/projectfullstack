const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const path = require('path')
const router = jsonServer.router(path.join(__dirname, 'db.json'))

const app = express();

server.use(middlewares)
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})

app.set('views', './views');
app.get('')