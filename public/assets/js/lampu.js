var firebaseConfig = {
    apiKey: "AIzaSyA7Zdl941vO5STGC-zwdNZhFmnQmBM7A1w",
    authDomain: "sistemlampu.firebaseapp.com",
    databaseURL: "https://sistemlampu-default-rtdb.firebaseio.com",
    projectId: "sistemlampu",
    storageBucket: "sistemlampu.appspot.com",
    messagingSenderId: "815493702041",
    appId: "1:815493702041:web:146ed004ce45ec49067308"
    };
  
    firebase.initializeApp(firebaseConfig);
  
    (function() {
        firebase.database().ref('Sensor').child('Kelembapan').on('value', function (data) {
            var sensor = data.val();
            document.getElementById('lembab').innerHTML = "<h3>" + sensor +" "+"%"+ "</h3>"
        });   
    }());
  
    (function() {
      firebase.database().ref('Sensor').child('Suhu').on('value', function (data) {
          var sensor = data.val();
          document.getElementById('suhuu').innerHTML = "<h3>" + sensor +" "+"c"+ "</h3>"
      }); 
  }());
  
  (function() {
      firebase.database().ref('Sensor').child('ph').on('value', function (data) {
          var sensor = data.val();
          document.getElementById('pH').innerHTML = "<h3>" + sensor +" "+"pH"+ "</h3>"
      });
  }());
  
  (function() {
      firebase.database().ref('Sensor').child('suhuAir').on('value', function (data) {
          var sensor = data.val();
          document.getElementById('SuhuA').innerHTML = "<h3>" + sensor +" "+"c"+ "</h3>"
      });
  }());
    
  (function (){
    firebase.database().ref('kontrol').child('dapur').on('value', function (data) {
      var sensor = data.val();
      if (sensor == "hidup") {
        $("#statuslampu_dapur").text("ON");
        document.getElementById('statuslampu_dapur');
      } else {
        $("#statuslampu_dapur").text("OFF");
        document.getElementById('statuslampu_dapur');
      }
    });
  }());
  (function (){
    firebase.database().ref('kontrol').child('kamarKedua').on('value', function (data) {
      var sensor = data.val();
      if (sensor == "hidup") {
        $("#statuslampu_kamarkedua").text("ON");
        document.getElementById('statuslampu_kamarkedua');
      } else {
        $("#statuslampu_kamarkedua").text("OFF");
        document.getElementById('statuslampu_kamarkedua');
      }
    });
  }());
  (function (){
    firebase.database().ref('kontrol').child('kamarUtama').on('value', function (data) {
      var sensor = data.val();
      if (sensor == "hidup") {
        $("#statuslampu_kamarutama").text("ON");
        document.getElementById('statuslampu_kamarutama');
      } else {
        $("#statuslampu_kamarutama").text("OFF");
        document.getElementById('statuslampu_kamarutama');
      }
    });
  }());
  (function (){
    firebase.database().ref('kontrol').child('ruangTamu').on('value', function (data) {
      var sensor = data.val();
      if (sensor == "hidup") {
        $("#statuslampu_ruangtamu").text("ON");
        document.getElementById('statuslampu_ruangtamu');
      } else {
        $("#statuslampu_ruangtamu").text("OFF");
        document.getElementById('statuslampu_ruangtamu');
      }
    });
  }());
  (function (){
    firebase.database().ref('kontrol').child('teras').on('value', function (data) {
      var sensor = data.val();
      if (sensor == "hidup") {
        $("#statuslampu_teras").text("ON");
        document.getElementById('statuslampu_teras');
      } else {
        $("#statuslampu_teras").text("OFF");
        document.getElementById('statuslampu_teras');
      }
    });
  }());
  (function (){
    firebase.database().ref('kontrol').child('toilet').on('value', function (data) {
      var sensor = data.val();
      if (sensor == "hidup") {
        $("#statuslampu_toilet").text("ON");
        document.getElementById('statuslampu_toilet');
      } else {
        $("#statuslampu_toilet").text("OFF");
        document.getElementById('statuslampu_toilet');
      }
    });
  }());
  
  (function (){
    firebase.database().ref('Lampu/On').child('Jam').on('value', function(data){
      var Jam = data.val();
      document.getElementById('jamon').innerHTML = "<h4 style='color: white'>" + Jam + ":" + "</h4>"
    });
    }());
  
  (function (){
    firebase.database().ref('Lampu/On').child('Menit').on('value', function(data){
      var Menit = data.val();
      document.getElementById('meniton').innerHTML = "<h4 style='color: white'>" + Menit + " " + "WIB" + "</h4>"
    });
    }());
  
    (function (){
      firebase.database().ref('Lampu/Off').child('Jam').on('value', function(data){
        var Jam = data.val();
        document.getElementById('jamoff').innerHTML = "<h4 style='color: white'>" + Jam + ":" + "</h4>"
      });
      }());
  
    (function (){
      firebase.database().ref('Lampu/Off').child('Menit').on('value', function(data){
        var Menit = data.val();
        document.getElementById('menitoff').innerHTML = "<h4 style='color: white'>" + Menit + " " + "WIB" + "</h4>"
      });
      }());

// tampil teras
$(document).ready(function(){
  var database = firebase.database();
  var teras1;
  
  database.ref('kontrol').on("value", function(snap){
    teras1 = snap.val().teras;
    kamarUtama1 = snap.val().kamarUtama;
    kamarKedua1 = snap.val().kamarKedua;
    dapur1 = snap.val().dapur;
    ruangTamu1 = snap.val().ruangTamu;
    toilet1 = snap.val().toilet;

    if(teras1 == "hidup"){
        document.getElementById("off1").style.display = "none";
        document.getElementById("on1").style.display = "block";
      } else {
        document.getElementById("off1").style.display = "block";
        document.getElementById("on1").style.display = "none";
    }
  });
  
  $(".to").click(function(){
  var firebaseRef = firebase.database().ref('kontrol').child("teras");

  if(teras1 == "hidup"){    // post to firebase
    firebaseRef.set("mati");
    teras1 = "mati";
    var key = database.ref().child('Data').push().key;
    database.ref('Data/'+key+'/dapur').set(dapur);
    database.ref('Data/'+key+'/kamarKedua').set(kamarKedua);
    database.ref('Data/'+key+'/kamarUtama').set(kamarUtama);
    database.ref('Data/'+key+'/ruangTamu').set(ruangTamu);
    database.ref('Data/'+key+'/teras').set(teras);
    database.ref('Data/'+key+'/toilet').set(toilet);
  } else {
    firebaseRef.set("hidup");
    teras1 = "hidup";
    var key = database.ref().child('Data').push().key;
    database.ref('Data/'+key+'/dapur').set(dapur);
    database.ref('Data/'+key+'/kamarKedua').set(kamarKedua);
    database.ref('Data/'+key+'/kamarUtama').set(kamarUtama);
    database.ref('Data/'+key+'/ruangTamu').set(ruangTamu);
    database.ref('Data/'+key+'/teras').set(teras);
    database.ref('Data/'+key+'/toilet').set(toilet);
  }
})
});

//ruang tamu
$(document).ready(function(){
  var database = firebase.database();
  var ruangTamu2;
  
  database.ref('kontrol').on("value", function(snap){
    teras2 = snap.val().teras;
    kamarUtama2 = snap.val().kamarUtama;
    kamarKedua2 = snap.val().kamarKedua;
    dapur2 = snap.val().dapur;
    ruangTamu2 = snap.val().ruangTamu;
    toilet2 = snap.val().toilet;

    if(ruangTamu2 == "hidup"){
        document.getElementById("off2").style.display = "none";
        document.getElementById("on2").style.display = "block";
      } else {
        document.getElementById("off2").style.display = "block";
        document.getElementById("on2").style.display = "none";
    }
  });
  
  $(".to").click(function(){
  var firebaseRef = firebase.database().ref('kontrol').child("ruangTamu");

  if(ruangTamu2 == "hidup"){    // post to firebase
    firebaseRef.set("mati");
    ruangTamu2 = "mati";
    var key = database.ref().child('Data').push().key;
    database.ref('Data/'+key+'/dapur').set(dapur);
    database.ref('Data/'+key+'/kamarKedua').set(kamarKedua);
    database.ref('Data/'+key+'/kamarUtama').set(kamarUtama);
    database.ref('Data/'+key+'/ruangTamu').set(ruangTamu);
    database.ref('Data/'+key+'/teras').set(teras);
    database.ref('Data/'+key+'/toilet').set(toilet);
  } else {
    firebaseRef.set("hidup");
    ruangTamu2 = "hidup";
    var key = database.ref().child('Data').push().key;
    database.ref('Data/'+key+'/dapur').set(dapur);
    database.ref('Data/'+key+'/kamarKedua').set(kamarKedua);
    database.ref('Data/'+key+'/kamarUtama').set(kamarUtama);
    database.ref('Data/'+key+'/ruangTamu').set(ruangTamu);
    database.ref('Data/'+key+'/teras').set(teras);
    database.ref('Data/'+key+'/toilet').set(toilet);
  }
})
});
