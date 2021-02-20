function CalculaArea(num){
   // 2x2+1
   // 3x3+4
   // 4x4+9
    
    var area = Math.pow(num,2)+Math.round(Math.pow(num,2)/2)-1; 
    
     document.getElementById('resultado').innerHTML = "<input type='text' disabled value='n "+ num + "= "+area+"'>";
}