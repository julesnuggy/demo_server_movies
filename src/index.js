const app = require('./server.js')
const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
  console.log(`[SERVER] Running on port: ${PORT}`);
});
