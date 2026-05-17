(function () {
  const LINKS = [
    { href: 'index.html',      label: 'Inicio' },
    { href: 'fotos.html',      label: 'Fotos' },
    { href: 'noticias.html',   label: 'Noticias' },
    { href: 'junta.html',      label: 'La Junta' },
    { href: 'eventos.html',    label: 'Eventos' },
    { href: 'conocenos.html',  label: 'Conócenos' },
    { href: 'haztesocio.html', label: 'Hazte Socio' },
    { href: 'sugerencias.html',label: 'Sugerencias' },
    { href: 'juegos.html',     label: 'Juegos' },
    { href: 'cumpleanos.html', label: 'Cumpleaños' },
  ];

  const page = location.pathname.split('/').pop() || 'index.html';

  const linksHtml = LINKS.map(l =>
    `<a href="${l.href}" class="nav-link${page === l.href ? ' activa' : ''}">${l.label}</a>`
  ).join('');

  const tvBtn = page === 'fotos.html'
    ? '<button class="btn-header" onclick="abrirTV()">▶ TV</button>' : '';

  const style = `<style>
    .nav{position:sticky;top:0;z-index:100;background:#0047ab;box-shadow:0 2px 20px rgba(0,0,0,.5)}
    .nav-inner{max-width:1000px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;padding:0 16px;height:56px}
    .nav-logo{color:#fff;font-weight:900;font-size:clamp(.85rem,2.5vw,1.05rem);text-decoration:none;letter-spacing:.05em;text-transform:uppercase}
    .nav-links{display:flex;gap:4px}
    .nav-link{color:rgba(255,255,255,.8);text-decoration:none;padding:7px 13px;border-radius:8px;font-size:.85rem;font-weight:600;transition:background .2s}
    .nav-link:hover,.nav-link.activa{background:rgba(255,255,255,.2);color:#fff}
    .nav-right{display:flex;align-items:center;gap:8px;flex-shrink:0}
    .btn-header{background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.25);color:#fff;border-radius:8px;padding:7px 12px;font-size:.75rem;cursor:pointer;white-space:nowrap;transition:background .2s;text-decoration:none}
    .btn-header:hover{background:rgba(255,255,255,.25)}
    .nav-burger{display:none;background:none;border:none;color:#fff;font-size:1.4rem;cursor:pointer;padding:4px 8px}
    @media(max-width:620px){
      .nav-links{display:none;position:absolute;top:56px;left:0;right:0;background:#0047ab;flex-direction:column;padding:8px;z-index:99;box-shadow:0 4px 20px rgba(0,0,0,.5)}
      .nav-links.open{display:flex}
      .nav-burger{display:block}
    }
  </style>`;

  const html = `${style}
  <nav class="nav">
    <div class="nav-inner">
      <a href="index.html" class="nav-logo">Peña el Revuelto</a>
      <div class="nav-links" id="nav-links">${linksHtml}</div>
      <div class="nav-right">
        ${tvBtn}
        <a href="admin.html" class="btn-header">⚙ Admin</a>
        <button class="nav-burger" onclick="document.getElementById('nav-links').classList.toggle('open')">☰</button>
      </div>
    </div>
  </nav>`;

  document.currentScript.insertAdjacentHTML('beforebegin', html);
})();
