import { Model, DataTypes, Sequelize } from "sequelize";
import { uuid } from "../utils/uuid.util";
import { hashPassword } from "../utils/bcryptjs.util";

export class User extends Model {
	public id!: number;
	public name!: string;
	public email!: string;
	public password!: string;
	public role!: string;
}

export function initUserModel(sequelize: Sequelize): typeof User {
	User.init(
		{
			id: {
				type: DataTypes.STRING,
				defaultValue: () => uuid(6),
				primaryKey: true,
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			role: {
				type: DataTypes.STRING,
				allowNull: false,
				defaultValue: "admin",
			},
		},
		{
			tableName: "users",
			sequelize,
			timestamps: false,
			hooks: {
				beforeCreate: async (user: User) => {
					if (user.password) {
						user.password = await hashPassword(user.password);
					}
				},
				beforeUpdate: async (user: User) => {
					if (user.password && user.changed("password")) {
						user.password = await hashPassword(user.password);
					}
				},
			},
		}
	);
	return User;
}
