Package.describe({
  git: 'https://github.com/gliesesoftware/cfs-core.git',
  name: 'gliese:cfs-core',
  version: '0.5.5',
  summary: 'Gliese flavour of CollectionFS (INTERNAL USE ONLY)'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  // Rig the collectionFS package v2
  api.imply([
    // Base util rigs the basis for the FS scope and some general helper mehtods
    'gliese:cfs-base@0.0.28',
    // Want to make use of the file object and its api, yes!
    'gliese:cfs-file@0.1.16',
    // Add the FS.Collection to keep track of everything
    'gliese:cfs-collection@0.5.4',
    // Support filters for easy rules about what may be inserted
    'gliese:cfs-collection-filters@0.2.3',
    // Add the option to have ddp and http access point
    'gliese:cfs-access-point@0.1.44',
    // We might also want to have the server create copies of our files?
    'gliese:cfs-worker@0.1.5',
    // By default we want to support uploads over HTTP
    'cfs:upload-http@0.0.19',
  ]);

});

Package.onTest(function (api) {
  api.use('gliese:cfs-core');
  api.use('test-helpers@1.0.0', 'server');
  api.use([
    'tinytest@1.0.0',
    'underscore@1.0.0',
    'ejson@1.0.0',
    'ordered-dict@1.0.0',
    'random@1.0.0',
    'tracker@1.0.3'
  ]);

  api.addFiles('tests/server-tests.js', 'server');
  api.addFiles('tests/client-tests.js', 'client');
});
