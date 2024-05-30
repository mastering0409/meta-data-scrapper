const mql  = require('@microlink/mql');
mql(
    'https://www.youtube.com/watch?v=DywSzzbC9J8',
    { meta: true, video: true }
  ).then(data => {
    console.log(data.data);
  }).catch()
  