

var caesar = caesar || (function() {
    var doStaff = function (txt, desp, action) {
        var replace = (function() {
            var abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
                'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
            var l = abc.length;
            return function(c) {
                var i = abc.indexOf(c.toLowerCase());
                if (i != -1) {
                    var pos = i;
                    if (action) {
                        // forward
                        pos += desp;
                        pos -= (pos >= l)?l:0;
                    } else {
                        // backward
                        pos -= desp;
                        pos += (pos < 0)?l:0;
                    }
                    return abc[pos];
                }
                return c;
            };
        })();
        var re = (/([a-z])/ig);
        return String(txt).replace(re, function (match) {
            return replace(match);
        });
    };

    return {
            encode: function(txt, desp) {
            return doStaff(txt, desp, true);
        },
            decode: function(txt, desp) {
            return doStaff(txt, desp, false);
        }
    };
})();
document.getElementById('formulario').addEventListener('submit',(e)=>{
e.preventDefault();
codificar();
});
function codificar()
{
    document.getElementById("resultado").innerHTML=`Resultado codificado : 
        ${caesar.encode(document.getElementById("cadena").value, 3)}?${caesar.encode(document.getElementById("cadena2").value, 3)}?${caesar.encode(document.getElementById("cadena3").value, 3)*132}
    `;
    document.getElementById("cadena").value='';
    document.getElementById("cadena2").value='';
    document.getElementById("cadena3").value='';
}
function decodificar()
{
    var p1 = document.getElementById("cadena4").value;  //tomamos en una variable lo ingresado en el login nombre
    var p2= p1.split("?");
    if (p2[1] === undefined || p2[2] === undefined) {
        document.getElementById("resultado").innerHTML=`
        <h4 class="bg-danger text-white">CADENA INVALIDA</h4>`
    } else {
        document.getElementById("resultado").innerHTML=`
        <h4>Emisor: ${caesar.decode(p2[0], 3)}</h4>
        <h4>Receptor: ${caesar.decode(p2[1], 3)}</h4>
        <h4>Cantidad: ${caesar.decode(p2[2], 3)/132}</h4>`
    }
   
    
    
   
}