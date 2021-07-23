var reasons=[
    "My Mother", 
    "My father", 
    "My Grand father",
    "My Grand Mother"
  ]
  var image=[
    "png-clipart-child-mother-mom-child-reading-removebg-preview.png",
    "dad-kids-flat-vector-illustrations-260nw-566747539-removebg-preview.png",
    "grandparent-grandfather-grandpa-png-clipart-african-american-grandfather-and-grandson-cartoon-png-728_967-removebg-preview.png",
    "png-clipart-child-mother-mom-child-reading-removebg-preview.png"]
  
  var i=0
  function nextslide(){
    document.getElementById("reasontext").innerHTML = reasons[i];
     document.getElementById("album").src= image[i];
    document.getElementById("audio").play()
    
  }