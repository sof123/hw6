const addArticle = (req, res) => {
     console.log('Payload received', req.body)
     articles.articles.push({id: currentId+1, author: 'Scotty', body: req.body.body});
     currentId++;
     //return articles.articles[currentId-1];

     res.send(req.body);
}

const getArticles = (req, res) => {
     console.log('Payload received', req.body)
    var payload;
    if (req.method == 'GET' && req.url == '/articles')
	  {
  		payload = articles;
	  }

    //res.setHeader('Content-Type', 'application/json')
    //res.statusCode = 200
    res.send(JSON.stringify(payload))
	  console.log(JSON.stringify(payload))
    //res.send(req.body)
}

module.exports = app => {
     app.post('/article', addArticle)
     //app.get('/', hello)
     app.get('/articles', getArticles)
}
