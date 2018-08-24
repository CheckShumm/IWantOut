const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  location: {
    type: String
  },
  profession: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now()
  },

  housing: {
    type: String,
    required: true
  },
  costOfLiving: {
    type: String,
    required: true
  },
  education: {
    type: String,
    required: true
  },
  economy: {
    type: String,
    required: true
  },
  culture: {
    type: String,
    required: true
  },
  career: {
    type: String,
    required: true
  },

  city: [
    {
      name: {
        type: String,
        required: true
      },
      slug: {
        type: String,
        required: true
      },
      ua_id: {
        type: String,
        required: true
      }
    }
  ]
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
