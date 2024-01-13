import sharp from 'sharp'
import fs from 'fs'

// Constrain the image dimensions at public/me.jp to no more than 2048px wide and tall.
const profile = sharp('public/pic.jpg')
const profileFileSize = fs.statSync('public/pic.jpg').size
const profileFileSizeInKb = profileFileSize / 1024
profile.metadata().then((metadata) => {
  console.log('before', {
    fileSize: (profileFileSize / 1024).toFixed(2) + ' kb',
    width: metadata.width,
    height: metadata.height,
    density: metadata.density,
    resolutionUnit: metadata.resolutionUnit,
  })
  profile
    .resize(2048, 2048, { fit: 'inside' })
    .withMetadata({
      density: 72,
      resolutionUnit: 'pixelsperinch',
    })
    .jpeg({
      quality: 95,
      mozjpeg: true,
    })
    .toFile('public/profile.jpg')
    .then((result) => {
      console.log('after', {
        fileSize: (result.size / 1024).toFixed(2) + ' kb',
        width: result.width,
        height: result.height,
        density: 72,
        resolutionUnit: 'pixelsperinch',
      })
    })
})
