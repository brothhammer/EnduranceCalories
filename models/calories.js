module.exports = function(sequelize,DataTypes) {
	var Calorie = sequelize.define("Calorie", {
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

	Calorie.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Calorie.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

	return Calorie;
};