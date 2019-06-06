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
 
  //billete de 20
  var tabla20 = document.getElementById('tabla20');
  firebase.database().ref('economia/billetes/veinte').on('value',function(snp){
    tabla20.innerHTML='';
    var data = snp.val();
    var con=0;
    for (const key in data) {
        tabla20.innerHTML+=`
        <tr>
            <td>${con+1}</td>
            <td>${data[key].dueño}</td>
            <td>${data[key].dueños.reverse()[1]}</td>
           </tr>`
        con++;
    }
  });

   //billete de 50
   var tabla50 = document.getElementById('tabla50');
   firebase.database().ref('economia/billetes/cincuenta').on('value',function(snp){
    tabla50.innerHTML='';
     var data = snp.val();
     var con=0;
     for (const key in data) {
         tabla50.innerHTML+=`
         <tr>
             <td>${con+1}</td>
             <td>${data[key].dueño}</td>
             <td>${data[key].dueños.reverse()[1]}</td>
            </tr>`
         con++;
     }
   });

     //moneda de 01
     var tabla01 = document.getElementById('tabla01');
     firebase.database().ref('economia/monedas/1peso').on('value',function(snp){
      tabla01.innerHTML='';
       var data = snp.val();
       var con=0;
       for (const key in data) {
           tabla01.innerHTML+=`
           <tr>
               <td>${con+1}</td>
               <td>${data[key].dueño}</td>
               <td>${data[key].dueños.reverse()[1]}</td>
              </tr>`
           con++;
       }
     });

     //moneda de 02
     var tabla02 = document.getElementById('tabla02');
     firebase.database().ref('economia/monedas/2peso').on('value',function(snp){
      tabla02.innerHTML='';
       var data = snp.val();
       var con=0;
       for (const key in data) {
           tabla02.innerHTML+=`
           <tr>
               <td>${con+1}</td>
               <td>${data[key].dueño}</td>
               <td>${data[key].dueños.reverse()[1]}</td>
              </tr>`
           con++;
       }
     });