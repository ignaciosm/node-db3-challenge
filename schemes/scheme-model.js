const db = require("../data/db-config.js");

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
}

function find() {
  return db("schemes");
}

function findById(id) {
  return db("schemes").where({id}).first();
}

// select * from steps
// join schemes
// on steps.scheme_id = schemes.id
// where schemes.id = 1

function findSteps(schemeId) {
  return db("steps")
    .select('steps.id', 'schemes.scheme_name', 'steps.instructions')
    .join('schemes', 'steps.scheme_id', 'schemes.id')
    .where('scheme_id', schemeId)
}

function add(scheme) {
  return db("schemes")
  .insert(scheme, 'id')
  .then(ids => {
    const [id] = ids;
    return findById(id);
  })
}

function update(changes, id) {
  return db("schemes")
  .where({id})
  .update(changes)
  .then(scheme => {
    return scheme
  })
}

function remove(id) {
  return db("schemes")
  .where({id})
  .delete()
  .then(scheme => {
    return null
  })
}
