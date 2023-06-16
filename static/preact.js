// preact
const {Component, Fragment, cloneElement, createContext, createElement, createRef, h, hydrate, isValidElement, options, render, toChildArray} = (function() {
	var n,l,u,i,t,o,r,f = {},e = [],c = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function s(n, l) {for (var u in l) n[u] = l[u];return n;}function a(n) {var l = n.parentNode;l && l.removeChild(n);}function h(l, u, i) {var t,o,r,f = {};for (r in u) "key" == r ? t = u[r] : "ref" == r ? o = u[r] : f[r] = u[r];if (arguments.length > 2 && (f.children = arguments.length > 3 ? n.call(arguments, 2) : i), "function" == typeof l && null != l.defaultProps) for (r in l.defaultProps) void 0 === f[r] && (f[r] = l.defaultProps[r]);return v(l, f, t, o, null);}function v(n, i, t, o, r) {var f = { type: n, props: i, key: t, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == r ? ++u : r };return null == r && null != l.vnode && l.vnode(f), f;}function y() {return { current: null };}function p(n) {return n.children;}function d(n, l) {this.props = n, this.context = l;}function _(n, l) {if (null == l) return n.__ ? _(n.__, n.__.__k.indexOf(n) + 1) : null;for (var u; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) return u.__e;return "function" == typeof n.type ? _(n) : null;}function k(n) {var l, u;if (null != (n = n.__) && null != n.__c) {for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) {n.__e = n.__c.base = u.__e;break;}return k(n);}}function b(n) {(!n.__d && (n.__d = !0) && t.push(n) && !g.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || setTimeout)(g);}function g() {for (var n; g.__r = t.length;) n = t.sort(function (n, l) {return n.__v.__b - l.__v.__b;}), t = [], n.some(function (n) {var l, u, i, t, o, r;n.__d && (o = (t = (l = n).__v).__e, (r = l.__P) && (u = [], (i = s({}, t)).__v = t.__v + 1, j(r, t, i, l.__n, void 0 !== r.ownerSVGElement, null != t.__h ? [o] : null, u, null == o ? _(t) : o, t.__h), z(u, t), t.__e != o && k(t)));});}function w(n, l, u, i, t, o, r, c, s, a) {var h,y,d,k,b,g,w,x = i && i.__k || e,C = x.length;for (u.__k = [], h = 0; h < l.length; h++) if (null != (k = u.__k[h] = null == (k = l[h]) || "boolean" == typeof k ? null : "string" == typeof k || "number" == typeof k || "bigint" == typeof k ? v(null, k, null, null, k) : Array.isArray(k) ? v(p, { children: k }, null, null, null) : k.__b > 0 ? v(k.type, k.props, k.key, k.ref ? k.ref : null, k.__v) : k)) {if (k.__ = u, k.__b = u.__b + 1, null === (d = x[h]) || d && k.key == d.key && k.type === d.type) x[h] = void 0;else for (y = 0; y < C; y++) {if ((d = x[y]) && k.key == d.key && k.type === d.type) {x[y] = void 0;break;}d = null;}j(n, k, d = d || f, t, o, r, c, s, a), b = k.__e, (y = k.ref) && d.ref != y && (w || (w = []), d.ref && w.push(d.ref, null, k), w.push(y, k.__c || b, k)), null != b ? (null == g && (g = b), "function" == typeof k.type && k.__k === d.__k ? k.__d = s = m(k, s, n) : s = A(n, k, d, x, b, s), "function" == typeof u.type && (u.__d = s)) : s && d.__e == s && s.parentNode != n && (s = _(d));}for (u.__e = g, h = C; h--;) null != x[h] && N(x[h], x[h]);if (w) for (h = 0; h < w.length; h++) M(w[h], w[++h], w[++h]);}function m(n, l, u) {for (var i, t = n.__k, o = 0; t && o < t.length; o++) (i = t[o]) && (i.__ = n, l = "function" == typeof i.type ? m(i, l, u) : A(u, i, i, t, i.__e, l));return l;}function x(n, l) {return l = l || [], null == n || "boolean" == typeof n || (Array.isArray(n) ? n.some(function (n) {x(n, l);}) : l.push(n)), l;}function A(n, l, u, i, t, o) {var r, f, e;if (void 0 !== l.__d) r = l.__d, l.__d = void 0;else if (null == u || t != o || null == t.parentNode) n: if (null == o || o.parentNode !== n) n.appendChild(t), r = null;else {for (f = o, e = 0; (f = f.nextSibling) && e < i.length; e += 2) if (f == t) break n;n.insertBefore(t, o), r = o;}return void 0 !== r ? r : t.nextSibling;}function C(n, l, u, i, t) {var o;for (o in u) "children" === o || "key" === o || o in l || H(n, o, null, u[o], i);for (o in l) t && "function" != typeof l[o] || "children" === o || "key" === o || "value" === o || "checked" === o || u[o] === l[o] || H(n, o, l[o], u[o], i);}function $(n, l, u) {"-" === l[0] ? n.setProperty(l, u) : n[l] = null == u ? "" : "number" != typeof u || c.test(l) ? u : u + "px";}function H(n, l, u, i, t) {var o;n: if ("style" === l) {if ("string" == typeof u) n.style.cssText = u;else {if ("string" == typeof i && (n.style.cssText = i = ""), i) for (l in i) u && l in u || $(n.style, l, "");if (u) for (l in u) i && u[l] === i[l] || $(n.style, l, u[l]);}} else if ("o" === l[0] && "n" === l[1]) o = l !== (l = l.replace(/Capture$/, "")), l = l.toLowerCase() in n ? l.toLowerCase().slice(2) : l.slice(2), n.l || (n.l = {}), n.l[l + o] = u, u ? i || n.addEventListener(l, o ? T : I, o) : n.removeEventListener(l, o ? T : I, o);else if ("dangerouslySetInnerHTML" !== l) {if (t) l = l.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");else if ("href" !== l && "list" !== l && "form" !== l && "tabIndex" !== l && "download" !== l && l in n) try {n[l] = null == u ? "" : u;break n;} catch (n) {}"function" == typeof u || (null == u || !1 === u && -1 == l.indexOf("-") ? n.removeAttribute(l) : n.setAttribute(l, u));}}function I(n) {this.l[n.type + !1](l.event ? l.event(n) : n);}function T(n) {this.l[n.type + !0](l.event ? l.event(n) : n);}function j(n, u, i, t, o, r, f, e, c) {var a,h,v,y,_,k,b,g,m,x,A,C,$,H,I,T = u.type;if (void 0 !== u.constructor) return null;null != i.__h && (c = i.__h, e = u.__e = i.__e, u.__h = null, r = [e]), (a = l.__b) && a(u);try {n: if ("function" == typeof T) {if (g = u.props, m = (a = T.contextType) && t[a.__c], x = a ? m ? m.props.value : a.__ : t, i.__c ? b = (h = u.__c = i.__c).__ = h.__E : ("prototype" in T && T.prototype.render ? u.__c = h = new T(g, x) : (u.__c = h = new d(g, x), h.constructor = T, h.render = O), m && m.sub(h), h.props = g, h.state || (h.state = {}), h.context = x, h.__n = t, v = h.__d = !0, h.__h = [], h._sb = []), null == h.__s && (h.__s = h.state), null != T.getDerivedStateFromProps && (h.__s == h.state && (h.__s = s({}, h.__s)), s(h.__s, T.getDerivedStateFromProps(g, h.__s))), y = h.props, _ = h.state, v) null == T.getDerivedStateFromProps && null != h.componentWillMount && h.componentWillMount(), null != h.componentDidMount && h.__h.push(h.componentDidMount);else {if (null == T.getDerivedStateFromProps && g !== y && null != h.componentWillReceiveProps && h.componentWillReceiveProps(g, x), !h.__e && null != h.shouldComponentUpdate && !1 === h.shouldComponentUpdate(g, h.__s, x) || u.__v === i.__v) {for (h.props = g, h.state = h.__s, u.__v !== i.__v && (h.__d = !1), h.__v = u, u.__e = i.__e, u.__k = i.__k, u.__k.forEach(function (n) {n && (n.__ = u);}), A = 0; A < h._sb.length; A++) h.__h.push(h._sb[A]);h._sb = [], h.__h.length && f.push(h);break n;}null != h.componentWillUpdate && h.componentWillUpdate(g, h.__s, x), null != h.componentDidUpdate && h.__h.push(function () {h.componentDidUpdate(y, _, k);});}if (h.context = x, h.props = g, h.__v = u, h.__P = n, C = l.__r, $ = 0, "prototype" in T && T.prototype.render) {for (h.state = h.__s, h.__d = !1, C && C(u), a = h.render(h.props, h.state, h.context), H = 0; H < h._sb.length; H++) h.__h.push(h._sb[H]);h._sb = [];} else do {h.__d = !1, C && C(u), a = h.render(h.props, h.state, h.context), h.state = h.__s;} while (h.__d && ++$ < 25);h.state = h.__s, null != h.getChildContext && (t = s(s({}, t), h.getChildContext())), v || null == h.getSnapshotBeforeUpdate || (k = h.getSnapshotBeforeUpdate(y, _)), I = null != a && a.type === p && null == a.key ? a.props.children : a, w(n, Array.isArray(I) ? I : [I], u, i, t, o, r, f, e, c), h.base = u.__e, u.__h = null, h.__h.length && f.push(h), b && (h.__E = h.__ = null), h.__e = !1;} else null == r && u.__v === i.__v ? (u.__k = i.__k, u.__e = i.__e) : u.__e = L(i.__e, u, i, t, o, r, f, c);(a = l.diffed) && a(u);} catch (n) {u.__v = null, (c || null != r) && (u.__e = e, u.__h = !!c, r[r.indexOf(e)] = null), l.__e(n, u, i);}}function z(n, u) {l.__c && l.__c(u, n), n.some(function (u) {try {n = u.__h, u.__h = [], n.some(function (n) {n.call(u);});} catch (n) {l.__e(n, u.__v);}});}function L(l, u, i, t, o, r, e, c) {var s,h,v,y = i.props,p = u.props,d = u.type,k = 0;if ("svg" === d && (o = !0), null != r) for (; k < r.length; k++) if ((s = r[k]) && "setAttribute" in s == !!d && (d ? s.localName === d : 3 === s.nodeType)) {l = s, r[k] = null;break;}if (null == l) {if (null === d) return document.createTextNode(p);l = o ? document.createElementNS("http://www.w3.org/2000/svg", d) : document.createElement(d, p.is && p), r = null, c = !1;}if (null === d) y === p || c && l.data === p || (l.data = p);else {if (r = r && n.call(l.childNodes), h = (y = i.props || f).dangerouslySetInnerHTML, v = p.dangerouslySetInnerHTML, !c) {if (null != r) for (y = {}, k = 0; k < l.attributes.length; k++) y[l.attributes[k].name] = l.attributes[k].value;(v || h) && (v && (h && v.__html == h.__html || v.__html === l.innerHTML) || (l.innerHTML = v && v.__html || ""));}if (C(l, p, y, o, c), v) u.__k = [];else if (k = u.props.children, w(l, Array.isArray(k) ? k : [k], u, i, t, o && "foreignObject" !== d, r, e, r ? r[0] : i.__k && _(i, 0), c), null != r) for (k = r.length; k--;) null != r[k] && a(r[k]);c || ("value" in p && void 0 !== (k = p.value) && (k !== l.value || "progress" === d && !k || "option" === d && k !== y.value) && H(l, "value", k, y.value, !1), "checked" in p && void 0 !== (k = p.checked) && k !== l.checked && H(l, "checked", k, y.checked, !1));}return l;}function M(n, u, i) {try {"function" == typeof n ? n(u) : n.current = u;} catch (n) {l.__e(n, i);}}function N(n, u, i) {var t, o;if (l.unmount && l.unmount(n), (t = n.ref) && (t.current && t.current !== n.__e || M(t, null, u)), null != (t = n.__c)) {if (t.componentWillUnmount) try {t.componentWillUnmount();} catch (n) {l.__e(n, u);}t.base = t.__P = null, n.__c = void 0;}if (t = n.__k) for (o = 0; o < t.length; o++) t[o] && N(t[o], u, i || "function" != typeof n.type);i || null == n.__e || a(n.__e), n.__ = n.__e = n.__d = void 0;}function O(n, l, u) {return this.constructor(n, u);}function P(u, i, t) {var o, r, e;l.__ && l.__(u, i), r = (o = "function" == typeof t) ? null : t && t.__k || i.__k, e = [], j(i, u = (!o && t || i).__k = h(p, null, [u]), r || f, f, void 0 !== i.ownerSVGElement, !o && t ? [t] : r ? null : i.firstChild ? n.call(i.childNodes) : null, e, !o && t ? t : r ? r.__e : i.firstChild, o), z(e, u);}function S(n, l) {P(n, l, S);}function q(l, u, i) {var t,o,r,f = s({}, l.props);for (r in u) "key" == r ? t = u[r] : "ref" == r ? o = u[r] : f[r] = u[r];return arguments.length > 2 && (f.children = arguments.length > 3 ? n.call(arguments, 2) : i), v(l.type, f, t || l.key, o || l.ref, null);}function B(n, l) {var u = { __c: l = "__cC" + r++, __: n, Consumer: function (n, l) {return n.children(l);}, Provider: function (n) {var u, i;return this.getChildContext || (u = [], (i = {})[l] = this, this.getChildContext = function () {return i;}, this.shouldComponentUpdate = function (n) {this.props.value !== n.value && u.some(b);}, this.sub = function (n) {u.push(n);var l = n.componentWillUnmount;n.componentWillUnmount = function () {u.splice(u.indexOf(n), 1), l && l.call(n);};}), n.children;} };return u.Provider.__ = u.Consumer.contextType = u;}n = e.slice, l = { __e: function (n, l, u, i) {for (var t, o, r; l = l.__;) if ((t = l.__c) && !t.__) try {if ((o = t.constructor) && null != o.getDerivedStateFromError && (t.setState(o.getDerivedStateFromError(n)), r = t.__d), null != t.componentDidCatch && (t.componentDidCatch(n, i || {}), r = t.__d), r) return t.__E = t;} catch (l) {n = l;}throw n;} }, u = 0, i = function (n) {return null != n && void 0 === n.constructor;}, d.prototype.setState = function (n, l) {var u;u = null != this.__s && this.__s !== this.state ? this.__s : this.__s = s({}, this.state), "function" == typeof n && (n = n(s({}, u), this.props)), n && s(u, n), null != n && this.__v && (l && this._sb.push(l), b(this));}, d.prototype.forceUpdate = function (n) {this.__v && (this.__e = !0, n && this.__h.push(n), b(this));}, d.prototype.render = p, t = [], g.__r = 0, r = 0;
	return { Component: d, Fragment: p, cloneElement: q, createContext: B, createElement: h, createRef: y, h, hydrate: S, isValidElement: i, options: l, render: P, toChildArray: x };
})();
export { Component, Fragment, cloneElement, createContext, createElement, createRef, h, hydrate, isValidElement, options, render, toChildArray };

// htm
const htm = (function() {
	var n = function (t, s, r, e) {var u;s[0] = 0;for (var h = 1; h < s.length; h++) {var p = s[h++],a = s[h] ? (s[0] |= p ? 1 : 2, r[s[h++]]) : s[++h];3 === p ? e[0] = a : 4 === p ? e[1] = Object.assign(e[1] || {}, a) : 5 === p ? (e[1] = e[1] || {})[s[++h]] = a : 6 === p ? e[1][s[++h]] += a + "" : p ? (u = t.apply(a, n(t, a, r, ["", null])), e.push(u), a[0] ? s[0] |= 2 : (s[h - 2] = 0, s[h] = u)) : e.push(a);}return e;},t = new Map();
	return function (s) {var r = t.get(this);return r || (r = new Map(), t.set(this, r)), (r = n(this, r.get(s) || (r.set(s, r = function (n) {for (var t, s, r = 1, e = "", u = "", h = [0], p = function (n) {1 === r && (n || (e = e.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? h.push(0, n, e) : 3 === r && (n || e) ? (h.push(3, n, e), r = 2) : 2 === r && "..." === e && n ? h.push(4, n, 0) : 2 === r && e && !n ? h.push(5, 0, !0, e) : r >= 5 && ((e || !n && 5 === r) && (h.push(r, 0, e, s), r = 6), n && (h.push(r, n, 0, s), r = 6)), e = "";}, a = 0; a < n.length; a++) {a && (1 === r && p(), p(a));for (var l = 0; l < n[a].length; l++) t = n[a][l], 1 === r ? "<" === t ? (p(), h = [h], r = 3) : e += t : 4 === r ? "--" === e && ">" === t ? (r = 1, e = "") : e = t + e[0] : u ? t === u ? u = "" : e += t : '"' === t || "'" === t ? u = t : ">" === t ? (p(), r = 1) : r && ("=" === t ? (r = 5, s = e, e = "") : "/" === t && (r < 5 || ">" === n[a][l + 1]) ? (p(), 3 === r && (h = h[0]), r = h, (h = h[0]).push(2, 0, r), r = 0) : " " === t || "\t" === t || "\n" === t || "\r" === t ? (p(), r = 2) : e += t), 3 === r && "!--" === e && (r = 4, h = h[0]);}return p(), h;}(s)), r), arguments, [])).length > 1 ? r : r[0];}
})();
export {htm};

// hooks
const { useCallback, useContext, useDebugValue, useEffect, useErrorBoundary, useId, useImperativeHandle, useLayoutEffect, useMemo, useReducer, useRef, useState } = (function() {
	var n = options;
	var t,r,u,i,o = 0,f = [],c = [],e = n.__b,a = n.__r,v = n.diffed,l = n.__c,m = n.unmount;function d(t, u) {n.__h && n.__h(r, t, o || u), o = 0;var i = r.__H || (r.__H = { __: [], __h: [] });return t >= i.__.length && i.__.push({ __V: c }), i.__[t];}function p(n) {return o = 1, y(B, n);}function y(n, u, i) {var o = d(t++, 2);if (o.t = n, !o.__c && (o.__ = [i ? i(u) : B(void 0, u), function (n) {var t = o.__N ? o.__N[0] : o.__[0],r = o.t(t, n);t !== r && (o.__N = [r, o.__[1]], o.__c.setState({}));}], o.__c = r, !r.u)) {r.u = !0;var f = r.shouldComponentUpdate;r.shouldComponentUpdate = function (n, t, r) {if (!o.__c.__H) return !0;var u = o.__c.__H.__.filter(function (n) {return n.__c;});if (u.every(function (n) {return !n.__N;})) return !f || f.call(this, n, t, r);var i = !1;return u.forEach(function (n) {if (n.__N) {var t = n.__[0];n.__ = n.__N, n.__N = void 0, t !== n.__[0] && (i = !0);}}), !(!i && o.__c.props === n) && (!f || f.call(this, n, t, r));};}return o.__N || o.__;}function h(u, i) {var o = d(t++, 3);!n.__s && z(o.__H, i) && (o.__ = u, o.i = i, r.__H.__h.push(o));}function s(u, i) {var o = d(t++, 4);!n.__s && z(o.__H, i) && (o.__ = u, o.i = i, r.__h.push(o));}function _(n) {return o = 5, F(function () {return { current: n };}, []);}function A(n, t, r) {o = 6, s(function () {return "function" == typeof n ? (n(t()), function () {return n(null);}) : n ? (n.current = t(), function () {return n.current = null;}) : void 0;}, null == r ? r : r.concat(n));}function F(n, r) {var u = d(t++, 7);return z(u.__H, r) ? (u.__V = n(), u.i = r, u.__h = n, u.__V) : u.__;}function T(n, t) {return o = 8, F(function () {return n;}, t);}function q(n) {var u = r.context[n.__c],i = d(t++, 9);return i.c = n, u ? (null == i.__ && (i.__ = !0, u.sub(r)), u.props.value) : n.__;}function x(t, r) {n.useDebugValue && n.useDebugValue(r ? r(t) : t);}function P(n) {var u = d(t++, 10),i = p();return u.__ = n, r.componentDidCatch || (r.componentDidCatch = function (n, t) {u.__ && u.__(n, t), i[1](n);}), [i[0], function () {i[1](void 0);}];}function V() {var n = d(t++, 11);return n.__ || (n.__ = "P" + function (n) {for (var t = 0, r = n.length; r > 0;) t = (t << 5) - t + n.charCodeAt(--r) | 0;return t;}(r.__v.__m) + t), n.__;}function b() {for (var t; t = f.shift();) if (t.__P && t.__H) try {t.__H.__h.forEach(k), t.__H.__h.forEach(w), t.__H.__h = [];} catch (r) {t.__H.__h = [], n.__e(r, t.__v);}}n.__b = function (n) {"function" != typeof n.type || n.__m || null === n.__ ? n.__m || (n.__m = n.__ && n.__.__m ? n.__.__m : "") : n.__m = (n.__ && n.__.__m ? n.__.__m : "") + (n.__ && n.__.__k ? n.__.__k.indexOf(n) : 0), r = null, e && e(n);}, n.__r = function (n) {a && a(n), t = 0;var i = (r = n.__c).__H;i && (u === r ? (i.__h = [], r.__h = [], i.__.forEach(function (n) {n.__N && (n.__ = n.__N), n.__V = c, n.__N = n.i = void 0;})) : (i.__h.forEach(k), i.__h.forEach(w), i.__h = [])), u = r;}, n.diffed = function (t) {v && v(t);var o = t.__c;o && o.__H && (o.__H.__h.length && (1 !== f.push(o) && i === n.requestAnimationFrame || ((i = n.requestAnimationFrame) || j)(b)), o.__H.__.forEach(function (n) {n.i && (n.__H = n.i), n.__V !== c && (n.__ = n.__V), n.i = void 0, n.__V = c;})), u = r = null;}, n.__c = function (t, r) {r.some(function (t) {try {t.__h.forEach(k), t.__h = t.__h.filter(function (n) {return !n.__ || w(n);});} catch (u) {r.some(function (n) {n.__h && (n.__h = []);}), r = [], n.__e(u, t.__v);}}), l && l(t, r);}, n.unmount = function (t) {m && m(t);var r,u = t.__c;u && u.__H && (u.__H.__.forEach(function (n) {try {k(n);} catch (n) {r = n;}}), u.__H = void 0, r && n.__e(r, u.__v));};var g = "function" == typeof requestAnimationFrame;function j(n) {var t,r = function () {clearTimeout(u), g && cancelAnimationFrame(t), setTimeout(n);},u = setTimeout(r, 100);g && (t = requestAnimationFrame(r));}function k(n) {var t = r,u = n.__c;"function" == typeof u && (n.__c = void 0, u()), r = t;}function w(n) {var t = r;n.__c = n.__(), r = t;}function z(n, t) {return !n || n.length !== t.length || t.some(function (t, r) {return t !== n[r];});}function B(n, t) {return "function" == typeof t ? t(n) : t;}
	return { useCallback: T, useContext: q, useDebugValue: x, useEffect: h, useErrorBoundary: P, useId: V, useImperativeHandle: A, useLayoutEffect: s, useMemo: F, useReducer: y, useRef: _, useState: p };
})();
export {useCallback, useContext, useDebugValue, useEffect, useErrorBoundary, useId, useImperativeHandle, useLayoutEffect, useMemo, useReducer, useRef, useState};

// signals-core
const {Signal, batch, computed, effect, signal} = (function() {
	function i(){throw new Error("Cycle detected")}function t(){if(!(n>1)){var i,t=!1;while(void 0!==r){var h=r;r=void 0;s++;while(void 0!==h){var o=h.o;h.o=void 0;h.f&=-3;if(!(8&h.f)&&d(h))try{h.c()}catch(h){if(!t){i=h;t=!0}}h=o}}s=0;n--;if(t)throw i}else n--}function h(i){if(n>0)return i();n++;try{return i()}finally{t()}}var o=void 0,r=void 0,n=0,s=0,f=0;function v(i){if(void 0!==o){var t=i.n;if(void 0===t||t.t!==o){o.s=t={i:0,S:i,p:void 0,n:o.s,t:o,e:void 0,x:void 0,r:t};i.n=t;if(32&o.f)i.S(t);return t}else if(-1===t.i){t.i=0;if(void 0!==t.p){t.p.n=t.n;if(void 0!==t.n)t.n.p=t.p;t.p=void 0;t.n=o.s;o.s.p=t;o.s=t}return t}}}function e(i){this.v=i;this.i=0;this.n=void 0;this.t=void 0}e.prototype.h=function(){return!0};e.prototype.S=function(i){if(this.t!==i&&void 0===i.e){i.x=this.t;if(void 0!==this.t)this.t.e=i;this.t=i}};e.prototype.U=function(i){var t=i.e,h=i.x;if(void 0!==t){t.x=h;i.e=void 0}if(void 0!==h){h.e=t;i.x=void 0}if(i===this.t)this.t=h};e.prototype.subscribe=function(i){var t=this;return b(function(){var h=t.value,o=32&this.f;this.f&=-33;try{i(h)}finally{this.f|=o}})};e.prototype.valueOf=function(){return this.value};e.prototype.toString=function(){return this.value+""};e.prototype.peek=function(){return this.v};Object.defineProperty(e.prototype,"value",{get:function(){var i=v(this);if(void 0!==i)i.i=this.i;return this.v},set:function(h){if(h!==this.v){if(s>100)i();this.v=h;this.i++;f++;n++;try{for(var o=this.t;void 0!==o;o=o.x)o.t.N()}finally{t()}}}});function u(i){return new e(i)}function d(i){for(var t=i.s;void 0!==t;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function c(i){for(var t=i.s;void 0!==t;t=t.n){var h=t.S.n;if(void 0!==h)t.r=h;t.S.n=t;t.i=-1}}function a(i){var t=i.s,h=void 0;while(void 0!==t){var o=t.n;if(-1===t.i){t.S.U(t);t.n=void 0}else{if(void 0!==h)h.p=t;t.p=void 0;t.n=h;h=t}t.S.n=t.r;if(void 0!==t.r)t.r=void 0;t=o}i.s=h}function l(i){e.call(this,void 0);this.x=i;this.s=void 0;this.g=f-1;this.f=4}(l.prototype=new e).h=function(){this.f&=-3;if(1&this.f)return!1;if(32==(36&this.f))return!0;this.f&=-5;if(this.g===f)return!0;this.g=f;this.f|=1;if(this.i>0&&!d(this)){this.f&=-2;return!0}var i=o;try{c(this);o=this;var t=this.x();if(16&this.f||this.v!==t||0===this.i){this.v=t;this.f&=-17;this.i++}}catch(i){this.v=i;this.f|=16;this.i++}o=i;a(this);this.f&=-2;return!0};l.prototype.S=function(i){if(void 0===this.t){this.f|=36;for(var t=this.s;void 0!==t;t=t.n)t.S.S(t)}e.prototype.S.call(this,i)};l.prototype.U=function(i){e.prototype.U.call(this,i);if(void 0===this.t){this.f&=-33;for(var t=this.s;void 0!==t;t=t.n)t.S.U(t)}};l.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var i=this.t;void 0!==i;i=i.x)i.t.N()}};l.prototype.peek=function(){if(!this.h())i();if(16&this.f)throw this.v;return this.v};Object.defineProperty(l.prototype,"value",{get:function(){if(1&this.f)i();var t=v(this);this.h();if(void 0!==t)t.i=this.i;if(16&this.f)throw this.v;return this.v}});function w(i){return new l(i)}function y(i){var h=i.u;i.u=void 0;if("function"==typeof h){n++;var r=o;o=void 0;try{h()}catch(t){i.f&=-2;i.f|=8;_(i);throw t}finally{o=r;t()}}}function _(i){for(var t=i.s;void 0!==t;t=t.n)t.S.U(t);i.x=void 0;i.s=void 0;y(i)}function g(i){if(o!==this)throw new Error("Out-of-order effect");a(this);o=i;this.f&=-2;if(8&this.f)_(this);t()}function p(i){this.x=i;this.u=void 0;this.s=void 0;this.o=void 0;this.f=32}p.prototype.c=function(){var i=this.S();try{if(!(8&this.f)&&void 0!==this.x)this.u=this.x()}finally{i()}};p.prototype.S=function(){if(1&this.f)i();this.f|=1;this.f&=-9;y(this);c(this);n++;var t=o;o=this;return g.bind(this,t)};p.prototype.N=function(){if(!(2&this.f)){this.f|=2;this.o=r;r=this}};p.prototype.d=function(){this.f|=8;if(!(1&this.f))_(this)};function b(i){var t=new p(i);t.c();return t.d.bind(t)}
	return {Signal: e, batch: h, computed: w, effect: b, signal: u};
})();
export {Signal, batch, computed, effect, signal};

// signals
const {useComputed, useSignal, useSignalEffect} = (function() {
	var n = Component, i = options, r = useMemo, t = useRef, f = useEffect, o = Signal, e = computed, u = signal, a = effect;
	var c,v;function s(n,r){i[n]=r.bind(null,i[n]||function(){})}function l(n){if(v)v();v=n&&n.S()}function p(n){var i=this,t=n.data,f=useSignal(t);f.value=t;var o=r(function(){var n=i.__v;while(n=n.__)if(n.__c){n.__c.__$f|=4;break}i.__$u.c=function(){i.base.data=o.peek()};return e(function(){var n=f.value.value;return 0===n?0:!0===n?"":n||""})},[]);return o.value}p.displayName="_st";Object.defineProperties(o.prototype,{constructor:{configurable:!0},type:{configurable:!0,value:p},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});s("__b",function(n,i){if("string"==typeof i.type){var r,t=i.props;for(var f in t)if("children"!==f){var e=t[f];if(e instanceof o){if(!r)i.__np=r={};r[f]=e;t[f]=e.peek()}}}n(i)});s("__r",function(n,i){l();var r,t=i.__c;if(t){t.__$f&=-2;if(void 0===(r=t.__$u))t.__$u=r=function(n){var i;a(function(){i=this});i.c=function(){t.__$f|=1;t.setState({})};return i}()}c=t;l(r);n(i)});s("__e",function(n,i,r,t){l();c=void 0;n(i,r,t)});s("diffed",function(n,i){l();c=void 0;var r;if("string"==typeof i.type&&(r=i.__e)){var t=i.__np,f=i.props;if(t){var o=r.U;if(o)for(var e in o){var u=o[e];if(void 0!==u&&!(e in t)){u.d();o[e]=void 0}}else r.U=o={};for(var a in t){var v=o[a],s=t[a];if(void 0===v){v=d(r,a,s,f);o[a]=v}else v.o(s,f)}}}n(i)});function d(n,i,r,t){var f=i in n&&void 0===n.ownerSVGElement,o=u(r);return{o:function(n,i){o.value=n;t=i},d:a(function(){var r=o.value.value;if(t[i]!==r){t[i]=r;if(f)n[i]=r;else if(r)n.setAttribute(i,r);else n.removeAttribute(i)}})}}s("unmount",function(n,i){if("string"==typeof i.type){var r=i.__e;if(r){var t=r.U;if(t){r.U=void 0;for(var f in t){var o=t[f];if(o)o.d()}}}}else{var e=i.__c;if(e){var u=e.__$u;if(u){e.__$u=void 0;u.d()}}}n(i)});s("__h",function(n,i,r,t){if(t<3)i.__$f|=2;n(i,r,t)});n.prototype.shouldComponentUpdate=function(n,i){var r=this.__$u;if(!(r&&void 0!==r.s||4&this.__$f))return!0;if(3&this.__$f)return!0;for(var t in i)return!0;for(var f in n)if("__source"!==f&&n[f]!==this.props[f])return!0;for(var o in this.props)if(!(o in n))return!0;return!1};function useSignal(n){return r(function(){return u(n)},[])}function useComputed(n){var i=t(n);i.current=n;c.__$f|=4;return r(function(){return e(function(){return i.current()})},[])}function useSignalEffect(n){var i=t(n);i.current=n;f(function(){return a(function(){i.current()})},[])}
	return {useComputed, useSignal, useSignalEffect}
})();
export {useComputed, useSignal, useSignalEffect};
