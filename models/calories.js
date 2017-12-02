module.exports = function(sequelize, DataTypes) {
    var Calorie = sequelize.define("Calorie", {
        activity: {
            type: DataTypes.STRING,
            allowNull: false,
            isIn: [
                ['swimming', 'running', 'cycling', 'aerobic', 'lifting']
            ],
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
            type: DataTypes.STRING,
            allowNull: false,
            isIn: [
                ['moderate', 'heavy', 'very heavy']
            ],
        },
        calculatedCalories: {
            type: DataTypes.INTEGER,
            allowNull: true,
        }
    }, {
        classMethods: {
            associate: function(models) {
                Calorie.belongsTo(models.User, {
                    onDelete: "cascade",
                    foreignKey: {
                        allowNull: false
                    }
                });
            }
        }
    });

    return Calorie;
};