$(document).ready(function() {
    $("#post-form").hide();


    $(window).on('click',"#forumSubmit", function(e) {
        e.preventDefault();
        let fTitle = $('#forumT').val();
        let fDesc = $('#forumD').val();

        let forumInfo = {
            forumTitle: fTitle,
            forumDescription: fDesc
        }
        console.log(forumInfo);
        if (!forumInfo.forumTitle || !forumInfo.forumDescription) {
            alert("missing info")
            return;
        }


        $.ajax('/api/Box', { type: 'POST', data: forumInfo })
            .then(function() {
                console.log("Forum Created");
                // location.reload();
            })
    });
    $(window).on('click',"#postSubmit", function(e) {
        e.preventDefault();

        let pForum = $('postF').val();
        let pTitle = $('#postT').val();
        let pDesc = $('#postC').val();

        let postInfo = {
            postForum: pForum,
            postTitle: pTitle,
            postContent: pDesc
        }
        console.log(postInfo);
        if (!postInfo.postForum || !postInfo.Title || !postInfo.postContent) {
            alert("missing info")
            return;
        }



        $.ajax('/api/posts', { type: 'POST', data: postInfo })
            .then(function() {
                console.log("Post Created");
                // location.reload();
            })
    });
});

$('.tab a').on('click', function(e) {

    e.preventDefault();

    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');

    target = $(this).attr('href');

    $('.tab-content > div').not(target).hide();

    $(target).fadeIn(600);

});