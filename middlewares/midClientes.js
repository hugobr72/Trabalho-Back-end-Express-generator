const connection = require("../configs/Db")
const getAllClientes = async (query) => {
  const res = await connection.promise().query(
    query
  ).then(([rows, fields]) => {
    return rows
  }).catch();

  connection.end()
  return res
}

const insertClientes = async (query) => {
  const resultPost = await connection.promise().query(
    query
  ).then(([rows, fields]) => {
    return rows.affectedRows > 0 ? { msg: "Cliente cadastrado com sucesso" } : { error: "Cliente não foi cadastrado" }
  }).catch();

  connection.end()
  return resultPost
}
const updateClientes = async (query) => {
  const resultPut = await connection.promise().query(
    query
  ).then(([rows, fields]) => {
    return rows.affectedRows > 0 ? { msg: "Cliente atualizado com sucesso" } : { error: "Erro ao atualizar Cliente" }
  }).catch();

  connection.end()

  return resultPut
}
const deleteClientes = async (query) => {
  const resultDelete = await connection.promise().query(
    query
  ).then(([rows, fields]) => {
    return rows.affectedRows > 0 ? { msg: "Cliente deletado com sucesso" } : { error: "Cliente não encontrado!" }
  }).catch();
  connection.end()
  return resultDelete
}

module.exports = {
  getAllClientes,
  insertClientes,
  updateClientes,
  deleteClientes
}