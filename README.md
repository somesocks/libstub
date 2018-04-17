# libstub

libstub is a tiny UMD module that uses the global namespace to dynamically link dependencies between JS bundles.

Why? Mostly to help link together JS, independent of how it was built.

# Usage

```
  // include libstub before these files

  // file a.js, wants to export module a

  var a = {};

  libstub.provide('a', a);


  // file b.js, wants to import a and export b

  var a = libstub.consume('a');
  var b = {};

  libstub.provide('b', b);


  // file c.js, wants to import a and b.

  var a = libstub.consume('a');
  var b = libstub.consume('b');

```

There are two types of JS bundles: providers and consumers.
Providers export modules for others to use, consumers require modules to be provided to them.
A bundle can be both a provider and a consumer.



# API

<a name="libstub"></a>

## libstub : <code>object</code>
**Kind**: global namespace  

* [libstub](#libstub) : <code>object</code>
    * [.provide](#libstub.provide)
    * [.consume](#libstub.consume)

<a name="libstub.provide"></a>

### libstub.provide
Provide a module to use

**Kind**: static property of [<code>libstub</code>](#libstub)  

| Param | Description |
| --- | --- |
| name | the name of the module |
| module | the module |

<a name="libstub.consume"></a>

### libstub.consume
Consume a module already provided

**Kind**: static property of [<code>libstub</code>](#libstub)  

| Param | Description |
| --- | --- |
| name | the name of the module |
| ignoreMissing | if true, do not throw an error when the module is not found |

