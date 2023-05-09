const express = require("express");
const app = express();


app.get("/", (req, res) => {
res.send(`<div>
	<h2>Welcome to GeeksforGeeks</h2>
	<h5>Tutorial on Middleware</h5>
</div>`);
});
app.listen(5000, () => {
console.log("Listening to port ");
});
