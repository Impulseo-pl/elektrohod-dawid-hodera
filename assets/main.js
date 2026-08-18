/* ElektroHod - menu, reveal, licznik otwarć dema */
(function () {
  var tgl = document.getElementById('tgl'), menu = document.getElementById('menu');
  if (tgl && menu) {
    tgl.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      tgl.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    menu.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { menu.classList.remove('open'); tgl.setAttribute('aria-expanded', 'false'); }
    });
  }
})();

(function () {
  try {
    var els = document.querySelectorAll('.reveal');
    if (!els.length) return;
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      for (var i = 0; i < els.length; i++) els[i].classList.add('in');
      return;
    }
    document.documentElement.classList.add('rv-on');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var el = en.target, sibs = el.parentNode ? el.parentNode.children : [el], idx = 0;
        for (var k = 0; k < sibs.length; k++) { if (sibs[k] === el) { idx = k; break; } }
        el.style.transitionDelay = Math.min(idx, 4) * 70 + 'ms';
        el.classList.add('in');
        io.unobserve(el);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });
    for (var j = 0; j < els.length; j++) io.observe(els[j]);
    // bezpiecznik: karta otwarta w tle bywa pomijana przez obserwatora
    setTimeout(function () {
      for (var m = 0; m < els.length; m++) els[m].classList.add('in');
    }, 3500);
  } catch (e) {
    var all = document.querySelectorAll('.reveal');
    for (var n = 0; n < all.length; n++) all[n].classList.add('in');
  }
})();
(function(){try{if(String(location.protocol).indexOf('http')!==0)return;try{if(/[?&#]team=1/.test(location.search+location.hash)){localStorage.setItem('nb_team','1');}}catch(e){}try{if(localStorage.getItem('nb_team')==='1')return;}catch(e){}if((document.referrer||'').indexOf('crm-newbeginning')>-1)return;try{if(navigator.webdriver)return;}catch(e){}try{if(/^https?:\/\/(kris20032|impulseo-pl)\.github\.io\/?$/i.test(document.referrer||''))return;}catch(e){}if(sessionStorage.getItem('_dv'))return;sessionStorage.setItem('_dv','1');var seg=(location.pathname.split('/').filter(Boolean)[0])||'';var base=location.origin+(seg?('/'+seg):'');var ua='';try{ua=(navigator.userAgent||'').slice(0,300);}catch(e){}var EP='https://zngfubfinbojfgaxdrbf.supabase.co/rest/v1/demo_views';var KEY='sb_publishable_MWwoyGlSCWnJ4awtOPF0ow_ZVS0Y8qK';function send(g){try{fetch(EP,{method:'POST',keepalive:true,headers:{'Content-Type':'application/json','apikey':KEY,'Authorization':'Bearer '+KEY,'Prefer':'return=minimal'},body:JSON.stringify({demo_url:base,page:location.pathname,referrer:(document.referrer||null),user_agent:(ua||null),ip:(g&&g.ip)||null,country:(g&&g.cc)||null,city:(g&&g.city)||null})}).catch(function(){});}catch(e){}}var done=false;function once(g){if(done)return;done=true;send(g);}try{var t=setTimeout(function(){once(null);},1500);fetch('https://ipwho.is/?fields=ip,success,country_code,city',{cache:'no-store'}).then(function(r){return r.json();}).then(function(d){clearTimeout(t);once(d&&d.success!==false?{ip:d.ip,cc:d.country_code,city:d.city}:null);}).catch(function(){clearTimeout(t);once(null);});}catch(e){once(null);}}catch(e){}})();
