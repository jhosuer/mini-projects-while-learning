 module.exports = function () {
   return {
     files: [
       'src/**/*.js'
     ],

     tests: [
       'test/**/*Spec.js'
     ],

     setup: function (wallaby) {
       // wallaby.testFramework is jasmine/QUnit/mocha object
       wallaby.testFramework.ui('tdd');

       // you can access 'window' object in a browser environment,
       // 'global' object or require(...) something in node environment
     }
   };
 };