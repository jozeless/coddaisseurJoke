const express = require('express')

const app = express()

const page = ` <!DOCTYPE html>
<html>
<body>
<title>Jose Luis Rodriguez</title>
<h1>Why do Java Programmers wear glasses?</h1>
<p>Because they don't C#.</p>

</body>
</html> `

app.get(
    '/',
    (request, response) => {
        response.send(page)
    }
    )


    const port = process.env.PORT || 3000
    app.listen(
port, 
() => {
    console.log(`listening on port :${port}`)
}
    )