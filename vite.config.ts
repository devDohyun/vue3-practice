const path = require('path')

function pathResolve(dir: string) {
  return path.resolve(process.cwd(), '.', dir)
}

export default () => {
  return {
    resolve: {
      alias: [
        {
          find: /\/@\//,
          replacement: pathResolve('src') + '/',
        },
      ],
    },
  }
}
