-- this is a comment in SQL (yes, the space is needed!)
-- these statements will drop the tables and re-add them
-- this is akin to reformatting and reinstalling Windows (OS X never needs a reinstall...) ;)
-- never ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever
-- do this on live data!!!!
# DROP TABLE IF EXISTS `like`;
# DROP TABLE IF EXISTS image;
# DROP TABLE IF EXISTS tweet;
# DROP TABLE IF EXISTS `profile`;
DROP TABLE IF EXISTS wowRealms;

CREATE TABLE wowRealms (
  realmId VARCHAR(10),
  realmName  VARCHAR(100)
);

# CREATE TABLE profile (
#     -- this creates the attribute for the primary key
#     -- auto_increment tells mySQL to number them {1, 2, 3, ...}
#     -- not null means the attribute is required!
#                          profileId BINARY(16) NOT NULL,
#                          profileActivationToken CHAR(32),
#                          profileAtHandle VARCHAR(32) NOT NULL UNIQUE,
#                          profileAvatarUrl  VARCHAR(255),
#     -- to make sure duplicate data cannot exist, create a unique index
#                          profileEmail VARCHAR(128) NOT NULL,
#     -- to make something optional, exclude the not null
#                          profileHash CHAR(97) NOT NULL,
#                          profilePhone VARCHAR(32),
#                          UNIQUE(profileEmail),
#                          UNIQUE(profileAtHandle),
#     -- this officiates the primary key for the entity
#                          PRIMARY KEY(profileId)
# );

