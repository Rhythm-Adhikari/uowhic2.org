console.log("%cWelcome to UoW's Hub for the Institute of Cybersecurity and Cryptography","color: white; font-family: Arial; font-size: 2em; font-weight: bolder; text-shadow: #000 1px 1px;"),console.log("If you find us interesting, reach out to us via email, facebook, or any media you like."),console.log("\nIf you keep looking at this console, try to crack this hidden string!");var MD5=function(d){return M(V(Y(X(d),8*d.length))).toLowerCase()};function M(d){for(var n,m="0123456789ABCDEF",e="",r=0;r<d.length;r++)n=d.charCodeAt(r),e+=m.charAt(n>>>4&15)+m.charAt(15&n);return e}function X(d){for(var n=Array(d.length>>2),m=0;m<n.length;m++)n[m]=0;for(m=0;m<8*d.length;m+=8)n[m>>5]|=(255&d.charCodeAt(m/8))<<m%32;return n}function V(d){for(var n="",m=0;m<32*d.length;m+=8)n+=String.fromCharCode(d[m>>5]>>>m%32&255);return n}function Y(d,n){d[n>>5]|=128<<n%32,d[14+(n+64>>>9<<4)]=n;for(var m=1732584193,e=-271733879,r=-1732584194,_=271733878,i=0;i<d.length;i+=16){var o=m,t=e,f=r,h=_;e=md5_ii(e=md5_ii(e=md5_ii(e=md5_ii(e=md5_hh(e=md5_hh(e=md5_hh(e=md5_hh(e=md5_gg(e=md5_gg(e=md5_gg(e=md5_gg(e=md5_ff(e=md5_ff(e=md5_ff(e=md5_ff(e,r=md5_ff(r,_=md5_ff(_,m=md5_ff(m,e,r,_,d[i+0],7,-680876936),e,r,d[i+1],12,-389564586),m,e,d[i+2],17,606105819),_,m,d[i+3],22,-1044525330),r=md5_ff(r,_=md5_ff(_,m=md5_ff(m,e,r,_,d[i+4],7,-176418897),e,r,d[i+5],12,1200080426),m,e,d[i+6],17,-1473231341),_,m,d[i+7],22,-45705983),r=md5_ff(r,_=md5_ff(_,m=md5_ff(m,e,r,_,d[i+8],7,1770035416),e,r,d[i+9],12,-1958414417),m,e,d[i+10],17,-42063),_,m,d[i+11],22,-1990404162),r=md5_ff(r,_=md5_ff(_,m=md5_ff(m,e,r,_,d[i+12],7,1804603682),e,r,d[i+13],12,-40341101),m,e,d[i+14],17,-1502002290),_,m,d[i+15],22,1236535329),r=md5_gg(r,_=md5_gg(_,m=md5_gg(m,e,r,_,d[i+1],5,-165796510),e,r,d[i+6],9,-1069501632),m,e,d[i+11],14,643717713),_,m,d[i+0],20,-373897302),r=md5_gg(r,_=md5_gg(_,m=md5_gg(m,e,r,_,d[i+5],5,-701558691),e,r,d[i+10],9,38016083),m,e,d[i+15],14,-660478335),_,m,d[i+4],20,-405537848),r=md5_gg(r,_=md5_gg(_,m=md5_gg(m,e,r,_,d[i+9],5,568446438),e,r,d[i+14],9,-1019803690),m,e,d[i+3],14,-187363961),_,m,d[i+8],20,1163531501),r=md5_gg(r,_=md5_gg(_,m=md5_gg(m,e,r,_,d[i+13],5,-1444681467),e,r,d[i+2],9,-51403784),m,e,d[i+7],14,1735328473),_,m,d[i+12],20,-1926607734),r=md5_hh(r,_=md5_hh(_,m=md5_hh(m,e,r,_,d[i+5],4,-378558),e,r,d[i+8],11,-2022574463),m,e,d[i+11],16,1839030562),_,m,d[i+14],23,-35309556),r=md5_hh(r,_=md5_hh(_,m=md5_hh(m,e,r,_,d[i+1],4,-1530992060),e,r,d[i+4],11,1272893353),m,e,d[i+7],16,-155497632),_,m,d[i+10],23,-1094730640),r=md5_hh(r,_=md5_hh(_,m=md5_hh(m,e,r,_,d[i+13],4,681279174),e,r,d[i+0],11,-358537222),m,e,d[i+3],16,-722521979),_,m,d[i+6],23,76029189),r=md5_hh(r,_=md5_hh(_,m=md5_hh(m,e,r,_,d[i+9],4,-640364487),e,r,d[i+12],11,-421815835),m,e,d[i+15],16,530742520),_,m,d[i+2],23,-995338651),r=md5_ii(r,_=md5_ii(_,m=md5_ii(m,e,r,_,d[i+0],6,-198630844),e,r,d[i+7],10,1126891415),m,e,d[i+14],15,-1416354905),_,m,d[i+5],21,-57434055),r=md5_ii(r,_=md5_ii(_,m=md5_ii(m,e,r,_,d[i+12],6,1700485571),e,r,d[i+3],10,-1894986606),m,e,d[i+10],15,-1051523),_,m,d[i+1],21,-2054922799),r=md5_ii(r,_=md5_ii(_,m=md5_ii(m,e,r,_,d[i+8],6,1873313359),e,r,d[i+15],10,-30611744),m,e,d[i+6],15,-1560198380),_,m,d[i+13],21,1309151649),r=md5_ii(r,_=md5_ii(_,m=md5_ii(m,e,r,_,d[i+4],6,-145523070),e,r,d[i+11],10,-1120210379),m,e,d[i+2],15,718787259),_,m,d[i+9],21,-343485551),m=safe_add(m,o),e=safe_add(e,t),r=safe_add(r,f),_=safe_add(_,h)}return Array(m,e,r,_)}function md5_cmn(d,n,m,e,r,_){return safe_add(bit_rol(safe_add(safe_add(n,d),safe_add(e,_)),r),m)}function md5_ff(d,n,m,e,r,_,i){return md5_cmn(n&m|~n&e,d,n,r,_,i)}function md5_gg(d,n,m,e,r,_,i){return md5_cmn(n&e|m&~e,d,n,r,_,i)}function md5_hh(d,n,m,e,r,_,i){return md5_cmn(n^m^e,d,n,r,_,i)}function md5_ii(d,n,m,e,r,_,i){return md5_cmn(m^(n|~e),d,n,r,_,i)}function safe_add(d,n){var m=(65535&d)+(65535&n);return(d>>16)+(n>>16)+(m>>16)<<16|65535&m}function bit_rol(d,n){return d<<n|d>>>32-n}var z="RGV2ZWxvcGVkIGJ5IEl2YW4gJiBBbGk=";function makeid(d){for(var n="",m="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=m.length,r=0;r<d;r++)n+=m.charAt(Math.floor(Math.random()*e));return n}var d=makeid(10),hidden=MD5(atob(z)+d);function hdn(){console.log("Here are the string : "+hidden)}function check(d){return hidden==MD5(d)}hdn(),console.log("To check your answer, execute function check('<Input Your Answer here!>')"),console.log("Have fun trying this challenge!");