
// service-worker.js
self.addEventListener('install', function(e) {
  console.log('Service Worker Installed');
});

self.addEventListener('activate', function(e) {
  console.log('Service Worker Activated');
});


    function navigateTo(page) {
      fetch(page)
        .then(response => response.text())
        .then(html => {
          document.getElementById('page-content').innerHTML = html;
        })
        .catch(error => {
          console.error('Error:', error);
          document.getElementById('page-content').innerHTML = '<h2>Error loading page</h2>';
        });
    }