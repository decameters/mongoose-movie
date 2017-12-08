use movies;

db.createCollection('movies');

db.movies.insert({
    title: "Ghostbusters" ,
    posterUrl: "images/ghostbusters.jpg" ,
    description: "Three unemployed parapsychology professors set up shop as a unique ghost removal service."
    });
    
db.movies.insert({
    title: "Back To The Future" ,
    posterUrl: "images/backtothefuture.jpg" ,
    description: "A young man is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his friend, Dr. Emmett Brown, and must make sure his high-school-age parents unite in order to save his own existence."
    });
    
db.movies.insert({
    title: "E.T." ,
    posterUrl: "images/et.jpg" ,
    description: "A troubled child summons the courage to help a friendly alien escape Earth and return to his home world."
    });
    
db.movies.insert({
    title: "The Hobbit" ,
    posterUrl: "images/hobbit" ,
    description: "A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home, and the gold within it from the dragon Smaug"
    });
    
db.movies.insert({
    title: "Finding Dory" ,
    posterUrl: "images/finding_dory.jpg" ,
    description: "The friendly but forgetful blue tang fish, Dory, begins a search for her long-lost parents, and everyone learns a few things about the real meaning of family along the way."
    });

db.movies.insert({
    title: "Home Alone" ,
    posterUrl: "images/home_alone" ,
    description: "An eight-year-old troublemaker must protect his house from a pair of burglars when he is accidentally left home alone by his family during Christmas vacation."
    });   