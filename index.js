const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/ping', (req, res) => res.send('Ping Successfull 😄'))
app.listen(PORT, () =>
  console.log(`[⚡️ server]: Server running on port ${PORT} | Environment: ${process.env.NODE_ENV}`)
)
