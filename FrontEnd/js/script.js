$(document).ready(function () {
    getAllBlogs();
    generateBlogID();
});

function generateBlogID() {
    const tbody = $(".blog-table");
    const rows = tbody.find("tr");
    let maxID = 0;

    rows.each(function () {
        const idCell = $(this).find("td").eq(0).text();
        if (idCell.startsWith("B")) {
            const currentID = parseInt(idCell.slice(1));
            if (currentID > maxID) {
                maxID = currentID; 
            }
        }
    });

    let newID =(maxID + 1).toString().padStart(3, "0");
    $("#blogId").val(newID); 
}

function getAllBlogs() {
    return $.ajax({
        url: "http://localhost:8080/blog/getAllBlogs?function=getPost",
        method: "GET",
        dataType: "json",
        success: function(result) {
            loadTable(result);
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
            console.error("Failed to fetch blogs:", textStatus, errorThrown);
        }
    });
}

$('#save').click(function () {
    let blogId=$('#blogId').val();
    let blogTitle=$('#blogTitle').val();
    let blogContent=$('#blogContent').val();

    $.ajax({
        url:"http://localhost:8080/blog/saveBlog",
        method:"POST",
        contentType:"application/json",
        "data":JSON.stringify({
            "id": blogId,
            "title": blogTitle,
            "content": blogContent,
        }),
        
        success:function (result){
            swal("Confirmation!", "Blog Saved Succesfull!", "success");
        },
        
        error:function (error){
            swal("Error!", "Blog Saved Failed!", "error");
        }
        
    })
});

$('#get').click(function () {
    let blogId = $('#blogId').val();

    $.ajax({
        url: "http://localhost:8080/blog/getBlog/" + blogId,
        method: "GET",
        dataType: "json",

        success: function (res) {
            fillFields(res);
        },
        error: function (res) {
            swal("Warning!", "Blog not found!", "info");
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
                    },
                    error: function (error) {
                        swal("Error!", "Blog Delete Failed!", "error");
                    }
                });
            }
        });
});

function loadTable(data) {
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

function fillFields(data) {
    $("#blogId").val(data.id);
    $("#blogTitle").val(data.title);
    $("#blogContent").val(data.content);    
}