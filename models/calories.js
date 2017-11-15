module.exports = function(sequelize,DataTypes) {
	var Calories = sequelize.define("Calories", {
		activity: DataTypes.STRING
	},
	{
	speed: DataTypes.DECIMAL
	},
	{
	units: DataTypes.STRING
	},
	{
	caloriesat100: DataTypes.DECIMAL
	},
	{
	interval: DataTypes.DECIMAL
	});

	return Calories;
};