# libstub

libstub is a tiny UMD module that uses the global namespace to dynamically link dependencies between JS bundles.

Why? To help link together JS lebs, independent of how they were built.

# Usage

```
  // include libstub before these files

  // file a.js, wants to export module a

  var a = {};

  libstub.export('a', a);


  // file b.js, wants to import a and export b

  var a = libstub.import('a');
  var b = {};

  libstub.export('b', b);


  // file c.js, wants to import a and b.

  var a = libstub.import('a');
  var b = libstub.import('b');

```


# API

