const fs = require('fs')
const rimraf = require('rimraf')
const download = require('image-downloader')

// sample image
const images = [
  'https://www.reece.com.au/assets/products/1400200/dwv-pvc-pipe-100mm-x-6mtr-sn6-swj-1400200-hero-2.jpg',
  'https://www.reece.com.au/assets/products/192057/_resampled/ScaleWidthWzI4MF0/Pull-Out-Sink-Mixer-192057-hero-1.jpg',
  'https://www.reece.com.au/assets/products/810000/9507161/roca-inspira-370-soft-vessel-no-taphole-9507161-hero-1.jpg',
  'https://www.reece.com.au/assets/products/203000/109143/_resampled/ScaleWidthWzI4MF0/avg-avg-quickie-kit-3-qik15rcv-109143-hero-1.jpg',
  'https://www.reece.com.au/assets/products/801020/kembla-hd-cu-12-15x091x-6m-pln-b-801020-hero-1.jpg',
  'https://www.reece.com.au/assets/products/1408502/_resampled/ScaleWidthWzI4MF0/dwv-4-way-riser-male-female-100mm-x-50mm-x-50mm-x-40mm-x-40mm-1408502-hero-1.jpg',
  'https://www.reece.com.au/assets/products/903200/1M-STORM-DRAIN-CW-BLACK-PLASTIC-GRATE-903200-hero-1.jpg',
  'https://www.reece.com.au/assets/products/1403120/_resampled/ScaleWidthWzI4MF0/DWV-BEND-50-X-85-DEG-PLAIN-1403120-hero-1.jpg',
  'https://www.reece.com.au/assets/products/1405130/DWV-PAN-COLLAR-100MM-MF-1405130-hero-1.jpg',
  'https://www.reece.com.au/assets/products/1405055/_resampled/ScaleWidthWzI4MF0/DWV-VENT-COWL-50MM-1405055-hero-1.jpg',
  'https://www.reece.com.au/assets/products/1408729/finishing-collar-spigot-flat-grate-100mm-1408729-hero-1.jpg',
]

const dest = '/dest'
// remove destination directory if it exists
// then recreate it for re-population
if (fs.existsSync(`.${dest}`)) {
  rimraf.sync(`.${dest}`)
}
fs.mkdirSync(`.${dest}`)

// map over the sample image urls, download each file to disk
images.map((image) => {
  const options = {
    url: image,
    dest: __dirname + `${dest}`
  }

  download.image(options)
    .then(({ filename, image }) => {
      console.log('File saved to', filename)
    })
    .catch((err) => {
      console.error('ERROR:', err)
    })
})

// now, `open dest` to visually confirm images are being served correctly
