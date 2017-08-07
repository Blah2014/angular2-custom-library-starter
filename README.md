# angular2-custom-library-starter

***Please donate if you are using this repo***

***Note:*** If you found this project helpful please give this repo a star.

<a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=C2HFZWSUPV47Q" target="_blank">
  <img src="https://raw.githubusercontent.com/Blah2014/phonegap-inmobi-plugin/gh-pages/images/BuymeaCoffee.png" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
</a>

### Build custom Angular2 Library

How to Build Your Own Angular2 Library using angular-cli

### Installation

```javascript
npm install -g angular-cli
```

### Generating and serving an Angular2 project via a development server

```javascript
ng new ng2-helloworld
cd ng2-helloworld
ng serve
```

Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

You can configure the default HTTP port and the one used by the LiveReload server with two command-line options :

```javascript
ng serve --host 0.0.0.0 --port 4201 --live-reload-port 49153
```

### Create custom library directory

Create new directory "custom_library" in project root

Create new directory "src" in "custom_library"

Under "custom_library" create "tsconfig.json"

```javascript
{
    "compilerOptions": {
        "emitDecoratorMetadata": true,
        "experimentalDecorators": true,
        "target": "es5",
        "module": "commonjs",
        "moduleResolution": "node",
        "removeComments": true,
        "sourceMap": true,
        "outDir": "../lib",
        "declaration": true
    }
}
```

```javascript
cd custom_library
npm init

name: (custom_library) ng2-helloworld
version: (1.0.0) 0.0.1
description: Angular2 helloworld library
entry point: (index.js) ng2-helloworld.js
test command:
git repository:
keywords:
author:
license: (ISC) MIT

// Add watch and build into scripts
"scripts": {
    "watch": "tsc -p ./ -w",
    "build": "npm run watch && rm -rf ../lib && tsc -p ./",
    "test": "echo \"Error: no test specified\" && exit 1"
}

Copy: "dependencies" and "devDependencies" from root "package.json"
into "custom_library/package.json"

npm install
```

Under "custom_library" create 2 files:

* ng2-helloworld.ts
```javascript
export * from './src/ng2-helloworld.component';
export * from './src/ng2-helloworld.module';
```

* ng2-helloworld.d.ts
```javascript
export * from './src/ng2-helloworld.component';
export * from './src/ng2-helloworld.module';
```

```javascript
npm run build
```

### Ready for npm
Under "lib" create 2 files:

.npmignore
```javascript
*
!src
```

package.json
```javascript
npm init

name: (custom_library) ng2-helloworld
version: (1.0.0) 0.0.1
description: Angular2 helloworld library
entry point: (index.js) ng2-helloworld.js
test command:
git repository:
keywords:
author:
license: (ISC) MIT
```

Open new cmd

```javascript
cd lib
npm link 

cd ../
npm link ng2-helloworld

cd ../
ng serve
```

### Usage

```javascript
import { Ng2HelloworldModule } from 'ng2-helloworld/ng2-helloworld';
```

in your html add:
```html
<ng2-helloworld></ng2-helloworld>
```

### Final result you can view on:
[ng2-helloworld](https://github.com/Blah2014/ng2-helloworld)

Enjoy developing your custom Angular2 library :)
