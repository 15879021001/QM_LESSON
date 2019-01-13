module.exports = (GROUP_NAME, options) => ({
  method: 'GET',
  path: `/${GROUP_NAME}`,
  handler: async (request, reply) => {
    const { limit, page } = request.query;
    const offset = (page - 1) * limit;
    // reply(limit, page, offset);
    const { rows: results, count: totalCount } = await options.models.blogs.findAndCountAll({
      limit,
      offset
    });
    reply({ results, totalCount });
  },
  config: {
    tags: ['api', GROUP_NAME],
    description: '获取文章列表',
    validate: {
      query: {
        ...options.paginationDefine
      }
    }
  }
})
