package lk.ijse.spring_initialize.controller;

import lk.ijse.spring_initialize.entity.Blog;
import lk.ijse.spring_initialize.repository.BlogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

@RestController
@RequestMapping("/blog")
public class BlogController {

    @Autowired
    private BlogRepository blogRepository;

    @GetMapping("/hello")
    public String hello(){
        return "Hello World!";
    }

    @PostMapping("/number")
    public int getNum(){
        return 10;
    }

    @RequestMapping(value = "/req{id}", method = GET)
    public int getId(@PathVariable int id) {
        System.out.println("ID " + id);
        return id;
    }

    @GetMapping("/obj")
    public Object getObj() {
        return new Blog();
    }

    @PostMapping("/savepost")
    public void savePost(@RequestBody Blog blog){
        System.out.println(blog.toString());
        blogRepository.save(blog);
    }

    @GetMapping("/getpost")
    public List<Blog> getPost(){
        List<Blog> list = blogRepository.findAll();
        System.out.println(list);
        return list;
    }

}
