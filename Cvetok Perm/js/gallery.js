(function () {
    const photoContainer = document.querySelectorAll('.photo-container')
    let mainPhoto = document.querySelectorAll('.main-photo')
    for (let i = 0; i <= photoContainer.length; i++) {
        let currentMainPhoto = mainPhoto[i]
        let currentPhotoContainer = photoContainer[i]
        function showThumbnail(src, title,) {
            currentMainPhoto.src = src;
            currentMainPhoto.alt = title;
        }
        currentPhotoContainer.addEventListener('click', function (evt) {
            let thumbnail = evt.target.closest('img');
            if (!thumbnail) {
                return;
            }
            else {
                showThumbnail(thumbnail.src, thumbnail.alt)
            }
        })
    }
}());