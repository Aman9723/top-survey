const mongoose = require("mongoose");

const responseSchema = new mongoose.Schema(
	{
		survey: {
			type: {
				type: mongoose.Schema.Types.ObjectId,
				ref: "surveys",
				required: true,
			},
		},
		user: { type: String, requried: true },
		score: { type: Number },
	},
	{
		versionKey: false,
		timestamps: true,
	}
);

const Responses = mongoose.model("responses", responseSchema);

module.exports = Responses;
