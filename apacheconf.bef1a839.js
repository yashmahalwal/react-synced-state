!function(e,r,t,i,o){var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n="function"==typeof a[i]&&a[i],s=n.cache||{},l="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function c(r,t){if(!s[r]){if(!e[r]){var o="function"==typeof a[i]&&a[i];if(!t&&o)return o(r,!0);if(n)return n(r,!0);if(l&&"string"==typeof r)return l(r);var u=new Error("Cannot find module '"+r+"'");throw u.code="MODULE_NOT_FOUND",u}p.resolve=function(t){var i=e[r][1][t];return null!=i?i:t},p.cache={};var d=s[r]=new c.Module(r);e[r][0].call(d.exports,p,d,d.exports,this)}return s[r].exports;function p(e){var r=p.resolve(e);return!1===r?{}:c(r)}}c.isParcelRequire=!0,c.Module=function(e){this.id=e,this.bundle=c,this.exports={}},c.modules=e,c.cache=s,c.parent=n,c.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]},Object.defineProperty(c,"root",{get:function(){return a[i]}}),a[i]=c;for(var u=0;u<r.length;u++)c(r[u])}({"5Qbi7":[function(e,r,t){"use strict";function i(e){e.languages.apacheconf={comment:/#.*/,"directive-inline":{pattern:/(^[\t ]*)\b(?:AcceptFilter|AcceptPathInfo|AccessFileName|Action|Add(?:Alt|AltByEncoding|AltByType|Charset|DefaultCharset|Description|Encoding|Handler|Icon|IconByEncoding|IconByType|InputFilter|Language|ModuleInfo|OutputFilter|OutputFilterByType|Type)|Alias|AliasMatch|Allow(?:CONNECT|EncodedSlashes|Methods|Override|OverrideList)?|Anonymous(?:_LogEmail|_MustGiveEmail|_NoUserID|_VerifyEmail)?|AsyncRequestWorkerFactor|Auth(?:BasicAuthoritative|BasicFake|BasicProvider|BasicUseDigestAlgorithm|DBDUserPWQuery|DBDUserRealmQuery|DBMGroupFile|DBMType|DBMUserFile|Digest(?:Algorithm|Domain|NonceLifetime|Provider|Qop|ShmemSize)|Form(?:Authoritative|Body|DisableNoStore|FakeBasicAuth|Location|LoginRequiredLocation|LoginSuccessLocation|LogoutLocation|Method|Mimetype|Password|Provider|SitePassphrase|Size|Username)|GroupFile|LDAP(?:AuthorizePrefix|BindAuthoritative|BindDN|BindPassword|CharsetConfig|CompareAsUser|CompareDNOnServer|DereferenceAliases|GroupAttribute|GroupAttributeIsDN|InitialBindAsUser|InitialBindPattern|MaxSubGroupDepth|RemoteUserAttribute|RemoteUserIsDN|SearchAsUser|SubGroupAttribute|SubGroupClass|Url)|Merging|Name|nCache(?:Context|Enable|ProvideFor|SOCache|Timeout)|nzFcgiCheckAuthnProvider|nzFcgiDefineProvider|Type|UserFile|zDBDLoginToReferer|zDBDQuery|zDBDRedirectQuery|zDBMType|zSendForbiddenOnFailure)|BalancerGrowth|BalancerInherit|BalancerMember|BalancerPersist|BrowserMatch|BrowserMatchNoCase|BufferedLogs|BufferSize|Cache(?:DefaultExpire|DetailHeader|DirLength|DirLevels|Disable|Enable|File|Header|IgnoreCacheControl|IgnoreHeaders|IgnoreNoLastMod|IgnoreQueryString|IgnoreURLSessionIdentifiers|KeyBaseURL|LastModifiedFactor|Lock|LockMaxAge|LockPath|MaxExpire|MaxFileSize|MinExpire|MinFileSize|NegotiatedDocs|QuickHandler|ReadSize|ReadTime|Root|Socache(?:MaxSize|MaxTime|MinTime|ReadSize|ReadTime)?|StaleOnError|StoreExpired|StoreNoStore|StorePrivate)|CGIDScriptTimeout|CGIMapExtension|CharsetDefault|CharsetOptions|CharsetSourceEnc|CheckCaseOnly|CheckSpelling|ChrootDir|ContentDigest|CookieDomain|CookieExpires|CookieName|CookieStyle|CookieTracking|CoreDumpDirectory|CustomLog|Dav|DavDepthInfinity|DavGenericLockDB|DavLockDB|DavMinTimeout|DBDExptime|DBDInitSQL|DBDKeep|DBDMax|DBDMin|DBDParams|DBDPersist|DBDPrepareSQL|DBDriver|DefaultIcon|DefaultLanguage|DefaultRuntimeDir|DefaultType|Define|Deflate(?:BufferSize|CompressionLevel|FilterNote|InflateLimitRequestBody|InflateRatio(?:Burst|Limit)|MemLevel|WindowSize)|Deny|DirectoryCheckHandler|DirectoryIndex|DirectoryIndexRedirect|DirectorySlash|DocumentRoot|DTracePrivileges|DumpIOInput|DumpIOOutput|EnableExceptionHook|EnableMMAP|EnableSendfile|Error|ErrorDocument|ErrorLog|ErrorLogFormat|Example|ExpiresActive|ExpiresByType|ExpiresDefault|ExtendedStatus|ExtFilterDefine|ExtFilterOptions|FallbackResource|FileETag|FilterChain|FilterDeclare|FilterProtocol|FilterProvider|FilterTrace|ForceLanguagePriority|ForceType|ForensicLog|GprofDir|GracefulShutdownTimeout|Group|Header|HeaderName|Heartbeat(?:Address|Listen|MaxServers|Storage)|HostnameLookups|IdentityCheck|IdentityCheckTimeout|ImapBase|ImapDefault|ImapMenu|Include|IncludeOptional|Index(?:HeadInsert|Ignore|IgnoreReset|Options|OrderDefault|StyleSheet)|InputSed|ISAPI(?:AppendLogToErrors|AppendLogToQuery|CacheFile|FakeAsync|LogNotSupported|ReadAheadBuffer)|KeepAlive|KeepAliveTimeout|KeptBodySize|LanguagePriority|LDAP(?:CacheEntries|CacheTTL|ConnectionPoolTTL|ConnectionTimeout|LibraryDebug|OpCacheEntries|OpCacheTTL|ReferralHopLimit|Referrals|Retries|RetryDelay|SharedCacheFile|SharedCacheSize|Timeout|TrustedClientCert|TrustedGlobalCert|TrustedMode|VerifyServerCert)|Limit(?:InternalRecursion|Request(?:Body|Fields|FieldSize|Line)|XMLRequestBody)|Listen|ListenBackLog|LoadFile|LoadModule|LogFormat|LogLevel|LogMessage|LuaAuthzProvider|LuaCodeCache|Lua(?:Hook(?:AccessChecker|AuthChecker|CheckUserID|Fixups|InsertFilter|Log|MapToStorage|TranslateName|TypeChecker)|Inherit|InputFilter|MapHandler|OutputFilter|PackageCPath|PackagePath|QuickHandler|Root|Scope)|Max(?:ConnectionsPerChild|KeepAliveRequests|MemFree|RangeOverlaps|RangeReversals|Ranges|RequestWorkers|SpareServers|SpareThreads|Threads)|MergeTrailers|MetaDir|MetaFiles|MetaSuffix|MimeMagicFile|MinSpareServers|MinSpareThreads|MMapFile|ModemStandard|ModMimeUsePathInfo|MultiviewsMatch|Mutex|NameVirtualHost|NoProxy|NWSSLTrustedCerts|NWSSLUpgradeable|Options|Order|OutputSed|PassEnv|PidFile|PrivilegesMode|Protocol|ProtocolEcho|Proxy(?:AddHeaders|BadHeader|Block|Domain|ErrorOverride|ExpressDBMFile|ExpressDBMType|ExpressEnable|FtpDirCharset|FtpEscapeWildcards|FtpListOnWildcard|HTML(?:BufSize|CharsetOut|DocType|Enable|Events|Extended|Fixups|Interp|Links|Meta|StripComments|URLMap)|IOBufferSize|MaxForwards|Pass(?:Inherit|InterpolateEnv|Match|Reverse|ReverseCookieDomain|ReverseCookiePath)?|PreserveHost|ReceiveBufferSize|Remote|RemoteMatch|Requests|SCGIInternalRedirect|SCGISendfile|Set|SourceAddress|Status|Timeout|Via)|ReadmeName|ReceiveBufferSize|Redirect|RedirectMatch|RedirectPermanent|RedirectTemp|ReflectorHeader|RemoteIP(?:Header|InternalProxy|InternalProxyList|ProxiesHeader|TrustedProxy|TrustedProxyList)|RemoveCharset|RemoveEncoding|RemoveHandler|RemoveInputFilter|RemoveLanguage|RemoveOutputFilter|RemoveType|RequestHeader|RequestReadTimeout|Require|Rewrite(?:Base|Cond|Engine|Map|Options|Rule)|RLimitCPU|RLimitMEM|RLimitNPROC|Satisfy|ScoreBoardFile|Script(?:Alias|AliasMatch|InterpreterSource|Log|LogBuffer|LogLength|Sock)?|SecureListen|SeeRequestTail|SendBufferSize|Server(?:Admin|Alias|Limit|Name|Path|Root|Signature|Tokens)|Session(?:Cookie(?:Name|Name2|Remove)|Crypto(?:Cipher|Driver|Passphrase|PassphraseFile)|DBD(?:CookieName|CookieName2|CookieRemove|DeleteLabel|InsertLabel|PerUser|SelectLabel|UpdateLabel)|Env|Exclude|Header|Include|MaxAge)?|SetEnv|SetEnvIf|SetEnvIfExpr|SetEnvIfNoCase|SetHandler|SetInputFilter|SetOutputFilter|SSIEndTag|SSIErrorMsg|SSIETag|SSILastModified|SSILegacyExprParser|SSIStartTag|SSITimeFormat|SSIUndefinedEcho|SSL(?:CACertificateFile|CACertificatePath|CADNRequestFile|CADNRequestPath|CARevocationCheck|CARevocationFile|CARevocationPath|CertificateChainFile|CertificateFile|CertificateKeyFile|CipherSuite|Compression|CryptoDevice|Engine|FIPS|HonorCipherOrder|InsecureRenegotiation|OCSP(?:DefaultResponder|Enable|OverrideResponder|ResponderTimeout|ResponseMaxAge|ResponseTimeSkew|UseRequestNonce)|OpenSSLConfCmd|Options|PassPhraseDialog|Protocol|Proxy(?:CACertificateFile|CACertificatePath|CARevocation(?:Check|File|Path)|CheckPeer(?:CN|Expire|Name)|CipherSuite|Engine|MachineCertificate(?:ChainFile|File|Path)|Protocol|Verify|VerifyDepth)|RandomSeed|RenegBufferSize|Require|RequireSSL|Session(?:Cache|CacheTimeout|TicketKeyFile|Tickets)|SRPUnknownUserSeed|SRPVerifierFile|Stapling(?:Cache|ErrorCacheTimeout|FakeTryLater|ForceURL|ResponderTimeout|ResponseMaxAge|ResponseTimeSkew|ReturnResponderErrors|StandardCacheTimeout)|StrictSNIVHostCheck|UserName|UseStapling|VerifyClient|VerifyDepth)|StartServers|StartThreads|Substitute|Suexec|SuexecUserGroup|ThreadLimit|ThreadsPerChild|ThreadStackSize|TimeOut|TraceEnable|TransferLog|TypesConfig|UnDefine|UndefMacro|UnsetEnv|Use|UseCanonicalName|UseCanonicalPhysicalPort|User|UserDir|VHostCGIMode|VHostCGIPrivs|VHostGroup|VHostPrivs|VHostSecure|VHostUser|Virtual(?:DocumentRoot|ScriptAlias)(?:IP)?|WatchdogInterval|XBitHack|xml2EncAlias|xml2EncDefault|xml2StartParse)\b/im,lookbehind:!0,alias:"property"},"directive-block":{pattern:/<\/?\b(?:Auth[nz]ProviderAlias|Directory|DirectoryMatch|Else|ElseIf|Files|FilesMatch|If|IfDefine|IfModule|IfVersion|Limit|LimitExcept|Location|LocationMatch|Macro|Proxy|Require(?:All|Any|None)|VirtualHost)\b.*>/i,inside:{"directive-block":{pattern:/^<\/?\w+/,inside:{punctuation:/^<\/?/},alias:"tag"},"directive-block-parameter":{pattern:/.*[^>]/,inside:{punctuation:/:/,string:{pattern:/("|').*\1/,inside:{variable:/[$%]\{?(?:\w\.?[-+:]?)+\}?/}}},alias:"attr-value"},punctuation:/>/},alias:"tag"},"directive-flags":{pattern:/\[(?:[\w=],?)+\]/,alias:"keyword"},string:{pattern:/("|').*\1/,inside:{variable:/[$%]\{?(?:\w\.?[-+:]?)+\}?/}},variable:/[$%]\{?(?:\w\.?[-+:]?)+\}?/,regex:/\^?.*\$|\^.*\$?/}}r.exports=i,i.displayName="apacheconf",i.aliases=[]},{}]},[],0,"parcelRequired94c");
//# sourceMappingURL=apacheconf.bef1a839.js.map