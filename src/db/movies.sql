CREATE TABLE IF NOT EXISTS movies (
  id                SERIAL         PRIMARY KEY,
  title             VARCHAR(255)   NOT NULL,
  director          VARCHAR(255)   NOT NULL,
  release_year      INT            NOT NULL,
  duration_mins     INTEGER        NOT NULL
);
INSERT INTO
    movies (title, director, release_year, duration_mins)
VALUES
    ('Toy Story', 'John Lasseter', 1995, 81),
    ('A Bug''s Life', 'John Lasseter', 1998, 95),
    ('Toy Story 2', 'John Lasseter', 1999, 93),
    ('Monsters, Inc.', 'Pete Docter', 2001, 92),
    ('Finding Nemo', 'Andrew Stanton', 2003, 107),
    ('The Incredibles', 'Brad Bird', 2004, 116),
    ('Cars', 'John Lasseter', 2006, 117),
    ('Ratatouille', 'Brad Bird', 2007, 115),
    ('WALL-E', 'Andrew Stanton', 2008, 104),
    ('Up', 'Pete Docter', 2009, 101),
    ('Toy Story 3', 'Lee Unkrich', 2010, 103),
    ('Cars 2', 'John Lasseter', 2011, 120),
    ('Brave', 'Brenda Chapman', 2012, 102),
    ('Monsters University', 'Dan Scanlon', 2013, 110);
