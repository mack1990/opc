// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  locationUrl: 'http://lb-master.cluster1.cloud.s32800.us.wal-mart.com/us-32836/location-server/v1/orgUnits/search',
  siteNumber: 7390,
  cycleWaveUrl: 'http://lb-node.cluster1.cloud.s32800.us.wal-mart.com/us-32836/wave-release/orders/enrich/release/'
};
