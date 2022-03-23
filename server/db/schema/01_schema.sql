-- Drop Tables if existant
DROP TABLE IF EXISTS players CASCADE;
DROP TABLE IF EXISTS items CASCADE;
DROP TABLE IF EXISTS conditions CASCADE;
DROP TABLE IF EXISTS players_conditions CASCADE;

-- Recreate Tables
----------------------------------------

-- Recreate players Table
CREATE TABLE players (
  id SERIAL PRIMARY KEY NOT NULL,

  name VARCHAR(255) NOT NULL,
  race TEXT,
  dnd_class TEXT,
  stats JSON,
  level INTEGER
);

-- Recreate items Table
CREATE TABLE items (
  id SERIAL PRIMARY KEY NOT NULL,

  index TEXT,
  name TEXT,
  description TEXT
);

-- Recreate conditions Table
CREATE TABLE conditions (
  id SERIAL PRIMARY KEY NOT NULL,

  index TEXT,
  name TEXT,
  description TEXT
);

-- Recreate players_conditions Join Table
CREATE TABLE players_conditions (
  id SERIAL PRIMARY KEY NOT NULL,
  player_id INTEGER REFERENCES players(id) ON DELETE CASCADE,
  condition_id INTEGER REFERENCES conditions(id) ON DELETE CASCADE
);