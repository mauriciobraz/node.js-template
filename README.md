# Node.js Template

This is an opinionated template for (my) Node.js projects. It includes the following features:

## Getting Started

Clone the repository and install the dependencies:

```bash
git clone https://github.com/mauriciobraz/node.js-template.git
cd node.js-template
pnpm install
```

-   `pnpm run build --minify` build the project with minification and set the `NODE_ENV` to `production`

## Configuration

The project uses [dotenv-expand](https://github.com/motdotla/dotenv-expand) for parsing environment variables with expansion support (read their documentation for more information).

### Zod Schema Validation

Add new environment variables to this schema and it'll be added to [source/config/index.ts](source/config/index.ts) (file that parses the environment variables).
