module.exports = function(sequelize,DataTypes) {
	var User = sequelize.define("User", {
			name: {
				type: DataTypes.STRING
		},
			age: {
				type: DataTypes.INTEGER
		},
			height: {
				type: DataTypes.DECIMAL
		},
			weight: {
				type: DataTypes.DECIMAL
		},
			gender: {
				type: DataTypes.STRING
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