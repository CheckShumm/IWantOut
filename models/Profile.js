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
