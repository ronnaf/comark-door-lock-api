// rfids-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const rfids = new Schema({
    rfid: { type: String, required: true },
    owner: { type: String, required: true },
    phoneNumber: { type: String, required: true }
  }, {
    timestamps: true
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://github.com/Automattic/mongoose/issues/1251
  try {
    return mongooseClient.model('rfids');
  } catch (e) {
    return mongooseClient.model('rfids', rfids);
  }
};
