document.addEventListener("DOMContentLoaded", function() {
    var data = {
        isLiked: false,
        isBookmarked: false
    }
    // like/unlike
    var likeBtn = document.getElementById("likeBtn")
    var like = "<i class='bi bi-heart-fill text-danger'></i>"
    var unlike = "<i class='bi bi-heart'></i>"

    likeBtn.addEventListener('click', function() {
        data.isLiked = !data.isLiked
        likeBtn.innerHTML = data.isLiked ? like : unlike
    })
    // click on img
    var postImg = document.getElementById("postImg");
    var likedImg = document.createElement('i');
        likedImg.classList.add('bi');   
        likedImg.classList.add('bi-heart-fill');
        likedImg.classList.add('text-danger');
    var postImgContainer = document.getElementsByClassName('postImgContainer')[0];
    postImg.addEventListener('dblclick', function(event){
        if (postImgContainer.childElementCount < 2) {
            data.isLiked = true;
            likeBtn.innerHTML = data.isLiked ? like : unlike
            postImgContainer.appendChild(likedImg);
            setTimeout(removeLikeOnImage, 1500);
        }
    })
    function removeLikeOnImage() {
        postImgContainer.removeChild(likedImg);
    }

    // save/not save
    var bookmarkBtn = document.getElementById("bookmarkBtn");
    var notSaved = "<i class='bi bi-bookmark'></i>";
    var saved = '<i class="bi bi-bookmark-check-fill"></i>';
    bookmarkBtn.addEventListener('click', function() {
        data.isBookmarked = !data.isBookmarked;
        bookmarkBtn.innerHTML = data.isBookmarked ? notSaved : saved; 
    });
});