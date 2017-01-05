/* @flow */

// See: https://github.com/mozilla/gecko-dev/blob/62d7405e171e6ca7e50b578c59c96d07ee69cca0/netwerk/base/nsIRequest.idl

import type {nsresult, AUTF8String} from "../../xpcom/base/nsrootidl"
import type {nsISupports} from "../../xpcom/base/nsISupports"

export type nsLoadFlags = number

export interface nsIRequestConstants  {
  static LOAD_REQUESTMASK:nsLoadFlags,
  static LOAD_NORMAL:nsLoadFlags,
  static LOAD_BACKGROUND:nsLoadFlags,
  static INHIBIT_PIPELINE:nsLoadFlags,
  static INHIBIT_CACHING:nsLoadFlags,
  static INHIBIT_PERSISTENT_CACHING:nsLoadFlags,
  static LOAD_BYPASS_CACHE:nsLoadFlags,
  static LOAD_FROM_CACHE:nsLoadFlags,
  static VALIDATE_ALWAYS:nsLoadFlags,
  static VALIDATE_NEVER:nsLoadFlags,
  static VALIDATE_ONCE_PER_SESSION:nsLoadFlags,
  static LOAD_ANONYMOUS:nsLoadFlags,
  static LOAD_FRESH_CONNECTION:nsLoadFlags
}

export interface nsIRequest extends nsISupports<nsIRequest> {
  // The name of the request.  Often this is the URI of the request.
  name:AUTF8String,
  // The error status associated with the request.
  status:nsresult,
  cancel(status:nsresult):void,
  // Indicates whether the request is pending. isPending is true when there is
  // an outstanding asynchronous event that will make the request no longer be
  // pending. Requests do not necessarily start out pending; in some cases,
  // requests have to be explicitly initiated (for example nsIChannel
  // implementations are only pending once asyncOpen returns successfully).
 // Requests can become pending multiple times during their lifetime.
  isPending():boolean,
  // Resumes the current request. This may have the effect of re-opening any
  // underlying transport and will resume the delivery of data to any open
  // streams.
  resume():void,
  // Suspends the current request. This may have the effect of closing any
  // underlying transport (in order to free up resources), although any open
  // streams remain logically opened and will continue delivering data when the
  // transport is resumed.
  //
  // Calling cancel() on a suspended request must not send any notifications
  // (such as onstopRequest) until the request is resumed.
  suspend():void,

  // loadGroup: nsILoadGroup
  loadFlags: nsLoadFlags
}
