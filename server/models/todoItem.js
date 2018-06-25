module.exports = (sequelize, DataTypes) => {
  const TodoItem = sequelize.define("TodoItem", {
    content: {
      type: DataTypes.STRING,
      required: true,
      allowNull: false
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

  TodoItem.associate = (models) => {
    TodoItem.belongsTo(models.Todo, {
      foreignKey: "todoId",
      onDelete: "CASCADE"
    })
  };

  return TodoItem;
};
