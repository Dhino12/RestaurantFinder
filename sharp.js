// eslint-disable-next-line import/no-extraneous-dependencies
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

function pathUrl(urlTarget, urlDestination) {
    const targetLocation = path.resolve(__dirname, urlTarget);
    const destinationLocation = path.resolve(__dirname, urlDestination);

    if (!fs.existsSync(destinationLocation)) {
        fs.mkdirSync(destinationLocation, { recursive: true });
    }
    return { targetLocation, destinationLocation };
}

function imageResponsive(target, destination, format) {
    console.log(target);
    fs.readdirSync(target)
    .forEach((image) => {
        sharp(`${target}/${image}`)
            .resize(800)
            .toFile(path.resolve(
                __dirname,
                `${destination}/${image.split('.').slice(0, -1).join('.')}-large.${format}`,
            ));

        sharp(`${target}/${image}`)
            .resize(480)
            .toFile(path.resolve(
                __dirname,
                `${destination}/${image.split('.').slice(0, -1).join('.')}-small.${format}`,
            ));
    });
}

function main() {
    let pathImageRes = pathUrl('src/public/images/heros', 'dist/public/images/heros');
    imageResponsive(pathImageRes.targetLocation, pathImageRes.destinationLocation, 'png');

    pathImageRes = pathUrl('src/public/images/logo', 'dist/public/images/logo');
    imageResponsive(pathImageRes.targetLocation, pathImageRes.destinationLocation, 'png');

    pathImageRes = pathUrl('src/public/images/logo', 'dist/public/images/logo');
    imageResponsive(pathImageRes.targetLocation, pathImageRes.destinationLocation, 'webp');

    pathImageRes = pathUrl('src/public/images/heros', 'dist/public/images/heros');
    imageResponsive(pathImageRes.targetLocation, pathImageRes.destinationLocation, 'webp');
}

main();
