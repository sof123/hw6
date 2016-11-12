var currentId = 3
var articles = { 'articles' : [ { id: 1, author: 'Scott', body:'A post', date: new Date(), comments:"blah" },
{ id: 2, author: 'Scotty', body:'A posty', date: new Date(), comments:"new comments"},
            { id: 3, author: 'Scottie', body:'A postie', date: new Date(), comments: "new comments2" }]}
defaultHeadline = "Default Headline"

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
const getArticlesId = (req, res) => {
     console.log('Payload received in getArticlesIdd', req.body)
     console.log(req.body)
    var payload;
    console.log(req.method == 'GET')
    if (req.method == 'GET')
	  {
      console.log("req.params.id is " + req.params.id)
  		payload = articles.articles[parseInt(req.params.id) -1 ];
	  }

    //res.setHeader('Content-Type', 'application/json')
    //res.stfdsfatusCode = 200
    res.send(JSON.stringify(payload))
	  console.log(JSON.stringify(payload))
    //res.send(req.body)
}

const getHeadline = (req, res) => {
  console.log(req.params.user)
  console.log('Payload received', req.body)
 var payload;
 if (req.method == 'GET' && req.url == '/headlines')
 {
   payload = defaultHeadline;
 }

 //res.setHeader('Content-Type', 'application/json')
 //res.statusCode = 200
 res.send(JSON.stringify(payload))
 console.log(JSON.stringify(payload))
}



module.exports = app => {
     app.post('/article', addArticle)
     //app.get('/', hello)ffef
     app.get('/articles', getArticles)
     app.get('/headlines/', getHeadline)
     app.get('/articles/:id*?', getArticlesId)
}
