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

  document.getElementById('formRegistro').addEventListener('submit',function(e){
    e.preventDefault();
    var usuario = document.getElementById('usuario');
    var correo = document.getElementById('correo');
    firebase.database().ref('usuarios').push({
        user: usuario.value,
        email:correo.value
    })
  
 
  
  });
  (function(){
      firebase.database().ref('usuarios').on('value',function(snapshot){
        document.getElementById('tabla').innerHTML=''
          var data =snapshot.val() ;
          console.log(data)

        for (const key in data) {
            document.getElementById('tabla').innerHTML+=`
            <tr>
        
            <td>${key}</td>
            <td>${data[key].user}</td>
            <td>${data[key].email}</td>
            
           </tr>`
        }

         
        
      
      
  })
})()