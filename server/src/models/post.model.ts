import { Model, DataTypes, Sequelize } from "sequelize";
import { uuid } from "../utils/uuid.util";

export class PostModel extends Model {
	public id!: string;
	public category!: string;
	public title!: string;
	public description!: string;
	public author!: string;
	public date!: string;
	public content!: string;
	public tags!: string[];
}

export function initPostModel(sequelize: Sequelize): typeof PostModel {
	PostModel.init(
		{
			id: {
				type: DataTypes.STRING,
				defaultValue: () => uuid(6),
				primaryKey: true,
			},
			category: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			title: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			description: {
				type: DataTypes.TEXT,
				allowNull: true,
			},
			author: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			date: {
				type: DataTypes.DATE,
				allowNull: false,
				defaultValue: DataTypes.NOW,
			},
			content: {
				type: DataTypes.TEXT,
				allowNull: false,
			},
			tags: {
                type: DataTypes.TEXT,
                allowNull: true,
                get() {
                    const rawValue = this.getDataValue('tags');
                    return rawValue ? JSON.parse(rawValue) : [];
                },
                set(value: string[]) {
                    this.setDataValue('tags', JSON.stringify(value));
                },
            },
		},
		{
			tableName: "posts",
			sequelize,
			timestamps: true,
		}
	);
	return PostModel;
}
