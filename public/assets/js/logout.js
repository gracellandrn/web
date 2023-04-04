var logoutButton = document.getElementById('logout-button');
logoutButton.addEventListener('click', function(event) {
  event.preventDefault();
  firebase.auth().signOut().then(function() {
    // User berhasil logout, redirect ke halaman login
    window.location.href = "../dashboard/auth/sign-in.html";
  }).catch(function(error) {
    // Menangani error saat logout
  });
});