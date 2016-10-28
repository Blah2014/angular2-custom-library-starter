# angular2-custom-library-starter

***Please donate if you are using this repo***

***Note:*** If you found this project helpful please give this repo a star.

<a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=C2HFZWSUPV47Q" target="_blank">
  <img src="https://raw.githubusercontent.com/Blah2014/phonegap-inmobi-plugin/gh-pages/images/BuymeaCoffee.png" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
</a>

<a href="http://traderhub.info" target="_blank">
  <img src="http://traderhub.info/images/AD.jpg" border="0" name="submit" alt="TraderHub - daily stock picks, market signals, stock picking service" />
</a>

### Build custom Angular2 Library

How to Build Your Own Angular2 Library using angular-cli

### Installation

```javascript
npm install -g angular-cli
```

### Generating and serving an Angular2 project via a development server

```javascript
ng new PROJECT_NAME
cd PROJECT_NAME
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
    compilerOptions: {
        emitDecoratorMetadata: true,
        experimentalDecorators: true,
        target: "es5",
        module: "commonjs",
        moduleResolution: "node",
        removeComments: true,
        sourceMap: true,
        outDir: "../lib",
        declaration: true
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
license: (ISC)

// Add watch and build into scripts
"scripts": {
    "watch": "tsc -p ./ -w",
    "build": "npm run watch && rm -rf ../lib && tsc -p ./",
    "test": "echo \"Error: no test specified\" && exit 1"
}

Copy: "dependencies" and "devDependencies" from root "package.json"
into "custom_library/package.json"

npm install
npm install rmdir --save
```

Under "custom_library" create 2 files:

* ng2-helloworld.ts
```javascript
export * from './src/helloworld.module';
```

* ng2-helloworld.d.ts
```javascript
export * from './src/helloworld.module';
```

```javascript
npm run build
```

Open new cmd

```javascript
cd lib
npm link 

cd build
npm link ng2-helloworld
```

Enjoy developing your custom Angular2 library :)
