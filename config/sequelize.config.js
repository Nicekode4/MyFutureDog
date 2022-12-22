import { Sequelize } from "sequelize";
import dotenv from 'dotenv'

const sequelize = new Sequelize(
    process.env.DBNAME,
    process.env.DBUSER,
    process.env.DBPASSWD,
    {
        host: process.env.DBHOST,
        dialect: 'mysql'
    }
)

export { sequelize }