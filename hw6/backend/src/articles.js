var currentId = 3
var articles = { 'articles' : [ { id: 1, author: 'Scott', body:'A post', date: new Date(), comments:"blah" },
{ id: 2, author: 'Scotty', body:'A posty', date: new Date(), comments:"new comments"},
            { id: 3, author: 'Scottie', body:'A postie', date: new Date(), comments: "new comments2" }]}
defaultHeadline = "Default Headline"

const addArticle = (req, res) => {
  currentId += 1;
  const newArticle = { id: currentId, author: 'Scotty', body: req.body.body };
  articles.articles.push(newArticle);
  res.send(newArticle);
}

const getArticles = (req, res) => {
    res.json(articles.articles)
}
const getArticleById = (req, res) => {
  const article = articles.articles.find(a => {
    return a.id === parseInt(req.params.id)
  })

  if (!article) {
    res.status(404).json({})
  } else {
    res.json(article)
  }
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
     app.get('/articles', getArticles)
     app.get('/headlines/', getHeadline)
     app.get('/article/:id*?', getArticleById)
}
