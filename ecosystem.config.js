module.exports = {
  deploy: {
    production: {
      user: "root",
      host: ["8.134.154.68"],
      ref: "origin/main",
      repo: "git@github.com:648253615/vue-node-mall.git",
      ssh_options: "StrictHostKeyChecking=no",
      path: "/home/vue-node-mall",
    }
  }
}
// pm2 deploy ecosystem.config.js production setup