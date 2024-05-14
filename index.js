
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

/* 
    Incase you are using mongodb atlas database uncomment below line
    and replace "mongoAtlasUri" with your mongodb atlas uri.
*/
// mongoose.connect( mongoAtlasUri, {useNewUrlParser: true, useUnifiedTopology: true})

app.get('/', (req, res) => {
  res.send('Hello World!')
  const poem = `
        In Toronto's bustling streets, so full of cheer,
        Lives a lass named Lauren, oh so dear.
        With style and grace, she roams the town,
        But one thing's missing, we must all renown.

        No pup to walk, no wagging tail in sight,
        Oh Lauren, dear, are you afraid of the midnight bite?
        Your heart's as big as the CN Tower's height,
        But where's your furry friend, to share your light?

        While others cuddle with their canine mate,
        You navigate life, dogless but still great.
        Perhaps in time, a fluffy friend you'll find,
        Until then, let's roast, in a playful kind.

        To Lauren from Toronto, with love and jest,
        Your dogless days, we'll happily digest.
        But next time you visit, bring along a pup,
        For in our hearts, they always light us up!
    `;

    res.send(`<pre>${poem}</pre>`);
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})