$(document).ready(function () {
    getAllBlogs();
});

function getAllBlogs() {
    return $.ajax({
        url: "http://localhost:8080/blog/getAllBlogs?function=getPost",
        method: "GET",
        dataType: "json",
        success: function(result) {
            loadTable(result);
            loadBlogsId(result.map(blog => blog.id));
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
            console.error("Failed to fetch blogs:", textStatus, errorThrown);
        }
    });
}

$('#save').click(function () {
    let blogTitle=$('#blogTitle').val();
    let blogContent=$('#blogContent').val();

    $.ajax({
        url:"http://localhost:8080/blog/saveBlog",
        method:"POST",
        contentType:"application/json",
        "data":JSON.stringify({
            "title": blogTitle,
            "content": blogContent,
        }),
        
        success:function (result){
            swal("Confirmation!", "Blog Saved Succesfull!", "success");
            getAllBlogs();
        },
        
        error:function (error){
            swal("Error!", "Blog Saved Failed!", "error");
        }
        
    })
});

$('#get').click(function search() {
    let blogId = $('#blogId').val();

    $.ajax({
        url: "http://localhost:8080/blog/getBlog/" + blogId,
        method: "GET",
        dataType: "json",

        success: function (res) {
            fillFields(res);
            return true;
        },
        error: function (res) {
            swal("Warning!", "Blog not found!", "info");
            return false;
        }
    });
});

$('#update').click(function () {
    let blogId=$('#blogId').val();
    let blogTitle=$('#blogTitle').val();
    let blogContent=$('#blogContent').val();

    swal({
        title: "Are you sure?",
        text: "Do you want to update this blog!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                $.ajax({
                    url:"http://localhost:8080/blog/updateBlog",
                    method:"PUT",
                    contentType:"application/json",
                    "data":JSON.stringify({
                        "id": blogId,
                        "content": blogContent,
                        "title": blogTitle
                    }),

                    success:function (result){
                        swal("Confirmation!", "Blog Update Succesfull!", "success");
                        getAllBlogs();
                    },
                    error:function (error){
                        swal("Error!", "Blog Update Failed!", "error");
                    }
                });
            }
        });
});

$('#delete').click(function () {
    let blogId=$('#blogId').val();

    swal({
        title: "Are you sure?",
        text: "Do you want to delete this blog!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                $.ajax({
                    url: "http://localhost:8080/blog/deleteBlog/" + blogId,
                    method: "DELETE",
                    contentType: "application/json",
                    "data": JSON.stringify({
                        "id": blogId
                    }),
                    success: function (result) {
                        swal("Confirmation!", "Blog Delete Succesfull!", "success");
                        getAllBlogs();
                    },
                    error: function (error) {
                        swal("Error!", "Blog Delete Failed!", "error");
                    }
                });
            }
        });
});

function loadTable(data) {
    $("#tbl-blogs").empty();
    data.forEach(function(blog) {
        $(".blog-table").append(
            "<tr> " +
            "<td>" + blog.id + "</td>" +
            "<td>" + blog.title + "</td>" +
            "<td>" + blog.content + "</td>" +
            "</tr>"
        );
    });
}

function loadBlogsId(blogIds) {
    const blogId = $("#blogId");
    blogId.empty();
    blogId.append('<option value="">Select the Blog Id Before Update, Get, Delete</option>');

    blogIds.forEach(function (id) {
        blogId.append(
            "<option value='" + id + "'>" + id + "</option>"
        );
    });
}

function fillFields(data) {
    $("#blogId").val(data.id);
    $("#blogTitle").val(data.title);
    $("#blogContent").val(data.content);    
}