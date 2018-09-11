var element = document.getElementById('addFile');
console.log(element);
element.addEventListener('change',function (e){
   var filePanel =document.getElementById('uploadPanel');
   var child =document.getElementById('child');
   console.log(child);
   console.log(filePanel);
   var files= e.target.files[0]
   if(files){
       console.log(files)
       filePanel.style.display="block";
    var node =document.createElement("Li");
       filePanel.appendChild(node);
   }else{
       console.log("no file was selected");
   }
});
