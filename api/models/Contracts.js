// Imports
import { DataTypes } from 'sequelize'
import sequelize from '../config/database.js'

// Contracts Model
const Contracts = sequelize.define('Contracts', {
    id_contract: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    artist_name: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    user_name: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    cache: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    event_adress: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    artist_id: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'Contract',
    modelName: 'Contract',
    createdAt: true,
    updatedAt: true
}
);

export default Contracts
