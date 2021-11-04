$.ajax({
    type: 'GET',
    url: '/api/chirps',
})
.then(chirpItems => console.log(chirpItems));