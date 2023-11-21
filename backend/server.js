const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const multer = require('multer');
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");

const salt = 10;
const http = require("http")
const {Server} = require("socket.io")


const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use('/documents', express.static('documents'));


const server = http.createServer(app);

const io = new Server(server, {
    cors:{
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
});


// Enable CORS for all routes (for all origins)
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // You can specify specific origins instead of '*' to restrict access to certain domains
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Add the allowed HTTP methods here
    next();
  });


//connect to database
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'steins_gate'
});



//register user to database
app.post('/register', (req, res) => {
    const userType = req.body.userType;

    let tableName = '';
    if (userType === 'lecturer') {
        tableName = 'lecturer_table';
      } else if (userType === 'student') {
        tableName = 'student_table';
      } else if (userType === 'admin') {
        tableName = 'admin_table';
      } else {
        return res.status(400).send('Invalid user type');
      }
    const query = `INSERT INTO ${tableName} (fname, lname,registration, email, password) VALUES (?,?,?,?,?)`;
    ;
    bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
        if(err) return res.json({Error: "Error for hashing password"});
        const values1 = [
            req.body.firstname,
            req.body.lastname,
            req.body.registration,
            req.body.email,
            hash

        ]
        try{
            connection.execute(query,values1)
            res.send('Successful registration')
        }catch (error){
            console.error('Error uploading data', error);
            res.status(500).send('Internal Server Error')
        }
    })  
})

//check user in database (login)
app.post('/login', (req, res) => {
    const userType = req.body.userType;

    let tableName = '';
    if (userType === 'lecturer') {
        tableName = 'lecturer_table';
    } else if (userType === 'student') {
        tableName = 'student_table';
    } else if (userType === 'admin') {
        tableName = 'admin_table';
    } else {
        return res.status(400).json({ Error: 'Invalid user type' });
    }

    const sql = `SELECT * FROM ${tableName} WHERE email = ?`;
    
    connection.query(sql, [req.body.email], (err, data) => {
        if (err) {
            return res.status(500).json({ Error: 'Login error in server' });
        }
        if (data.length > 0) {
            bcrypt.compare(req.body.password.toString(), data[0].password, (err, response) => {
                if (err) {
                    return res.status(500).json({ Error: 'Password compare error' });
                }
                if (response) {
                    return res.json({ Success: 'Login successful' });
                } else {
                    return res.json({ Error: 'Password doesn\'t match' });
                }
            });
        } else {
            return res.json({ Error: 'No such email' });
        }
    });
});

// Handle file uploads and insert into the database
const storage = multer.diskStorage({
    destination: function(req, file, cb){
         return cb(null, "./documents")
    },
    filename: function(req, file, cb){
        return cb(null, `${Date.now()}_${file.originalname}`)
    }
})

const submit = multer({storage})

app.post('/submit', submit.single('file'), (req, res) => {
   const name = req.file.originalname;
   const description = req.body.desc2;
   const type = req.file.mimetype;
   const path = req.file.path;

   sql = 'INSERT INTO files(name,type,description,path) VALUES (?, ?, ?, ?)';

    try {
        connection.execute(sql, [name, type, description, path]);
        res.send('Submitted to the database')
    }catch (error) {
        console.error('Error submitting data', error)
        res.status(500).send('Internal Server error');
    }
  });



//upload youtube link, name and description to database
app.post('/upload', async (req, res) => {
    
    const link = req.body.link;
    const name = req.body.name;
    const desc = req.body.desc;
   
    // Insert data into the database
    sql = 'INSERT INTO videos (name, description, video_link) VALUES (?, ?, ?)';
  
    try {
      connection.execute(sql, [name, desc, link]);
      res.send('Data uploaded in database.');
    } catch (error) {
      console.error('Error uploading data', error);
      res.status(500).send('Internal Server Error');
    }
  });

//get youtube link data from database and send to student frontend
app.get('/student', (req,res) => {
    const query = 'SELECT * FROM videos';

    connection.execute(query, (err, data) => {
        if(err) return res.json('Error')
        return res.json(data);
    })
})


//get classmates data
app.get('/classmates', (req, res) => {
    const query = 'SELECT id,fname, lname,registration, email FROM student_table';

    connection.execute(query, (err, data) => {
        if(err) return res.json('Error')
        return res.json(data);
    })
})



//get lecturer's data
app.get('/lecturer', (req, res) => {
    const query = 'SELECT id,fname, lname,registration, email FROM lecturer_table';

    connection.execute(query, (err, data) => {
        if(err) return res.json('Error')
        return res.json(data);
    })
})

//delete from student database
app.post("/delete", (req,res) => {
    connection.query(
        'DELETE FROM student_table WHERE id = ?',[req.body.id], (err, data) => {
            if(err){
                return res.json('Delete data error')
            }
            return res.json(data)
        }
    )
})

//delete from lecturer database
app.post("/delete2", (req,res) => {
    connection.query(
        'DELETE FROM lecturer_table WHERE id = ?',[req.body.id], (err, data) => {
            if(err){
                return res.json('Delete data error')
            }
            return res.json(data)
        }
    )
})

//get documents data
app.get('/documents', (req, res) => {
    const query = 'SELECT id,name, type, description, path FROM files';

    connection.execute(query, (err, data) => {
        if(err) return res.json('Error')
        return res.json(data);
    })
})

//download files
app.get('/documents/:filename', (req, res) => {
    const filename = req.params.filename;
    const file = path.join(__dirname, 'documents', filename);
    res.download(file);
  });
  

//seach in database appbar
app.get('/search', (req,res) => {
    const videos = 'SELECT * FROM videos';
    const searchQuery = req.query.query;

    if(!searchQuery){
        return res.status(400).json({ error: 'Invalid search query'});

    }

    const regex = new RegExp(searchQuery, 'i');

    const searchResults = videos.filter((video) => {
        const { name, description} = video;
        return regex.test(name) || regex.test(description);
    });

    res.json(searchResults);
});

//Chat system server

io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);

    socket.on('join_room', (data) => {
        socket.join(data)
        console.log(`user with ID: ${socket.id} joined room: ${data}`);
    })

    socket.on("send_message", (data) => {
        socket.to(data.room).emit("receiver_message",data);
    })
    socket.on("disconnect", ()=> {
        console.log("User Disconnected", socket.id)
    });
});


server.listen(8081, () => {
    console.log("listening...")
})