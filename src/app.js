const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '../public')));

app.set('view engine', 'ejs');

app.set('views', __dirname + '/views');

app.use('/', require('./routes/index'));

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
  console.log(`http://localhost:${app.get('port')}`);
});