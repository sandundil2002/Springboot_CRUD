$('#save').click(function () {
    let blogId=$('#blogId').val();
    let blogContent=$('#blogTitle').val();
    let blogTitle=$('#blogContent').val();

    $.ajax({
        url:"http://localhost:8080/blog/saveBlog",
        method:"POST",
        contentType:"application/json",
        "data":JSON.stringify({
            "id": blogId,
            "content": blogContent,
            "title": blogTitle
        }),
        
        success:function (result){
            swal("Confirmation!", "Blog Saved Succesfull!", "success");
        },
        
        error:function (error){
            swal("Error!", "Blog Saved Failed!", "error");
        }
        
    })
});

$('#updatepost').click(function () {
    let postId=$('#post-id').val();
    let postcontent=$('#post-content').val();
    let postTitle=$('#post-title').val();

    console.log(postId,postTitle,postcontent)
    $.ajax({
        url:"http://localhost:8080/blog/putPost",
        method:"PUT",
        contentType:"application/json",
        "data":JSON.stringify({
            "id": postId,
            "content": postcontent,
            "title": postTitle
        }),
        success:function (result){
            console.log(result);
            alert("done")
        },
        error:function (error){
            console.error("error");
            alert("Try again");
        }
    })
});

$('#deletepost').click(function () {
    let postId=$('#post-id').val();

    $.ajax({
        url:`http://localhost:8080/blog/deletePost?id=${postId}`,
        method:"DELETE",
        contentType:"application/json",
        "data":JSON.stringify({
            "id": postId
        }),
        success:function (result){
            console.log(result);
            alert("done")
        },
        error:function (error){
            console.error("error");
            alert("Try again");
        }
    })
});


$('#getpost').click(function () {

    //let postId=$('#post-id').val();
    // let postcontent=$('#post-content').val();
    // let postTitle=$('#post-title').val();

    //console.log(postId,postTitle,postcontent)
    $.ajax({
        url:"http://localhost:8080/blog/getPost?function=getAllPosts",
        method:"GET",
        contentType:"application/json",

        success:function (res){
            let post = JSON.parse(res);
            console.log("post",post)
            $('#PostManage .tableRow').empty();
            post.forEach(c => {
                loadTable(c);
            });
            console.log(result);
            alert("done")
        },
        error:function (error){
            console.error("error");
            alert("Try again");
        }
    })
});

function loadTable(post) {
    $("#PostManage .tableRow").append(
        "<tr> " +
        "<td>" +
        post.id +
        "</td>" +
        "<td>" +
        post.content +
        "</td>" +
        "<td>" +
        post.title+
        "</td>" +
        "</tr>"
    );
}