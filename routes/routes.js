const express = require('express')
const connection = require('../db')
const router = express.Router()
const _ = require('lodash')

router.get('/', (req, res) => {
  //viewing details from the database
  let sql = `SELECT * FROM posts`
  connection.query(sql, (err, rows) => {
    //console.log(rows)
    if (err) throw err

    res.render('index', {
      title: 'My Blog',
      posts: rows,
    })
  })
})
router.get('/about', (req, res) => {
  res.render('about', {
    title: 'About',
  })
})
router.get('/contact', (req, res) => {
  res.render('contact', {
    title: 'Contact me',
  })
})
router.get('/customise', (req, res) => {
  res.render('post', {
    title: 'Write Post',
  })
})
router.post('/addpost', (req, res) => {
  //add record to database
  let sql = `INSERT INTO posts (title, post) VALUES (?)`
  let values = [req.body.postTitle, req.body.postBody]
  connection.query(sql, [values], (err, data, fields) => {
    if (err) throw err
    console.log('records added successfully')
    res.redirect('/')
  })
})
/* router.get(
  ('/posts/:id',
  (req, res) => {
    let id = req.params.id
    let sql = `SELECT * FROM posts WHERE id = ?`
    connection.query(sql, id, (err, rows) => {
      if (err) throw err
      res.send(rows)
    })
  })
) */

//Get a single post data
router.get('/posts/:id', function (req, res) {
  connection.query('select * from posts where id=?', [req.params.id], function (error, results, fields) {
    if (error) throw error
    //console.log(results[0].id)
    let title = results[0].title
    let post = results[0].post
    res.render('blog', {
      title: title,
      post: post,
    })
  })
})
module.exports = router
/* <%= console.log(posts.id) %> */
