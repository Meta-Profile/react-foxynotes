/* eslint-disable */

!(function (e, t) {
    'use strict';
    'undefined' != typeof window && 'function' == typeof define && define.amd
        ? define(t)
        : 'undefined' != typeof module && module.exports
        ? (module.exports = t())
        : e.exports
        ? (e.exports = t())
        : (e.Fingerprint2 = t());
})(this, function () {
    'use strict';
    void 0 === Array.isArray &&
        (Array.isArray = function (e) {
            return '[object Array]' === Object.prototype.toString.call(e);
        });

    function d(e, t) {
        (e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]]),
            (t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]]);
        var n = [0, 0, 0, 0];
        return (
            (n[3] += e[3] + t[3]),
            (n[2] += n[3] >>> 16),
            (n[3] &= 65535),
            (n[2] += e[2] + t[2]),
            (n[1] += n[2] >>> 16),
            (n[2] &= 65535),
            (n[1] += e[1] + t[1]),
            (n[0] += n[1] >>> 16),
            (n[1] &= 65535),
            (n[0] += e[0] + t[0]),
            (n[0] &= 65535),
            [(n[0] << 16) | n[1], (n[2] << 16) | n[3]]
        );
    }

    function f(e, t) {
        (e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]]),
            (t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]]);
        var n = [0, 0, 0, 0];
        return (
            (n[3] += e[3] * t[3]),
            (n[2] += n[3] >>> 16),
            (n[3] &= 65535),
            (n[2] += e[2] * t[3]),
            (n[1] += n[2] >>> 16),
            (n[2] &= 65535),
            (n[2] += e[3] * t[2]),
            (n[1] += n[2] >>> 16),
            (n[2] &= 65535),
            (n[1] += e[1] * t[3]),
            (n[0] += n[1] >>> 16),
            (n[1] &= 65535),
            (n[1] += e[2] * t[2]),
            (n[0] += n[1] >>> 16),
            (n[1] &= 65535),
            (n[1] += e[3] * t[1]),
            (n[0] += n[1] >>> 16),
            (n[1] &= 65535),
            (n[0] += e[0] * t[3] + e[1] * t[2] + e[2] * t[1] + e[3] * t[0]),
            (n[0] &= 65535),
            [(n[0] << 16) | n[1], (n[2] << 16) | n[3]]
        );
    }

    function g(e, t) {
        return 32 === (t %= 64)
            ? [e[1], e[0]]
            : t < 32
            ? [(e[0] << t) | (e[1] >>> (32 - t)), (e[1] << t) | (e[0] >>> (32 - t))]
            : ((t -= 32), [(e[1] << t) | (e[0] >>> (32 - t)), (e[0] << t) | (e[1] >>> (32 - t))]);
    }

    function h(e, t) {
        return 0 === (t %= 64)
            ? e
            : t < 32
            ? [(e[0] << t) | (e[1] >>> (32 - t)), e[1] << t]
            : [e[1] << (t - 32), 0];
    }

    function m(e, t) {
        return [e[0] ^ t[0], e[1] ^ t[1]];
    }

    function p(e) {
        return (
            (e = m(e, [0, e[0] >>> 1])),
            (e = f(e, [4283543511, 3981806797])),
            (e = m(e, [0, e[0] >>> 1])),
            (e = f(e, [3301882366, 444984403])),
            (e = m(e, [0, e[0] >>> 1]))
        );
    }

    function l(e, t) {
        t = t || 0;
        for (
            var n = (e = e || '').length % 16,
                a = e.length - n,
                r = [0, t],
                i = [0, t],
                o = [0, 0],
                l = [0, 0],
                s = [2277735313, 289559509],
                c = [1291169091, 658871167],
                u = 0;
            u < a;
            u += 16
        )
            (o = [
                (255 & e.charCodeAt(u + 4)) |
                    ((255 & e.charCodeAt(u + 5)) << 8) |
                    ((255 & e.charCodeAt(u + 6)) << 16) |
                    ((255 & e.charCodeAt(u + 7)) << 24),
                (255 & e.charCodeAt(u)) |
                    ((255 & e.charCodeAt(u + 1)) << 8) |
                    ((255 & e.charCodeAt(u + 2)) << 16) |
                    ((255 & e.charCodeAt(u + 3)) << 24),
            ]),
                (l = [
                    (255 & e.charCodeAt(u + 12)) |
                        ((255 & e.charCodeAt(u + 13)) << 8) |
                        ((255 & e.charCodeAt(u + 14)) << 16) |
                        ((255 & e.charCodeAt(u + 15)) << 24),
                    (255 & e.charCodeAt(u + 8)) |
                        ((255 & e.charCodeAt(u + 9)) << 8) |
                        ((255 & e.charCodeAt(u + 10)) << 16) |
                        ((255 & e.charCodeAt(u + 11)) << 24),
                ]),
                (o = f(o, s)),
                (o = g(o, 31)),
                (o = f(o, c)),
                (r = m(r, o)),
                (r = g(r, 27)),
                (r = d(r, i)),
                (r = d(f(r, [0, 5]), [0, 1390208809])),
                (l = f(l, c)),
                (l = g(l, 33)),
                (l = f(l, s)),
                (i = m(i, l)),
                (i = g(i, 31)),
                (i = d(i, r)),
                (i = d(f(i, [0, 5]), [0, 944331445]));
        switch (((o = [0, 0]), (l = [0, 0]), n)) {
            case 15:
                l = m(l, h([0, e.charCodeAt(u + 14)], 48));
            case 14:
                l = m(l, h([0, e.charCodeAt(u + 13)], 40));
            case 13:
                l = m(l, h([0, e.charCodeAt(u + 12)], 32));
            case 12:
                l = m(l, h([0, e.charCodeAt(u + 11)], 24));
            case 11:
                l = m(l, h([0, e.charCodeAt(u + 10)], 16));
            case 10:
                l = m(l, h([0, e.charCodeAt(u + 9)], 8));
            case 9:
                (l = m(l, [0, e.charCodeAt(u + 8)])),
                    (l = f(l, c)),
                    (l = g(l, 33)),
                    (l = f(l, s)),
                    (i = m(i, l));
            case 8:
                o = m(o, h([0, e.charCodeAt(u + 7)], 56));
            case 7:
                o = m(o, h([0, e.charCodeAt(u + 6)], 48));
            case 6:
                o = m(o, h([0, e.charCodeAt(u + 5)], 40));
            case 5:
                o = m(o, h([0, e.charCodeAt(u + 4)], 32));
            case 4:
                o = m(o, h([0, e.charCodeAt(u + 3)], 24));
            case 3:
                o = m(o, h([0, e.charCodeAt(u + 2)], 16));
            case 2:
                o = m(o, h([0, e.charCodeAt(u + 1)], 8));
            case 1:
                (o = m(o, [0, e.charCodeAt(u)])),
                    (o = f(o, s)),
                    (o = g(o, 31)),
                    (o = f(o, c)),
                    (r = m(r, o));
        }
        return (
            (r = m(r, [0, e.length])),
            (i = m(i, [0, e.length])),
            (r = d(r, i)),
            (i = d(i, r)),
            (r = p(r)),
            (i = p(i)),
            (r = d(r, i)),
            (i = d(i, r)),
            ('00000000' + (r[0] >>> 0).toString(16)).slice(-8) +
                ('00000000' + (r[1] >>> 0).toString(16)).slice(-8) +
                ('00000000' + (i[0] >>> 0).toString(16)).slice(-8) +
                ('00000000' + (i[1] >>> 0).toString(16)).slice(-8)
        );
    }

    function c(e, t) {
        if (Array.prototype.forEach && e.forEach === Array.prototype.forEach) e.forEach(t);
        else if (e.length === +e.length) for (var n = 0, a = e.length; n < a; n++) t(e[n], n, e);
        else for (var r in e) e.hasOwnProperty(r) && t(e[r], r, e);
    }

    function s(e, a) {
        var r = [];
        return null == e
            ? r
            : Array.prototype.map && e.map === Array.prototype.map
            ? e.map(a)
            : (c(e, function (e, t, n) {
                  r.push(a(e, t, n));
              }),
              r);
    }

    function a(e) {
        throw new Error(
            "'new Fingerprint()' is deprecated, see https://github.com/fingerprintjs/fingerprintjs#upgrade-guide-from-182-to-200"
        );
    }

    var e = {
            preprocessor: null,
            audio: { timeout: 1e3, excludeIOS11: !0 },
            fonts: {
                swfContainerId: 'fingerprintjs2',
                swfPath: 'flash/compiled/FontList.swf',
                userDefinedFonts: [],
                extendedJsFonts: !1,
            },
            screen: { detectScreenOrientation: !0 },
            plugins: { sortPluginsFor: [/palemoon/i], excludeIE: !1 },
            extraComponents: [],
            excludes: {
                enumerateDevices: !0,
                pixelRatio: !0,
                doNotTrack: !0,
                fontsFlash: !0,
                adBlock: !0,
            },
            NOT_AVAILABLE: 'not available',
            ERROR: 'error',
            EXCLUDED: 'excluded',
        },
        n = function () {
            return navigator.mediaDevices && navigator.mediaDevices.enumerateDevices;
        },
        r = function (e) {
            var t = [window.screen.width, window.screen.height];
            return e.screen.detectScreenOrientation && t.sort().reverse(), t;
        },
        i = function (e) {
            if (window.screen.availWidth && window.screen.availHeight) {
                var t = [window.screen.availHeight, window.screen.availWidth];
                return e.screen.detectScreenOrientation && t.sort().reverse(), t;
            }
            return e.NOT_AVAILABLE;
        },
        o = function (e) {
            if (null == navigator.plugins) return e.NOT_AVAILABLE;
            for (var t = [], n = 0, a = navigator.plugins.length; n < a; n++)
                navigator.plugins[n] && t.push(navigator.plugins[n]);
            return (
                T(e) &&
                    (t = t.sort(function (e, t) {
                        return e.name > t.name ? 1 : e.name < t.name ? -1 : 0;
                    })),
                s(t, function (e) {
                    var t = s(e, function (e) {
                        return [e.type, e.suffixes];
                    });
                    return [e.name, e.description, t];
                })
            );
        },
        u = function (t) {
            var e = [];
            if (
                (Object.getOwnPropertyDescriptor &&
                    Object.getOwnPropertyDescriptor(window, 'ActiveXObject')) ||
                'ActiveXObject' in window
            ) {
                e = s(
                    [
                        'AcroPDF.PDF',
                        'Adodb.Stream',
                        'AgControl.AgControl',
                        'DevalVRXCtrl.DevalVRXCtrl.1',
                        'MacromediaFlashPaper.MacromediaFlashPaper',
                        'Msxml2.DOMDocument',
                        'Msxml2.XMLHTTP',
                        'PDF.PdfCtrl',
                        'QuickTime.QuickTime',
                        'QuickTimeCheckObject.QuickTimeCheck.1',
                        'RealPlayer',
                        'RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)',
                        'RealVideo.RealVideo(tm) ActiveX Control (32-bit)',
                        'Scripting.Dictionary',
                        'SWCtl.SWCtl',
                        'Shell.UIHelper',
                        'ShockwaveFlash.ShockwaveFlash',
                        'Skype.Detection',
                        'TDCCtl.TDCCtl',
                        'WMPlayer.OCX',
                        'rmocx.RealPlayer G2 Control',
                        'rmocx.RealPlayer G2 Control.1',
                    ],
                    function (e) {
                        try {
                            return new window.ActiveXObject(e), e;
                        } catch (e) {
                            return t.ERROR;
                        }
                    }
                );
            } else e.push(t.NOT_AVAILABLE);
            return navigator.plugins && (e = e.concat(o(t))), e;
        },
        T = function (e) {
            for (var t = !1, n = 0, a = e.plugins.sortPluginsFor.length; n < a; n++) {
                var r = e.plugins.sortPluginsFor[n];
                if (navigator.userAgent.match(r)) {
                    t = !0;
                    break;
                }
            }
            return t;
        },
        A = function (t) {
            try {
                return !!window.sessionStorage;
            } catch (e) {
                return t.ERROR;
            }
        },
        v = function (t) {
            try {
                return !!window.localStorage;
            } catch (e) {
                return t.ERROR;
            }
        },
        S = function (t) {
            if (N()) return t.EXCLUDED;
            try {
                return !!window.indexedDB;
            } catch (e) {
                return t.ERROR;
            }
        },
        C = function (e) {
            return navigator.hardwareConcurrency ? navigator.hardwareConcurrency : e.NOT_AVAILABLE;
        },
        w = function (e) {
            return navigator.cpuClass || e.NOT_AVAILABLE;
        },
        B = function (e) {
            return navigator.platform ? navigator.platform : e.NOT_AVAILABLE;
        },
        y = function (e) {
            return navigator.doNotTrack
                ? navigator.doNotTrack
                : navigator.msDoNotTrack
                ? navigator.msDoNotTrack
                : window.doNotTrack
                ? window.doNotTrack
                : e.NOT_AVAILABLE;
        },
        t = function () {
            var t,
                e = 0;
            void 0 !== navigator.maxTouchPoints
                ? (e = navigator.maxTouchPoints)
                : void 0 !== navigator.msMaxTouchPoints && (e = navigator.msMaxTouchPoints);
            try {
                document.createEvent('TouchEvent'), (t = !0);
            } catch (e) {
                t = !1;
            }
            return [e, t, 'ontouchstart' in window];
        },
        E = function (e) {
            var t = [],
                n = document.createElement('canvas');
            (n.width = 2e3), (n.height = 200), (n.style.display = 'inline');
            var a = n.getContext('2d');
            return (
                a.rect(0, 0, 10, 10),
                a.rect(2, 2, 6, 6),
                t.push(
                    'canvas winding:' + (!1 === a.isPointInPath(5, 5, 'evenodd') ? 'yes' : 'no')
                ),
                (a.textBaseline = 'alphabetic'),
                (a.fillStyle = '#f60'),
                a.fillRect(125, 1, 62, 20),
                (a.fillStyle = '#069'),
                e.dontUseFakeFontInCanvas
                    ? (a.font = '11pt Arial')
                    : (a.font = '11pt no-real-font-123'),
                a.fillText('Cwm fjordbank glyphs vext quiz, \ud83d\ude03', 2, 15),
                (a.fillStyle = 'rgba(102, 204, 0, 0.2)'),
                (a.font = '18pt Arial'),
                a.fillText('Cwm fjordbank glyphs vext quiz, \ud83d\ude03', 4, 45),
                (a.globalCompositeOperation = 'multiply'),
                (a.fillStyle = 'rgb(255,0,255)'),
                a.beginPath(),
                a.arc(50, 50, 50, 0, 2 * Math.PI, !0),
                a.closePath(),
                a.fill(),
                (a.fillStyle = 'rgb(0,255,255)'),
                a.beginPath(),
                a.arc(100, 50, 50, 0, 2 * Math.PI, !0),
                a.closePath(),
                a.fill(),
                (a.fillStyle = 'rgb(255,255,0)'),
                a.beginPath(),
                a.arc(75, 100, 50, 0, 2 * Math.PI, !0),
                a.closePath(),
                a.fill(),
                (a.fillStyle = 'rgb(255,0,255)'),
                a.arc(75, 75, 75, 0, 2 * Math.PI, !0),
                a.arc(75, 75, 25, 0, 2 * Math.PI, !0),
                a.fill('evenodd'),
                n.toDataURL && t.push('canvas fp:' + n.toDataURL()),
                t
            );
        },
        x = function () {
            function e(e) {
                return (
                    o.clearColor(0, 0, 0, 1),
                    o.enable(o.DEPTH_TEST),
                    o.depthFunc(o.LEQUAL),
                    o.clear(o.COLOR_BUFFER_BIT | o.DEPTH_BUFFER_BIT),
                    '[' + e[0] + ', ' + e[1] + ']'
                );
            }

            var o;
            if (!(o = U())) return null;
            var l = [],
                t = o.createBuffer();
            o.bindBuffer(o.ARRAY_BUFFER, t);
            var n = new Float32Array([-0.2, -0.9, 0, 0.4, -0.26, 0, 0, 0.732134444, 0]);
            o.bufferData(o.ARRAY_BUFFER, n, o.STATIC_DRAW), (t.itemSize = 3), (t.numItems = 3);
            var a = o.createProgram(),
                r = o.createShader(o.VERTEX_SHADER);
            o.shaderSource(
                r,
                'attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}'
            ),
                o.compileShader(r);
            var i = o.createShader(o.FRAGMENT_SHADER);
            o.shaderSource(
                i,
                'precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}'
            ),
                o.compileShader(i),
                o.attachShader(a, r),
                o.attachShader(a, i),
                o.linkProgram(a),
                o.useProgram(a),
                (a.vertexPosAttrib = o.getAttribLocation(a, 'attrVertex')),
                (a.offsetUniform = o.getUniformLocation(a, 'uniformOffset')),
                o.enableVertexAttribArray(a.vertexPosArray),
                o.vertexAttribPointer(a.vertexPosAttrib, t.itemSize, o.FLOAT, !1, 0, 0),
                o.uniform2f(a.offsetUniform, 1, 1),
                o.drawArrays(o.TRIANGLE_STRIP, 0, t.numItems);
            try {
                l.push(o.canvas.toDataURL());
            } catch (e) {}
            l.push('extensions:' + (o.getSupportedExtensions() || []).join(';')),
                l.push(
                    'webgl aliased line width range:' +
                        e(o.getParameter(o.ALIASED_LINE_WIDTH_RANGE))
                ),
                l.push(
                    'webgl aliased point size range:' +
                        e(o.getParameter(o.ALIASED_POINT_SIZE_RANGE))
                ),
                l.push('webgl alpha bits:' + o.getParameter(o.ALPHA_BITS)),
                l.push('webgl antialiasing:' + (o.getContextAttributes().antialias ? 'yes' : 'no')),
                l.push('webgl blue bits:' + o.getParameter(o.BLUE_BITS)),
                l.push('webgl depth bits:' + o.getParameter(o.DEPTH_BITS)),
                l.push('webgl green bits:' + o.getParameter(o.GREEN_BITS)),
                l.push(
                    'webgl max anisotropy:' +
                        (function (e) {
                            var t =
                                e.getExtension('EXT_texture_filter_anisotropic') ||
                                e.getExtension('WEBKIT_EXT_texture_filter_anisotropic') ||
                                e.getExtension('MOZ_EXT_texture_filter_anisotropic');
                            if (t) {
                                var n = e.getParameter(t.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                                return 0 === n && (n = 2), n;
                            }
                            return null;
                        })(o)
                ),
                l.push(
                    'webgl max combined texture image units:' +
                        o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS)
                ),
                l.push(
                    'webgl max cube map texture size:' + o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE)
                ),
                l.push(
                    'webgl max fragment uniform vectors:' +
                        o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS)
                ),
                l.push('webgl max render buffer size:' + o.getParameter(o.MAX_RENDERBUFFER_SIZE)),
                l.push(
                    'webgl max texture image units:' + o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS)
                ),
                l.push('webgl max texture size:' + o.getParameter(o.MAX_TEXTURE_SIZE)),
                l.push('webgl max varying vectors:' + o.getParameter(o.MAX_VARYING_VECTORS)),
                l.push('webgl max vertex attribs:' + o.getParameter(o.MAX_VERTEX_ATTRIBS)),
                l.push(
                    'webgl max vertex texture image units:' +
                        o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS)
                ),
                l.push(
                    'webgl max vertex uniform vectors:' +
                        o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS)
                ),
                l.push('webgl max viewport dims:' + e(o.getParameter(o.MAX_VIEWPORT_DIMS))),
                l.push('webgl red bits:' + o.getParameter(o.RED_BITS)),
                l.push('webgl renderer:' + o.getParameter(o.RENDERER)),
                l.push(
                    'webgl shading language version:' + o.getParameter(o.SHADING_LANGUAGE_VERSION)
                ),
                l.push('webgl stencil bits:' + o.getParameter(o.STENCIL_BITS)),
                l.push('webgl vendor:' + o.getParameter(o.VENDOR)),
                l.push('webgl version:' + o.getParameter(o.VERSION));
            try {
                var s = o.getExtension('WEBGL_debug_renderer_info');
                s &&
                    (l.push('webgl unmasked vendor:' + o.getParameter(s.UNMASKED_VENDOR_WEBGL)),
                    l.push('webgl unmasked renderer:' + o.getParameter(s.UNMASKED_RENDERER_WEBGL)));
            } catch (e) {}
            return (
                o.getShaderPrecisionFormat &&
                    c(['FLOAT', 'INT'], function (i) {
                        c(['VERTEX', 'FRAGMENT'], function (r) {
                            c(['HIGH', 'MEDIUM', 'LOW'], function (a) {
                                c(['precision', 'rangeMin', 'rangeMax'], function (e) {
                                    var t = o.getShaderPrecisionFormat(
                                        o[r + '_SHADER'],
                                        o[a + '_' + i]
                                    )[e];
                                    'precision' !== e && (e = 'precision ' + e);
                                    var n = [
                                        'webgl ',
                                        r.toLowerCase(),
                                        ' shader ',
                                        a.toLowerCase(),
                                        ' ',
                                        i.toLowerCase(),
                                        ' ',
                                        e,
                                        ':',
                                        t,
                                    ].join('');
                                    l.push(n);
                                });
                            });
                        });
                    }),
                V(o),
                l
            );
        },
        O = function () {
            try {
                var e = U(),
                    t = e.getExtension('WEBGL_debug_renderer_info'),
                    n =
                        e.getParameter(t.UNMASKED_VENDOR_WEBGL) +
                        '~' +
                        e.getParameter(t.UNMASKED_RENDERER_WEBGL);
                return V(e), n;
            } catch (e) {
                return null;
            }
        },
        M = function () {
            var e = document.createElement('div');
            e.innerHTML = '&nbsp;';
            var t = !(e.className = 'adsbox');
            try {
                document.body.appendChild(e),
                    (t = 0 === document.getElementsByClassName('adsbox')[0].offsetHeight),
                    document.body.removeChild(e);
            } catch (e) {
                t = !1;
            }
            return t;
        },
        P = function () {
            if (void 0 !== navigator.languages)
                try {
                    if (navigator.languages[0].substr(0, 2) !== navigator.language.substr(0, 2))
                        return !0;
                } catch (e) {
                    return !0;
                }
            return !1;
        },
        b = function () {
            return (
                window.screen.width < window.screen.availWidth ||
                window.screen.height < window.screen.availHeight
            );
        },
        L = function () {
            var e,
                t = navigator.userAgent.toLowerCase(),
                n = navigator.oscpu,
                a = navigator.platform.toLowerCase();
            if (
                ((e =
                    0 <= t.indexOf('windows phone')
                        ? 'Windows Phone'
                        : 0 <= t.indexOf('windows') ||
                          0 <= t.indexOf('win16') ||
                          0 <= t.indexOf('win32') ||
                          0 <= t.indexOf('win64') ||
                          0 <= t.indexOf('win95') ||
                          0 <= t.indexOf('win98') ||
                          0 <= t.indexOf('winnt') ||
                          0 <= t.indexOf('wow64')
                        ? 'Windows'
                        : 0 <= t.indexOf('android')
                        ? 'Android'
                        : 0 <= t.indexOf('linux') || 0 <= t.indexOf('cros') || 0 <= t.indexOf('x11')
                        ? 'Linux'
                        : 0 <= t.indexOf('iphone') ||
                          0 <= t.indexOf('ipad') ||
                          0 <= t.indexOf('ipod') ||
                          0 <= t.indexOf('crios') ||
                          0 <= t.indexOf('fxios')
                        ? 'iOS'
                        : 0 <= t.indexOf('macintosh') || 0 <= t.indexOf('mac_powerpc)')
                        ? 'Mac'
                        : 'Other'),
                ('ontouchstart' in window ||
                    0 < navigator.maxTouchPoints ||
                    0 < navigator.msMaxTouchPoints) &&
                    'Windows' !== e &&
                    'Windows Phone' !== e &&
                    'Android' !== e &&
                    'iOS' !== e &&
                    'Other' !== e &&
                    -1 === t.indexOf('cros'))
            )
                return !0;
            if (void 0 !== n) {
                if (
                    0 <= (n = n.toLowerCase()).indexOf('win') &&
                    'Windows' !== e &&
                    'Windows Phone' !== e
                )
                    return !0;
                if (0 <= n.indexOf('linux') && 'Linux' !== e && 'Android' !== e) return !0;
                if (0 <= n.indexOf('mac') && 'Mac' !== e && 'iOS' !== e) return !0;
                if (
                    (-1 === n.indexOf('win') &&
                        -1 === n.indexOf('linux') &&
                        -1 === n.indexOf('mac')) !=
                    ('Other' === e)
                )
                    return !0;
            }
            return (
                (0 <= a.indexOf('win') && 'Windows' !== e && 'Windows Phone' !== e) ||
                ((0 <= a.indexOf('linux') || 0 <= a.indexOf('android') || 0 <= a.indexOf('pike')) &&
                    'Linux' !== e &&
                    'Android' !== e) ||
                ((0 <= a.indexOf('mac') ||
                    0 <= a.indexOf('ipad') ||
                    0 <= a.indexOf('ipod') ||
                    0 <= a.indexOf('iphone')) &&
                    'Mac' !== e &&
                    'iOS' !== e) ||
                (!(0 <= a.indexOf('arm') && 'Windows Phone' === e) &&
                    !(0 <= a.indexOf('pike') && 0 <= t.indexOf('opera mini')) &&
                    ((a.indexOf('win') < 0 &&
                        a.indexOf('linux') < 0 &&
                        a.indexOf('mac') < 0 &&
                        a.indexOf('iphone') < 0 &&
                        a.indexOf('ipad') < 0 &&
                        a.indexOf('ipod') < 0) !=
                        ('Other' === e) ||
                        (void 0 === navigator.plugins && 'Windows' !== e && 'Windows Phone' !== e)))
            );
        },
        I = function () {
            var e,
                t = navigator.userAgent.toLowerCase(),
                n = navigator.productSub;
            if (0 <= t.indexOf('edge/') || 0 <= t.indexOf('iemobile/')) return !1;
            if (0 <= t.indexOf('opera mini')) return !1;
            if (
                ('Chrome' ===
                    (e =
                        0 <= t.indexOf('firefox/')
                            ? 'Firefox'
                            : 0 <= t.indexOf('opera/') || 0 <= t.indexOf(' opr/')
                            ? 'Opera'
                            : 0 <= t.indexOf('chrome/')
                            ? 'Chrome'
                            : 0 <= t.indexOf('safari/')
                            ? 0 <= t.indexOf('android 1.') ||
                              0 <= t.indexOf('android 2.') ||
                              0 <= t.indexOf('android 3.') ||
                              0 <= t.indexOf('android 4.')
                                ? 'AOSP'
                                : 'Safari'
                            : 0 <= t.indexOf('trident/')
                            ? 'Internet Explorer'
                            : 'Other') ||
                    'Safari' === e ||
                    'Opera' === e) &&
                '20030107' !== n
            )
                return !0;
            var a,
                r = eval.toString().length;
            if (37 === r && 'Safari' !== e && 'Firefox' !== e && 'Other' !== e) return !0;
            if (39 === r && 'Internet Explorer' !== e && 'Other' !== e) return !0;
            if (33 === r && 'Chrome' !== e && 'AOSP' !== e && 'Opera' !== e && 'Other' !== e)
                return !0;
            try {
                throw 'a';
            } catch (e) {
                try {
                    e.toSource(), (a = !0);
                } catch (e) {
                    a = !1;
                }
            }
            return a && 'Firefox' !== e && 'Other' !== e;
        },
        k = function () {
            var e = document.createElement('canvas');
            return !(!e.getContext || !e.getContext('2d'));
        },
        D = function () {
            if (!k()) return !1;
            var e = U(),
                t = !!window.WebGLRenderingContext && !!e;
            return V(e), t;
        },
        R = function () {
            return (
                'Microsoft Internet Explorer' === navigator.appName ||
                !('Netscape' !== navigator.appName || !/Trident/.test(navigator.userAgent))
            );
        },
        N = function () {
            return (
                2 <=
                ('msWriteProfilerMark' in window) +
                    ('msLaunchUri' in navigator) +
                    ('msSaveBlob' in navigator)
            );
        },
        _ = function () {
            return void 0 !== window.swfobject;
        },
        F = function () {
            return window.swfobject.hasFlashPlayerVersion('9.0.0');
        },
        G = function (t, e) {
            var n = '___fp_swf_loaded';
            window[n] = function (e) {
                t(e);
            };
            var a,
                r,
                i = e.fonts.swfContainerId;
            (r = document.createElement('div')).setAttribute('id', a.fonts.swfContainerId),
                document.body.appendChild(r);
            var o = { onReady: n };
            window.swfobject.embedSWF(
                e.fonts.swfPath,
                i,
                '1',
                '1',
                '9.0.0',
                !1,
                o,
                {
                    allowScriptAccess: 'always',
                    menu: 'false',
                },
                {}
            );
        },
        U = function () {
            var e = document.createElement('canvas'),
                t = null;
            try {
                t = e.getContext('webgl') || e.getContext('experimental-webgl');
            } catch (e) {}
            return (t = t || null);
        },
        V = function (e) {
            var t = e.getExtension('WEBGL_lose_context');
            null != t && t.loseContext();
        },
        H = [
            {
                key: 'userAgent',
                getData: function (e) {
                    e(navigator.userAgent);
                },
            },
            {
                key: 'webdriver',
                getData: function (e, t) {
                    e(null == navigator.webdriver ? t.NOT_AVAILABLE : navigator.webdriver);
                },
            },
            {
                key: 'language',
                getData: function (e, t) {
                    e(
                        navigator.language ||
                            navigator.userLanguage ||
                            navigator.browserLanguage ||
                            navigator.systemLanguage ||
                            t.NOT_AVAILABLE
                    );
                },
            },
            {
                key: 'colorDepth',
                getData: function (e, t) {
                    e(window.screen.colorDepth || t.NOT_AVAILABLE);
                },
            },
            {
                key: 'deviceMemory',
                getData: function (e, t) {
                    e(navigator.deviceMemory || t.NOT_AVAILABLE);
                },
            },
            {
                key: 'pixelRatio',
                getData: function (e, t) {
                    e(window.devicePixelRatio || t.NOT_AVAILABLE);
                },
            },
            {
                key: 'hardwareConcurrency',
                getData: function (e, t) {
                    e(C(t));
                },
            },
            {
                key: 'screenResolution',
                getData: function (e, t) {
                    e(r(t));
                },
            },
            {
                key: 'availableScreenResolution',
                getData: function (e, t) {
                    e(i(t));
                },
            },
            {
                key: 'timezoneOffset',
                getData: function (e) {
                    e(new Date().getTimezoneOffset());
                },
            },
            {
                key: 'timezone',
                getData: function (e, t) {
                    window.Intl && window.Intl.DateTimeFormat
                        ? e(
                              new window.Intl.DateTimeFormat().resolvedOptions().timeZone ||
                                  t.NOT_AVAILABLE
                          )
                        : e(t.NOT_AVAILABLE);
                },
            },
            {
                key: 'sessionStorage',
                getData: function (e, t) {
                    e(A(t));
                },
            },
            {
                key: 'localStorage',
                getData: function (e, t) {
                    e(v(t));
                },
            },
            {
                key: 'indexedDb',
                getData: function (e, t) {
                    e(S(t));
                },
            },
            {
                key: 'addBehavior',
                getData: function (e) {
                    e(!!window.HTMLElement.prototype.addBehavior);
                },
            },
            {
                key: 'openDatabase',
                getData: function (e) {
                    e(!!window.openDatabase);
                },
            },
            {
                key: 'cpuClass',
                getData: function (e, t) {
                    e(w(t));
                },
            },
            {
                key: 'platform',
                getData: function (e, t) {
                    e(B(t));
                },
            },
            {
                key: 'doNotTrack',
                getData: function (e, t) {
                    e(y(t));
                },
            },
            {
                key: 'plugins',
                getData: function (e, t) {
                    R() ? (t.plugins.excludeIE ? e(t.EXCLUDED) : e(u(t))) : e(o(t));
                },
            },
            {
                key: 'canvas',
                getData: function (e, t) {
                    k() ? e(E(t)) : e(t.NOT_AVAILABLE);
                },
            },
            {
                key: 'webgl',
                getData: function (e, t) {
                    D() ? e(x()) : e(t.NOT_AVAILABLE);
                },
            },
            {
                key: 'webglVendorAndRenderer',
                getData: function (e) {
                    D() ? e(O()) : e();
                },
            },
            {
                key: 'adBlock',
                getData: function (e) {
                    e(M());
                },
            },
            {
                key: 'hasLiedLanguages',
                getData: function (e) {
                    e(P());
                },
            },
            {
                key: 'hasLiedResolution',
                getData: function (e) {
                    e(b());
                },
            },
            {
                key: 'hasLiedOs',
                getData: function (e) {
                    e(L());
                },
            },
            {
                key: 'hasLiedBrowser',
                getData: function (e) {
                    e(I());
                },
            },
            {
                key: 'touchSupport',
                getData: function (e) {
                    e(t());
                },
            },
            {
                key: 'fonts',
                getData: function (e, t) {
                    var u = ['monospace', 'sans-serif', 'serif'],
                        d = [
                            'Andale Mono',
                            'Arial',
                            'Arial Black',
                            'Arial Hebrew',
                            'Arial MT',
                            'Arial Narrow',
                            'Arial Rounded MT Bold',
                            'Arial Unicode MS',
                            'Bitstream Vera Sans Mono',
                            'Book Antiqua',
                            'Bookman Old Style',
                            'Calibri',
                            'Cambria',
                            'Cambria Math',
                            'Century',
                            'Century Gothic',
                            'Century Schoolbook',
                            'Comic Sans',
                            'Comic Sans MS',
                            'Consolas',
                            'Courier',
                            'Courier New',
                            'Geneva',
                            'Georgia',
                            'Helvetica',
                            'Helvetica Neue',
                            'Impact',
                            'Lucida Bright',
                            'Lucida Calligraphy',
                            'Lucida Console',
                            'Lucida Fax',
                            'LUCIDA GRANDE',
                            'Lucida Handwriting',
                            'Lucida Sans',
                            'Lucida Sans Typewriter',
                            'Lucida Sans Unicode',
                            'Microsoft Sans Serif',
                            'Monaco',
                            'Monotype Corsiva',
                            'MS Gothic',
                            'MS Outlook',
                            'MS PGothic',
                            'MS Reference Sans Serif',
                            'MS Sans Serif',
                            'MS Serif',
                            'MYRIAD',
                            'MYRIAD PRO',
                            'Palatino',
                            'Palatino Linotype',
                            'Segoe Print',
                            'Segoe Script',
                            'Segoe UI',
                            'Segoe UI Light',
                            'Segoe UI Semibold',
                            'Segoe UI Symbol',
                            'Tahoma',
                            'Times',
                            'Times New Roman',
                            'Times New Roman PS',
                            'Trebuchet MS',
                            'Verdana',
                            'Wingdings',
                            'Wingdings 2',
                            'Wingdings 3',
                        ];
                    if (t.fonts.extendedJsFonts) {
                        d = d.concat([
                            'Abadi MT Condensed Light',
                            'Academy Engraved LET',
                            'ADOBE CASLON PRO',
                            'Adobe Garamond',
                            'ADOBE GARAMOND PRO',
                            'Agency FB',
                            'Aharoni',
                            'Albertus Extra Bold',
                            'Albertus Medium',
                            'Algerian',
                            'Amazone BT',
                            'American Typewriter',
                            'American Typewriter Condensed',
                            'AmerType Md BT',
                            'Andalus',
                            'Angsana New',
                            'AngsanaUPC',
                            'Antique Olive',
                            'Aparajita',
                            'Apple Chancery',
                            'Apple Color Emoji',
                            'Apple SD Gothic Neo',
                            'Arabic Typesetting',
                            'ARCHER',
                            'ARNO PRO',
                            'Arrus BT',
                            'Aurora Cn BT',
                            'AvantGarde Bk BT',
                            'AvantGarde Md BT',
                            'AVENIR',
                            'Ayuthaya',
                            'Bandy',
                            'Bangla Sangam MN',
                            'Bank Gothic',
                            'BankGothic Md BT',
                            'Baskerville',
                            'Baskerville Old Face',
                            'Batang',
                            'BatangChe',
                            'Bauer Bodoni',
                            'Bauhaus 93',
                            'Bazooka',
                            'Bell MT',
                            'Bembo',
                            'Benguiat Bk BT',
                            'Berlin Sans FB',
                            'Berlin Sans FB Demi',
                            'Bernard MT Condensed',
                            'BernhardFashion BT',
                            'BernhardMod BT',
                            'Big Caslon',
                            'BinnerD',
                            'Blackadder ITC',
                            'BlairMdITC TT',
                            'Bodoni 72',
                            'Bodoni 72 Oldstyle',
                            'Bodoni 72 Smallcaps',
                            'Bodoni MT',
                            'Bodoni MT Black',
                            'Bodoni MT Condensed',
                            'Bodoni MT Poster Compressed',
                            'Bookshelf Symbol 7',
                            'Boulder',
                            'Bradley Hand',
                            'Bradley Hand ITC',
                            'Bremen Bd BT',
                            'Britannic Bold',
                            'Broadway',
                            'Browallia New',
                            'BrowalliaUPC',
                            'Brush Script MT',
                            'Californian FB',
                            'Calisto MT',
                            'Calligrapher',
                            'Candara',
                            'CaslonOpnface BT',
                            'Castellar',
                            'Centaur',
                            'Cezanne',
                            'CG Omega',
                            'CG Times',
                            'Chalkboard',
                            'Chalkboard SE',
                            'Chalkduster',
                            'Charlesworth',
                            'Charter Bd BT',
                            'Charter BT',
                            'Chaucer',
                            'ChelthmITC Bk BT',
                            'Chiller',
                            'Clarendon',
                            'Clarendon Condensed',
                            'CloisterBlack BT',
                            'Cochin',
                            'Colonna MT',
                            'Constantia',
                            'Cooper Black',
                            'Copperplate',
                            'Copperplate Gothic',
                            'Copperplate Gothic Bold',
                            'Copperplate Gothic Light',
                            'CopperplGoth Bd BT',
                            'Corbel',
                            'Cordia New',
                            'CordiaUPC',
                            'Cornerstone',
                            'Coronet',
                            'Cuckoo',
                            'Curlz MT',
                            'DaunPenh',
                            'Dauphin',
                            'David',
                            'DB LCD Temp',
                            'DELICIOUS',
                            'Denmark',
                            'DFKai-SB',
                            'Didot',
                            'DilleniaUPC',
                            'DIN',
                            'DokChampa',
                            'Dotum',
                            'DotumChe',
                            'Ebrima',
                            'Edwardian Script ITC',
                            'Elephant',
                            'English 111 Vivace BT',
                            'Engravers MT',
                            'EngraversGothic BT',
                            'Eras Bold ITC',
                            'Eras Demi ITC',
                            'Eras Light ITC',
                            'Eras Medium ITC',
                            'EucrosiaUPC',
                            'Euphemia',
                            'Euphemia UCAS',
                            'EUROSTILE',
                            'Exotc350 Bd BT',
                            'FangSong',
                            'Felix Titling',
                            'Fixedsys',
                            'FONTIN',
                            'Footlight MT Light',
                            'Forte',
                            'FrankRuehl',
                            'Fransiscan',
                            'Freefrm721 Blk BT',
                            'FreesiaUPC',
                            'Freestyle Script',
                            'French Script MT',
                            'FrnkGothITC Bk BT',
                            'Fruitger',
                            'FRUTIGER',
                            'Futura',
                            'Futura Bk BT',
                            'Futura Lt BT',
                            'Futura Md BT',
                            'Futura ZBlk BT',
                            'FuturaBlack BT',
                            'Gabriola',
                            'Galliard BT',
                            'Gautami',
                            'Geeza Pro',
                            'Geometr231 BT',
                            'Geometr231 Hv BT',
                            'Geometr231 Lt BT',
                            'GeoSlab 703 Lt BT',
                            'GeoSlab 703 XBd BT',
                            'Gigi',
                            'Gill Sans',
                            'Gill Sans MT',
                            'Gill Sans MT Condensed',
                            'Gill Sans MT Ext Condensed Bold',
                            'Gill Sans Ultra Bold',
                            'Gill Sans Ultra Bold Condensed',
                            'Gisha',
                            'Gloucester MT Extra Condensed',
                            'GOTHAM',
                            'GOTHAM BOLD',
                            'Goudy Old Style',
                            'Goudy Stout',
                            'GoudyHandtooled BT',
                            'GoudyOLSt BT',
                            'Gujarati Sangam MN',
                            'Gulim',
                            'GulimChe',
                            'Gungsuh',
                            'GungsuhChe',
                            'Gurmukhi MN',
                            'Haettenschweiler',
                            'Harlow Solid Italic',
                            'Harrington',
                            'Heather',
                            'Heiti SC',
                            'Heiti TC',
                            'HELV',
                            'Herald',
                            'High Tower Text',
                            'Hiragino Kaku Gothic ProN',
                            'Hiragino Mincho ProN',
                            'Hoefler Text',
                            'Humanst 521 Cn BT',
                            'Humanst521 BT',
                            'Humanst521 Lt BT',
                            'Imprint MT Shadow',
                            'Incised901 Bd BT',
                            'Incised901 BT',
                            'Incised901 Lt BT',
                            'INCONSOLATA',
                            'Informal Roman',
                            'Informal011 BT',
                            'INTERSTATE',
                            'IrisUPC',
                            'Iskoola Pota',
                            'JasmineUPC',
                            'Jazz LET',
                            'Jenson',
                            'Jester',
                            'Jokerman',
                            'Juice ITC',
                            'Kabel Bk BT',
                            'Kabel Ult BT',
                            'Kailasa',
                            'KaiTi',
                            'Kalinga',
                            'Kannada Sangam MN',
                            'Kartika',
                            'Kaufmann Bd BT',
                            'Kaufmann BT',
                            'Khmer UI',
                            'KodchiangUPC',
                            'Kokila',
                            'Korinna BT',
                            'Kristen ITC',
                            'Krungthep',
                            'Kunstler Script',
                            'Lao UI',
                            'Latha',
                            'Leelawadee',
                            'Letter Gothic',
                            'Levenim MT',
                            'LilyUPC',
                            'Lithograph',
                            'Lithograph Light',
                            'Long Island',
                            'Lydian BT',
                            'Magneto',
                            'Maiandra GD',
                            'Malayalam Sangam MN',
                            'Malgun Gothic',
                            'Mangal',
                            'Marigold',
                            'Marion',
                            'Marker Felt',
                            'Market',
                            'Marlett',
                            'Matisse ITC',
                            'Matura MT Script Capitals',
                            'Meiryo',
                            'Meiryo UI',
                            'Microsoft Himalaya',
                            'Microsoft JhengHei',
                            'Microsoft New Tai Lue',
                            'Microsoft PhagsPa',
                            'Microsoft Tai Le',
                            'Microsoft Uighur',
                            'Microsoft YaHei',
                            'Microsoft Yi Baiti',
                            'MingLiU',
                            'MingLiU_HKSCS',
                            'MingLiU_HKSCS-ExtB',
                            'MingLiU-ExtB',
                            'Minion',
                            'Minion Pro',
                            'Miriam',
                            'Miriam Fixed',
                            'Mistral',
                            'Modern',
                            'Modern No. 20',
                            'Mona Lisa Solid ITC TT',
                            'Mongolian Baiti',
                            'MONO',
                            'MoolBoran',
                            'Mrs Eaves',
                            'MS LineDraw',
                            'MS Mincho',
                            'MS PMincho',
                            'MS Reference Specialty',
                            'MS UI Gothic',
                            'MT Extra',
                            'MUSEO',
                            'MV Boli',
                            'Nadeem',
                            'Narkisim',
                            'NEVIS',
                            'News Gothic',
                            'News GothicMT',
                            'NewsGoth BT',
                            'Niagara Engraved',
                            'Niagara Solid',
                            'Noteworthy',
                            'NSimSun',
                            'Nyala',
                            'OCR A Extended',
                            'Old Century',
                            'Old English Text MT',
                            'Onyx',
                            'Onyx BT',
                            'OPTIMA',
                            'Oriya Sangam MN',
                            'OSAKA',
                            'OzHandicraft BT',
                            'Palace Script MT',
                            'Papyrus',
                            'Parchment',
                            'Party LET',
                            'Pegasus',
                            'Perpetua',
                            'Perpetua Titling MT',
                            'PetitaBold',
                            'Pickwick',
                            'Plantagenet Cherokee',
                            'Playbill',
                            'PMingLiU',
                            'PMingLiU-ExtB',
                            'Poor Richard',
                            'Poster',
                            'PosterBodoni BT',
                            'PRINCETOWN LET',
                            'Pristina',
                            'PTBarnum BT',
                            'Pythagoras',
                            'Raavi',
                            'Rage Italic',
                            'Ravie',
                            'Ribbon131 Bd BT',
                            'Rockwell',
                            'Rockwell Condensed',
                            'Rockwell Extra Bold',
                            'Rod',
                            'Roman',
                            'Sakkal Majalla',
                            'Santa Fe LET',
                            'Savoye LET',
                            'Sceptre',
                            'Script',
                            'Script MT Bold',
                            'SCRIPTINA',
                            'Serifa',
                            'Serifa BT',
                            'Serifa Th BT',
                            'ShelleyVolante BT',
                            'Sherwood',
                            'Shonar Bangla',
                            'Showcard Gothic',
                            'Shruti',
                            'Signboard',
                            'SILKSCREEN',
                            'SimHei',
                            'Simplified Arabic',
                            'Simplified Arabic Fixed',
                            'SimSun',
                            'SimSun-ExtB',
                            'Sinhala Sangam MN',
                            'Sketch Rockwell',
                            'Skia',
                            'Small Fonts',
                            'Snap ITC',
                            'Snell Roundhand',
                            'Socket',
                            'Souvenir Lt BT',
                            'Staccato222 BT',
                            'Steamer',
                            'Stencil',
                            'Storybook',
                            'Styllo',
                            'Subway',
                            'Swis721 BlkEx BT',
                            'Swiss911 XCm BT',
                            'Sylfaen',
                            'Synchro LET',
                            'System',
                            'Tamil Sangam MN',
                            'Technical',
                            'Teletype',
                            'Telugu Sangam MN',
                            'Tempus Sans ITC',
                            'Terminal',
                            'Thonburi',
                            'Traditional Arabic',
                            'Trajan',
                            'TRAJAN PRO',
                            'Tristan',
                            'Tubular',
                            'Tunga',
                            'Tw Cen MT',
                            'Tw Cen MT Condensed',
                            'Tw Cen MT Condensed Extra Bold',
                            'TypoUpright BT',
                            'Unicorn',
                            'Univers',
                            'Univers CE 55 Medium',
                            'Univers Condensed',
                            'Utsaah',
                            'Vagabond',
                            'Vani',
                            'Vijaya',
                            'Viner Hand ITC',
                            'VisualUI',
                            'Vivaldi',
                            'Vladimir Script',
                            'Vrinda',
                            'Westminster',
                            'WHITNEY',
                            'Wide Latin',
                            'ZapfEllipt BT',
                            'ZapfHumnst BT',
                            'ZapfHumnst Dm BT',
                            'Zapfino',
                            'Zurich BlkEx BT',
                            'Zurich Ex BT',
                            'ZWAdobeF',
                        ]);
                    }
                    d = (d = d.concat(t.fonts.userDefinedFonts)).filter(function (e, t) {
                        return d.indexOf(e) === t;
                    });

                    function f() {
                        var e = document.createElement('span');
                        return (
                            (e.style.position = 'absolute'),
                            (e.style.left = '-9999px'),
                            (e.style.fontSize = '72px'),
                            (e.style.fontStyle = 'normal'),
                            (e.style.fontWeight = 'normal'),
                            (e.style.letterSpacing = 'normal'),
                            (e.style.lineBreak = 'auto'),
                            (e.style.lineHeight = 'normal'),
                            (e.style.textTransform = 'none'),
                            (e.style.textAlign = 'left'),
                            (e.style.textDecoration = 'none'),
                            (e.style.textShadow = 'none'),
                            (e.style.whiteSpace = 'normal'),
                            (e.style.wordBreak = 'normal'),
                            (e.style.wordSpacing = 'normal'),
                            (e.innerHTML = 'mmmmmmmmmmlli'),
                            e
                        );
                    }

                    function n(e) {
                        for (var t = !1, n = 0; n < u.length; n++)
                            if ((t = e[n].offsetWidth !== i[u[n]] || e[n].offsetHeight !== o[u[n]]))
                                return t;
                        return t;
                    }

                    var a = document.getElementsByTagName('body')[0],
                        r = document.createElement('div'),
                        g = document.createElement('div'),
                        i = {},
                        o = {},
                        l = (function () {
                            for (var e = [], t = 0, n = u.length; t < n; t++) {
                                var a = f();
                                (a.style.fontFamily = u[t]), r.appendChild(a), e.push(a);
                            }
                            return e;
                        })();
                    a.appendChild(r);
                    for (var s = 0, c = u.length; s < c; s++)
                        (i[u[s]] = l[s].offsetWidth), (o[u[s]] = l[s].offsetHeight);
                    var h = (function () {
                        for (var e, t, n, a = {}, r = 0, i = d.length; r < i; r++) {
                            for (var o = [], l = 0, s = u.length; l < s; l++) {
                                var c =
                                    ((e = d[r]),
                                    (t = u[l]),
                                    (n = void 0),
                                    ((n = f()).style.fontFamily = "'" + e + "'," + t),
                                    n);
                                g.appendChild(c), o.push(c);
                            }
                            a[d[r]] = o;
                        }
                        return a;
                    })();
                    a.appendChild(g);
                    for (var m = [], p = 0, T = d.length; p < T; p++) n(h[d[p]]) && m.push(d[p]);
                    a.removeChild(g), a.removeChild(r), e(m);
                },
                pauseBefore: !0,
            },
            {
                key: 'fontsFlash',
                getData: function (t, e) {
                    return _()
                        ? F()
                            ? e.fonts.swfPath
                                ? void G(function (e) {
                                      t(e);
                                  }, e)
                                : t('missing options.fonts.swfPath')
                            : t('flash not installed')
                        : t('swf object not loaded');
                },
                pauseBefore: !0,
            },
            {
                key: 'audio',
                getData: function (n, e) {
                    var t = e.audio;
                    if (t.excludeIOS11 && navigator.userAgent.match(/OS 11.+Version\/11.+Safari/))
                        return n(e.EXCLUDED);
                    var a = window.OfflineAudioContext || window.webkitOfflineAudioContext;
                    if (null == a) return n(e.NOT_AVAILABLE);
                    var r = new a(1, 44100, 44100),
                        i = r.createOscillator();
                    (i.type = 'triangle'), i.frequency.setValueAtTime(1e4, r.currentTime);
                    var o = r.createDynamicsCompressor();
                    c(
                        [
                            ['threshold', -50],
                            ['knee', 40],
                            ['ratio', 12],
                            ['reduction', -20],
                            ['attack', 0],
                            ['release', 0.25],
                        ],
                        function (e) {
                            void 0 !== o[e[0]] &&
                                'function' == typeof o[e[0]].setValueAtTime &&
                                o[e[0]].setValueAtTime(e[1], r.currentTime);
                        }
                    ),
                        i.connect(o),
                        o.connect(r.destination),
                        i.start(0),
                        r.startRendering();
                    var l = setTimeout(function () {
                        return (
                            console.warn(
                                'Audio fingerprint timed out. Please report bug at https://github.com/fingerprintjs/fingerprintjs with your user agent: "' +
                                    navigator.userAgent +
                                    '".'
                            ),
                            (r.oncomplete = function () {}),
                            (r = null),
                            n('audioTimeout')
                        );
                    }, t.timeout);
                    r.oncomplete = function (e) {
                        var t;
                        try {
                            clearTimeout(l),
                                (t = e.renderedBuffer
                                    .getChannelData(0)
                                    .slice(4500, 5e3)
                                    .reduce(function (e, t) {
                                        return e + Math.abs(t);
                                    }, 0)
                                    .toString()),
                                i.disconnect(),
                                o.disconnect();
                        } catch (e) {
                            return void n(e);
                        }
                        n(t);
                    };
                },
            },
            {
                key: 'enumerateDevices',
                getData: function (t, e) {
                    if (!n()) return t(e.NOT_AVAILABLE);
                    navigator.mediaDevices
                        .enumerateDevices()
                        .then(function (e) {
                            t(
                                e.map(function (e) {
                                    return (
                                        'id=' +
                                        e.deviceId +
                                        ';gid=' +
                                        e.groupId +
                                        ';' +
                                        e.kind +
                                        ';' +
                                        e.label
                                    );
                                })
                            );
                        })
                        .catch(function (e) {
                            t(e);
                        });
                },
            },
        ];
    return (
        (a.get = function (n, a) {
            (function (e, t) {
                if (null == t) return;
                var n, a;
                for (a in t)
                    null == (n = t[a]) || Object.prototype.hasOwnProperty.call(e, a) || (e[a] = n);
            })((n = a ? n || {} : ((a = n), {})), e),
                (n.components = n.extraComponents.concat(H));
            var r = {
                    data: [],
                    addPreprocessedComponent: function (e, t) {
                        'function' == typeof n.preprocessor && (t = n.preprocessor(e, t)),
                            r.data.push({ key: e, value: t });
                    },
                },
                i = -1,
                o = function (e) {
                    if ((i += 1) >= n.components.length) a(r.data);
                    else {
                        var t = n.components[i];
                        if (n.excludes[t.key]) o(!1);
                        else {
                            if (!e && t.pauseBefore)
                                return (
                                    --i,
                                    void setTimeout(function () {
                                        o(!0);
                                    }, 1)
                                );
                            try {
                                t.getData(function (e) {
                                    r.addPreprocessedComponent(t.key, e), o(!1);
                                }, n);
                            } catch (e) {
                                r.addPreprocessedComponent(t.key, String(e)), o(!1);
                            }
                        }
                    }
                };
            o(!1);
        }),
        (a.getPromise = function (n) {
            return new Promise(function (e, t) {
                a.get(n, e);
            });
        }),
        (a.getV18 = function (i, o) {
            return (
                null == o && ((o = i), (i = {})),
                a.get(i, function (e) {
                    for (var t = [], n = 0; n < e.length; n++) {
                        var a = e[n];
                        if (a.value === (i.NOT_AVAILABLE || 'not available'))
                            t.push({
                                key: a.key,
                                value: 'unknown',
                            });
                        else if ('plugins' === a.key)
                            t.push({
                                key: 'plugins',
                                value: s(a.value, function (e) {
                                    var t = s(e[2], function (e) {
                                        return e.join ? e.join('~') : e;
                                    }).join(',');
                                    return [e[0], e[1], t].join('::');
                                }),
                            });
                        else if (
                            -1 !== ['canvas', 'webgl'].indexOf(a.key) &&
                            Array.isArray(a.value)
                        )
                            t.push({
                                key: a.key,
                                value: a.value.join('~'),
                            });
                        else if (
                            -1 !==
                            [
                                'sessionStorage',
                                'localStorage',
                                'indexedDb',
                                'addBehavior',
                                'openDatabase',
                            ].indexOf(a.key)
                        ) {
                            if (!a.value) continue;
                            t.push({ key: a.key, value: 1 });
                        } else
                            a.value
                                ? t.push(
                                      a.value.join ? { key: a.key, value: a.value.join(';') } : a
                                  )
                                : t.push({
                                      key: a.key,
                                      value: a.value,
                                  });
                    }
                    var r = l(
                        s(t, function (e) {
                            return e.value;
                        }).join('~~~'),
                        31
                    );
                    o(r, t);
                })
            );
        }),
        (a.x64hash128 = l),
        (a.VERSION = '2.1.4'),
        a
    );
});
