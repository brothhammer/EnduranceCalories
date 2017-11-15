module.exports = function(sequelize,DataTypes) {
	var User = sequelize.define("User", {
		name: DataTypes.STRING
	},
	{
	age: DataTypes.INTEGER
	},
	{
	height: DataTypes.DECIMAL
	},
	{
	weight: DataTypes.DECIMAL
	},
	{
	sex: DataTypes.STRING
	});

	return User;
};