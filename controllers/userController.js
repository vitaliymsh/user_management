const getDb = require('../util/database').getDb;

const User = require('../models/user');


// View Users
exports.view = (req, res) => {
  // User the connection
  
  let removedUser = req.query.removed;
  User.fetchAll().then(rows => {
    console.log(rows);
    res.render('home', {rows, removedUser});
  });

  /*
  User.fetchAll().then(users => { console.log(users )})
  connection.query('SELECT * FROM user WHERE status != "removed"', (err, rows) => {
    // When done with the connection, release it
    if (!err) {
      let removedUser = req.query.removed;
      //console.log(rows);
      res.render('home', { rows, removedUser });
    } else {
      console.log(err);
    }
    //console.log('The data from user table: \n', rows);
  });
  */
  
}

// Find User by Search
exports.find = (req, res) => {
  let searchTerm = req.body.search;
  let removedUser = false;
  User.findByName(searchTerm).then(rows => {
    console.log(rows);
    res.render('home', {rows, removedUser});
  });
  /*
  // User the connection
  connection.query('SELECT * FROM user WHERE first_name LIKE ? OR last_name LIKE ?', ['%' + searchTerm + '%', '%' + searchTerm + '%'], (err, rows) => {
    if (!err) {
      res.render('home', { rows });
    } else {
      console.log(err);
    }
    console.log('The data from user table: \n', rows);
  });
  */
}

exports.form = (req, res) => {
  res.render('add-user', {alert : false});
}

// Add new user
exports.create = (req, res) => {
  const { first_name, last_name, email, phone, comments } = req.body;
  let searchTerm = req.body.search;
  const user = new User(first_name, last_name, email, phone, comments, "None");
  res.redirect('/');
  return user.save();
}


// Edit user
exports.edit = (req, res) => {
  let user = User.findById(req.params.id);
  console.log(user);
  res.redirect('/');
  // User the connection
  /*
  connection.query('SELECT * FROM user WHERE id = ?', [req.params.id], (err, rows) => {
    if (!err) {
      res.render('edit-user', { rows, alert: false });
    } else {
      console.log(err);
    }
    console.log('The data from user table: \n', rows);
  });
  */
}


// Update User
exports.update = (req, res) => {
  const { first_name, last_name, email, phone, comments } = req.body;
  // User the connection
  /*
  connection.query('UPDATE user SET first_name = ?, last_name = ?, email = ?, phone = ?, comments = ? WHERE id = ?', [first_name, last_name, email, phone, comments, req.params.id], (err, rows) => {
    
    if (!err) {
      // User the connection
      connection.query('SELECT * FROM user WHERE id = ?', [req.params.id], (err, rows) => {
        // When done with the connection, release it
        
        if (!err) {
          res.render('edit-user', { rows, alert: `${first_name} has been updated.` });
        } else {
          console.log(err);
        }
        console.log('The data from user table: \n', rows);
      });
    } else {
      console.log(err);
    }
    console.log('The data from user table: \n', rows);
  });
  */
}

// Delete User
exports.delete = (req, res) => {
  /*connection.query('UPDATE user SET status = ? WHERE id = ?', ['removed', req.params.id], (err, rows) => {
    if (!err) {
      let removedUser = encodeURIComponent('User successeflly removed.');
      res.redirect('/?removed=' + removedUser);
    } else {
      console.log(err);
    }
    console.log('The data from beer table are: \n', rows);
  });
  */

}

// View Users
exports.viewall = (req, res) => {

  // User the connection
  rows = User.fetchAll();
  res.render('view-user', {rows})
  /*
  connection.query('SELECT * FROM user WHERE id = ?', [req.params.id], (err, rows) => {
    if (!err) {
      res.render('view-user', { rows });
    } else {
      console.log(err);
    }
    console.log('The data from user table: \n', rows);
  });*/

}

exports.activate = (req, res) => {
  let removedUser = req.query.removed;
  User.fetchAll().then(rows => {
    console.log(rows);
    res.render('home', {rows, removedUser});
  });
  /*
  connection.query('UPDATE user SET status = ? WHERE id = ?', ['active', req.params.id], (err, rows) => {
    if (!err) {
      let removedUser = encodeURIComponent('User successeflly activated.');
      res.redirect('/?removed=' + removedUser);
    } else {
      console.log(err);
    }
    console.log('The data from beer table are: \n', rows);
  });
  */

}

exports.deactivate = (req, res) => {
  /*
  connection.query('UPDATE user SET status = ? WHERE id = ?', ["None", req.params.id], (err, rows) => {
    if (!err) {
      let removedUser = encodeURIComponent('User successeflly deactivated.');
      res.redirect('/?removed=' + removedUser);
    } else {
      console.log(err);
    }
    console.log('The data from beer table are: \n', rows);
  });
  */
}