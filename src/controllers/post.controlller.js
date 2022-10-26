const postService = require('../service/post.service');

const getPost = async (req, res) => {
    const posts = await postService.getAll();
    return res.status(200).json(posts);
};

module.exports = {
    getPost,
};