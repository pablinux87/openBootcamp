Para iniciar un proyecto con typescript se ejecuta lo siguiente por teminal:

npm i --save-dev @types/node nodemon ts-node typescript

Para iicializar el tsconfig.json :

npx tsc --init --rootDir src --outdir build --esModuleInterop --resolveJsonModule --lib es6 --module commonjs --allowjs --noImplicitAny

Instalar rimraf

npm i --save-dev rimraf

Script tanto para desarrollo como para el final a produccion: (archivo package.json)
