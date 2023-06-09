module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define(
      'PostCategory',
      {
        postId: { type: DataTypes.INTEGER, primaryKey: true, foreignKey: true },
        categoryId: { type: DataTypes.INTEGER, foreignKey: true },
      },
      { 
        timestamps: false,
        underscored: true,
        tableName: 'posts_categories',
      },
    );
  
    PostCategory.associate = (models) => {
        models.BlogPost.belongsToMany(
          models.Category,
          {
            foreignKey: 'categoryId',
            as: 'categories',
            through: PostCategory,
            otherKey: 'postId'
          },
        );
        models.Category.belongsToMany(
          models.BlogPost,
          {
            foreignKey: 'postId',
            as: 'blog_posts',
            through: PostCategory,
            otherKey: 'categoryId',
          },
        );
      }
    return PostCategory;
  };