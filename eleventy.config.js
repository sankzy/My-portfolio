import fs from 'node:fs';
import path from 'node:path';

const ICON_DIR = 'node_modules/@fortawesome/fontawesome-free/svgs';

export default function (eleventyConfig) {
    // Files copied to the build output as they are.
    eleventyConfig.addPassthroughCopy('src/styles.css');
    eleventyConfig.addPassthroughCopy('src/images');
    eleventyConfig.addPassthroughCopy('src/favicon.svg');
    eleventyConfig.addPassthroughCopy('src/Resume_Sanke_Silas.pdf');

    // {% icon "brands/github" %} inlines a Font Awesome Free SVG at build time,
    // so the site does not need the Font Awesome stylesheet or font files.
    eleventyConfig.addShortcode('icon', (name, extraClass = '') => {
        const svg = fs
            .readFileSync(path.join(ICON_DIR, `${name}.svg`), 'utf8')
            .replace(/<!--[\s\S]*?-->/g, '')
            .trim();
        const classes = `icon ${extraClass}`.trim();
        return svg.replace(
            '<svg ',
            `<svg class="${classes}" aria-hidden="true" focusable="false" `,
        );
    });

    return {
        dir: {
            input: 'src',
            output: '_site',
            includes: '_includes',
            data: '_data',
        },
        templateFormats: ['njk'],
    };
}
