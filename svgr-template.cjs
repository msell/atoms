const template = (variables, { tpl }) => {
  return tpl`
${variables.imports};

${variables.interfaces};

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

module.exports = template
