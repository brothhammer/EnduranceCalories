module.exports = function(sequelize,DataTypes) {

  type: DataTypes.STRING

	var User = sequelize.define("User",
	{
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			len: [1, 40]
		},

		age: {
			type: DataTypes.INTEGER,
			allowNull: false,
			min: 0,
			max: 100		
		},
		height: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			min: 137.16,
			max: 216.4
		},

		weight: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			min: 99.9
		},

		gender: {
			type: DataTypes.STRING,
			allowNull: false,
			isIn: [['male, female']]
		}
	});


	User.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    User.hasMany(models.Calorie, {
      onDelete: "cascade"
    });
  };

	return User;
};