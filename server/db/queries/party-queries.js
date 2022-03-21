// gets all party data
const getPartyData = function(pool) {
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