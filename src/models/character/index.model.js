import { DataTypes } from "sequelize";

export default (sequelize) => {
  sequelize.define(
    "Character",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      gender: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: ["Female", "Male", "Genderless", "unknown"],
      },
      status: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: ["Alive", "Dead", "unknown"],
      },
      species: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      origin: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
