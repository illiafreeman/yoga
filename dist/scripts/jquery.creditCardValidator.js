(function(){var _,y,c,w=[].indexOf||function(n){for(var r=0,t=this.length;r<t;r++)if(r in this&&this[r]===n)return r;return-1};function n(){this.trie={}}function g(n){if(this.trie=n,this.trie.constructor!==c)throw Error("Range constructor requires a Trie parameter")}(_=jQuery).fn.validateCreditCard=function(n,a){var i,l,e,u,o,r,t,h,c,g,f,s,v,p,d=[{name:"amex",range:"34,37",valid_length:[15]},{name:"diners_club_carte_blanche",range:"300-305",valid_length:[16,17,18,19]},{name:"diners_club_international",range:"3095, 36, 38-39",valid_length:[14,15,16,17,18,19]},{name:"jcb",range:"3088-3094, 3096-3102, 3112-3120, 3158-3159, 3337-3349, 3528-3589",valid_length:[16]},{name:"laser",range:"6304, 6706, 6709, 6771",valid_length:[16,17,18,19]},{name:"visa_electron",range:"4026, 417500, 4508, 4844, 4913, 4917",valid_length:[16]},{name:"visa",range:"4",valid_length:[13,14,15,16,17,18,19]},{name:"mastercard",range:"51-55,2221-2720",valid_length:[16]},{name:"discover",range:"6011, 622126-622925, 644-649, 65",valid_length:[16,17,18,19]},{name:"dankort",range:"5019",valid_length:[16]},{name:"maestro",range:"50, 56-69",valid_length:[12,13,14,15,16,17,18,19]},{name:"uatp",range:"1",valid_length:[15]},{name:"mir",range:"2200-2204",valid_length:[16]}],m=!1;for(n&&("object"==typeof n?(a=n,m=!1,n=null):"function"==typeof n&&(m=!0)),null==a&&(a={}),null==a.accept&&(a.accept=function(){for(var n=[],r=0,t=d.length;r<t;r++)i=d[r],n.push(i.name);return n}()),r=0,t=(c=a.accept).length;r<t;r++)if(l=c[r],w.call(function(){for(var n=[],r=0,t=d.length;r<t;r++)i=d[r],n.push(i.name);return n}(),l)<0)throw Error("Credit card type '"+l+"' is not supported");return e=function(n){for(var r=function(){for(var n,r=[],t=0,e=d.length;t<e;t++)n=(i=d[t]).name,0<=w.call(a.accept,n)&&r.push(i);return r}(),t=0,e=r.length;t<e;t++)if(l=r[t],y.rangeWithString(l.range).match(n))return l;return null},o=function(n){for(var r,t,e=0,a=n.split("").reverse(),i=t=0,l=a.length;t<l;i=++t)r=+(r=a[i]),e+=!(i%2)||(r*=2)<10?r:r-9;return e%10==0},u=function(n,r){n=n.length;return 0<=w.call(r.valid_length,n)},f=function(n){var r,t;return l=e(n),t=o(n),r=!1,null!=l&&(r=u(n,l)),{card_type:l,valid:t&&r,luhn_valid:t,length_valid:r}},s=this,g=function(){var n=h(_(s).val());return f(n)},h=function(n){return n.replace(/[ -]/g,"")},m?(this.on("input.jccv",(v=this,function(){return _(v).off("keyup.jccv"),n.call(v,g())})),this.on("keyup.jccv",(p=this,function(){return n.call(p,g())})),n.call(this,g()),this):g()},n.prototype.push=function(n){var r,t,e,a,i,l,u;for(n=n.toString(),i=this.trie,u=[],t=e=0,a=(l=n.split("")).length;e<a;t=++e)null==i[r=l[t]]&&(t===n.length-1?i[r]=null:i[r]={}),u.push(i=i[r]);return u},n.prototype.find=function(n){var r,t,e,a,i,l;for(n=n.toString(),i=this.trie,t=e=0,a=(l=n.split("")).length;e<a;t=++e){if(r=l[t],!i.hasOwnProperty(r))return!1;if(null===i[r])return!0;i=i[r]}},c=n,g.rangeWithString=function(n){var r,t,e,a,i,l,u,o,h;if("string"!=typeof n)throw Error("rangeWithString requires a string parameter");for(n=(n=n.replace(/ /g,"")).split(","),h=new c,r=0,e=n.length;r<e;r++)if(i=(l=n[r]).match(/^(\d+)-(\d+)$/))for(a=t=u=i[1],o=i[2];u<=o?t<=o:o<=t;a=u<=o?++t:--t)h.push(a);else{if(!l.match(/^\d+$/))throw Error("Invalid range '"+i+"'");h.push(l)}return new g(h)},g.prototype.match=function(n){return this.trie.find(n)},y=g}).call(this);
//# sourceMappingURL=jquery.creditCardValidator.js.map
