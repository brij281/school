
import * as express from 'express';
const app = express();
const userTable = {
  'brij': 'abc123',
  'ashish': 'xyz123'
};

app.options('/api/login', (req, res) => {
  res.header({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'content-type, x-auth'
  }).send();
});

app.get('/api/login', (req, res) => {
  const auth = req.headers['x-auth']
  res = res.header({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'content-type'
  });
  if (auth) {
    const credential = auth.split(':');
    const pwd = userTable[credential[0]];
    if (pwd == undefined) {
      res.send('User not available');
    } else if (credential[1] == '') {
      res.send('Password Missing');
    } else if (pwd == credential[1]) {
      res.send('Authentiated');
    } else {
      res.send('Authentication Fail');
    }
  } else {
    res.status(401).send('Error');
  }
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});