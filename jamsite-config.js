module.exports = {
  scripts: {
    build: {
      rollup: [
        'npx rollup -c'
      ]
    },
    'start-dev': {
      rollup: [
        'npx rollup -cw'
      ]
    }
  }
}
