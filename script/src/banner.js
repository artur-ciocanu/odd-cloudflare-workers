// In Cloudflare Worker environment "self" is similar to "window"
// We have to create a dummy "window" variable to make sure the
// Rollup bundle works as expected
var window = self;
