const addPartyItem = function (values, pool) {
  return pool.query(`
    INSERT INTO items (index, name)
    VALUES ($1, $2)
    RETURNING *;
  `, values)
    .then((response) => {
      if (response.rows[0].length === 0) {
        return null;
      } else {
        return response.rows;
      }
    })
    .catch((err) => {
      console.log(err.message);
    });
};
exports.addPartyItem = addPartyItem;