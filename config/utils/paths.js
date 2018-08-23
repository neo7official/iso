const path = require('path');
const src_path = path.resolve('src/');
const client_src_path = path.resolve(src_path, 'client/');
const server_src_path = path.resolve(src_path, 'server/');

const dist_path = path.resolve('dist/');
const client_dist_path = path.resolve(dist_path, 'client/');
const server_dist_path = path.resolve(dist_path, 'server/');

const allPaths = {path:path,src:{root:src_path, client:client_src_path, server:server_src_path}, dist:{root:dist_path, client:client_dist_path, server:server_dist_path}};

module.exports = allPaths;