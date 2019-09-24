// rfid-logs-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const logs = new Schema({
    authorized: { type: Boolean, required: true },
    rfid: { type: String, required: true },
    registeredName: { type: String }
  }, {
    timestamps: true
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://github.com/Automattic/mongoose/issues/1251
  try {
    return mongooseClient.model('rfid-logs');
  } catch (e) {
    return mongooseClient.model('rfid-logs', logs);
  }
};
