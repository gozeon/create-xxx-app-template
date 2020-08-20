#!/usr/bin/env node
const outDir = process.argv.slice(2)[0]

if (!outDir) {
  console.error(
    `Please specify an output directory, we can't output to current directory`
  )
  process.exit(1)
}

const { join } = require('path')
const { src, dest } = require('gulp')
const tpl = join(__dirname, 'templates/**/*')
const target = join(process.cwd(), outDir)

const suc = `
    cd ${outDir}
    yarn
    yarn dev
`

src(tpl)
  .pipe(dest(target))
  .on('end', () => console.log(suc))
