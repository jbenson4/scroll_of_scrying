// destroys a party item
const destroyItem = function (index, pool) {
  return pool
    .query(
      `
      DELETE FROM items
      WHERE index = $1;
      `
    , [index])
    .then((result) => {
      return result.rows[0]
    })
    .catch((err) => {
      console.log(err.message);
    });
};
exports.destroyItem = destroyItem;