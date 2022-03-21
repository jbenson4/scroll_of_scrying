const editPlayer = function(player, pool) {
  const values = [player.name, player.race, player.dnd_class, player.stats, player.level, player.id];

  return pool.query(`
    UPDATE players
    SET name = $1, race = $2, dnd_class = $3, stats = $4, level = $5
    WHERE players.id = $6;
    `, values)
    .then(console.log(`Successfully updated Player ${player.id}`))
    .catch((err) => {
      console.log(err.message);
    });
};
exports.editPlayer = editPlayer;