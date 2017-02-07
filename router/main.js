module.exports = function (app) {
  app.get('/',function (req,res) {
    res.render('index.html')
  });
  app.get('/calc', function (req, res){
    res.render('calc.html')
  });
}
