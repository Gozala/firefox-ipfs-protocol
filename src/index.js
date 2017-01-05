/* @flow */

import type {nsIURI, nsIIDRef, nsIChannel} from "./gecko"
import {Cc, Ci, Cr} from "./gecko"

const ioService =
  Cc['@mozilla.org/network/io-service;1'].
  getService(Ci.nsIIOService)

class FSURI {
  asciiHost:string
  asciiHostPort:string
  asciiSpec:string
  hasRef:boolean
  host:string
  hostPort:string
  originCharset:string
  password:string
  path:string
  port:number
  prePath:string
  ref:string
  scheme:string
  spec:string
  specIgnoringRef:string
  username:string
  userPass:string
  filePath:string
  query:string
  constructor(spec:string) {
    this.spec = spec
  }
  QueryInterface(uuid:nsIIDRef):nsIURI {
    if (uuid.equals(Ci.nsIURI)) {
      return this
    } else {
      throw Cr.NS_ERROR_NO_INTERFACE
    }
  }
  clone() {
    return this
  }
  cloneIgnoringRef() {
    return this
  }
  cloneWithNewRef(newRef:string) {
    return this
  }
  equals(other:nsIURI):boolean {
    return other.spec === this.spec
  }
  equalsExceptRef(other:nsIURI):boolean {
    return other.spec === this.spec
  }
  resolve(relativePath:string):string {
    return relativePath
  }
  schemeIs(scheme:string):boolean {
    return this.scheme === scheme
  }
  setHostAndPort(hostport:string):void {
    throw Error('Not Implemented')
  }
}

class FSProtocolHandler {
  defaultPort:number = -1
  protocolFlags:number
    = Ci.nsIProtocolHandler.URI_NORELATIVE
    | Ci.nsIProtocolHandler.URI_IS_UI_RESOURCE
    | Ci.nsIProtocolHandler.URI_DANGEROUS_TO_LOAD
  scheme:string = 'fs'
  allowPort(port:number, scheme:string) {
    return false
  }
  newURI(spec:string, originCharset:string, baseURI:nsIURI):nsIURI {
    const uri = Cc["@mozilla.org/network/standard-url;1"]
                .createInstance(Ci.nsIStandardURL)
    uri.init(Ci.nsIStandardURL.URLTYPE_STANDARD,
              this.defaultPort,
              spec,
              originCharset,
              baseURI)
    return uri
  }
  newChannel(uri:nsIURI):nsIChannel {

    const channel = ioService.newChannel(uri.spec, uri.originCharset, null)
    return channel
  }
}
