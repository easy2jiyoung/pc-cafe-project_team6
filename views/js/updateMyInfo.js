function updateMyinfo() {

    const userId = '<%= user.userId %>'
    const email = $('#email').val();
    const password = $('#password').val();
    const passwordCheck = $('#passwordCheck').val();
    const phone = $('#phone').val();

    const userData = { email, password, passwordCheck, phone }
    console.log(userId)

    $.ajax({
        url: '/api/users/update/${userId}',
        type: 'post',
        // dataType:'json',
        data: userData,
        success: function onData (data) {
            alert('내 정보를 수정 했습니다.',data)
        },
        error: function onError (error) {
            console.error(error);
        }
    });
}