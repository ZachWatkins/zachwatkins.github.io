import sharp from 'sharp';
import fs from 'fs';

const THUMBNAIL = 150;
const FULL = 1500;

/**
 * A list of image processing task parameters for the processImage function which can run in any order.
 */
const jobs = [
  {
    src: 'assets/century tree_crystal littrell_138.jpg',
    dest: 'public/img/profile/2016-century-tree.jpg',
    thumbnail: {
      width: THUMBNAIL,
      height: THUMBNAIL,
      fit: 'cover',
      position: 'top',
    },
    extract: {
      left: 1280,
      top: 600,
      width: Math.round((1900 / 16) * 9),
      height: 1900,
    },
    resize: {
      width: FULL,
      height: FULL,
      fit: 'inside',
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
      width: THUMBNAIL,
      height: THUMBNAIL,
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
      height: FULL,
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
      width: THUMBNAIL,
      height: THUMBNAIL,
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
      width: THUMBNAIL,
      height: THUMBNAIL,
      fit: 'cover',
      position: 'top',
    },
  },
  {
    src: 'assets/53318172658_5d8a4ded99_o.jpg',
    dest: 'public/img/profile/53318172658_3d0e313ea4_q.jpg',
    extract: {
      left: 2000,
      top: 1330,
      width: 1100,
      height: 1100,
    },
    resize: {
      width: THUMBNAIL,
      height: THUMBNAIL,
      fit: 'cover',
      position: 'top',
    },
  },
  {
    src: 'assets/20210719_074933.jpg',
    dest: 'public/img/profile/20210719_074933.jpg',
    resize: {
      width: FULL,
      height: FULL,
      fit: 'inside',
    },
    thumbnail: {
      width: 250,
      height: 250,
      fit: 'inside',
    },
  },
  {
    src: 'assets/20231015_085123.jpg',
    dest: 'public/img/profile/20231015_085123.jpg',
    extract: {
      left: 0,
      top: 200,
      width: 2207,
      height: 2700,
    },
    thumbnail: {
      width: THUMBNAIL,
      height: THUMBNAIL,
      fit: 'cover',
    },
  },
  {
    src: 'assets/20221122_081808.jpg',
    dest: 'public/img/profile/20221122_081808.jpg',
    extract: {
      left: 0,
      top: 1300,
      width: 2500,
      height: 2400,
    },
    resize: {
      width: FULL,
      height: FULL,
      fit: 'inside',
    },
    thumbnail: {
      width: THUMBNAIL,
      height: THUMBNAIL,
      fit: 'cover',
    },
  },
  {
    src: 'assets/20221122_081808.jpg',
    dest: 'public/img/profile/20221122_081808-home.jpg',
    extract: {
      left: 600,
      top: 1600,
      width: 1500,
      height: 1500,
    },
    resize: {
      width: 300,
      height: 300,
      fit: 'cover',
    },
  },
];

for (const job of jobs) {
  cleanImage(job.src).then(() => processImage(job));
}

async function cleanImage(src) {
  return sharp(src)
    .metadata()
    .then((metadata) => {
      let needsCleaning = false;
      if (metadata.exif) needsCleaning = true;
      if (metadata.icc) needsCleaning = true;
      if (metadata.xmp) needsCleaning = true;
      if (metadata.iptc) needsCleaning = true;
      if (!needsCleaning) return;

      // Proceed with cleaning the source image and overwriting it.
      const fileType = src.split('.').pop();
      const tempFilename = src.replace(`.${fileType}`, `-old.${fileType}`);
      fs.renameSync(src, tempFilename);
      return sharp(tempFilename)
        .toFile(src)
        .then(() => {
          fs.unlinkSync(tempFilename);
        });
    });
}

/**
 * Process an image from src to dest within a given width and height.
 * @param {object} options - The options object.
 * @param {string} options.src - The source image path.
 * @param {string} options.dest - The destination image path.
 * @param {import('sharp').ResizeOptions} [options.resize] - The resize object.*
 * @param {import('sharp').ResizeOptions} [options.thumbnail] - Resize options for the thumbnail version of the image.
 * @param {import('sharp').Region} [options.extract] - The extract region.
 * @param {number} [options.rotate] - The rotation angle in degrees.
 * @returns {Promise} - The promise of the image processing.
 */
async function processImage({ src, dest, thumbnail, resize, extract, rotate }) {
  const srcSharp = sharp(src);
  return srcSharp.metadata().then((metadata) => {
    console.log('before', {
      fileSize: (fs.statSync(src).size / 1024).toFixed(2) + ' kb',
      width: metadata.width,
      height: metadata.height,
      density: metadata.density,
      resolutionUnit: metadata.resolutionUnit,
    });

    if (extract) {
      srcSharp.extract(extract);
    }

    if (rotate) {
      srcSharp.rotate(rotate);
    }

    if (resize) {
      srcSharp.resize(resize);
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
        });
        if (thumbnail) {
          return sharp(dest)
            .resize(thumbnail)
            .jpeg({
              quality: 95,
              mozjpeg: true,
            })
            .toFile(dest.replace('.jpg', '-thumbnail.jpg'));
        }
      });
  });
}
