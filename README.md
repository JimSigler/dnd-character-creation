# Simple D&D character creator backend

This is a simple Dungeons and Dragons character creator meant to be used as a
backend service to allow quick and simple random character creation.  When run,
the service runs on port 3004.

**To run using gulp:**
```
npm install
npm install gulp -g
npm install nodemon -g

gulp start
```

**To run without gulp:**
```
npm install

node index.js
```

**To run in dev mode:**
```
nodemon index.js
```

**To run tests:**
```
npm test
```

**To get code coverage statistics:**
```
jest --coverage
```

**To run eslint:**
```
gulp lint
```

**To create the docker iimage:**
```
docker build . -t dnd-character-creation
```

**To run docker image after build**
```
docker run -p <external port>:3004 -d dnd-character-creation
```

You should then be able to access the API calls from 
```localhost:<external port>/character/new```
