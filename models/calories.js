module.exports = function(sequelize,DataTypes) {
	var Calorie = sequelize.define("Calorie",
	{
		activity: {
			type: DataTypes.STRING,
			allowNull: false,
			isIn: [['swimming', 'running', 'cycling', 'aerobic', 'lifting']]
		},
			speed: {
				type: DataTypes.DECIMAL,
				allowNull: false,
				isIn: [[5, 7, 9]]
			},

			units: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			caloriesat100: {
				type: DataTypes.DECIMAL,
				allowNull: false
			},
			interval: {
				type: DataTypes.DECIMAL,
				allowNull: false
			}

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