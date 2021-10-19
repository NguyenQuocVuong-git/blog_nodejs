const express = require('express') 
const path = require('path') // co san ho tro cua node
const morgan = require('morgan')
const exphbs = require('express-handlebars');

const app = express()
const port = 3001

//http logger ( console log request sever)
app.use(morgan('combined'))

app.use(express.static(path.join(__dirname , 'public')))
//template angine (them phuong thuc goi view tra ve tu sever)
app.engine('hbs', exphbs({
  extname : '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views' , path.join(__dirname , 'resource/views'));

app.get('/', (req, res) => {
  res.render('home');
})

app.get('/news', (req, res) => {
  res.render('news');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})