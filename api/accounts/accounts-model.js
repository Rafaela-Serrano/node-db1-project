const db = require ('../../data/db-config');

const getAll = () => {
 return db('accounts')
}

const getById = id => {
 return db('accounts').where('id',id).first()
}

async function create ( account) {
return db('accounts').insert(account) 
}

async function updateById (id, account) {
 await db('accounts').where('id',id).update(account)
 return getById(id)
}

const deleteById = id => {
 return db('accounts').where('id',id).del() 
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
