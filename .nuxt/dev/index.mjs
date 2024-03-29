globalThis._importMeta_={url:import.meta.url,env:process.env};import 'file:///Users/kobayashinanari/Desktop/Nuxt-Netflix-like-app/node_modules/.pnpm/node-fetch-native@1.0.1/node_modules/node-fetch-native/dist/polyfill.mjs';
import { Server } from 'node:http';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { mkdirSync } from 'node:fs';
import { parentPort, threadId } from 'node:worker_threads';
import { provider, isWindows } from 'file:///Users/kobayashinanari/Desktop/Nuxt-Netflix-like-app/node_modules/.pnpm/std-env@3.3.1/node_modules/std-env/dist/index.mjs';
import { eventHandler, setHeaders, sendRedirect, defineEventHandler, handleCacheHeaders, createEvent, getRequestHeader, getRequestHeaders, setResponseHeader, createError, sendError, getCookie, assertMethod, readBody, setCookie, createApp, createRouter as createRouter$1, lazyEventHandler, toNodeListener, deleteCookie, getQuery } from 'file:///Users/kobayashinanari/Desktop/Nuxt-Netflix-like-app/node_modules/.pnpm/h3@1.1.0/node_modules/h3/dist/index.mjs';
import { createRenderer } from 'file:///Users/kobayashinanari/Desktop/Nuxt-Netflix-like-app/node_modules/.pnpm/vue-bundle-renderer@1.0.0/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import devalue from 'file:///Users/kobayashinanari/Desktop/Nuxt-Netflix-like-app/node_modules/.pnpm/@nuxt+devalue@2.0.0/node_modules/@nuxt/devalue/dist/devalue.mjs';
import { renderToString } from 'file:///Users/kobayashinanari/Desktop/Nuxt-Netflix-like-app/node_modules/.pnpm/vue@3.2.45/node_modules/vue/server-renderer/index.mjs';
import { withoutBase, parseURL, withQuery, joinURL } from 'file:///Users/kobayashinanari/Desktop/Nuxt-Netflix-like-app/node_modules/.pnpm/ufo@1.0.1/node_modules/ufo/dist/index.mjs';
import destr from 'file:///Users/kobayashinanari/Desktop/Nuxt-Netflix-like-app/node_modules/.pnpm/destr@1.2.2/node_modules/destr/dist/index.mjs';
import { snakeCase } from 'file:///Users/kobayashinanari/Desktop/Nuxt-Netflix-like-app/node_modules/.pnpm/scule@1.0.0/node_modules/scule/dist/index.mjs';
import { createFetch as createFetch$1, Headers } from 'file:///Users/kobayashinanari/Desktop/Nuxt-Netflix-like-app/node_modules/.pnpm/ofetch@1.0.0/node_modules/ofetch/dist/node.mjs';
import { createCall, createFetch } from 'file:///Users/kobayashinanari/Desktop/Nuxt-Netflix-like-app/node_modules/.pnpm/unenv@1.0.3/node_modules/unenv/runtime/fetch/index.mjs';
import { createHooks } from 'file:///Users/kobayashinanari/Desktop/Nuxt-Netflix-like-app/node_modules/.pnpm/hookable@5.4.2/node_modules/hookable/dist/index.mjs';
import { hash } from 'file:///Users/kobayashinanari/Desktop/Nuxt-Netflix-like-app/node_modules/.pnpm/ohash@1.0.0/node_modules/ohash/dist/index.mjs';
import { createStorage } from 'file:///Users/kobayashinanari/Desktop/Nuxt-Netflix-like-app/node_modules/.pnpm/unstorage@1.0.1/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file:///Users/kobayashinanari/Desktop/Nuxt-Netflix-like-app/node_modules/.pnpm/unstorage@1.0.1/node_modules/unstorage/dist/drivers/fs.mjs';
import defu from 'file:///Users/kobayashinanari/Desktop/Nuxt-Netflix-like-app/node_modules/.pnpm/defu@6.1.2/node_modules/defu/dist/defu.mjs';
import { toRouteMatcher, createRouter } from 'file:///Users/kobayashinanari/Desktop/Nuxt-Netflix-like-app/node_modules/.pnpm/radix3@1.0.0/node_modules/radix3/dist/index.mjs';
import pkg from 'file:///Users/kobayashinanari/Desktop/Nuxt-Netflix-like-app/node_modules/.pnpm/@prisma+client@4.10.0_prisma@4.11.0/node_modules/@prisma/client/index.js';
import bcrypt from 'file:///Users/kobayashinanari/Desktop/Nuxt-Netflix-like-app/node_modules/.pnpm/bcrypt@5.1.0/node_modules/bcrypt/bcrypt.js';
import { createTransport, getTestMessageUrl } from 'file:///Users/kobayashinanari/Desktop/Nuxt-Netflix-like-app/node_modules/.pnpm/nodemailer@6.9.1/node_modules/nodemailer/lib/nodemailer.js';
import consola from 'file:///Users/kobayashinanari/Desktop/Nuxt-Netflix-like-app/node_modules/.pnpm/unenv@1.0.3/node_modules/unenv/runtime/npm/consola.mjs';
import jwt from 'file:///Users/kobayashinanari/Desktop/Nuxt-Netflix-like-app/node_modules/.pnpm/jsonwebtoken@9.0.0/node_modules/jsonwebtoken/index.js';

const _runtimeConfig = {"app":{"baseURL":"/","buildAssetsDir":"/_nuxt/","cdnURL":""},"nitro":{"envPrefix":"NUXT_","routeRules":{"/__nuxt_error":{"cache":false}}},"public":{"appDomain":"http://localhost:8081","supabase":{"url":"https://qorinifjfajhbotekiak.supabase.co","key":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFvcmluaWZqZmFqaGJvdGVraWFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTExNzYzMjQsImV4cCI6MjAyNjc1MjMyNH0.r40rqGH3MbSQX3iSw0P1JlniAMnxj4NJRRb2Wrg33Tw","client":{},"redirect":false,"cookies":{"name":"sb","lifetime":28800,"domain":"","path":"/","sameSite":"lax"}}},"mailerUser":"your_email","mailerPass":"your_password","private":{"authSecret":"secret","authExpiration":"1h"},"supabase":{}};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _runtimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const getEnv = (key) => {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
};
function isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function overrideConfig(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey);
    if (isObject(obj[key])) {
      if (isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      overrideConfig(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
}
overrideConfig(_runtimeConfig);
const config$2 = deepFreeze(_runtimeConfig);
const useRuntimeConfig = () => config$2;
function deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }
  return Object.freeze(object);
}

const serverAssets = [{"baseName":"server","dir":"/Users/kobayashinanari/Desktop/Nuxt-Netflix-like-app/server/assets"}];

const assets = createStorage();

for (const asset of serverAssets) {
  assets.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir }));
}

const storage = createStorage({});

const useStorage = () => storage;

storage.mount('/assets', assets);

storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","base":"/Users/kobayashinanari/Desktop/Nuxt-Netflix-like-app","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","base":"/Users/kobayashinanari/Desktop/Nuxt-Netflix-like-app/server","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","base":"/Users/kobayashinanari/Desktop/Nuxt-Netflix-like-app/.nuxt","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","base":"/Users/kobayashinanari/Desktop/Nuxt-Netflix-like-app/.nuxt/cache","ignore":["**/node_modules/**","**/.git/**"]}));

function defineRenderHandler(handler) {
  return eventHandler(async (event) => {
    if (event.node.req.url.endsWith("/favicon.ico")) {
      event.node.res.setHeader("Content-Type", "image/x-icon");
      event.node.res.end(
        "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
      );
      return;
    }
    const response = await handler(event);
    if (!response) {
      if (!event.node.res.writableEnded) {
        event.node.res.statusCode = event.node.res.statusCode === 200 ? 500 : event.node.res.statusCode;
        event.node.res.end(
          "No response returned from render handler: " + event.node.req.url
        );
      }
      return;
    }
    const nitroApp = useNitroApp();
    await nitroApp.hooks.callHook("render:response", response, { event });
    if (!event.node.res.headersSent && response.headers) {
      for (const header in response.headers) {
        event.node.res.setHeader(header, response.headers[header]);
      }
      if (response.statusCode) {
        event.node.res.statusCode = response.statusCode;
      }
      if (response.statusMessage) {
        event.node.res.statusMessage = response.statusMessage;
      }
    }
    return typeof response.body === "string" ? response.body : JSON.stringify(response.body);
  });
}

const config$1 = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config$1.nitro.routeRules })
);
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.node.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(path, useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver, shouldInvalidateCache) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      entry.value = await pending[key];
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry)) {
          useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(key, () => fn(...args), shouldInvalidateCache);
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return key.replace(/[^\dA-Za-z]/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const key = await opts.getKey?.(event);
      if (key) {
        return escapeKey(key);
      }
      const url = event.node.req.originalUrl || event.node.req.url;
      const friendlyName = escapeKey(decodeURI(parseURL(url).pathname)).slice(
        0,
        16
      );
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [opts.integrity, handler]
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const reqProxy = cloneWithProxy(incomingEvent.node.req, { headers: {} });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
      headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || new Date().toUTCString();
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      event.node.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const plugins = [
  
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || event.node.req.url?.endsWith(".json") || event.node.req.url?.includes("/api/");
}
function normalizeError(error) {
  const cwd = process.cwd();
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: statusCode !== 404 ? `<pre>${stack.map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n")}</pre>` : "",
    data: error.data
  };
  event.node.res.statusCode = errorObject.statusCode !== 200 && errorObject.statusCode || 500;
  if (errorObject.statusMessage) {
    event.node.res.statusMessage = errorObject.statusMessage;
  }
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    event.node.res.setHeader("Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await Promise.resolve().then(function () { return errorDev; }) ;
    {
      errorObject.description = errorObject.message;
    }
    event.node.res.setHeader("Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  if (res.status && res.status !== 200) {
    event.node.res.statusCode = res.status;
  }
  if (res.statusText) {
    event.node.res.statusMessage = res.statusText;
  }
  event.node.res.end(await res.text());
});

const isVue3 = true;

const isString = (val) => typeof val === "string";
({
  mounted: isVue3 ? "mounted" : "inserted",
  updated: isVue3 ? "updated" : "componentUpdated",
  unmounted: isVue3 ? "unmounted" : "unbind"
});

const { PrismaClient } = pkg;
const prisma = new PrismaClient();
const prisma$1 = prisma;
function formatUser(user) {
  return {
    id: user.id,
    username: user.username,
    email: user.email,
    role: user.role,
    bio: user.bio,
    avatar: user.avatar,
    cover: user.cover,
    isVerified: user.isVerified,
    isValidated: user.isValidated,
    authToken: user.authToken,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt
  };
}

function buildAssetsURL(...path) {
  return joinURL(publicAssetsURL(), useRuntimeConfig().app.buildAssetsDir, ...path);
}
function publicAssetsURL(...path) {
  const publicBase = useRuntimeConfig().app.cdnURL || useRuntimeConfig().app.baseURL;
  return path.length ? joinURL(publicBase, ...path) : publicBase;
}

const runtimeConfig = useRuntimeConfig();
const defaultTransporter = createTransport({
  host: runtimeConfig.mailerHost,
  port: runtimeConfig.mailerPort,
  secure: runtimeConfig.SMTP_TLS === "yes",
  auth: {
    user: runtimeConfig.mailerUser,
    pass: runtimeConfig.mailerPass
  },
  attachments: null
});
const gmailTransporter = () => {
  return createTransport({
    service: "gmail",
    auth: {
      user: runtimeConfig.mailerUser,
      pass: runtimeConfig.mailerPass
    }
  });
};
const customTransporter = (options) => {
  return createTransport({
    service: options.service,
    host: options.host,
    port: options.port,
    secure: options.secure,
    auth: options.auth,
    attachments: options.attachments
  });
};
const sendMail = async (props) => {
  const options = props.options;
  const requestId = props.requestId;
  const customTrasporter = props.transporter;
  const transporter = () => customTrasporter ?? defaultTransporter;
  return await transporter().sendMail({
    from: `${options.fromName} ${options.fromEmail}`,
    to: options.to,
    cc: options.cc,
    bcc: options.bcc,
    subject: options.subject,
    text: options.text,
    html: options.html,
    attachments: options.attachments
  }).then((info) => {
    if (runtimeConfig.mailerLog === "yes") {
      consola.info(`${requestId} - Mail sent successfully!!`);
      consola.info(`${requestId} - [MailResponse]=${info.response} [MessageID]=${info.messageId}`);
      consola.info(`${requestId} - Nodemailer ethereal URL: ${getTestMessageUrl(
        info
      )}`);
    }
    return info;
  }).catch((err) => {
    consola.error("Error sending email from nuxt-mailer: " + err);
    if (err.message.includes("getaddrinfo ENOTFOUND")) {
      consola.error(`Error Hint: could not connect to host
        NUXT_MAILER_HOST is set to ${runtimeConfig.mailerHost} `);
    }
    return err;
  });
};
const useMailer = () => {
  return {
    sendMail,
    gmailTransporter,
    customTransporter,
    defaultTransporter
  };
};

async function sendGmail(request) {
  const mailService = useMailer();
  const gmailTransporter = mailService.gmailTransporter();
  return await mailService.sendMail({
    requestId: Math.random().toString(36).substring(7),
    options: {
      to: request.to,
      subject: request.subject,
      text: request.template.text,
      html: request.template.html
    },
    transporter: gmailTransporter
  });
}

const newUser = function(username, callbackUrl) {
  const html = `
    <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1"> <!-- So that mobile will display zoomed in -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge"> <!-- enable media queries for Windows phone 8 -->
    <meta name="format-detection" content="telephone=no"> <!-- disable auto telephone linking in iOS -->
    <meta name="format-detection" content="date=no"> <!-- disable auto date linking in iOS -->
    <meta name="format-detection" content="address=no"> <!-- disable auto address linking in iOS -->
    <meta name="format-detection" content="email=no"> <!-- disable auto email linking in iOS -->
    <meta name="color-scheme" content="only">
    <title></title>
    <style type="text/css">
        /*Basics*/
        body {margin:0 !important; padding: 20px 70px !important; display:block !important; -webkit-text-size-adjust:none;}
        table {border-spacing:0; mso-table-lspace:0; mso-table-rspace:0;}
        table td {border-collapse: collapse;mso-line-height-rule:exactly;}
        td img {-ms-interpolation-mode:bicubic; width:auto; height:auto; margin:auto; display:block!important; border:0;}
        td p {margin:0; padding:0;}
        td div {margin:0; padding:0;}
        td a {text-decoration:none; color: inherit;}
        /* iOS black LINKS */
        a[x-apple-data-detectors] {color:inherit !important; text-decoration:none !important; font-size:inherit !important; font-family:inherit !important; font-weight:inherit !important; line-height:inherit !important;}
        /*Gmail black links*/
        u + #body a {color:inherit;text-decoration:none;font-size:inherit;font-family:inherit;font-weight:inherit;line-height:inherit;}
        /*Buttons fix*/
        .ios-footer a {color:#aaaaaa !important;text-decoration:none;}
    </style>
<body>
<table class="mail-header" style="width: 100%; margin-top: 20px;">
    <tr>
        <td class="mail-header__logo" style="width: 100%; text-align: center;">
            <a href="" style="display: inline-block;">
                <img src="cid:logo" alt="Logo" style="width: 100px; height: auto; display: block; margin: 0 auto;">
            </a>
        </td>
    </tr>
    <tr class="mail-header__title" style="width: 100%; margin-top: 40px;">
        <td style="width: 100%; text-align: center;">
            <h1 style="font-size: 24px; line-height: 30px; color: #000000; font-weight: 400; margin: 0; padding: 0;">
                Hi ${username},
            </h1>
        </td>
    </tr>
</table>
<table class="mail-content" style="width: 100%; margin-top: 20px;">
    <tr>
        <td style="width: 100%; text-align: left;">
            <!--<p style="font-size: 16px; line-height: 24px; color: #000000; font-weight: 400; margin: 0; padding: 0;">
                Hi {{username}},
            </p>-->
            <p style="font-size: 16px; line-height: 24px; color: #000000; font-weight: 400; margin: 0; padding: 0;">
                Please verify your email address to complete your registration.
            </p>
        </td>
    </tr>
  <tr>
    <td style="width: 100%; text-align: center; padding: 20px;">
      <p style="font-size: 16px; line-height: 24px; color: #000000; font-weight: 400; margin: 0; padding: 0;">
        Click the button below to verify your email address.
      </p>
    </td>
  </tr>
  <tr style="text-align: center;">
    <td style="width: 100%; text-align: center;">
      <a href="${callbackUrl}" style="display: inline-block; margin-top: 20px; margin-bottom: 20px; padding: 10px 20px; background-color: #000000; color: #ffffff; text-decoration: none; font-size: 16px; line-height: 24px; font-weight: 400; border-radius: 4px;">
        Verify your email
      </a>
    </td>
  </tr>
    <tr>
        <td style="width: 100%; text-align: left; padding-top: 20px">
            <p style="font-size: 16px; line-height: 24px; color: #000000; font-weight: 400; margin: 0; padding: 0;">
                If you did not create an account, please ignore this email.
            </p>
        </td>
    </tr>
</table>
<table class="mail-footer" style="width: 100%;">
  <tr>
    <td style="width: 100%; text-align: center; padding: 35px;">
      <p style="font-size: 16px; line-height: 24px; color: #000000; font-weight: 400; margin: 0; padding: 0;">
        Thanks,
      </p>
      <p style="font-size: 16px; line-height: 24px; color: #000000; font-weight: 400; margin: 0; padding: 0;">
        Vue Template
      </p>
    </td>
  </tr>
  <tr class="utils-links">
    <td style="width: 100%; padding-top: 20px; text-align: center; border-top: 1px solid #000000;">
      <a href="" style="display: inline-block; margin: 0 5px;">
                <span style="font-size: 16px; line-height: 24px; color: #000000; font-weight: 400; margin: 0; padding: 0;">
                    Contact Us
                </span>
      </a>
      <a href="" style="display: inline-block; margin: 0 5px;">
                <span style="font-size: 16px; line-height: 24px; color: #000000; font-weight: 400; margin: 0; padding: 0;">
                    Privacy Policy
                </span>
      </a>
      <a href="" style="display: inline-block; margin: 0 5px;">
                <span style="font-size: 16px; line-height: 24px; color: #000000; font-weight: 400; margin: 0; padding: 0;">
                    Terms of Service
                </span>
      </a>
    </td>
  </tr>
</table>
</body>
</html>`;
  const text = `
        Verify Email, A request to create your ${username} account was received.
        Use this OTP to confirm your account and log in`;
  return {
    html,
    text
  };
};
const newUser$1 = newUser;

const newUser$2 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: newUser$1
});

async function createUser(createUserInput2) {
  const foundUser = await prisma$1.user.findFirst({
    where: {
      OR: [
        {
          username: createUserInput2.username
        },
        {
          email: createUserInput2.email
        }
      ]
    }
  });
  if (foundUser) {
    throw createError({
      statusCode: 400,
      statusMessage: "user_already_exists"
    });
  }
  const password = await bcrypt.hash(createUserInput2.password, 10);
  const user = await prisma$1.user.create({
    data: {
      username: createUserInput2.username,
      email: createUserInput2.email,
      password
    }
  });
  const token = await generateEmailVerificationToken(user.id);
  const appDomain = useRuntimeConfig().public.appDomain;
  const url = `${appDomain}/verify/user?token=${token}`;
  await sendGmail({
    template: newUser$1(user.email, url),
    to: user.email,
    from: useRuntimeConfig().mailerUser,
    subject: "Verify your email"
  });
  return formatUser(user);
}
async function getUserById(userId) {
  const user = await prisma$1.user.findUnique({
    where: {
      id: userId
    }
  });
  if (!user) {
    throw createError({
      statusCode: 404,
      statusMessage: "user_not_found"
    });
  }
  return formatUser(user);
}
async function getUserByLogin(login) {
  const user = await prisma$1.user.findFirst({
    where: {
      OR: [
        {
          username: login
        },
        {
          email: login
        }
      ]
    }
  });
  if (!user) {
    throw createError({
      statusCode: 404,
      statusMessage: "user_not_found"
    });
  }
  return user;
}
async function updateUser(userId, updateUserInput2) {
  const foundUser = await prisma$1.user.findFirst({
    where: {
      OR: [
        {
          username: updateUserInput2.username
        },
        {
          email: updateUserInput2.email
        }
      ]
    }
  });
  if (foundUser && foundUser.id !== userId) {
    throw createError({
      statusCode: 400,
      statusMessage: "username_or_email_already_exists"
    });
  }
  const user = await prisma$1.user.update({
    where: { id: userId },
    data: updateUserInput2
  });
  return formatUser(user);
}

async function setAuthToken(userId) {
  const user = await getUserById(userId);
  const authToken = jwt.sign(
    {
      id: user.id,
      role: user.role,
      username: user.username,
      email: user.email
    },
    useRuntimeConfig().private.authSecret,
    { expiresIn: useRuntimeConfig().private.authExpiration }
  );
  const updatedUser = await prisma$1.user.update({
    where: {
      id: userId
    },
    data: {
      authToken
    }
  });
  return formatUser(updatedUser);
}
async function login(login2, password) {
  const user = await getUserByLogin(login2);
  if (!user)
    throw createError({ statusCode: 404, message: "user_not_found" });
  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (!isPasswordCorrect) {
    throw createError({ statusCode: 401, message: "invalid_password" });
  }
  return await setAuthToken(user.id);
}
async function getUserByAuthToken(authToken) {
  const user = await prisma$1.user.findUnique({
    where: {
      authToken
    }
  });
  if (!user)
    return null;
  return formatUser(user);
}
async function generateEmailVerificationToken(userId) {
  const token = Math.random().toString(36).substr(2);
  await prisma$1.emailVerification.upsert({
    where: {
      userId
    },
    create: {
      userId,
      token
    },
    update: {
      token
    }
  });
  return token;
}
async function getEmailVerificationByToken(token) {
  const emailVerification = await prisma$1.emailVerification.findFirst({
    where: {
      token
    }
  });
  if (!emailVerification)
    return null;
  return emailVerification.userId;
}
async function verifyEmail(userId) {
  const user = await getUserById(userId);
  const updatedUser = await prisma$1.user.update({
    where: {
      id: user.id
    },
    data: {
      isVerified: true
    }
  });
  await prisma$1.emailVerification.delete({
    where: {
      userId: updatedUser.id
    }
  });
  return updatedUser;
}

const _St3dXR = eventHandler(async (event) => {
  const isAllowed = await protectAuthRoute(event);
  if (!isAllowed) {
    return sendError(
      event,
      createError({
        statusCode: 401,
        statusMessage: "unauthorized"
      })
    );
  }
});
async function protectAuthRoute(event) {
  const protectedRoutes = ["/api/admin", "/api/user"];
  if (event.path === void 0 || !protectedRoutes.some((route) => {
    var _a;
    return (_a = event.path) == null ? void 0 : _a.startsWith(route);
  })) {
    return true;
  } else {
    const authToken = getCookie(event, "authToken");
    const hasAuthToken = isString(authToken);
    if (!hasAuthToken)
      return false;
    const user = await getUserByAuthToken(authToken);
    if (!user)
      return false;
  }
  return true;
}

const _6Jbljc = eventHandler(async (event) => {
});

const config = useRuntimeConfig().public;
const _OIQIfX = defineEventHandler(async (event) => {
  assertMethod(event, "POST");
  const body = await readBody(event);
  const cookieOptions = config.supabase.cookies;
  const { event: signEvent, session } = body;
  if (!event) {
    throw new Error("Auth event missing!");
  }
  if (signEvent === "SIGNED_IN" || signEvent === "TOKEN_REFRESHED") {
    if (!session) {
      throw new Error("Auth session missing!");
    }
    setCookie(
      event,
      `${cookieOptions.name}-access-token`,
      session.access_token,
      {
        domain: cookieOptions.domain,
        maxAge: cookieOptions.lifetime ?? 0,
        path: cookieOptions.path,
        sameSite: cookieOptions.sameSite
      }
    );
    setCookie(event, `${cookieOptions.name}-refresh-token`, session.refresh_token, {
      domain: cookieOptions.domain,
      maxAge: cookieOptions.lifetime ?? 0,
      path: cookieOptions.path,
      sameSite: cookieOptions.sameSite
    });
  }
  if (signEvent === "SIGNED_OUT") {
    setCookie(event, `${cookieOptions.name}-access-token`, "", {
      maxAge: -1,
      path: cookieOptions.path
    });
    setCookie(event, `${cookieOptions.name}-refresh-token`, "", {
      maxAge: -1,
      path: cookieOptions.path
    });
  }
  return "auth cookie set";
});

const _lazy_HEFdyt = () => Promise.resolve().then(function () { return _userId__put$1; });
const _lazy_m6RumJ = () => Promise.resolve().then(function () { return _userId__delete$1; });
const _lazy_7bmVs7 = () => Promise.resolve().then(function () { return resetPassword$1; });
const _lazy_9MAZWj = () => Promise.resolve().then(function () { return newUser$2; });
const _lazy_Ywq829 = () => Promise.resolve().then(function () { return baseEmail; });
const _lazy_eLLnyM = () => Promise.resolve().then(function () { return sendMailToSupport_post$1; });
const _lazy_HF0VtX = () => Promise.resolve().then(function () { return sendVerification_post$1; });
const _lazy_OSpI8C = () => Promise.resolve().then(function () { return _email__post$3; });
const _lazy_iPMTcS = () => Promise.resolve().then(function () { return user$1; });
const _lazy_vmtDFG = () => Promise.resolve().then(function () { return signup_post$1; });
const _lazy_aGicEb = () => Promise.resolve().then(function () { return reset_post$1; });
const _lazy_W0xQN9 = () => Promise.resolve().then(function () { return _email__post$1; });
const _lazy_74XsCj = () => Promise.resolve().then(function () { return logout_post$1; });
const _lazy_HBLxr9 = () => Promise.resolve().then(function () { return login_post$1; });
const _lazy_3iwG9e = () => Promise.resolve().then(function () { return users_get$1; });
const _lazy_zF5fCt = () => Promise.resolve().then(function () { return renderer$1; });

const handlers = [
  { route: '', handler: _St3dXR, lazy: false, middleware: true, method: undefined },
  { route: '', handler: _6Jbljc, lazy: false, middleware: true, method: undefined },
  { route: '/api/user/:userId', handler: _lazy_HEFdyt, lazy: true, middleware: false, method: "put" },
  { route: '/api/user/:userId', handler: _lazy_m6RumJ, lazy: true, middleware: false, method: "delete" },
  { route: '/api/mailer/templates/reset-password', handler: _lazy_7bmVs7, lazy: true, middleware: false, method: undefined },
  { route: '/api/mailer/templates/new-user', handler: _lazy_9MAZWj, lazy: true, middleware: false, method: undefined },
  { route: '/api/mailer/templates/baseEmail', handler: _lazy_Ywq829, lazy: true, middleware: false, method: undefined },
  { route: '/api/mailer/sendMailToSupport', handler: _lazy_eLLnyM, lazy: true, middleware: false, method: "post" },
  { route: '/api/auth/verify/sendVerification', handler: _lazy_HF0VtX, lazy: true, middleware: false, method: "post" },
  { route: '/api/auth/verify/:email', handler: _lazy_OSpI8C, lazy: true, middleware: false, method: "post" },
  { route: '/api/auth/user', handler: _lazy_iPMTcS, lazy: true, middleware: false, method: undefined },
  { route: '/api/auth/signup', handler: _lazy_vmtDFG, lazy: true, middleware: false, method: "post" },
  { route: '/api/auth/password/reset', handler: _lazy_aGicEb, lazy: true, middleware: false, method: "post" },
  { route: '/api/auth/password/:email', handler: _lazy_W0xQN9, lazy: true, middleware: false, method: "post" },
  { route: '/api/auth/logout', handler: _lazy_74XsCj, lazy: true, middleware: false, method: "post" },
  { route: '/api/auth/login', handler: _lazy_HBLxr9, lazy: true, middleware: false, method: "post" },
  { route: '/api/admin/users', handler: _lazy_3iwG9e, lazy: true, middleware: false, method: "get" },
  { route: '/__nuxt_error', handler: _lazy_zF5fCt, lazy: true, middleware: false, method: undefined },
  { route: '/api/_supabase/session', handler: _OIQIfX, lazy: false, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_zF5fCt, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(true),
    onError: errorHandler
  });
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const server = new Server(toNodeListener(nitroApp.h3App));
function getAddress() {
  if (provider === "stackblitz" || process.env.NITRO_NO_UNIX_SOCKET) {
    return "0";
  }
  const socketName = `worker-${process.pid}-${threadId}.sock`;
  if (isWindows) {
    return join("\\\\.\\pipe\\nitro", socketName);
  } else {
    const socketDir = join(tmpdir(), "nitro");
    mkdirSync(socketDir, { recursive: true });
    return join(socketDir, socketName);
  }
}
const listenAddress = getAddress();
server.listen(listenAddress, () => {
  const _address = server.address();
  parentPort.postMessage({
    event: "listen",
    address: typeof _address === "string" ? { socketPath: _address } : { host: "localhost", port: _address.port }
  });
});
{
  process.on(
    "unhandledRejection",
    (err) => console.error("[nitro] [dev] [unhandledRejection]", err)
  );
  process.on(
    "uncaughtException",
    (err) => console.error("[nitro] [dev] [uncaughtException]", err)
  );
}

const _messages = {"appName":"Nuxt","version":"","statusCode":500,"statusMessage":"Server error","description":"An error occurred in the application and the page could not be served. If you are the application owner, check your server logs for details.","stack":""};
const _render = function({ messages }) {
var __t, __p = '';
__p += '<!DOCTYPE html><html><head><title>' +
((__t = ( messages.statusCode )) == null ? '' : __t) +
' - ' +
((__t = ( messages.statusMessage )) == null ? '' : __t) +
' | ' +
((__t = ( messages.appName )) == null ? '' : __t) +
'</title><meta charset="utf-8"><meta content="width=device-width,initial-scale=1,minimum-scale=1" name="viewport"><style>.spotlight{background:linear-gradient(45deg, #00DC82 0%, #36E4DA 50%, #0047E1 100%);opacity:0.8;filter:blur(30vh);height:60vh;bottom:-40vh}*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e0e0e0}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p,pre{margin:0}h1{font-size:inherit;font-weight:inherit}pre{font-size:1em;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}.bg-white{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.bg-black\\/5{--tw-bg-opacity:.05;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.rounded-t-md{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.flex{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex}.flex-col{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;-webkit-flex-direction:column;flex-direction:column}.flex-1{-webkit-box-flex:1;-ms-flex:1 1 0%;-webkit-flex:1 1 0%;flex:1 1 0%}.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}.font-medium{font-weight:500}.font-light{font-weight:300}.h-auto{height:auto}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-6xl{font-size:3.75rem;line-height:1}.leading-tight{line-height:1.25}.mb-8{margin-bottom:2rem}.mb-6{margin-bottom:1.5rem}.min-h-screen{min-height:100vh}.overflow-y-auto{overflow-y:auto}.p-8{padding:2rem}.px-10{padding-left:2.5rem;padding-right:2.5rem}.pt-14{padding-top:3.5rem}.fixed{position:fixed}.left-0{left:0px}.right-0{right:0px}.text-black{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.z-10{z-index:10}@media (min-width: 640px){.sm\\:text-8xl{font-size:6rem;line-height:1}.sm\\:text-2xl{font-size:1.5rem;line-height:2rem}}@media (prefers-color-scheme: dark){.dark\\:bg-black{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:bg-white\\/10{--tw-bg-opacity:.1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.dark\\:text-white{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}</style><script>(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll(\'link[rel="modulepreload"]\'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();</script></head><body class="font-sans antialiased bg-white px-10 pt-14 dark:bg-black text-black dark:text-white min-h-screen flex flex-col"><div class="fixed left-0 right-0 spotlight"></div><h1 class="text-6xl sm:text-8xl font-medium mb-6">' +
((__t = ( messages.statusCode )) == null ? '' : __t) +
'</h1><p class="text-xl sm:text-2xl font-light mb-8 leading-tight">' +
((__t = ( messages.description )) == null ? '' : __t) +
'</p><div class="bg-white rounded-t-md bg-black/5 dark:bg-white/10 flex-1 overflow-y-auto h-auto"><pre class="text-xl font-light leading-tight z-10 p-8">' +
((__t = ( messages.stack )) == null ? '' : __t) +
'</pre></div></body></html>';
return __p
};
const _template = (messages) => _render({ messages: { ..._messages, ...messages } });
const template = _template;

const errorDev = /*#__PURE__*/Object.freeze({
  __proto__: null,
  template: template
});

const _userId__put = eventHandler(async (event) => {
  const userId = parseInt(event.context.params.userId);
  const updateUserInput = await readBody(event);
  return await updateUser(userId, updateUserInput);
});

const _userId__put$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _userId__put
});

const _userId__delete = eventHandler(async (event) => {
});

const _userId__delete$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _userId__delete
});

const resetPassword = function(username, callbackUrl) {
  const html = `
    <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
    <!--[if (gte mso 9)|(IE)]>
    <xml>
        <o:OfficeDocumentSettings>
            <o:AllowPNG/>
            <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1"> <!-- So that mobile will display zoomed in -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge"> <!-- enable media queries for Windows phone 8 -->
    <meta name="format-detection" content="telephone=no"> <!-- disable auto telephone linking in iOS -->
    <meta name="format-detection" content="date=no"> <!-- disable auto date linking in iOS -->
    <meta name="format-detection" content="address=no"> <!-- disable auto address linking in iOS -->
    <meta name="format-detection" content="email=no"> <!-- disable auto email linking in iOS -->
    <meta name="color-scheme" content="only">
    <title></title>
    <style type="text/css">
        /*Basics*/
        body {margin:0 !important; padding: 20px 70px !important; display:block !important; -webkit-text-size-adjust:none;}
        table {border-spacing:0; mso-table-lspace:0; mso-table-rspace:0;}
        table td {border-collapse: collapse;mso-line-height-rule:exactly;}
        td img {-ms-interpolation-mode:bicubic; width:auto; height:auto; margin:auto; display:block!important; border:0;}
        td p {margin:0; padding:0;}
        td div {margin:0; padding:0;}
        td a {text-decoration:none; color: inherit;}
        /* iOS black LINKS */
        a[x-apple-data-detectors] {color:inherit !important; text-decoration:none !important; font-size:inherit !important; font-family:inherit !important; font-weight:inherit !important; line-height:inherit !important;}
        /*Gmail black links*/
        u + #body a {color:inherit;text-decoration:none;font-size:inherit;font-family:inherit;font-weight:inherit;line-height:inherit;}
        /*Buttons fix*/
        .ios-footer a {color:#aaaaaa !important;text-decoration:none;}
    </style>
<body>
<table class="mail-header" style="width: 100%; margin-top: 20px;">
    <tr>
        <td class="mail-header__logo" style="width: 100%; text-align: center;">
            <a href="" style="display: inline-block;">
                <img src="cid:logo" alt="Logo" style="width: 100px; height: auto; display: block; margin: 0 auto;">
            </a>
        </td>
    </tr>
    <tr class="mail-header__title" style="width: 100%; margin-top: 40px;">
        <td style="width: 100%; text-align: center;">
            <h1 style="font-size: 24px; line-height: 30px; color: #000000; font-weight: 400; margin: 0; padding: 0;">
                Hi ${username},
            </h1>
        </td>
    </tr>
</table>
<table class="mail-content" style="width: 100%; margin-top: 20px;">
    <tr>
        <td style="width: 100%; text-align: left;">
            <p style="font-size: 16px; line-height: 24px; color: #000000; font-weight: 400; margin: 0; padding: 0;">
                A request to reset your password has been made. If you did not make this request, please ignore this email.
            </p>
        </td>
    </tr>
    <tr>
        <td style="width: 100%; text-align: left; padding-top: 20px">
            <p style="font-size: 16px; line-height: 24px; color: #000000; font-weight: 400; margin: 0; padding: 0;">
                To reset your password, please click the button below.
            </p>
        </td>
    </tr>
    <tr>
        <td style="width: 100%; text-align: center;">
            <a href="${callbackUrl}" style="display: inline-block; margin-top: 20px; margin-bottom: 20px; padding: 10px 20px; background-color: #000000; color: #ffffff; text-decoration: none; font-size: 16px; line-height: 24px; font-weight: 400; border-radius: 4px;">
                Reset Password
            </a>
        </td>
    </tr>
</table>
<table class="mail-footer" style="width: 100%;">
  <tr>
    <td style="width: 100%; text-align: center; padding: 35px;">
      <p style="font-size: 16px; line-height: 24px; color: #000000; font-weight: 400; margin: 0; padding: 0;">
        Thanks,
      </p>
      <p style="font-size: 16px; line-height: 24px; color: #000000; font-weight: 400; margin: 0; padding: 0;">
        Vue Template
      </p>
    </td>
  </tr>
  <tr class="utils-links">
    <td style="width: 100%; padding-top: 20px; text-align: center; border-top: 1px solid #000000;">
      <a href="" style="display: inline-block; margin: 0 5px;">
                <span style="font-size: 16px; line-height: 24px; color: #000000; font-weight: 400; margin: 0; padding: 0;">
                    Contact Us
                </span>
      </a>
      <a href="" style="display: inline-block; margin: 0 5px;">
                <span style="font-size: 16px; line-height: 24px; color: #000000; font-weight: 400; margin: 0; padding: 0;">
                    Privacy Policy
                </span>
      </a>
      <a href="" style="display: inline-block; margin: 0 5px;">
                <span style="font-size: 16px; line-height: 24px; color: #000000; font-weight: 400; margin: 0; padding: 0;">
                    Terms of Service
                </span>
      </a>
    </td>
  </tr>
</table>
</body>
</html>`;
  const text = `
        Verify Email, A request to create your ${username} account was received.
        Use this OTP to confirm your account and log in`;
  return {
    html,
    text
  };
};

const resetPassword$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: resetPassword
});

const baseEmailTemplate = function(subject, from, message, fullname, phone) {
  const html = `
    <!DOCTYPE html>
    <html lang="en" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

    <head>
      <meta charset="utf-8">
      <meta name="x-apple-disable-message-reformatting">
      <meta http-equiv="x-ua-compatible" content="ie=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="format-detection" content="telephone=no, date=no, address=no, email=no">
      <title>New message from ${fullname}</title>
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700"
        rel="stylesheet" media="screen">
      <style>
        .hover-underline:hover {
          text-decoration: underline !important;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes ping {

          75%,
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        @keyframes pulse {
          50% {
            opacity: .5;
          }
        }

        @keyframes bounce {

          0%,
          100% {
            transform: translateY(-25%);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }

          50% {
            transform: none;
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
        }

        @media (max-width: 600px) {
          .sm-px-24 {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }

          .sm-py-32 {
            padding-top: 32px !important;
            padding-bottom: 32px !important;
          }

          .sm-w-full {
            width: 100% !important;
          }
        }
      </style>
    </head>

    <body
      style="margin: 0; padding: 0; width: 100%; word-break: break-word; -webkit-font-smoothing: antialiased; --bg-opacity: 1; background-color: #eceff1;">
      <div style="display: none;">You have a new message from ${fullname}</div>
      <p>
        User: ${fullname}<br>
        Phone: ${phone}<br>
        Email: ${from}
      </p>
      <div role="article" aria-roledescription="email" aria-label="Reset your Password" lang="en">
        <table style="font-family: Montserrat, -apple-system, 'Segoe UI', sans-serif; width: 100%;" width="100%"
          cellpadding="0" cellspacing="0" role="presentation">
          <tr>
            <td align="center"
              style="--bg-opacity: 1; background-color: #eceff1; font-family: Montserrat, -apple-system, 'Segoe UI', sans-serif;">
              <table class="sm-w-full" style="font-family: 'Montserrat',Arial,sans-serif; width: 600px;" width="600"
                cellpadding="0" cellspacing="0" role="presentation">
                <tr>
                  <td class="sm-py-32 sm-px-24"
                    style="font-family: Montserrat, -apple-system, 'Segoe UI', sans-serif; padding: 48px; text-align: center;"
                    align="center">
                    <a href=""
                        style="border: 0; max-width: 100%; line-height: 100%; vertical-align: middle;">
                    </a>
                  </td>
                </tr>
                <tr>
                  <td align="center" class="sm-px-24" style="font-family: 'Montserrat',Arial,sans-serif;">
                    <table style="font-family: 'Montserrat',Arial,sans-serif; width: 100%;" width="100%" cellpadding="0"
                      cellspacing="0" role="presentation">
                      <tr>
                        <td class="sm-px-24"
                          style="--bg-opacity: 1; background-color: #ffffff;  border-radius: 4px; font-family: Montserrat, -apple-system, 'Segoe UI', sans-serif; font-size: 14px; line-height: 24px; padding: 48px; text-align: left; --text-opacity: 1; color: #626262;"
                           align="left">
                          <p style="font-weight: 600; font-size: 18px; margin-bottom: 0;">${subject}</p>
                          <p style="font-weight: 400; font-size: 18px; margin-top: 0;">${message}</p>
                          <table style="font-family: 'Montserrat',Arial,sans-serif; width: 100%;" width="100%"
                            cellpadding="0" cellspacing="0" role="presentation">
                            <tr>
                              <td
                                style="font-family: 'Montserrat',Arial,sans-serif; padding-top: 32px; padding-bottom: 32px;">
                                <div
                                  style="--bg-opacity: 1; background-color: #eceff1; height: 1px; line-height: 1px;">
                                  &zwnj;</div>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td style="font-family: 'Montserrat',Arial,sans-serif; height: 20px;" height="20"></td>
                      </tr>
                      <tr>
                        <td style="font-family: 'Montserrat',Arial,sans-serif; height: 16px;" height="16"></td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </div>
    </body>
    </html>`;
  const text = `
        Verify Email, A request to create your ${fullname} account was received.
        Use this OTP to confirm your account and log in`;
  return {
    html,
    text
  };
};
const baseEmailTemplate$1 = baseEmailTemplate;

const baseEmail = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: baseEmailTemplate$1
});

const sendMailToSupport_post = eventHandler(async (event) => {
  const body = await readBody(event);
  const { email, subject, message, phone, fullname } = body;
  const template = baseEmailTemplate$1(subject, email, message, fullname, phone);
  await sendGmail({
    template,
    to: "hrichard206@gmail.com",
    from: email,
    subject: "New message from " + fullname
  });
  return { statusCode: 200, body: { message: "Email sent" } };
});

const sendMailToSupport_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: sendMailToSupport_post
});

const sendVerification_post = eventHandler(async (event) => {
  const body = await readBody(event);
  const user = await getUserByLogin(body.email);
  if (!user) {
    throw createError({
      statusCode: 400,
      statusMessage: "user_not_found"
    });
  }
  const token = await generateEmailVerificationToken(user.id);
  const appDomain = useRuntimeConfig().public.appDomain;
  const url = `${appDomain}/verify/user?token=${token}`;
  await sendGmail({
    template: newUser$1(user.email, url),
    to: user.email,
    from: useRuntimeConfig().mailerUser,
    subject: "Verify your email"
  });
  return { statusCode: 200, body: { message: "email_sent" } };
});

const sendVerification_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: sendVerification_post
});

const _email__post$2 = eventHandler(async (event) => {
  const body = await readBody(event);
  const token = body.token;
  const userId = await getEmailVerificationByToken(token);
  if (!userId) {
    throw createError({
      statusCode: 400,
      statusMessage: "invalid_code"
    });
  }
  await verifyEmail(userId);
  return { statusCode: 200, body: { message: "email_verified" } };
});

const _email__post$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _email__post$2
});

const user = eventHandler(async (event) => {
  const authToken = getCookie(event, "authToken");
  const hasAuthToken = isString(authToken);
  if (!hasAuthToken)
    return null;
  const user = await getUserByAuthToken(authToken);
  if (!user)
    return null;
  return user;
});

const user$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: user
});

const signup_post = eventHandler(async (event) => {
  const body = await readBody(event);
  const createUserInput2 = {
    username: body.username,
    password: body.password,
    email: body.email
  };
  return await createUser(createUserInput2);
});

const signup_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: signup_post
});

const reset_post = eventHandler(async (event) => {
});

const reset_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: reset_post
});

const _email__post = eventHandler(async (event) => {
});

const _email__post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _email__post
});

const logout_post = eventHandler(async (event) => {
  deleteCookie(event, "authToken");
});

const logout_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: logout_post
});

const login_post = eventHandler(async (event) => {
  const body = await readBody(event);
  const user = await login(body.login, body.password);
  setCookie(event, "authToken", user.authToken, {
    httpOnly: true,
    path: "/",
    maxAge: 1e3 * 60 * 60 * 24 * 7
  });
  return user;
});

const login_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: login_post
});

const users_get = eventHandler(async () => {
});

const users_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: users_get
});

const appRootId = "__nuxt";

const appRootTag = "div";

globalThis.__buildAssetsURL = buildAssetsURL;
globalThis.__publicAssetsURL = publicAssetsURL;
const getClientManifest = () => import('/Users/kobayashinanari/Desktop/Nuxt-Netflix-like-app/.nuxt/dist/server/client.manifest.mjs').then((r) => r.default || r).then((r) => typeof r === "function" ? r() : r);
const getStaticRenderedHead = () => Promise.resolve().then(function () { return _virtual__headStatic$1; }).then((r) => r.default || r);
const getServerEntry = () => import('/Users/kobayashinanari/Desktop/Nuxt-Netflix-like-app/.nuxt/dist/server/server.mjs').then((r) => r.default || r);
const getSSRRenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  if (!manifest) {
    throw new Error("client.manifest is not available");
  }
  const createSSRApp = await getServerEntry();
  if (!createSSRApp) {
    throw new Error("Server bundle is not available");
  }
  const options = {
    manifest,
    renderToString: renderToString$1,
    buildAssetsURL
  };
  const renderer = createRenderer(createSSRApp, options);
  async function renderToString$1(input, context) {
    const html = await renderToString(input, context);
    if (process.env.NUXT_VITE_NODE_OPTIONS) {
      renderer.rendererContext.updateManifest(await getClientManifest());
    }
    return `<${appRootTag} id="${appRootId}">${html}</${appRootTag}>`;
  }
  return renderer;
});
const getSPARenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  const options = {
    manifest,
    renderToString: () => `<${appRootTag} id="${appRootId}"></${appRootTag}>`,
    buildAssetsURL
  };
  const renderer = createRenderer(() => () => {
  }, options);
  const result = await renderer.renderToString({});
  const renderToString = (ssrContext) => {
    const config = useRuntimeConfig();
    ssrContext.payload = {
      serverRendered: false,
      config: {
        public: config.public,
        app: config.app
      },
      data: {},
      state: {}
    };
    ssrContext.renderMeta = ssrContext.renderMeta ?? getStaticRenderedHead;
    return Promise.resolve(result);
  };
  return {
    rendererContext: renderer.rendererContext,
    renderToString
  };
});
const PAYLOAD_URL_RE = /\/_payload(\.[a-zA-Z0-9]+)?.js(\?.*)?$/;
const renderer = defineRenderHandler(async (event) => {
  const nitroApp = useNitroApp();
  const ssrError = event.node.req.url?.startsWith("/__nuxt_error") ? getQuery(event) : null;
  if (ssrError && event.node.req.socket.readyState !== "readOnly") {
    throw createError("Cannot directly render error page!");
  }
  const islandContext = void 0;
  let url = ssrError?.url || islandContext?.url || event.node.req.url;
  const isRenderingPayload = PAYLOAD_URL_RE.test(url);
  if (isRenderingPayload) {
    url = url.substring(0, url.lastIndexOf("/")) || "/";
    event.node.req.url = url;
  }
  const routeOptions = getRouteRules(event);
  const ssrContext = {
    url,
    event,
    runtimeConfig: useRuntimeConfig(),
    noSSR: !!event.node.req.headers["x-nuxt-no-ssr"] || routeOptions.ssr === false || (false),
    error: !!ssrError,
    nuxt: void 0,
    /* NuxtApp */
    payload: ssrError ? { error: ssrError } : {},
    islandContext
  };
  const renderer = ssrContext.noSSR ? await getSPARenderer() : await getSSRRenderer();
  const _rendered = await renderer.renderToString(ssrContext).catch((error) => {
    throw !ssrError && ssrContext.payload?.error || error;
  });
  await ssrContext.nuxt?.hooks.callHook("app:rendered", { ssrContext });
  if (ssrContext.payload?.error && !ssrError) {
    throw ssrContext.payload.error;
  }
  if (isRenderingPayload) {
    const response2 = renderPayloadResponse(ssrContext);
    return response2;
  }
  const renderedMeta = await ssrContext.renderMeta?.() ?? {};
  const inlinedStyles = "";
  const htmlContext = {
    island: Boolean(islandContext),
    htmlAttrs: normalizeChunks([renderedMeta.htmlAttrs]),
    head: normalizeChunks([
      renderedMeta.headTags,
      null,
      _rendered.renderResourceHints(),
      _rendered.renderStyles(),
      inlinedStyles,
      ssrContext.styles
    ]),
    bodyAttrs: normalizeChunks([renderedMeta.bodyAttrs]),
    bodyPrepend: normalizeChunks([
      renderedMeta.bodyScriptsPrepend,
      ssrContext.teleports?.body
    ]),
    body: [_rendered.html],
    bodyAppend: normalizeChunks([
      `<script>window.__NUXT__=${devalue(ssrContext.payload)}<\/script>`,
      _rendered.renderScripts(),
      // Note: bodyScripts may contain tags other than <script>
      renderedMeta.bodyScripts
    ])
  };
  await nitroApp.hooks.callHook("render:html", htmlContext, { event });
  const response = {
    body: renderHTMLDocument(htmlContext),
    statusCode: event.node.res.statusCode,
    statusMessage: event.node.res.statusMessage,
    headers: {
      "content-type": "text/html;charset=utf-8",
      "x-powered-by": "Nuxt"
    }
  };
  return response;
});
function lazyCachedFunction(fn) {
  let res = null;
  return () => {
    if (res === null) {
      res = fn().catch((err) => {
        res = null;
        throw err;
      });
    }
    return res;
  };
}
function normalizeChunks(chunks) {
  return chunks.filter(Boolean).map((i) => i.trim());
}
function joinTags(tags) {
  return tags.join("");
}
function joinAttrs(chunks) {
  return chunks.join(" ");
}
function renderHTMLDocument(html) {
  return `<!DOCTYPE html>
<html ${joinAttrs(html.htmlAttrs)}>
<head>${joinTags(html.head)}</head>
<body ${joinAttrs(html.bodyAttrs)}>${joinTags(html.bodyPrepend)}${joinTags(html.body)}${joinTags(html.bodyAppend)}</body>
</html>`;
}
function renderPayloadResponse(ssrContext) {
  return {
    body: `export default ${devalue(splitPayload(ssrContext).payload)}`,
    statusCode: ssrContext.event.node.res.statusCode,
    statusMessage: ssrContext.event.node.res.statusMessage,
    headers: {
      "content-type": "text/javascript;charset=UTF-8",
      "x-powered-by": "Nuxt"
    }
  };
}
function splitPayload(ssrContext) {
  const { data, prerenderedAt, ...initial } = ssrContext.payload;
  return {
    initial: { ...initial, prerenderedAt },
    payload: { data, prerenderedAt }
  };
}

const renderer$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: renderer
});

const _virtual__headStatic = {"headTags":"<meta charset=\"utf-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">","bodyTags":"","bodyTagsOpen":"","htmlAttrs":"","bodyAttrs":""};

const _virtual__headStatic$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _virtual__headStatic
});
//# sourceMappingURL=index.mjs.map
