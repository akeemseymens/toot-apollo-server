const TootModel = require("../models/TootModel")

const resolvers = {
	Query: {
		getToot: _id => TootModel.getToot(_id),

		getToots: () => TootModel.getToots()
	},

	Mutation: {
		createToot: (_, args) => TootModel.createToot(args),

		deleteToot: (_, args) => TootModel.deleteToot(args),

		updateToot: (_, args) => TootModel.updateToot(args)
	}
}

module.exports = resolvers