const mongoose = require('mongoose')


// mongoose.connect('mongodb://localhost/moviedb')
mongoose.connect('mongodb+srv://aravinda:ksaravinda123@movie.ztxt3.mongodb.net/moviesdb?retryWrites=true&w=majority')

mongoose.connection.once('open', function(){
    console.log("Connection is Active...");
}).on('error', function(error){
    console.log("error is: ",error);
})