const sasi = require('./');

sasi('for your information', (err, resp) => {
  if (err) {
    console.log(err)
  }

  console.log(resp)
})

sasi('be right back')
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    console.log(error)
  })

sasi('talk to you later')
  .then(console.log)
  .catch(console.error)