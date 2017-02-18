var app = require('./config/server');

//var rotaNoticias = require('./app/routes/noticias');
//rotaNoticias(app);

// O codigo acima pode ser simplificado com a linha abaixo:
var rotaNoticias = require('./app/routes/noticias')(app);

var rotaHome = require('./app/routes/home')(app);

var rotaFormInclusaoNoticia = require('./app/routes/formulario_inclusao_noticia')(app);

app.listen(3000, function(){
	console.log('Servidor ON');
});