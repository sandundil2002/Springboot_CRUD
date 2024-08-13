<a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=600&size=50&pause=1000&center=true&vCenter=true&width=835&height=70&lines=Spring+Boot+CRUD" alt="Typing SVG" /></a>

## 

<p align="center"><img src="https://i.ibb.co/sQqsbP4/image.png" alt="project-image"></p>

This is a Spring Boot project that demonstrates basic CRUD (Create, Read, Update, Delete) operations with a RESTful API. The project is built using Spring Boot, Spring Data JPA, and a MySQL database (or any other database as per your configuration).


## Features

- Create: Add new records to the database.
- Read: Fetch single or multiple records.
- Update: Modify existing records.
- Delete: Remove records from the database.
- Cross-Origin Resource Sharing (CORS) enabled for frontend communication.


## Tech Stack

**Java 17:** The programming language used for the backend.

**Spring Boot:**  For creating the RESTful API.

**Spring Data JPA:** For interacting with the database.

**MySQL:** The database used for storing data (configurable).

**Maven:** For managing project dependencies.



## Installation

Clone the repository:

```bash
https://github.com/sandundil2002/Springboot_CRUD.git
cd springboot-crud-operations
```

Configure the Database:

```bash
spring.datasource.url=jdbc:mysql://localhost:3306/your_database_name
spring.datasource.username=your_username
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
```

Build & Run the project:

```bash
mvn clean install
mvn spring-boot:run
```

The application will start on http://localhost:8080.
## API Reference

#### Get all blogs

```http
GET "/blog/getAllBlog"
```

#### Get a blog

```http
GET "/blog/getBlog?id=1"
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `int` | **Required**. Id of blog to fetch |

#### Add new blog

```http
POST "/blog/saveBlog"

{
    "title": "Main",
    "content": "Test"
}
```

#### Update a blog

```http
PUT "/blog/updateBlog"

{
    "title": "Main",
    "content": "Updated"
}
```

#### Delete a blog

```http
DELETE "/blog/deleteBlog?id=1"
```


| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `int` | **Required**. Id of blog to delete |


## Contributing

Contributions are always welcome!

Please submit a pull request or open an issue to discuss your ideas.

