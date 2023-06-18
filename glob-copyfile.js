import glob from 'glob'
import cpx from 'cpx'

const sourcePattern = 'src/!(_*)/!(_*)'
const destinationDirectory = 'dist'

glob(sourcePattern, {}, (err, files) => {
  if (err) {
    console.error('Error in glob:', err)
    process.exit(1)
  }

  files.forEach((file) => {
    const destination = file.replace('src', destinationDirectory)
    cpx.copySync(file, destination)
    console.log(`Copied ${file} to ${destination}`)
  })
})
