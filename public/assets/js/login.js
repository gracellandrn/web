var loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', function(event) {
  event.preventDefault();
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var errorMsg = document.getElementById('error-msg');
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function(userCredential) {
      // User berhasil login, redirect ke halaman index.html
      window.location.href = "../../dashboard/index.html";
    })
    .catch(function(error) {
      // Menangani error saat login
      errorMsg.innerHTML = 'Email atau password salah';
    });
});

