import { transform } from '@svgr/core'
import { readFileSync, writeFileSync, readdirSync } from 'fs'
import { join, basename, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')

const template = (variables, { tpl }) => {
  return tpl`
${variables.imports};

export interface ${variables.componentName}Props extends React.SVGProps<SVGSVGElement> {
  fillColor?: string;
  strokeColor?: string;
}

const ${variables.componentName} = ({
  fillColor = 'var(--coral)',
  strokeColor = 'var(--ink)',
  ...props
}: ${variables.componentName}Props) => (
  ${variables.jsx}
);

${variables.exports};
`
}

const convertSvg = async (svgPath, outputPath) => {
  const svgCode = readFileSync(svgPath, 'utf-8')

  // Replace hardcoded colors with props
  const processedSvg = svgCode
    .replaceAll('fill="#FF5B3C"', 'fill={fillColor}')
    .replaceAll('fill="#2EE6A6"', 'fill={fillColor}')
    .replaceAll('fill="#4B6BFF"', 'fill={fillColor}')
    .replaceAll('fill="#FFD84A"', 'fill={fillColor}')
    .replaceAll('fill="#F6F1E8"', 'fill={fillColor}')
    .replaceAll('stroke="#1C1915"', 'stroke={strokeColor}')
    .replaceAll('stroke="#F3EDE2"', 'stroke={strokeColor}')

  const jsCode = await transform(
    processedSvg,
    {
      typescript: true,
      template,
      plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx', '@svgr/plugin-prettier'],
      svgoConfig: {
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                removeViewBox: false,
              },
            },
          },
        ],
      },
    },
    { componentName: basename(outputPath, '.tsx') }
  )

  writeFileSync(outputPath, jsCode)
  console.log(`✓ Converted ${basename(svgPath)} → ${basename(outputPath)}`)
}

const toPascalCase = (str) => {
  return str
    .split(/[-_]/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')
}

const convertDirectory = async (dir) => {
  const files = readdirSync(join(root, dir)).filter(f => f.endsWith('.svg'))

  for (const file of files) {
    const componentName = toPascalCase(basename(file, '.svg'))
    const svgPath = join(root, dir, file)
    const outputPath = join(root, dir, `${componentName}.tsx`)

    await convertSvg(svgPath, outputPath)
  }
}

// Convert all directories
await convertDirectory('src/icons')
await convertDirectory('src/characters')
await convertDirectory('src/labels')

console.log('\n✅ All SVGs converted successfully!')
