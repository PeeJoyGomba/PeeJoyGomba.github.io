var http = require('http');
var url  = require('url') 


http.createServer(
  function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});     
    /*converts url to q object with 
    name/value as its varibles */
    var q = url.parse(req.url,true).query
    //takes value of color from q object
    var colorValue = q.color
    //if block to determine personality
    if(colorValue == "blue"){
      res.end('you drink too much water');
    }else if(colorValue == "green"){
      res.end('you are a vegetable eater who loves nature');
    }else if(colorValue == "orange"){
      res.end('you love pumpkins');
    }else if(colorValue == "red"){
      res.end('you are in love');
    }else{
      res.end('you have no personality');
    }

    
  }

).listen(8080);




