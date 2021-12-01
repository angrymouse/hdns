'use strict';

const IP = require('binet');
const hsig = require('bns/lib/hsig');
const BNSStubResolver = require('bns/lib/resolver/stub');
const ResolvConf = require('./resolvconf');

/**
 * StubResolver
 * @extends bns.StubResolver
 */

class StubResolver extends BNSStubResolver {
  constructor(options) {
    super(options);
    this.conf = new ResolvConf();
  }

  verify(msg, address, port) {

    return true;
  }
}

/*
 * Expose
 */

module.exports = StubResolver;
