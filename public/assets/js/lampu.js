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
      if (sensor == 1) {
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
      if (sensor == 1) {
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
      if (sensor == 1) {
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
      if (sensor == 1) {
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
      if (sensor == 1) {
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
      if (sensor == 1) {
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