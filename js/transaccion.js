var firebaseConfig = {
    apiKey: "AIzaSyDQKbvpH6rqwVm2rt50b043mDp16RLKLts",
    authDomain: "ingconocimiento-3015f.firebaseapp.com",
    databaseURL: "https://ingconocimiento-3015f.firebaseio.com",
    projectId: "ingconocimiento-3015f",
    storageBucket: "ingconocimiento-3015f.appspot.com",
    messagingSenderId: "819494977569",
    appId: "1:819494977569:web:f402ff46481110c4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//-------------------------------------------


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

function codificar(emisor,receptor,cantidad)
{
   let x= caesar.encode(emisor, 3)
   let y= caesar.encode(receptor, 3)
    let z= caesar.encode(cantidad, 3)
    registroCodificado= `${x}?${y}?${z}`;
    firebase.database().ref('blockchain').push({
        data: registroCodificado
    })
       
}

//-------------------------------------------


  var conta=0;
  //EMISOR
  document.getElementById('formEmisor').addEventListener('submit',function(e){
    e.preventDefault();
    var suma20=0;
    var num20=0;

    var suma50=0;
    var num50=0;
    var suma01=0;
    var num01=0;
    var suma02=0;
    var num02=0;

    //validar Emisor
    firebase.database().ref('usuarios').on('value',function(snapshot){
        var data = snapshot.val();
        console.log(data);
        var emisor = document.getElementById('emisor');
        for (const key in data) { 

            if (key == emisor.value) {
                  document.getElementById('btnEmisor').style.display= 'none';
                  emisor.disabled=true;
                  document.getElementById('simbolo').style.display= 'block';
                  conta++;
                  
            }
           
        }
      
    });
    
    //02
    firebase.database().ref('economia/monedas/2peso').on('value',function(snapshot){
        var data = snapshot.val();
        console.log(data);
        var usuario = document.getElementById('emisor');
        suma02=0;num02=0;
        for (const key in data) { 

            if (data[key].dueño == usuario.value) {
                    suma02+= data[key].valor;
                    num02++;
            }
           
        }
      
    });
    //01
    firebase.database().ref('economia/monedas/1peso').on('value',function(snapshot){
        var data = snapshot.val();
        console.log(data);
        var usuario = document.getElementById('emisor');
        suma01=0;num01=0;
        for (const key in data) { 

            if (data[key].dueño == usuario.value) {
                    suma01+= data[key].valor;
                    num01++;
            }
           
        }
      
    });

    //veinte
    firebase.database().ref('economia/billetes/veinte').on('value',function(snapshot){
        var data = snapshot.val();
        console.log(data);
        var usuario = document.getElementById('emisor');
        suma20=0;num20=0;
        for (const key in data) { 

            if (data[key].dueño == usuario.value) {
                    suma20+= data[key].valor;
                    num20++;
            }
           
        }
      
    });

     //50
     firebase.database().ref('economia/billetes/cincuenta').on('value',function(snapshot){
        var data = snapshot.val();
        console.log(data);
        var usuario = document.getElementById('emisor');
        suma50=0;num50=0;
        for (const key in data) { 
                
            if (data[key].dueño == usuario.value) {
                    suma50+= data[key].valor;
                    console.log(suma50);
                    num50++;
            }
           
        }
        
        
    });
    //render
    firebase.database().ref('economia').on('value',function(snapshot){
        var usuario = document.getElementById('emisor');
        
        document.getElementById('tabla').innerHTML=`
        <td>${usuario.value}</td>
        <td>${suma20+suma50+suma01+suma02}</td>
        <td>${num20}</td>
        <td>${num50}</td>
        <td>${num01}</td>
        <td>${num02}</td>
        `;
    });
    firebase.database().ref('economia').on('value',function(snapshot){
        var usuario = document.getElementById('emisor');
        console.log(suma20,suma50);
        document.getElementById('tabla2').innerHTML=`

        <td>
        <select id="select20">
      
         </select>
        </td>
        <td>
        <select id="select50">
      
        </select>
        </td>
        <td>
        <select id="select01">
      
        </select>
        </td>
        <td>
        <select id="select02">
      
        </select>
        </td>
        `;
        for (let index = 0; index <= num20; index++) {
           document.getElementById('select20').innerHTML+=`
           <option value="${index}">${index}</option>
           `;   
        }
        for (let index = 0; index <= num50; index++) {
            document.getElementById('select50').innerHTML+=`
            <option value="${index}">${index}</option>
            `;   
         }
         for (let index = 0; index <= num01; index++) {
            document.getElementById('select01').innerHTML+=`
            <option value="${index}">${index}</option>
            `;   
         }
         for (let index = 0; index <= num02; index++) {
            document.getElementById('select02').innerHTML+=`
            <option value="${index}">${index}</option>
            `;   
         }

         console.log(num50);
    });
    

  });//form final emisor



  ///RECEPTOR
  document.getElementById('formReceptor').addEventListener('submit',function(e){
    e.preventDefault();
    var suma20=0;
    var num20=0;

    var suma50=0;
    var num50=0;
    var suma01=0;
    var num01=0;
    var suma02=0;
    var num02=0;

    //validar Receptor
    firebase.database().ref('usuarios').on('value',function(snapshot){
        var data = snapshot.val();
        console.log(data);
        var receptor = document.getElementById('receptor');
        for (const key in data) { 

            if (key == receptor.value) {
                  document.getElementById('btnReceptor').style.display= 'none';
                  receptor.disabled=true;
                  document.getElementById('simbolo2').style.display= 'block';
                  conta++
                  if (conta == 2) {
                       document.getElementById('btnEnviar').style.display='block';
                  }
            }
           
        }
      
    });
   

  });//form final receptor


  //ENVIO DE INFO
  document.getElementById('btnEnviar').addEventListener('click',function(e){
    var s50 = document.getElementById('select50');
    var s20 = document.getElementById('select20');
    var s01 = document.getElementById('select01');
    var s02 = document.getElementById('select02');
    
    //encriptar
     function suma() {
          let suma50 =  parseInt(s50.value) * 50;
          let suma20 =  parseInt(s20.value) * 20;
          let suma01 =  parseInt(s01.value) * 1;
          let suma02 =  parseInt(s02.value) * 2;

         return suma50+suma20+suma01+suma02;
     }
    var userEmisor = document.getElementById('emisor');
    var userReceptor = document.getElementById('receptor');
        codificar(userEmisor.value,userReceptor.value,suma()*132);
        console.log(suma());


    //fin encriptar
   
    var terminar=0;
    var terminar2=0;
    var terminar3=0;
    var terminar4=0;
    //01
    firebase.database().ref('economia/monedas/1peso').on('value',function(snapshot){
        var data = snapshot.val();
        console.log(data);
        
        
        var userEmisor = document.getElementById('emisor');
        var userReceptor = document.getElementById('receptor');
       
        for (const key in data) {
            if (data[key].dueño == userEmisor.value) {
                console.log('encontro'+key);
                console.log(s01.value);

                if(terminar != s01.value){
                var dueños = data[key].dueños;
               dueños.push(userReceptor.value);
              console.log(dueños)
              terminar= terminar+1;
              console.log('terminar: '+terminar);
             firebase.database().ref(`economia/monedas/1peso/${key}`).set({
                  dueño: userReceptor.value,
                  valor:1,
                  dueños:dueños
              })
              
                }//if 20 value
              
            }//primer if
        }
      
    });
     //02
     firebase.database().ref('economia/monedas/2peso').on('value',function(snapshot){
        var data = snapshot.val();
        console.log(data);
        
        
        var userEmisor = document.getElementById('emisor');
        var userReceptor = document.getElementById('receptor');
       
        for (const key in data) {
            if (data[key].dueño == userEmisor.value) {
                console.log('encontro'+key);
                console.log(s02.value);

                if(terminar2 != s02.value){
                var dueños = data[key].dueños;
               dueños.push(userReceptor.value);
              console.log(dueños)
              terminar2= terminar2+1;
              console.log('terminar2: '+terminar2);
             firebase.database().ref(`economia/monedas/2peso/${key}`).set({
                  dueño: userReceptor.value,
                  valor:2,
                  dueños:dueños
              })
              
                }//if 20 value
              
            }//primer if
        }
      
    });
    //veinte
    firebase.database().ref('economia/billetes/veinte').on('value',function(snapshot){
        var data = snapshot.val();
        console.log(data);
        
        
        var userEmisor = document.getElementById('emisor');
        var userReceptor = document.getElementById('receptor');
       
        for (const key in data) {
            if (data[key].dueño == userEmisor.value) {
                console.log('encontro'+key);
                console.log(s20.value);

                if(terminar3 != s20.value){
                var dueños = data[key].dueños;
               dueños.push(userReceptor.value);
              console.log(dueños)
              terminar3= terminar3+1;
              console.log('terminar3: '+terminar3);
             firebase.database().ref(`economia/billetes/veinte/${key}`).set({
                  dueño: userReceptor.value,
                  valor:20,
                  dueños:dueños
              })
              
                }//if 20 value
              
            }//primer if
        }
      
    });

     //50
     firebase.database().ref('economia/billetes/cincuenta').on('value',function(snapshot){
        var data = snapshot.val();
        console.log(data);
        var userEmisor = document.getElementById('emisor');
        var userReceptor = document.getElementById('receptor');
       
        for (const key in data) {
            if (data[key].dueño == userEmisor.value) {
                console.log('encontro'+key);
                console.log(s50.value);

                if(terminar4 != s50.value){
                var dueños = data[key].dueños;
               dueños.push(userReceptor.value);
              console.log(dueños)
              terminar4= terminar4+1;
              console.log('terminar4: '+terminar4);
             firebase.database().ref(`economia/billetes/cincuenta/${key}`).set({
                  dueño: userReceptor.value,
                  valor:50,
                  dueños:dueños
              })
              
                }//if 20 value
              
            }//primer if
        }
        
        
    });
    
    document.getElementById('btnEnviar').style.display='none';
  })

  //FIN envio info
