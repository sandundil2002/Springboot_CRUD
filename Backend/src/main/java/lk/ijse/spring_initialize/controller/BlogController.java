package lk.ijse.spring_initialize.controller;

import lk.ijse.spring_initialize.entity.Blog;
import lk.ijse.spring_initialize.repository.BlogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/blog")
@CrossOrigin
public class BlogController {
    @Autowired
    private BlogRepository blogRepository;

    @PostMapping("/saveBlog")
    public void savePost(@RequestBody Blog blog){
        blogRepository.save(blog);
    }

    @GetMapping("/getAllBlogs")
    public List<Blog> getPost(){
        List<Blog> list = blogRepository.findAll();
        System.out.println(list);
        return list;
    }

    @GetMapping("/getBlog/{id}")
    public Blog getBlog(@PathVariable int id) {
        return blogRepository.findById(id).get();
    }

    @PutMapping("/updateBlog")
    public void updateBlog(@RequestBody Blog blog){
        blogRepository.save(blog);
    }

    @DeleteMapping("/deleteBlog/{id}")
    public void deleteBlog(@PathVariable int id){
        blogRepository.deleteById(id);
    }
}
