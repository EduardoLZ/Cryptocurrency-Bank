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
 
  
  document.getElementById('formconsulta').addEventListener('submit',function(e){
    e.preventDefault();
    var suma20=0;
    var num20=0;

    var suma50=0;
    var num50=0;
    var suma01=0;
    var num01=0;
    var suma02=0;
    var num02=0;

    //02
    firebase.database().ref('economia/monedas/2peso').on('value',function(snapshot){
        var data = snapshot.val();
        console.log(data);
        var usuario = document.getElementById('usuario');
        num02=0; suma02=0;
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
        var usuario = document.getElementById('usuario');
        num01=0; suma01=0;
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
        var usuario = document.getElementById('usuario');
        num20=0; suma20=0;
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
        var usuario = document.getElementById('usuario');
        num50=0; suma50=0;
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
        
        console.log(suma20,suma50);
        document.getElementById('tabla').innerHTML=`
        <td>${usuario.value}</td>
        <td>${suma20+suma50+suma01+suma02}</td>
        <td>${num20}</td>
        <td>${num50}</td>
        <td>${num01}</td>
        <td>${num02}</td>
        `;
       

    });


  });//form final


