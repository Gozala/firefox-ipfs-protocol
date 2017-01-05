/* @flow */

// See: https://github.com/mozilla/gecko-dev/blob/62d7405e171e6ca7e50b578c59c96d07ee69cca0/netwerk/base/nsIIOService.idl

import type {nsresult, AUTF8String} from "../../xpcom/base/nsrootidl"
import type {nsISupports} from "../../xpcom/base/nsISupports"
import type {nsIURI} from "./nsIURI"
import type {nsIChannel} from "./nsIChannel"
import type {nsIProtocolHandler} from "./nsIProtocolHandler"

export interface nsIIOService extends nsISupports<nsIIOService> {
  getProtocolHandler(scheme:string):nsIProtocolHandler,
  newChannel(spec:AUTF8String, aOriginCharset:string, baseURI:null|nsIURI):nsIChannel
}
