// Imports
import dotent from 'dotenv'
import sequelize from 'sequelize'

dotent.config()

const database = new sequelize(
    process.env.DB,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        dialect: 'mariadb',
        port: Number(process.env.PORT)
    }
)

export default database