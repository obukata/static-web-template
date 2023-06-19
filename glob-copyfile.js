import { glob, globSync, globStream, globStreamSync, Glob } from 'glob'
import cpx from 'cpx'

const destinationDirectory = 'dist'

const matchPattern = globSync('src/**/*', {
  ignore: [
    '**/_*',
    '**/_*/**'
  ]
})

matchPattern.forEach(path => {
  const destination = path.replace('src', destinationDirectory)
  console.log(destination)
  cpx.copySync(path, destination)
  console.log(`Copied ${path} to ${destination}`)
})
// console.log(matchPattern)


// glob(sourcePattern, {}, (err, files) => {
//   if (err) {
//     console.error('Error in glob:', err)
//     process.exit(1)
//   }

//   files.forEach((file) => {
//     const destination = file.replace('src', destinationDirectory)
//     cpx.copySync(file, destination)
//     console.log(`Copied ${file} to ${destination}`)
//   })
// })
