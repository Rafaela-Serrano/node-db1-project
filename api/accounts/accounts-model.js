const db = require ('../../data/db-config');

const getAll = () => {
 return db('accounts')
}

const getById = id => {
 return db('accounts').where('accountsid',id).first()
}

const create = async account => {
const [id] = db('accounts').insert(account);
return getById(id)
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
