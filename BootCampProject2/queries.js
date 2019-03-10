var promise = require('bluebird');

var options = 
{
	promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/documents';
var db = pgp(connectionString);

module.exports = 
{
	getAllDocuments: getAllDocuments,
	getSingleDocument: getSingleDocument,
	createDocument: createDocument,
	editDocument: editDocument
};

function getAllDocuments(req, res, next){
  db.any('select * from docs')
    .then(function (data){
      res.status(200)
        .json({
	  status: 'success',
	  data: data,
	  message: 'Retrieved all documents'
	});
    })
    .catch(function (err) {
      return next(err);
    });
}

function getSingleDocument(req, res, next) {
  var docID = parseInt(req.params.id);
  db.one('select * from docs where id = $1', docID)
    .then(function (data) {
      res.status(200)
	.json({
	  status: 'success',
	  data: data,
	  message: 'Retrieved one document'
	});
    })
    .catch(function (err) {
      return next(err);
    });
}

function createDocument(req, res, next) {
  db.none('insert into docs(title, content)' + 'values(${title}, ${content})', req.body)
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
	  message: 'Saved a new document'
	});
    })
    .catch(function (err) {
      return next(err);
    });
}

function editDocument(req, res, next) {
  db.none('update docs set title=$1, content=$2 where id=$3', [req.body.title, req.body.content, parseInt(req.params.id)])
    .then(function () {
      res.status(200)
	.json({
	  status: 'success',
	  message: 'Edited a document'
	});
    })
    .catch(function (err) {
      return next(err);
    });
}
