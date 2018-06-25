module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define("Todo", {
    "title": {
      "type": DataTypes.STRING,
      required: true,
      allowNull: false
    }});

    Todo.associate = (models) => {
      Todo.hasMany(models.TodoItem, {
        foreignKey: "todoId",
        as: "todoItems"
      })
    };

    return Todo;
};

