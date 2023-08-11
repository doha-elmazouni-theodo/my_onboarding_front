# Nimbleways Next.js Boilerplate

## Package manager
We use `pnpm` as package manager. The version is enforced for all the developers by setting it explicitly with `engines.npm` in `package.json`.

Helper scripts for both Windows and Linux are provided in the repository's root to automatically and seemlessly use the required version. To use it:
* Windows: `pnpm [arguments...]`. Ex:
```
D:\internal-boilerplate-nextjs> pnpm run lint
> corepack pnpm lint

> nw-nextjs-boilerplate@ lint D:\internal-boilerplate-nextjs
> next lint --ignore-path .gitignore --dir .

- info Loaded env from D:\internal-boilerplate-nextjs\.env
...
```
* Linux: `./pnpm [arguments...]`. Ex:
```
$ ./pnpm run lint
> corepack pnpm run lint

> nw-nextjs-boilerplate@ lint /src
> next lint --ignore-path .gitignore --dir .

- info Loaded env from /src/.env
...
```
The scripts use the Node.js built-in "package manager" manager `corepack`.
