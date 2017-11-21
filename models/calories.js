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
			},

			units: {
				type: DataTypes.STRING,
				allowNull: false,
			},

			duration: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			intensity: {
				type: DataTypes.DECIMAL,
				allowNull: false,
			},
			calculatedCalories: {
				type: DataTypes.INTEGER,
				allowNull: true
			}


		});

	


	// Calorie.associate = function(models) {
 //    // We're saying that a Post should belong to an Author
 //    // A Post can't be created without an Author due to the foreign key constraint
 //    Calorie.belongsTo(models.User, {
 //      foreignKey: {
 //        allowNull: false
 //      }
 //    });
  // };

	return Calorie;
};