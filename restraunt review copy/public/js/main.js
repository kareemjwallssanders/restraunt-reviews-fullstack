var updateAvatar = document.querySelector('#avatarSubmit')
var trash = document.querySelectorAll('.fa-trash')

updateAvatar.addEventListener('click', () => {
    var avatar = document.querySelector('#avatar')
    var id = document.querySelector('#userId')

    var data = new FormData()
    data.append('avatar', avatar.files[0])
    data.append('_id', id.value )

    fetch('/api/profile_pic', {
    method: 'PUT',
    body: data
    }).then(function(res,req){
        window.location.reload()
    })
})

Array.from(trash).forEach((el) => {
    el.addEventListener('click', () => {
        var _id = el.parentNode.parentNode.getAttribute("id")
        console.log(_id)
        fetch('/api/reviews', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
            '_id': _id
            })
        }).then(response => {
            window.location.reload()
        })
    })
})