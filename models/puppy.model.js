import { sequelize } from "../config/sequelize.config.js";
import { DataTypes, Model  } from "sequelize";

class PuppyModel extends Model{}

PuppyModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    images: {
        type: DataTypes.BLOB,
        allowNull: false
    },
    mom_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    dad_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    birthday: {
        type: DataTypes.DATE,
        allowNull: true
    }

}, {
    sequelize,
    modelName: 'puppy',
    freezeTableName: true,
    underscored: true
})

export default PuppyModel