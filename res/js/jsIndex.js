$(function() { // https://api.npoint.io/ea8373c445cb032c57f1
    $.get("res/json/posts.json", function(posts) {
        for (post of posts) {
            let divPost = $('<div class= "post">');
            let divHeading = $('<div class= "post-heading">');
            let divContent = $('<div class= "post-content">');
            let divLikeButton = $('<div class= "like-button">');
            let date = $('<p>').text(post.date);
            let postText = $('<p>').text(post.text);

            let likePicture = $('<input type="image">');
            likePicture.attr('src', post.likePicture);
            let profilePicture = $('<img>');
            profilePicture.attr('src', post.profilePicture);

            if (post.postPicture != "") {
                let postPicture = $('<img>');
                postPicture.attr('src', post.postPicture);
                divContent.append(postPicture, postText)
            } else {
                divContent.append(postText)
            }

            divHeading.append(profilePicture, date)
            divLikeButton.append(likePicture)

            divPost.append(divHeading, divContent, divLikeButton);


            $('.main').append(divPost)
        }

    })
});

$(function dropdownMenu(){
    document.getElementById("ddc").classList.toggle("show");
});

window.onclick = function(event) {
    if (!event.target.matches(".account")) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}