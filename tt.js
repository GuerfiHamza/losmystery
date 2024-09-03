(function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
        r(i);
    new MutationObserver((i) => {
        for (const l of i)
            if (l.type === "childList")
                for (const o of l.addedNodes)
                    o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
    }).observe(document, { childList: !0, subtree: !0 });
    function n(i) {
        const l = {};
        return (
            i.integrity && (l.integrity = i.integrity),
            i.referrerPolicy && (l.referrerPolicy = i.referrerPolicy),
            i.crossOrigin === "use-credentials"
                ? (l.credentials = "include")
                : i.crossOrigin === "anonymous"
                ? (l.credentials = "omit")
                : (l.credentials = "same-origin"),
            l
        );
    }
    function r(i) {
        if (i.ep) return;
        i.ep = !0;
        const l = n(i);
        fetch(i.href, l);
    }
})();
var ma =
    typeof globalThis < "u"
        ? globalThis
        : typeof window < "u"
        ? window
        : typeof global < "u"
        ? global
        : typeof self < "u"
        ? self
        : {};
function Nc(e) {
    return e &&
        e.__esModule &&
        Object.prototype.hasOwnProperty.call(e, "default")
        ? e.default
        : e;
}
var zc = { exports: {} },
    no = {},
    Mc = { exports: {} },
    K = {};

var zi = Symbol.for("react.element"),
    qd = Symbol.for("react.portal"),
    bd = Symbol.for("react.fragment"),
    ep = Symbol.for("react.strict_mode"),
    tp = Symbol.for("react.profiler"),
    np = Symbol.for("react.provider"),
    rp = Symbol.for("react.context"),
    ip = Symbol.for("react.forward_ref"),
    lp = Symbol.for("react.suspense"),
    op = Symbol.for("react.memo"),
    up = Symbol.for("react.lazy"),
    va = Symbol.iterator;
function sp(e) {
    return e === null || typeof e != "object"
        ? null
        : ((e = (va && e[va]) || e["@@iterator"]),
          typeof e == "function" ? e : null);
}
var Lc = {
        isMounted: function () {
            return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
    },
    Ic = Object.assign,
    Fc = {};
function Or(e, t, n) {
    (this.props = e),
        (this.context = t),
        (this.refs = Fc),
        (this.updater = n || Lc);
}
Or.prototype.isReactComponent = {};
Or.prototype.setState = function (e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error(
            "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
    this.updater.enqueueSetState(this, e, t, "setState");
};
Or.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ac() {}
Ac.prototype = Or.prototype;
function ms(e, t, n) {
    (this.props = e),
        (this.context = t),
        (this.refs = Fc),
        (this.updater = n || Lc);
}
var vs = (ms.prototype = new Ac());
vs.constructor = ms;
Ic(vs, Or.prototype);
vs.isPureReactComponent = !0;
var ga = Array.isArray,
    Rc = Object.prototype.hasOwnProperty,
    gs = { current: null },
    Dc = { key: !0, ref: !0, __self: !0, __source: !0 };
function $c(e, t, n) {
    var r,
        i = {},
        l = null,
        o = null;
    if (t != null)
        for (r in (t.ref !== void 0 && (o = t.ref),
        t.key !== void 0 && (l = "" + t.key),
        t))
            Rc.call(t, r) && !Dc.hasOwnProperty(r) && (i[r] = t[r]);
    var u = arguments.length - 2;
    if (u === 1) i.children = n;
    else if (1 < u) {
        for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
        i.children = s;
    }
    if (e && e.defaultProps)
        for (r in ((u = e.defaultProps), u)) i[r] === void 0 && (i[r] = u[r]);
    return {
        $$typeof: zi,
        type: e,
        key: l,
        ref: o,
        props: i,
        _owner: gs.current,
    };
}
function ap(e, t) {
    return {
        $$typeof: zi,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner,
    };
}
function ys(e) {
    return typeof e == "object" && e !== null && e.$$typeof === zi;
}
function cp(e) {
    var t = { "=": "=0", ":": "=2" };
    return (
        "$" +
        e.replace(/[=:]/g, function (n) {
            return t[n];
        })
    );
}
var ya = /\/+/g;
function Vo(e, t) {
    return typeof e == "object" && e !== null && e.key != null
        ? cp("" + e.key)
        : t.toString(36);
}
function yl(e, t, n, r, i) {
    var l = typeof e;
    (l === "undefined" || l === "boolean") && (e = null);
    var o = !1;
    if (e === null) o = !0;
    else
        switch (l) {
            case "string":
            case "number":
                o = !0;
                break;
            case "object":
                switch (e.$$typeof) {
                    case zi:
                    case qd:
                        o = !0;
                }
        }
    if (o)
        return (
            (o = e),
            (i = i(o)),
            (e = r === "" ? "." + Vo(o, 0) : r),
            ga(i)
                ? ((n = ""),
                  e != null && (n = e.replace(ya, "$&/") + "/"),
                  yl(i, t, n, "", function (c) {
                      return c;
                  }))
                : i != null &&
                  (ys(i) &&
                      (i = ap(
                          i,
                          n +
                              (!i.key || (o && o.key === i.key)
                                  ? ""
                                  : ("" + i.key).replace(ya, "$&/") + "/") +
                              e
                      )),
                  t.push(i)),
            1
        );
    if (((o = 0), (r = r === "" ? "." : r + ":"), ga(e)))
        for (var u = 0; u < e.length; u++) {
            l = e[u];
            var s = r + Vo(l, u);
            o += yl(l, t, n, s, i);
        }
    else if (((s = sp(e)), typeof s == "function"))
        for (e = s.call(e), u = 0; !(l = e.next()).done; )
            (l = l.value), (s = r + Vo(l, u++)), (o += yl(l, t, n, s, i));
    else if (l === "object")
        throw (
            ((t = String(e)),
            Error(
                "Objects are not valid as a React child (found: " +
                    (t === "[object Object]"
                        ? "object with keys {" + Object.keys(e).join(", ") + "}"
                        : t) +
                    "). If you meant to render a collection of children, use an array instead."
            ))
        );
    return o;
}
function el(e, t, n) {
    if (e == null) return e;
    var r = [],
        i = 0;
    return (
        yl(e, r, "", "", function (l) {
            return t.call(n, l, i++);
        }),
        r
    );
}
function fp(e) {
    if (e._status === -1) {
        var t = e._result;
        (t = t()),
            t.then(
                function (n) {
                    (e._status === 0 || e._status === -1) &&
                        ((e._status = 1), (e._result = n));
                },
                function (n) {
                    (e._status === 0 || e._status === -1) &&
                        ((e._status = 2), (e._result = n));
                }
            ),
            e._status === -1 && ((e._status = 0), (e._result = t));
    }
    if (e._status === 1) return e._result.default;
    throw e._result;
}
var Ue = { current: null },
    wl = { transition: null },
    dp = {
        ReactCurrentDispatcher: Ue,
        ReactCurrentBatchConfig: wl,
        ReactCurrentOwner: gs,
    };
function Uc() {
    throw Error("act(...) is not supported in production builds of React.");
}
K.Children = {
    map: el,
    forEach: function (e, t, n) {
        el(
            e,
            function () {
                t.apply(this, arguments);
            },
            n
        );
    },
    count: function (e) {
        var t = 0;
        return (
            el(e, function () {
                t++;
            }),
            t
        );
    },
    toArray: function (e) {
        return (
            el(e, function (t) {
                return t;
            }) || []
        );
    },
    only: function (e) {
        if (!ys(e))
            throw Error(
                "React.Children.only expected to receive a single React element child."
            );
        return e;
    },
};
K.Component = Or;
K.Fragment = bd;
K.Profiler = tp;
K.PureComponent = ms;
K.StrictMode = ep;
K.Suspense = lp;
K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = dp;
K.act = Uc;
K.cloneElement = function (e, t, n) {
    if (e == null)
        throw Error(
            "React.cloneElement(...): The argument must be a React element, but you passed " +
                e +
                "."
        );
    var r = Ic({}, e.props),
        i = e.key,
        l = e.ref,
        o = e._owner;
    if (t != null) {
        if (
            (t.ref !== void 0 && ((l = t.ref), (o = gs.current)),
            t.key !== void 0 && (i = "" + t.key),
            e.type && e.type.defaultProps)
        )
            var u = e.type.defaultProps;
        for (s in t)
            Rc.call(t, s) &&
                !Dc.hasOwnProperty(s) &&
                (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
    }
    var s = arguments.length - 2;
    if (s === 1) r.children = n;
    else if (1 < s) {
        u = Array(s);
        for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
        r.children = u;
    }
    return { $$typeof: zi, type: e.type, key: i, ref: l, props: r, _owner: o };
};
K.createContext = function (e) {
    return (
        (e = {
            $$typeof: rp,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null,
        }),
        (e.Provider = { $$typeof: np, _context: e }),
        (e.Consumer = e)
    );
};
K.createElement = $c;
K.createFactory = function (e) {
    var t = $c.bind(null, e);
    return (t.type = e), t;
};
K.createRef = function () {
    return { current: null };
};
K.forwardRef = function (e) {
    return { $$typeof: ip, render: e };
};
K.isValidElement = ys;
K.lazy = function (e) {
    return { $$typeof: up, _payload: { _status: -1, _result: e }, _init: fp };
};
K.memo = function (e, t) {
    return { $$typeof: op, type: e, compare: t === void 0 ? null : t };
};
K.startTransition = function (e) {
    var t = wl.transition;
    wl.transition = {};
    try {
        e();
    } finally {
        wl.transition = t;
    }
};
K.unstable_act = Uc;
K.useCallback = function (e, t) {
    return Ue.current.useCallback(e, t);
};
K.useContext = function (e) {
    return Ue.current.useContext(e);
};
K.useDebugValue = function () {};
K.useDeferredValue = function (e) {
    return Ue.current.useDeferredValue(e);
};
K.useEffect = function (e, t) {
    return Ue.current.useEffect(e, t);
};
K.useId = function () {
    return Ue.current.useId();
};
K.useImperativeHandle = function (e, t, n) {
    return Ue.current.useImperativeHandle(e, t, n);
};
K.useInsertionEffect = function (e, t) {
    return Ue.current.useInsertionEffect(e, t);
};
K.useLayoutEffect = function (e, t) {
    return Ue.current.useLayoutEffect(e, t);
};
K.useMemo = function (e, t) {
    return Ue.current.useMemo(e, t);
};
K.useReducer = function (e, t, n) {
    return Ue.current.useReducer(e, t, n);
};
K.useRef = function (e) {
    return Ue.current.useRef(e);
};
K.useState = function (e) {
    return Ue.current.useState(e);
};
K.useSyncExternalStore = function (e, t, n) {
    return Ue.current.useSyncExternalStore(e, t, n);
};
K.useTransition = function () {
    return Ue.current.useTransition();
};
K.version = "18.3.1";
Mc.exports = K;
var U = Mc.exports;
const Rn = Nc(U);

var pp = U,
    hp = Symbol.for("react.element"),
    mp = Symbol.for("react.fragment"),
    vp = Object.prototype.hasOwnProperty,
    gp =
        pp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    yp = { key: !0, ref: !0, __self: !0, __source: !0 };
function Hc(e, t, n) {
    var r,
        i = {},
        l = null,
        o = null;
    n !== void 0 && (l = "" + n),
        t.key !== void 0 && (l = "" + t.key),
        t.ref !== void 0 && (o = t.ref);
    for (r in t) vp.call(t, r) && !yp.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
        for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
    return {
        $$typeof: hp,
        type: e,
        key: l,
        ref: o,
        props: i,
        _owner: gp.current,
    };
}
no.Fragment = mp;
no.jsx = Hc;
no.jsxs = Hc;
zc.exports = no;
var S = zc.exports,
    vu = {},
    Bc = { exports: {} },
    it = {},
    Wc = { exports: {} },
    Vc = {};
(function (e) {
    function t(L, B) {
        var V = L.length;
        L.push(B);
        e: for (; 0 < V; ) {
            var ie = (V - 1) >>> 1,
                ve = L[ie];
            if (0 < i(ve, B)) (L[ie] = B), (L[V] = ve), (V = ie);
            else break e;
        }
    }
    function n(L) {
        return L.length === 0 ? null : L[0];
    }
    function r(L) {
        if (L.length === 0) return null;
        var B = L[0],
            V = L.pop();
        if (V !== B) {
            L[0] = V;
            e: for (var ie = 0, ve = L.length, bt = ve >>> 1; ie < bt; ) {
                var mt = 2 * (ie + 1) - 1,
                    jn = L[mt],
                    vt = mt + 1,
                    X = L[vt];
                if (0 > i(jn, V))
                    vt < ve && 0 > i(X, jn)
                        ? ((L[ie] = X), (L[vt] = V), (ie = vt))
                        : ((L[ie] = jn), (L[mt] = V), (ie = mt));
                else if (vt < ve && 0 > i(X, V))
                    (L[ie] = X), (L[vt] = V), (ie = vt);
                else break e;
            }
        }
        return B;
    }
    function i(L, B) {
        var V = L.sortIndex - B.sortIndex;
        return V !== 0 ? V : L.id - B.id;
    }
    if (
        typeof performance == "object" &&
        typeof performance.now == "function"
    ) {
        var l = performance;
        e.unstable_now = function () {
            return l.now();
        };
    } else {
        var o = Date,
            u = o.now();
        e.unstable_now = function () {
            return o.now() - u;
        };
    }
    var s = [],
        c = [],
        m = 1,
        p = null,
        d = 3,
        k = !1,
        j = !1,
        P = !1,
        D = typeof setTimeout == "function" ? setTimeout : null,
        g = typeof clearTimeout == "function" ? clearTimeout : null,
        h = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" &&
        navigator.scheduling !== void 0 &&
        navigator.scheduling.isInputPending !== void 0 &&
        navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function v(L) {
        for (var B = n(c); B !== null; ) {
            if (B.callback === null) r(c);
            else if (B.startTime <= L)
                r(c), (B.sortIndex = B.expirationTime), t(s, B);
            else break;
            B = n(c);
        }
    }
    function C(L) {
        if (((P = !1), v(L), !j))
            if (n(s) !== null) (j = !0), Pt(T);
            else {
                var B = n(c);
                B !== null && En(C, B.startTime - L);
            }
    }
    function T(L, B) {
        (j = !1), P && ((P = !1), g(I), (I = -1)), (k = !0);
        var V = d;
        try {
            for (
                v(B), p = n(s);
                p !== null && (!(p.expirationTime > B) || (L && !de()));

            ) {
                var ie = p.callback;
                if (typeof ie == "function") {
                    (p.callback = null), (d = p.priorityLevel);
                    var ve = ie(p.expirationTime <= B);
                    (B = e.unstable_now()),
                        typeof ve == "function"
                            ? (p.callback = ve)
                            : p === n(s) && r(s),
                        v(B);
                } else r(s);
                p = n(s);
            }
            if (p !== null) var bt = !0;
            else {
                var mt = n(c);
                mt !== null && En(C, mt.startTime - B), (bt = !1);
            }
            return bt;
        } finally {
            (p = null), (d = V), (k = !1);
        }
    }
    var z = !1,
        M = null,
        I = -1,
        Z = 5,
        W = -1;
    function de() {
        return !(e.unstable_now() - W < Z);
    }
    function H() {
        if (M !== null) {
            var L = e.unstable_now();
            W = L;
            var B = !0;
            try {
                B = M(!0, L);
            } finally {
                B ? Xe() : ((z = !1), (M = null));
            }
        } else z = !1;
    }
    var Xe;
    if (typeof h == "function")
        Xe = function () {
            h(H);
        };
    else if (typeof MessageChannel < "u") {
        var ze = new MessageChannel(),
            ht = ze.port2;
        (ze.port1.onmessage = H),
            (Xe = function () {
                ht.postMessage(null);
            });
    } else
        Xe = function () {
            D(H, 0);
        };
    function Pt(L) {
        (M = L), z || ((z = !0), Xe());
    }
    function En(L, B) {
        I = D(function () {
            L(e.unstable_now());
        }, B);
    }
    (e.unstable_IdlePriority = 5),
        (e.unstable_ImmediatePriority = 1),
        (e.unstable_LowPriority = 4),
        (e.unstable_NormalPriority = 3),
        (e.unstable_Profiling = null),
        (e.unstable_UserBlockingPriority = 2),
        (e.unstable_cancelCallback = function (L) {
            L.callback = null;
        }),
        (e.unstable_continueExecution = function () {
            j || k || ((j = !0), Pt(T));
        }),
        (e.unstable_forceFrameRate = function (L) {
            0 > L || 125 < L
                ? console.error(
                      "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                  )
                : (Z = 0 < L ? Math.floor(1e3 / L) : 5);
        }),
        (e.unstable_getCurrentPriorityLevel = function () {
            return d;
        }),
        (e.unstable_getFirstCallbackNode = function () {
            return n(s);
        }),
        (e.unstable_next = function (L) {
            switch (d) {
                case 1:
                case 2:
                case 3:
                    var B = 3;
                    break;
                default:
                    B = d;
            }
            var V = d;
            d = B;
            try {
                return L();
            } finally {
                d = V;
            }
        }),
        (e.unstable_pauseExecution = function () {}),
        (e.unstable_requestPaint = function () {}),
        (e.unstable_runWithPriority = function (L, B) {
            switch (L) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    L = 3;
            }
            var V = d;
            d = L;
            try {
                return B();
            } finally {
                d = V;
            }
        }),
        (e.unstable_scheduleCallback = function (L, B, V) {
            var ie = e.unstable_now();
            switch (
                (typeof V == "object" && V !== null
                    ? ((V = V.delay),
                      (V = typeof V == "number" && 0 < V ? ie + V : ie))
                    : (V = ie),
                L)
            ) {
                case 1:
                    var ve = -1;
                    break;
                case 2:
                    ve = 250;
                    break;
                case 5:
                    ve = 1073741823;
                    break;
                case 4:
                    ve = 1e4;
                    break;
                default:
                    ve = 5e3;
            }
            return (
                (ve = V + ve),
                (L = {
                    id: m++,
                    callback: B,
                    priorityLevel: L,
                    startTime: V,
                    expirationTime: ve,
                    sortIndex: -1,
                }),
                V > ie
                    ? ((L.sortIndex = V),
                      t(c, L),
                      n(s) === null &&
                          L === n(c) &&
                          (P ? (g(I), (I = -1)) : (P = !0), En(C, V - ie)))
                    : ((L.sortIndex = ve),
                      t(s, L),
                      j || k || ((j = !0), Pt(T))),
                L
            );
        }),
        (e.unstable_shouldYield = de),
        (e.unstable_wrapCallback = function (L) {
            var B = d;
            return function () {
                var V = d;
                d = B;
                try {
                    return L.apply(this, arguments);
                } finally {
                    d = V;
                }
            };
        });
})(Vc);
Wc.exports = Vc;
var wp = Wc.exports;
var Sp = U,
    rt = wp;
function O(e) {
    for (
        var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
            n = 1;
        n < arguments.length;
        n++
    )
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
        "Minified React error #" +
        e +
        "; visit " +
        t +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
}
var Qc = new Set(),
    hi = {};
function Qn(e, t) {
    xr(e, t), xr(e + "Capture", t);
}
function xr(e, t) {
    for (hi[e] = t, e = 0; e < t.length; e++) Qc.add(t[e]);
}
var Gt = !(
        typeof window > "u" ||
        typeof window.document > "u" ||
        typeof window.document.createElement > "u"
    ),
    gu = Object.prototype.hasOwnProperty,
    _p =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    wa = {},
    Sa = {};
function xp(e) {
    return gu.call(Sa, e)
        ? !0
        : gu.call(wa, e)
        ? !1
        : _p.test(e)
        ? (Sa[e] = !0)
        : ((wa[e] = !0), !1);
}
function kp(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r
                ? !1
                : n !== null
                ? !n.acceptsBooleans
                : ((e = e.toLowerCase().slice(0, 5)),
                  e !== "data-" && e !== "aria-");
        default:
            return !1;
    }
}
function Cp(e, t, n, r) {
    if (t === null || typeof t > "u" || kp(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
        switch (n.type) {
            case 3:
                return !t;
            case 4:
                return t === !1;
            case 5:
                return isNaN(t);
            case 6:
                return isNaN(t) || 1 > t;
        }
    return !1;
}
function He(e, t, n, r, i, l, o) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
        (this.attributeName = r),
        (this.attributeNamespace = i),
        (this.mustUseProperty = n),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = l),
        (this.removeEmptyString = o);
}
var Ne = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
        Ne[e] = new He(e, 0, !1, e, null, !1, !1);
    });
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
].forEach(function (e) {
    var t = e[0];
    Ne[t] = new He(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    Ne[e] = new He(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
    "autoReverse",
    "externalResourcesRequired",
    "focusable",
    "preserveAlpha",
].forEach(function (e) {
    Ne[e] = new He(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
    .split(" ")
    .forEach(function (e) {
        Ne[e] = new He(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
    Ne[e] = new He(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
    Ne[e] = new He(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
    Ne[e] = new He(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
    Ne[e] = new He(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ws = /[\-:]([a-z])/g;
function Ss(e) {
    return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
        var t = e.replace(ws, Ss);
        Ne[t] = new He(t, 1, !1, e, null, !1, !1);
    });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
    .split(" ")
    .forEach(function (e) {
        var t = e.replace(ws, Ss);
        Ne[t] = new He(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
    });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var t = e.replace(ws, Ss);
    Ne[t] = new He(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
    Ne[e] = new He(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ne.xlinkHref = new He(
    "xlinkHref",
    1,
    !1,
    "xlink:href",
    "http://www.w3.org/1999/xlink",
    !0,
    !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
    Ne[e] = new He(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function _s(e, t, n, r) {
    var i = Ne.hasOwnProperty(t) ? Ne[t] : null;
    (i !== null
        ? i.type !== 0
        : r ||
          !(2 < t.length) ||
          (t[0] !== "o" && t[0] !== "O") ||
          (t[1] !== "n" && t[1] !== "N")) &&
        (Cp(t, n, i, r) && (n = null),
        r || i === null
            ? xp(t) &&
              (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
            : i.mustUseProperty
            ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
            : ((t = i.attributeName),
              (r = i.attributeNamespace),
              n === null
                  ? e.removeAttribute(t)
                  : ((i = i.type),
                    (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var qt = Sp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    tl = Symbol.for("react.element"),
    ir = Symbol.for("react.portal"),
    lr = Symbol.for("react.fragment"),
    xs = Symbol.for("react.strict_mode"),
    yu = Symbol.for("react.profiler"),
    Kc = Symbol.for("react.provider"),
    Yc = Symbol.for("react.context"),
    ks = Symbol.for("react.forward_ref"),
    wu = Symbol.for("react.suspense"),
    Su = Symbol.for("react.suspense_list"),
    Cs = Symbol.for("react.memo"),
    on = Symbol.for("react.lazy"),
    Gc = Symbol.for("react.offscreen"),
    _a = Symbol.iterator;
function Yr(e) {
    return e === null || typeof e != "object"
        ? null
        : ((e = (_a && e[_a]) || e["@@iterator"]),
          typeof e == "function" ? e : null);
}
var me = Object.assign,
    Qo;
function ti(e) {
    if (Qo === void 0)
        try {
            throw Error();
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Qo = (t && t[1]) || "";
        }
    return (
        `
` +
        Qo +
        e
    );
}
var Ko = !1;
function Yo(e, t) {
    if (!e || Ko) return "";
    Ko = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (
                ((t = function () {
                    throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                    set: function () {
                        throw Error();
                    },
                }),
                typeof Reflect == "object" && Reflect.construct)
            ) {
                try {
                    Reflect.construct(t, []);
                } catch (c) {
                    var r = c;
                }
                Reflect.construct(e, [], t);
            } else {
                try {
                    t.call();
                } catch (c) {
                    r = c;
                }
                e.call(t.prototype);
            }
        else {
            try {
                throw Error();
            } catch (c) {
                r = c;
            }
            e();
        }
    } catch (c) {
        if (c && r && typeof c.stack == "string") {
            for (
                var i = c.stack.split(`
`),
                    l = r.stack.split(`
`),
                    o = i.length - 1,
                    u = l.length - 1;
                1 <= o && 0 <= u && i[o] !== l[u];

            )
                u--;
            for (; 1 <= o && 0 <= u; o--, u--)
                if (i[o] !== l[u]) {
                    if (o !== 1 || u !== 1)
                        do
                            if ((o--, u--, 0 > u || i[o] !== l[u])) {
                                var s =
                                    `
` + i[o].replace(" at new ", " at ");
                                return (
                                    e.displayName &&
                                        s.includes("<anonymous>") &&
                                        (s = s.replace(
                                            "<anonymous>",
                                            e.displayName
                                        )),
                                    s
                                );
                            }
                        while (1 <= o && 0 <= u);
                    break;
                }
        }
    } finally {
        (Ko = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? ti(e) : "";
}
function Ep(e) {
    switch (e.tag) {
        case 5:
            return ti(e.type);
        case 16:
            return ti("Lazy");
        case 13:
            return ti("Suspense");
        case 19:
            return ti("SuspenseList");
        case 0:
        case 2:
        case 15:
            return (e = Yo(e.type, !1)), e;
        case 11:
            return (e = Yo(e.type.render, !1)), e;
        case 1:
            return (e = Yo(e.type, !0)), e;
        default:
            return "";
    }
}
function _u(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case lr:
            return "Fragment";
        case ir:
            return "Portal";
        case yu:
            return "Profiler";
        case xs:
            return "StrictMode";
        case wu:
            return "Suspense";
        case Su:
            return "SuspenseList";
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
            case Yc:
                return (e.displayName || "Context") + ".Consumer";
            case Kc:
                return (e._context.displayName || "Context") + ".Provider";
            case ks:
                var t = e.render;
                return (
                    (e = e.displayName),
                    e ||
                        ((e = t.displayName || t.name || ""),
                        (e =
                            e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
                    e
                );
            case Cs:
                return (
                    (t = e.displayName || null),
                    t !== null ? t : _u(e.type) || "Memo"
                );
            case on:
                (t = e._payload), (e = e._init);
                try {
                    return _u(e(t));
                } catch {}
        }
    return null;
}
function jp(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return (
                (e = t.render),
                (e = e.displayName || e.name || ""),
                t.displayName ||
                    (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
            );
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return _u(t);
        case 8:
            return t === xs ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t;
    }
    return null;
}
function Sn(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return "";
    }
}
function Xc(e) {
    var t = e.type;
    return (
        (e = e.nodeName) &&
        e.toLowerCase() === "input" &&
        (t === "checkbox" || t === "radio")
    );
}
function Pp(e) {
    var t = Xc(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (
        !e.hasOwnProperty(t) &&
        typeof n < "u" &&
        typeof n.get == "function" &&
        typeof n.set == "function"
    ) {
        var i = n.get,
            l = n.set;
        return (
            Object.defineProperty(e, t, {
                configurable: !0,
                get: function () {
                    return i.call(this);
                },
                set: function (o) {
                    (r = "" + o), l.call(this, o);
                },
            }),
            Object.defineProperty(e, t, { enumerable: n.enumerable }),
            {
                getValue: function () {
                    return r;
                },
                setValue: function (o) {
                    r = "" + o;
                },
                stopTracking: function () {
                    (e._valueTracker = null), delete e[t];
                },
            }
        );
    }
}
function nl(e) {
    e._valueTracker || (e._valueTracker = Pp(e));
}
function Zc(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return (
        e && (r = Xc(e) ? (e.checked ? "true" : "false") : e.value),
        (e = r),
        e !== n ? (t.setValue(e), !0) : !1
    );
}
function Nl(e) {
    if (
        ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
        return null;
    try {
        return e.activeElement || e.body;
    } catch {
        return e.body;
    }
}
function xu(e, t) {
    var n = t.checked;
    return me({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked,
    });
}
function xa(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    (n = Sn(t.value != null ? t.value : n)),
        (e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled:
                t.type === "checkbox" || t.type === "radio"
                    ? t.checked != null
                    : t.value != null,
        });
}
function Jc(e, t) {
    (t = t.checked), t != null && _s(e, "checked", t, !1);
}
function ku(e, t) {
    Jc(e, t);
    var n = Sn(t.value),
        r = t.type;
    if (n != null)
        r === "number"
            ? ((n === 0 && e.value === "") || e.value != n) &&
              (e.value = "" + n)
            : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return;
    }
    t.hasOwnProperty("value")
        ? Cu(e, t.type, n)
        : t.hasOwnProperty("defaultValue") && Cu(e, t.type, Sn(t.defaultValue)),
        t.checked == null &&
            t.defaultChecked != null &&
            (e.defaultChecked = !!t.defaultChecked);
}
function ka(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (
            !(
                (r !== "submit" && r !== "reset") ||
                (t.value !== void 0 && t.value !== null)
            )
        )
            return;
        (t = "" + e._wrapperState.initialValue),
            n || t === e.value || (e.value = t),
            (e.defaultValue = t);
    }
    (n = e.name),
        n !== "" && (e.name = ""),
        (e.defaultChecked = !!e._wrapperState.initialChecked),
        n !== "" && (e.name = n);
}
function Cu(e, t, n) {
    (t !== "number" || Nl(e.ownerDocument) !== e) &&
        (n == null
            ? (e.defaultValue = "" + e._wrapperState.initialValue)
            : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var ni = Array.isArray;
function vr(e, t, n, r) {
    if (((e = e.options), t)) {
        t = {};
        for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++)
            (i = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== i && (e[n].selected = i),
                i && r && (e[n].defaultSelected = !0);
    } else {
        for (n = "" + Sn(n), t = null, i = 0; i < e.length; i++) {
            if (e[i].value === n) {
                (e[i].selected = !0), r && (e[i].defaultSelected = !0);
                return;
            }
            t !== null || e[i].disabled || (t = e[i]);
        }
        t !== null && (t.selected = !0);
    }
}
function Eu(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(O(91));
    return me({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue,
    });
}
function Ca(e, t) {
    var n = t.value;
    if (n == null) {
        if (((n = t.children), (t = t.defaultValue), n != null)) {
            if (t != null) throw Error(O(92));
            if (ni(n)) {
                if (1 < n.length) throw Error(O(93));
                n = n[0];
            }
            t = n;
        }
        t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: Sn(n) };
}
function qc(e, t) {
    var n = Sn(t.value),
        r = Sn(t.defaultValue);
    n != null &&
        ((n = "" + n),
        n !== e.value && (e.value = n),
        t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
        r != null && (e.defaultValue = "" + r);
}
function Ea(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
        t !== "" &&
        t !== null &&
        (e.value = t);
}
function bc(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml";
    }
}
function ju(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
        ? bc(t)
        : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
}
var rl,
    ef = (function (e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
            ? function (t, n, r, i) {
                  MSApp.execUnsafeLocalFunction(function () {
                      return e(t, n, r, i);
                  });
              }
            : e;
    })(function (e, t) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
            e.innerHTML = t;
        else {
            for (
                rl = rl || document.createElement("div"),
                    rl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
                    t = rl.firstChild;
                e.firstChild;

            )
                e.removeChild(e.firstChild);
            for (; t.firstChild; ) e.appendChild(t.firstChild);
        }
    });
function mi(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return;
        }
    }
    e.textContent = t;
}
var li = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
    },
    Tp = ["Webkit", "ms", "Moz", "O"];
Object.keys(li).forEach(function (e) {
    Tp.forEach(function (t) {
        (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (li[t] = li[e]);
    });
});
function tf(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
        ? ""
        : n ||
          typeof t != "number" ||
          t === 0 ||
          (li.hasOwnProperty(e) && li[e])
        ? ("" + t).trim()
        : t + "px";
}
function nf(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                i = tf(n, t[n], r);
            n === "float" && (n = "cssFloat"),
                r ? e.setProperty(n, i) : (e[n] = i);
        }
}
var Op = me(
    { menuitem: !0 },
    {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
    }
);
function Pu(e, t) {
    if (t) {
        if (Op[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(O(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(O(60));
            if (
                typeof t.dangerouslySetInnerHTML != "object" ||
                !("__html" in t.dangerouslySetInnerHTML)
            )
                throw Error(O(61));
        }
        if (t.style != null && typeof t.style != "object") throw Error(O(62));
    }
}
function Tu(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0;
    }
}
var Ou = null;
function Es(e) {
    return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
    );
}
var Nu = null,
    gr = null,
    yr = null;
function ja(e) {
    if ((e = Ii(e))) {
        if (typeof Nu != "function") throw Error(O(280));
        var t = e.stateNode;
        t && ((t = uo(t)), Nu(e.stateNode, e.type, t));
    }
}
function rf(e) {
    gr ? (yr ? yr.push(e) : (yr = [e])) : (gr = e);
}
function lf() {
    if (gr) {
        var e = gr,
            t = yr;
        if (((yr = gr = null), ja(e), t))
            for (e = 0; e < t.length; e++) ja(t[e]);
    }
}
function of(e, t) {
    return e(t);
}
function uf() {}
var Go = !1;
function sf(e, t, n) {
    if (Go) return e(t, n);
    Go = !0;
    try {
        return of(e, t, n);
    } finally {
        (Go = !1), (gr !== null || yr !== null) && (uf(), lf());
    }
}
function vi(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = uo(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) ||
                ((e = e.type),
                (r = !(
                    e === "button" ||
                    e === "input" ||
                    e === "select" ||
                    e === "textarea"
                ))),
                (e = !r);
            break e;
        default:
            e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(O(231, t, typeof n));
    return n;
}
var zu = !1;
if (Gt)
    try {
        var Gr = {};
        Object.defineProperty(Gr, "passive", {
            get: function () {
                zu = !0;
            },
        }),
            window.addEventListener("test", Gr, Gr),
            window.removeEventListener("test", Gr, Gr);
    } catch {
        zu = !1;
    }
function Np(e, t, n, r, i, l, o, u, s) {
    var c = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, c);
    } catch (m) {
        this.onError(m);
    }
}
var oi = !1,
    zl = null,
    Ml = !1,
    Mu = null,
    zp = {
        onError: function (e) {
            (oi = !0), (zl = e);
        },
    };
function Mp(e, t, n, r, i, l, o, u, s) {
    (oi = !1), (zl = null), Np.apply(zp, arguments);
}
function Lp(e, t, n, r, i, l, o, u, s) {
    if ((Mp.apply(this, arguments), oi)) {
        if (oi) {
            var c = zl;
            (oi = !1), (zl = null);
        } else throw Error(O(198));
        Ml || ((Ml = !0), (Mu = c));
    }
}
function Kn(e) {
    var t = e,
        n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
        e = t;
        do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
        while (e);
    }
    return t.tag === 3 ? n : null;
}
function af(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (
            (t === null &&
                ((e = e.alternate), e !== null && (t = e.memoizedState)),
            t !== null)
        )
            return t.dehydrated;
    }
    return null;
}
function Pa(e) {
    if (Kn(e) !== e) throw Error(O(188));
}
function Ip(e) {
    var t = e.alternate;
    if (!t) {
        if (((t = Kn(e)), t === null)) throw Error(O(188));
        return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
        var i = n.return;
        if (i === null) break;
        var l = i.alternate;
        if (l === null) {
            if (((r = i.return), r !== null)) {
                n = r;
                continue;
            }
            break;
        }
        if (i.child === l.child) {
            for (l = i.child; l; ) {
                if (l === n) return Pa(i), e;
                if (l === r) return Pa(i), t;
                l = l.sibling;
            }
            throw Error(O(188));
        }
        if (n.return !== r.return) (n = i), (r = l);
        else {
            for (var o = !1, u = i.child; u; ) {
                if (u === n) {
                    (o = !0), (n = i), (r = l);
                    break;
                }
                if (u === r) {
                    (o = !0), (r = i), (n = l);
                    break;
                }
                u = u.sibling;
            }
            if (!o) {
                for (u = l.child; u; ) {
                    if (u === n) {
                        (o = !0), (n = l), (r = i);
                        break;
                    }
                    if (u === r) {
                        (o = !0), (r = l), (n = i);
                        break;
                    }
                    u = u.sibling;
                }
                if (!o) throw Error(O(189));
            }
        }
        if (n.alternate !== r) throw Error(O(190));
    }
    if (n.tag !== 3) throw Error(O(188));
    return n.stateNode.current === n ? e : t;
}
function cf(e) {
    return (e = Ip(e)), e !== null ? ff(e) : null;
}
function ff(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
        var t = ff(e);
        if (t !== null) return t;
        e = e.sibling;
    }
    return null;
}
var df = rt.unstable_scheduleCallback,
    Ta = rt.unstable_cancelCallback,
    Fp = rt.unstable_shouldYield,
    Ap = rt.unstable_requestPaint,
    Se = rt.unstable_now,
    Rp = rt.unstable_getCurrentPriorityLevel,
    js = rt.unstable_ImmediatePriority,
    pf = rt.unstable_UserBlockingPriority,
    Ll = rt.unstable_NormalPriority,
    Dp = rt.unstable_LowPriority,
    hf = rt.unstable_IdlePriority,
    ro = null,
    Ft = null;
function $p(e) {
    if (Ft && typeof Ft.onCommitFiberRoot == "function")
        try {
            Ft.onCommitFiberRoot(
                ro,
                e,
                void 0,
                (e.current.flags & 128) === 128
            );
        } catch {}
}
var Ct = Math.clz32 ? Math.clz32 : Bp,
    Up = Math.log,
    Hp = Math.LN2;
function Bp(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Up(e) / Hp) | 0)) | 0;
}
var il = 64,
    ll = 4194304;
function ri(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e;
    }
}
function Il(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        i = e.suspendedLanes,
        l = e.pingedLanes,
        o = n & 268435455;
    if (o !== 0) {
        var u = o & ~i;
        u !== 0 ? (r = ri(u)) : ((l &= o), l !== 0 && (r = ri(l)));
    } else (o = n & ~i), o !== 0 ? (r = ri(o)) : l !== 0 && (r = ri(l));
    if (r === 0) return 0;
    if (
        t !== 0 &&
        t !== r &&
        !(t & i) &&
        ((i = r & -r),
        (l = t & -t),
        i >= l || (i === 16 && (l & 4194240) !== 0))
    )
        return t;
    if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
        for (e = e.entanglements, t &= r; 0 < t; )
            (n = 31 - Ct(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
    return r;
}
function Wp(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1;
    }
}
function Vp(e, t) {
    for (
        var n = e.suspendedLanes,
            r = e.pingedLanes,
            i = e.expirationTimes,
            l = e.pendingLanes;
        0 < l;

    ) {
        var o = 31 - Ct(l),
            u = 1 << o,
            s = i[o];
        s === -1
            ? (!(u & n) || u & r) && (i[o] = Wp(u, t))
            : s <= t && (e.expiredLanes |= u),
            (l &= ~u);
    }
}
function Lu(e) {
    return (
        (e = e.pendingLanes & -1073741825),
        e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
}
function mf() {
    var e = il;
    return (il <<= 1), !(il & 4194240) && (il = 64), e;
}
function Xo(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
}
function Mi(e, t, n) {
    (e.pendingLanes |= t),
        t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
        (e = e.eventTimes),
        (t = 31 - Ct(t)),
        (e[t] = n);
}
function Qp(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.expiredLanes &= t),
        (e.mutableReadLanes &= t),
        (e.entangledLanes &= t),
        (t = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var i = 31 - Ct(n),
            l = 1 << i;
        (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~l);
    }
}
function Ps(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
        var r = 31 - Ct(n),
            i = 1 << r;
        (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
    }
}
var ee = 0;
function vf(e) {
    return (
        (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
}
var gf,
    Ts,
    yf,
    wf,
    Sf,
    Iu = !1,
    ol = [],
    dn = null,
    pn = null,
    hn = null,
    gi = new Map(),
    yi = new Map(),
    sn = [],
    Kp =
        "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
            " "
        );
function Oa(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            dn = null;
            break;
        case "dragenter":
        case "dragleave":
            pn = null;
            break;
        case "mouseover":
        case "mouseout":
            hn = null;
            break;
        case "pointerover":
        case "pointerout":
            gi.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            yi.delete(t.pointerId);
    }
}
function Xr(e, t, n, r, i, l) {
    return e === null || e.nativeEvent !== l
        ? ((e = {
              blockedOn: t,
              domEventName: n,
              eventSystemFlags: r,
              nativeEvent: l,
              targetContainers: [i],
          }),
          t !== null && ((t = Ii(t)), t !== null && Ts(t)),
          e)
        : ((e.eventSystemFlags |= r),
          (t = e.targetContainers),
          i !== null && t.indexOf(i) === -1 && t.push(i),
          e);
}
function Yp(e, t, n, r, i) {
    switch (t) {
        case "focusin":
            return (dn = Xr(dn, e, t, n, r, i)), !0;
        case "dragenter":
            return (pn = Xr(pn, e, t, n, r, i)), !0;
        case "mouseover":
            return (hn = Xr(hn, e, t, n, r, i)), !0;
        case "pointerover":
            var l = i.pointerId;
            return gi.set(l, Xr(gi.get(l) || null, e, t, n, r, i)), !0;
        case "gotpointercapture":
            return (
                (l = i.pointerId),
                yi.set(l, Xr(yi.get(l) || null, e, t, n, r, i)),
                !0
            );
    }
    return !1;
}
function _f(e) {
    var t = In(e.target);
    if (t !== null) {
        var n = Kn(t);
        if (n !== null) {
            if (((t = n.tag), t === 13)) {
                if (((t = af(n)), t !== null)) {
                    (e.blockedOn = t),
                        Sf(e.priority, function () {
                            yf(n);
                        });
                    return;
                }
            } else if (
                t === 3 &&
                n.stateNode.current.memoizedState.isDehydrated
            ) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return;
            }
        }
    }
    e.blockedOn = null;
}
function Sl(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Fu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            (Ou = r), n.target.dispatchEvent(r), (Ou = null);
        } else return (t = Ii(n)), t !== null && Ts(t), (e.blockedOn = n), !1;
        t.shift();
    }
    return !0;
}
function Na(e, t, n) {
    Sl(e) && n.delete(t);
}
function Gp() {
    (Iu = !1),
        dn !== null && Sl(dn) && (dn = null),
        pn !== null && Sl(pn) && (pn = null),
        hn !== null && Sl(hn) && (hn = null),
        gi.forEach(Na),
        yi.forEach(Na);
}
function Zr(e, t) {
    e.blockedOn === t &&
        ((e.blockedOn = null),
        Iu ||
            ((Iu = !0),
            rt.unstable_scheduleCallback(rt.unstable_NormalPriority, Gp)));
}
function wi(e) {
    function t(i) {
        return Zr(i, e);
    }
    if (0 < ol.length) {
        Zr(ol[0], e);
        for (var n = 1; n < ol.length; n++) {
            var r = ol[n];
            r.blockedOn === e && (r.blockedOn = null);
        }
    }
    for (
        dn !== null && Zr(dn, e),
            pn !== null && Zr(pn, e),
            hn !== null && Zr(hn, e),
            gi.forEach(t),
            yi.forEach(t),
            n = 0;
        n < sn.length;
        n++
    )
        (r = sn[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < sn.length && ((n = sn[0]), n.blockedOn === null); )
        _f(n), n.blockedOn === null && sn.shift();
}
var wr = qt.ReactCurrentBatchConfig,
    Fl = !0;
function Xp(e, t, n, r) {
    var i = ee,
        l = wr.transition;
    wr.transition = null;
    try {
        (ee = 1), Os(e, t, n, r);
    } finally {
        (ee = i), (wr.transition = l);
    }
}
function Zp(e, t, n, r) {
    var i = ee,
        l = wr.transition;
    wr.transition = null;
    try {
        (ee = 4), Os(e, t, n, r);
    } finally {
        (ee = i), (wr.transition = l);
    }
}
function Os(e, t, n, r) {
    if (Fl) {
        var i = Fu(e, t, n, r);
        if (i === null) lu(e, t, r, Al, n), Oa(e, r);
        else if (Yp(i, e, t, n, r)) r.stopPropagation();
        else if ((Oa(e, r), t & 4 && -1 < Kp.indexOf(e))) {
            for (; i !== null; ) {
                var l = Ii(i);
                if (
                    (l !== null && gf(l),
                    (l = Fu(e, t, n, r)),
                    l === null && lu(e, t, r, Al, n),
                    l === i)
                )
                    break;
                i = l;
            }
            i !== null && r.stopPropagation();
        } else lu(e, t, r, null, n);
    }
}
var Al = null;
function Fu(e, t, n, r) {
    if (((Al = null), (e = Es(r)), (e = In(e)), e !== null))
        if (((t = Kn(e)), t === null)) e = null;
        else if (((n = t.tag), n === 13)) {
            if (((e = af(t)), e !== null)) return e;
            e = null;
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
        } else t !== e && (e = null);
    return (Al = e), null;
}
function xf(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (Rp()) {
                case js:
                    return 1;
                case pf:
                    return 4;
                case Ll:
                case Dp:
                    return 16;
                case hf:
                    return 536870912;
                default:
                    return 16;
            }
        default:
            return 16;
    }
}
var cn = null,
    Ns = null,
    _l = null;
function kf() {
    if (_l) return _l;
    var e,
        t = Ns,
        n = t.length,
        r,
        i = "value" in cn ? cn.value : cn.textContent,
        l = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++);
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === i[l - r]; r++);
    return (_l = i.slice(e, 1 < r ? 1 - r : void 0));
}
function xl(e) {
    var t = e.keyCode;
    return (
        "charCode" in e
            ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
            : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
    );
}
function ul() {
    return !0;
}
function za() {
    return !1;
}
function lt(e) {
    function t(n, r, i, l, o) {
        (this._reactName = n),
            (this._targetInst = i),
            (this.type = r),
            (this.nativeEvent = l),
            (this.target = o),
            (this.currentTarget = null);
        for (var u in e)
            e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(l) : l[u]));
        return (
            (this.isDefaultPrevented = (
                l.defaultPrevented != null
                    ? l.defaultPrevented
                    : l.returnValue === !1
            )
                ? ul
                : za),
            (this.isPropagationStopped = za),
            this
        );
    }
    return (
        me(t.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n &&
                    (n.preventDefault
                        ? n.preventDefault()
                        : typeof n.returnValue != "unknown" &&
                          (n.returnValue = !1),
                    (this.isDefaultPrevented = ul));
            },
            stopPropagation: function () {
                var n = this.nativeEvent;
                n &&
                    (n.stopPropagation
                        ? n.stopPropagation()
                        : typeof n.cancelBubble != "unknown" &&
                          (n.cancelBubble = !0),
                    (this.isPropagationStopped = ul));
            },
            persist: function () {},
            isPersistent: ul,
        }),
        t
    );
}
var Nr = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
            return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
    },
    zs = lt(Nr),
    Li = me({}, Nr, { view: 0, detail: 0 }),
    Jp = lt(Li),
    Zo,
    Jo,
    Jr,
    io = me({}, Li, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Ms,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
            return e.relatedTarget === void 0
                ? e.fromElement === e.srcElement
                    ? e.toElement
                    : e.fromElement
                : e.relatedTarget;
        },
        movementX: function (e) {
            return "movementX" in e
                ? e.movementX
                : (e !== Jr &&
                      (Jr && e.type === "mousemove"
                          ? ((Zo = e.screenX - Jr.screenX),
                            (Jo = e.screenY - Jr.screenY))
                          : (Jo = Zo = 0),
                      (Jr = e)),
                  Zo);
        },
        movementY: function (e) {
            return "movementY" in e ? e.movementY : Jo;
        },
    }),
    Ma = lt(io),
    qp = me({}, io, { dataTransfer: 0 }),
    bp = lt(qp),
    eh = me({}, Li, { relatedTarget: 0 }),
    qo = lt(eh),
    th = me({}, Nr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    nh = lt(th),
    rh = me({}, Nr, {
        clipboardData: function (e) {
            return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
        },
    }),
    ih = lt(rh),
    lh = me({}, Nr, { data: 0 }),
    La = lt(lh),
    oh = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified",
    },
    uh = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta",
    },
    sh = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey",
    };
function ah(e) {
    var t = this.nativeEvent;
    return t.getModifierState
        ? t.getModifierState(e)
        : (e = sh[e])
        ? !!t[e]
        : !1;
}
function Ms() {
    return ah;
}
var ch = me({}, Li, {
        key: function (e) {
            if (e.key) {
                var t = oh[e.key] || e.key;
                if (t !== "Unidentified") return t;
            }
            return e.type === "keypress"
                ? ((e = xl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
                : e.type === "keydown" || e.type === "keyup"
                ? uh[e.keyCode] || "Unidentified"
                : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Ms,
        charCode: function (e) {
            return e.type === "keypress" ? xl(e) : 0;
        },
        keyCode: function (e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
        which: function (e) {
            return e.type === "keypress"
                ? xl(e)
                : e.type === "keydown" || e.type === "keyup"
                ? e.keyCode
                : 0;
        },
    }),
    fh = lt(ch),
    dh = me({}, io, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0,
    }),
    Ia = lt(dh),
    ph = me({}, Li, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Ms,
    }),
    hh = lt(ph),
    mh = me({}, Nr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    vh = lt(mh),
    gh = me({}, io, {
        deltaX: function (e) {
            return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
        },
        deltaY: function (e) {
            return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
        },
        deltaZ: 0,
        deltaMode: 0,
    }),
    yh = lt(gh),
    wh = [9, 13, 27, 32],
    Ls = Gt && "CompositionEvent" in window,
    ui = null;
Gt && "documentMode" in document && (ui = document.documentMode);
var Sh = Gt && "TextEvent" in window && !ui,
    Cf = Gt && (!Ls || (ui && 8 < ui && 11 >= ui)),
    Fa = " ",
    Aa = !1;
function Ef(e, t) {
    switch (e) {
        case "keyup":
            return wh.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1;
    }
}
function jf(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var or = !1;
function _h(e, t) {
    switch (e) {
        case "compositionend":
            return jf(t);
        case "keypress":
            return t.which !== 32 ? null : ((Aa = !0), Fa);
        case "textInput":
            return (e = t.data), e === Fa && Aa ? null : e;
        default:
            return null;
    }
}
function xh(e, t) {
    if (or)
        return e === "compositionend" || (!Ls && Ef(e, t))
            ? ((e = kf()), (_l = Ns = cn = null), (or = !1), e)
            : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (
                !(t.ctrlKey || t.altKey || t.metaKey) ||
                (t.ctrlKey && t.altKey)
            ) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which);
            }
            return null;
        case "compositionend":
            return Cf && t.locale !== "ko" ? null : t.data;
        default:
            return null;
    }
}
var kh = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
};
function Ra(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!kh[e.type] : t === "textarea";
}
function Pf(e, t, n, r) {
    rf(r),
        (t = Rl(t, "onChange")),
        0 < t.length &&
            ((n = new zs("onChange", "change", null, n, r)),
            e.push({ event: n, listeners: t }));
}
var si = null,
    Si = null;
function Ch(e) {
    Df(e, 0);
}
function lo(e) {
    var t = ar(e);
    if (Zc(t)) return e;
}
function Eh(e, t) {
    if (e === "change") return t;
}
var Tf = !1;
if (Gt) {
    var bo;
    if (Gt) {
        var eu = "oninput" in document;
        if (!eu) {
            var Da = document.createElement("div");
            Da.setAttribute("oninput", "return;"),
                (eu = typeof Da.oninput == "function");
        }
        bo = eu;
    } else bo = !1;
    Tf = bo && (!document.documentMode || 9 < document.documentMode);
}
function $a() {
    si && (si.detachEvent("onpropertychange", Of), (Si = si = null));
}
function Of(e) {
    if (e.propertyName === "value" && lo(Si)) {
        var t = [];
        Pf(t, Si, e, Es(e)), sf(Ch, t);
    }
}
function jh(e, t, n) {
    e === "focusin"
        ? ($a(), (si = t), (Si = n), si.attachEvent("onpropertychange", Of))
        : e === "focusout" && $a();
}
function Ph(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return lo(Si);
}
function Th(e, t) {
    if (e === "click") return lo(t);
}
function Oh(e, t) {
    if (e === "input" || e === "change") return lo(t);
}
function Nh(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var jt = typeof Object.is == "function" ? Object.is : Nh;
function _i(e, t) {
    if (jt(e, t)) return !0;
    if (
        typeof e != "object" ||
        e === null ||
        typeof t != "object" ||
        t === null
    )
        return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!gu.call(t, i) || !jt(e[i], t[i])) return !1;
    }
    return !0;
}
function Ua(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
}
function Ha(e, t) {
    var n = Ua(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (((r = e + n.textContent.length), e <= t && r >= t))
                return { node: n, offset: t - e };
            e = r;
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e;
                }
                n = n.parentNode;
            }
            n = void 0;
        }
        n = Ua(n);
    }
}
function Nf(e, t) {
    return e && t
        ? e === t
            ? !0
            : e && e.nodeType === 3
            ? !1
            : t && t.nodeType === 3
            ? Nf(e, t.parentNode)
            : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
            ? !!(e.compareDocumentPosition(t) & 16)
            : !1
        : !1;
}
function zf() {
    for (var e = window, t = Nl(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string";
        } catch {
            n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = Nl(e.document);
    }
    return t;
}
function Is(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
        t &&
        ((t === "input" &&
            (e.type === "text" ||
                e.type === "search" ||
                e.type === "tel" ||
                e.type === "url" ||
                e.type === "password")) ||
            t === "textarea" ||
            e.contentEditable === "true")
    );
}
function zh(e) {
    var t = zf(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (
        t !== n &&
        n &&
        n.ownerDocument &&
        Nf(n.ownerDocument.documentElement, n)
    ) {
        if (r !== null && Is(n)) {
            if (
                ((t = r.start),
                (e = r.end),
                e === void 0 && (e = t),
                "selectionStart" in n)
            )
                (n.selectionStart = t),
                    (n.selectionEnd = Math.min(e, n.value.length));
            else if (
                ((e =
                    ((t = n.ownerDocument || document) && t.defaultView) ||
                    window),
                e.getSelection)
            ) {
                e = e.getSelection();
                var i = n.textContent.length,
                    l = Math.min(r.start, i);
                (r = r.end === void 0 ? l : Math.min(r.end, i)),
                    !e.extend && l > r && ((i = r), (r = l), (l = i)),
                    (i = Ha(n, l));
                var o = Ha(n, r);
                i &&
                    o &&
                    (e.rangeCount !== 1 ||
                        e.anchorNode !== i.node ||
                        e.anchorOffset !== i.offset ||
                        e.focusNode !== o.node ||
                        e.focusOffset !== o.offset) &&
                    ((t = t.createRange()),
                    t.setStart(i.node, i.offset),
                    e.removeAllRanges(),
                    l > r
                        ? (e.addRange(t), e.extend(o.node, o.offset))
                        : (t.setEnd(o.node, o.offset), e.addRange(t)));
            }
        }
        for (t = [], e = n; (e = e.parentNode); )
            e.nodeType === 1 &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
        for (
            typeof n.focus == "function" && n.focus(), n = 0;
            n < t.length;
            n++
        )
            (e = t[n]),
                (e.element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
    }
}
var Mh = Gt && "documentMode" in document && 11 >= document.documentMode,
    ur = null,
    Au = null,
    ai = null,
    Ru = !1;
function Ba(e, t, n) {
    var r =
        n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Ru ||
        ur == null ||
        ur !== Nl(r) ||
        ((r = ur),
        "selectionStart" in r && Is(r)
            ? (r = { start: r.selectionStart, end: r.selectionEnd })
            : ((r = (
                  (r.ownerDocument && r.ownerDocument.defaultView) ||
                  window
              ).getSelection()),
              (r = {
                  anchorNode: r.anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
              })),
        (ai && _i(ai, r)) ||
            ((ai = r),
            (r = Rl(Au, "onSelect")),
            0 < r.length &&
                ((t = new zs("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = ur))));
}
function sl(e, t) {
    var n = {};
    return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n["Webkit" + e] = "webkit" + t),
        (n["Moz" + e] = "moz" + t),
        n
    );
}
var sr = {
        animationend: sl("Animation", "AnimationEnd"),
        animationiteration: sl("Animation", "AnimationIteration"),
        animationstart: sl("Animation", "AnimationStart"),
        transitionend: sl("Transition", "TransitionEnd"),
    },
    tu = {},
    Mf = {};
Gt &&
    ((Mf = document.createElement("div").style),
    "AnimationEvent" in window ||
        (delete sr.animationend.animation,
        delete sr.animationiteration.animation,
        delete sr.animationstart.animation),
    "TransitionEvent" in window || delete sr.transitionend.transition);
function oo(e) {
    if (tu[e]) return tu[e];
    if (!sr[e]) return e;
    var t = sr[e],
        n;
    for (n in t) if (t.hasOwnProperty(n) && n in Mf) return (tu[e] = t[n]);
    return e;
}
var Lf = oo("animationend"),
    If = oo("animationiteration"),
    Ff = oo("animationstart"),
    Af = oo("transitionend"),
    Rf = new Map(),
    Wa =
        "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
            " "
        );
function xn(e, t) {
    Rf.set(e, t), Qn(t, [e]);
}
for (var nu = 0; nu < Wa.length; nu++) {
    var ru = Wa[nu],
        Lh = ru.toLowerCase(),
        Ih = ru[0].toUpperCase() + ru.slice(1);
    xn(Lh, "on" + Ih);
}
xn(Lf, "onAnimationEnd");
xn(If, "onAnimationIteration");
xn(Ff, "onAnimationStart");
xn("dblclick", "onDoubleClick");
xn("focusin", "onFocus");
xn("focusout", "onBlur");
xn(Af, "onTransitionEnd");
xr("onMouseEnter", ["mouseout", "mouseover"]);
xr("onMouseLeave", ["mouseout", "mouseover"]);
xr("onPointerEnter", ["pointerout", "pointerover"]);
xr("onPointerLeave", ["pointerout", "pointerover"]);
Qn(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(
        " "
    )
);
Qn(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
    )
);
Qn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Qn(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Qn(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Qn(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var ii =
        "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
            " "
        ),
    Fh = new Set(
        "cancel close invalid load scroll toggle".split(" ").concat(ii)
    );
function Va(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), Lp(r, t, void 0, e), (e.currentTarget = null);
}
function Df(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            i = r.event;
        r = r.listeners;
        e: {
            var l = void 0;
            if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                    var u = r[o],
                        s = u.instance,
                        c = u.currentTarget;
                    if (((u = u.listener), s !== l && i.isPropagationStopped()))
                        break e;
                    Va(i, u, c), (l = s);
                }
            else
                for (o = 0; o < r.length; o++) {
                    if (
                        ((u = r[o]),
                        (s = u.instance),
                        (c = u.currentTarget),
                        (u = u.listener),
                        s !== l && i.isPropagationStopped())
                    )
                        break e;
                    Va(i, u, c), (l = s);
                }
        }
    }
    if (Ml) throw ((e = Mu), (Ml = !1), (Mu = null), e);
}
function le(e, t) {
    var n = t[Bu];
    n === void 0 && (n = t[Bu] = new Set());
    var r = e + "__bubble";
    n.has(r) || ($f(t, e, 2, !1), n.add(r));
}
function iu(e, t, n) {
    var r = 0;
    t && (r |= 4), $f(n, e, r, t);
}
var al = "_reactListening" + Math.random().toString(36).slice(2);
function xi(e) {
    if (!e[al]) {
        (e[al] = !0),
            Qc.forEach(function (n) {
                n !== "selectionchange" &&
                    (Fh.has(n) || iu(n, !1, e), iu(n, !0, e));
            });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[al] || ((t[al] = !0), iu("selectionchange", !1, t));
    }
}
function $f(e, t, n, r) {
    switch (xf(t)) {
        case 1:
            var i = Xp;
            break;
        case 4:
            i = Zp;
            break;
        default:
            i = Os;
    }
    (n = i.bind(null, t, n, e)),
        (i = void 0),
        !zu ||
            (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
            (i = !0),
        r
            ? i !== void 0
                ? e.addEventListener(t, n, { capture: !0, passive: i })
                : e.addEventListener(t, n, !0)
            : i !== void 0
            ? e.addEventListener(t, n, { passive: i })
            : e.addEventListener(t, n, !1);
}
function lu(e, t, n, r, i) {
    var l = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (;;) {
            if (r === null) return;
            var o = r.tag;
            if (o === 3 || o === 4) {
                var u = r.stateNode.containerInfo;
                if (u === i || (u.nodeType === 8 && u.parentNode === i)) break;
                if (o === 4)
                    for (o = r.return; o !== null; ) {
                        var s = o.tag;
                        if (
                            (s === 3 || s === 4) &&
                            ((s = o.stateNode.containerInfo),
                            s === i || (s.nodeType === 8 && s.parentNode === i))
                        )
                            return;
                        o = o.return;
                    }
                for (; u !== null; ) {
                    if (((o = In(u)), o === null)) return;
                    if (((s = o.tag), s === 5 || s === 6)) {
                        r = l = o;
                        continue e;
                    }
                    u = u.parentNode;
                }
            }
            r = r.return;
        }
    sf(function () {
        var c = l,
            m = Es(n),
            p = [];
        e: {
            var d = Rf.get(e);
            if (d !== void 0) {
                var k = zs,
                    j = e;
                switch (e) {
                    case "keypress":
                        if (xl(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        k = fh;
                        break;
                    case "focusin":
                        (j = "focus"), (k = qo);
                        break;
                    case "focusout":
                        (j = "blur"), (k = qo);
                        break;
                    case "beforeblur":
                    case "afterblur":
                        k = qo;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        k = Ma;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        k = bp;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        k = hh;
                        break;
                    case Lf:
                    case If:
                    case Ff:
                        k = nh;
                        break;
                    case Af:
                        k = vh;
                        break;
                    case "scroll":
                        k = Jp;
                        break;
                    case "wheel":
                        k = yh;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        k = ih;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        k = Ia;
                }
                var P = (t & 4) !== 0,
                    D = !P && e === "scroll",
                    g = P ? (d !== null ? d + "Capture" : null) : d;
                P = [];
                for (var h = c, v; h !== null; ) {
                    v = h;
                    var C = v.stateNode;
                    if (
                        (v.tag === 5 &&
                            C !== null &&
                            ((v = C),
                            g !== null &&
                                ((C = vi(h, g)),
                                C != null && P.push(ki(h, C, v)))),
                        D)
                    )
                        break;
                    h = h.return;
                }
                0 < P.length &&
                    ((d = new k(d, j, null, n, m)),
                    p.push({ event: d, listeners: P }));
            }
        }
        if (!(t & 7)) {
            e: {
                if (
                    ((d = e === "mouseover" || e === "pointerover"),
                    (k = e === "mouseout" || e === "pointerout"),
                    d &&
                        n !== Ou &&
                        (j = n.relatedTarget || n.fromElement) &&
                        (In(j) || j[Xt]))
                )
                    break e;
                if (
                    (k || d) &&
                    ((d =
                        m.window === m
                            ? m
                            : (d = m.ownerDocument)
                            ? d.defaultView || d.parentWindow
                            : window),
                    k
                        ? ((j = n.relatedTarget || n.toElement),
                          (k = c),
                          (j = j ? In(j) : null),
                          j !== null &&
                              ((D = Kn(j)),
                              j !== D || (j.tag !== 5 && j.tag !== 6)) &&
                              (j = null))
                        : ((k = null), (j = c)),
                    k !== j)
                ) {
                    if (
                        ((P = Ma),
                        (C = "onMouseLeave"),
                        (g = "onMouseEnter"),
                        (h = "mouse"),
                        (e === "pointerout" || e === "pointerover") &&
                            ((P = Ia),
                            (C = "onPointerLeave"),
                            (g = "onPointerEnter"),
                            (h = "pointer")),
                        (D = k == null ? d : ar(k)),
                        (v = j == null ? d : ar(j)),
                        (d = new P(C, h + "leave", k, n, m)),
                        (d.target = D),
                        (d.relatedTarget = v),
                        (C = null),
                        In(m) === c &&
                            ((P = new P(g, h + "enter", j, n, m)),
                            (P.target = v),
                            (P.relatedTarget = D),
                            (C = P)),
                        (D = C),
                        k && j)
                    )
                        t: {
                            for (P = k, g = j, h = 0, v = P; v; v = nr(v)) h++;
                            for (v = 0, C = g; C; C = nr(C)) v++;
                            for (; 0 < h - v; ) (P = nr(P)), h--;
                            for (; 0 < v - h; ) (g = nr(g)), v--;
                            for (; h--; ) {
                                if (
                                    P === g ||
                                    (g !== null && P === g.alternate)
                                )
                                    break t;
                                (P = nr(P)), (g = nr(g));
                            }
                            P = null;
                        }
                    else P = null;
                    k !== null && Qa(p, d, k, P, !1),
                        j !== null && D !== null && Qa(p, D, j, P, !0);
                }
            }
            e: {
                if (
                    ((d = c ? ar(c) : window),
                    (k = d.nodeName && d.nodeName.toLowerCase()),
                    k === "select" || (k === "input" && d.type === "file"))
                )
                    var T = Eh;
                else if (Ra(d))
                    if (Tf) T = Oh;
                    else {
                        T = Ph;
                        var z = jh;
                    }
                else
                    (k = d.nodeName) &&
                        k.toLowerCase() === "input" &&
                        (d.type === "checkbox" || d.type === "radio") &&
                        (T = Th);
                if (T && (T = T(e, c))) {
                    Pf(p, T, n, m);
                    break e;
                }
                z && z(e, d, c),
                    e === "focusout" &&
                        (z = d._wrapperState) &&
                        z.controlled &&
                        d.type === "number" &&
                        Cu(d, "number", d.value);
            }
            switch (((z = c ? ar(c) : window), e)) {
                case "focusin":
                    (Ra(z) || z.contentEditable === "true") &&
                        ((ur = z), (Au = c), (ai = null));
                    break;
                case "focusout":
                    ai = Au = ur = null;
                    break;
                case "mousedown":
                    Ru = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    (Ru = !1), Ba(p, n, m);
                    break;
                case "selectionchange":
                    if (Mh) break;
                case "keydown":
                case "keyup":
                    Ba(p, n, m);
            }
            var M;
            if (Ls)
                e: {
                    switch (e) {
                        case "compositionstart":
                            var I = "onCompositionStart";
                            break e;
                        case "compositionend":
                            I = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            I = "onCompositionUpdate";
                            break e;
                    }
                    I = void 0;
                }
            else
                or
                    ? Ef(e, n) && (I = "onCompositionEnd")
                    : e === "keydown" &&
                      n.keyCode === 229 &&
                      (I = "onCompositionStart");
            I &&
                (Cf &&
                    n.locale !== "ko" &&
                    (or || I !== "onCompositionStart"
                        ? I === "onCompositionEnd" && or && (M = kf())
                        : ((cn = m),
                          (Ns = "value" in cn ? cn.value : cn.textContent),
                          (or = !0))),
                (z = Rl(c, I)),
                0 < z.length &&
                    ((I = new La(I, e, null, n, m)),
                    p.push({ event: I, listeners: z }),
                    M
                        ? (I.data = M)
                        : ((M = jf(n)), M !== null && (I.data = M)))),
                (M = Sh ? _h(e, n) : xh(e, n)) &&
                    ((c = Rl(c, "onBeforeInput")),
                    0 < c.length &&
                        ((m = new La(
                            "onBeforeInput",
                            "beforeinput",
                            null,
                            n,
                            m
                        )),
                        p.push({ event: m, listeners: c }),
                        (m.data = M)));
        }
        Df(p, t);
    });
}
function ki(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
}
function Rl(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var i = e,
            l = i.stateNode;
        i.tag === 5 &&
            l !== null &&
            ((i = l),
            (l = vi(e, n)),
            l != null && r.unshift(ki(e, l, i)),
            (l = vi(e, t)),
            l != null && r.push(ki(e, l, i))),
            (e = e.return);
    }
    return r;
}
function nr(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
}
function Qa(e, t, n, r, i) {
    for (var l = t._reactName, o = []; n !== null && n !== r; ) {
        var u = n,
            s = u.alternate,
            c = u.stateNode;
        if (s !== null && s === r) break;
        u.tag === 5 &&
            c !== null &&
            ((u = c),
            i
                ? ((s = vi(n, l)), s != null && o.unshift(ki(n, s, u)))
                : i || ((s = vi(n, l)), s != null && o.push(ki(n, s, u)))),
            (n = n.return);
    }
    o.length !== 0 && e.push({ event: t, listeners: o });
}
var Ah = /\r\n?/g,
    Rh = /\u0000|\uFFFD/g;
function Ka(e) {
    return (typeof e == "string" ? e : "" + e)
        .replace(
            Ah,
            `
`
        )
        .replace(Rh, "");
}
function cl(e, t, n) {
    if (((t = Ka(t)), Ka(e) !== t && n)) throw Error(O(425));
}
function Dl() {}
var Du = null,
    $u = null;
function Uu(e, t) {
    return (
        e === "textarea" ||
        e === "noscript" ||
        typeof t.children == "string" ||
        typeof t.children == "number" ||
        (typeof t.dangerouslySetInnerHTML == "object" &&
            t.dangerouslySetInnerHTML !== null &&
            t.dangerouslySetInnerHTML.__html != null)
    );
}
var Hu = typeof setTimeout == "function" ? setTimeout : void 0,
    Dh = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Ya = typeof Promise == "function" ? Promise : void 0,
    $h =
        typeof queueMicrotask == "function"
            ? queueMicrotask
            : typeof Ya < "u"
            ? function (e) {
                  return Ya.resolve(null).then(e).catch(Uh);
              }
            : Hu;
function Uh(e) {
    setTimeout(function () {
        throw e;
    });
}
function ou(e, t) {
    var n = t,
        r = 0;
    do {
        var i = n.nextSibling;
        if ((e.removeChild(n), i && i.nodeType === 8))
            if (((n = i.data), n === "/$")) {
                if (r === 0) {
                    e.removeChild(i), wi(t);
                    return;
                }
                r--;
            } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
        n = i;
    } while (n);
    wi(t);
}
function mn(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
            if (t === "/$") return null;
        }
    }
    return e;
}
function Ga(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--;
            } else n === "/$" && t++;
        }
        e = e.previousSibling;
    }
    return null;
}
var zr = Math.random().toString(36).slice(2),
    It = "__reactFiber$" + zr,
    Ci = "__reactProps$" + zr,
    Xt = "__reactContainer$" + zr,
    Bu = "__reactEvents$" + zr,
    Hh = "__reactListeners$" + zr,
    Bh = "__reactHandles$" + zr;
function In(e) {
    var t = e[It];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
        if ((t = n[Xt] || n[It])) {
            if (
                ((n = t.alternate),
                t.child !== null || (n !== null && n.child !== null))
            )
                for (e = Ga(e); e !== null; ) {
                    if ((n = e[It])) return n;
                    e = Ga(e);
                }
            return t;
        }
        (e = n), (n = e.parentNode);
    }
    return null;
}
function Ii(e) {
    return (
        (e = e[It] || e[Xt]),
        !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
            ? null
            : e
    );
}
function ar(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(O(33));
}
function uo(e) {
    return e[Ci] || null;
}
var Wu = [],
    cr = -1;
function kn(e) {
    return { current: e };
}
function oe(e) {
    0 > cr || ((e.current = Wu[cr]), (Wu[cr] = null), cr--);
}
function re(e, t) {
    cr++, (Wu[cr] = e.current), (e.current = t);
}
var _n = {},
    Ae = kn(_n),
    Ke = kn(!1),
    Un = _n;
function kr(e, t) {
    var n = e.type.contextTypes;
    if (!n) return _n;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var i = {},
        l;
    for (l in n) i[l] = t[l];
    return (
        r &&
            ((e = e.stateNode),
            (e.__reactInternalMemoizedUnmaskedChildContext = t),
            (e.__reactInternalMemoizedMaskedChildContext = i)),
        i
    );
}
function Ye(e) {
    return (e = e.childContextTypes), e != null;
}
function $l() {
    oe(Ke), oe(Ae);
}
function Xa(e, t, n) {
    if (Ae.current !== _n) throw Error(O(168));
    re(Ae, t), re(Ke, n);
}
function Uf(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
        return n;
    r = r.getChildContext();
    for (var i in r) if (!(i in t)) throw Error(O(108, jp(e) || "Unknown", i));
    return me({}, n, r);
}
function Ul(e) {
    return (
        (e =
            ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
            _n),
        (Un = Ae.current),
        re(Ae, e),
        re(Ke, Ke.current),
        !0
    );
}
function Za(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(O(169));
    n
        ? ((e = Uf(e, t, Un)),
          (r.__reactInternalMemoizedMergedChildContext = e),
          oe(Ke),
          oe(Ae),
          re(Ae, e))
        : oe(Ke),
        re(Ke, n);
}
var Vt = null,
    so = !1,
    uu = !1;
function Hf(e) {
    Vt === null ? (Vt = [e]) : Vt.push(e);
}
function Wh(e) {
    (so = !0), Hf(e);
}
function Cn() {
    if (!uu && Vt !== null) {
        uu = !0;
        var e = 0,
            t = ee;
        try {
            var n = Vt;
            for (ee = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0);
                while (r !== null);
            }
            (Vt = null), (so = !1);
        } catch (i) {
            throw (Vt !== null && (Vt = Vt.slice(e + 1)), df(js, Cn), i);
        } finally {
            (ee = t), (uu = !1);
        }
    }
    return null;
}
var fr = [],
    dr = 0,
    Hl = null,
    Bl = 0,
    st = [],
    at = 0,
    Hn = null,
    Qt = 1,
    Kt = "";
function Mn(e, t) {
    (fr[dr++] = Bl), (fr[dr++] = Hl), (Hl = e), (Bl = t);
}
function Bf(e, t, n) {
    (st[at++] = Qt), (st[at++] = Kt), (st[at++] = Hn), (Hn = e);
    var r = Qt;
    e = Kt;
    var i = 32 - Ct(r) - 1;
    (r &= ~(1 << i)), (n += 1);
    var l = 32 - Ct(t) + i;
    if (30 < l) {
        var o = i - (i % 5);
        (l = (r & ((1 << o) - 1)).toString(32)),
            (r >>= o),
            (i -= o),
            (Qt = (1 << (32 - Ct(t) + i)) | (n << i) | r),
            (Kt = l + e);
    } else (Qt = (1 << l) | (n << i) | r), (Kt = e);
}
function Fs(e) {
    e.return !== null && (Mn(e, 1), Bf(e, 1, 0));
}
function As(e) {
    for (; e === Hl; )
        (Hl = fr[--dr]), (fr[dr] = null), (Bl = fr[--dr]), (fr[dr] = null);
    for (; e === Hn; )
        (Hn = st[--at]),
            (st[at] = null),
            (Kt = st[--at]),
            (st[at] = null),
            (Qt = st[--at]),
            (st[at] = null);
}
var nt = null,
    tt = null,
    fe = !1,
    kt = null;
function Wf(e, t) {
    var n = ct(5, null, null, 0);
    (n.elementType = "DELETED"),
        (n.stateNode = t),
        (n.return = e),
        (t = e.deletions),
        t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Ja(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return (
                (t =
                    t.nodeType !== 1 ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                        ? null
                        : t),
                t !== null
                    ? ((e.stateNode = t), (nt = e), (tt = mn(t.firstChild)), !0)
                    : !1
            );
        case 6:
            return (
                (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
                t !== null ? ((e.stateNode = t), (nt = e), (tt = null), !0) : !1
            );
        case 13:
            return (
                (t = t.nodeType !== 8 ? null : t),
                t !== null
                    ? ((n = Hn !== null ? { id: Qt, overflow: Kt } : null),
                      (e.memoizedState = {
                          dehydrated: t,
                          treeContext: n,
                          retryLane: 1073741824,
                      }),
                      (n = ct(18, null, null, 0)),
                      (n.stateNode = t),
                      (n.return = e),
                      (e.child = n),
                      (nt = e),
                      (tt = null),
                      !0)
                    : !1
            );
        default:
            return !1;
    }
}
function Vu(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Qu(e) {
    if (fe) {
        var t = tt;
        if (t) {
            var n = t;
            if (!Ja(e, t)) {
                if (Vu(e)) throw Error(O(418));
                t = mn(n.nextSibling);
                var r = nt;
                t && Ja(e, t)
                    ? Wf(r, n)
                    : ((e.flags = (e.flags & -4097) | 2), (fe = !1), (nt = e));
            }
        } else {
            if (Vu(e)) throw Error(O(418));
            (e.flags = (e.flags & -4097) | 2), (fe = !1), (nt = e);
        }
    }
}
function qa(e) {
    for (
        e = e.return;
        e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
        e = e.return;
    nt = e;
}
function fl(e) {
    if (e !== nt) return !1;
    if (!fe) return qa(e), (fe = !0), !1;
    var t;
    if (
        ((t = e.tag !== 3) &&
            !(t = e.tag !== 5) &&
            ((t = e.type),
            (t = t !== "head" && t !== "body" && !Uu(e.type, e.memoizedProps))),
        t && (t = tt))
    ) {
        if (Vu(e)) throw (Vf(), Error(O(418)));
        for (; t; ) Wf(e, t), (t = mn(t.nextSibling));
    }
    if ((qa(e), e.tag === 13)) {
        if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
            throw Error(O(317));
        e: {
            for (e = e.nextSibling, t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            tt = mn(e.nextSibling);
                            break e;
                        }
                        t--;
                    } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
                }
                e = e.nextSibling;
            }
            tt = null;
        }
    } else tt = nt ? mn(e.stateNode.nextSibling) : null;
    return !0;
}
function Vf() {
    for (var e = tt; e; ) e = mn(e.nextSibling);
}
function Cr() {
    (tt = nt = null), (fe = !1);
}
function Rs(e) {
    kt === null ? (kt = [e]) : kt.push(e);
}
var Vh = qt.ReactCurrentBatchConfig;
function qr(e, t, n) {
    if (
        ((e = n.ref),
        e !== null && typeof e != "function" && typeof e != "object")
    ) {
        if (n._owner) {
            if (((n = n._owner), n)) {
                if (n.tag !== 1) throw Error(O(309));
                var r = n.stateNode;
            }
            if (!r) throw Error(O(147, e));
            var i = r,
                l = "" + e;
            return t !== null &&
                t.ref !== null &&
                typeof t.ref == "function" &&
                t.ref._stringRef === l
                ? t.ref
                : ((t = function (o) {
                      var u = i.refs;
                      o === null ? delete u[l] : (u[l] = o);
                  }),
                  (t._stringRef = l),
                  t);
        }
        if (typeof e != "string") throw Error(O(284));
        if (!n._owner) throw Error(O(290, e));
    }
    return e;
}
function dl(e, t) {
    throw (
        ((e = Object.prototype.toString.call(t)),
        Error(
            O(
                31,
                e === "[object Object]"
                    ? "object with keys {" + Object.keys(t).join(", ") + "}"
                    : e
            )
        ))
    );
}
function ba(e) {
    var t = e._init;
    return t(e._payload);
}
function Qf(e) {
    function t(g, h) {
        if (e) {
            var v = g.deletions;
            v === null ? ((g.deletions = [h]), (g.flags |= 16)) : v.push(h);
        }
    }
    function n(g, h) {
        if (!e) return null;
        for (; h !== null; ) t(g, h), (h = h.sibling);
        return null;
    }
    function r(g, h) {
        for (g = new Map(); h !== null; )
            h.key !== null ? g.set(h.key, h) : g.set(h.index, h),
                (h = h.sibling);
        return g;
    }
    function i(g, h) {
        return (g = wn(g, h)), (g.index = 0), (g.sibling = null), g;
    }
    function l(g, h, v) {
        return (
            (g.index = v),
            e
                ? ((v = g.alternate),
                  v !== null
                      ? ((v = v.index), v < h ? ((g.flags |= 2), h) : v)
                      : ((g.flags |= 2), h))
                : ((g.flags |= 1048576), h)
        );
    }
    function o(g) {
        return e && g.alternate === null && (g.flags |= 2), g;
    }
    function u(g, h, v, C) {
        return h === null || h.tag !== 6
            ? ((h = hu(v, g.mode, C)), (h.return = g), h)
            : ((h = i(h, v)), (h.return = g), h);
    }
    function s(g, h, v, C) {
        var T = v.type;
        return T === lr
            ? m(g, h, v.props.children, C, v.key)
            : h !== null &&
              (h.elementType === T ||
                  (typeof T == "object" &&
                      T !== null &&
                      T.$$typeof === on &&
                      ba(T) === h.type))
            ? ((C = i(h, v.props)), (C.ref = qr(g, h, v)), (C.return = g), C)
            : ((C = Ol(v.type, v.key, v.props, null, g.mode, C)),
              (C.ref = qr(g, h, v)),
              (C.return = g),
              C);
    }
    function c(g, h, v, C) {
        return h === null ||
            h.tag !== 4 ||
            h.stateNode.containerInfo !== v.containerInfo ||
            h.stateNode.implementation !== v.implementation
            ? ((h = mu(v, g.mode, C)), (h.return = g), h)
            : ((h = i(h, v.children || [])), (h.return = g), h);
    }
    function m(g, h, v, C, T) {
        return h === null || h.tag !== 7
            ? ((h = $n(v, g.mode, C, T)), (h.return = g), h)
            : ((h = i(h, v)), (h.return = g), h);
    }
    function p(g, h, v) {
        if ((typeof h == "string" && h !== "") || typeof h == "number")
            return (h = hu("" + h, g.mode, v)), (h.return = g), h;
        if (typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
                case tl:
                    return (
                        (v = Ol(h.type, h.key, h.props, null, g.mode, v)),
                        (v.ref = qr(g, null, h)),
                        (v.return = g),
                        v
                    );
                case ir:
                    return (h = mu(h, g.mode, v)), (h.return = g), h;
                case on:
                    var C = h._init;
                    return p(g, C(h._payload), v);
            }
            if (ni(h) || Yr(h))
                return (h = $n(h, g.mode, v, null)), (h.return = g), h;
            dl(g, h);
        }
        return null;
    }
    function d(g, h, v, C) {
        var T = h !== null ? h.key : null;
        if ((typeof v == "string" && v !== "") || typeof v == "number")
            return T !== null ? null : u(g, h, "" + v, C);
        if (typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
                case tl:
                    return v.key === T ? s(g, h, v, C) : null;
                case ir:
                    return v.key === T ? c(g, h, v, C) : null;
                case on:
                    return (T = v._init), d(g, h, T(v._payload), C);
            }
            if (ni(v) || Yr(v)) return T !== null ? null : m(g, h, v, C, null);
            dl(g, v);
        }
        return null;
    }
    function k(g, h, v, C, T) {
        if ((typeof C == "string" && C !== "") || typeof C == "number")
            return (g = g.get(v) || null), u(h, g, "" + C, T);
        if (typeof C == "object" && C !== null) {
            switch (C.$$typeof) {
                case tl:
                    return (
                        (g = g.get(C.key === null ? v : C.key) || null),
                        s(h, g, C, T)
                    );
                case ir:
                    return (
                        (g = g.get(C.key === null ? v : C.key) || null),
                        c(h, g, C, T)
                    );
                case on:
                    var z = C._init;
                    return k(g, h, v, z(C._payload), T);
            }
            if (ni(C) || Yr(C))
                return (g = g.get(v) || null), m(h, g, C, T, null);
            dl(h, C);
        }
        return null;
    }
    function j(g, h, v, C) {
        for (
            var T = null, z = null, M = h, I = (h = 0), Z = null;
            M !== null && I < v.length;
            I++
        ) {
            M.index > I ? ((Z = M), (M = null)) : (Z = M.sibling);
            var W = d(g, M, v[I], C);
            if (W === null) {
                M === null && (M = Z);
                break;
            }
            e && M && W.alternate === null && t(g, M),
                (h = l(W, h, I)),
                z === null ? (T = W) : (z.sibling = W),
                (z = W),
                (M = Z);
        }
        if (I === v.length) return n(g, M), fe && Mn(g, I), T;
        if (M === null) {
            for (; I < v.length; I++)
                (M = p(g, v[I], C)),
                    M !== null &&
                        ((h = l(M, h, I)),
                        z === null ? (T = M) : (z.sibling = M),
                        (z = M));
            return fe && Mn(g, I), T;
        }
        for (M = r(g, M); I < v.length; I++)
            (Z = k(M, g, I, v[I], C)),
                Z !== null &&
                    (e &&
                        Z.alternate !== null &&
                        M.delete(Z.key === null ? I : Z.key),
                    (h = l(Z, h, I)),
                    z === null ? (T = Z) : (z.sibling = Z),
                    (z = Z));
        return (
            e &&
                M.forEach(function (de) {
                    return t(g, de);
                }),
            fe && Mn(g, I),
            T
        );
    }
    function P(g, h, v, C) {
        var T = Yr(v);
        if (typeof T != "function") throw Error(O(150));
        if (((v = T.call(v)), v == null)) throw Error(O(151));
        for (
            var z = (T = null), M = h, I = (h = 0), Z = null, W = v.next();
            M !== null && !W.done;
            I++, W = v.next()
        ) {
            M.index > I ? ((Z = M), (M = null)) : (Z = M.sibling);
            var de = d(g, M, W.value, C);
            if (de === null) {
                M === null && (M = Z);
                break;
            }
            e && M && de.alternate === null && t(g, M),
                (h = l(de, h, I)),
                z === null ? (T = de) : (z.sibling = de),
                (z = de),
                (M = Z);
        }
        if (W.done) return n(g, M), fe && Mn(g, I), T;
        if (M === null) {
            for (; !W.done; I++, W = v.next())
                (W = p(g, W.value, C)),
                    W !== null &&
                        ((h = l(W, h, I)),
                        z === null ? (T = W) : (z.sibling = W),
                        (z = W));
            return fe && Mn(g, I), T;
        }
        for (M = r(g, M); !W.done; I++, W = v.next())
            (W = k(M, g, I, W.value, C)),
                W !== null &&
                    (e &&
                        W.alternate !== null &&
                        M.delete(W.key === null ? I : W.key),
                    (h = l(W, h, I)),
                    z === null ? (T = W) : (z.sibling = W),
                    (z = W));
        return (
            e &&
                M.forEach(function (H) {
                    return t(g, H);
                }),
            fe && Mn(g, I),
            T
        );
    }
    function D(g, h, v, C) {
        if (
            (typeof v == "object" &&
                v !== null &&
                v.type === lr &&
                v.key === null &&
                (v = v.props.children),
            typeof v == "object" && v !== null)
        ) {
            switch (v.$$typeof) {
                case tl:
                    e: {
                        for (var T = v.key, z = h; z !== null; ) {
                            if (z.key === T) {
                                if (((T = v.type), T === lr)) {
                                    if (z.tag === 7) {
                                        n(g, z.sibling),
                                            (h = i(z, v.props.children)),
                                            (h.return = g),
                                            (g = h);
                                        break e;
                                    }
                                } else if (
                                    z.elementType === T ||
                                    (typeof T == "object" &&
                                        T !== null &&
                                        T.$$typeof === on &&
                                        ba(T) === z.type)
                                ) {
                                    n(g, z.sibling),
                                        (h = i(z, v.props)),
                                        (h.ref = qr(g, z, v)),
                                        (h.return = g),
                                        (g = h);
                                    break e;
                                }
                                n(g, z);
                                break;
                            } else t(g, z);
                            z = z.sibling;
                        }
                        v.type === lr
                            ? ((h = $n(v.props.children, g.mode, C, v.key)),
                              (h.return = g),
                              (g = h))
                            : ((C = Ol(
                                  v.type,
                                  v.key,
                                  v.props,
                                  null,
                                  g.mode,
                                  C
                              )),
                              (C.ref = qr(g, h, v)),
                              (C.return = g),
                              (g = C));
                    }
                    return o(g);
                case ir:
                    e: {
                        for (z = v.key; h !== null; ) {
                            if (h.key === z)
                                if (
                                    h.tag === 4 &&
                                    h.stateNode.containerInfo ===
                                        v.containerInfo &&
                                    h.stateNode.implementation ===
                                        v.implementation
                                ) {
                                    n(g, h.sibling),
                                        (h = i(h, v.children || [])),
                                        (h.return = g),
                                        (g = h);
                                    break e;
                                } else {
                                    n(g, h);
                                    break;
                                }
                            else t(g, h);
                            h = h.sibling;
                        }
                        (h = mu(v, g.mode, C)), (h.return = g), (g = h);
                    }
                    return o(g);
                case on:
                    return (z = v._init), D(g, h, z(v._payload), C);
            }
            if (ni(v)) return j(g, h, v, C);
            if (Yr(v)) return P(g, h, v, C);
            dl(g, v);
        }
        return (typeof v == "string" && v !== "") || typeof v == "number"
            ? ((v = "" + v),
              h !== null && h.tag === 6
                  ? (n(g, h.sibling), (h = i(h, v)), (h.return = g), (g = h))
                  : (n(g, h), (h = hu(v, g.mode, C)), (h.return = g), (g = h)),
              o(g))
            : n(g, h);
    }
    return D;
}
var Er = Qf(!0),
    Kf = Qf(!1),
    Wl = kn(null),
    Vl = null,
    pr = null,
    Ds = null;
function $s() {
    Ds = pr = Vl = null;
}
function Us(e) {
    var t = Wl.current;
    oe(Wl), (e._currentValue = t);
}
function Ku(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if (
            ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
                : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
            e === n)
        )
            break;
        e = e.return;
    }
}
function Sr(e, t) {
    (Vl = e),
        (Ds = pr = null),
        (e = e.dependencies),
        e !== null &&
            e.firstContext !== null &&
            (e.lanes & t && (Qe = !0), (e.firstContext = null));
}
function dt(e) {
    var t = e._currentValue;
    if (Ds !== e)
        if (((e = { context: e, memoizedValue: t, next: null }), pr === null)) {
            if (Vl === null) throw Error(O(308));
            (pr = e), (Vl.dependencies = { lanes: 0, firstContext: e });
        } else pr = pr.next = e;
    return t;
}
var Fn = null;
function Hs(e) {
    Fn === null ? (Fn = [e]) : Fn.push(e);
}
function Yf(e, t, n, r) {
    var i = t.interleaved;
    return (
        i === null ? ((n.next = n), Hs(t)) : ((n.next = i.next), (i.next = n)),
        (t.interleaved = n),
        Zt(e, r)
    );
}
function Zt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
        (e.childLanes |= t),
            (n = e.alternate),
            n !== null && (n.childLanes |= t),
            (n = e),
            (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
}
var un = !1;
function Bs(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null,
    };
}
function Gf(e, t) {
    (e = e.updateQueue),
        t.updateQueue === e &&
            (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
            });
}
function Yt(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null,
    };
}
function vn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), G & 2)) {
        var i = r.pending;
        return (
            i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
            (r.pending = t),
            Zt(e, n)
        );
    }
    return (
        (i = r.interleaved),
        i === null ? ((t.next = t), Hs(r)) : ((t.next = i.next), (i.next = t)),
        (r.interleaved = t),
        Zt(e, n)
    );
}
function kl(e, t, n) {
    if (
        ((t = t.updateQueue),
        t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ps(e, n);
    }
}
function ec(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
        var i = null,
            l = null;
        if (((n = n.firstBaseUpdate), n !== null)) {
            do {
                var o = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null,
                };
                l === null ? (i = l = o) : (l = l.next = o), (n = n.next);
            } while (n !== null);
            l === null ? (i = l = t) : (l = l.next = t);
        } else i = l = t;
        (n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: l,
            shared: r.shared,
            effects: r.effects,
        }),
            (e.updateQueue = n);
        return;
    }
    (e = n.lastBaseUpdate),
        e === null ? (n.firstBaseUpdate = t) : (e.next = t),
        (n.lastBaseUpdate = t);
}
function Ql(e, t, n, r) {
    var i = e.updateQueue;
    un = !1;
    var l = i.firstBaseUpdate,
        o = i.lastBaseUpdate,
        u = i.shared.pending;
    if (u !== null) {
        i.shared.pending = null;
        var s = u,
            c = s.next;
        (s.next = null), o === null ? (l = c) : (o.next = c), (o = s);
        var m = e.alternate;
        m !== null &&
            ((m = m.updateQueue),
            (u = m.lastBaseUpdate),
            u !== o &&
                (u === null ? (m.firstBaseUpdate = c) : (u.next = c),
                (m.lastBaseUpdate = s)));
    }
    if (l !== null) {
        var p = i.baseState;
        (o = 0), (m = c = s = null), (u = l);
        do {
            var d = u.lane,
                k = u.eventTime;
            if ((r & d) === d) {
                m !== null &&
                    (m = m.next =
                        {
                            eventTime: k,
                            lane: 0,
                            tag: u.tag,
                            payload: u.payload,
                            callback: u.callback,
                            next: null,
                        });
                e: {
                    var j = e,
                        P = u;
                    switch (((d = t), (k = n), P.tag)) {
                        case 1:
                            if (((j = P.payload), typeof j == "function")) {
                                p = j.call(k, p, d);
                                break e;
                            }
                            p = j;
                            break e;
                        case 3:
                            j.flags = (j.flags & -65537) | 128;
                        case 0:
                            if (
                                ((j = P.payload),
                                (d =
                                    typeof j == "function"
                                        ? j.call(k, p, d)
                                        : j),
                                d == null)
                            )
                                break e;
                            p = me({}, p, d);
                            break e;
                        case 2:
                            un = !0;
                    }
                }
                u.callback !== null &&
                    u.lane !== 0 &&
                    ((e.flags |= 64),
                    (d = i.effects),
                    d === null ? (i.effects = [u]) : d.push(u));
            } else
                (k = {
                    eventTime: k,
                    lane: d,
                    tag: u.tag,
                    payload: u.payload,
                    callback: u.callback,
                    next: null,
                }),
                    m === null ? ((c = m = k), (s = p)) : (m = m.next = k),
                    (o |= d);
            if (((u = u.next), u === null)) {
                if (((u = i.shared.pending), u === null)) break;
                (d = u),
                    (u = d.next),
                    (d.next = null),
                    (i.lastBaseUpdate = d),
                    (i.shared.pending = null);
            }
        } while (!0);
        if (
            (m === null && (s = p),
            (i.baseState = s),
            (i.firstBaseUpdate = c),
            (i.lastBaseUpdate = m),
            (t = i.shared.interleaved),
            t !== null)
        ) {
            i = t;
            do (o |= i.lane), (i = i.next);
            while (i !== t);
        } else l === null && (i.shared.lanes = 0);
        (Wn |= o), (e.lanes = o), (e.memoizedState = p);
    }
}
function tc(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                i = r.callback;
            if (i !== null) {
                if (((r.callback = null), (r = n), typeof i != "function"))
                    throw Error(O(191, i));
                i.call(r);
            }
        }
}
var Fi = {},
    At = kn(Fi),
    Ei = kn(Fi),
    ji = kn(Fi);
function An(e) {
    if (e === Fi) throw Error(O(174));
    return e;
}
function Ws(e, t) {
    switch ((re(ji, t), re(Ei, e), re(At, Fi), (e = t.nodeType), e)) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : ju(null, "");
            break;
        default:
            (e = e === 8 ? t.parentNode : t),
                (t = e.namespaceURI || null),
                (e = e.tagName),
                (t = ju(t, e));
    }
    oe(At), re(At, t);
}
function jr() {
    oe(At), oe(Ei), oe(ji);
}
function Xf(e) {
    An(ji.current);
    var t = An(At.current),
        n = ju(t, e.type);
    t !== n && (re(Ei, e), re(At, n));
}
function Vs(e) {
    Ei.current === e && (oe(At), oe(Ei));
}
var pe = kn(0);
function Kl(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (
                n !== null &&
                ((n = n.dehydrated),
                n === null || n.data === "$?" || n.data === "$!")
            )
                return t;
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t;
        } else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return null;
            t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
}
var su = [];
function Qs() {
    for (var e = 0; e < su.length; e++)
        su[e]._workInProgressVersionPrimary = null;
    su.length = 0;
}
var Cl = qt.ReactCurrentDispatcher,
    au = qt.ReactCurrentBatchConfig,
    Bn = 0,
    he = null,
    xe = null,
    je = null,
    Yl = !1,
    ci = !1,
    Pi = 0,
    Qh = 0;
function Le() {
    throw Error(O(321));
}
function Ks(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!jt(e[n], t[n])) return !1;
    return !0;
}
function Ys(e, t, n, r, i, l) {
    if (
        ((Bn = l),
        (he = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (Cl.current = e === null || e.memoizedState === null ? Xh : Zh),
        (e = n(r, i)),
        ci)
    ) {
        l = 0;
        do {
            if (((ci = !1), (Pi = 0), 25 <= l)) throw Error(O(301));
            (l += 1),
                (je = xe = null),
                (t.updateQueue = null),
                (Cl.current = Jh),
                (e = n(r, i));
        } while (ci);
    }
    if (
        ((Cl.current = Gl),
        (t = xe !== null && xe.next !== null),
        (Bn = 0),
        (je = xe = he = null),
        (Yl = !1),
        t)
    )
        throw Error(O(300));
    return e;
}
function Gs() {
    var e = Pi !== 0;
    return (Pi = 0), e;
}
function Lt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
    };
    return je === null ? (he.memoizedState = je = e) : (je = je.next = e), je;
}
function pt() {
    if (xe === null) {
        var e = he.alternate;
        e = e !== null ? e.memoizedState : null;
    } else e = xe.next;
    var t = je === null ? he.memoizedState : je.next;
    if (t !== null) (je = t), (xe = e);
    else {
        if (e === null) throw Error(O(310));
        (xe = e),
            (e = {
                memoizedState: xe.memoizedState,
                baseState: xe.baseState,
                baseQueue: xe.baseQueue,
                queue: xe.queue,
                next: null,
            }),
            je === null ? (he.memoizedState = je = e) : (je = je.next = e);
    }
    return je;
}
function Ti(e, t) {
    return typeof t == "function" ? t(e) : t;
}
function cu(e) {
    var t = pt(),
        n = t.queue;
    if (n === null) throw Error(O(311));
    n.lastRenderedReducer = e;
    var r = xe,
        i = r.baseQueue,
        l = n.pending;
    if (l !== null) {
        if (i !== null) {
            var o = i.next;
            (i.next = l.next), (l.next = o);
        }
        (r.baseQueue = i = l), (n.pending = null);
    }
    if (i !== null) {
        (l = i.next), (r = r.baseState);
        var u = (o = null),
            s = null,
            c = l;
        do {
            var m = c.lane;
            if ((Bn & m) === m)
                s !== null &&
                    (s = s.next =
                        {
                            lane: 0,
                            action: c.action,
                            hasEagerState: c.hasEagerState,
                            eagerState: c.eagerState,
                            next: null,
                        }),
                    (r = c.hasEagerState ? c.eagerState : e(r, c.action));
            else {
                var p = {
                    lane: m,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null,
                };
                s === null ? ((u = s = p), (o = r)) : (s = s.next = p),
                    (he.lanes |= m),
                    (Wn |= m);
            }
            c = c.next;
        } while (c !== null && c !== l);
        s === null ? (o = r) : (s.next = u),
            jt(r, t.memoizedState) || (Qe = !0),
            (t.memoizedState = r),
            (t.baseState = o),
            (t.baseQueue = s),
            (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
        i = e;
        do (l = i.lane), (he.lanes |= l), (Wn |= l), (i = i.next);
        while (i !== e);
    } else i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
}
function fu(e) {
    var t = pt(),
        n = t.queue;
    if (n === null) throw Error(O(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        i = n.pending,
        l = t.memoizedState;
    if (i !== null) {
        n.pending = null;
        var o = (i = i.next);
        do (l = e(l, o.action)), (o = o.next);
        while (o !== i);
        jt(l, t.memoizedState) || (Qe = !0),
            (t.memoizedState = l),
            t.baseQueue === null && (t.baseState = l),
            (n.lastRenderedState = l);
    }
    return [l, r];
}
function Zf() {}
function Jf(e, t) {
    var n = he,
        r = pt(),
        i = t(),
        l = !jt(r.memoizedState, i);
    if (
        (l && ((r.memoizedState = i), (Qe = !0)),
        (r = r.queue),
        Xs(ed.bind(null, n, r, e), [e]),
        r.getSnapshot !== t || l || (je !== null && je.memoizedState.tag & 1))
    ) {
        if (
            ((n.flags |= 2048),
            Oi(9, bf.bind(null, n, r, i, t), void 0, null),
            Pe === null)
        )
            throw Error(O(349));
        Bn & 30 || qf(n, t, i);
    }
    return i;
}
function qf(e, t, n) {
    (e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        (t = he.updateQueue),
        t === null
            ? ((t = { lastEffect: null, stores: null }),
              (he.updateQueue = t),
              (t.stores = [e]))
            : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function bf(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), td(t) && nd(e);
}
function ed(e, t, n) {
    return n(function () {
        td(t) && nd(e);
    });
}
function td(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !jt(e, n);
    } catch {
        return !0;
    }
}
function nd(e) {
    var t = Zt(e, 1);
    t !== null && Et(t, e, 1, -1);
}
function nc(e) {
    var t = Lt();
    return (
        typeof e == "function" && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Ti,
            lastRenderedState: e,
        }),
        (t.queue = e),
        (e = e.dispatch = Gh.bind(null, he, e)),
        [t.memoizedState, e]
    );
}
function Oi(e, t, n, r) {
    return (
        (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
        (t = he.updateQueue),
        t === null
            ? ((t = { lastEffect: null, stores: null }),
              (he.updateQueue = t),
              (t.lastEffect = e.next = e))
            : ((n = t.lastEffect),
              n === null
                  ? (t.lastEffect = e.next = e)
                  : ((r = n.next),
                    (n.next = e),
                    (e.next = r),
                    (t.lastEffect = e))),
        e
    );
}
function rd() {
    return pt().memoizedState;
}
function El(e, t, n, r) {
    var i = Lt();
    (he.flags |= e),
        (i.memoizedState = Oi(1 | t, n, void 0, r === void 0 ? null : r));
}
function ao(e, t, n, r) {
    var i = pt();
    r = r === void 0 ? null : r;
    var l = void 0;
    if (xe !== null) {
        var o = xe.memoizedState;
        if (((l = o.destroy), r !== null && Ks(r, o.deps))) {
            i.memoizedState = Oi(t, n, l, r);
            return;
        }
    }
    (he.flags |= e), (i.memoizedState = Oi(1 | t, n, l, r));
}
function rc(e, t) {
    return El(8390656, 8, e, t);
}
function Xs(e, t) {
    return ao(2048, 8, e, t);
}
function id(e, t) {
    return ao(4, 2, e, t);
}
function ld(e, t) {
    return ao(4, 4, e, t);
}
function od(e, t) {
    if (typeof t == "function")
        return (
            (e = e()),
            t(e),
            function () {
                t(null);
            }
        );
    if (t != null)
        return (
            (e = e()),
            (t.current = e),
            function () {
                t.current = null;
            }
        );
}
function ud(e, t, n) {
    return (
        (n = n != null ? n.concat([e]) : null), ao(4, 4, od.bind(null, t, e), n)
    );
}
function Zs() {}
function sd(e, t) {
    var n = pt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ks(t, r[1])
        ? r[0]
        : ((n.memoizedState = [e, t]), e);
}
function ad(e, t) {
    var n = pt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ks(t, r[1])
        ? r[0]
        : ((e = e()), (n.memoizedState = [e, t]), e);
}
function cd(e, t, n) {
    return Bn & 21
        ? (jt(n, t) ||
              ((n = mf()), (he.lanes |= n), (Wn |= n), (e.baseState = !0)),
          t)
        : (e.baseState && ((e.baseState = !1), (Qe = !0)),
          (e.memoizedState = n));
}
function Kh(e, t) {
    var n = ee;
    (ee = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = au.transition;
    au.transition = {};
    try {
        e(!1), t();
    } finally {
        (ee = n), (au.transition = r);
    }
}
function fd() {
    return pt().memoizedState;
}
function Yh(e, t, n) {
    var r = yn(e);
    if (
        ((n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
        }),
        dd(e))
    )
        pd(t, n);
    else if (((n = Yf(e, t, n, r)), n !== null)) {
        var i = $e();
        Et(n, e, r, i), hd(n, t, r);
    }
}
function Gh(e, t, n) {
    var r = yn(e),
        i = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
        };
    if (dd(e)) pd(t, i);
    else {
        var l = e.alternate;
        if (
            e.lanes === 0 &&
            (l === null || l.lanes === 0) &&
            ((l = t.lastRenderedReducer), l !== null)
        )
            try {
                var o = t.lastRenderedState,
                    u = l(o, n);
                if (((i.hasEagerState = !0), (i.eagerState = u), jt(u, o))) {
                    var s = t.interleaved;
                    s === null
                        ? ((i.next = i), Hs(t))
                        : ((i.next = s.next), (s.next = i)),
                        (t.interleaved = i);
                    return;
                }
            } catch {
            } finally {
            }
        (n = Yf(e, t, i, r)),
            n !== null && ((i = $e()), Et(n, e, r, i), hd(n, t, r));
    }
}
function dd(e) {
    var t = e.alternate;
    return e === he || (t !== null && t === he);
}
function pd(e, t) {
    ci = Yl = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (e.pending = t);
}
function hd(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ps(e, n);
    }
}
var Gl = {
        readContext: dt,
        useCallback: Le,
        useContext: Le,
        useEffect: Le,
        useImperativeHandle: Le,
        useInsertionEffect: Le,
        useLayoutEffect: Le,
        useMemo: Le,
        useReducer: Le,
        useRef: Le,
        useState: Le,
        useDebugValue: Le,
        useDeferredValue: Le,
        useTransition: Le,
        useMutableSource: Le,
        useSyncExternalStore: Le,
        useId: Le,
        unstable_isNewReconciler: !1,
    },
    Xh = {
        readContext: dt,
        useCallback: function (e, t) {
            return (Lt().memoizedState = [e, t === void 0 ? null : t]), e;
        },
        useContext: dt,
        useEffect: rc,
        useImperativeHandle: function (e, t, n) {
            return (
                (n = n != null ? n.concat([e]) : null),
                El(4194308, 4, od.bind(null, t, e), n)
            );
        },
        useLayoutEffect: function (e, t) {
            return El(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
            return El(4, 2, e, t);
        },
        useMemo: function (e, t) {
            var n = Lt();
            return (
                (t = t === void 0 ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
            );
        },
        useReducer: function (e, t, n) {
            var r = Lt();
            return (
                (t = n !== void 0 ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = Yh.bind(null, he, e)),
                [r.memoizedState, e]
            );
        },
        useRef: function (e) {
            var t = Lt();
            return (e = { current: e }), (t.memoizedState = e);
        },
        useState: nc,
        useDebugValue: Zs,
        useDeferredValue: function (e) {
            return (Lt().memoizedState = e);
        },
        useTransition: function () {
            var e = nc(!1),
                t = e[0];
            return (e = Kh.bind(null, e[1])), (Lt().memoizedState = e), [t, e];
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, t, n) {
            var r = he,
                i = Lt();
            if (fe) {
                if (n === void 0) throw Error(O(407));
                n = n();
            } else {
                if (((n = t()), Pe === null)) throw Error(O(349));
                Bn & 30 || qf(r, t, n);
            }
            i.memoizedState = n;
            var l = { value: n, getSnapshot: t };
            return (
                (i.queue = l),
                rc(ed.bind(null, r, l, e), [e]),
                (r.flags |= 2048),
                Oi(9, bf.bind(null, r, l, n, t), void 0, null),
                n
            );
        },
        useId: function () {
            var e = Lt(),
                t = Pe.identifierPrefix;
            if (fe) {
                var n = Kt,
                    r = Qt;
                (n = (r & ~(1 << (32 - Ct(r) - 1))).toString(32) + n),
                    (t = ":" + t + "R" + n),
                    (n = Pi++),
                    0 < n && (t += "H" + n.toString(32)),
                    (t += ":");
            } else (n = Qh++), (t = ":" + t + "r" + n.toString(32) + ":");
            return (e.memoizedState = t);
        },
        unstable_isNewReconciler: !1,
    },
    Zh = {
        readContext: dt,
        useCallback: sd,
        useContext: dt,
        useEffect: Xs,
        useImperativeHandle: ud,
        useInsertionEffect: id,
        useLayoutEffect: ld,
        useMemo: ad,
        useReducer: cu,
        useRef: rd,
        useState: function () {
            return cu(Ti);
        },
        useDebugValue: Zs,
        useDeferredValue: function (e) {
            var t = pt();
            return cd(t, xe.memoizedState, e);
        },
        useTransition: function () {
            var e = cu(Ti)[0],
                t = pt().memoizedState;
            return [e, t];
        },
        useMutableSource: Zf,
        useSyncExternalStore: Jf,
        useId: fd,
        unstable_isNewReconciler: !1,
    },
    Jh = {
        readContext: dt,
        useCallback: sd,
        useContext: dt,
        useEffect: Xs,
        useImperativeHandle: ud,
        useInsertionEffect: id,
        useLayoutEffect: ld,
        useMemo: ad,
        useReducer: fu,
        useRef: rd,
        useState: function () {
            return fu(Ti);
        },
        useDebugValue: Zs,
        useDeferredValue: function (e) {
            var t = pt();
            return xe === null
                ? (t.memoizedState = e)
                : cd(t, xe.memoizedState, e);
        },
        useTransition: function () {
            var e = fu(Ti)[0],
                t = pt().memoizedState;
            return [e, t];
        },
        useMutableSource: Zf,
        useSyncExternalStore: Jf,
        useId: fd,
        unstable_isNewReconciler: !1,
    };
function _t(e, t) {
    if (e && e.defaultProps) {
        (t = me({}, t)), (e = e.defaultProps);
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t;
    }
    return t;
}
function Yu(e, t, n, r) {
    (t = e.memoizedState),
        (n = n(r, t)),
        (n = n == null ? t : me({}, t, n)),
        (e.memoizedState = n),
        e.lanes === 0 && (e.updateQueue.baseState = n);
}
var co = {
    isMounted: function (e) {
        return (e = e._reactInternals) ? Kn(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = $e(),
            i = yn(e),
            l = Yt(r, i);
        (l.payload = t),
            n != null && (l.callback = n),
            (t = vn(e, l, i)),
            t !== null && (Et(t, e, i, r), kl(t, e, i));
    },
    enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = $e(),
            i = yn(e),
            l = Yt(r, i);
        (l.tag = 1),
            (l.payload = t),
            n != null && (l.callback = n),
            (t = vn(e, l, i)),
            t !== null && (Et(t, e, i, r), kl(t, e, i));
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = $e(),
            r = yn(e),
            i = Yt(n, r);
        (i.tag = 2),
            t != null && (i.callback = t),
            (t = vn(e, i, r)),
            t !== null && (Et(t, e, r, n), kl(t, e, r));
    },
};
function ic(e, t, n, r, i, l, o) {
    return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == "function"
            ? e.shouldComponentUpdate(r, l, o)
            : t.prototype && t.prototype.isPureReactComponent
            ? !_i(n, r) || !_i(i, l)
            : !0
    );
}
function md(e, t, n) {
    var r = !1,
        i = _n,
        l = t.contextType;
    return (
        typeof l == "object" && l !== null
            ? (l = dt(l))
            : ((i = Ye(t) ? Un : Ae.current),
              (r = t.contextTypes),
              (l = (r = r != null) ? kr(e, i) : _n)),
        (t = new t(n, l)),
        (e.memoizedState =
            t.state !== null && t.state !== void 0 ? t.state : null),
        (t.updater = co),
        (e.stateNode = t),
        (t._reactInternals = e),
        r &&
            ((e = e.stateNode),
            (e.__reactInternalMemoizedUnmaskedChildContext = i),
            (e.__reactInternalMemoizedMaskedChildContext = l)),
        t
    );
}
function lc(e, t, n, r) {
    (e = t.state),
        typeof t.componentWillReceiveProps == "function" &&
            t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == "function" &&
            t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && co.enqueueReplaceState(t, t.state, null);
}
function Gu(e, t, n, r) {
    var i = e.stateNode;
    (i.props = n), (i.state = e.memoizedState), (i.refs = {}), Bs(e);
    var l = t.contextType;
    typeof l == "object" && l !== null
        ? (i.context = dt(l))
        : ((l = Ye(t) ? Un : Ae.current), (i.context = kr(e, l))),
        (i.state = e.memoizedState),
        (l = t.getDerivedStateFromProps),
        typeof l == "function" && (Yu(e, t, l, n), (i.state = e.memoizedState)),
        typeof t.getDerivedStateFromProps == "function" ||
            typeof i.getSnapshotBeforeUpdate == "function" ||
            (typeof i.UNSAFE_componentWillMount != "function" &&
                typeof i.componentWillMount != "function") ||
            ((t = i.state),
            typeof i.componentWillMount == "function" && i.componentWillMount(),
            typeof i.UNSAFE_componentWillMount == "function" &&
                i.UNSAFE_componentWillMount(),
            t !== i.state && co.enqueueReplaceState(i, i.state, null),
            Ql(e, n, i, r),
            (i.state = e.memoizedState)),
        typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Pr(e, t) {
    try {
        var n = "",
            r = t;
        do (n += Ep(r)), (r = r.return);
        while (r);
        var i = n;
    } catch (l) {
        i =
            `
  Error generating stack: ` +
            l.message +
            `
  ` +
            l.stack;
    }
    return { value: e, source: t, stack: i, digest: null };
}
function du(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Xu(e, t) {
    try {
        console.error(t.value);
    } catch (n) {
        setTimeout(function () {
            throw n;
        });
    }
}
var qh = typeof WeakMap == "function" ? WeakMap : Map;
function vd(e, t, n) {
    (n = Yt(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
        (n.callback = function () {
            Zl || ((Zl = !0), (ls = r)), Xu(e, t);
        }),
        n
    );
}
function gd(e, t, n) {
    (n = Yt(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = t.value;
        (n.payload = function () {
            return r(i);
        }),
            (n.callback = function () {
                Xu(e, t);
            });
    }
    var l = e.stateNode;
    return (
        l !== null &&
            typeof l.componentDidCatch == "function" &&
            (n.callback = function () {
                Xu(e, t),
                    typeof r != "function" &&
                        (gn === null ? (gn = new Set([this])) : gn.add(this));
                var o = t.stack;
                this.componentDidCatch(t.value, {
                    componentStack: o !== null ? o : "",
                });
            }),
        n
    );
}
function oc(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new qh();
        var i = new Set();
        r.set(t, i);
    } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
    i.has(n) || (i.add(n), (e = d1.bind(null, e, t, n)), t.then(e, e));
}
function uc(e) {
    do {
        var t;
        if (
            ((t = e.tag === 13) &&
                ((t = e.memoizedState),
                (t = t !== null ? t.dehydrated !== null : !0)),
            t)
        )
            return e;
        e = e.return;
    } while (e !== null);
    return null;
}
function sc(e, t, n, r, i) {
    return e.mode & 1
        ? ((e.flags |= 65536), (e.lanes = i), e)
        : (e === t
              ? (e.flags |= 65536)
              : ((e.flags |= 128),
                (n.flags |= 131072),
                (n.flags &= -52805),
                n.tag === 1 &&
                    (n.alternate === null
                        ? (n.tag = 17)
                        : ((t = Yt(-1, 1)), (t.tag = 2), vn(n, t, 1))),
                (n.lanes |= 1)),
          e);
}
var bh = qt.ReactCurrentOwner,
    Qe = !1;
function De(e, t, n, r) {
    t.child = e === null ? Kf(t, null, n, r) : Er(t, e.child, n, r);
}
function ac(e, t, n, r, i) {
    n = n.render;
    var l = t.ref;
    return (
        Sr(t, i),
        (r = Ys(e, t, n, r, l, i)),
        (n = Gs()),
        e !== null && !Qe
            ? ((t.updateQueue = e.updateQueue),
              (t.flags &= -2053),
              (e.lanes &= ~i),
              Jt(e, t, i))
            : (fe && n && Fs(t), (t.flags |= 1), De(e, t, r, i), t.child)
    );
}
function cc(e, t, n, r, i) {
    if (e === null) {
        var l = n.type;
        return typeof l == "function" &&
            !ia(l) &&
            l.defaultProps === void 0 &&
            n.compare === null &&
            n.defaultProps === void 0
            ? ((t.tag = 15), (t.type = l), yd(e, t, l, r, i))
            : ((e = Ol(n.type, null, r, t, t.mode, i)),
              (e.ref = t.ref),
              (e.return = t),
              (t.child = e));
    }
    if (((l = e.child), !(e.lanes & i))) {
        var o = l.memoizedProps;
        if (
            ((n = n.compare),
            (n = n !== null ? n : _i),
            n(o, r) && e.ref === t.ref)
        )
            return Jt(e, t, i);
    }
    return (
        (t.flags |= 1),
        (e = wn(l, r)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e)
    );
}
function yd(e, t, n, r, i) {
    if (e !== null) {
        var l = e.memoizedProps;
        if (_i(l, r) && e.ref === t.ref)
            if (((Qe = !1), (t.pendingProps = r = l), (e.lanes & i) !== 0))
                e.flags & 131072 && (Qe = !0);
            else return (t.lanes = e.lanes), Jt(e, t, i);
    }
    return Zu(e, t, n, r, i);
}
function wd(e, t, n) {
    var r = t.pendingProps,
        i = r.children,
        l = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
            }),
                re(mr, et),
                (et |= n);
        else {
            if (!(n & 1073741824))
                return (
                    (e = l !== null ? l.baseLanes | n : n),
                    (t.lanes = t.childLanes = 1073741824),
                    (t.memoizedState = {
                        baseLanes: e,
                        cachePool: null,
                        transitions: null,
                    }),
                    (t.updateQueue = null),
                    re(mr, et),
                    (et |= e),
                    null
                );
            (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
            }),
                (r = l !== null ? l.baseLanes : n),
                re(mr, et),
                (et |= r);
        }
    else
        l !== null
            ? ((r = l.baseLanes | n), (t.memoizedState = null))
            : (r = n),
            re(mr, et),
            (et |= r);
    return De(e, t, i, n), t.child;
}
function Sd(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
        ((t.flags |= 512), (t.flags |= 2097152));
}
function Zu(e, t, n, r, i) {
    var l = Ye(n) ? Un : Ae.current;
    return (
        (l = kr(t, l)),
        Sr(t, i),
        (n = Ys(e, t, n, r, l, i)),
        (r = Gs()),
        e !== null && !Qe
            ? ((t.updateQueue = e.updateQueue),
              (t.flags &= -2053),
              (e.lanes &= ~i),
              Jt(e, t, i))
            : (fe && r && Fs(t), (t.flags |= 1), De(e, t, n, i), t.child)
    );
}
function fc(e, t, n, r, i) {
    if (Ye(n)) {
        var l = !0;
        Ul(t);
    } else l = !1;
    if ((Sr(t, i), t.stateNode === null))
        jl(e, t), md(t, n, r), Gu(t, n, r, i), (r = !0);
    else if (e === null) {
        var o = t.stateNode,
            u = t.memoizedProps;
        o.props = u;
        var s = o.context,
            c = n.contextType;
        typeof c == "object" && c !== null
            ? (c = dt(c))
            : ((c = Ye(n) ? Un : Ae.current), (c = kr(t, c)));
        var m = n.getDerivedStateFromProps,
            p =
                typeof m == "function" ||
                typeof o.getSnapshotBeforeUpdate == "function";
        p ||
            (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
                typeof o.componentWillReceiveProps != "function") ||
            ((u !== r || s !== c) && lc(t, o, r, c)),
            (un = !1);
        var d = t.memoizedState;
        (o.state = d),
            Ql(t, r, o, i),
            (s = t.memoizedState),
            u !== r || d !== s || Ke.current || un
                ? (typeof m == "function" &&
                      (Yu(t, n, m, r), (s = t.memoizedState)),
                  (u = un || ic(t, n, u, r, d, s, c))
                      ? (p ||
                            (typeof o.UNSAFE_componentWillMount != "function" &&
                                typeof o.componentWillMount != "function") ||
                            (typeof o.componentWillMount == "function" &&
                                o.componentWillMount(),
                            typeof o.UNSAFE_componentWillMount == "function" &&
                                o.UNSAFE_componentWillMount()),
                        typeof o.componentDidMount == "function" &&
                            (t.flags |= 4194308))
                      : (typeof o.componentDidMount == "function" &&
                            (t.flags |= 4194308),
                        (t.memoizedProps = r),
                        (t.memoizedState = s)),
                  (o.props = r),
                  (o.state = s),
                  (o.context = c),
                  (r = u))
                : (typeof o.componentDidMount == "function" &&
                      (t.flags |= 4194308),
                  (r = !1));
    } else {
        (o = t.stateNode),
            Gf(e, t),
            (u = t.memoizedProps),
            (c = t.type === t.elementType ? u : _t(t.type, u)),
            (o.props = c),
            (p = t.pendingProps),
            (d = o.context),
            (s = n.contextType),
            typeof s == "object" && s !== null
                ? (s = dt(s))
                : ((s = Ye(n) ? Un : Ae.current), (s = kr(t, s)));
        var k = n.getDerivedStateFromProps;
        (m =
            typeof k == "function" ||
            typeof o.getSnapshotBeforeUpdate == "function") ||
            (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
                typeof o.componentWillReceiveProps != "function") ||
            ((u !== p || d !== s) && lc(t, o, r, s)),
            (un = !1),
            (d = t.memoizedState),
            (o.state = d),
            Ql(t, r, o, i);
        var j = t.memoizedState;
        u !== p || d !== j || Ke.current || un
            ? (typeof k == "function" &&
                  (Yu(t, n, k, r), (j = t.memoizedState)),
              (c = un || ic(t, n, c, r, d, j, s) || !1)
                  ? (m ||
                        (typeof o.UNSAFE_componentWillUpdate != "function" &&
                            typeof o.componentWillUpdate != "function") ||
                        (typeof o.componentWillUpdate == "function" &&
                            o.componentWillUpdate(r, j, s),
                        typeof o.UNSAFE_componentWillUpdate == "function" &&
                            o.UNSAFE_componentWillUpdate(r, j, s)),
                    typeof o.componentDidUpdate == "function" && (t.flags |= 4),
                    typeof o.getSnapshotBeforeUpdate == "function" &&
                        (t.flags |= 1024))
                  : (typeof o.componentDidUpdate != "function" ||
                        (u === e.memoizedProps && d === e.memoizedState) ||
                        (t.flags |= 4),
                    typeof o.getSnapshotBeforeUpdate != "function" ||
                        (u === e.memoizedProps && d === e.memoizedState) ||
                        (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = j)),
              (o.props = r),
              (o.state = j),
              (o.context = s),
              (r = c))
            : (typeof o.componentDidUpdate != "function" ||
                  (u === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
              typeof o.getSnapshotBeforeUpdate != "function" ||
                  (u === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 1024),
              (r = !1));
    }
    return Ju(e, t, n, r, l, i);
}
function Ju(e, t, n, r, i, l) {
    Sd(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o) return i && Za(t, n, !1), Jt(e, t, l);
    (r = t.stateNode), (bh.current = t);
    var u =
        o && typeof n.getDerivedStateFromError != "function"
            ? null
            : r.render();
    return (
        (t.flags |= 1),
        e !== null && o
            ? ((t.child = Er(t, e.child, null, l)),
              (t.child = Er(t, null, u, l)))
            : De(e, t, u, l),
        (t.memoizedState = r.state),
        i && Za(t, n, !0),
        t.child
    );
}
function _d(e) {
    var t = e.stateNode;
    t.pendingContext
        ? Xa(e, t.pendingContext, t.pendingContext !== t.context)
        : t.context && Xa(e, t.context, !1),
        Ws(e, t.containerInfo);
}
function dc(e, t, n, r, i) {
    return Cr(), Rs(i), (t.flags |= 256), De(e, t, n, r), t.child;
}
var qu = { dehydrated: null, treeContext: null, retryLane: 0 };
function bu(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
}
function xd(e, t, n) {
    var r = t.pendingProps,
        i = pe.current,
        l = !1,
        o = (t.flags & 128) !== 0,
        u;
    if (
        ((u = o) ||
            (u = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
        u
            ? ((l = !0), (t.flags &= -129))
            : (e === null || e.memoizedState !== null) && (i |= 1),
        re(pe, i & 1),
        e === null)
    )
        return (
            Qu(t),
            (e = t.memoizedState),
            e !== null && ((e = e.dehydrated), e !== null)
                ? (t.mode & 1
                      ? e.data === "$!"
                          ? (t.lanes = 8)
                          : (t.lanes = 1073741824)
                      : (t.lanes = 1),
                  null)
                : ((o = r.children),
                  (e = r.fallback),
                  l
                      ? ((r = t.mode),
                        (l = t.child),
                        (o = { mode: "hidden", children: o }),
                        !(r & 1) && l !== null
                            ? ((l.childLanes = 0), (l.pendingProps = o))
                            : (l = ho(o, r, 0, null)),
                        (e = $n(e, r, n, null)),
                        (l.return = t),
                        (e.return = t),
                        (l.sibling = e),
                        (t.child = l),
                        (t.child.memoizedState = bu(n)),
                        (t.memoizedState = qu),
                        e)
                      : Js(t, o))
        );
    if (((i = e.memoizedState), i !== null && ((u = i.dehydrated), u !== null)))
        return e1(e, t, o, r, u, i, n);
    if (l) {
        (l = r.fallback), (o = t.mode), (i = e.child), (u = i.sibling);
        var s = { mode: "hidden", children: r.children };
        return (
            !(o & 1) && t.child !== i
                ? ((r = t.child),
                  (r.childLanes = 0),
                  (r.pendingProps = s),
                  (t.deletions = null))
                : ((r = wn(i, s)),
                  (r.subtreeFlags = i.subtreeFlags & 14680064)),
            u !== null
                ? (l = wn(u, l))
                : ((l = $n(l, o, n, null)), (l.flags |= 2)),
            (l.return = t),
            (r.return = t),
            (r.sibling = l),
            (t.child = r),
            (r = l),
            (l = t.child),
            (o = e.child.memoizedState),
            (o =
                o === null
                    ? bu(n)
                    : {
                          baseLanes: o.baseLanes | n,
                          cachePool: null,
                          transitions: o.transitions,
                      }),
            (l.memoizedState = o),
            (l.childLanes = e.childLanes & ~n),
            (t.memoizedState = qu),
            r
        );
    }
    return (
        (l = e.child),
        (e = l.sibling),
        (r = wn(l, { mode: "visible", children: r.children })),
        !(t.mode & 1) && (r.lanes = n),
        (r.return = t),
        (r.sibling = null),
        e !== null &&
            ((n = t.deletions),
            n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
        (t.child = r),
        (t.memoizedState = null),
        r
    );
}
function Js(e, t) {
    return (
        (t = ho({ mode: "visible", children: t }, e.mode, 0, null)),
        (t.return = e),
        (e.child = t)
    );
}
function pl(e, t, n, r) {
    return (
        r !== null && Rs(r),
        Er(t, e.child, null, n),
        (e = Js(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
    );
}
function e1(e, t, n, r, i, l, o) {
    if (n)
        return t.flags & 256
            ? ((t.flags &= -257), (r = du(Error(O(422)))), pl(e, t, o, r))
            : t.memoizedState !== null
            ? ((t.child = e.child), (t.flags |= 128), null)
            : ((l = r.fallback),
              (i = t.mode),
              (r = ho({ mode: "visible", children: r.children }, i, 0, null)),
              (l = $n(l, i, o, null)),
              (l.flags |= 2),
              (r.return = t),
              (l.return = t),
              (r.sibling = l),
              (t.child = r),
              t.mode & 1 && Er(t, e.child, null, o),
              (t.child.memoizedState = bu(o)),
              (t.memoizedState = qu),
              l);
    if (!(t.mode & 1)) return pl(e, t, o, null);
    if (i.data === "$!") {
        if (((r = i.nextSibling && i.nextSibling.dataset), r)) var u = r.dgst;
        return (
            (r = u), (l = Error(O(419))), (r = du(l, r, void 0)), pl(e, t, o, r)
        );
    }
    if (((u = (o & e.childLanes) !== 0), Qe || u)) {
        if (((r = Pe), r !== null)) {
            switch (o & -o) {
                case 4:
                    i = 2;
                    break;
                case 16:
                    i = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    i = 32;
                    break;
                case 536870912:
                    i = 268435456;
                    break;
                default:
                    i = 0;
            }
            (i = i & (r.suspendedLanes | o) ? 0 : i),
                i !== 0 &&
                    i !== l.retryLane &&
                    ((l.retryLane = i), Zt(e, i), Et(r, e, i, -1));
        }
        return ra(), (r = du(Error(O(421)))), pl(e, t, o, r);
    }
    return i.data === "$?"
        ? ((t.flags |= 128),
          (t.child = e.child),
          (t = p1.bind(null, e)),
          (i._reactRetry = t),
          null)
        : ((e = l.treeContext),
          (tt = mn(i.nextSibling)),
          (nt = t),
          (fe = !0),
          (kt = null),
          e !== null &&
              ((st[at++] = Qt),
              (st[at++] = Kt),
              (st[at++] = Hn),
              (Qt = e.id),
              (Kt = e.overflow),
              (Hn = t)),
          (t = Js(t, r.children)),
          (t.flags |= 4096),
          t);
}
function pc(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Ku(e.return, t, n);
}
function pu(e, t, n, r, i) {
    var l = e.memoizedState;
    l === null
        ? (e.memoizedState = {
              isBackwards: t,
              rendering: null,
              renderingStartTime: 0,
              last: r,
              tail: n,
              tailMode: i,
          })
        : ((l.isBackwards = t),
          (l.rendering = null),
          (l.renderingStartTime = 0),
          (l.last = r),
          (l.tail = n),
          (l.tailMode = i));
}
function kd(e, t, n) {
    var r = t.pendingProps,
        i = r.revealOrder,
        l = r.tail;
    if ((De(e, t, r.children, n), (r = pe.current), r & 2))
        (r = (r & 1) | 2), (t.flags |= 128);
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13) e.memoizedState !== null && pc(e, n, t);
                else if (e.tag === 19) pc(e, n, t);
                else if (e.child !== null) {
                    (e.child.return = e), (e = e.child);
                    continue;
                }
                if (e === t) break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t) break e;
                    e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
            }
        r &= 1;
    }
    if ((re(pe, r), !(t.mode & 1))) t.memoizedState = null;
    else
        switch (i) {
            case "forwards":
                for (n = t.child, i = null; n !== null; )
                    (e = n.alternate),
                        e !== null && Kl(e) === null && (i = n),
                        (n = n.sibling);
                (n = i),
                    n === null
                        ? ((i = t.child), (t.child = null))
                        : ((i = n.sibling), (n.sibling = null)),
                    pu(t, !1, i, n, l);
                break;
            case "backwards":
                for (n = null, i = t.child, t.child = null; i !== null; ) {
                    if (((e = i.alternate), e !== null && Kl(e) === null)) {
                        t.child = i;
                        break;
                    }
                    (e = i.sibling), (i.sibling = n), (n = i), (i = e);
                }
                pu(t, !0, n, null, l);
                break;
            case "together":
                pu(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null;
        }
    return t.child;
}
function jl(e, t) {
    !(t.mode & 1) &&
        e !== null &&
        ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Jt(e, t, n) {
    if (
        (e !== null && (t.dependencies = e.dependencies),
        (Wn |= t.lanes),
        !(n & t.childLanes))
    )
        return null;
    if (e !== null && t.child !== e.child) throw Error(O(153));
    if (t.child !== null) {
        for (
            e = t.child, n = wn(e, e.pendingProps), t.child = n, n.return = t;
            e.sibling !== null;

        )
            (e = e.sibling),
                (n = n.sibling = wn(e, e.pendingProps)),
                (n.return = t);
        n.sibling = null;
    }
    return t.child;
}
function t1(e, t, n) {
    switch (t.tag) {
        case 3:
            _d(t), Cr();
            break;
        case 5:
            Xf(t);
            break;
        case 1:
            Ye(t.type) && Ul(t);
            break;
        case 4:
            Ws(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                i = t.memoizedProps.value;
            re(Wl, r._currentValue), (r._currentValue = i);
            break;
        case 13:
            if (((r = t.memoizedState), r !== null))
                return r.dehydrated !== null
                    ? (re(pe, pe.current & 1), (t.flags |= 128), null)
                    : n & t.child.childLanes
                    ? xd(e, t, n)
                    : (re(pe, pe.current & 1),
                      (e = Jt(e, t, n)),
                      e !== null ? e.sibling : null);
            re(pe, pe.current & 1);
            break;
        case 19:
            if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
                if (r) return kd(e, t, n);
                t.flags |= 128;
            }
            if (
                ((i = t.memoizedState),
                i !== null &&
                    ((i.rendering = null),
                    (i.tail = null),
                    (i.lastEffect = null)),
                re(pe, pe.current),
                r)
            )
                break;
            return null;
        case 22:
        case 23:
            return (t.lanes = 0), wd(e, t, n);
    }
    return Jt(e, t, n);
}
var Cd, es, Ed, jd;
Cd = function (e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            (n.child.return = n), (n = n.child);
            continue;
        }
        if (n === t) break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t) return;
            n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
    }
};
es = function () {};
Ed = function (e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
        (e = t.stateNode), An(At.current);
        var l = null;
        switch (n) {
            case "input":
                (i = xu(e, i)), (r = xu(e, r)), (l = []);
                break;
            case "select":
                (i = me({}, i, { value: void 0 })),
                    (r = me({}, r, { value: void 0 })),
                    (l = []);
                break;
            case "textarea":
                (i = Eu(e, i)), (r = Eu(e, r)), (l = []);
                break;
            default:
                typeof i.onClick != "function" &&
                    typeof r.onClick == "function" &&
                    (e.onclick = Dl);
        }
        Pu(n, r);
        var o;
        n = null;
        for (c in i)
            if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && i[c] != null)
                if (c === "style") {
                    var u = i[c];
                    for (o in u)
                        u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
                } else
                    c !== "dangerouslySetInnerHTML" &&
                        c !== "children" &&
                        c !== "suppressContentEditableWarning" &&
                        c !== "suppressHydrationWarning" &&
                        c !== "autoFocus" &&
                        (hi.hasOwnProperty(c)
                            ? l || (l = [])
                            : (l = l || []).push(c, null));
        for (c in r) {
            var s = r[c];
            if (
                ((u = i?.[c]),
                r.hasOwnProperty(c) && s !== u && (s != null || u != null))
            )
                if (c === "style")
                    if (u) {
                        for (o in u)
                            !u.hasOwnProperty(o) ||
                                (s && s.hasOwnProperty(o)) ||
                                (n || (n = {}), (n[o] = ""));
                        for (o in s)
                            s.hasOwnProperty(o) &&
                                u[o] !== s[o] &&
                                (n || (n = {}), (n[o] = s[o]));
                    } else n || (l || (l = []), l.push(c, n)), (n = s);
                else
                    c === "dangerouslySetInnerHTML"
                        ? ((s = s ? s.__html : void 0),
                          (u = u ? u.__html : void 0),
                          s != null && u !== s && (l = l || []).push(c, s))
                        : c === "children"
                        ? (typeof s != "string" && typeof s != "number") ||
                          (l = l || []).push(c, "" + s)
                        : c !== "suppressContentEditableWarning" &&
                          c !== "suppressHydrationWarning" &&
                          (hi.hasOwnProperty(c)
                              ? (s != null &&
                                    c === "onScroll" &&
                                    le("scroll", e),
                                l || u === s || (l = []))
                              : (l = l || []).push(c, s));
        }
        n && (l = l || []).push("style", n);
        var c = l;
        (t.updateQueue = c) && (t.flags |= 4);
    }
};
jd = function (e, t, n, r) {
    n !== r && (t.flags |= 4);
};
function br(e, t) {
    if (!fe)
        switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var n = null; t !== null; )
                    t.alternate !== null && (n = t), (t = t.sibling);
                n === null ? (e.tail = null) : (n.sibling = null);
                break;
            case "collapsed":
                n = e.tail;
                for (var r = null; n !== null; )
                    n.alternate !== null && (r = n), (n = n.sibling);
                r === null
                    ? t || e.tail === null
                        ? (e.tail = null)
                        : (e.tail.sibling = null)
                    : (r.sibling = null);
        }
}
function Ie(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var i = e.child; i !== null; )
            (n |= i.lanes | i.childLanes),
                (r |= i.subtreeFlags & 14680064),
                (r |= i.flags & 14680064),
                (i.return = e),
                (i = i.sibling);
    else
        for (i = e.child; i !== null; )
            (n |= i.lanes | i.childLanes),
                (r |= i.subtreeFlags),
                (r |= i.flags),
                (i.return = e),
                (i = i.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function n1(e, t, n) {
    var r = t.pendingProps;
    switch ((As(t), t.tag)) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return Ie(t), null;
        case 1:
            return Ye(t.type) && $l(), Ie(t), null;
        case 3:
            return (
                (r = t.stateNode),
                jr(),
                oe(Ke),
                oe(Ae),
                Qs(),
                r.pendingContext &&
                    ((r.context = r.pendingContext), (r.pendingContext = null)),
                (e === null || e.child === null) &&
                    (fl(t)
                        ? (t.flags |= 4)
                        : e === null ||
                          (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                          ((t.flags |= 1024),
                          kt !== null && (ss(kt), (kt = null)))),
                es(e, t),
                Ie(t),
                null
            );
        case 5:
            Vs(t);
            var i = An(ji.current);
            if (((n = t.type), e !== null && t.stateNode != null))
                Ed(e, t, n, r, i),
                    e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(O(166));
                    return Ie(t), null;
                }
                if (((e = An(At.current)), fl(t))) {
                    (r = t.stateNode), (n = t.type);
                    var l = t.memoizedProps;
                    switch (
                        ((r[It] = t), (r[Ci] = l), (e = (t.mode & 1) !== 0), n)
                    ) {
                        case "dialog":
                            le("cancel", r), le("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            le("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (i = 0; i < ii.length; i++) le(ii[i], r);
                            break;
                        case "source":
                            le("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            le("error", r), le("load", r);
                            break;
                        case "details":
                            le("toggle", r);
                            break;
                        case "input":
                            xa(r, l), le("invalid", r);
                            break;
                        case "select":
                            (r._wrapperState = { wasMultiple: !!l.multiple }),
                                le("invalid", r);
                            break;
                        case "textarea":
                            Ca(r, l), le("invalid", r);
                    }
                    Pu(n, l), (i = null);
                    for (var o in l)
                        if (l.hasOwnProperty(o)) {
                            var u = l[o];
                            o === "children"
                                ? typeof u == "string"
                                    ? r.textContent !== u &&
                                      (l.suppressHydrationWarning !== !0 &&
                                          cl(r.textContent, u, e),
                                      (i = ["children", u]))
                                    : typeof u == "number" &&
                                      r.textContent !== "" + u &&
                                      (l.suppressHydrationWarning !== !0 &&
                                          cl(r.textContent, u, e),
                                      (i = ["children", "" + u]))
                                : hi.hasOwnProperty(o) &&
                                  u != null &&
                                  o === "onScroll" &&
                                  le("scroll", r);
                        }
                    switch (n) {
                        case "input":
                            nl(r), ka(r, l, !0);
                            break;
                        case "textarea":
                            nl(r), Ea(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof l.onClick == "function" && (r.onclick = Dl);
                    }
                    (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
                } else {
                    (o = i.nodeType === 9 ? i : i.ownerDocument),
                        e === "http://www.w3.org/1999/xhtml" && (e = bc(n)),
                        e === "http://www.w3.org/1999/xhtml"
                            ? n === "script"
                                ? ((e = o.createElement("div")),
                                  (e.innerHTML = "<script></script>"),
                                  (e = e.removeChild(e.firstChild)))
                                : typeof r.is == "string"
                                ? (e = o.createElement(n, { is: r.is }))
                                : ((e = o.createElement(n)),
                                  n === "select" &&
                                      ((o = e),
                                      r.multiple
                                          ? (o.multiple = !0)
                                          : r.size && (o.size = r.size)))
                            : (e = o.createElementNS(e, n)),
                        (e[It] = t),
                        (e[Ci] = r),
                        Cd(e, t, !1, !1),
                        (t.stateNode = e);
                    e: {
                        switch (((o = Tu(n, r)), n)) {
                            case "dialog":
                                le("cancel", e), le("close", e), (i = r);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                le("load", e), (i = r);
                                break;
                            case "video":
                            case "audio":
                                for (i = 0; i < ii.length; i++) le(ii[i], e);
                                i = r;
                                break;
                            case "source":
                                le("error", e), (i = r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                le("error", e), le("load", e), (i = r);
                                break;
                            case "details":
                                le("toggle", e), (i = r);
                                break;
                            case "input":
                                xa(e, r), (i = xu(e, r)), le("invalid", e);
                                break;
                            case "option":
                                i = r;
                                break;
                            case "select":
                                (e._wrapperState = {
                                    wasMultiple: !!r.multiple,
                                }),
                                    (i = me({}, r, { value: void 0 })),
                                    le("invalid", e);
                                break;
                            case "textarea":
                                Ca(e, r), (i = Eu(e, r)), le("invalid", e);
                                break;
                            default:
                                i = r;
                        }
                        Pu(n, i), (u = i);
                        for (l in u)
                            if (u.hasOwnProperty(l)) {
                                var s = u[l];
                                l === "style"
                                    ? nf(e, s)
                                    : l === "dangerouslySetInnerHTML"
                                    ? ((s = s ? s.__html : void 0),
                                      s != null && ef(e, s))
                                    : l === "children"
                                    ? typeof s == "string"
                                        ? (n !== "textarea" || s !== "") &&
                                          mi(e, s)
                                        : typeof s == "number" && mi(e, "" + s)
                                    : l !== "suppressContentEditableWarning" &&
                                      l !== "suppressHydrationWarning" &&
                                      l !== "autoFocus" &&
                                      (hi.hasOwnProperty(l)
                                          ? s != null &&
                                            l === "onScroll" &&
                                            le("scroll", e)
                                          : s != null && _s(e, l, s, o));
                            }
                        switch (n) {
                            case "input":
                                nl(e), ka(e, r, !1);
                                break;
                            case "textarea":
                                nl(e), Ea(e);
                                break;
                            case "option":
                                r.value != null &&
                                    e.setAttribute("value", "" + Sn(r.value));
                                break;
                            case "select":
                                (e.multiple = !!r.multiple),
                                    (l = r.value),
                                    l != null
                                        ? vr(e, !!r.multiple, l, !1)
                                        : r.defaultValue != null &&
                                          vr(
                                              e,
                                              !!r.multiple,
                                              r.defaultValue,
                                              !0
                                          );
                                break;
                            default:
                                typeof i.onClick == "function" &&
                                    (e.onclick = Dl);
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1;
                        }
                    }
                    r && (t.flags |= 4);
                }
                t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
            }
            return Ie(t), null;
        case 6:
            if (e && t.stateNode != null) jd(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null)
                    throw Error(O(166));
                if (((n = An(ji.current)), An(At.current), fl(t))) {
                    if (
                        ((r = t.stateNode),
                        (n = t.memoizedProps),
                        (r[It] = t),
                        (l = r.nodeValue !== n) && ((e = nt), e !== null))
                    )
                        switch (e.tag) {
                            case 3:
                                cl(r.nodeValue, n, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !==
                                    !0 &&
                                    cl(r.nodeValue, n, (e.mode & 1) !== 0);
                        }
                    l && (t.flags |= 4);
                } else
                    (r = (
                        n.nodeType === 9 ? n : n.ownerDocument
                    ).createTextNode(r)),
                        (r[It] = t),
                        (t.stateNode = r);
            }
            return Ie(t), null;
        case 13:
            if (
                (oe(pe),
                (r = t.memoizedState),
                e === null ||
                    (e.memoizedState !== null &&
                        e.memoizedState.dehydrated !== null))
            ) {
                if (fe && tt !== null && t.mode & 1 && !(t.flags & 128))
                    Vf(), Cr(), (t.flags |= 98560), (l = !1);
                else if (((l = fl(t)), r !== null && r.dehydrated !== null)) {
                    if (e === null) {
                        if (!l) throw Error(O(318));
                        if (
                            ((l = t.memoizedState),
                            (l = l !== null ? l.dehydrated : null),
                            !l)
                        )
                            throw Error(O(317));
                        l[It] = t;
                    } else
                        Cr(),
                            !(t.flags & 128) && (t.memoizedState = null),
                            (t.flags |= 4);
                    Ie(t), (l = !1);
                } else kt !== null && (ss(kt), (kt = null)), (l = !0);
                if (!l) return t.flags & 65536 ? t : null;
            }
            return t.flags & 128
                ? ((t.lanes = n), t)
                : ((r = r !== null),
                  r !== (e !== null && e.memoizedState !== null) &&
                      r &&
                      ((t.child.flags |= 8192),
                      t.mode & 1 &&
                          (e === null || pe.current & 1
                              ? ke === 0 && (ke = 3)
                              : ra())),
                  t.updateQueue !== null && (t.flags |= 4),
                  Ie(t),
                  null);
        case 4:
            return (
                jr(),
                es(e, t),
                e === null && xi(t.stateNode.containerInfo),
                Ie(t),
                null
            );
        case 10:
            return Us(t.type._context), Ie(t), null;
        case 17:
            return Ye(t.type) && $l(), Ie(t), null;
        case 19:
            if ((oe(pe), (l = t.memoizedState), l === null)) return Ie(t), null;
            if (((r = (t.flags & 128) !== 0), (o = l.rendering), o === null))
                if (r) br(l, !1);
                else {
                    if (ke !== 0 || (e !== null && e.flags & 128))
                        for (e = t.child; e !== null; ) {
                            if (((o = Kl(e)), o !== null)) {
                                for (
                                    t.flags |= 128,
                                        br(l, !1),
                                        r = o.updateQueue,
                                        r !== null &&
                                            ((t.updateQueue = r),
                                            (t.flags |= 4)),
                                        t.subtreeFlags = 0,
                                        r = n,
                                        n = t.child;
                                    n !== null;

                                )
                                    (l = n),
                                        (e = r),
                                        (l.flags &= 14680066),
                                        (o = l.alternate),
                                        o === null
                                            ? ((l.childLanes = 0),
                                              (l.lanes = e),
                                              (l.child = null),
                                              (l.subtreeFlags = 0),
                                              (l.memoizedProps = null),
                                              (l.memoizedState = null),
                                              (l.updateQueue = null),
                                              (l.dependencies = null),
                                              (l.stateNode = null))
                                            : ((l.childLanes = o.childLanes),
                                              (l.lanes = o.lanes),
                                              (l.child = o.child),
                                              (l.subtreeFlags = 0),
                                              (l.deletions = null),
                                              (l.memoizedProps =
                                                  o.memoizedProps),
                                              (l.memoizedState =
                                                  o.memoizedState),
                                              (l.updateQueue = o.updateQueue),
                                              (l.type = o.type),
                                              (e = o.dependencies),
                                              (l.dependencies =
                                                  e === null
                                                      ? null
                                                      : {
                                                            lanes: e.lanes,
                                                            firstContext:
                                                                e.firstContext,
                                                        })),
                                        (n = n.sibling);
                                return re(pe, (pe.current & 1) | 2), t.child;
                            }
                            e = e.sibling;
                        }
                    l.tail !== null &&
                        Se() > Tr &&
                        ((t.flags |= 128),
                        (r = !0),
                        br(l, !1),
                        (t.lanes = 4194304));
                }
            else {
                if (!r)
                    if (((e = Kl(o)), e !== null)) {
                        if (
                            ((t.flags |= 128),
                            (r = !0),
                            (n = e.updateQueue),
                            n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                            br(l, !0),
                            l.tail === null &&
                                l.tailMode === "hidden" &&
                                !o.alternate &&
                                !fe)
                        )
                            return Ie(t), null;
                    } else
                        2 * Se() - l.renderingStartTime > Tr &&
                            n !== 1073741824 &&
                            ((t.flags |= 128),
                            (r = !0),
                            br(l, !1),
                            (t.lanes = 4194304));
                l.isBackwards
                    ? ((o.sibling = t.child), (t.child = o))
                    : ((n = l.last),
                      n !== null ? (n.sibling = o) : (t.child = o),
                      (l.last = o));
            }
            return l.tail !== null
                ? ((t = l.tail),
                  (l.rendering = t),
                  (l.tail = t.sibling),
                  (l.renderingStartTime = Se()),
                  (t.sibling = null),
                  (n = pe.current),
                  re(pe, r ? (n & 1) | 2 : n & 1),
                  t)
                : (Ie(t), null);
        case 22:
        case 23:
            return (
                na(),
                (r = t.memoizedState !== null),
                e !== null &&
                    (e.memoizedState !== null) !== r &&
                    (t.flags |= 8192),
                r && t.mode & 1
                    ? et & 1073741824 &&
                      (Ie(t), t.subtreeFlags & 6 && (t.flags |= 8192))
                    : Ie(t),
                null
            );
        case 24:
            return null;
        case 25:
            return null;
    }
    throw Error(O(156, t.tag));
}
function r1(e, t) {
    switch ((As(t), t.tag)) {
        case 1:
            return (
                Ye(t.type) && $l(),
                (e = t.flags),
                e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
            );
        case 3:
            return (
                jr(),
                oe(Ke),
                oe(Ae),
                Qs(),
                (e = t.flags),
                e & 65536 && !(e & 128)
                    ? ((t.flags = (e & -65537) | 128), t)
                    : null
            );
        case 5:
            return Vs(t), null;
        case 13:
            if (
                (oe(pe),
                (e = t.memoizedState),
                e !== null && e.dehydrated !== null)
            ) {
                if (t.alternate === null) throw Error(O(340));
                Cr();
            }
            return (
                (e = t.flags),
                e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
            );
        case 19:
            return oe(pe), null;
        case 4:
            return jr(), null;
        case 10:
            return Us(t.type._context), null;
        case 22:
        case 23:
            return na(), null;
        case 24:
            return null;
        default:
            return null;
    }
}
var hl = !1,
    Fe = !1,
    i1 = typeof WeakSet == "function" ? WeakSet : Set,
    F = null;
function hr(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null);
            } catch (r) {
                ye(e, t, r);
            }
        else n.current = null;
}
function ts(e, t, n) {
    try {
        n();
    } catch (r) {
        ye(e, t, r);
    }
}
var hc = !1;
function l1(e, t) {
    if (((Du = Fl), (e = zf()), Is(e))) {
        if ("selectionStart" in e)
            var n = { start: e.selectionStart, end: e.selectionEnd };
        else
            e: {
                n = ((n = e.ownerDocument) && n.defaultView) || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var i = r.anchorOffset,
                        l = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType, l.nodeType;
                    } catch {
                        n = null;
                        break e;
                    }
                    var o = 0,
                        u = -1,
                        s = -1,
                        c = 0,
                        m = 0,
                        p = e,
                        d = null;
                    t: for (;;) {
                        for (
                            var k;
                            p !== n ||
                                (i !== 0 && p.nodeType !== 3) ||
                                (u = o + i),
                                p !== l ||
                                    (r !== 0 && p.nodeType !== 3) ||
                                    (s = o + r),
                                p.nodeType === 3 && (o += p.nodeValue.length),
                                (k = p.firstChild) !== null;

                        )
                            (d = p), (p = k);
                        for (;;) {
                            if (p === e) break t;
                            if (
                                (d === n && ++c === i && (u = o),
                                d === l && ++m === r && (s = o),
                                (k = p.nextSibling) !== null)
                            )
                                break;
                            (p = d), (d = p.parentNode);
                        }
                        p = k;
                    }
                    n = u === -1 || s === -1 ? null : { start: u, end: s };
                } else n = null;
            }
        n = n || { start: 0, end: 0 };
    } else n = null;
    for (
        $u = { focusedElem: e, selectionRange: n }, Fl = !1, F = t;
        F !== null;

    )
        if (
            ((t = F),
            (e = t.child),
            (t.subtreeFlags & 1028) !== 0 && e !== null)
        )
            (e.return = t), (F = e);
        else
            for (; F !== null; ) {
                t = F;
                try {
                    var j = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (j !== null) {
                                    var P = j.memoizedProps,
                                        D = j.memoizedState,
                                        g = t.stateNode,
                                        h = g.getSnapshotBeforeUpdate(
                                            t.elementType === t.type
                                                ? P
                                                : _t(t.type, P),
                                            D
                                        );
                                    g.__reactInternalSnapshotBeforeUpdate = h;
                                }
                                break;
                            case 3:
                                var v = t.stateNode.containerInfo;
                                v.nodeType === 1
                                    ? (v.textContent = "")
                                    : v.nodeType === 9 &&
                                      v.documentElement &&
                                      v.removeChild(v.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(O(163));
                        }
                } catch (C) {
                    ye(t, t.return, C);
                }
                if (((e = t.sibling), e !== null)) {
                    (e.return = t.return), (F = e);
                    break;
                }
                F = t.return;
            }
    return (j = hc), (hc = !1), j;
}
function fi(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
        var i = (r = r.next);
        do {
            if ((i.tag & e) === e) {
                var l = i.destroy;
                (i.destroy = void 0), l !== void 0 && ts(t, n, l);
            }
            i = i.next;
        } while (i !== r);
    }
}
function fo(e, t) {
    if (
        ((t = t.updateQueue),
        (t = t !== null ? t.lastEffect : null),
        t !== null)
    ) {
        var n = (t = t.next);
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
            }
            n = n.next;
        } while (n !== t);
    }
}
function ns(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n;
        }
        typeof t == "function" ? t(e) : (t.current = e);
    }
}
function Pd(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), Pd(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 &&
            ((t = e.stateNode),
            t !== null &&
                (delete t[It],
                delete t[Ci],
                delete t[Bu],
                delete t[Hh],
                delete t[Bh])),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null);
}
function Td(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function mc(e) {
    e: for (;;) {
        for (; e.sibling === null; ) {
            if (e.return === null || Td(e.return)) return null;
            e = e.return;
        }
        for (
            e.sibling.return = e.return, e = e.sibling;
            e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

        ) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            (e.child.return = e), (e = e.child);
        }
        if (!(e.flags & 2)) return e.stateNode;
    }
}
function rs(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        (e = e.stateNode),
            t
                ? n.nodeType === 8
                    ? n.parentNode.insertBefore(e, t)
                    : n.insertBefore(e, t)
                : (n.nodeType === 8
                      ? ((t = n.parentNode), t.insertBefore(e, n))
                      : ((t = n), t.appendChild(e)),
                  (n = n._reactRootContainer),
                  n != null || t.onclick !== null || (t.onclick = Dl));
    else if (r !== 4 && ((e = e.child), e !== null))
        for (rs(e, t, n), e = e.sibling; e !== null; )
            rs(e, t, n), (e = e.sibling);
}
function is(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
        for (is(e, t, n), e = e.sibling; e !== null; )
            is(e, t, n), (e = e.sibling);
}
var Te = null,
    xt = !1;
function ln(e, t, n) {
    for (n = n.child; n !== null; ) Od(e, t, n), (n = n.sibling);
}
function Od(e, t, n) {
    if (Ft && typeof Ft.onCommitFiberUnmount == "function")
        try {
            Ft.onCommitFiberUnmount(ro, n);
        } catch {}
    switch (n.tag) {
        case 5:
            Fe || hr(n, t);
        case 6:
            var r = Te,
                i = xt;
            (Te = null),
                ln(e, t, n),
                (Te = r),
                (xt = i),
                Te !== null &&
                    (xt
                        ? ((e = Te),
                          (n = n.stateNode),
                          e.nodeType === 8
                              ? e.parentNode.removeChild(n)
                              : e.removeChild(n))
                        : Te.removeChild(n.stateNode));
            break;
        case 18:
            Te !== null &&
                (xt
                    ? ((e = Te),
                      (n = n.stateNode),
                      e.nodeType === 8
                          ? ou(e.parentNode, n)
                          : e.nodeType === 1 && ou(e, n),
                      wi(e))
                    : ou(Te, n.stateNode));
            break;
        case 4:
            (r = Te),
                (i = xt),
                (Te = n.stateNode.containerInfo),
                (xt = !0),
                ln(e, t, n),
                (Te = r),
                (xt = i);
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (
                !Fe &&
                ((r = n.updateQueue),
                r !== null && ((r = r.lastEffect), r !== null))
            ) {
                i = r = r.next;
                do {
                    var l = i,
                        o = l.destroy;
                    (l = l.tag),
                        o !== void 0 && (l & 2 || l & 4) && ts(n, t, o),
                        (i = i.next);
                } while (i !== r);
            }
            ln(e, t, n);
            break;
        case 1:
            if (
                !Fe &&
                (hr(n, t),
                (r = n.stateNode),
                typeof r.componentWillUnmount == "function")
            )
                try {
                    (r.props = n.memoizedProps),
                        (r.state = n.memoizedState),
                        r.componentWillUnmount();
                } catch (u) {
                    ye(n, t, u);
                }
            ln(e, t, n);
            break;
        case 21:
            ln(e, t, n);
            break;
        case 22:
            n.mode & 1
                ? ((Fe = (r = Fe) || n.memoizedState !== null),
                  ln(e, t, n),
                  (Fe = r))
                : ln(e, t, n);
            break;
        default:
            ln(e, t, n);
    }
}
function vc(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new i1()),
            t.forEach(function (r) {
                var i = h1.bind(null, e, r);
                n.has(r) || (n.add(r), r.then(i, i));
            });
    }
}
function St(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var l = e,
                    o = t,
                    u = o;
                e: for (; u !== null; ) {
                    switch (u.tag) {
                        case 5:
                            (Te = u.stateNode), (xt = !1);
                            break e;
                        case 3:
                            (Te = u.stateNode.containerInfo), (xt = !0);
                            break e;
                        case 4:
                            (Te = u.stateNode.containerInfo), (xt = !0);
                            break e;
                    }
                    u = u.return;
                }
                if (Te === null) throw Error(O(160));
                Od(l, o, i), (Te = null), (xt = !1);
                var s = i.alternate;
                s !== null && (s.return = null), (i.return = null);
            } catch (c) {
                ye(i, t, c);
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; ) Nd(t, e), (t = t.sibling);
}
function Nd(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if ((St(t, e), Mt(e), r & 4)) {
                try {
                    fi(3, e, e.return), fo(3, e);
                } catch (P) {
                    ye(e, e.return, P);
                }
                try {
                    fi(5, e, e.return);
                } catch (P) {
                    ye(e, e.return, P);
                }
            }
            break;
        case 1:
            St(t, e), Mt(e), r & 512 && n !== null && hr(n, n.return);
            break;
        case 5:
            if (
                (St(t, e),
                Mt(e),
                r & 512 && n !== null && hr(n, n.return),
                e.flags & 32)
            ) {
                var i = e.stateNode;
                try {
                    mi(i, "");
                } catch (P) {
                    ye(e, e.return, P);
                }
            }
            if (r & 4 && ((i = e.stateNode), i != null)) {
                var l = e.memoizedProps,
                    o = n !== null ? n.memoizedProps : l,
                    u = e.type,
                    s = e.updateQueue;
                if (((e.updateQueue = null), s !== null))
                    try {
                        u === "input" &&
                            l.type === "radio" &&
                            l.name != null &&
                            Jc(i, l),
                            Tu(u, o);
                        var c = Tu(u, l);
                        for (o = 0; o < s.length; o += 2) {
                            var m = s[o],
                                p = s[o + 1];
                            m === "style"
                                ? nf(i, p)
                                : m === "dangerouslySetInnerHTML"
                                ? ef(i, p)
                                : m === "children"
                                ? mi(i, p)
                                : _s(i, m, p, c);
                        }
                        switch (u) {
                            case "input":
                                ku(i, l);
                                break;
                            case "textarea":
                                qc(i, l);
                                break;
                            case "select":
                                var d = i._wrapperState.wasMultiple;
                                i._wrapperState.wasMultiple = !!l.multiple;
                                var k = l.value;
                                k != null
                                    ? vr(i, !!l.multiple, k, !1)
                                    : d !== !!l.multiple &&
                                      (l.defaultValue != null
                                          ? vr(
                                                i,
                                                !!l.multiple,
                                                l.defaultValue,
                                                !0
                                            )
                                          : vr(
                                                i,
                                                !!l.multiple,
                                                l.multiple ? [] : "",
                                                !1
                                            ));
                        }
                        i[Ci] = l;
                    } catch (P) {
                        ye(e, e.return, P);
                    }
            }
            break;
        case 6:
            if ((St(t, e), Mt(e), r & 4)) {
                if (e.stateNode === null) throw Error(O(162));
                (i = e.stateNode), (l = e.memoizedProps);
                try {
                    i.nodeValue = l;
                } catch (P) {
                    ye(e, e.return, P);
                }
            }
            break;
        case 3:
            if (
                (St(t, e),
                Mt(e),
                r & 4 && n !== null && n.memoizedState.isDehydrated)
            )
                try {
                    wi(t.containerInfo);
                } catch (P) {
                    ye(e, e.return, P);
                }
            break;
        case 4:
            St(t, e), Mt(e);
            break;
        case 13:
            St(t, e),
                Mt(e),
                (i = e.child),
                i.flags & 8192 &&
                    ((l = i.memoizedState !== null),
                    (i.stateNode.isHidden = l),
                    !l ||
                        (i.alternate !== null &&
                            i.alternate.memoizedState !== null) ||
                        (ea = Se())),
                r & 4 && vc(e);
            break;
        case 22:
            if (
                ((m = n !== null && n.memoizedState !== null),
                e.mode & 1
                    ? ((Fe = (c = Fe) || m), St(t, e), (Fe = c))
                    : St(t, e),
                Mt(e),
                r & 8192)
            ) {
                if (
                    ((c = e.memoizedState !== null),
                    (e.stateNode.isHidden = c) && !m && e.mode & 1)
                )
                    for (F = e, m = e.child; m !== null; ) {
                        for (p = F = m; F !== null; ) {
                            switch (((d = F), (k = d.child), d.tag)) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    fi(4, d, d.return);
                                    break;
                                case 1:
                                    hr(d, d.return);
                                    var j = d.stateNode;
                                    if (
                                        typeof j.componentWillUnmount ==
                                        "function"
                                    ) {
                                        (r = d), (n = d.return);
                                        try {
                                            (t = r),
                                                (j.props = t.memoizedProps),
                                                (j.state = t.memoizedState),
                                                j.componentWillUnmount();
                                        } catch (P) {
                                            ye(r, n, P);
                                        }
                                    }
                                    break;
                                case 5:
                                    hr(d, d.return);
                                    break;
                                case 22:
                                    if (d.memoizedState !== null) {
                                        yc(p);
                                        continue;
                                    }
                            }
                            k !== null ? ((k.return = d), (F = k)) : yc(p);
                        }
                        m = m.sibling;
                    }
                e: for (m = null, p = e; ; ) {
                    if (p.tag === 5) {
                        if (m === null) {
                            m = p;
                            try {
                                (i = p.stateNode),
                                    c
                                        ? ((l = i.style),
                                          typeof l.setProperty == "function"
                                              ? l.setProperty(
                                                    "display",
                                                    "none",
                                                    "important"
                                                )
                                              : (l.display = "none"))
                                        : ((u = p.stateNode),
                                          (s = p.memoizedProps.style),
                                          (o =
                                              s != null &&
                                              s.hasOwnProperty("display")
                                                  ? s.display
                                                  : null),
                                          (u.style.display = tf("display", o)));
                            } catch (P) {
                                ye(e, e.return, P);
                            }
                        }
                    } else if (p.tag === 6) {
                        if (m === null)
                            try {
                                p.stateNode.nodeValue = c
                                    ? ""
                                    : p.memoizedProps;
                            } catch (P) {
                                ye(e, e.return, P);
                            }
                    } else if (
                        ((p.tag !== 22 && p.tag !== 23) ||
                            p.memoizedState === null ||
                            p === e) &&
                        p.child !== null
                    ) {
                        (p.child.return = p), (p = p.child);
                        continue;
                    }
                    if (p === e) break e;
                    for (; p.sibling === null; ) {
                        if (p.return === null || p.return === e) break e;
                        m === p && (m = null), (p = p.return);
                    }
                    m === p && (m = null),
                        (p.sibling.return = p.return),
                        (p = p.sibling);
                }
            }
            break;
        case 19:
            St(t, e), Mt(e), r & 4 && vc(e);
            break;
        case 21:
            break;
        default:
            St(t, e), Mt(e);
    }
}
function Mt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (Td(n)) {
                        var r = n;
                        break e;
                    }
                    n = n.return;
                }
                throw Error(O(160));
            }
            switch (r.tag) {
                case 5:
                    var i = r.stateNode;
                    r.flags & 32 && (mi(i, ""), (r.flags &= -33));
                    var l = mc(e);
                    is(e, l, i);
                    break;
                case 3:
                case 4:
                    var o = r.stateNode.containerInfo,
                        u = mc(e);
                    rs(e, u, o);
                    break;
                default:
                    throw Error(O(161));
            }
        } catch (s) {
            ye(e, e.return, s);
        }
        e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
}
function o1(e, t, n) {
    (F = e), zd(e);
}
function zd(e, t, n) {
    for (var r = (e.mode & 1) !== 0; F !== null; ) {
        var i = F,
            l = i.child;
        if (i.tag === 22 && r) {
            var o = i.memoizedState !== null || hl;
            if (!o) {
                var u = i.alternate,
                    s = (u !== null && u.memoizedState !== null) || Fe;
                u = hl;
                var c = Fe;
                if (((hl = o), (Fe = s) && !c))
                    for (F = i; F !== null; )
                        (o = F),
                            (s = o.child),
                            o.tag === 22 && o.memoizedState !== null
                                ? wc(i)
                                : s !== null
                                ? ((s.return = o), (F = s))
                                : wc(i);
                for (; l !== null; ) (F = l), zd(l), (l = l.sibling);
                (F = i), (hl = u), (Fe = c);
            }
            gc(e);
        } else
            i.subtreeFlags & 8772 && l !== null
                ? ((l.return = i), (F = l))
                : gc(e);
    }
}
function gc(e) {
    for (; F !== null; ) {
        var t = F;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            Fe || fo(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (t.flags & 4 && !Fe)
                                if (n === null) r.componentDidMount();
                                else {
                                    var i =
                                        t.elementType === t.type
                                            ? n.memoizedProps
                                            : _t(t.type, n.memoizedProps);
                                    r.componentDidUpdate(
                                        i,
                                        n.memoizedState,
                                        r.__reactInternalSnapshotBeforeUpdate
                                    );
                                }
                            var l = t.updateQueue;
                            l !== null && tc(t, l, r);
                            break;
                        case 3:
                            var o = t.updateQueue;
                            if (o !== null) {
                                if (((n = null), t.child !== null))
                                    switch (t.child.tag) {
                                        case 5:
                                            n = t.child.stateNode;
                                            break;
                                        case 1:
                                            n = t.child.stateNode;
                                    }
                                tc(t, o, n);
                            }
                            break;
                        case 5:
                            var u = t.stateNode;
                            if (n === null && t.flags & 4) {
                                n = u;
                                var s = t.memoizedProps;
                                switch (t.type) {
                                    case "button":
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        s.autoFocus && n.focus();
                                        break;
                                    case "img":
                                        s.src && (n.src = s.src);
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (t.memoizedState === null) {
                                var c = t.alternate;
                                if (c !== null) {
                                    var m = c.memoizedState;
                                    if (m !== null) {
                                        var p = m.dehydrated;
                                        p !== null && wi(p);
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(O(163));
                    }
                Fe || (t.flags & 512 && ns(t));
            } catch (d) {
                ye(t, t.return, d);
            }
        }
        if (t === e) {
            F = null;
            break;
        }
        if (((n = t.sibling), n !== null)) {
            (n.return = t.return), (F = n);
            break;
        }
        F = t.return;
    }
}
function yc(e) {
    for (; F !== null; ) {
        var t = F;
        if (t === e) {
            F = null;
            break;
        }
        var n = t.sibling;
        if (n !== null) {
            (n.return = t.return), (F = n);
            break;
        }
        F = t.return;
    }
}
function wc(e) {
    for (; F !== null; ) {
        var t = F;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        fo(4, t);
                    } catch (s) {
                        ye(t, n, s);
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var i = t.return;
                        try {
                            r.componentDidMount();
                        } catch (s) {
                            ye(t, i, s);
                        }
                    }
                    var l = t.return;
                    try {
                        ns(t);
                    } catch (s) {
                        ye(t, l, s);
                    }
                    break;
                case 5:
                    var o = t.return;
                    try {
                        ns(t);
                    } catch (s) {
                        ye(t, o, s);
                    }
            }
        } catch (s) {
            ye(t, t.return, s);
        }
        if (t === e) {
            F = null;
            break;
        }
        var u = t.sibling;
        if (u !== null) {
            (u.return = t.return), (F = u);
            break;
        }
        F = t.return;
    }
}
var u1 = Math.ceil,
    Xl = qt.ReactCurrentDispatcher,
    qs = qt.ReactCurrentOwner,
    ft = qt.ReactCurrentBatchConfig,
    G = 0,
    Pe = null,
    _e = null,
    Oe = 0,
    et = 0,
    mr = kn(0),
    ke = 0,
    Ni = null,
    Wn = 0,
    po = 0,
    bs = 0,
    di = null,
    Ve = null,
    ea = 0,
    Tr = 1 / 0,
    Wt = null,
    Zl = !1,
    ls = null,
    gn = null,
    ml = !1,
    fn = null,
    Jl = 0,
    pi = 0,
    os = null,
    Pl = -1,
    Tl = 0;
function $e() {
    return G & 6 ? Se() : Pl !== -1 ? Pl : (Pl = Se());
}
function yn(e) {
    return e.mode & 1
        ? G & 2 && Oe !== 0
            ? Oe & -Oe
            : Vh.transition !== null
            ? (Tl === 0 && (Tl = mf()), Tl)
            : ((e = ee),
              e !== 0 ||
                  ((e = window.event), (e = e === void 0 ? 16 : xf(e.type))),
              e)
        : 1;
}
function Et(e, t, n, r) {
    if (50 < pi) throw ((pi = 0), (os = null), Error(O(185)));
    Mi(e, n, r),
        (!(G & 2) || e !== Pe) &&
            (e === Pe && (!(G & 2) && (po |= n), ke === 4 && an(e, Oe)),
            Ge(e, r),
            n === 1 &&
                G === 0 &&
                !(t.mode & 1) &&
                ((Tr = Se() + 500), so && Cn()));
}
function Ge(e, t) {
    var n = e.callbackNode;
    Vp(e, t);
    var r = Il(e, e === Pe ? Oe : 0);
    if (r === 0)
        n !== null && Ta(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
        if ((n != null && Ta(n), t === 1))
            e.tag === 0 ? Wh(Sc.bind(null, e)) : Hf(Sc.bind(null, e)),
                $h(function () {
                    !(G & 6) && Cn();
                }),
                (n = null);
        else {
            switch (vf(r)) {
                case 1:
                    n = js;
                    break;
                case 4:
                    n = pf;
                    break;
                case 16:
                    n = Ll;
                    break;
                case 536870912:
                    n = hf;
                    break;
                default:
                    n = Ll;
            }
            n = $d(n, Md.bind(null, e));
        }
        (e.callbackPriority = t), (e.callbackNode = n);
    }
}
function Md(e, t) {
    if (((Pl = -1), (Tl = 0), G & 6)) throw Error(O(327));
    var n = e.callbackNode;
    if (_r() && e.callbackNode !== n) return null;
    var r = Il(e, e === Pe ? Oe : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = ql(e, r);
    else {
        t = r;
        var i = G;
        G |= 2;
        var l = Id();
        (Pe !== e || Oe !== t) && ((Wt = null), (Tr = Se() + 500), Dn(e, t));
        do
            try {
                c1();
                break;
            } catch (u) {
                Ld(e, u);
            }
        while (!0);
        $s(),
            (Xl.current = l),
            (G = i),
            _e !== null ? (t = 0) : ((Pe = null), (Oe = 0), (t = ke));
    }
    if (t !== 0) {
        if (
            (t === 2 && ((i = Lu(e)), i !== 0 && ((r = i), (t = us(e, i)))),
            t === 1)
        )
            throw ((n = Ni), Dn(e, 0), an(e, r), Ge(e, Se()), n);
        if (t === 6) an(e, r);
        else {
            if (
                ((i = e.current.alternate),
                !(r & 30) &&
                    !s1(i) &&
                    ((t = ql(e, r)),
                    t === 2 &&
                        ((l = Lu(e)), l !== 0 && ((r = l), (t = us(e, l)))),
                    t === 1))
            )
                throw ((n = Ni), Dn(e, 0), an(e, r), Ge(e, Se()), n);
            switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                    throw Error(O(345));
                case 2:
                    Ln(e, Ve, Wt);
                    break;
                case 3:
                    if (
                        (an(e, r),
                        (r & 130023424) === r &&
                            ((t = ea + 500 - Se()), 10 < t))
                    ) {
                        if (Il(e, 0) !== 0) break;
                        if (((i = e.suspendedLanes), (i & r) !== r)) {
                            $e(), (e.pingedLanes |= e.suspendedLanes & i);
                            break;
                        }
                        e.timeoutHandle = Hu(Ln.bind(null, e, Ve, Wt), t);
                        break;
                    }
                    Ln(e, Ve, Wt);
                    break;
                case 4:
                    if ((an(e, r), (r & 4194240) === r)) break;
                    for (t = e.eventTimes, i = -1; 0 < r; ) {
                        var o = 31 - Ct(r);
                        (l = 1 << o), (o = t[o]), o > i && (i = o), (r &= ~l);
                    }
                    if (
                        ((r = i),
                        (r = Se() - r),
                        (r =
                            (120 > r
                                ? 120
                                : 480 > r
                                ? 480
                                : 1080 > r
                                ? 1080
                                : 1920 > r
                                ? 1920
                                : 3e3 > r
                                ? 3e3
                                : 4320 > r
                                ? 4320
                                : 1960 * u1(r / 1960)) - r),
                        10 < r)
                    ) {
                        e.timeoutHandle = Hu(Ln.bind(null, e, Ve, Wt), r);
                        break;
                    }
                    Ln(e, Ve, Wt);
                    break;
                case 5:
                    Ln(e, Ve, Wt);
                    break;
                default:
                    throw Error(O(329));
            }
        }
    }
    return Ge(e, Se()), e.callbackNode === n ? Md.bind(null, e) : null;
}
function us(e, t) {
    var n = di;
    return (
        e.current.memoizedState.isDehydrated && (Dn(e, t).flags |= 256),
        (e = ql(e, t)),
        e !== 2 && ((t = Ve), (Ve = n), t !== null && ss(t)),
        e
    );
}
function ss(e) {
    Ve === null ? (Ve = e) : Ve.push.apply(Ve, e);
}
function s1(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && ((n = n.stores), n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r],
                        l = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!jt(l(), i)) return !1;
                    } catch {
                        return !1;
                    }
                }
        }
        if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
            (n.return = t), (t = n);
        else {
            if (t === e) break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e) return !0;
                t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
        }
    }
    return !0;
}
function an(e, t) {
    for (
        t &= ~bs,
            t &= ~po,
            e.suspendedLanes |= t,
            e.pingedLanes &= ~t,
            e = e.expirationTimes;
        0 < t;

    ) {
        var n = 31 - Ct(t),
            r = 1 << n;
        (e[n] = -1), (t &= ~r);
    }
}
function Sc(e) {
    if (G & 6) throw Error(O(327));
    _r();
    var t = Il(e, 0);
    if (!(t & 1)) return Ge(e, Se()), null;
    var n = ql(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Lu(e);
        r !== 0 && ((t = r), (n = us(e, r)));
    }
    if (n === 1) throw ((n = Ni), Dn(e, 0), an(e, t), Ge(e, Se()), n);
    if (n === 6) throw Error(O(345));
    return (
        (e.finishedWork = e.current.alternate),
        (e.finishedLanes = t),
        Ln(e, Ve, Wt),
        Ge(e, Se()),
        null
    );
}
function ta(e, t) {
    var n = G;
    G |= 1;
    try {
        return e(t);
    } finally {
        (G = n), G === 0 && ((Tr = Se() + 500), so && Cn());
    }
}
function Vn(e) {
    fn !== null && fn.tag === 0 && !(G & 6) && _r();
    var t = G;
    G |= 1;
    var n = ft.transition,
        r = ee;
    try {
        if (((ft.transition = null), (ee = 1), e)) return e();
    } finally {
        (ee = r), (ft.transition = n), (G = t), !(G & 6) && Cn();
    }
}
function na() {
    (et = mr.current), oe(mr);
}
function Dn(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), Dh(n)), _e !== null))
        for (n = _e.return; n !== null; ) {
            var r = n;
            switch ((As(r), r.tag)) {
                case 1:
                    (r = r.type.childContextTypes), r != null && $l();
                    break;
                case 3:
                    jr(), oe(Ke), oe(Ae), Qs();
                    break;
                case 5:
                    Vs(r);
                    break;
                case 4:
                    jr();
                    break;
                case 13:
                    oe(pe);
                    break;
                case 19:
                    oe(pe);
                    break;
                case 10:
                    Us(r.type._context);
                    break;
                case 22:
                case 23:
                    na();
            }
            n = n.return;
        }
    if (
        ((Pe = e),
        (_e = e = wn(e.current, null)),
        (Oe = et = t),
        (ke = 0),
        (Ni = null),
        (bs = po = Wn = 0),
        (Ve = di = null),
        Fn !== null)
    ) {
        for (t = 0; t < Fn.length; t++)
            if (((n = Fn[t]), (r = n.interleaved), r !== null)) {
                n.interleaved = null;
                var i = r.next,
                    l = n.pending;
                if (l !== null) {
                    var o = l.next;
                    (l.next = i), (r.next = o);
                }
                n.pending = r;
            }
        Fn = null;
    }
    return e;
}
function Ld(e, t) {
    do {
        var n = _e;
        try {
            if (($s(), (Cl.current = Gl), Yl)) {
                for (var r = he.memoizedState; r !== null; ) {
                    var i = r.queue;
                    i !== null && (i.pending = null), (r = r.next);
                }
                Yl = !1;
            }
            if (
                ((Bn = 0),
                (je = xe = he = null),
                (ci = !1),
                (Pi = 0),
                (qs.current = null),
                n === null || n.return === null)
            ) {
                (ke = 1), (Ni = t), (_e = null);
                break;
            }
            e: {
                var l = e,
                    o = n.return,
                    u = n,
                    s = t;
                if (
                    ((t = Oe),
                    (u.flags |= 32768),
                    s !== null &&
                        typeof s == "object" &&
                        typeof s.then == "function")
                ) {
                    var c = s,
                        m = u,
                        p = m.tag;
                    if (!(m.mode & 1) && (p === 0 || p === 11 || p === 15)) {
                        var d = m.alternate;
                        d
                            ? ((m.updateQueue = d.updateQueue),
                              (m.memoizedState = d.memoizedState),
                              (m.lanes = d.lanes))
                            : ((m.updateQueue = null),
                              (m.memoizedState = null));
                    }
                    var k = uc(o);
                    if (k !== null) {
                        (k.flags &= -257),
                            sc(k, o, u, l, t),
                            k.mode & 1 && oc(l, c, t),
                            (t = k),
                            (s = c);
                        var j = t.updateQueue;
                        if (j === null) {
                            var P = new Set();
                            P.add(s), (t.updateQueue = P);
                        } else j.add(s);
                        break e;
                    } else {
                        if (!(t & 1)) {
                            oc(l, c, t), ra();
                            break e;
                        }
                        s = Error(O(426));
                    }
                } else if (fe && u.mode & 1) {
                    var D = uc(o);
                    if (D !== null) {
                        !(D.flags & 65536) && (D.flags |= 256),
                            sc(D, o, u, l, t),
                            Rs(Pr(s, u));
                        break e;
                    }
                }
                (l = s = Pr(s, u)),
                    ke !== 4 && (ke = 2),
                    di === null ? (di = [l]) : di.push(l),
                    (l = o);
                do {
                    switch (l.tag) {
                        case 3:
                            (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                            var g = vd(l, s, t);
                            ec(l, g);
                            break e;
                        case 1:
                            u = s;
                            var h = l.type,
                                v = l.stateNode;
                            if (
                                !(l.flags & 128) &&
                                (typeof h.getDerivedStateFromError ==
                                    "function" ||
                                    (v !== null &&
                                        typeof v.componentDidCatch ==
                                            "function" &&
                                        (gn === null || !gn.has(v))))
                            ) {
                                (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                                var C = gd(l, u, t);
                                ec(l, C);
                                break e;
                            }
                    }
                    l = l.return;
                } while (l !== null);
            }
            Ad(n);
        } catch (T) {
            (t = T), _e === n && n !== null && (_e = n = n.return);
            continue;
        }
        break;
    } while (!0);
}
function Id() {
    var e = Xl.current;
    return (Xl.current = Gl), e === null ? Gl : e;
}
function ra() {
    (ke === 0 || ke === 3 || ke === 2) && (ke = 4),
        Pe === null || (!(Wn & 268435455) && !(po & 268435455)) || an(Pe, Oe);
}
function ql(e, t) {
    var n = G;
    G |= 2;
    var r = Id();
    (Pe !== e || Oe !== t) && ((Wt = null), Dn(e, t));
    do
        try {
            a1();
            break;
        } catch (i) {
            Ld(e, i);
        }
    while (!0);
    if (($s(), (G = n), (Xl.current = r), _e !== null)) throw Error(O(261));
    return (Pe = null), (Oe = 0), ke;
}
function a1() {
    for (; _e !== null; ) Fd(_e);
}
function c1() {
    for (; _e !== null && !Fp(); ) Fd(_e);
}
function Fd(e) {
    var t = Dd(e.alternate, e, et);
    (e.memoizedProps = e.pendingProps),
        t === null ? Ad(e) : (_e = t),
        (qs.current = null);
}
function Ad(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (((e = t.return), t.flags & 32768)) {
            if (((n = r1(n, t)), n !== null)) {
                (n.flags &= 32767), (_e = n);
                return;
            }
            if (e !== null)
                (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            else {
                (ke = 6), (_e = null);
                return;
            }
        } else if (((n = n1(n, t, et)), n !== null)) {
            _e = n;
            return;
        }
        if (((t = t.sibling), t !== null)) {
            _e = t;
            return;
        }
        _e = t = e;
    } while (t !== null);
    ke === 0 && (ke = 5);
}
function Ln(e, t, n) {
    var r = ee,
        i = ft.transition;
    try {
        (ft.transition = null), (ee = 1), f1(e, t, n, r);
    } finally {
        (ft.transition = i), (ee = r);
    }
    return null;
}
function f1(e, t, n, r) {
    do _r();
    while (fn !== null);
    if (G & 6) throw Error(O(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
        throw Error(O(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var l = n.lanes | n.childLanes;
    if (
        (Qp(e, l),
        e === Pe && ((_e = Pe = null), (Oe = 0)),
        (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
            ml ||
            ((ml = !0),
            $d(Ll, function () {
                return _r(), null;
            })),
        (l = (n.flags & 15990) !== 0),
        n.subtreeFlags & 15990 || l)
    ) {
        (l = ft.transition), (ft.transition = null);
        var o = ee;
        ee = 1;
        var u = G;
        (G |= 4),
            (qs.current = null),
            l1(e, n),
            Nd(n, e),
            zh($u),
            (Fl = !!Du),
            ($u = Du = null),
            (e.current = n),
            o1(n),
            Ap(),
            (G = u),
            (ee = o),
            (ft.transition = l);
    } else e.current = n;
    if (
        (ml && ((ml = !1), (fn = e), (Jl = i)),
        (l = e.pendingLanes),
        l === 0 && (gn = null),
        $p(n.stateNode),
        Ge(e, Se()),
        t !== null)
    )
        for (r = e.onRecoverableError, n = 0; n < t.length; n++)
            (i = t[n]),
                r(i.value, { componentStack: i.stack, digest: i.digest });
    if (Zl) throw ((Zl = !1), (e = ls), (ls = null), e);
    return (
        Jl & 1 && e.tag !== 0 && _r(),
        (l = e.pendingLanes),
        l & 1 ? (e === os ? pi++ : ((pi = 0), (os = e))) : (pi = 0),
        Cn(),
        null
    );
}
function _r() {
    if (fn !== null) {
        var e = vf(Jl),
            t = ft.transition,
            n = ee;
        try {
            if (((ft.transition = null), (ee = 16 > e ? 16 : e), fn === null))
                var r = !1;
            else {
                if (((e = fn), (fn = null), (Jl = 0), G & 6))
                    throw Error(O(331));
                var i = G;
                for (G |= 4, F = e.current; F !== null; ) {
                    var l = F,
                        o = l.child;
                    if (F.flags & 16) {
                        var u = l.deletions;
                        if (u !== null) {
                            for (var s = 0; s < u.length; s++) {
                                var c = u[s];
                                for (F = c; F !== null; ) {
                                    var m = F;
                                    switch (m.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            fi(8, m, l);
                                    }
                                    var p = m.child;
                                    if (p !== null) (p.return = m), (F = p);
                                    else
                                        for (; F !== null; ) {
                                            m = F;
                                            var d = m.sibling,
                                                k = m.return;
                                            if ((Pd(m), m === c)) {
                                                F = null;
                                                break;
                                            }
                                            if (d !== null) {
                                                (d.return = k), (F = d);
                                                break;
                                            }
                                            F = k;
                                        }
                                }
                            }
                            var j = l.alternate;
                            if (j !== null) {
                                var P = j.child;
                                if (P !== null) {
                                    j.child = null;
                                    do {
                                        var D = P.sibling;
                                        (P.sibling = null), (P = D);
                                    } while (P !== null);
                                }
                            }
                            F = l;
                        }
                    }
                    if (l.subtreeFlags & 2064 && o !== null)
                        (o.return = l), (F = o);
                    else
                        e: for (; F !== null; ) {
                            if (((l = F), l.flags & 2048))
                                switch (l.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        fi(9, l, l.return);
                                }
                            var g = l.sibling;
                            if (g !== null) {
                                (g.return = l.return), (F = g);
                                break e;
                            }
                            F = l.return;
                        }
                }
                var h = e.current;
                for (F = h; F !== null; ) {
                    o = F;
                    var v = o.child;
                    if (o.subtreeFlags & 2064 && v !== null)
                        (v.return = o), (F = v);
                    else
                        e: for (o = h; F !== null; ) {
                            if (((u = F), u.flags & 2048))
                                try {
                                    switch (u.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            fo(9, u);
                                    }
                                } catch (T) {
                                    ye(u, u.return, T);
                                }
                            if (u === o) {
                                F = null;
                                break e;
                            }
                            var C = u.sibling;
                            if (C !== null) {
                                (C.return = u.return), (F = C);
                                break e;
                            }
                            F = u.return;
                        }
                }
                if (
                    ((G = i),
                    Cn(),
                    Ft && typeof Ft.onPostCommitFiberRoot == "function")
                )
                    try {
                        Ft.onPostCommitFiberRoot(ro, e);
                    } catch {}
                r = !0;
            }
            return r;
        } finally {
            (ee = n), (ft.transition = t);
        }
    }
    return !1;
}
function _c(e, t, n) {
    (t = Pr(n, t)),
        (t = vd(e, t, 1)),
        (e = vn(e, t, 1)),
        (t = $e()),
        e !== null && (Mi(e, 1, t), Ge(e, t));
}
function ye(e, t, n) {
    if (e.tag === 3) _c(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                _c(t, e, n);
                break;
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (
                    typeof t.type.getDerivedStateFromError == "function" ||
                    (typeof r.componentDidCatch == "function" &&
                        (gn === null || !gn.has(r)))
                ) {
                    (e = Pr(n, e)),
                        (e = gd(t, e, 1)),
                        (t = vn(t, e, 1)),
                        (e = $e()),
                        t !== null && (Mi(t, 1, e), Ge(t, e));
                    break;
                }
            }
            t = t.return;
        }
}
function d1(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
        (t = $e()),
        (e.pingedLanes |= e.suspendedLanes & n),
        Pe === e &&
            (Oe & n) === n &&
            (ke === 4 ||
            (ke === 3 && (Oe & 130023424) === Oe && 500 > Se() - ea)
                ? Dn(e, 0)
                : (bs |= n)),
        Ge(e, t);
}
function Rd(e, t) {
    t === 0 &&
        (e.mode & 1
            ? ((t = ll), (ll <<= 1), !(ll & 130023424) && (ll = 4194304))
            : (t = 1));
    var n = $e();
    (e = Zt(e, t)), e !== null && (Mi(e, t, n), Ge(e, n));
}
function p1(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), Rd(e, n);
}
function h1(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                i = e.memoizedState;
            i !== null && (n = i.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(O(314));
    }
    r !== null && r.delete(t), Rd(e, n);
}
var Dd;
Dd = function (e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Ke.current) Qe = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return (Qe = !1), t1(e, t, n);
            Qe = !!(e.flags & 131072);
        }
    else (Qe = !1), fe && t.flags & 1048576 && Bf(t, Bl, t.index);
    switch (((t.lanes = 0), t.tag)) {
        case 2:
            var r = t.type;
            jl(e, t), (e = t.pendingProps);
            var i = kr(t, Ae.current);
            Sr(t, n), (i = Ys(null, t, r, e, i, n));
            var l = Gs();
            return (
                (t.flags |= 1),
                typeof i == "object" &&
                i !== null &&
                typeof i.render == "function" &&
                i.$$typeof === void 0
                    ? ((t.tag = 1),
                      (t.memoizedState = null),
                      (t.updateQueue = null),
                      Ye(r) ? ((l = !0), Ul(t)) : (l = !1),
                      (t.memoizedState =
                          i.state !== null && i.state !== void 0
                              ? i.state
                              : null),
                      Bs(t),
                      (i.updater = co),
                      (t.stateNode = i),
                      (i._reactInternals = t),
                      Gu(t, r, e, n),
                      (t = Ju(null, t, r, !0, l, n)))
                    : ((t.tag = 0),
                      fe && l && Fs(t),
                      De(null, t, i, n),
                      (t = t.child)),
                t
            );
        case 16:
            r = t.elementType;
            e: {
                switch (
                    (jl(e, t),
                    (e = t.pendingProps),
                    (i = r._init),
                    (r = i(r._payload)),
                    (t.type = r),
                    (i = t.tag = v1(r)),
                    (e = _t(r, e)),
                    i)
                ) {
                    case 0:
                        t = Zu(null, t, r, e, n);
                        break e;
                    case 1:
                        t = fc(null, t, r, e, n);
                        break e;
                    case 11:
                        t = ac(null, t, r, e, n);
                        break e;
                    case 14:
                        t = cc(null, t, r, _t(r.type, e), n);
                        break e;
                }
                throw Error(O(306, r, ""));
            }
            return t;
        case 0:
            return (
                (r = t.type),
                (i = t.pendingProps),
                (i = t.elementType === r ? i : _t(r, i)),
                Zu(e, t, r, i, n)
            );
        case 1:
            return (
                (r = t.type),
                (i = t.pendingProps),
                (i = t.elementType === r ? i : _t(r, i)),
                fc(e, t, r, i, n)
            );
        case 3:
            e: {
                if ((_d(t), e === null)) throw Error(O(387));
                (r = t.pendingProps),
                    (l = t.memoizedState),
                    (i = l.element),
                    Gf(e, t),
                    Ql(t, r, null, n);
                var o = t.memoizedState;
                if (((r = o.element), l.isDehydrated))
                    if (
                        ((l = {
                            element: r,
                            isDehydrated: !1,
                            cache: o.cache,
                            pendingSuspenseBoundaries:
                                o.pendingSuspenseBoundaries,
                            transitions: o.transitions,
                        }),
                        (t.updateQueue.baseState = l),
                        (t.memoizedState = l),
                        t.flags & 256)
                    ) {
                        (i = Pr(Error(O(423)), t)), (t = dc(e, t, r, n, i));
                        break e;
                    } else if (r !== i) {
                        (i = Pr(Error(O(424)), t)), (t = dc(e, t, r, n, i));
                        break e;
                    } else
                        for (
                            tt = mn(t.stateNode.containerInfo.firstChild),
                                nt = t,
                                fe = !0,
                                kt = null,
                                n = Kf(t, null, r, n),
                                t.child = n;
                            n;

                        )
                            (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
                else {
                    if ((Cr(), r === i)) {
                        t = Jt(e, t, n);
                        break e;
                    }
                    De(e, t, r, n);
                }
                t = t.child;
            }
            return t;
        case 5:
            return (
                Xf(t),
                e === null && Qu(t),
                (r = t.type),
                (i = t.pendingProps),
                (l = e !== null ? e.memoizedProps : null),
                (o = i.children),
                Uu(r, i)
                    ? (o = null)
                    : l !== null && Uu(r, l) && (t.flags |= 32),
                Sd(e, t),
                De(e, t, o, n),
                t.child
            );
        case 6:
            return e === null && Qu(t), null;
        case 13:
            return xd(e, t, n);
        case 4:
            return (
                Ws(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                e === null ? (t.child = Er(t, null, r, n)) : De(e, t, r, n),
                t.child
            );
        case 11:
            return (
                (r = t.type),
                (i = t.pendingProps),
                (i = t.elementType === r ? i : _t(r, i)),
                ac(e, t, r, i, n)
            );
        case 7:
            return De(e, t, t.pendingProps, n), t.child;
        case 8:
            return De(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return De(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (
                    ((r = t.type._context),
                    (i = t.pendingProps),
                    (l = t.memoizedProps),
                    (o = i.value),
                    re(Wl, r._currentValue),
                    (r._currentValue = o),
                    l !== null)
                )
                    if (jt(l.value, o)) {
                        if (l.children === i.children && !Ke.current) {
                            t = Jt(e, t, n);
                            break e;
                        }
                    } else
                        for (
                            l = t.child, l !== null && (l.return = t);
                            l !== null;

                        ) {
                            var u = l.dependencies;
                            if (u !== null) {
                                o = l.child;
                                for (var s = u.firstContext; s !== null; ) {
                                    if (s.context === r) {
                                        if (l.tag === 1) {
                                            (s = Yt(-1, n & -n)), (s.tag = 2);
                                            var c = l.updateQueue;
                                            if (c !== null) {
                                                c = c.shared;
                                                var m = c.pending;
                                                m === null
                                                    ? (s.next = s)
                                                    : ((s.next = m.next),
                                                      (m.next = s)),
                                                    (c.pending = s);
                                            }
                                        }
                                        (l.lanes |= n),
                                            (s = l.alternate),
                                            s !== null && (s.lanes |= n),
                                            Ku(l.return, n, t),
                                            (u.lanes |= n);
                                        break;
                                    }
                                    s = s.next;
                                }
                            } else if (l.tag === 10)
                                o = l.type === t.type ? null : l.child;
                            else if (l.tag === 18) {
                                if (((o = l.return), o === null))
                                    throw Error(O(341));
                                (o.lanes |= n),
                                    (u = o.alternate),
                                    u !== null && (u.lanes |= n),
                                    Ku(o, n, t),
                                    (o = l.sibling);
                            } else o = l.child;
                            if (o !== null) o.return = l;
                            else
                                for (o = l; o !== null; ) {
                                    if (o === t) {
                                        o = null;
                                        break;
                                    }
                                    if (((l = o.sibling), l !== null)) {
                                        (l.return = o.return), (o = l);
                                        break;
                                    }
                                    o = o.return;
                                }
                            l = o;
                        }
                De(e, t, i.children, n), (t = t.child);
            }
            return t;
        case 9:
            return (
                (i = t.type),
                (r = t.pendingProps.children),
                Sr(t, n),
                (i = dt(i)),
                (r = r(i)),
                (t.flags |= 1),
                De(e, t, r, n),
                t.child
            );
        case 14:
            return (
                (r = t.type),
                (i = _t(r, t.pendingProps)),
                (i = _t(r.type, i)),
                cc(e, t, r, i, n)
            );
        case 15:
            return yd(e, t, t.type, t.pendingProps, n);
        case 17:
            return (
                (r = t.type),
                (i = t.pendingProps),
                (i = t.elementType === r ? i : _t(r, i)),
                jl(e, t),
                (t.tag = 1),
                Ye(r) ? ((e = !0), Ul(t)) : (e = !1),
                Sr(t, n),
                md(t, r, i),
                Gu(t, r, i, n),
                Ju(null, t, r, !0, e, n)
            );
        case 19:
            return kd(e, t, n);
        case 22:
            return wd(e, t, n);
    }
    throw Error(O(156, t.tag));
};
function $d(e, t) {
    return df(e, t);
}
function m1(e, t, n, r) {
    (this.tag = e),
        (this.key = n),
        (this.sibling =
            this.child =
            this.return =
            this.stateNode =
            this.type =
            this.elementType =
                null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = t),
        (this.dependencies =
            this.memoizedState =
            this.updateQueue =
            this.memoizedProps =
                null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null);
}
function ct(e, t, n, r) {
    return new m1(e, t, n, r);
}
function ia(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
}
function v1(e) {
    if (typeof e == "function") return ia(e) ? 1 : 0;
    if (e != null) {
        if (((e = e.$$typeof), e === ks)) return 11;
        if (e === Cs) return 14;
    }
    return 2;
}
function wn(e, t) {
    var n = e.alternate;
    return (
        n === null
            ? ((n = ct(e.tag, t, e.key, e.mode)),
              (n.elementType = e.elementType),
              (n.type = e.type),
              (n.stateNode = e.stateNode),
              (n.alternate = e),
              (e.alternate = n))
            : ((n.pendingProps = t),
              (n.type = e.type),
              (n.flags = 0),
              (n.subtreeFlags = 0),
              (n.deletions = null)),
        (n.flags = e.flags & 14680064),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies =
            t === null
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        n
    );
}
function Ol(e, t, n, r, i, l) {
    var o = 2;
    if (((r = e), typeof e == "function")) ia(e) && (o = 1);
    else if (typeof e == "string") o = 5;
    else
        e: switch (e) {
            case lr:
                return $n(n.children, i, l, t);
            case xs:
                (o = 8), (i |= 8);
                break;
            case yu:
                return (
                    (e = ct(12, n, t, i | 2)),
                    (e.elementType = yu),
                    (e.lanes = l),
                    e
                );
            case wu:
                return (
                    (e = ct(13, n, t, i)),
                    (e.elementType = wu),
                    (e.lanes = l),
                    e
                );
            case Su:
                return (
                    (e = ct(19, n, t, i)),
                    (e.elementType = Su),
                    (e.lanes = l),
                    e
                );
            case Gc:
                return ho(n, i, l, t);
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                        case Kc:
                            o = 10;
                            break e;
                        case Yc:
                            o = 9;
                            break e;
                        case ks:
                            o = 11;
                            break e;
                        case Cs:
                            o = 14;
                            break e;
                        case on:
                            (o = 16), (r = null);
                            break e;
                    }
                throw Error(O(130, e == null ? e : typeof e, ""));
        }
    return (
        (t = ct(o, n, t, i)),
        (t.elementType = e),
        (t.type = r),
        (t.lanes = l),
        t
    );
}
function $n(e, t, n, r) {
    return (e = ct(7, e, r, t)), (e.lanes = n), e;
}
function ho(e, t, n, r) {
    return (
        (e = ct(22, e, r, t)),
        (e.elementType = Gc),
        (e.lanes = n),
        (e.stateNode = { isHidden: !1 }),
        e
    );
}
function hu(e, t, n) {
    return (e = ct(6, e, null, t)), (e.lanes = n), e;
}
function mu(e, t, n) {
    return (
        (t = ct(4, e.children !== null ? e.children : [], e.key, t)),
        (t.lanes = n),
        (t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation,
        }),
        t
    );
}
function g1(e, t, n, r, i) {
    (this.tag = t),
        (this.containerInfo = e),
        (this.finishedWork =
            this.pingCache =
            this.current =
            this.pendingChildren =
                null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.pendingContext = this.context = null),
        (this.callbackPriority = 0),
        (this.eventTimes = Xo(0)),
        (this.expirationTimes = Xo(-1)),
        (this.entangledLanes =
            this.finishedLanes =
            this.mutableReadLanes =
            this.expiredLanes =
            this.pingedLanes =
            this.suspendedLanes =
            this.pendingLanes =
                0),
        (this.entanglements = Xo(0)),
        (this.identifierPrefix = r),
        (this.onRecoverableError = i),
        (this.mutableSourceEagerHydrationData = null);
}
function la(e, t, n, r, i, l, o, u, s) {
    return (
        (e = new g1(e, t, n, u, s)),
        t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
        (l = ct(3, null, null, t)),
        (e.current = l),
        (l.stateNode = e),
        (l.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null,
        }),
        Bs(l),
        e
    );
}
function y1(e, t, n) {
    var r =
        3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: ir,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n,
    };
}
function Ud(e) {
    if (!e) return _n;
    e = e._reactInternals;
    e: {
        if (Kn(e) !== e || e.tag !== 1) throw Error(O(170));
        var t = e;
        do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (Ye(t.type)) {
                        t =
                            t.stateNode
                                .__reactInternalMemoizedMergedChildContext;
                        break e;
                    }
            }
            t = t.return;
        } while (t !== null);
        throw Error(O(171));
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Ye(n)) return Uf(e, n, t);
    }
    return t;
}
function Hd(e, t, n, r, i, l, o, u, s) {
    return (
        (e = la(n, r, !0, e, i, l, o, u, s)),
        (e.context = Ud(null)),
        (n = e.current),
        (r = $e()),
        (i = yn(n)),
        (l = Yt(r, i)),
        (l.callback = t ?? null),
        vn(n, l, i),
        (e.current.lanes = i),
        Mi(e, i, r),
        Ge(e, r),
        e
    );
}
function mo(e, t, n, r) {
    var i = t.current,
        l = $e(),
        o = yn(i);
    return (
        (n = Ud(n)),
        t.context === null ? (t.context = n) : (t.pendingContext = n),
        (t = Yt(l, o)),
        (t.payload = { element: e }),
        (r = r === void 0 ? null : r),
        r !== null && (t.callback = r),
        (e = vn(i, t, o)),
        e !== null && (Et(e, i, o, l), kl(e, i, o)),
        o
    );
}
function bl(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode;
    }
}
function xc(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
    }
}
function oa(e, t) {
    xc(e, t), (e = e.alternate) && xc(e, t);
}
function w1() {
    return null;
}
var Bd =
    typeof reportError == "function"
        ? reportError
        : function (e) {
              console.error(e);
          };
function ua(e) {
    this._internalRoot = e;
}
vo.prototype.render = ua.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null) throw Error(O(409));
    mo(e, t, null, null);
};
vo.prototype.unmount = ua.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Vn(function () {
            mo(null, e, null, null);
        }),
            (t[Xt] = null);
    }
};
function vo(e) {
    this._internalRoot = e;
}
vo.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
        var t = wf();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < sn.length && t !== 0 && t < sn[n].priority; n++);
        sn.splice(n, 0, e), n === 0 && _f(e);
    }
};
function sa(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function go(e) {
    return !(
        !e ||
        (e.nodeType !== 1 &&
            e.nodeType !== 9 &&
            e.nodeType !== 11 &&
            (e.nodeType !== 8 ||
                e.nodeValue !== " react-mount-point-unstable "))
    );
}
function kc() {}
function S1(e, t, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var l = r;
            r = function () {
                var c = bl(o);
                l.call(c);
            };
        }
        var o = Hd(t, r, e, 0, null, !1, !1, "", kc);
        return (
            (e._reactRootContainer = o),
            (e[Xt] = o.current),
            xi(e.nodeType === 8 ? e.parentNode : e),
            Vn(),
            o
        );
    }
    for (; (i = e.lastChild); ) e.removeChild(i);
    if (typeof r == "function") {
        var u = r;
        r = function () {
            var c = bl(s);
            u.call(c);
        };
    }
    var s = la(e, 0, !1, null, null, !1, !1, "", kc);
    return (
        (e._reactRootContainer = s),
        (e[Xt] = s.current),
        xi(e.nodeType === 8 ? e.parentNode : e),
        Vn(function () {
            mo(t, s, n, r);
        }),
        s
    );
}
function yo(e, t, n, r, i) {
    var l = n._reactRootContainer;
    if (l) {
        var o = l;
        if (typeof i == "function") {
            var u = i;
            i = function () {
                var s = bl(o);
                u.call(s);
            };
        }
        mo(t, o, e, i);
    } else o = S1(n, t, e, i, r);
    return bl(o);
}
gf = function (e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = ri(t.pendingLanes);
                n !== 0 &&
                    (Ps(t, n | 1),
                    Ge(t, Se()),
                    !(G & 6) && ((Tr = Se() + 500), Cn()));
            }
            break;
        case 13:
            Vn(function () {
                var r = Zt(e, 1);
                if (r !== null) {
                    var i = $e();
                    Et(r, e, 1, i);
                }
            }),
                oa(e, 1);
    }
};
Ts = function (e) {
    if (e.tag === 13) {
        var t = Zt(e, 134217728);
        if (t !== null) {
            var n = $e();
            Et(t, e, 134217728, n);
        }
        oa(e, 134217728);
    }
};
yf = function (e) {
    if (e.tag === 13) {
        var t = yn(e),
            n = Zt(e, t);
        if (n !== null) {
            var r = $e();
            Et(n, e, t, r);
        }
        oa(e, t);
    }
};
wf = function () {
    return ee;
};
Sf = function (e, t) {
    var n = ee;
    try {
        return (ee = e), t();
    } finally {
        ee = n;
    }
};
Nu = function (e, t, n) {
    switch (t) {
        case "input":
            if ((ku(e, n), (t = n.name), n.type === "radio" && t != null)) {
                for (n = e; n.parentNode; ) n = n.parentNode;
                for (
                    n = n.querySelectorAll(
                        "input[name=" +
                            JSON.stringify("" + t) +
                            '][type="radio"]'
                    ),
                        t = 0;
                    t < n.length;
                    t++
                ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var i = uo(r);
                        if (!i) throw Error(O(90));
                        Zc(r), ku(r, i);
                    }
                }
            }
            break;
        case "textarea":
            qc(e, n);
            break;
        case "select":
            (t = n.value), t != null && vr(e, !!n.multiple, t, !1);
    }
};
of = ta;
uf = Vn;
var _1 = { usingClientEntryPoint: !1, Events: [Ii, ar, uo, rf, lf, ta] },
    ei = {
        findFiberByHostInstance: In,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom",
    },
    x1 = {
        bundleType: ei.bundleType,
        version: ei.version,
        rendererPackageName: ei.rendererPackageName,
        rendererConfig: ei.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: qt.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return (e = cf(e)), e === null ? null : e.stateNode;
        },
        findFiberByHostInstance: ei.findFiberByHostInstance || w1,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!vl.isDisabled && vl.supportsFiber)
        try {
            (ro = vl.inject(x1)), (Ft = vl);
        } catch {}
}
it.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _1;
it.createPortal = function (e, t) {
    var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!sa(t)) throw Error(O(200));
    return y1(e, t, null, n);
};
it.createRoot = function (e, t) {
    if (!sa(e)) throw Error(O(299));
    var n = !1,
        r = "",
        i = Bd;
    return (
        t != null &&
            (t.unstable_strictMode === !0 && (n = !0),
            t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
            t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
        (t = la(e, 1, !1, null, null, n, !1, r, i)),
        (e[Xt] = t.current),
        xi(e.nodeType === 8 ? e.parentNode : e),
        new ua(t)
    );
};
it.findDOMNode = function (e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function"
            ? Error(O(188))
            : ((e = Object.keys(e).join(",")), Error(O(268, e)));
    return (e = cf(t)), (e = e === null ? null : e.stateNode), e;
};
it.flushSync = function (e) {
    return Vn(e);
};
it.hydrate = function (e, t, n) {
    if (!go(t)) throw Error(O(200));
    return yo(null, e, t, !0, n);
};
it.hydrateRoot = function (e, t, n) {
    if (!sa(e)) throw Error(O(405));
    var r = (n != null && n.hydratedSources) || null,
        i = !1,
        l = "",
        o = Bd;
    if (
        (n != null &&
            (n.unstable_strictMode === !0 && (i = !0),
            n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
            n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
        (t = Hd(t, null, e, 1, n ?? null, i, !1, l, o)),
        (e[Xt] = t.current),
        xi(e),
        r)
    )
        for (e = 0; e < r.length; e++)
            (n = r[e]),
                (i = n._getVersion),
                (i = i(n._source)),
                t.mutableSourceEagerHydrationData == null
                    ? (t.mutableSourceEagerHydrationData = [n, i])
                    : t.mutableSourceEagerHydrationData.push(n, i);
    return new vo(t);
};
it.render = function (e, t, n) {
    if (!go(t)) throw Error(O(200));
    return yo(null, e, t, !1, n);
};
it.unmountComponentAtNode = function (e) {
    if (!go(e)) throw Error(O(40));
    return e._reactRootContainer
        ? (Vn(function () {
              yo(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[Xt] = null);
              });
          }),
          !0)
        : !1;
};
it.unstable_batchedUpdates = ta;
it.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!go(n)) throw Error(O(200));
    if (e == null || e._reactInternals === void 0) throw Error(O(38));
    return yo(e, t, n, !1, r);
};
it.version = "18.3.1-next-f1338f8080-20240426";
function Wd() {
    if (
        !(
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
        )
    )
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Wd);
        } catch (e) {
            console.error(e);
        }
}
Wd(), (Bc.exports = it);
var k1 = Bc.exports,
    Cc = k1;
(vu.createRoot = Cc.createRoot), (vu.hydrateRoot = Cc.hydrateRoot);
const C1 = await E1().then((e) => e);
async function E1() {
    try {
        return await (
            await fetch("../../../../../html/public/Config.json", {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            })
        ).json();
    } catch (e) {
        throw (
            (console.error(
                "Error receiving data. Make sure the json files in the public file. [Config.json]",
                e
            ),
            e)
        );
    }
}
await new Promise((e) => setTimeout(e, 250));
const Yn = U.createContext(),
    j1 = ({ children: e }) => {
        const t = C1,
            [n, r] = U.useState({
                hunger:
                    localStorage.getItem("wais-rhud-hunger") || t.colors.hunger,
                thirst:
                    localStorage.getItem("wais-rhud-thirst") || t.colors.thirst,
                stress:
                    localStorage.getItem("wais-rhud-stress") || t.colors.stress,
                stamina:
                    localStorage.getItem("wais-rhud-stamina") ||
                    t.colors.stamina,
                mic: localStorage.getItem("wais-rhud-mic") || t.colors.mic,
            }),
            [i, l] = U.useState(
                localStorage.getItem("wais-rhud-carhud") || t.carhud
            ),
            [o, u] = U.useState(!1),
            [s, c] = U.useState(!1),
            [m, p] = U.useState("24"),
            [d, k] = U.useState("dd/mm/yyyy"),
            [j, P] = U.useState(!1),
            [D, g] = U.useState(!1),
            [h, v] = U.useState(0),
            [C, T] = U.useState(!1),
            [z, M] = U.useState(!1),
            [I, Z] = U.useState("kmh"),
            [W, de] = U.useState(!1),
            H = (ht, Pt) => {
                r({ ...n, [ht]: Pt }),
                    localStorage.setItem(`wais-rhud-${ht}`, Pt);
            },
            Xe = (ht) => {
                l(ht), localStorage.setItem("wais-rhud-carhud", ht);
            },
            ze = () => {
                l(t.carhud),
                    r({
                        hunger: t.colors.hunger,
                        thirst: t.colors.thirst,
                        stress: t.colors.stress,
                        stamina: t.colors.stamina,
                        mic: t.colors.mic,
                    }),
                    localStorage.setItem("wais-rhud-carhud", t.carhud),
                    localStorage.setItem("wais-rhud-hunger", t.colors.hunger),
                    localStorage.setItem("wais-rhud-thirst", t.colors.thirst),
                    localStorage.setItem("wais-rhud-stress", t.colors.stress),
                    localStorage.setItem("wais-rhud-stamina", t.colors.stamina),
                    localStorage.setItem("wais-rhud-mic", t.colors.mic);
            };
        return S.jsx(Yn.Provider, {
            value: {
                Config: t,
                resetAll: ze,
                Colors: n,
                changeColor: H,
                settingsMenu: o,
                setSettingsMenu: u,
                carHudType: i,
                changeCarHudType: Xe,
                playerID: h,
                setPlayerID: v,
                cinematic: D,
                setCinematic: g,
                useStress: j,
                setUseStress: P,
                jumped: C,
                setJumped: T,
                incar: z,
                setIncar: M,
                clockType: m,
                setClockType: p,
                showmapOnlyIncar: s,
                setShowmapOnlyIncar: c,
                speedtype: I,
                setSpeedtype: Z,
                dateFormat: d,
                setDateFormat: k,
                showmoney: W,
                setShowmoney: de,
            },
            children: e,
        });
    };
var Vd = {
        color: void 0,
        size: void 0,
        className: void 0,
        style: void 0,
        attr: void 0,
    },
    Ec = Rn.createContext && Rn.createContext(Vd),
    P1 = ["attr", "size", "title"];
function T1(e, t) {
    if (e == null) return {};
    var n = O1(e, t),
        r,
        i;
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (i = 0; i < l.length; i++)
            (r = l[i]),
                !(t.indexOf(r) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(e, r) &&
                    (n[r] = e[r]);
    }
    return n;
}
function O1(e, t) {
    if (e == null) return {};
    var n = {};
    for (var r in e)
        if (Object.prototype.hasOwnProperty.call(e, r)) {
            if (t.indexOf(r) >= 0) continue;
            n[r] = e[r];
        }
    return n;
}
function eo() {
    return (
        (eo = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n)
                          Object.prototype.hasOwnProperty.call(n, r) &&
                              (e[r] = n[r]);
                  }
                  return e;
              }),
        eo.apply(this, arguments)
    );
}
function jc(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (i) {
                return Object.getOwnPropertyDescriptor(e, i).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function to(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2
            ? jc(Object(n), !0).forEach(function (r) {
                  N1(e, r, n[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : jc(Object(n)).forEach(function (r) {
                  Object.defineProperty(
                      e,
                      r,
                      Object.getOwnPropertyDescriptor(n, r)
                  );
              });
    }
    return e;
}
function N1(e, t, n) {
    return (
        (t = z1(t)),
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function z1(e) {
    var t = M1(e, "string");
    return typeof t == "symbol" ? t : t + "";
}
function M1(e, t) {
    if (typeof e != "object" || !e) return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
        var r = n.call(e, t || "default");
        if (typeof r != "object") return r;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (t === "string" ? String : Number)(e);
}
function Qd(e) {
    return (
        e &&
        e.map((t, n) =>
            Rn.createElement(t.tag, to({ key: n }, t.attr), Qd(t.child))
        )
    );
}
function Ce(e) {
    return (t) =>
        Rn.createElement(L1, eo({ attr: to({}, e.attr) }, t), Qd(e.child));
}
function L1(e) {
    var t = (n) => {
        var { attr: r, size: i, title: l } = e,
            o = T1(e, P1),
            u = i || n.size || "1em",
            s;
        return (
            n.className && (s = n.className),
            e.className && (s = (s ? s + " " : "") + e.className),
            Rn.createElement(
                "svg",
                eo(
                    {
                        stroke: "currentColor",
                        fill: "currentColor",
                        strokeWidth: "0",
                    },
                    n.attr,
                    r,
                    o,
                    {
                        className: s,
                        style: to(
                            to({ color: e.color || n.color }, n.style),
                            e.style
                        ),
                        height: u,
                        width: u,
                        xmlns: "http://www.w3.org/2000/svg",
                    }
                ),
                l && Rn.createElement("title", null, l),
                e.children
            )
        );
    };
    return Ec !== void 0
        ? Rn.createElement(Ec.Consumer, null, (n) => t(n))
        : t(Vd);
}
function I1(e) {
    return Ce({
        tag: "svg",
        attr: {
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: "1.5",
            stroke: "currentColor",
            "aria-hidden": "true",
        },
        child: [
            {
                tag: "path",
                attr: {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z",
                },
                child: [],
            },
        ],
    })(e);
}
function F1(e) {
    return Ce({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
        },
        child: [
            {
                tag: "rect",
                attr: {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "4",
                    rx: "2",
                    ry: "2",
                },
                child: [],
            },
            {
                tag: "line",
                attr: { x1: "16", x2: "16", y1: "2", y2: "6" },
                child: [],
            },
            {
                tag: "line",
                attr: { x1: "8", x2: "8", y1: "2", y2: "6" },
                child: [],
            },
            {
                tag: "line",
                attr: { x1: "3", x2: "21", y1: "10", y2: "10" },
                child: [],
            },
            { tag: "path", attr: { d: "M17 14h-6" }, child: [] },
            { tag: "path", attr: { d: "M13 18H7" }, child: [] },
            { tag: "path", attr: { d: "M7 14h.01" }, child: [] },
            { tag: "path", attr: { d: "M17 18h.01" }, child: [] },
        ],
    })(e);
}
function A1(e) {
    return Ce({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
        },
        child: [
            { tag: "circle", attr: { cx: "12", cy: "12", r: "10" }, child: [] },
            {
                tag: "polyline",
                attr: { points: "12 6 12 12 16 14" },
                child: [],
            },
        ],
    })(e);
}
function R1(e) {
    return Ce({
        tag: "svg",
        attr: { viewBox: "0 0 256 256", fill: "currentColor" },
        child: [
            {
                tag: "path",
                attr: {
                    d: "M216,64H176a48,48,0,0,0-96,0H40A16,16,0,0,0,24,80V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V80A16,16,0,0,0,216,64ZM128,32a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm88,168H40V80H216Z",
                },
                child: [],
            },
        ],
    })(e);
}
function D1(e) {
    return Ce({
        tag: "svg",
        attr: { viewBox: "0 0 256 256", fill: "currentColor" },
        child: [
            {
                tag: "path",
                attr: {
                    d: "M192,116a12,12,0,1,1-12-12A12,12,0,0,1,192,116ZM152,64H112a8,8,0,0,0,0,16h40a8,8,0,0,0,0-16Zm96,48v32a24,24,0,0,1-24,24h-2.36l-16.21,45.38A16,16,0,0,1,190.36,224H177.64a16,16,0,0,1-15.07-10.62L160.65,208h-57.3l-1.92,5.38A16,16,0,0,1,86.36,224H73.64a16,16,0,0,1-15.07-10.62L46,178.22a87.69,87.69,0,0,1-21.44-48.38A16,16,0,0,0,16,144a8,8,0,0,1-16,0,32,32,0,0,1,24.28-31A88.12,88.12,0,0,1,112,32H216a8,8,0,0,1,0,16H194.61a87.93,87.93,0,0,1,30.17,37c.43,1,.85,2,1.25,3A24,24,0,0,1,248,112Zm-16,0a8,8,0,0,0-8-8h-3.66a8,8,0,0,1-7.64-5.6A71.9,71.9,0,0,0,144,48H112A72,72,0,0,0,58.91,168.64a8,8,0,0,1,1.64,2.71L73.64,208H86.36l3.82-10.69A8,8,0,0,1,97.71,192h68.58a8,8,0,0,1,7.53,5.31L177.64,208h12.72l18.11-50.69A8,8,0,0,1,216,152h8a8,8,0,0,0,8-8Z",
                },
                child: [],
            },
        ],
    })(e);
}
function $1(e) {
    return Ce({
        tag: "svg",
        attr: { viewBox: "0 0 256 256", fill: "currentColor" },
        child: [
            {
                tag: "path",
                attr: {
                    d: "M216,64H56a8,8,0,0,1,0-16H192a8,8,0,0,0,0-16H56A24,24,0,0,0,32,56V184a24,24,0,0,0,24,24H216a16,16,0,0,0,16-16V80A16,16,0,0,0,216,64Zm0,128H56a8,8,0,0,1-8-8V78.63A23.84,23.84,0,0,0,56,80H216Zm-48-60a12,12,0,1,1,12,12A12,12,0,0,1,168,132Z",
                },
                child: [],
            },
        ],
    })(e);
}
const U1 = ({ money: e, job: t }) => {
        const {
                playerID: n,
                clockType: r,
                dateFormat: i,
                showmoney: l,
            } = U.useContext(Yn),
            o = U.useRef(r),
            u = U.useRef(i),
            [s, c] = U.useState({ date: p(u.current), time: m(o.current) });
        U.useEffect(() => {
            o.current = r;
        }, [r]),
            U.useEffect(() => {
                u.current = i;
            }, [i]),
            U.useEffect(() => {
                const k = () => {
                    c({ date: p(u.current), time: m(o.current) }),
                        setTimeout(k, 1e3);
                };
                return k(), () => clearTimeout(k);
            }, []);
        function m(k) {
            let j = new Date(),
                P = j.getHours(),
                D = j.getMinutes();
            if (k == "12") {
                let g = P >= 12 ? "PM" : "AM";
                return (
                    (P = P % 12),
                    (P = P || 12),
                    `${P}:${D <= 9 ? "0" + D : D} ${g}`
                );
            } else if (k == "24") return `${P}:${D <= 9 ? "0" + D : D}`;
        }
        function p(k) {
            let j = k,
                P = new Date(),
                D = P.getDate(),
                g = P.getMonth() + 1,
                h = P.getFullYear();
            if (j == "dd/mm/yyyy") return `${D}/${g <= 9 ? "0" + g : g}/${h}`;
            if (j == "mm/dd/yyyy") return `${g <= 9 ? "0" + g : g}/${D}/${h}`;
            if (j == "yyyy/mm/dd") return `${h}/${g <= 9 ? "0" + g : g}/${D}`;
        }
        const d = (k) => {
            let j = Number(k);
            return (
                j.toString().includes("e") &&
                    (j = j.toFixed(18).replace(/\.?0+$/, "")),
                j.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
            );
        };
        return S.jsxs("div", {
            className: "right-top",
            children: [
                S.jsxs("div", {
                    className: "server-stuff",
                    children: [
                        S.jsxs("div", {
                            className: "informations",
                            children: [
                                S.jsxs("div", {
                                    className: "box",
                                    children: [
                                        S.jsx(I1, { id: "icon" }),
                                        S.jsxs("span", { children: ["#", n] }),
                                    ],
                                }),
                                S.jsxs("div", {
                                    className: "calendar",
                                    children: [
                                        S.jsxs("div", {
                                            className: "box",
                                            children: [
                                                S.jsx(F1, { id: "icon" }),
                                                S.jsx("span", {
                                                    children: s.date,
                                                }),
                                            ],
                                        }),
                                        S.jsxs("div", {
                                            className: "box",
                                            children: [
                                                S.jsx(A1, { id: "icon" }),
                                                S.jsx("span", {
                                                    children: s.time,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        S.jsx("img", { src: "../../html/public/logo.png" }),
                    ],
                }),
                l &&
                    S.jsxs(S.Fragment, {
                        children: [
                            S.jsxs("div", {
                                className: "box",
                                children: [
                                    S.jsxs("span", {
                                        children: ["$", d(e.cash)],
                                    }),
                                    S.jsx($1, { id: "icon", size: "2vh" }),
                                ],
                            }),
                            S.jsxs("div", {
                                className: "box",
                                children: [
                                    S.jsxs("span", {
                                        children: ["$", d(e.bank)],
                                    }),
                                    S.jsx(D1, { id: "icon", size: "2vh" }),
                                ],
                            }),
                        ],
                    }),
                S.jsxs("div", {
                    className: "box",
                    children: [
                        S.jsx("span", { children: t }),
                        S.jsx(R1, { id: "icon", size: "2vh" }),
                    ],
                }),
            ],
        });
    },
    as = (e, t, n) => {
        fetch(`https://wais-rhud/${e}`, {
            method: "POST",
            headers: { "Content-Type": "application/json; charset=UTF-8" },
            body: JSON.stringify(t),
        })
            .then((r) => r.json())
            .then((r) => {
                n && n(r);
            })
            .catch((r) => {
                console.error("Fetch Error:", r);
            });
    };
function H1(e) {
    return Ce({
        tag: "svg",
        attr: { viewBox: "0 0 512 512" },
        child: [
            {
                tag: "path",
                attr: {
                    d: "M278.6 256l68.2-68.2c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-68.2-68.2c-6.2-6.2-16.4-6.2-22.6 0-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3l68.2 68.2-68.2 68.2c-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3 6.2 6.2 16.4 6.2 22.6 0l68.2-68.2 68.2 68.2c6.2 6.2 16.4 6.2 22.6 0 6.2-6.2 6.2-16.4 0-22.6L278.6 256z",
                },
                child: [],
            },
        ],
    })(e);
}
function cs(e) {
    return Ce({
        tag: "svg",
        attr: { fill: "currentColor", viewBox: "0 0 16 16" },
        child: [
            {
                tag: "path",
                attr: {
                    d: "M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6M6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13",
                },
                child: [],
            },
        ],
    })(e);
}
function B1(e) {
    return Ce({
        tag: "svg",
        attr: { fill: "currentColor", viewBox: "0 0 16 16" },
        child: [
            {
                tag: "path",
                attr: {
                    d: "M1 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v8a2 2 0 0 1 2 2v.5a.5.5 0 0 0 1 0V8h-.5a.5.5 0 0 1-.5-.5V4.375a.5.5 0 0 1 .5-.5h1.495c-.011-.476-.053-.894-.201-1.222a.97.97 0 0 0-.394-.458c-.184-.11-.464-.195-.9-.195a.5.5 0 0 1 0-1q.846-.002 1.412.336c.383.228.634.551.794.907.295.655.294 1.465.294 2.081V7.5a.5.5 0 0 1-.5.5H15v4.5a1.5 1.5 0 0 1-3 0V12a1 1 0 0 0-1-1v4h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1zm2.5 0a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5z",
                },
                child: [],
            },
        ],
    })(e);
}
function fs(e) {
    return Ce({
        tag: "svg",
        attr: { viewBox: "0 0 576 512" },
        child: [
            {
                tag: "path",
                attr: {
                    d: "M208 0c-29.9 0-54.7 20.5-61.8 48.2-.8 0-1.4-.2-2.2-.2-35.3 0-64 28.7-64 64 0 4.8.6 9.5 1.7 14C52.5 138 32 166.6 32 200c0 12.6 3.2 24.3 8.3 34.9C16.3 248.7 0 274.3 0 304c0 33.3 20.4 61.9 49.4 73.9-.9 4.6-1.4 9.3-1.4 14.1 0 39.8 32.2 72 72 72 4.1 0 8.1-.5 12-1.2 9.6 28.5 36.2 49.2 68 49.2 39.8 0 72-32.2 72-72V64c0-35.3-28.7-64-64-64zm368 304c0-29.7-16.3-55.3-40.3-69.1 5.2-10.6 8.3-22.3 8.3-34.9 0-33.4-20.5-62-49.7-74 1-4.5 1.7-9.2 1.7-14 0-35.3-28.7-64-64-64-.8 0-1.5.2-2.2.2C422.7 20.5 397.9 0 368 0c-35.3 0-64 28.6-64 64v376c0 39.8 32.2 72 72 72 31.8 0 58.4-20.7 68-49.2 3.9.7 7.9 1.2 12 1.2 39.8 0 72-32.2 72-72 0-4.8-.5-9.5-1.4-14.1 29-12 49.4-40.6 49.4-73.9z",
                },
                child: [],
            },
        ],
    })(e);
}
function Pc(e) {
    return Ce({
        tag: "svg",
        attr: { viewBox: "0 0 640 512" },
        child: [
            {
                tag: "path",
                attr: {
                    d: "M150.94 192h33.73c11.01 0 18.61-10.83 14.86-21.18-4.93-13.58-7.55-27.98-7.55-42.82s2.62-29.24 7.55-42.82C203.29 74.83 195.68 64 184.67 64h-33.73c-7.01 0-13.46 4.49-15.41 11.23C130.64 92.21 128 109.88 128 128c0 18.12 2.64 35.79 7.54 52.76 1.94 6.74 8.39 11.24 15.4 11.24zM89.92 23.34C95.56 12.72 87.97 0 75.96 0H40.63c-6.27 0-12.14 3.59-14.74 9.31C9.4 45.54 0 85.65 0 128c0 24.75 3.12 68.33 26.69 118.86 2.62 5.63 8.42 9.14 14.61 9.14h34.84c12.02 0 19.61-12.74 13.95-23.37-49.78-93.32-16.71-178.15-.17-209.29zM614.06 9.29C611.46 3.58 605.6 0 599.33 0h-35.42c-11.98 0-19.66 12.66-14.02 23.25 18.27 34.29 48.42 119.42.28 209.23-5.72 10.68 1.8 23.52 13.91 23.52h35.23c6.27 0 12.13-3.58 14.73-9.29C630.57 210.48 640 170.36 640 128s-9.42-82.48-25.94-118.71zM489.06 64h-33.73c-11.01 0-18.61 10.83-14.86 21.18 4.93 13.58 7.55 27.98 7.55 42.82s-2.62 29.24-7.55 42.82c-3.76 10.35 3.85 21.18 14.86 21.18h33.73c7.02 0 13.46-4.49 15.41-11.24 4.9-16.97 7.53-34.64 7.53-52.76 0-18.12-2.64-35.79-7.54-52.76-1.94-6.75-8.39-11.24-15.4-11.24zm-116.3 100.12c7.05-10.29 11.2-22.71 11.2-36.12 0-35.35-28.63-64-63.96-64-35.32 0-63.96 28.65-63.96 64 0 13.41 4.15 25.83 11.2 36.12l-130.5 313.41c-3.4 8.15.46 17.52 8.61 20.92l29.51 12.31c8.15 3.4 17.52-.46 20.91-8.61L244.96 384h150.07l49.2 118.15c3.4 8.16 12.76 12.01 20.91 8.61l29.51-12.31c8.15-3.4 12-12.77 8.61-20.92l-130.5-313.41zM271.62 320L320 203.81 368.38 320h-96.76z",
                },
                child: [],
            },
        ],
    })(e);
}
function W1(e) {
    return Ce({
        tag: "svg",
        attr: { viewBox: "0 0 512 512" },
        child: [
            {
                tag: "path",
                attr: {
                    d: "M336 448H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm157.2-340.7l-81-81c-6.2-6.2-16.4-6.2-22.6 0l-11.3 11.3c-6.2 6.2-6.2 16.4 0 22.6L416 97.9V160c0 28.1 20.9 51.3 48 55.2V376c0 13.2-10.8 24-24 24s-24-10.8-24-24v-32c0-48.6-39.4-88-88-88h-8V64c0-35.3-28.7-64-64-64H96C60.7 0 32 28.7 32 64v352h288V304h8c22.1 0 40 17.9 40 40v27.8c0 37.7 27 72 64.5 75.9 43 4.3 79.5-29.5 79.5-71.7V152.6c0-17-6.8-33.3-18.8-45.3zM256 192H96V64h160v128z",
                },
                child: [],
            },
        ],
    })(e);
}
function ds(e) {
    return Ce({
        tag: "svg",
        attr: { viewBox: "0 0 512 512" },
        child: [
            {
                tag: "path",
                attr: {
                    d: "M464 256H48a48 48 0 0 0 0 96h416a48 48 0 0 0 0-96zm16 128H32a16 16 0 0 0-16 16v16a64 64 0 0 0 64 64h352a64 64 0 0 0 64-64v-16a16 16 0 0 0-16-16zM58.64 224h394.72c34.57 0 54.62-43.9 34.82-75.88C448 83.2 359.55 32.1 256 32c-103.54.1-192 51.2-232.18 116.11C4 180.09 24.07 224 58.64 224zM384 112a16 16 0 1 1-16 16 16 16 0 0 1 16-16zM256 80a16 16 0 1 1-16 16 16 16 0 0 1 16-16zm-128 32a16 16 0 1 1-16 16 16 16 0 0 1 16-16z",
                },
                child: [],
            },
        ],
    })(e);
}
function V1(e) {
    return Ce({
        tag: "svg",
        attr: { viewBox: "0 0 512 512" },
        child: [
            {
                tag: "path",
                attr: {
                    d: "M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z",
                },
                child: [],
            },
        ],
    })(e);
}
function Tc(e) {
    return Ce({
        tag: "svg",
        attr: { viewBox: "0 0 640 512" },
        child: [
            {
                tag: "path",
                attr: {
                    d: "M636.11 390.15C614.44 308.85 580.07 231 534.1 159.13 511.98 124.56 498.03 96 454.05 96 415.36 96 384 125.42 384 161.71v60.11l-32.88-21.92a15.996 15.996 0 0 1-7.12-13.31V16c0-8.84-7.16-16-16-16h-16c-8.84 0-16 7.16-16 16v170.59c0 5.35-2.67 10.34-7.12 13.31L256 221.82v-60.11C256 125.42 224.64 96 185.95 96c-43.98 0-57.93 28.56-80.05 63.13C59.93 231 25.56 308.85 3.89 390.15 1.3 399.84 0 409.79 0 419.78c0 61.23 62.48 105.44 125.24 88.62l59.5-15.95c42.18-11.3 71.26-47.47 71.26-88.62v-87.49l-85.84 57.23a7.992 7.992 0 0 1-11.09-2.22l-8.88-13.31a7.992 7.992 0 0 1 2.22-11.09L320 235.23l167.59 111.72a7.994 7.994 0 0 1 2.22 11.09l-8.88 13.31a7.994 7.994 0 0 1-11.09 2.22L384 316.34v87.49c0 41.15 29.08 77.31 71.26 88.62l59.5 15.95C577.52 525.22 640 481.01 640 419.78c0-9.99-1.3-19.94-3.89-29.63z",
                },
                child: [],
            },
        ],
    })(e);
}
function Oc(e) {
    return Ce({
        tag: "svg",
        attr: { viewBox: "0 0 640 512" },
        child: [
            {
                tag: "path",
                attr: {
                    d: "M633.82 458.1l-157.8-121.96C488.61 312.13 496 285.01 496 256v-48c0-8.84-7.16-16-16-16h-16c-8.84 0-16 7.16-16 16v48c0 17.92-3.96 34.8-10.72 50.2l-26.55-20.52c3.1-9.4 5.28-19.22 5.28-29.67V96c0-53.02-42.98-96-96-96s-96 42.98-96 96v45.36L45.47 3.37C38.49-2.05 28.43-.8 23.01 6.18L3.37 31.45C-2.05 38.42-.8 48.47 6.18 53.9l588.36 454.73c6.98 5.43 17.03 4.17 22.46-2.81l19.64-25.27c5.41-6.97 4.16-17.02-2.82-22.45zM400 464h-56v-33.77c11.66-1.6 22.85-4.54 33.67-8.31l-50.11-38.73c-6.71.4-13.41.87-20.35.2-55.85-5.45-98.74-48.63-111.18-101.85L144 241.31v6.85c0 89.64 63.97 169.55 152 181.69V464h-56c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16z",
                },
                child: [],
            },
        ],
    })(e);
}
function ps(e) {
    return Ce({
        tag: "svg",
        attr: { viewBox: "0 0 352 512" },
        child: [
            {
                tag: "path",
                attr: {
                    d: "M176 352c53.02 0 96-42.98 96-96V96c0-53.02-42.98-96-96-96S80 42.98 80 96v160c0 53.02 42.98 96 96 96zm160-160h-16c-8.84 0-16 7.16-16 16v48c0 74.8-64.49 134.82-140.79 127.38C96.71 376.89 48 317.11 48 250.3V208c0-8.84-7.16-16-16-16H16c-8.84 0-16 7.16-16 16v40.16c0 89.64 63.97 169.55 152 181.69V464H96c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16h-56v-33.77C285.71 418.47 352 344.9 352 256v-48c0-8.84-7.16-16-16-16z",
                },
                child: [],
            },
        ],
    })(e);
}
function hs(e) {
    return Ce({
        tag: "svg",
        attr: { viewBox: "0 0 416 512" },
        child: [
            {
                tag: "path",
                attr: {
                    d: "M272 96c26.51 0 48-21.49 48-48S298.51 0 272 0s-48 21.49-48 48 21.49 48 48 48zM113.69 317.47l-14.8 34.52H32c-17.67 0-32 14.33-32 32s14.33 32 32 32h77.45c19.25 0 36.58-11.44 44.11-29.09l8.79-20.52-10.67-6.3c-17.32-10.23-30.06-25.37-37.99-42.61zM384 223.99h-44.03l-26.06-53.25c-12.5-25.55-35.45-44.23-61.78-50.94l-71.08-21.14c-28.3-6.8-57.77-.55-80.84 17.14l-39.67 30.41c-14.03 10.75-16.69 30.83-5.92 44.86s30.84 16.66 44.86 5.92l39.69-30.41c7.67-5.89 17.44-8 25.27-6.14l14.7 4.37-37.46 87.39c-12.62 29.48-1.31 64.01 26.3 80.31l84.98 50.17-27.47 87.73c-5.28 16.86 4.11 34.81 20.97 40.09 3.19 1 6.41 1.48 9.58 1.48 13.61 0 26.23-8.77 30.52-22.45l31.64-101.06c5.91-20.77-2.89-43.08-21.64-54.39l-61.24-36.14 31.31-78.28 20.27 41.43c8 16.34 24.92 26.89 43.11 26.89H384c17.67 0 32-14.33 32-32s-14.33-31.99-32-31.99z",
                },
                child: [],
            },
        ],
    })(e);
}
const Q1 = () => {
        const {
            Config: e,
            Colors: t,
            changeColor: n,
            carHudType: r,
            changeCarHudType: i,
            setSettingsMenu: l,
            resetAll: o,
        } = U.useContext(Yn);
        return S.jsx("div", {
            className: "settings-popup",
            children: S.jsxs("div", {
                className: "settings-menu",
                children: [
                    S.jsxs("div", {
                        className: "menu-header",
                        children: [
                            S.jsx("div", {
                                className: "menu-image",
                                children: S.jsx("img", {
                                    src: "../../../html/public/images/menu-icon.png",
                                }),
                            }),
                            S.jsxs("div", {
                                className: "menu-titles",
                                children: [
                                    S.jsx("span", {
                                        children: e.language.title,
                                    }),
                                    S.jsx("span", {
                                        children: e.language.title2,
                                    }),
                                ],
                            }),
                            S.jsx("div", {
                                className: "menu-text",
                                children: S.jsx("span", {
                                    children: e.language.header,
                                }),
                            }),
                            S.jsx("div", {
                                className: "close-button",
                                onClick: (u) =>
                                    as("closeSettings", {}, () => {}),
                                children: S.jsx(H1, {
                                    className: "button-icon",
                                }),
                            }),
                        ],
                    }),
                    S.jsxs("div", {
                        className: "option direction",
                        children: [
                            S.jsx("span", { children: e.language.bar_color }),
                            S.jsxs("div", {
                                className: "color-bars",
                                children: [
                                    S.jsxs("div", {
                                        className: "color-bar",
                                        children: [
                                            S.jsx("input", {
                                                type: "color",
                                                value: t.mic,
                                                onChange: (u) =>
                                                    n("mic", u.target.value),
                                            }),
                                            S.jsx(ps, {
                                                id: "icon",
                                                color: t.mic,
                                            }),
                                        ],
                                    }),
                                    S.jsxs("div", {
                                        className: "color-bar",
                                        children: [
                                            S.jsx("input", {
                                                type: "color",
                                                value: t.hunger,
                                                onChange: (u) =>
                                                    n("hunger", u.target.value),
                                            }),
                                            S.jsx(ds, {
                                                id: "icon",
                                                color: t.hunger,
                                            }),
                                        ],
                                    }),
                                    S.jsxs("div", {
                                        className: "color-bar",
                                        children: [
                                            S.jsx("input", {
                                                type: "color",
                                                value: t.thirst,
                                                onChange: (u) =>
                                                    n("thirst", u.target.value),
                                            }),
                                            S.jsx(cs, {
                                                id: "icon",
                                                color: t.thirst,
                                            }),
                                        ],
                                    }),
                                    S.jsxs("div", {
                                        className: "color-bar",
                                        children: [
                                            S.jsx("input", {
                                                type: "color",
                                                value: t.stress,
                                                onChange: (u) =>
                                                    n("stress", u.target.value),
                                            }),
                                            S.jsx(fs, {
                                                id: "icon",
                                                color: t.stress,
                                            }),
                                        ],
                                    }),
                                    S.jsxs("div", {
                                        className: "color-bar",
                                        children: [
                                            S.jsx("input", {
                                                type: "color",
                                                value: t.stamina,
                                                onChange: (u) =>
                                                    n(
                                                        "stamina",
                                                        u.target.value
                                                    ),
                                            }),
                                            S.jsx(hs, {
                                                id: "icon",
                                                color: t.stamina,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    S.jsxs("div", {
                        className: "option",
                        children: [
                            S.jsx("span", {
                                children: e.language.speedometer_type,
                            }),
                            S.jsxs("div", {
                                className: "selection",
                                children: [
                                    S.jsx("div", {
                                        className: `selection-option ${
                                            r == "easy" ? "active" : ""
                                        }`,
                                        onClick: (u) => i("easy"),
                                        children: S.jsx("span", {
                                            children: e.language.easy,
                                        }),
                                    }),
                                    S.jsx("div", {
                                        className: `selection-option ${
                                            r == "new" ? "active" : ""
                                        }`,
                                        onClick: (u) => i("new"),
                                        children: S.jsx("span", {
                                            children: e.language.new,
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    S.jsx("div", {
                        className: "option",
                        id: "reset",
                        style: { justifyContent: "center" },
                        onClick: (u) => o(),
                        children: S.jsx("span", {
                            style: {
                                width: "unset",
                                fontWeight: "700",
                                color: "#fff",
                                fontSize: "1.5vh",
                            },
                            children: e.language.reset,
                        }),
                    }),
                ],
            }),
        });
    },
    K1 = (e) => {
        const { speedtype: t } = U.useContext(Yn);
        return S.jsxs("div", {
            className: "carhud",
            children: [
                S.jsxs("div", {
                    className: "speed",
                    children: [
                        S.jsx("span", {
                            children: parseInt(
                                e.speed * (t == "kmh" ? 3.6 : 2.23)
                            ),
                        }),
                        S.jsx("span", {
                            children: t == "kmh" ? "km/h" : "mp/h",
                        }),
                    ],
                }),
                S.jsxs("div", {
                    className: "symbols",
                    children: [
                        S.jsx("img", {
                            src: `../../../html/public/images/${
                                e.belt ? "belt-on" : "belt"
                            }.png`,
                        }),
                        S.jsx("img", {
                            style: { width: "1.25vh" },
                            src: `../../../html/public/images/${
                                e.light ? "lights-on" : "lights"
                            }.png`,
                        }),
                        S.jsx("img", {
                            src: `../../../html/public/images/${
                                e.engine ? "engine-on" : "engine"
                            }.png`,
                        }),
                        S.jsx(W1, { id: "icon" }),
                    ],
                }),
                S.jsx("div", {
                    className: "fuel",
                    children: S.jsx("div", {
                        className: `test`,
                        style: { width: `${e.fuel}%` },
                    }),
                }),
            ],
        });
    },
    Y1 = (e) => {
        const { speedtype: t } = U.useContext(Yn),
            [n, r] = U.useState(400),
            [i, l] = U.useState(772);
        return (
            U.useMemo(() => {
                const o =
                    (e.speed * (t == "kmh" ? 3.6 : 2.23) + 400) *
                    (e.speed > 0 ? 1.15 : 1);
                r(o <= 780 ? o : 780);
            }, [e.speed]),
            U.useMemo(() => {
                const o = 772 + e.fuel * 1.16;
                l(o);
            }, [e.fuel]),
            S.jsxs("div", {
                className: "old-carhud",
                children: [
                    S.jsxs("svg", {
                        viewBox: "0 0 230 230",
                        children: [
                            S.jsx("path", {
                                className: "old-carhud-sb",
                                stroke: "#fff",
                                opacity: 0.25,
                                d: "M57.625 206.164s-46.921-30.806-46.921-90.633c0-59.828 46.133-105.219 109.483-105.219 63.351 0 88.63 47.921 88.63 47.921",
                            }),
                            S.jsx("path", {
                                className: "old-carhud-sp",
                                style: { strokeDasharray: n },
                                stroke: "#fff",
                                d: "M57.625 206.164s-46.921-30.806-46.921-90.633c0-59.828 46.133-105.219 109.483-105.219 63.351 0 88.63 47.921 88.63 47.921",
                            }),
                        ],
                    }),
                    S.jsxs("div", {
                        className: "old-carhud-fuel",
                        children: [
                            S.jsxs("svg", {
                                viewBox: "0 0 230 230",
                                children: [
                                    S.jsx("path", {
                                        className: "old-carhud-fb",
                                        stroke: "#fff",
                                        opacity: 0.25,
                                        d: "M6.16935 118.013C16.5177 100.089 21.9656 79.7575 21.9656 59.0609C21.9656 38.3643 16.5177 18.0323 6.16936 0.108491L0.553387 3.35087C10.3325 20.2889 15.4808 39.5026 15.4808 59.0609C15.4808 78.6192 10.3325 97.8329 0.553377 114.771L6.16935 118.013Z ",
                                    }),
                                    S.jsx("path", {
                                        className: "old-carhud-fp",
                                        strokeDasharray: i,
                                        stroke: "#fff",
                                        d: "M6.16935 118.013C16.5177 100.089 21.9656 79.7575 21.9656 59.0609C21.9656 38.3643 16.5177 18.0323 6.16936 0.108491L0.553387 3.35087C10.3325 20.2889 15.4808 39.5026 15.4808 59.0609C15.4808 78.6192 10.3325 97.8329 0.553377 114.771L6.16935 118.013Z ",
                                    }),
                                ],
                            }),
                            S.jsx(B1, {
                                className: "icon",
                                style: { color: "#fff" },
                            }),
                        ],
                    }),
                    S.jsxs("div", {
                        className: "old-carhud-sc",
                        children: [
                            S.jsxs("div", {
                                className: "old-carhud-gears",
                                children: [
                                    S.jsx("span", {
                                        style: {
                                            opacity:
                                                e.gear - 1 == -1 && e.rpm > 2
                                                    ? "0"
                                                    : "1",
                                        },
                                        children:
                                            e.gear - 1 == -1
                                                ? "R"
                                                : e.gear - 1 == 0
                                                ? "N"
                                                : e.gear - 1,
                                    }),
                                    S.jsx("span", {
                                        id: "now-gear",
                                        children:
                                            e.gear == 0 && e.rpm < 3
                                                ? "N"
                                                : e.gear - 1 == -1 && e.rpm > 2
                                                ? "R"
                                                : e.gear,
                                    }),
                                    S.jsx("span", {
                                        style: {
                                            opacity:
                                                e.gear == e.maxgear ? "0" : "1",
                                        },
                                        children:
                                            e.gear + 1 <= e.maxgear
                                                ? e.gear + 1
                                                : "",
                                    }),
                                ],
                            }),
                            S.jsx("div", {
                                className: "old-carhud-speed",
                                children: S.jsx("span", {
                                    style: { color: "#fff" },
                                    children: parseInt(
                                        e.speed * (t == "kmh" ? 3.6 : 2.23)
                                    ),
                                }),
                            }),
                            S.jsx("span", {
                                children: t == "kmh" ? "km/h" : "mp/h",
                            }),
                        ],
                    }),
                    S.jsxs("div", {
                        className: "old-carhud-icons top",
                        children: [
                            !e.disableBelt &&
                                S.jsx("img", {
                                    src: `${
                                        e.belt
                                            ? "../../../../../html/public/images/belt-on.png"
                                            : "../../../../../html/public/images/belt.png"
                                    }`,
                                }),
                            S.jsx("img", {
                                src: e.door
                                    ? "../../../../../html/public/images/door-on.png"
                                    : "../../../../../html/public/images/door.png",
                            }),
                            S.jsx("img", {
                                src: e.light
                                    ? "../../../../../html/public/images/lights-on.png"
                                    : "../../../../../html/public/images/lights.png",
                            }),
                        ],
                    }),
                    S.jsxs("div", {
                        className: "old-carhud-icons bottom",
                        children: [
                            S.jsx("img", {
                                style: { width: "2.5vh" },
                                src: e.engine
                                    ? "../../../../../html/public/images/engine-on.png"
                                    : "../../../../../html/public/images/engine.png",
                            }),
                            S.jsx("img", {
                                src: e.handbrake
                                    ? "../../../../../html/public/images/brake-on.png"
                                    : "../../../../../html/public/images/brake.png",
                            }),
                        ],
                    }),
                ],
            })
        );
    };
function gl(e) {
    throw new Error(
        'Could not dynamically require "' +
            e +
            '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.'
    );
}
var Kd = { exports: {} };
(function (e, t) {
    (function (n) {
        e.exports = n();
    })(function () {
        return (function () {
            function n(r, i, l) {
                function o(c, m) {
                    if (!i[c]) {
                        if (!r[c]) {
                            var p = typeof gl == "function" && gl;
                            if (!m && p) return p(c, !0);
                            if (u) return u(c, !0);
                            var d = new Error("Cannot find module '" + c + "'");
                            throw ((d.code = "MODULE_NOT_FOUND"), d);
                        }
                        var k = (i[c] = { exports: {} });
                        r[c][0].call(
                            k.exports,
                            function (j) {
                                var P = r[c][1][j];
                                return o(P || j);
                            },
                            k,
                            k.exports,
                            n,
                            r,
                            i,
                            l
                        );
                    }
                    return i[c].exports;
                }
                for (
                    var u = typeof gl == "function" && gl, s = 0;
                    s < l.length;
                    s++
                )
                    o(l[s]);
                return o;
            }
            return n;
        })()(
            {
                1: [
                    function (n, r, i) {
                        (function (l) {
                            (function () {
                                var o = 200,
                                    u = "__lodash_hash_undefined__",
                                    s = 800,
                                    c = 16,
                                    m = 9007199254740991,
                                    p = "[object Arguments]",
                                    d = "[object Array]",
                                    k = "[object AsyncFunction]",
                                    j = "[object Boolean]",
                                    P = "[object Date]",
                                    D = "[object Error]",
                                    g = "[object Function]",
                                    h = "[object GeneratorFunction]",
                                    v = "[object Map]",
                                    C = "[object Number]",
                                    T = "[object Null]",
                                    z = "[object Object]",
                                    M = "[object Proxy]",
                                    I = "[object RegExp]",
                                    Z = "[object Set]",
                                    W = "[object String]",
                                    de = "[object Undefined]",
                                    H = "[object WeakMap]",
                                    Xe = "[object ArrayBuffer]",
                                    ze = "[object DataView]",
                                    ht = "[object Float32Array]",
                                    Pt = "[object Float64Array]",
                                    En = "[object Int8Array]",
                                    L = "[object Int16Array]",
                                    B = "[object Int32Array]",
                                    V = "[object Uint8Array]",
                                    ie = "[object Uint8ClampedArray]",
                                    ve = "[object Uint16Array]",
                                    bt = "[object Uint32Array]",
                                    mt = /[\\^$.*+?()[\]{}|]/g,
                                    jn = /^\[object .+?Constructor\]$/,
                                    vt = /^(?:0|[1-9]\d*)$/,
                                    X = {};
                                (X[ht] =
                                    X[Pt] =
                                    X[En] =
                                    X[L] =
                                    X[B] =
                                    X[V] =
                                    X[ie] =
                                    X[ve] =
                                    X[bt] =
                                        !0),
                                    (X[p] =
                                        X[d] =
                                        X[Xe] =
                                        X[j] =
                                        X[ze] =
                                        X[P] =
                                        X[D] =
                                        X[g] =
                                        X[v] =
                                        X[C] =
                                        X[z] =
                                        X[I] =
                                        X[Z] =
                                        X[W] =
                                        X[H] =
                                            !1);
                                var Ai =
                                        typeof l == "object" &&
                                        l &&
                                        l.Object === Object &&
                                        l,
                                    wo =
                                        typeof self == "object" &&
                                        self &&
                                        self.Object === Object &&
                                        self,
                                    Pn = Ai || wo || Function("return this")(),
                                    Ri =
                                        typeof i == "object" &&
                                        i &&
                                        !i.nodeType &&
                                        i,
                                    Tn =
                                        Ri &&
                                        typeof r == "object" &&
                                        r &&
                                        !r.nodeType &&
                                        r,
                                    Mr = Tn && Tn.exports === Ri,
                                    Gn = Mr && Ai.process,
                                    Di = (function () {
                                        try {
                                            var f =
                                                Tn &&
                                                Tn.require &&
                                                Tn.require("util").types;
                                            return (
                                                f ||
                                                (Gn &&
                                                    Gn.binding &&
                                                    Gn.binding("util"))
                                            );
                                        } catch {}
                                    })(),
                                    $i = Di && Di.isTypedArray;
                                function So(f, y, x) {
                                    switch (x.length) {
                                        case 0:
                                            return f.call(y);
                                        case 1:
                                            return f.call(y, x[0]);
                                        case 2:
                                            return f.call(y, x[0], x[1]);
                                        case 3:
                                            return f.call(y, x[0], x[1], x[2]);
                                    }
                                    return f.apply(y, x);
                                }
                                function _o(f, y) {
                                    for (var x = -1, A = Array(f); ++x < f; )
                                        A[x] = y(x);
                                    return A;
                                }
                                function Xn(f) {
                                    return function (y) {
                                        return f(y);
                                    };
                                }
                                function xo(f, y) {
                                    return f?.[y];
                                }
                                function Lr(f, y) {
                                    return function (x) {
                                        return f(y(x));
                                    };
                                }
                                var Ui = Array.prototype,
                                    Ir = Function.prototype,
                                    gt = Object.prototype,
                                    Zn = Pn["__core-js_shared__"],
                                    en = Ir.toString,
                                    ot = gt.hasOwnProperty,
                                    Fr = (function () {
                                        var f = /[^.]+$/.exec(
                                            (Zn &&
                                                Zn.keys &&
                                                Zn.keys.IE_PROTO) ||
                                                ""
                                        );
                                        return f ? "Symbol(src)_1." + f : "";
                                    })(),
                                    Tt = gt.toString,
                                    Hi = en.call(Object),
                                    ko = RegExp(
                                        "^" +
                                            en
                                                .call(ot)
                                                .replace(mt, "\\$&")
                                                .replace(
                                                    /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                                                    "$1.*?"
                                                ) +
                                            "$"
                                    ),
                                    On = Mr ? Pn.Buffer : void 0,
                                    Bi = Pn.Symbol,
                                    Wi = Pn.Uint8Array;
                                On && On.allocUnsafe;
                                var Ar = Lr(Object.getPrototypeOf, Object),
                                    Rr = Object.create,
                                    Nn = gt.propertyIsEnumerable,
                                    Rt = Ui.splice,
                                    Me = Bi ? Bi.toStringTag : void 0,
                                    Dt = (function () {
                                        try {
                                            var f = $(Object, "defineProperty");
                                            return f({}, "", {}), f;
                                        } catch {}
                                    })(),
                                    Dr = On ? On.isBuffer : void 0,
                                    $r = Math.max,
                                    Vi = Date.now,
                                    Qi = $(Pn, "Map"),
                                    $t = $(Object, "create"),
                                    Ki = (function () {
                                        function f() {}
                                        return function (y) {
                                            if (!zn(y)) return {};
                                            if (Rr) return Rr(y);
                                            f.prototype = y;
                                            var x = new f();
                                            return (f.prototype = void 0), x;
                                        };
                                    })();
                                function Ut(f) {
                                    var y = -1,
                                        x = f == null ? 0 : f.length;
                                    for (this.clear(); ++y < x; ) {
                                        var A = f[y];
                                        this.set(A[0], A[1]);
                                    }
                                }
                                function Yi() {
                                    (this.__data__ = $t ? $t(null) : {}),
                                        (this.size = 0);
                                }
                                function Gi(f) {
                                    var y =
                                        this.has(f) && delete this.__data__[f];
                                    return (this.size -= y ? 1 : 0), y;
                                }
                                function Co(f) {
                                    var y = this.__data__;
                                    if ($t) {
                                        var x = y[f];
                                        return x === u ? void 0 : x;
                                    }
                                    return ot.call(y, f) ? y[f] : void 0;
                                }
                                function Be(f) {
                                    var y = this.__data__;
                                    return $t ? y[f] !== void 0 : ot.call(y, f);
                                }
                                function Eo(f, y) {
                                    var x = this.__data__;
                                    return (
                                        (this.size += this.has(f) ? 0 : 1),
                                        (x[f] = $t && y === void 0 ? u : y),
                                        this
                                    );
                                }
                                (Ut.prototype.clear = Yi),
                                    (Ut.prototype.delete = Gi),
                                    (Ut.prototype.get = Co),
                                    (Ut.prototype.has = Be),
                                    (Ut.prototype.set = Eo);
                                function Re(f) {
                                    var y = -1,
                                        x = f == null ? 0 : f.length;
                                    for (this.clear(); ++y < x; ) {
                                        var A = f[y];
                                        this.set(A[0], A[1]);
                                    }
                                }
                                function Jn() {
                                    (this.__data__ = []), (this.size = 0);
                                }
                                function jo(f) {
                                    var y = this.__data__,
                                        x = bn(y, f);
                                    if (x < 0) return !1;
                                    var A = y.length - 1;
                                    return (
                                        x == A ? y.pop() : Rt.call(y, x, 1),
                                        --this.size,
                                        !0
                                    );
                                }
                                function Po(f) {
                                    var y = this.__data__,
                                        x = bn(y, f);
                                    return x < 0 ? void 0 : y[x][1];
                                }
                                function Ur(f) {
                                    return bn(this.__data__, f) > -1;
                                }
                                function To(f, y) {
                                    var x = this.__data__,
                                        A = bn(x, f);
                                    return (
                                        A < 0
                                            ? (++this.size, x.push([f, y]))
                                            : (x[A][1] = y),
                                        this
                                    );
                                }
                                (Re.prototype.clear = Jn),
                                    (Re.prototype.delete = jo),
                                    (Re.prototype.get = Po),
                                    (Re.prototype.has = Ur),
                                    (Re.prototype.set = To);
                                function tn(f) {
                                    var y = -1,
                                        x = f == null ? 0 : f.length;
                                    for (this.clear(); ++y < x; ) {
                                        var A = f[y];
                                        this.set(A[0], A[1]);
                                    }
                                }
                                function Xi() {
                                    (this.size = 0),
                                        (this.__data__ = {
                                            hash: new Ut(),
                                            map: new (Qi || Re)(),
                                            string: new Ut(),
                                        });
                                }
                                function qn(f) {
                                    var y = R(this, f).delete(f);
                                    return (this.size -= y ? 1 : 0), y;
                                }
                                function Oo(f) {
                                    return R(this, f).get(f);
                                }
                                function Hr(f) {
                                    return R(this, f).has(f);
                                }
                                function No(f, y) {
                                    var x = R(this, f),
                                        A = x.size;
                                    return (
                                        x.set(f, y),
                                        (this.size += x.size == A ? 0 : 1),
                                        this
                                    );
                                }
                                (tn.prototype.clear = Xi),
                                    (tn.prototype.delete = qn),
                                    (tn.prototype.get = Oo),
                                    (tn.prototype.has = Hr),
                                    (tn.prototype.set = No);
                                function Ht(f) {
                                    var y = (this.__data__ = new Re(f));
                                    this.size = y.size;
                                }
                                function zo() {
                                    (this.__data__ = new Re()), (this.size = 0);
                                }
                                function Mo(f) {
                                    var y = this.__data__,
                                        x = y.delete(f);
                                    return (this.size = y.size), x;
                                }
                                function Zi(f) {
                                    return this.__data__.get(f);
                                }
                                function Lo(f) {
                                    return this.__data__.has(f);
                                }
                                function Io(f, y) {
                                    var x = this.__data__;
                                    if (x instanceof Re) {
                                        var A = x.__data__;
                                        if (!Qi || A.length < o - 1)
                                            return (
                                                A.push([f, y]),
                                                (this.size = ++x.size),
                                                this
                                            );
                                        x = this.__data__ = new tn(A);
                                    }
                                    return (
                                        x.set(f, y), (this.size = x.size), this
                                    );
                                }
                                (Ht.prototype.clear = zo),
                                    (Ht.prototype.delete = Mo),
                                    (Ht.prototype.get = Zi),
                                    (Ht.prototype.has = Lo),
                                    (Ht.prototype.set = Io);
                                function Fo(f, y) {
                                    var x = qe(f),
                                        A = !x && We(f),
                                        Y = !x && !A && aa(f),
                                        te = !x && !A && !Y && fa(f),
                                        ae = x || A || Y || te,
                                        J = ae ? _o(f.length, String) : [],
                                        ce = J.length;
                                    for (var wt in f)
                                        (ae &&
                                            (wt == "length" ||
                                                (Y &&
                                                    (wt == "offset" ||
                                                        wt == "parent")) ||
                                                (te &&
                                                    (wt == "buffer" ||
                                                        wt == "byteLength" ||
                                                        wt == "byteOffset")) ||
                                                ue(wt, ce))) ||
                                            J.push(wt);
                                    return J;
                                }
                                function Br(f, y, x) {
                                    ((x !== void 0 && !we(f[y], x)) ||
                                        (x === void 0 && !(y in f))) &&
                                        Wr(f, y, x);
                                }
                                function Ao(f, y, x) {
                                    var A = f[y];
                                    (!(ot.call(f, y) && we(A, x)) ||
                                        (x === void 0 && !(y in f))) &&
                                        Wr(f, y, x);
                                }
                                function bn(f, y) {
                                    for (var x = f.length; x--; )
                                        if (we(f[x][0], y)) return x;
                                    return -1;
                                }
                                function Wr(f, y, x) {
                                    y == "__proto__" && Dt
                                        ? Dt(f, y, {
                                              configurable: !0,
                                              enumerable: !0,
                                              value: x,
                                              writable: !0,
                                          })
                                        : (f[y] = x);
                                }
                                var Ji = N();
                                function er(f) {
                                    return f == null
                                        ? f === void 0
                                            ? de
                                            : T
                                        : Me && Me in Object(f)
                                        ? Q(f)
                                        : Ot(f);
                                }
                                function qi(f) {
                                    return Qr(f) && er(f) == p;
                                }
                                function Ze(f) {
                                    if (!zn(f) || ge(f)) return !1;
                                    var y = Ho(f) ? ko : jn;
                                    return y.test(Bt(f));
                                }
                                function Vr(f) {
                                    return Qr(f) && ca(f.length) && !!X[er(f)];
                                }
                                function Ro(f) {
                                    if (!zn(f)) return nn(f);
                                    var y = Ee(f),
                                        x = [];
                                    for (var A in f)
                                        (A == "constructor" &&
                                            (y || !ot.call(f, A))) ||
                                            x.push(A);
                                    return x;
                                }
                                function tr(f, y, x, A, Y) {
                                    f !== y &&
                                        Ji(
                                            y,
                                            function (te, ae) {
                                                if (
                                                    (Y || (Y = new Ht()),
                                                    zn(te))
                                                )
                                                    Do(f, y, ae, x, tr, A, Y);
                                                else {
                                                    var J = A
                                                        ? A(
                                                              b(f, ae),
                                                              te,
                                                              ae + "",
                                                              f,
                                                              y,
                                                              Y
                                                          )
                                                        : void 0;
                                                    J === void 0 && (J = te),
                                                        Br(f, ae, J);
                                                }
                                            },
                                            da
                                        );
                                }
                                function Do(f, y, x, A, Y, te, ae) {
                                    var J = b(f, x),
                                        ce = b(y, x),
                                        wt = ae.get(ce);
                                    if (wt) {
                                        Br(f, x, wt);
                                        return;
                                    }
                                    var be = te
                                            ? te(J, ce, x + "", f, y, ae)
                                            : void 0,
                                        Kr = be === void 0;
                                    if (Kr) {
                                        var Bo = qe(ce),
                                            Wo = !Bo && aa(ce),
                                            ha = !Bo && !Wo && fa(ce);
                                        (be = ce),
                                            Bo || Wo || ha
                                                ? qe(J)
                                                    ? (be = J)
                                                    : bi(J)
                                                    ? (be = w(J))
                                                    : Wo
                                                    ? ((Kr = !1), (be = Je(ce)))
                                                    : ha
                                                    ? ((Kr = !1), (be = a(ce)))
                                                    : (be = [])
                                                : Yd(ce) || We(ce)
                                                ? ((be = J),
                                                  We(J)
                                                      ? (be = Gd(J))
                                                      : (!zn(J) || Ho(J)) &&
                                                        (be = q(ce)))
                                                : (Kr = !1);
                                    }
                                    Kr &&
                                        (ae.set(ce, be),
                                        Y(be, ce, A, te, ae),
                                        ae.delete(ce)),
                                        Br(f, x, be);
                                }
                                function $o(f, y) {
                                    return rn(Nt(f, y, pa), f + "");
                                }
                                var ut = Dt
                                    ? function (f, y) {
                                          return Dt(f, "toString", {
                                              configurable: !0,
                                              enumerable: !1,
                                              value: Zd(y),
                                              writable: !0,
                                          });
                                      }
                                    : pa;
                                function Je(f, y) {
                                    return f.slice();
                                }
                                function Uo(f) {
                                    var y = new f.constructor(f.byteLength);
                                    return new Wi(y).set(new Wi(f)), y;
                                }
                                function a(f, y) {
                                    var x = Uo(f.buffer);
                                    return new f.constructor(
                                        x,
                                        f.byteOffset,
                                        f.length
                                    );
                                }
                                function w(f, y) {
                                    var x = -1,
                                        A = f.length;
                                    for (y || (y = Array(A)); ++x < A; )
                                        y[x] = f[x];
                                    return y;
                                }
                                function E(f, y, x, A) {
                                    var Y = !x;
                                    x || (x = {});
                                    for (
                                        var te = -1, ae = y.length;
                                        ++te < ae;

                                    ) {
                                        var J = y[te],
                                            ce = void 0;
                                        ce === void 0 && (ce = f[J]),
                                            Y ? Wr(x, J, ce) : Ao(x, J, ce);
                                    }
                                    return x;
                                }
                                function _(f) {
                                    return $o(function (y, x) {
                                        var A = -1,
                                            Y = x.length,
                                            te = Y > 1 ? x[Y - 1] : void 0,
                                            ae = Y > 2 ? x[2] : void 0;
                                        for (
                                            te =
                                                f.length > 3 &&
                                                typeof te == "function"
                                                    ? (Y--, te)
                                                    : void 0,
                                                ae &&
                                                    ne(x[0], x[1], ae) &&
                                                    ((te = Y < 3 ? void 0 : te),
                                                    (Y = 1)),
                                                y = Object(y);
                                            ++A < Y;

                                        ) {
                                            var J = x[A];
                                            J && f(y, J, A, te);
                                        }
                                        return y;
                                    });
                                }
                                function N(f) {
                                    return function (y, x, A) {
                                        for (
                                            var Y = -1,
                                                te = Object(y),
                                                ae = A(y),
                                                J = ae.length;
                                            J--;

                                        ) {
                                            var ce = ae[++Y];
                                            if (x(te[ce], ce, te) === !1) break;
                                        }
                                        return y;
                                    };
                                }
                                function R(f, y) {
                                    var x = f.__data__;
                                    return se(y)
                                        ? x[
                                              typeof y == "string"
                                                  ? "string"
                                                  : "hash"
                                          ]
                                        : x.map;
                                }
                                function $(f, y) {
                                    var x = xo(f, y);
                                    return Ze(x) ? x : void 0;
                                }
                                function Q(f) {
                                    var y = ot.call(f, Me),
                                        x = f[Me];
                                    try {
                                        f[Me] = void 0;
                                        var A = !0;
                                    } catch {}
                                    var Y = Tt.call(f);
                                    return (
                                        A && (y ? (f[Me] = x) : delete f[Me]), Y
                                    );
                                }
                                function q(f) {
                                    return typeof f.constructor == "function" &&
                                        !Ee(f)
                                        ? Ki(Ar(f))
                                        : {};
                                }
                                function ue(f, y) {
                                    var x = typeof f;
                                    return (
                                        (y = y ?? m),
                                        !!y &&
                                            (x == "number" ||
                                                (x != "symbol" &&
                                                    vt.test(f))) &&
                                            f > -1 &&
                                            f % 1 == 0 &&
                                            f < y
                                    );
                                }
                                function ne(f, y, x) {
                                    if (!zn(x)) return !1;
                                    var A = typeof y;
                                    return (
                                        A == "number"
                                            ? yt(x) && ue(y, x.length)
                                            : A == "string" && y in x
                                    )
                                        ? we(x[y], f)
                                        : !1;
                                }
                                function se(f) {
                                    var y = typeof f;
                                    return y == "string" ||
                                        y == "number" ||
                                        y == "symbol" ||
                                        y == "boolean"
                                        ? f !== "__proto__"
                                        : f === null;
                                }
                                function ge(f) {
                                    return !!Fr && Fr in f;
                                }
                                function Ee(f) {
                                    var y = f && f.constructor,
                                        x =
                                            (typeof y == "function" &&
                                                y.prototype) ||
                                            gt;
                                    return f === x;
                                }
                                function nn(f) {
                                    var y = [];
                                    if (f != null)
                                        for (var x in Object(f)) y.push(x);
                                    return y;
                                }
                                function Ot(f) {
                                    return Tt.call(f);
                                }
                                function Nt(f, y, x) {
                                    return (
                                        (y = $r(
                                            y === void 0 ? f.length - 1 : y,
                                            0
                                        )),
                                        function () {
                                            for (
                                                var A = arguments,
                                                    Y = -1,
                                                    te = $r(A.length - y, 0),
                                                    ae = Array(te);
                                                ++Y < te;

                                            )
                                                ae[Y] = A[y + Y];
                                            Y = -1;
                                            for (
                                                var J = Array(y + 1);
                                                ++Y < y;

                                            )
                                                J[Y] = A[Y];
                                            return (
                                                (J[y] = x(ae)), So(f, this, J)
                                            );
                                        }
                                    );
                                }
                                function b(f, y) {
                                    if (
                                        !(
                                            y === "constructor" &&
                                            typeof f[y] == "function"
                                        ) &&
                                        y != "__proto__"
                                    )
                                        return f[y];
                                }
                                var rn = zt(ut);
                                function zt(f) {
                                    var y = 0,
                                        x = 0;
                                    return function () {
                                        var A = Vi(),
                                            Y = c - (A - x);
                                        if (((x = A), Y > 0)) {
                                            if (++y >= s) return arguments[0];
                                        } else y = 0;
                                        return f.apply(void 0, arguments);
                                    };
                                }
                                function Bt(f) {
                                    if (f != null) {
                                        try {
                                            return en.call(f);
                                        } catch {}
                                        try {
                                            return f + "";
                                        } catch {}
                                    }
                                    return "";
                                }
                                function we(f, y) {
                                    return f === y || (f !== f && y !== y);
                                }
                                var We = qi(
                                        (function () {
                                            return arguments;
                                        })()
                                    )
                                        ? qi
                                        : function (f) {
                                              return (
                                                  Qr(f) &&
                                                  ot.call(f, "callee") &&
                                                  !Nn.call(f, "callee")
                                              );
                                          },
                                    qe = Array.isArray;
                                function yt(f) {
                                    return f != null && ca(f.length) && !Ho(f);
                                }
                                function bi(f) {
                                    return Qr(f) && yt(f);
                                }
                                var aa = Dr || Jd;
                                function Ho(f) {
                                    if (!zn(f)) return !1;
                                    var y = er(f);
                                    return y == g || y == h || y == k || y == M;
                                }
                                function ca(f) {
                                    return (
                                        typeof f == "number" &&
                                        f > -1 &&
                                        f % 1 == 0 &&
                                        f <= m
                                    );
                                }
                                function zn(f) {
                                    var y = typeof f;
                                    return (
                                        f != null &&
                                        (y == "object" || y == "function")
                                    );
                                }
                                function Qr(f) {
                                    return f != null && typeof f == "object";
                                }
                                function Yd(f) {
                                    if (!Qr(f) || er(f) != z) return !1;
                                    var y = Ar(f);
                                    if (y === null) return !0;
                                    var x =
                                        ot.call(y, "constructor") &&
                                        y.constructor;
                                    return (
                                        typeof x == "function" &&
                                        x instanceof x &&
                                        en.call(x) == Hi
                                    );
                                }
                                var fa = $i ? Xn($i) : Vr;
                                function Gd(f) {
                                    return E(f, da(f));
                                }
                                function da(f) {
                                    return yt(f) ? Fo(f) : Ro(f);
                                }
                                var Xd = _(function (f, y, x) {
                                    tr(f, y, x);
                                });
                                function Zd(f) {
                                    return function () {
                                        return f;
                                    };
                                }
                                function pa(f) {
                                    return f;
                                }
                                function Jd() {
                                    return !1;
                                }
                                r.exports = Xd;
                            }).call(this);
                        }).call(
                            this,
                            typeof ma < "u"
                                ? ma
                                : typeof self < "u"
                                ? self
                                : typeof window < "u"
                                ? window
                                : {}
                        );
                    },
                    {},
                ],
                2: [
                    function (n, r, i) {
                        /*! For license information please see shifty.js.LICENSE.txt */ (function (
                            l,
                            o
                        ) {
                            typeof i == "object" && typeof r == "object"
                                ? (r.exports = o())
                                : typeof i == "object"
                                ? (i.shifty = o())
                                : (l.shifty = o());
                        })(self, function () {
                            return (function () {
                                var l = {
                                        720: function (s, c, m) {
                                            m.r(c),
                                                m.d(c, {
                                                    Scene: function () {
                                                        return Uo;
                                                    },
                                                    Tweenable: function () {
                                                        return Be;
                                                    },
                                                    interpolate: function () {
                                                        return Ro;
                                                    },
                                                    processTweens: function () {
                                                        return Vi;
                                                    },
                                                    setBezierFunction:
                                                        function () {
                                                            return Di;
                                                        },
                                                    shouldScheduleUpdate:
                                                        function () {
                                                            return Ki;
                                                        },
                                                    tween: function () {
                                                        return Eo;
                                                    },
                                                    unsetBezierFunction:
                                                        function () {
                                                            return $i;
                                                        },
                                                });
                                            var p = {};
                                            m.r(p),
                                                m.d(p, {
                                                    bounce: function () {
                                                        return X;
                                                    },
                                                    bouncePast: function () {
                                                        return Ai;
                                                    },
                                                    easeFrom: function () {
                                                        return Pn;
                                                    },
                                                    easeFromTo: function () {
                                                        return wo;
                                                    },
                                                    easeInBack: function () {
                                                        return V;
                                                    },
                                                    easeInCirc: function () {
                                                        return Pt;
                                                    },
                                                    easeInCubic: function () {
                                                        return g;
                                                    },
                                                    easeInExpo: function () {
                                                        return Xe;
                                                    },
                                                    easeInOutBack: function () {
                                                        return ve;
                                                    },
                                                    easeInOutCirc: function () {
                                                        return L;
                                                    },
                                                    easeInOutCubic:
                                                        function () {
                                                            return v;
                                                        },
                                                    easeInOutExpo: function () {
                                                        return ht;
                                                    },
                                                    easeInOutQuad: function () {
                                                        return D;
                                                    },
                                                    easeInOutQuart:
                                                        function () {
                                                            return z;
                                                        },
                                                    easeInOutQuint:
                                                        function () {
                                                            return Z;
                                                        },
                                                    easeInOutSine: function () {
                                                        return H;
                                                    },
                                                    easeInQuad: function () {
                                                        return j;
                                                    },
                                                    easeInQuart: function () {
                                                        return C;
                                                    },
                                                    easeInQuint: function () {
                                                        return M;
                                                    },
                                                    easeInSine: function () {
                                                        return W;
                                                    },
                                                    easeOutBack: function () {
                                                        return ie;
                                                    },
                                                    easeOutBounce: function () {
                                                        return B;
                                                    },
                                                    easeOutCirc: function () {
                                                        return En;
                                                    },
                                                    easeOutCubic: function () {
                                                        return h;
                                                    },
                                                    easeOutExpo: function () {
                                                        return ze;
                                                    },
                                                    easeOutQuad: function () {
                                                        return P;
                                                    },
                                                    easeOutQuart: function () {
                                                        return T;
                                                    },
                                                    easeOutQuint: function () {
                                                        return I;
                                                    },
                                                    easeOutSine: function () {
                                                        return de;
                                                    },
                                                    easeTo: function () {
                                                        return Ri;
                                                    },
                                                    elastic: function () {
                                                        return bt;
                                                    },
                                                    linear: function () {
                                                        return k;
                                                    },
                                                    swingFrom: function () {
                                                        return jn;
                                                    },
                                                    swingFromTo: function () {
                                                        return mt;
                                                    },
                                                    swingTo: function () {
                                                        return vt;
                                                    },
                                                });
                                            var d = {};
                                            m.r(d),
                                                m.d(d, {
                                                    afterTween: function () {
                                                        return Wr;
                                                    },
                                                    beforeTween: function () {
                                                        return bn;
                                                    },
                                                    doesApply: function () {
                                                        return Br;
                                                    },
                                                    tweenCreated: function () {
                                                        return Ao;
                                                    },
                                                });
                                            var k = function (a) {
                                                    return a;
                                                },
                                                j = function (a) {
                                                    return Math.pow(a, 2);
                                                },
                                                P = function (a) {
                                                    return -(
                                                        Math.pow(a - 1, 2) - 1
                                                    );
                                                },
                                                D = function (a) {
                                                    return (a /= 0.5) < 1
                                                        ? 0.5 * Math.pow(a, 2)
                                                        : -0.5 *
                                                              ((a -= 2) * a -
                                                                  2);
                                                },
                                                g = function (a) {
                                                    return Math.pow(a, 3);
                                                },
                                                h = function (a) {
                                                    return (
                                                        Math.pow(a - 1, 3) + 1
                                                    );
                                                },
                                                v = function (a) {
                                                    return (a /= 0.5) < 1
                                                        ? 0.5 * Math.pow(a, 3)
                                                        : 0.5 *
                                                              (Math.pow(
                                                                  a - 2,
                                                                  3
                                                              ) +
                                                                  2);
                                                },
                                                C = function (a) {
                                                    return Math.pow(a, 4);
                                                },
                                                T = function (a) {
                                                    return -(
                                                        Math.pow(a - 1, 4) - 1
                                                    );
                                                },
                                                z = function (a) {
                                                    return (a /= 0.5) < 1
                                                        ? 0.5 * Math.pow(a, 4)
                                                        : -0.5 *
                                                              ((a -= 2) *
                                                                  Math.pow(
                                                                      a,
                                                                      3
                                                                  ) -
                                                                  2);
                                                },
                                                M = function (a) {
                                                    return Math.pow(a, 5);
                                                },
                                                I = function (a) {
                                                    return (
                                                        Math.pow(a - 1, 5) + 1
                                                    );
                                                },
                                                Z = function (a) {
                                                    return (a /= 0.5) < 1
                                                        ? 0.5 * Math.pow(a, 5)
                                                        : 0.5 *
                                                              (Math.pow(
                                                                  a - 2,
                                                                  5
                                                              ) +
                                                                  2);
                                                },
                                                W = function (a) {
                                                    return (
                                                        1 -
                                                        Math.cos(
                                                            a * (Math.PI / 2)
                                                        )
                                                    );
                                                },
                                                de = function (a) {
                                                    return Math.sin(
                                                        a * (Math.PI / 2)
                                                    );
                                                },
                                                H = function (a) {
                                                    return (
                                                        -0.5 *
                                                        (Math.cos(Math.PI * a) -
                                                            1)
                                                    );
                                                },
                                                Xe = function (a) {
                                                    return a === 0
                                                        ? 0
                                                        : Math.pow(
                                                              2,
                                                              10 * (a - 1)
                                                          );
                                                },
                                                ze = function (a) {
                                                    return a === 1
                                                        ? 1
                                                        : 1 -
                                                              Math.pow(
                                                                  2,
                                                                  -10 * a
                                                              );
                                                },
                                                ht = function (a) {
                                                    return a === 0
                                                        ? 0
                                                        : a === 1
                                                        ? 1
                                                        : (a /= 0.5) < 1
                                                        ? 0.5 *
                                                          Math.pow(
                                                              2,
                                                              10 * (a - 1)
                                                          )
                                                        : 0.5 *
                                                          (2 -
                                                              Math.pow(
                                                                  2,
                                                                  -10 * --a
                                                              ));
                                                },
                                                Pt = function (a) {
                                                    return -(
                                                        Math.sqrt(1 - a * a) - 1
                                                    );
                                                },
                                                En = function (a) {
                                                    return Math.sqrt(
                                                        1 - Math.pow(a - 1, 2)
                                                    );
                                                },
                                                L = function (a) {
                                                    return (a /= 0.5) < 1
                                                        ? -0.5 *
                                                              (Math.sqrt(
                                                                  1 - a * a
                                                              ) -
                                                                  1)
                                                        : 0.5 *
                                                              (Math.sqrt(
                                                                  1 -
                                                                      (a -= 2) *
                                                                          a
                                                              ) +
                                                                  1);
                                                },
                                                B = function (a) {
                                                    return a < 1 / 2.75
                                                        ? 7.5625 * a * a
                                                        : a < 2 / 2.75
                                                        ? 7.5625 *
                                                              (a -=
                                                                  1.5 / 2.75) *
                                                              a +
                                                          0.75
                                                        : a < 2.5 / 2.75
                                                        ? 7.5625 *
                                                              (a -=
                                                                  2.25 / 2.75) *
                                                              a +
                                                          0.9375
                                                        : 7.5625 *
                                                              (a -=
                                                                  2.625 /
                                                                  2.75) *
                                                              a +
                                                          0.984375;
                                                },
                                                V = function (a) {
                                                    var w = 1.70158;
                                                    return (
                                                        a *
                                                        a *
                                                        ((w + 1) * a - w)
                                                    );
                                                },
                                                ie = function (a) {
                                                    var w = 1.70158;
                                                    return (
                                                        (a -= 1) *
                                                            a *
                                                            ((w + 1) * a + w) +
                                                        1
                                                    );
                                                },
                                                ve = function (a) {
                                                    var w = 1.70158;
                                                    return (a /= 0.5) < 1
                                                        ? a *
                                                              a *
                                                              ((1 +
                                                                  (w *= 1.525)) *
                                                                  a -
                                                                  w) *
                                                              0.5
                                                        : 0.5 *
                                                              ((a -= 2) *
                                                                  a *
                                                                  ((1 +
                                                                      (w *= 1.525)) *
                                                                      a +
                                                                      w) +
                                                                  2);
                                                },
                                                bt = function (a) {
                                                    return (
                                                        -1 *
                                                            Math.pow(
                                                                4,
                                                                -8 * a
                                                            ) *
                                                            Math.sin(
                                                                ((6 * a - 1) *
                                                                    (2 *
                                                                        Math.PI)) /
                                                                    2
                                                            ) +
                                                        1
                                                    );
                                                },
                                                mt = function (a) {
                                                    var w = 1.70158;
                                                    return (a /= 0.5) < 1
                                                        ? a *
                                                              a *
                                                              ((1 +
                                                                  (w *= 1.525)) *
                                                                  a -
                                                                  w) *
                                                              0.5
                                                        : 0.5 *
                                                              ((a -= 2) *
                                                                  a *
                                                                  ((1 +
                                                                      (w *= 1.525)) *
                                                                      a +
                                                                      w) +
                                                                  2);
                                                },
                                                jn = function (a) {
                                                    var w = 1.70158;
                                                    return (
                                                        a *
                                                        a *
                                                        ((w + 1) * a - w)
                                                    );
                                                },
                                                vt = function (a) {
                                                    var w = 1.70158;
                                                    return (
                                                        (a -= 1) *
                                                            a *
                                                            ((w + 1) * a + w) +
                                                        1
                                                    );
                                                },
                                                X = function (a) {
                                                    return a < 1 / 2.75
                                                        ? 7.5625 * a * a
                                                        : a < 2 / 2.75
                                                        ? 7.5625 *
                                                              (a -=
                                                                  1.5 / 2.75) *
                                                              a +
                                                          0.75
                                                        : a < 2.5 / 2.75
                                                        ? 7.5625 *
                                                              (a -=
                                                                  2.25 / 2.75) *
                                                              a +
                                                          0.9375
                                                        : 7.5625 *
                                                              (a -=
                                                                  2.625 /
                                                                  2.75) *
                                                              a +
                                                          0.984375;
                                                },
                                                Ai = function (a) {
                                                    return a < 1 / 2.75
                                                        ? 7.5625 * a * a
                                                        : a < 2 / 2.75
                                                        ? 2 -
                                                          (7.5625 *
                                                              (a -=
                                                                  1.5 / 2.75) *
                                                              a +
                                                              0.75)
                                                        : a < 2.5 / 2.75
                                                        ? 2 -
                                                          (7.5625 *
                                                              (a -=
                                                                  2.25 / 2.75) *
                                                              a +
                                                              0.9375)
                                                        : 2 -
                                                          (7.5625 *
                                                              (a -=
                                                                  2.625 /
                                                                  2.75) *
                                                              a +
                                                              0.984375);
                                                },
                                                wo = function (a) {
                                                    return (a /= 0.5) < 1
                                                        ? 0.5 * Math.pow(a, 4)
                                                        : -0.5 *
                                                              ((a -= 2) *
                                                                  Math.pow(
                                                                      a,
                                                                      3
                                                                  ) -
                                                                  2);
                                                },
                                                Pn = function (a) {
                                                    return Math.pow(a, 4);
                                                },
                                                Ri = function (a) {
                                                    return Math.pow(a, 0.25);
                                                };
                                            function Tn(a, w, E, _, N, R) {
                                                var $,
                                                    Q,
                                                    q,
                                                    ue,
                                                    ne,
                                                    se = 0,
                                                    ge = 0,
                                                    Ee = 0,
                                                    nn = function (b) {
                                                        return (
                                                            ((se * b + ge) * b +
                                                                Ee) *
                                                            b
                                                        );
                                                    },
                                                    Ot = function (b) {
                                                        return (
                                                            (3 * se * b +
                                                                2 * ge) *
                                                                b +
                                                            Ee
                                                        );
                                                    },
                                                    Nt = function (b) {
                                                        return b >= 0
                                                            ? b
                                                            : 0 - b;
                                                    };
                                                return (
                                                    (se =
                                                        1 -
                                                        (Ee = 3 * w) -
                                                        (ge =
                                                            3 * (_ - w) - Ee)),
                                                    (q =
                                                        1 -
                                                        (ne = 3 * E) -
                                                        (ue =
                                                            3 * (N - E) - ne)),
                                                    ($ = a),
                                                    (Q = (function (b) {
                                                        return 1 / (200 * b);
                                                    })(R)),
                                                    (function (b) {
                                                        return (
                                                            ((q * b + ue) * b +
                                                                ne) *
                                                            b
                                                        );
                                                    })(
                                                        (function (b, rn) {
                                                            var zt,
                                                                Bt,
                                                                we,
                                                                We,
                                                                qe,
                                                                yt;
                                                            for (
                                                                we = b, yt = 0;
                                                                yt < 8;
                                                                yt++
                                                            ) {
                                                                if (
                                                                    ((We =
                                                                        nn(we) -
                                                                        b),
                                                                    Nt(We) < rn)
                                                                )
                                                                    return we;
                                                                if (
                                                                    ((qe =
                                                                        Ot(we)),
                                                                    Nt(qe) <
                                                                        1e-6)
                                                                )
                                                                    break;
                                                                we -= We / qe;
                                                            }
                                                            if (
                                                                (we = b) <
                                                                (zt = 0)
                                                            )
                                                                return zt;
                                                            if (we > (Bt = 1))
                                                                return Bt;
                                                            for (; zt < Bt; ) {
                                                                if (
                                                                    ((We =
                                                                        nn(we)),
                                                                    Nt(We - b) <
                                                                        rn)
                                                                )
                                                                    return we;
                                                                b > We
                                                                    ? (zt = we)
                                                                    : (Bt = we),
                                                                    (we =
                                                                        0.5 *
                                                                            (Bt -
                                                                                zt) +
                                                                        zt);
                                                            }
                                                            return we;
                                                        })($, Q)
                                                    )
                                                );
                                            }
                                            var Mr,
                                                Gn = function () {
                                                    var a =
                                                            arguments.length >
                                                                0 &&
                                                            arguments[0] !==
                                                                void 0
                                                                ? arguments[0]
                                                                : 0.25,
                                                        w =
                                                            arguments.length >
                                                                1 &&
                                                            arguments[1] !==
                                                                void 0
                                                                ? arguments[1]
                                                                : 0.25,
                                                        E =
                                                            arguments.length >
                                                                2 &&
                                                            arguments[2] !==
                                                                void 0
                                                                ? arguments[2]
                                                                : 0.75,
                                                        _ =
                                                            arguments.length >
                                                                3 &&
                                                            arguments[3] !==
                                                                void 0
                                                                ? arguments[3]
                                                                : 0.75;
                                                    return function (N) {
                                                        return Tn(
                                                            N,
                                                            a,
                                                            w,
                                                            E,
                                                            _,
                                                            1
                                                        );
                                                    };
                                                },
                                                Di = function (a, w, E, _, N) {
                                                    var R = Gn(w, E, _, N);
                                                    return (
                                                        (R.displayName = a),
                                                        (R.x1 = w),
                                                        (R.y1 = E),
                                                        (R.x2 = _),
                                                        (R.y2 = N),
                                                        (Be.formulas[a] = R)
                                                    );
                                                },
                                                $i = function (a) {
                                                    return delete Be.formulas[
                                                        a
                                                    ];
                                                };
                                            function So(a, w) {
                                                if (!(a instanceof w))
                                                    throw new TypeError(
                                                        "Cannot call a class as a function"
                                                    );
                                            }
                                            function _o(a, w) {
                                                for (
                                                    var E = 0;
                                                    E < w.length;
                                                    E++
                                                ) {
                                                    var _ = w[E];
                                                    (_.enumerable =
                                                        _.enumerable || !1),
                                                        (_.configurable = !0),
                                                        "value" in _ &&
                                                            (_.writable = !0),
                                                        Object.defineProperty(
                                                            a,
                                                            _.key,
                                                            _
                                                        );
                                                }
                                            }
                                            function Xn(a) {
                                                return (
                                                    (Xn =
                                                        typeof Symbol ==
                                                            "function" &&
                                                        typeof Symbol.iterator ==
                                                            "symbol"
                                                            ? function (w) {
                                                                  return typeof w;
                                                              }
                                                            : function (w) {
                                                                  return w &&
                                                                      typeof Symbol ==
                                                                          "function" &&
                                                                      w.constructor ===
                                                                          Symbol &&
                                                                      w !==
                                                                          Symbol.prototype
                                                                      ? "symbol"
                                                                      : typeof w;
                                                              }),
                                                    Xn(a)
                                                );
                                            }
                                            function xo(a) {
                                                return (
                                                    (function (w) {
                                                        if (Array.isArray(w))
                                                            return Lr(w);
                                                    })(a) ||
                                                    (function (w) {
                                                        if (
                                                            typeof Symbol <
                                                                "u" &&
                                                            Symbol.iterator in
                                                                Object(w)
                                                        )
                                                            return Array.from(
                                                                w
                                                            );
                                                    })(a) ||
                                                    (function (w, E) {
                                                        if (w) {
                                                            if (
                                                                typeof w ==
                                                                "string"
                                                            )
                                                                return Lr(w, E);
                                                            var _ =
                                                                Object.prototype.toString
                                                                    .call(w)
                                                                    .slice(
                                                                        8,
                                                                        -1
                                                                    );
                                                            return (
                                                                _ ===
                                                                    "Object" &&
                                                                    w.constructor &&
                                                                    (_ =
                                                                        w
                                                                            .constructor
                                                                            .name),
                                                                _ === "Map" ||
                                                                _ === "Set"
                                                                    ? Array.from(
                                                                          w
                                                                      )
                                                                    : _ ===
                                                                          "Arguments" ||
                                                                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                          _
                                                                      )
                                                                    ? Lr(w, E)
                                                                    : void 0
                                                            );
                                                        }
                                                    })(a) ||
                                                    (function () {
                                                        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
                                                    })()
                                                );
                                            }
                                            function Lr(a, w) {
                                                (w == null || w > a.length) &&
                                                    (w = a.length);
                                                for (
                                                    var E = 0, _ = new Array(w);
                                                    E < w;
                                                    E++
                                                )
                                                    _[E] = a[E];
                                                return _;
                                            }
                                            function Ui(a, w) {
                                                var E = Object.keys(a);
                                                if (
                                                    Object.getOwnPropertySymbols
                                                ) {
                                                    var _ =
                                                        Object.getOwnPropertySymbols(
                                                            a
                                                        );
                                                    w &&
                                                        (_ = _.filter(function (
                                                            N
                                                        ) {
                                                            return Object.getOwnPropertyDescriptor(
                                                                a,
                                                                N
                                                            ).enumerable;
                                                        })),
                                                        E.push.apply(E, _);
                                                }
                                                return E;
                                            }
                                            function Ir(a) {
                                                for (
                                                    var w = 1;
                                                    w < arguments.length;
                                                    w++
                                                ) {
                                                    var E =
                                                        arguments[w] != null
                                                            ? arguments[w]
                                                            : {};
                                                    w % 2
                                                        ? Ui(
                                                              Object(E),
                                                              !0
                                                          ).forEach(function (
                                                              _
                                                          ) {
                                                              gt(a, _, E[_]);
                                                          })
                                                        : Object.getOwnPropertyDescriptors
                                                        ? Object.defineProperties(
                                                              a,
                                                              Object.getOwnPropertyDescriptors(
                                                                  E
                                                              )
                                                          )
                                                        : Ui(Object(E)).forEach(
                                                              function (_) {
                                                                  Object.defineProperty(
                                                                      a,
                                                                      _,
                                                                      Object.getOwnPropertyDescriptor(
                                                                          E,
                                                                          _
                                                                      )
                                                                  );
                                                              }
                                                          );
                                                }
                                                return a;
                                            }
                                            function gt(a, w, E) {
                                                return (
                                                    w in a
                                                        ? Object.defineProperty(
                                                              a,
                                                              w,
                                                              {
                                                                  value: E,
                                                                  enumerable:
                                                                      !0,
                                                                  configurable:
                                                                      !0,
                                                                  writable: !0,
                                                              }
                                                          )
                                                        : (a[w] = E),
                                                    a
                                                );
                                            }
                                            var Zn,
                                                en,
                                                ot,
                                                Fr = "linear",
                                                Tt =
                                                    typeof window < "u"
                                                        ? window
                                                        : m.g,
                                                Hi = "afterTween",
                                                ko = "afterTweenEnd",
                                                On = "beforeTween",
                                                Bi = "tweenCreated",
                                                Wi = "function",
                                                Ar = "string",
                                                Rr =
                                                    Tt.requestAnimationFrame ||
                                                    Tt.webkitRequestAnimationFrame ||
                                                    Tt.oRequestAnimationFrame ||
                                                    Tt.msRequestAnimationFrame ||
                                                    (Tt.mozCancelRequestAnimationFrame &&
                                                        Tt.mozRequestAnimationFrame) ||
                                                    setTimeout,
                                                Nn = function () {},
                                                Rt = null,
                                                Me = null,
                                                Dt = Ir({}, p),
                                                Dr = function (
                                                    a,
                                                    w,
                                                    E,
                                                    _,
                                                    N,
                                                    R,
                                                    $
                                                ) {
                                                    var Q,
                                                        q,
                                                        ue,
                                                        ne =
                                                            a < R
                                                                ? 0
                                                                : (a - R) / N,
                                                        se = !1;
                                                    for (var ge in ($ &&
                                                        $.call &&
                                                        ((se = !0),
                                                        (Q = $(ne))),
                                                    w))
                                                        se ||
                                                            (Q = (
                                                                (q = $[ge]).call
                                                                    ? q
                                                                    : Dt[q]
                                                            )(ne)),
                                                            (ue = E[ge]),
                                                            (w[ge] =
                                                                ue +
                                                                (_[ge] - ue) *
                                                                    Q);
                                                    return w;
                                                },
                                                $r = function (a, w) {
                                                    var E = a._timestamp,
                                                        _ = a._currentState,
                                                        N = a._delay;
                                                    if (!(w < E + N)) {
                                                        var R = a._duration,
                                                            $ = a._targetState,
                                                            Q = E + N + R,
                                                            q = w > Q ? Q : w;
                                                        a._hasEnded = q >= Q;
                                                        var ue = R - (Q - q),
                                                            ne =
                                                                a._filters
                                                                    .length > 0;
                                                        if (a._hasEnded)
                                                            return (
                                                                a._render(
                                                                    $,
                                                                    a._data,
                                                                    ue
                                                                ),
                                                                a.stop(!0)
                                                            );
                                                        ne &&
                                                            a._applyFilter(On),
                                                            q < E + N
                                                                ? (E =
                                                                      R =
                                                                      q =
                                                                          1)
                                                                : (E += N),
                                                            Dr(
                                                                q,
                                                                _,
                                                                a._originalState,
                                                                $,
                                                                R,
                                                                E,
                                                                a._easing
                                                            ),
                                                            ne &&
                                                                a._applyFilter(
                                                                    Hi
                                                                ),
                                                            a._render(
                                                                _,
                                                                a._data,
                                                                ue
                                                            );
                                                    }
                                                },
                                                Vi = function () {
                                                    for (
                                                        var a,
                                                            w = Be.now(),
                                                            E = Rt;
                                                        E;

                                                    )
                                                        (a = E._next),
                                                            $r(E, w),
                                                            (E = a);
                                                },
                                                Qi =
                                                    Date.now ||
                                                    function () {
                                                        return +new Date();
                                                    },
                                                $t = !1,
                                                Ki = function (a) {
                                                    (a && $t) ||
                                                        (($t = a), a && Ut());
                                                },
                                                Ut = function a() {
                                                    (Zn = Qi()),
                                                        $t &&
                                                            Rr.call(
                                                                Tt,
                                                                a,
                                                                16.666666666666668
                                                            ),
                                                        Vi();
                                                },
                                                Yi = function (a) {
                                                    var w =
                                                            arguments.length >
                                                                1 &&
                                                            arguments[1] !==
                                                                void 0
                                                                ? arguments[1]
                                                                : Fr,
                                                        E =
                                                            arguments.length >
                                                                2 &&
                                                            arguments[2] !==
                                                                void 0
                                                                ? arguments[2]
                                                                : {};
                                                    if (Array.isArray(w)) {
                                                        var _ = Gn.apply(
                                                            void 0,
                                                            xo(w)
                                                        );
                                                        return _;
                                                    }
                                                    var N = Xn(w);
                                                    if (Dt[w]) return Dt[w];
                                                    if (N === Ar || N === Wi)
                                                        for (var R in a)
                                                            E[R] = w;
                                                    else
                                                        for (var $ in a)
                                                            E[$] = w[$] || Fr;
                                                    return E;
                                                },
                                                Gi = function (a) {
                                                    a === Rt
                                                        ? (Rt = a._next)
                                                            ? (Rt._previous =
                                                                  null)
                                                            : (Me = null)
                                                        : a === Me
                                                        ? (Me = a._previous)
                                                            ? (Me._next = null)
                                                            : (Rt = null)
                                                        : ((en = a._previous),
                                                          (ot = a._next),
                                                          (en._next = ot),
                                                          (ot._previous = en)),
                                                        (a._previous = a._next =
                                                            null);
                                                },
                                                Co =
                                                    typeof Promise == "function"
                                                        ? Promise
                                                        : null;
                                            Mr = Symbol.toStringTag;
                                            var Be = (function () {
                                                function a() {
                                                    var _ =
                                                            arguments.length >
                                                                0 &&
                                                            arguments[0] !==
                                                                void 0
                                                                ? arguments[0]
                                                                : {},
                                                        N =
                                                            arguments.length >
                                                                1 &&
                                                            arguments[1] !==
                                                                void 0
                                                                ? arguments[1]
                                                                : void 0;
                                                    So(this, a),
                                                        gt(this, Mr, "Promise"),
                                                        (this._config = {}),
                                                        (this._data = {}),
                                                        (this._delay = 0),
                                                        (this._filters = []),
                                                        (this._next = null),
                                                        (this._previous = null),
                                                        (this._timestamp =
                                                            null),
                                                        (this._hasEnded = !1),
                                                        (this._resolve = null),
                                                        (this._reject = null),
                                                        (this._currentState =
                                                            _ || {}),
                                                        (this._originalState =
                                                            {}),
                                                        (this._targetState =
                                                            {}),
                                                        (this._start = Nn),
                                                        (this._render = Nn),
                                                        (this._promiseCtor =
                                                            Co),
                                                        N && this.setConfig(N);
                                                }
                                                var w, E;
                                                return (
                                                    (w = a),
                                                    (E = [
                                                        {
                                                            key: "_applyFilter",
                                                            value: function (
                                                                _
                                                            ) {
                                                                for (
                                                                    var N =
                                                                        this
                                                                            ._filters
                                                                            .length;
                                                                    N > 0;
                                                                    N--
                                                                ) {
                                                                    var R =
                                                                        this
                                                                            ._filters[
                                                                            N -
                                                                                N
                                                                        ][_];
                                                                    R &&
                                                                        R(this);
                                                                }
                                                            },
                                                        },
                                                        {
                                                            key: "tween",
                                                            value: function () {
                                                                var _ =
                                                                    arguments.length >
                                                                        0 &&
                                                                    arguments[0] !==
                                                                        void 0
                                                                        ? arguments[0]
                                                                        : void 0;
                                                                return (
                                                                    this
                                                                        ._isPlaying &&
                                                                        this.stop(),
                                                                    (!_ &&
                                                                        this
                                                                            ._config) ||
                                                                        this.setConfig(
                                                                            _
                                                                        ),
                                                                    (this._pausedAtTime =
                                                                        null),
                                                                    (this._timestamp =
                                                                        a.now()),
                                                                    this._start(
                                                                        this.get(),
                                                                        this
                                                                            ._data
                                                                    ),
                                                                    this
                                                                        ._delay &&
                                                                        this._render(
                                                                            this
                                                                                ._currentState,
                                                                            this
                                                                                ._data,
                                                                            0
                                                                        ),
                                                                    this._resume(
                                                                        this
                                                                            ._timestamp
                                                                    )
                                                                );
                                                            },
                                                        },
                                                        {
                                                            key: "setConfig",
                                                            value: function () {
                                                                var _ =
                                                                        arguments.length >
                                                                            0 &&
                                                                        arguments[0] !==
                                                                            void 0
                                                                            ? arguments[0]
                                                                            : {},
                                                                    N =
                                                                        this
                                                                            ._config;
                                                                for (var R in _)
                                                                    N[R] = _[R];
                                                                var $ =
                                                                        N.promise,
                                                                    Q =
                                                                        $ ===
                                                                        void 0
                                                                            ? this
                                                                                  ._promiseCtor
                                                                            : $,
                                                                    q = N.start,
                                                                    ue =
                                                                        q ===
                                                                        void 0
                                                                            ? Nn
                                                                            : q,
                                                                    ne =
                                                                        N.finish,
                                                                    se =
                                                                        N.render,
                                                                    ge =
                                                                        se ===
                                                                        void 0
                                                                            ? this
                                                                                  ._config
                                                                                  .step ||
                                                                              Nn
                                                                            : se,
                                                                    Ee = N.step,
                                                                    nn =
                                                                        Ee ===
                                                                        void 0
                                                                            ? Nn
                                                                            : Ee;
                                                                (this._data =
                                                                    N.data ||
                                                                    N.attachment ||
                                                                    this._data),
                                                                    (this._isPlaying =
                                                                        !1),
                                                                    (this._pausedAtTime =
                                                                        null),
                                                                    (this._scheduleId =
                                                                        null),
                                                                    (this._delay =
                                                                        _.delay ||
                                                                        0),
                                                                    (this._start =
                                                                        ue),
                                                                    (this._render =
                                                                        ge ||
                                                                        nn),
                                                                    (this._duration =
                                                                        N.duration ||
                                                                        500),
                                                                    (this._promiseCtor =
                                                                        Q),
                                                                    ne &&
                                                                        (this._resolve =
                                                                            ne);
                                                                var Ot = _.from,
                                                                    Nt = _.to,
                                                                    b =
                                                                        Nt ===
                                                                        void 0
                                                                            ? {}
                                                                            : Nt,
                                                                    rn =
                                                                        this
                                                                            ._currentState,
                                                                    zt =
                                                                        this
                                                                            ._originalState,
                                                                    Bt =
                                                                        this
                                                                            ._targetState;
                                                                for (var we in Ot)
                                                                    rn[we] =
                                                                        Ot[we];
                                                                var We = !1;
                                                                for (var qe in rn) {
                                                                    var yt =
                                                                        rn[qe];
                                                                    We ||
                                                                        Xn(
                                                                            yt
                                                                        ) !==
                                                                            Ar ||
                                                                        (We =
                                                                            !0),
                                                                        (zt[
                                                                            qe
                                                                        ] = yt),
                                                                        (Bt[
                                                                            qe
                                                                        ] =
                                                                            b.hasOwnProperty(
                                                                                qe
                                                                            )
                                                                                ? b[
                                                                                      qe
                                                                                  ]
                                                                                : yt);
                                                                }
                                                                if (
                                                                    ((this._easing =
                                                                        Yi(
                                                                            this
                                                                                ._currentState,
                                                                            N.easing,
                                                                            this
                                                                                ._easing
                                                                        )),
                                                                    (this._filters.length = 0),
                                                                    We)
                                                                ) {
                                                                    for (var bi in a.filters)
                                                                        a.filters[
                                                                            bi
                                                                        ].doesApply(
                                                                            this
                                                                        ) &&
                                                                            this._filters.push(
                                                                                a
                                                                                    .filters[
                                                                                    bi
                                                                                ]
                                                                            );
                                                                    this._applyFilter(
                                                                        Bi
                                                                    );
                                                                }
                                                                return this;
                                                            },
                                                        },
                                                        {
                                                            key: "then",
                                                            value: function (
                                                                _,
                                                                N
                                                            ) {
                                                                var R = this;
                                                                return (
                                                                    (this._promise =
                                                                        new this._promiseCtor(
                                                                            function (
                                                                                $,
                                                                                Q
                                                                            ) {
                                                                                (R._resolve =
                                                                                    $),
                                                                                    (R._reject =
                                                                                        Q);
                                                                            }
                                                                        )),
                                                                    this._promise.then(
                                                                        _,
                                                                        N
                                                                    )
                                                                );
                                                            },
                                                        },
                                                        {
                                                            key: "catch",
                                                            value: function (
                                                                _
                                                            ) {
                                                                return this.then().catch(
                                                                    _
                                                                );
                                                            },
                                                        },
                                                        {
                                                            key: "finally",
                                                            value: function (
                                                                _
                                                            ) {
                                                                return this.then().finally(
                                                                    _
                                                                );
                                                            },
                                                        },
                                                        {
                                                            key: "get",
                                                            value: function () {
                                                                return Ir(
                                                                    {},
                                                                    this
                                                                        ._currentState
                                                                );
                                                            },
                                                        },
                                                        {
                                                            key: "set",
                                                            value: function (
                                                                _
                                                            ) {
                                                                this._currentState =
                                                                    _;
                                                            },
                                                        },
                                                        {
                                                            key: "pause",
                                                            value: function () {
                                                                if (
                                                                    this
                                                                        ._isPlaying
                                                                )
                                                                    return (
                                                                        (this._pausedAtTime =
                                                                            a.now()),
                                                                        (this._isPlaying =
                                                                            !1),
                                                                        Gi(
                                                                            this
                                                                        ),
                                                                        this
                                                                    );
                                                            },
                                                        },
                                                        {
                                                            key: "resume",
                                                            value: function () {
                                                                return this._resume();
                                                            },
                                                        },
                                                        {
                                                            key: "_resume",
                                                            value: function () {
                                                                var _ =
                                                                    arguments.length >
                                                                        0 &&
                                                                    arguments[0] !==
                                                                        void 0
                                                                        ? arguments[0]
                                                                        : a.now();
                                                                return this
                                                                    ._timestamp ===
                                                                    null
                                                                    ? this.tween()
                                                                    : this
                                                                          ._isPlaying
                                                                    ? this
                                                                          ._promise
                                                                    : (this
                                                                          ._pausedAtTime &&
                                                                          ((this._timestamp +=
                                                                              _ -
                                                                              this
                                                                                  ._pausedAtTime),
                                                                          (this._pausedAtTime =
                                                                              null)),
                                                                      (this._isPlaying =
                                                                          !0),
                                                                      Rt ===
                                                                      null
                                                                          ? ((Rt =
                                                                                this),
                                                                            (Me =
                                                                                this))
                                                                          : ((this._previous =
                                                                                Me),
                                                                            (Me._next =
                                                                                this),
                                                                            (Me =
                                                                                this)),
                                                                      this);
                                                            },
                                                        },
                                                        {
                                                            key: "seek",
                                                            value: function (
                                                                _
                                                            ) {
                                                                _ = Math.max(
                                                                    _,
                                                                    0
                                                                );
                                                                var N = a.now();
                                                                return (
                                                                    this
                                                                        ._timestamp +
                                                                        _ ===
                                                                        0 ||
                                                                        ((this._timestamp =
                                                                            N -
                                                                            _),
                                                                        $r(
                                                                            this,
                                                                            N
                                                                        )),
                                                                    this
                                                                );
                                                            },
                                                        },
                                                        {
                                                            key: "stop",
                                                            value: function () {
                                                                var _ =
                                                                    arguments.length >
                                                                        0 &&
                                                                    arguments[0] !==
                                                                        void 0 &&
                                                                    arguments[0];
                                                                if (
                                                                    !this
                                                                        ._isPlaying
                                                                )
                                                                    return this;
                                                                (this._isPlaying =
                                                                    !1),
                                                                    Gi(this);
                                                                var N =
                                                                    this
                                                                        ._filters
                                                                        .length >
                                                                    0;
                                                                return (
                                                                    _ &&
                                                                        (N &&
                                                                            this._applyFilter(
                                                                                On
                                                                            ),
                                                                        Dr(
                                                                            1,
                                                                            this
                                                                                ._currentState,
                                                                            this
                                                                                ._originalState,
                                                                            this
                                                                                ._targetState,
                                                                            1,
                                                                            0,
                                                                            this
                                                                                ._easing
                                                                        ),
                                                                        N &&
                                                                            (this._applyFilter(
                                                                                Hi
                                                                            ),
                                                                            this._applyFilter(
                                                                                ko
                                                                            ))),
                                                                    this
                                                                        ._resolve &&
                                                                        this._resolve(
                                                                            {
                                                                                data: this
                                                                                    ._data,
                                                                                state: this
                                                                                    ._currentState,
                                                                                tweenable:
                                                                                    this,
                                                                            }
                                                                        ),
                                                                    (this._resolve =
                                                                        null),
                                                                    (this._reject =
                                                                        null),
                                                                    this
                                                                );
                                                            },
                                                        },
                                                        {
                                                            key: "cancel",
                                                            value: function () {
                                                                var _ =
                                                                        arguments.length >
                                                                            0 &&
                                                                        arguments[0] !==
                                                                            void 0 &&
                                                                        arguments[0],
                                                                    N =
                                                                        this
                                                                            ._currentState,
                                                                    R =
                                                                        this
                                                                            ._data,
                                                                    $ =
                                                                        this
                                                                            ._isPlaying;
                                                                return $
                                                                    ? (this
                                                                          ._reject &&
                                                                          this._reject(
                                                                              {
                                                                                  data: R,
                                                                                  state: N,
                                                                                  tweenable:
                                                                                      this,
                                                                              }
                                                                          ),
                                                                      (this._resolve =
                                                                          null),
                                                                      (this._reject =
                                                                          null),
                                                                      this.stop(
                                                                          _
                                                                      ))
                                                                    : this;
                                                            },
                                                        },
                                                        {
                                                            key: "isPlaying",
                                                            value: function () {
                                                                return this
                                                                    ._isPlaying;
                                                            },
                                                        },
                                                        {
                                                            key: "hasEnded",
                                                            value: function () {
                                                                return this
                                                                    ._hasEnded;
                                                            },
                                                        },
                                                        {
                                                            key: "setScheduleFunction",
                                                            value: function (
                                                                _
                                                            ) {
                                                                a.setScheduleFunction(
                                                                    _
                                                                );
                                                            },
                                                        },
                                                        {
                                                            key: "data",
                                                            value: function () {
                                                                var _ =
                                                                    arguments.length >
                                                                        0 &&
                                                                    arguments[0] !==
                                                                        void 0
                                                                        ? arguments[0]
                                                                        : null;
                                                                return (
                                                                    _ &&
                                                                        (this._data =
                                                                            Ir(
                                                                                {},
                                                                                _
                                                                            )),
                                                                    this._data
                                                                );
                                                            },
                                                        },
                                                        {
                                                            key: "dispose",
                                                            value: function () {
                                                                for (var _ in this)
                                                                    delete this[
                                                                        _
                                                                    ];
                                                            },
                                                        },
                                                    ]),
                                                    E && _o(w.prototype, E),
                                                    a
                                                );
                                            })();
                                            function Eo() {
                                                var a =
                                                        arguments.length > 0 &&
                                                        arguments[0] !== void 0
                                                            ? arguments[0]
                                                            : {},
                                                    w = new Be();
                                                return (
                                                    w.tween(a),
                                                    (w.tweenable = w),
                                                    w
                                                );
                                            }
                                            gt(Be, "now", function () {
                                                return Zn;
                                            }),
                                                gt(
                                                    Be,
                                                    "setScheduleFunction",
                                                    function (a) {
                                                        return (Rr = a);
                                                    }
                                                ),
                                                gt(Be, "filters", {}),
                                                gt(Be, "formulas", Dt),
                                                Ki(!0);
                                            var Re,
                                                Jn,
                                                jo = /(\d|-|\.)/,
                                                Po = /([^\-0-9.]+)/g,
                                                Ur = /[0-9.-]+/g,
                                                To =
                                                    ((Re = Ur.source),
                                                    (Jn = /,\s*/.source),
                                                    new RegExp(
                                                        "rgba?\\("
                                                            .concat(Re)
                                                            .concat(Jn)
                                                            .concat(Re)
                                                            .concat(Jn)
                                                            .concat(Re, "(")
                                                            .concat(Jn)
                                                            .concat(
                                                                Re,
                                                                ")?\\)"
                                                            ),
                                                        "g"
                                                    )),
                                                tn = /^.*\(/,
                                                Xi = /#([0-9]|[a-f]){3,6}/gi,
                                                qn = "VAL",
                                                Oo = function (a, w) {
                                                    return a.map(function (
                                                        E,
                                                        _
                                                    ) {
                                                        return "_"
                                                            .concat(w, "_")
                                                            .concat(_);
                                                    });
                                                };
                                            function Hr(a) {
                                                return parseInt(a, 16);
                                            }
                                            var No = function (a) {
                                                    return "rgb(".concat(
                                                        ((w = a),
                                                        (w = w.replace(/#/, ""))
                                                            .length === 3 &&
                                                            (w =
                                                                (w =
                                                                    w.split(
                                                                        ""
                                                                    ))[0] +
                                                                w[0] +
                                                                w[1] +
                                                                w[1] +
                                                                w[2] +
                                                                w[2]),
                                                        [
                                                            Hr(w.substr(0, 2)),
                                                            Hr(w.substr(2, 2)),
                                                            Hr(w.substr(4, 2)),
                                                        ]).join(","),
                                                        ")"
                                                    );
                                                    var w;
                                                },
                                                Ht = function (a, w, E) {
                                                    var _ = w.match(a),
                                                        N = w.replace(a, qn);
                                                    return (
                                                        _ &&
                                                            _.forEach(function (
                                                                R
                                                            ) {
                                                                return (N =
                                                                    N.replace(
                                                                        qn,
                                                                        E(R)
                                                                    ));
                                                            }),
                                                        N
                                                    );
                                                },
                                                zo = function (a) {
                                                    for (var w in a) {
                                                        var E = a[w];
                                                        typeof E == "string" &&
                                                            E.match(Xi) &&
                                                            (a[w] = Ht(
                                                                Xi,
                                                                E,
                                                                No
                                                            ));
                                                    }
                                                },
                                                Mo = function (a) {
                                                    var w = a.match(Ur),
                                                        E = w
                                                            .slice(0, 3)
                                                            .map(Math.floor),
                                                        _ = a.match(tn)[0];
                                                    if (w.length === 3)
                                                        return ""
                                                            .concat(_)
                                                            .concat(
                                                                E.join(","),
                                                                ")"
                                                            );
                                                    if (w.length === 4)
                                                        return ""
                                                            .concat(_)
                                                            .concat(
                                                                E.join(","),
                                                                ","
                                                            )
                                                            .concat(w[3], ")");
                                                    throw new Error(
                                                        "Invalid rgbChunk: ".concat(
                                                            a
                                                        )
                                                    );
                                                },
                                                Zi = function (a) {
                                                    return a.match(Ur);
                                                },
                                                Lo = function (a, w) {
                                                    var E = {};
                                                    return (
                                                        w.forEach(function (_) {
                                                            (E[_] = a[_]),
                                                                delete a[_];
                                                        }),
                                                        E
                                                    );
                                                },
                                                Io = function (a, w) {
                                                    return w.map(function (E) {
                                                        return a[E];
                                                    });
                                                },
                                                Fo = function (a, w) {
                                                    return (
                                                        w.forEach(function (E) {
                                                            return (a =
                                                                a.replace(
                                                                    qn,
                                                                    +E.toFixed(
                                                                        4
                                                                    )
                                                                ));
                                                        }),
                                                        a
                                                    );
                                                },
                                                Br = function (a) {
                                                    for (var w in a._currentState)
                                                        if (
                                                            typeof a
                                                                ._currentState[
                                                                w
                                                            ] == "string"
                                                        )
                                                            return !0;
                                                    return !1;
                                                };
                                            function Ao(a) {
                                                var w = a._currentState;
                                                [
                                                    w,
                                                    a._originalState,
                                                    a._targetState,
                                                ].forEach(zo),
                                                    (a._tokenData = (function (
                                                        E
                                                    ) {
                                                        var _,
                                                            N,
                                                            R = {};
                                                        for (var $ in E) {
                                                            var Q = E[$];
                                                            typeof Q ==
                                                                "string" &&
                                                                (R[$] = {
                                                                    formatString:
                                                                        ((_ =
                                                                            Q),
                                                                        (N =
                                                                            void 0),
                                                                        (N =
                                                                            _.match(
                                                                                Po
                                                                            )),
                                                                        N
                                                                            ? (N.length ===
                                                                                  1 ||
                                                                                  _.charAt(
                                                                                      0
                                                                                  ).match(
                                                                                      jo
                                                                                  )) &&
                                                                              N.unshift(
                                                                                  ""
                                                                              )
                                                                            : (N =
                                                                                  [
                                                                                      "",
                                                                                      "",
                                                                                  ]),
                                                                        N.join(
                                                                            qn
                                                                        )),
                                                                    chunkNames:
                                                                        Oo(
                                                                            Zi(
                                                                                Q
                                                                            ),
                                                                            $
                                                                        ),
                                                                });
                                                        }
                                                        return R;
                                                    })(w));
                                            }
                                            function bn(a) {
                                                var w = a._currentState,
                                                    E = a._originalState,
                                                    _ = a._targetState,
                                                    N = a._easing,
                                                    R = a._tokenData;
                                                (function ($, Q) {
                                                    var q = function (ne) {
                                                        var se =
                                                                Q[ne]
                                                                    .chunkNames,
                                                            ge = $[ne];
                                                        if (
                                                            typeof ge ==
                                                            "string"
                                                        ) {
                                                            var Ee =
                                                                    ge.split(
                                                                        " "
                                                                    ),
                                                                nn =
                                                                    Ee[
                                                                        Ee.length -
                                                                            1
                                                                    ];
                                                            se.forEach(
                                                                function (
                                                                    Ot,
                                                                    Nt
                                                                ) {
                                                                    return ($[
                                                                        Ot
                                                                    ] =
                                                                        Ee[
                                                                            Nt
                                                                        ] ||
                                                                        nn);
                                                                }
                                                            );
                                                        } else
                                                            se.forEach(
                                                                function (Ot) {
                                                                    return ($[
                                                                        Ot
                                                                    ] = ge);
                                                                }
                                                            );
                                                        delete $[ne];
                                                    };
                                                    for (var ue in Q) q(ue);
                                                })(N, R),
                                                    [w, E, _].forEach(function (
                                                        $
                                                    ) {
                                                        return (function (
                                                            Q,
                                                            q
                                                        ) {
                                                            var ue = function (
                                                                se
                                                            ) {
                                                                Zi(
                                                                    Q[se]
                                                                ).forEach(
                                                                    function (
                                                                        ge,
                                                                        Ee
                                                                    ) {
                                                                        return (Q[
                                                                            q[
                                                                                se
                                                                            ].chunkNames[
                                                                                Ee
                                                                            ]
                                                                        ] =
                                                                            +ge);
                                                                    }
                                                                ),
                                                                    delete Q[
                                                                        se
                                                                    ];
                                                            };
                                                            for (var ne in q)
                                                                ue(ne);
                                                        })($, R);
                                                    });
                                            }
                                            function Wr(a) {
                                                var w = a._currentState,
                                                    E = a._originalState,
                                                    _ = a._targetState,
                                                    N = a._easing,
                                                    R = a._tokenData;
                                                [w, E, _].forEach(function ($) {
                                                    return (function (Q, q) {
                                                        for (var ue in q) {
                                                            var ne = q[ue],
                                                                se =
                                                                    ne.chunkNames,
                                                                ge =
                                                                    ne.formatString,
                                                                Ee = Fo(
                                                                    ge,
                                                                    Io(
                                                                        Lo(
                                                                            Q,
                                                                            se
                                                                        ),
                                                                        se
                                                                    )
                                                                );
                                                            Q[ue] = Ht(
                                                                To,
                                                                Ee,
                                                                Mo
                                                            );
                                                        }
                                                    })($, R);
                                                }),
                                                    (function ($, Q) {
                                                        for (var q in Q) {
                                                            var ue =
                                                                    Q[q]
                                                                        .chunkNames,
                                                                ne = $[ue[0]];
                                                            $[q] =
                                                                typeof ne ==
                                                                "string"
                                                                    ? ue
                                                                          .map(
                                                                              function (
                                                                                  se
                                                                              ) {
                                                                                  var ge =
                                                                                      $[
                                                                                          se
                                                                                      ];
                                                                                  return (
                                                                                      delete $[
                                                                                          se
                                                                                      ],
                                                                                      ge
                                                                                  );
                                                                              }
                                                                          )
                                                                          .join(
                                                                              " "
                                                                          )
                                                                    : ne;
                                                        }
                                                    })(N, R);
                                            }
                                            function Ji(a, w) {
                                                var E = Object.keys(a);
                                                if (
                                                    Object.getOwnPropertySymbols
                                                ) {
                                                    var _ =
                                                        Object.getOwnPropertySymbols(
                                                            a
                                                        );
                                                    w &&
                                                        (_ = _.filter(function (
                                                            N
                                                        ) {
                                                            return Object.getOwnPropertyDescriptor(
                                                                a,
                                                                N
                                                            ).enumerable;
                                                        })),
                                                        E.push.apply(E, _);
                                                }
                                                return E;
                                            }
                                            function er(a) {
                                                for (
                                                    var w = 1;
                                                    w < arguments.length;
                                                    w++
                                                ) {
                                                    var E =
                                                        arguments[w] != null
                                                            ? arguments[w]
                                                            : {};
                                                    w % 2
                                                        ? Ji(
                                                              Object(E),
                                                              !0
                                                          ).forEach(function (
                                                              _
                                                          ) {
                                                              qi(a, _, E[_]);
                                                          })
                                                        : Object.getOwnPropertyDescriptors
                                                        ? Object.defineProperties(
                                                              a,
                                                              Object.getOwnPropertyDescriptors(
                                                                  E
                                                              )
                                                          )
                                                        : Ji(Object(E)).forEach(
                                                              function (_) {
                                                                  Object.defineProperty(
                                                                      a,
                                                                      _,
                                                                      Object.getOwnPropertyDescriptor(
                                                                          E,
                                                                          _
                                                                      )
                                                                  );
                                                              }
                                                          );
                                                }
                                                return a;
                                            }
                                            function qi(a, w, E) {
                                                return (
                                                    w in a
                                                        ? Object.defineProperty(
                                                              a,
                                                              w,
                                                              {
                                                                  value: E,
                                                                  enumerable:
                                                                      !0,
                                                                  configurable:
                                                                      !0,
                                                                  writable: !0,
                                                              }
                                                          )
                                                        : (a[w] = E),
                                                    a
                                                );
                                            }
                                            var Ze = new Be(),
                                                Vr = Be.filters,
                                                Ro = function (a, w, E, _) {
                                                    var N =
                                                            arguments.length >
                                                                4 &&
                                                            arguments[4] !==
                                                                void 0
                                                                ? arguments[4]
                                                                : 0,
                                                        R = er({}, a),
                                                        $ = Yi(a, _);
                                                    for (var Q in ((Ze._filters.length = 0),
                                                    Ze.set({}),
                                                    (Ze._currentState = R),
                                                    (Ze._originalState = a),
                                                    (Ze._targetState = w),
                                                    (Ze._easing = $),
                                                    Vr))
                                                        Vr[Q].doesApply(Ze) &&
                                                            Ze._filters.push(
                                                                Vr[Q]
                                                            );
                                                    Ze._applyFilter(
                                                        "tweenCreated"
                                                    ),
                                                        Ze._applyFilter(
                                                            "beforeTween"
                                                        );
                                                    var q = Dr(
                                                        E,
                                                        R,
                                                        a,
                                                        w,
                                                        1,
                                                        N,
                                                        $
                                                    );
                                                    return (
                                                        Ze._applyFilter(
                                                            "afterTween"
                                                        ),
                                                        q
                                                    );
                                                };
                                            function tr(a, w) {
                                                (w == null || w > a.length) &&
                                                    (w = a.length);
                                                for (
                                                    var E = 0, _ = new Array(w);
                                                    E < w;
                                                    E++
                                                )
                                                    _[E] = a[E];
                                                return _;
                                            }
                                            function Do(a, w) {
                                                if (!(a instanceof w))
                                                    throw new TypeError(
                                                        "Cannot call a class as a function"
                                                    );
                                            }
                                            function $o(a, w) {
                                                for (
                                                    var E = 0;
                                                    E < w.length;
                                                    E++
                                                ) {
                                                    var _ = w[E];
                                                    (_.enumerable =
                                                        _.enumerable || !1),
                                                        (_.configurable = !0),
                                                        "value" in _ &&
                                                            (_.writable = !0),
                                                        Object.defineProperty(
                                                            a,
                                                            _.key,
                                                            _
                                                        );
                                                }
                                            }
                                            function ut(a, w) {
                                                var E = w.get(a);
                                                if (!E)
                                                    throw new TypeError(
                                                        "attempted to get private field on non-instance"
                                                    );
                                                return E.get
                                                    ? E.get.call(a)
                                                    : E.value;
                                            }
                                            var Je = new WeakMap(),
                                                Uo = (function () {
                                                    function a() {
                                                        Do(this, a),
                                                            Je.set(this, {
                                                                writable: !0,
                                                                value: [],
                                                            });
                                                        for (
                                                            var _ =
                                                                    arguments.length,
                                                                N = new Array(
                                                                    _
                                                                ),
                                                                R = 0;
                                                            R < _;
                                                            R++
                                                        )
                                                            N[R] = arguments[R];
                                                        N.forEach(
                                                            this.add.bind(this)
                                                        );
                                                    }
                                                    var w, E;
                                                    return (
                                                        (w = a),
                                                        (E = [
                                                            {
                                                                key: "add",
                                                                value: function (
                                                                    _
                                                                ) {
                                                                    return (
                                                                        ut(
                                                                            this,
                                                                            Je
                                                                        ).push(
                                                                            _
                                                                        ),
                                                                        _
                                                                    );
                                                                },
                                                            },
                                                            {
                                                                key: "remove",
                                                                value: function (
                                                                    _
                                                                ) {
                                                                    var N = ut(
                                                                        this,
                                                                        Je
                                                                    ).indexOf(
                                                                        _
                                                                    );
                                                                    return (
                                                                        ~N &&
                                                                            ut(
                                                                                this,
                                                                                Je
                                                                            ).splice(
                                                                                N,
                                                                                1
                                                                            ),
                                                                        _
                                                                    );
                                                                },
                                                            },
                                                            {
                                                                key: "empty",
                                                                value: function () {
                                                                    return this.tweenables.map(
                                                                        this.remove.bind(
                                                                            this
                                                                        )
                                                                    );
                                                                },
                                                            },
                                                            {
                                                                key: "isPlaying",
                                                                value: function () {
                                                                    return ut(
                                                                        this,
                                                                        Je
                                                                    ).some(
                                                                        function (
                                                                            _
                                                                        ) {
                                                                            return _.isPlaying();
                                                                        }
                                                                    );
                                                                },
                                                            },
                                                            {
                                                                key: "play",
                                                                value: function () {
                                                                    return (
                                                                        ut(
                                                                            this,
                                                                            Je
                                                                        ).forEach(
                                                                            function (
                                                                                _
                                                                            ) {
                                                                                return _.tween();
                                                                            }
                                                                        ),
                                                                        this
                                                                    );
                                                                },
                                                            },
                                                            {
                                                                key: "pause",
                                                                value: function () {
                                                                    return (
                                                                        ut(
                                                                            this,
                                                                            Je
                                                                        ).forEach(
                                                                            function (
                                                                                _
                                                                            ) {
                                                                                return _.pause();
                                                                            }
                                                                        ),
                                                                        this
                                                                    );
                                                                },
                                                            },
                                                            {
                                                                key: "resume",
                                                                value: function () {
                                                                    return (
                                                                        this.playingTweenables.forEach(
                                                                            function (
                                                                                _
                                                                            ) {
                                                                                return _.resume();
                                                                            }
                                                                        ),
                                                                        this
                                                                    );
                                                                },
                                                            },
                                                            {
                                                                key: "stop",
                                                                value: function (
                                                                    _
                                                                ) {
                                                                    return (
                                                                        ut(
                                                                            this,
                                                                            Je
                                                                        ).forEach(
                                                                            function (
                                                                                N
                                                                            ) {
                                                                                return N.stop(
                                                                                    _
                                                                                );
                                                                            }
                                                                        ),
                                                                        this
                                                                    );
                                                                },
                                                            },
                                                            {
                                                                key: "tweenables",
                                                                get: function () {
                                                                    return (
                                                                        (function (
                                                                            N
                                                                        ) {
                                                                            if (
                                                                                Array.isArray(
                                                                                    N
                                                                                )
                                                                            )
                                                                                return tr(
                                                                                    N
                                                                                );
                                                                        })(
                                                                            (_ =
                                                                                ut(
                                                                                    this,
                                                                                    Je
                                                                                ))
                                                                        ) ||
                                                                        (function (
                                                                            N
                                                                        ) {
                                                                            if (
                                                                                typeof Symbol <
                                                                                    "u" &&
                                                                                Symbol.iterator in
                                                                                    Object(
                                                                                        N
                                                                                    )
                                                                            )
                                                                                return Array.from(
                                                                                    N
                                                                                );
                                                                        })(_) ||
                                                                        (function (
                                                                            N,
                                                                            R
                                                                        ) {
                                                                            if (
                                                                                N
                                                                            ) {
                                                                                if (
                                                                                    typeof N ==
                                                                                    "string"
                                                                                )
                                                                                    return tr(
                                                                                        N,
                                                                                        R
                                                                                    );
                                                                                var $ =
                                                                                    Object.prototype.toString
                                                                                        .call(
                                                                                            N
                                                                                        )
                                                                                        .slice(
                                                                                            8,
                                                                                            -1
                                                                                        );
                                                                                return (
                                                                                    $ ===
                                                                                        "Object" &&
                                                                                        N.constructor &&
                                                                                        ($ =
                                                                                            N
                                                                                                .constructor
                                                                                                .name),
                                                                                    $ ===
                                                                                        "Map" ||
                                                                                    $ ===
                                                                                        "Set"
                                                                                        ? Array.from(
                                                                                              N
                                                                                          )
                                                                                        : $ ===
                                                                                              "Arguments" ||
                                                                                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                              $
                                                                                          )
                                                                                        ? tr(
                                                                                              N,
                                                                                              R
                                                                                          )
                                                                                        : void 0
                                                                                );
                                                                            }
                                                                        })(_) ||
                                                                        (function () {
                                                                            throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
                                                                        })()
                                                                    );
                                                                    var _;
                                                                },
                                                            },
                                                            {
                                                                key: "playingTweenables",
                                                                get: function () {
                                                                    return ut(
                                                                        this,
                                                                        Je
                                                                    ).filter(
                                                                        function (
                                                                            _
                                                                        ) {
                                                                            return !_.hasEnded();
                                                                        }
                                                                    );
                                                                },
                                                            },
                                                            {
                                                                key: "promises",
                                                                get: function () {
                                                                    return ut(
                                                                        this,
                                                                        Je
                                                                    ).map(
                                                                        function (
                                                                            _
                                                                        ) {
                                                                            return _.then();
                                                                        }
                                                                    );
                                                                },
                                                            },
                                                        ]) &&
                                                            $o(w.prototype, E),
                                                        a
                                                    );
                                                })();
                                            Be.filters.token = d;
                                        },
                                    },
                                    o = {};
                                function u(s) {
                                    if (o[s]) return o[s].exports;
                                    var c = (o[s] = { exports: {} });
                                    return l[s](c, c.exports, u), c.exports;
                                }
                                return (
                                    (u.d = function (s, c) {
                                        for (var m in c)
                                            u.o(c, m) &&
                                                !u.o(s, m) &&
                                                Object.defineProperty(s, m, {
                                                    enumerable: !0,
                                                    get: c[m],
                                                });
                                    }),
                                    (u.g = (function () {
                                        if (typeof globalThis == "object")
                                            return globalThis;
                                        try {
                                            return (
                                                this ||
                                                new Function("return this")()
                                            );
                                        } catch {
                                            if (typeof window == "object")
                                                return window;
                                        }
                                    })()),
                                    (u.o = function (s, c) {
                                        return Object.prototype.hasOwnProperty.call(
                                            s,
                                            c
                                        );
                                    }),
                                    (u.r = function (s) {
                                        typeof Symbol < "u" &&
                                            Symbol.toStringTag &&
                                            Object.defineProperty(
                                                s,
                                                Symbol.toStringTag,
                                                { value: "Module" }
                                            ),
                                            Object.defineProperty(
                                                s,
                                                "__esModule",
                                                { value: !0 }
                                            );
                                    }),
                                    u(720)
                                );
                            })();
                        });
                    },
                    {},
                ],
                3: [
                    function (n, r, i) {
                        var l = n("./shape"),
                            o = n("./utils"),
                            u = function (c, m) {
                                (this._pathTemplate =
                                    "M 50,50 m 0,-{radius} a {radius},{radius} 0 1 1 0,{2radius} a {radius},{radius} 0 1 1 0,-{2radius}"),
                                    (this.containerAspectRatio = 1),
                                    l.apply(this, arguments);
                            };
                        (u.prototype = new l()),
                            (u.prototype.constructor = u),
                            (u.prototype._pathString = function (c) {
                                var m = c.strokeWidth;
                                c.trailWidth &&
                                    c.trailWidth > c.strokeWidth &&
                                    (m = c.trailWidth);
                                var p = 50 - m / 2;
                                return o.render(this._pathTemplate, {
                                    radius: p,
                                    "2radius": p * 2,
                                });
                            }),
                            (u.prototype._trailString = function (c) {
                                return this._pathString(c);
                            }),
                            (r.exports = u);
                    },
                    { "./shape": 8, "./utils": 10 },
                ],
                4: [
                    function (n, r, i) {
                        var l = n("./shape"),
                            o = n("./utils"),
                            u = function (c, m) {
                                (this._pathTemplate = m.vertical
                                    ? "M {center},100 L {center},0"
                                    : "M 0,{center} L 100,{center}"),
                                    l.apply(this, arguments);
                            };
                        (u.prototype = new l()),
                            (u.prototype.constructor = u),
                            (u.prototype._initializeSvg = function (c, m) {
                                var p = m.vertical
                                    ? "0 0 " + m.strokeWidth + " 100"
                                    : "0 0 100 " + m.strokeWidth;
                                c.setAttribute("viewBox", p),
                                    c.setAttribute(
                                        "preserveAspectRatio",
                                        "none"
                                    );
                            }),
                            (u.prototype._pathString = function (c) {
                                return o.render(this._pathTemplate, {
                                    center: c.strokeWidth / 2,
                                });
                            }),
                            (u.prototype._trailString = function (c) {
                                return this._pathString(c);
                            }),
                            (r.exports = u);
                    },
                    { "./shape": 8, "./utils": 10 },
                ],
                5: [
                    function (n, r, i) {
                        r.exports = {
                            Line: n("./line"),
                            Circle: n("./circle"),
                            SemiCircle: n("./semicircle"),
                            Square: n("./square"),
                            Path: n("./path"),
                            Shape: n("./shape"),
                            utils: n("./utils"),
                        };
                    },
                    {
                        "./circle": 3,
                        "./line": 4,
                        "./path": 6,
                        "./semicircle": 7,
                        "./shape": 8,
                        "./square": 9,
                        "./utils": 10,
                    },
                ],
                6: [
                    function (n, r, i) {
                        var l = n("shifty"),
                            o = n("./utils"),
                            u = l.Tweenable,
                            s = {
                                easeIn: "easeInCubic",
                                easeOut: "easeOutCubic",
                                easeInOut: "easeInOutCubic",
                            },
                            c = function m(p, d) {
                                if (!(this instanceof m))
                                    throw new Error(
                                        "Constructor was called without new keyword"
                                    );
                                d = o.extend(
                                    {
                                        delay: 0,
                                        duration: 800,
                                        easing: "linear",
                                        from: {},
                                        to: {},
                                        step: function () {},
                                    },
                                    d
                                );
                                var k;
                                o.isString(p)
                                    ? (k = document.querySelector(p))
                                    : (k = p),
                                    (this.path = k),
                                    (this._opts = d),
                                    (this._tweenable = null);
                                var j = this.path.getTotalLength();
                                (this.path.style.strokeDasharray = j + " " + j),
                                    this.set(0);
                            };
                        (c.prototype.value = function () {
                            var p = this._getComputedDashOffset(),
                                d = this.path.getTotalLength(),
                                k = 1 - p / d;
                            return parseFloat(k.toFixed(6), 10);
                        }),
                            (c.prototype.set = function (p) {
                                this.stop(),
                                    (this.path.style.strokeDashoffset =
                                        this._progressToOffset(p));
                                var d = this._opts.step;
                                if (o.isFunction(d)) {
                                    var k = this._easing(this._opts.easing),
                                        j = this._calculateTo(p, k),
                                        P = this._opts.shape || this;
                                    d(j, P, this._opts.attachment);
                                }
                            }),
                            (c.prototype.stop = function () {
                                this._stopTween(),
                                    (this.path.style.strokeDashoffset =
                                        this._getComputedDashOffset());
                            }),
                            (c.prototype.animate = function (p, d, k) {
                                (d = d || {}),
                                    o.isFunction(d) && ((k = d), (d = {}));
                                var j = o.extend({}, d),
                                    P = o.extend({}, this._opts);
                                d = o.extend(P, d);
                                var D = this._easing(d.easing),
                                    g = this._resolveFromAndTo(p, D, j);
                                this.stop(), this.path.getBoundingClientRect();
                                var h = this._getComputedDashOffset(),
                                    v = this._progressToOffset(p),
                                    C = this;
                                (this._tweenable = new u()),
                                    this._tweenable
                                        .tween({
                                            from: o.extend(
                                                { offset: h },
                                                g.from
                                            ),
                                            to: o.extend({ offset: v }, g.to),
                                            duration: d.duration,
                                            delay: d.delay,
                                            easing: D,
                                            step: function (T) {
                                                C.path.style.strokeDashoffset =
                                                    T.offset;
                                                var z = d.shape || C;
                                                d.step(T, z, d.attachment);
                                            },
                                        })
                                        .then(function (T) {
                                            o.isFunction(k) && k();
                                        })
                                        .catch(function (T) {
                                            throw (
                                                (console.error(
                                                    "Error in tweening:",
                                                    T
                                                ),
                                                T)
                                            );
                                        });
                            }),
                            (c.prototype._getComputedDashOffset = function () {
                                var p = window.getComputedStyle(
                                    this.path,
                                    null
                                );
                                return parseFloat(
                                    p.getPropertyValue("stroke-dashoffset"),
                                    10
                                );
                            }),
                            (c.prototype._progressToOffset = function (p) {
                                var d = this.path.getTotalLength();
                                return d - p * d;
                            }),
                            (c.prototype._resolveFromAndTo = function (
                                p,
                                d,
                                k
                            ) {
                                return k.from && k.to
                                    ? { from: k.from, to: k.to }
                                    : {
                                          from: this._calculateFrom(d),
                                          to: this._calculateTo(p, d),
                                      };
                            }),
                            (c.prototype._calculateFrom = function (p) {
                                return l.interpolate(
                                    this._opts.from,
                                    this._opts.to,
                                    this.value(),
                                    p
                                );
                            }),
                            (c.prototype._calculateTo = function (p, d) {
                                return l.interpolate(
                                    this._opts.from,
                                    this._opts.to,
                                    p,
                                    d
                                );
                            }),
                            (c.prototype._stopTween = function () {
                                this._tweenable !== null &&
                                    (this._tweenable.stop(!0),
                                    (this._tweenable = null));
                            }),
                            (c.prototype._easing = function (p) {
                                return s.hasOwnProperty(p) ? s[p] : p;
                            }),
                            (r.exports = c);
                    },
                    { "./utils": 10, shifty: 2 },
                ],
                7: [
                    function (n, r, i) {
                        var l = n("./shape"),
                            o = n("./circle"),
                            u = n("./utils"),
                            s = function (m, p) {
                                (this._pathTemplate =
                                    "M 50,50 m -{radius},0 a {radius},{radius} 0 1 1 {2radius},0"),
                                    (this.containerAspectRatio = 2),
                                    l.apply(this, arguments);
                            };
                        (s.prototype = new l()),
                            (s.prototype.constructor = s),
                            (s.prototype._initializeSvg = function (m, p) {
                                m.setAttribute("viewBox", "0 0 100 50");
                            }),
                            (s.prototype._initializeTextContainer = function (
                                m,
                                p,
                                d
                            ) {
                                m.text.style &&
                                    ((d.style.top = "auto"),
                                    (d.style.bottom = "0"),
                                    m.text.alignToBottom
                                        ? u.setStyle(
                                              d,
                                              "transform",
                                              "translate(-50%, 0)"
                                          )
                                        : u.setStyle(
                                              d,
                                              "transform",
                                              "translate(-50%, 50%)"
                                          ));
                            }),
                            (s.prototype._pathString = o.prototype._pathString),
                            (s.prototype._trailString =
                                o.prototype._trailString),
                            (r.exports = s);
                    },
                    { "./circle": 3, "./shape": 8, "./utils": 10 },
                ],
                8: [
                    function (n, r, i) {
                        var l = n("./path"),
                            o = n("./utils"),
                            u = "Object is destroyed",
                            s = function c(m, p) {
                                if (!(this instanceof c))
                                    throw new Error(
                                        "Constructor was called without new keyword"
                                    );
                                if (arguments.length !== 0) {
                                    (this._opts = o.extend(
                                        {
                                            color: "#555",
                                            strokeWidth: 1,
                                            trailColor: null,
                                            trailWidth: null,
                                            fill: null,
                                            text: {
                                                style: {
                                                    color: null,
                                                    position: "absolute",
                                                    left: "50%",
                                                    top: "50%",
                                                    padding: 0,
                                                    margin: 0,
                                                    transform: {
                                                        prefix: !0,
                                                        value: "translate(-50%, -50%)",
                                                    },
                                                },
                                                autoStyleContainer: !0,
                                                alignToBottom: !0,
                                                value: null,
                                                className: "progressbar-text",
                                            },
                                            svgStyle: {
                                                display: "block",
                                                width: "100%",
                                            },
                                            warnings: !1,
                                        },
                                        p,
                                        !0
                                    )),
                                        o.isObject(p) &&
                                            p.svgStyle !== void 0 &&
                                            (this._opts.svgStyle = p.svgStyle),
                                        o.isObject(p) &&
                                            o.isObject(p.text) &&
                                            p.text.style !== void 0 &&
                                            (this._opts.text.style =
                                                p.text.style);
                                    var d = this._createSvgView(this._opts),
                                        k;
                                    if (
                                        (o.isString(m)
                                            ? (k = document.querySelector(m))
                                            : (k = m),
                                        !k)
                                    )
                                        throw new Error(
                                            "Container does not exist: " + m
                                        );
                                    (this._container = k),
                                        this._container.appendChild(d.svg),
                                        this._opts.warnings &&
                                            this._warnContainerAspectRatio(
                                                this._container
                                            ),
                                        this._opts.svgStyle &&
                                            o.setStyles(
                                                d.svg,
                                                this._opts.svgStyle
                                            ),
                                        (this.svg = d.svg),
                                        (this.path = d.path),
                                        (this.trail = d.trail),
                                        (this.text = null);
                                    var j = o.extend(
                                        { attachment: void 0, shape: this },
                                        this._opts
                                    );
                                    (this._progressPath = new l(d.path, j)),
                                        o.isObject(this._opts.text) &&
                                            this._opts.text.value !== null &&
                                            this.setText(this._opts.text.value);
                                }
                            };
                        (s.prototype.animate = function (m, p, d) {
                            if (this._progressPath === null) throw new Error(u);
                            this._progressPath.animate(m, p, d);
                        }),
                            (s.prototype.stop = function () {
                                if (this._progressPath === null)
                                    throw new Error(u);
                                this._progressPath !== void 0 &&
                                    this._progressPath.stop();
                            }),
                            (s.prototype.pause = function () {
                                if (this._progressPath === null)
                                    throw new Error(u);
                                this._progressPath !== void 0 &&
                                    this._progressPath._tweenable &&
                                    this._progressPath._tweenable.pause();
                            }),
                            (s.prototype.resume = function () {
                                if (this._progressPath === null)
                                    throw new Error(u);
                                this._progressPath !== void 0 &&
                                    this._progressPath._tweenable &&
                                    this._progressPath._tweenable.resume();
                            }),
                            (s.prototype.destroy = function () {
                                if (this._progressPath === null)
                                    throw new Error(u);
                                this.stop(),
                                    this.svg.parentNode.removeChild(this.svg),
                                    (this.svg = null),
                                    (this.path = null),
                                    (this.trail = null),
                                    (this._progressPath = null),
                                    this.text !== null &&
                                        (this.text.parentNode.removeChild(
                                            this.text
                                        ),
                                        (this.text = null));
                            }),
                            (s.prototype.set = function (m) {
                                if (this._progressPath === null)
                                    throw new Error(u);
                                this._progressPath.set(m);
                            }),
                            (s.prototype.value = function () {
                                if (this._progressPath === null)
                                    throw new Error(u);
                                return this._progressPath === void 0
                                    ? 0
                                    : this._progressPath.value();
                            }),
                            (s.prototype.setText = function (m) {
                                if (this._progressPath === null)
                                    throw new Error(u);
                                this.text === null &&
                                    ((this.text = this._createTextContainer(
                                        this._opts,
                                        this._container
                                    )),
                                    this._container.appendChild(this.text)),
                                    o.isObject(m)
                                        ? (o.removeChildren(this.text),
                                          this.text.appendChild(m))
                                        : (this.text.innerHTML = m);
                            }),
                            (s.prototype._createSvgView = function (m) {
                                var p = document.createElementNS(
                                    "http://www.w3.org/2000/svg",
                                    "svg"
                                );
                                this._initializeSvg(p, m);
                                var d = null;
                                (m.trailColor || m.trailWidth) &&
                                    ((d = this._createTrail(m)),
                                    p.appendChild(d));
                                var k = this._createPath(m);
                                return (
                                    p.appendChild(k),
                                    { svg: p, path: k, trail: d }
                                );
                            }),
                            (s.prototype._initializeSvg = function (m, p) {
                                m.setAttribute("viewBox", "0 0 100 100");
                            }),
                            (s.prototype._createPath = function (m) {
                                var p = this._pathString(m);
                                return this._createPathElement(p, m);
                            }),
                            (s.prototype._createTrail = function (m) {
                                var p = this._trailString(m),
                                    d = o.extend({}, m);
                                return (
                                    d.trailColor || (d.trailColor = "#eee"),
                                    d.trailWidth ||
                                        (d.trailWidth = d.strokeWidth),
                                    (d.color = d.trailColor),
                                    (d.strokeWidth = d.trailWidth),
                                    (d.fill = null),
                                    this._createPathElement(p, d)
                                );
                            }),
                            (s.prototype._createPathElement = function (m, p) {
                                var d = document.createElementNS(
                                    "http://www.w3.org/2000/svg",
                                    "path"
                                );
                                return (
                                    d.setAttribute("d", m),
                                    d.setAttribute("stroke", p.color),
                                    d.setAttribute(
                                        "stroke-width",
                                        p.strokeWidth
                                    ),
                                    p.fill
                                        ? d.setAttribute("fill", p.fill)
                                        : d.setAttribute("fill-opacity", "0"),
                                    d
                                );
                            }),
                            (s.prototype._createTextContainer = function (
                                m,
                                p
                            ) {
                                var d = document.createElement("div");
                                d.className = m.text.className;
                                var k = m.text.style;
                                return (
                                    k &&
                                        (m.text.autoStyleContainer &&
                                            (p.style.position = "relative"),
                                        o.setStyles(d, k),
                                        k.color || (d.style.color = m.color)),
                                    this._initializeTextContainer(m, p, d),
                                    d
                                );
                            }),
                            (s.prototype._initializeTextContainer = function (
                                c,
                                m,
                                p
                            ) {}),
                            (s.prototype._pathString = function (m) {
                                throw new Error(
                                    "Override this function for each progress bar"
                                );
                            }),
                            (s.prototype._trailString = function (m) {
                                throw new Error(
                                    "Override this function for each progress bar"
                                );
                            }),
                            (s.prototype._warnContainerAspectRatio = function (
                                m
                            ) {
                                if (this.containerAspectRatio) {
                                    var p = window.getComputedStyle(m, null),
                                        d = parseFloat(
                                            p.getPropertyValue("width"),
                                            10
                                        ),
                                        k = parseFloat(
                                            p.getPropertyValue("height"),
                                            10
                                        );
                                    o.floatEquals(
                                        this.containerAspectRatio,
                                        d / k
                                    ) ||
                                        (console.warn(
                                            "Incorrect aspect ratio of container",
                                            "#" + m.id,
                                            "detected:",
                                            p.getPropertyValue("width") +
                                                "(width)",
                                            "/",
                                            p.getPropertyValue("height") +
                                                "(height)",
                                            "=",
                                            d / k
                                        ),
                                        console.warn(
                                            "Aspect ratio of should be",
                                            this.containerAspectRatio
                                        ));
                                }
                            }),
                            (r.exports = s);
                    },
                    { "./path": 6, "./utils": 10 },
                ],
                9: [
                    function (n, r, i) {
                        var l = n("./shape"),
                            o = n("./utils"),
                            u = function (c, m) {
                                (this._pathTemplate =
                                    "M 0,{halfOfStrokeWidth} L {width},{halfOfStrokeWidth} L {width},{width} L {halfOfStrokeWidth},{width} L {halfOfStrokeWidth},{strokeWidth}"),
                                    (this._trailTemplate =
                                        "M {startMargin},{halfOfStrokeWidth} L {width},{halfOfStrokeWidth} L {width},{width} L {halfOfStrokeWidth},{width} L {halfOfStrokeWidth},{halfOfStrokeWidth}"),
                                    l.apply(this, arguments);
                            };
                        (u.prototype = new l()),
                            (u.prototype.constructor = u),
                            (u.prototype._pathString = function (c) {
                                var m = 100 - c.strokeWidth / 2;
                                return o.render(this._pathTemplate, {
                                    width: m,
                                    strokeWidth: c.strokeWidth,
                                    halfOfStrokeWidth: c.strokeWidth / 2,
                                });
                            }),
                            (u.prototype._trailString = function (c) {
                                var m = 100 - c.strokeWidth / 2;
                                return o.render(this._trailTemplate, {
                                    width: m,
                                    strokeWidth: c.strokeWidth,
                                    halfOfStrokeWidth: c.strokeWidth / 2,
                                    startMargin:
                                        c.strokeWidth / 2 - c.trailWidth / 2,
                                });
                            }),
                            (r.exports = u);
                    },
                    { "./shape": 8, "./utils": 10 },
                ],
                10: [
                    function (n, r, i) {
                        var l = n("lodash.merge"),
                            o = "Webkit Moz O ms".split(" "),
                            u = 0.001;
                        function s(v, C) {
                            var T = v;
                            for (var z in C)
                                if (C.hasOwnProperty(z)) {
                                    var M = C[z],
                                        I = "\\{" + z + "\\}",
                                        Z = new RegExp(I, "g");
                                    T = T.replace(Z, M);
                                }
                            return T;
                        }
                        function c(v, C, T) {
                            for (var z = v.style, M = 0; M < o.length; ++M) {
                                var I = o[M];
                                z[I + p(C)] = T;
                            }
                            z[C] = T;
                        }
                        function m(v, C) {
                            D(C, function (T, z) {
                                T != null &&
                                    (P(T) && T.prefix === !0
                                        ? c(v, z, T.value)
                                        : (v.style[z] = T));
                            });
                        }
                        function p(v) {
                            return v.charAt(0).toUpperCase() + v.slice(1);
                        }
                        function d(v) {
                            return typeof v == "string" || v instanceof String;
                        }
                        function k(v) {
                            return typeof v == "function";
                        }
                        function j(v) {
                            return (
                                Object.prototype.toString.call(v) ===
                                "[object Array]"
                            );
                        }
                        function P(v) {
                            if (j(v)) return !1;
                            var C = typeof v;
                            return C === "object" && !!v;
                        }
                        function D(v, C) {
                            for (var T in v)
                                if (v.hasOwnProperty(T)) {
                                    var z = v[T];
                                    C(z, T);
                                }
                        }
                        function g(v, C) {
                            return Math.abs(v - C) < u;
                        }
                        function h(v) {
                            for (; v.firstChild; ) v.removeChild(v.firstChild);
                        }
                        r.exports = {
                            extend: l,
                            render: s,
                            setStyle: c,
                            setStyles: m,
                            capitalize: p,
                            isString: d,
                            isFunction: k,
                            isObject: P,
                            forEachObject: D,
                            floatEquals: g,
                            removeChildren: h,
                        };
                    },
                    { "lodash.merge": 1 },
                ],
            },
            {},
            [5]
        )(5);
    });
})(Kd);
var G1 = Kd.exports;
const rr = Nc(G1);
function X1(e) {
    return Ce({
        tag: "svg",
        attr: { viewBox: "0 0 24 24" },
        child: [
            {
                tag: "path",
                attr: { fill: "none", d: "M0 0h24v24H0z" },
                child: [],
            },
            {
                tag: "path",
                attr: {
                    d: "M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z",
                },
                child: [],
            },
        ],
    })(e);
}
const Z1 = ({ status: e, talk: t }) => {
        const {
                Colors: n,
                showmapOnlyIncar: r,
                incar: i,
                jumped: l,
                useStress: o,
            } = U.useContext(Yn),
            u = n,
            s = document.querySelector(
                `${r || i ? ".progress-bars-incar" : ".progress-bars"}`
            ),
            [c, m] = U.useState({
                hunger: { ref: U.useRef(null), progress: null },
                thirst: { ref: U.useRef(null), progress: null },
                stress: { ref: U.useRef(null), progress: null },
                stamina: { ref: U.useRef(null), progress: null },
                mic: { ref: U.useRef(null), progress: null },
            }),
            p = (d, k) => {
                d = d.replace(/^#/, "");
                let j = parseInt(d.slice(0, 2), 16),
                    P = parseInt(d.slice(2, 4), 16),
                    D = parseInt(d.slice(4, 6), 16),
                    g = parseInt(d.slice(6, 8), 16) / 255;
                return (
                    (g = Math.min(Math.max(k, 0), 1)),
                    `#${Math.round(j)
                        .toString(16)
                        .padStart(2, "0")}${Math.round(P)
                        .toString(16)
                        .padStart(2, "0")}${Math.round(D)
                        .toString(16)
                        .padStart(2, "0")}${Math.round(g * 255)
                        .toString(16)
                        .padStart(2, "0")}`
                );
            };
        return (
            U.useEffect(() => {
                if (s === null || s.children.length < 5) return;
                const d = c;
                (d.hunger.progress = new rr.Circle(c.hunger.ref.current, {
                    strokeWidth: 7,
                    easing: "easeInOut",
                    duration: 250,
                    color: u.hunger,
                    trailColor: p(u.hunger, 0.25),
                    trailWidth: 7,
                    svgStyle: null,
                })),
                    d.hunger.progress.animate(0.5),
                    (d.thirst.progress = new rr.Circle(c.thirst.ref.current, {
                        strokeWidth: 7,
                        easing: "easeInOut",
                        duration: 250,
                        color: u.thirst,
                        trailColor: p(u.thirst, 0.25),
                        trailWidth: 7,
                        svgStyle: null,
                    })),
                    d.thirst.progress.animate(0.5),
                    (d.stress.progress = new rr.Circle(c.stress.ref.current, {
                        strokeWidth: 7,
                        easing: "easeInOut",
                        duration: 250,
                        color: u.stress,
                        trailColor: p(u.stress, 0.25),
                        trailWidth: 7,
                        svgStyle: null,
                    })),
                    d.stress.progress.animate(0.5),
                    (d.stamina.progress = new rr.Circle(c.stamina.ref.current, {
                        strokeWidth: 7,
                        easing: "easeInOut",
                        duration: 250,
                        color: u.stamina,
                        trailColor: p(u.stamina, 0.25),
                        trailWidth: 7,
                        svgStyle: null,
                    })),
                    d.stamina.progress.animate(0.5),
                    d.mic.progress == null
                        ? ((d.mic.progress = new rr.Circle(c.mic.ref.current, {
                              strokeWidth: 7,
                              easing: "easeInOut",
                              duration: 250,
                              color: u.mic,
                              trailColor: p(u.mic, 0.25),
                              trailWidth: 7,
                              svgStyle: null,
                          })),
                          d.mic.progress.animate(0.5))
                        : d.mic.progress != null &&
                          (d.mic.progress.destroy(),
                          (d.mic.progress = new rr.Circle(c.mic.ref.current, {
                              strokeWidth: 7,
                              easing: "easeInOut",
                              duration: 250,
                              color: u.mic,
                              trailColor: p(u.mic, 0.25),
                              trailWidth: 7,
                              svgStyle: null,
                          })),
                          d.mic.progress.animate(0.5)),
                    m(d);
            }, [s]),
            U.useEffect(() => {
                s !== null &&
                    (s.children.length < 5 ||
                        ((c.hunger.progress.path.style.stroke = u.hunger),
                        (c.hunger.progress.trail.style.stroke = p(
                            u.hunger,
                            0.25
                        )),
                        (c.thirst.progress.path.style.stroke = u.thirst),
                        (c.thirst.progress.trail.style.stroke = p(
                            u.thirst,
                            0.25
                        )),
                        o &&
                            ((c.stress.progress.path.style.stroke = u.stress),
                            (c.stress.progress.trail.style.stroke = p(
                                u.stress,
                                0.25
                            ))),
                        (c.stamina.progress.path.style.stroke = u.stamina),
                        (c.stamina.progress.trail.style.stroke = p(
                            u.stamina,
                            0.25
                        )),
                        (c.mic.progress.path.style.stroke = u.mic),
                        (c.mic.progress.trail.style.stroke = p(u.mic, 0.25))));
            }, [u, r, i, o, s]),
            U.useEffect(() => {
                s !== null &&
                    (s.children.length < 5 ||
                        (c.hunger.progress.animate(e.hunger / 100),
                        c.thirst.progress.animate(e.thirst / 100),
                        o && c.stress.progress.animate(e.stress / 100),
                        (!r || !i) &&
                            c.stamina.progress.animate(e.stamina / 100)));
            }, [e, r, i, o, s]),
            U.useEffect(() => {
                s !== null &&
                    (s.children.length < 5 ||
                        c.mic.progress.animate(t.distance / 100));
            }, [t, s]),
            r || i
                ? S.jsxs(S.Fragment, {
                      children: [
                          S.jsxs("div", {
                              className: "bars-incar",
                              children: [
                                  S.jsx("div", {
                                      className: "bi health",
                                      children: S.jsx("div", {
                                          className: "bi-inner",
                                          style: { width: `${e.health}%` },
                                      }),
                                  }),
                                  S.jsx("div", {
                                      className: "bi armour",
                                      children: S.jsx("div", {
                                          className: "bi-inner",
                                          style: { width: `${e.armour}%` },
                                      }),
                                  }),
                              ],
                          }),
                          S.jsxs("div", {
                              className: "progress-bars-incar",
                              children: [
                                  S.jsx("div", {
                                      className: "status-bar",
                                      ref: c.mic.ref,
                                      style: {
                                          boxShadow: `0 0 2vh ${p(
                                              u.mic,
                                              0.25
                                          )}`,
                                      },
                                      children: t.radio
                                          ? S.jsx(Pc, {
                                                id: "icon",
                                                color: u.mic,
                                                style: {
                                                    marginLeft: ".2vh",
                                                    filter: `drop-shadow(0 0 .5vh ${p(
                                                        u.mic,
                                                        0.25
                                                    )})`,
                                                },
                                            })
                                          : t.talking
                                          ? S.jsx(ps, {
                                                id: "icon",
                                                style: {
                                                    filter: `drop-shadow(0 0 .5vh ${p(
                                                        u.mic,
                                                        0.25
                                                    )})`,
                                                },
                                                color: u.mic,
                                            })
                                          : S.jsx(Oc, {
                                                id: "icon",
                                                style: {
                                                    filter: `drop-shadow(0 0 .5vh ${p(
                                                        u.mic,
                                                        0.25
                                                    )})`,
                                                },
                                                color: p(u.mic, 0.25),
                                            }),
                                  }),
                                  S.jsx("div", {
                                      className: "status-bar",
                                      ref: c.hunger.ref,
                                      style: {
                                          boxShadow: `0 0 2vh ${p(
                                              u.hunger,
                                              0.25
                                          )}`,
                                      },
                                      children: S.jsx(ds, {
                                          id: "icon",
                                          color: u.hunger,
                                          style: {
                                              filter: `drop-shadow(0 0 .5vh ${p(
                                                  u.hunger,
                                                  0.25
                                              )})`,
                                          },
                                      }),
                                  }),
                                  S.jsx("div", {
                                      className: "status-bar",
                                      ref: c.thirst.ref,
                                      style: {
                                          boxShadow: `0 0 2vh ${p(
                                              u.thirst,
                                              0.25
                                          )}`,
                                      },
                                      children: S.jsx(cs, {
                                          id: "icon",
                                          color: u.thirst,
                                          style: {
                                              filter: `drop-shadow(0 0 .5vh ${p(
                                                  u.thirst,
                                                  0.25
                                              )})`,
                                          },
                                      }),
                                  }),
                                  S.jsx("div", {
                                      className: "status-bar",
                                      ref: c.stress.ref,
                                      style: {
                                          display: o ? "flex" : "none",
                                          boxShadow: `0 0 2vh ${p(
                                              u.stress,
                                              0.25
                                          )}`,
                                      },
                                      children: S.jsx(fs, {
                                          id: "icon",
                                          color: u.stress,
                                          style: {
                                              filter: `drop-shadow(0 0 .5vh ${p(
                                                  u.stress,
                                                  0.25
                                              )})`,
                                          },
                                      }),
                                  }),
                                  S.jsx("div", {
                                      className: "status-bar",
                                      ref: c.stamina.ref,
                                      style: {
                                          display: "none",
                                          boxShadow: `0 0 2vh ${p(
                                              u.stamina,
                                              0.25
                                          )}`,
                                      },
                                      children: e.inwater
                                          ? S.jsx(Tc, { id: "icon" })
                                          : S.jsx(hs, { id: "icon" }),
                                  }),
                              ],
                          }),
                      ],
                  })
                : S.jsxs("div", {
                      className: `left-wrapper ${l ? "jump" : null}`,
                      children: [
                          S.jsxs("div", {
                              className: "bars",
                              children: [
                                  S.jsxs("div", {
                                      className: "bar health",
                                      children: [
                                          S.jsx(V1, { id: "icon" }),
                                          S.jsx("div", {
                                              className: "bar-inbar",
                                              children: S.jsx("div", {
                                                  className: "inner health",
                                                  style: {
                                                      width: `${e.health}%`,
                                                  },
                                              }),
                                          }),
                                      ],
                                  }),
                                  S.jsxs("div", {
                                      className: "bar armour",
                                      children: [
                                          S.jsx(X1, { id: "icon" }),
                                          S.jsx("div", {
                                              className: "bar-inbar",
                                              children: S.jsx("div", {
                                                  className: "inner armour",
                                                  style: {
                                                      width: `${e.armour}%`,
                                                  },
                                              }),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          S.jsxs("div", {
                              className: "progress-bars",
                              children: [
                                  S.jsx("div", {
                                      className: "status-bar",
                                      ref: c.mic.ref,
                                      style: {
                                          boxShadow: `0 0 2vh ${p(
                                              u.mic,
                                              0.25
                                          )}`,
                                      },
                                      children: t.radio
                                          ? S.jsx(Pc, {
                                                id: "icon",
                                                color: u.mic,
                                                style: {
                                                    marginLeft: ".2vh",
                                                    filter: `drop-shadow(0 0 .5vh ${p(
                                                        u.mic,
                                                        0.25
                                                    )})`,
                                                },
                                            })
                                          : t.talking
                                          ? S.jsx(ps, {
                                                id: "icon",
                                                style: {
                                                    filter: `drop-shadow(0 0 .5vh ${p(
                                                        u.mic,
                                                        0.25
                                                    )})`,
                                                },
                                                color: u.mic,
                                            })
                                          : S.jsx(Oc, {
                                                id: "icon",
                                                style: {
                                                    filter: `drop-shadow(0 0 .5vh ${p(
                                                        u.mic,
                                                        0.25
                                                    )})`,
                                                },
                                                color: p(u.mic, 0.25),
                                            }),
                                  }),
                                  S.jsx("div", {
                                      className: "status-bar",
                                      ref: c.hunger.ref,
                                      style: {
                                          boxShadow: `0 0 2vh ${p(
                                              u.hunger,
                                              0.25
                                          )}`,
                                      },
                                      children: S.jsx(ds, {
                                          id: "icon",
                                          color: u.hunger,
                                          style: {
                                              filter: `drop-shadow(0 0 .5vh ${p(
                                                  u.hunger,
                                                  0.25
                                              )})`,
                                          },
                                      }),
                                  }),
                                  S.jsx("div", {
                                      className: "status-bar",
                                      ref: c.thirst.ref,
                                      style: {
                                          boxShadow: `0 0 2vh ${p(
                                              u.thirst,
                                              0.25
                                          )}`,
                                      },
                                      children: S.jsx(cs, {
                                          id: "icon",
                                          color: u.thirst,
                                          style: {
                                              filter: `drop-shadow(0 0 .5vh ${p(
                                                  u.thirst,
                                                  0.25
                                              )})`,
                                          },
                                      }),
                                  }),
                                  S.jsx("div", {
                                      className: "status-bar",
                                      ref: c.stress.ref,
                                      style: {
                                          display: o ? "flex" : "none",
                                          boxShadow: `0 0 2vh ${p(
                                              u.stress,
                                              0.25
                                          )}`,
                                      },
                                      children: S.jsx(fs, {
                                          id: "icon",
                                          color: u.stress,
                                          style: {
                                              filter: `drop-shadow(0 0 .5vh ${p(
                                                  u.stress,
                                                  0.25
                                              )})`,
                                          },
                                      }),
                                  }),
                                  S.jsx("div", {
                                      className: "status-bar",
                                      ref: c.stamina.ref,
                                      style: {
                                          boxShadow: `0 0 2vh ${p(
                                              u.stamina,
                                              0.25
                                          )}`,
                                      },
                                      children: e.inwater
                                          ? S.jsx(Tc, { id: "icon" })
                                          : S.jsx(hs, { id: "icon" }),
                                  }),
                              ],
                          }),
                      ],
                  })
        );
    },
    J1 = () => {
        const {
                incar: e,
                setIncar: t,
                carHudType: n,
                settingsMenu: r,
                setPlayerID: i,
                setJumped: l,
                setClockType: o,
                setUseStress: u,
                setShowmapOnlyIncar: s,
                cinematic: c,
                setSettingsMenu: m,
                setSpeedtype: p,
                setCinematic: d,
                setDateFormat: k,
                setShowmoney: j,
            } = U.useContext(Yn),
            [P, D] = U.useState(!1),
            [g, h] = U.useState({
                health: 0,
                armour: 0,
                hunger: 0,
                thirst: 0,
                stress: 0,
                stamina: 0,
                inwater: !1,
            }),
            [v, C] = U.useState({ radio: !1, talking: !1, distance: 0 }),
            [T, z] = U.useState({
                speed: 40,
                fuel: 0,
                gear: 0,
                rpm: 0,
                maxgear: 0,
                belt: !1,
                door: !1,
                light: !1,
                engine: !1,
                handbrake: !1,
            }),
            [M, I] = U.useState({ bank: 0, cash: 0 }),
            [Z, W] = U.useState("Unemployed");
        return (
            U.useEffect(() => {
                const de = (H) => {
                    switch (H.data.type) {
                        case "PLAYER_LOADED":
                            D(!0), i(H.data.playerId);
                            break;
                        case "DEFAULT_VERIABLES":
                            o(H.data.clock),
                                u(H.data.useStress),
                                s(!H.data.showOnlyInCar),
                                p(H.data.speedtype),
                                k(H.data.dateFormat),
                                j(H.data.showmoney);
                            break;
                        case "UPDATE_MIC_DISTANCE":
                            C((ze) => ({ ...ze, distance: H.data.distance }));
                            break;
                        case "SETTINGS_MENU":
                            m(H.data.state);
                            break;
                        case "HIDE_BODY":
                            D(H.data.state);
                            break;
                        case "PLAYER_INCAR":
                            t(!0);
                            break;
                        case "PLAYER_OUTCAR":
                            t(!1);
                            break;
                        case "PAUSEMENU_STATE":
                            D(!H.data.state);
                            break;
                        case "UPDATE_MIC":
                            C((ze) => ({
                                ...ze,
                                radio: H.data.radio,
                                talking: H.data.state,
                            }));
                            break;
                        case "UPDATE_STATUS":
                            h({
                                health: H.data.health,
                                armour: H.data.armour,
                                hunger: H.data.hunger,
                                thirst: H.data.thirst,
                                stress: H.data.stress,
                                stamina: H.data.stamina,
                                inwater: H.data.inwater,
                            });
                            break;
                        case "PLAYER_JUMPED":
                            l(!0),
                                setTimeout(() => {
                                    l(!1);
                                }, 1e3);
                            break;
                        case "CINEMATIC_MODE":
                            d(H.data.state);
                            break;
                        case "VEHICLE_STATUS":
                            z({
                                speed: H.data.speed,
                                fuel: H.data.fuel,
                                gear: H.data.gear,
                                rpm: H.data.rpm,
                                maxgear: H.data.maxgear,
                                belt: H.data.seatbelt,
                                door: H.data.door,
                                light: H.data.light,
                                engine: H.data.engine,
                                handbrake: H.data.handbrake,
                            });
                            break;
                        case "UPDATE_CASH":
                            I((ze) => ({ ...ze, cash: H.data.cash }));
                            break;
                        case "UPDATE_BANK":
                            I((ze) => ({ ...ze, bank: H.data.bank }));
                            break;
                        case "UPDATE_JOB":
                            W(H.data.job);
                            break;
                    }
                };
                return (
                    window.addEventListener("message", de),
                    () => {
                        window.removeEventListener("message", de);
                    }
                );
            }, []),
            U.useEffect(() => {
                const de = (H) => {
                    H.key == "Escape" && as("closeSettings", {}, () => {});
                };
                return (
                    window.addEventListener("keydown", de),
                    () => {
                        window.removeEventListener("keydown", de);
                    }
                );
            }, []),
            U.useEffect(() => {
                as("ready", {}, () => {});
            }, []),
            c
                ? S.jsxs(S.Fragment, {
                      children: [
                          S.jsx("div", { className: "cinematic-top" }),
                          S.jsx("div", { className: "cinematic-bottom" }),
                      ],
                  })
                : S.jsxs("div", {
                      className: "app",
                      "data-hide": !P,
                      children: [
                          S.jsx(U1, { money: M, job: Z }),
                          r && S.jsx(Q1, {}),
                          S.jsx(Z1, { status: g, talk: v }),
                          e &&
                              (n === "easy"
                                  ? S.jsx(K1, { ...T })
                                  : S.jsx(Y1, { ...T })),
                      ],
                  })
        );
    };
vu.createRoot(document.getElementById("root")).render(
    S.jsx(j1, { children: S.jsx(J1, {}) })
);
