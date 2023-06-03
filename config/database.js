

const mongoose = require('mongoose');

exports.connect = (mongodbUrl) => {
  mongoose
    .connect(mongodbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('DB CONNECTED SUCCESSFULLY');
    })
    .catch((err) => {
      console.log('DB CONNECTION FAILED');
      console.error(err);
      process.exit(1);
    });
};
