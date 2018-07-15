# libstub

libstub is a tiny UMD module that uses the global namespace to dynamically link dependencies between JS bundles.

Why? Mostly to help link together JS, independent of how they were built.

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

<a name="libstub"></a>

## libstub : <code>object</code>
**Kind**: global namespace  

* [libstub](#libstub) : <code>object</code>
    * [.export](#libstub.export)
    * [.import](#libstub.import)

<a name="libstub.export"></a>

### libstub.export
export a module to use

**Kind**: static property of [<code>libstub</code>](#libstub)  

| Param | Description |
| --- | --- |
| name | the name of the module |
| module | the module |

<a name="libstub.import"></a>

### libstub.import
import a module already exported

**Kind**: static property of [<code>libstub</code>](#libstub)  

| Param | Description |
| --- | --- |
| name | the name of the module |
| ignoreMissing | if true, do not throw an error when the module is not found |
