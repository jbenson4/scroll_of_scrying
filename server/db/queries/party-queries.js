// gets all party data
const getPartyData = function (pool) {
  return pool
    .query(
      `
  SELECT *
  FROM players;
  `
    )
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
exports.getPartyData = getPartyData;

const getPartyItems = function (pool) {
  return pool
    .query(
      `
      SELECT *
      FROM items;
      `
    )
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
exports.getPartyItems = getPartyItems;

const destroyItem = function (id, pool) {
  return pool
    .query(
      `
      DELETE FROM items
      WHERE id = $1;
      `
    , [id])
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
exports.destroyItem = destroyItem;