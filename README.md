# JavaScript Initial Configuration

This is an initial configuration for a JavaScript project.

## Development Setup

### Dependencies

- \$ `git clone https://github.com/gpazevedo/js.git newfolder` copy the repository for a new folder and init a git there
- \$ `yarn install` install the dependencies
- \$ `git init` initiate the version control

### Workflow

- \$ `yarn test filetobetested # TDD with Unit Tests`
- \$ `yarn test # TDD with all Unit Tests`
- \$ `yarn test:coverage # TDD with all Unit Tests`
- \$ `yarn build # builds for production`
- \$ `yarn build && node dist/index.js # Runs the program`

### VSCode plugins

A better development experience can be achieved with the following vscode plug-ins installed:

- _EditorConfig for VS Code_ editorconfig.editorconfig ".editorconfig"
- _ESLint_ dbaeumer.vscode-eslint ".eslintrc"
- _Prettier - Code formatter_ esbenp.prettier-vscode ".prettierrc"
- _Insert Unicode_ brunnerh.insert-unicode
- _Jest_ orta.vscode-jest
- _Visual Studio IntelliCode_
- _vscode-icons_ vscode-icons-team.vscode-icons
- _Babel JavaScript_ mgmcdermott.vscode-language-babel
- _Debugger for Chrome_ msjsdiag.debugger-for-chrome ".vscode/launch.json"
