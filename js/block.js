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

  firebase.database().ref('blockchain').on('value',function(snap){
    var data = snap.val();
    var con = 0;
    document.getElementById('tabla').innerHTML='';
    for (const key in data) {
        document.getElementById('tabla').innerHTML+=`
        <tr>
        <td>${con++}</td>
        <td>${data[key].data}</td>
       </tr>
        `;
    }
  });