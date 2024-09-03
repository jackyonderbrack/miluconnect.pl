import { Model, DataTypes, Sequelize } from 'sequelize';

export class User extends Model {
    public id!: number;
    public name!: string;
    public email!: string;
    public password!: string;
    public role!: string;
}

export function initUserModel(sequelize: Sequelize): typeof User {
    User.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        logo: {
            type: DataTypes.STRING,
            allowNull: true
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        country: {
            type: DataTypes.STRING,
            allowNull: true
        },
    }, {
        tableName: 'users',
        sequelize,
        timestamps: false
    });
    return User
}