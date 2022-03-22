// removes a player condition
// const removeCondition = function (id, index, pool) {
//   return pool.query(
//     `
//     DELETE FROM conditions
//     WHERE player_id = $1
//     AND index = $2;
//     `
//   , [id, index])
//   .then((result) => {
//     return result.rows[0]
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });
// };

// destroys a player instance
const destroyPlayer = function (id, pool) {
  return pool
    .query(
      `
      DELETE FROM players
      WHERE id = $1;
      `
    , [id])
    .then((result) => {
      return result.rows[0]
    })
    .catch((err) => {
      console.log(err.message);
    });
};
exports.destroyPlayer = destroyPlayer;