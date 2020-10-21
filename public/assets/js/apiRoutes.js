//setting up routes
//needs info/ data to utilize 
module.exports=function(app){
    
    app.get("/api/notes", function (req, res){
        res.JSON("someData");
    })
// ----------------------------
    app.post("/api/notes", function(req, res){
        //some response for posting new notes
    })
    app.delete("/api/notes/:id", function(req, res){
        //some response for deleting a selected note using id
    })
};

