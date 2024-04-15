module.exports = {
  apps: [
    {
      name: "pfil",
      script: "npm",
      args: "start",
      cwd: "./",
      watch: true,
      env: {
        NODE_ENV: "production",
      },
    },
  ],
}
