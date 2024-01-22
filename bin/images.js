import sharp from 'sharp'
import fs from 'fs'

/**
 * A list of image processing task parameters for the processImage function which can run in any order.
 */
const jobs = [
  {
    src: 'assets/century tree_crystal littrell_138.jpg',
    dest: 'public/img/profile/2016-century-tree.jpg',
    thumbnail: {
      width: 150,
      height: 150,
      fit: 'cover',
      position: 'top',
    },
    extract: {
      left: 1280,
      top: 600,
      width: Math.round((1900 / 16) * 9),
      height: 1900,
    },
  },
  {
    src: 'assets/century tree_crystal littrell_137.jpg',
    dest: 'public/img/profile/2016-century-tree-sitting-thumbnail.jpg',
    extract: {
      left: 1760,
      top: 1150,
      width: 320,
      height: 320,
    },
    resize: {
      width: 150,
      height: 150,
      fit: 'cover',
      position: 'top',
    },
  },
  {
    src: 'assets/century tree_crystal littrell_137.jpg',
    dest: 'public/img/profile/2016-century-tree-sitting.jpg',
    extract: {
      left: 1150,
      top: 1000,
      width: 1400,
      height: 1500,
    },
  },
  {
    src: 'public/img/profile/53316525957_bba8a3c644_c.jpg',
    dest: 'public/img/profile/53316525957_bba8a3c644_q.jpg',
    extract: {
      left: 320,
      top: 25,
      width: 320,
      height: 320,
    },
    resize: {
      width: 150,
      height: 150,
      fit: 'cover',
      position: 'top',
    },
  },
  {
    src: 'public/img/profile/53316501642_2802ac22b9_c.jpg',
    dest: 'public/img/profile/53316501642_2802ac22b9_q.jpg',
    extract: {
      left: 280,
      top: 110,
      width: 288,
      height: 288,
    },
    resize: {
      width: 150,
      height: 150,
      fit: 'cover',
      position: 'top',
    },
  },
  {
    src: 'public/img/profile/53318172658_3d0e313ea4_c.jpg',
    dest: 'public/img/profile/53318172658_3d0e313ea4_q.jpg',
    extract: {
      left: 350,
      top: 230,
      width: 200,
      height: 200,
    },
    resize: {
      width: 150,
      height: 150,
      fit: 'cover',
      position: 'top',
    },
  },
]

for (const job of jobs) {
  processImage(job)
}

/**
 * Process an image from src to dest within a given width and height.
 * @param {object} options - The options object.
 * @param {string} options.src - The source image path.
 * @param {string} options.dest - The destination image path.
 * @param {import('sharp').ResizeOptions} [options.resize] - The resize object.*
 * @param {import('sharp').ResizeOptions} [options.thumbnail] - Resize options for the thumbnail version of the image.
 * @param {import('sharp').Region} [options.extract] - The extract region.
 * @returns {Promise} - The promise of the image processing.
 */
function processImage({ src, dest, thumbnail, resize, extract }) {
  const srcSharp = sharp(src)
  const srcFileSize = fs.statSync(src).size
  return srcSharp.metadata().then((metadata) => {
    console.log('before', {
      fileSize: (srcFileSize / 1024).toFixed(2) + ' kb',
      width: metadata.width,
      height: metadata.height,
      density: metadata.density,
      resolutionUnit: metadata.resolutionUnit,
    })

    if (extract) {
      srcSharp.extract(extract)
    }

    if (resize) {
      srcSharp.resize(resize)
    }

    return srcSharp
      .withMetadata({
        density: 72,
        resolutionUnit: 'pixelsperinch',
      })
      .jpeg({
        quality: 95,
        mozjpeg: true,
      })
      .toFile(dest)
      .then((result) => {
        console.log('after', {
          fileSize: (result.size / 1024).toFixed(2) + ' kb',
          width: result.width,
          height: result.height,
          density: 72,
          resolutionUnit: 'pixelsperinch',
        })
        if (thumbnail) {
          return sharp(dest)
            .resize(thumbnail)
            .withMetadata({
              density: 72,
              resolutionUnit: 'pixelsperinch',
            })
            .jpeg({
              quality: 95,
              mozjpeg: true,
            })
            .toFile(dest.replace('.jpg', '-thumbnail.jpg'))
        }
      })
  })
}
