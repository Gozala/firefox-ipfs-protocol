/* @flow */

import type {nsIPrincipal, nsIPrincipalContstants} from "./caps/nsIPrincipal"
import type {nsIChannel, nsIChannelConstants} from "./netwerk/base/nsIChannel"
import type {nsIAsyncVerifyRedirectCallback} from "./netwerk/base/nsIAsyncVerifyRedirectCallback"
import type {nsIChannelEventSinkConstants, nsIChannelEventSink} from "./netwerk/base/nsIChannelEventSink"
import type {nsIIOService} from "./netwerk/base/nsIIOService"
import type {nsILoadInfo, nsILoadInfoConstants} from "./netwerk/base/nsILoadInfo"
import type {nsIProtocolHandler, nsIProtocolHandlerConstants} from "./netwerk/base/nsIProtocolHandler"
import type {nsIRequestConstants, nsIRequest} from "./netwerk/base/nsIRequest"
import type {nsIRequestObserver} from "./netwerk/base/nsIRequestObserver"
import type {nsIStandardURL, nsStandardURLType, nsIStandardURLConstants} from "./netwerk/base/nsIStandardURL"
import type {nsIStreamListener} from "./netwerk/base/nsIStreamListener"
import type {nsIURI} from "./netwerk/base/nsIURI"
import type {nsIURL} from "./netwerk/base/nsIURL"

import type {nsITransportSecurityInfo} from "./netwerk/socket/nsITransportSecurityInfo"

import type {nsIInterfaceRequestor} from "./xpcom/base/nsIInterfaceRequestor"
import type {nsISupports, nsIIDRef} from "./xpcom/base/nsISupports"
import type {nsresult} from "./xpcom/base/nsrootidl"
import type {nsIJSID, nsIJSCID} from "./xpcom/base/xpcjsid"

import type {nsIFactory} from "./xpcom/components/nsIFactory"

import type {nsIBinaryInputStream} from "./xpcom/io/nsIBinaryInputStream"
import type {nsIInputStream} from "./xpcom/io/nsIInputStream"
import type {nsIScriptableInputStream} from "./xpcom/io/nsIScriptableInputStream"


declare var Components:{
  results:{
    NS_ERROR_NOT_INITIALIZED: nsresult,
    NS_ERROR_ALREADY_INITIALIZED: nsresult,
    NS_ERROR_NOT_IMPLEMENTED: nsresult,
    NS_ERROR_NO_INTERFACE: nsresult,
    NS_ERROR_NULL_POINTER: nsresult,
    NS_ERROR_ABORT: nsresult,
    NS_ERROR_FAILURE: nsresult,
    NS_ERROR_UNEXPECTED: nsresult,
    NS_ERROR_OUT_OF_MEMORY: nsresult,
    NS_ERROR_ILLEGAL_VALUE: nsresult,
    NS_ERROR_NO_AGGREGATION: nsresult,
    NS_ERROR_NOT_AVAILABLE: nsresult,
    NS_ERROR_FACTORY_NOT_REGISTERED: nsresult,
    NS_ERROR_FACTORY_REGISTER_AGAIN: nsresult,
    NS_ERROR_FACTORY_NOT_LOADED: nsresult,
    NS_ERROR_FACTORY_EXISTS: nsresult,
    NS_ERROR_FACTORY_NO_SIGNATURE_SUPPORT: nsresult,
    NS_ERROR_PROXY_INVALID_IN_PARAMETER: nsresult,
    NS_ERROR_PROXY_INVALID_OUT_PARAMETER: nsresult,
    NS_ERROR_CANNOT_CONVERT_DATA: nsresult,
    NS_ERROR_OBJECT_IS_IMMUTABLE: nsresult,
    NS_ERROR_LOSS_OF_SIGNIFICANT_DATA: nsresult,
    NS_ERROR_ILLEGAL_DURING_SHUTDOWN: nsresult,

    NS_BINDING_ABORTED: nsresult,
    NS_OK: nsresult
  },
  interfaces:{
    nsIPrincipal: nsIJSID & nsIPrincipalContstants,

    nsIAsyncVerifyRedirectCallback: nsIJSID,
    nsIChannel: nsIJSID & nsIChannelConstants,
    nsIChannelEventSink: nsIJSID & nsIChannelEventSinkConstants,
    nsIIOService: nsIJSID,
    nsILoadInfo: nsIJSID & nsILoadInfoConstants,
    nsIProtocolHandler: nsIJSID & nsIProtocolHandlerConstants,
    nsIRequest: nsIJSID & nsIRequestConstants,
    nsIRequestObserver: nsIJSID,
    nsIStandardURL: nsIJSID & nsIStandardURLConstants,
    nsIStreamListener: nsIJSID,
    nsIURI: nsIJSID,
    nsIURL: nsIJSID,

    nsITransportSecurityInfo: nsIJSID,

    nsIInterfaceRequestor: nsIJSID,
    nsISupports: nsIJSID,

    nsIFactory: nsIJSID,

    nsIBinaryInputStream: nsIJSID,
    nsIInputStream: nsIJSID,
    nsIScriptableInputStream: nsIJSID

  },
  classes:{
    '@mozilla.org/network/io-service;1':nsIJSCID<nsIIOService>,
    '@mozilla.org/network/standard-url;1':nsIJSCID<nsIStandardURL>
  }
}

export const Cc = Components.classes
export const Ci = Components.interfaces
export const Cr = Components.results

export type {nsIIDRef, nsIURI, nsIURL, nsIStandardURL, nsIChannel}
