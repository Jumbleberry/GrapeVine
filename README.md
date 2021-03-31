# Jumbleberry ElementUI Theme

##### This depends on `TailwindCSS` being installed and built on the parent project.

## Usage
#### Examples based on a Vue Cli 3 project
Create a `theme` folder on the `src` folder of the project

```
cd src
mkdir theme
```

Add Element Chalk Theme as a submodule of your project inside the created "theme" folder
```
git submodule add git@github.com:ElementUI/theme-chalk.git
```

Add the Jumbleberry Element Theme as a submodule of your project inside the created "theme" folder

```
git submodule add git@github.com:Jumbleberry/GrapeVine.git ./jumbleberry
```

Edit the babel configuration file to specify the element theme path

#### babel.config.js
```
module.exports = {
  presets: ['@vue/app'],
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: '~src/theme/jumbleberry',
        ext: '.scss'
      }
    ]
  ]
};
```
