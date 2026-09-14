document.addEventListener('DOMContentLoaded',()=>{
  const menu=document.getElementById('sidebarMenu');
  const main=document.querySelector('.main-container');
  if(!menu||!main)return;

  const pages=[
    ['dashboard-section','⌂','Dashboard'],
    ['device-section','▣','Device'],
    ['send-message-section','↗','Send message'],
    ['incoming-section','▤','Inbox'],
    ['reports-section','▥','Reports'],
    ['msg-report-section','▥','msg report'],
    ['campaigns-section','◇','campaigns'],
    ['templates-section','▧','templated'],
    ['contacts-section','♙','Contacts'],
    ['settings-section','⚙','Settings'],
    ['plans-section','◆','Plans'],
    ['api-docs-section','⌘','API Docs']
  ];

  const oldSections={};
  document.querySelectorAll('.content-body-area').forEach(s=>oldSections[s.id]=s);

  // Existing Numbers page becomes the requested Device page.
  const numbers=document.getElementById('numbers-section');
  if(numbers){numbers.id='device-section';numbers.innerHTML='<div class="premium-page"><div class="premium-hero"><div><span class="section-kicker">DEVICE MANAGEMENT</span><h2>Device</h2><p>Manage connected WhatsApp devices, sessions and connection status.</p></div><button class="btn-primary">＋ Add Device</button></div><div class="premium-grid"><article class="premium-card"><div class="card-head"><div><h3>Connected Device</h3><p>Current WhatsApp session</p></div><span class="status success">Online</span></div><div style="padding:20px;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px"><div><small>Device Name</small><strong style="display:block;margin-top:6px">Prince Goyal</strong></div><div><small>WhatsApp Number</small><strong style="display:block;margin-top:6px">+91 98765 43210</strong></div><div><small>Connection</small><strong style="display:block;margin-top:6px">Active</strong></div></div><div style="padding:0 20px 20px;display:flex;gap:10px"><button class="btn-primary">Reconnect</button><button class="btn-secondary">Logout Device</button></div></article></div></div>'}

  const ensure=(id,title,kicker,html)=>{
    let el=document.getElementById(id);
    if(!el){el=document.createElement('section');el.id=id;el.className='content-body-area';main.insertBefore(el,document.querySelector('.app-footer'));}
    el.innerHTML='<div class="premium-page"><div class="premium-hero"><div><span class="section-kicker">'+kicker+'</span><h2>'+title+'</h2><p>'+title+' management and controls.</p></div></div>'+html+'</div>';
    return el;
  };

  ensure('contacts-section','Contacts','CONTACT MANAGEMENT','<div class="premium-grid"><article class="premium-card"><div class="card-head"><div><h3>Contact List</h3><p>Manage your WhatsApp contacts and groups.</p></div><button class="btn-primary">＋ Add Contact</button></div><div class="table-wrap"><table><thead><tr><th>Name</th><th>Mobile Number</th><th>Type</th><th>Status</th><th>Action</th></tr></thead><tbody><tr><td><strong>Rahul Sharma</strong></td><td>+91 98765 43210</td><td>Customer</td><td><span class="status success">Active</span></td><td><button class="eye">◉</button></td></tr><tr><td><strong>Ravi Kumar</strong></td><td>+91 98123 45678</td><td>Customer</td><td><span class="status success">Active</span></td><td><button class="eye">◉</button></td></tr><tr><td><strong>Business Group</strong></td><td>Group</td><td>Group</td><td><span class="status incoming">Connected</span></td><td><button class="eye">◉</button></td></tr></tbody></table></div></article></div>');
  ensure('plans-section','Plans','PLANS & BILLING','<div class="premium-grid"><article class="premium-card"><div class="card-head"><div><h3>Current Plan</h3><p>Your WhatsApp automation subscription</p></div><span class="status success">Active</span></div><div style="padding:20px"><h3 style="font-size:28px">Professional</h3><p style="margin-top:8px">Unlimited messaging tools, campaigns, inbox and API access.</p><div style="display:flex;gap:10px;margin-top:20px"><button class="btn-primary">Upgrade Plan</button><button class="btn-secondary">View Billing</button></div></div></article><article class="premium-card"><div class="card-head"><div><h3>Available Plans</h3><p>Choose the plan that fits your business.</p></div></div><div style="padding:20px;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px"><div class="premium-card" style="padding:18px"><h3>Starter</h3><p>For small businesses</p><strong style="display:block;margin:14px 0;font-size:24px">₹499/mo</strong><button class="btn-secondary">Choose</button></div><div class="premium-card" style="padding:18px"><h3>Professional</h3><p>For growing teams</p><strong style="display:block;margin:14px 0;font-size:24px">₹999/mo</strong><button class="btn-primary">Current</button></div><div class="premium-card" style="padding:18px"><h3>Enterprise</h3><p>For high-volume usage</p><strong style="display:block;margin:14px 0;font-size:24px">Custom</strong><button class="btn-secondary">Contact</button></div></div></article></div>');
  ensure('api-docs-section','API Docs','DEVELOPER API','<div class="premium-grid"><article class="premium-card"><div class="card-head"><div><h3>WhatsApp API</h3><p>Connect your application with the messaging platform.</p></div><button class="btn-primary">Generate Token</button></div><div style="padding:20px"><div style="padding:16px;border:1px solid var(--border);border-radius:12px;margin-bottom:14px"><strong>Send Message</strong><pre style="margin-top:10px;white-space:pre-wrap">POST /api/send
Authorization: Bearer YOUR_TOKEN
{
  "to": "919876543210",
  "message": "Hello"
}</pre></div><div style="padding:16px;border:1px solid var(--border);border-radius:12px"><strong>Session Status</strong><pre style="margin-top:10px;white-space:pre-wrap">GET /api/session/status</pre></div></div></article></div>');

  // Replace the old sidebar completely so stale items cannot remain visible.
  menu.innerHTML=pages.map((p,i)=>'<li data-target="'+p[0]+'"'+(i===0?' class="active"':'')+'><a href="#'+p[0]+'"><span>'+p[1]+'</span>'+p[2]+'</a></li>').join('');

  const allSections=[...document.querySelectorAll('.content-body-area')];
  const items=[...menu.querySelectorAll('li')];
  const activate=(item)=>{
    const id=item.dataset.target;
    items.forEach(i=>i.classList.toggle('active',i===item));
    allSections.forEach(s=>s.classList.toggle('active-section',s.id===id));
    const title=document.getElementById('topNavTitle');
    if(title)title.textContent=item.querySelector('a').innerText.trim();
    const meta=document.getElementById('topUserMeta');
    if(meta)meta.innerHTML=id==='reports-section'?'<span>Customer: princegoyal2011@gmail.com</span>':'<span class="live-dot"></span> सिस्टम कनेक्टेड';
    if(id==='incoming-section'&&typeof loadIncoming==='function')loadIncoming();
    if(id==='settings-section'&&typeof mountSettings==='function')mountSettings();
  };
  items.forEach(item=>item.addEventListener('click',e=>{e.preventDefault();activate(item);}));
  activate(items[0]);

  // Make dashboard quick-action links use the new page names where possible.
  document.querySelectorAll('.quick-card button').forEach(btn=>{
    const text=btn.innerText.trim().toLowerCase();
    const target=text.includes('send')?'send-message-section':text.includes('incoming')?'incoming-section':text.includes('campaign')?'campaigns-section':text.includes('number')?'device-section':text.includes('template')?'templates-section':text.includes('report')?'reports-section':null;
    if(target){btn.addEventListener('click',()=>{const item=menu.querySelector('[data-target="'+target+'"]');if(item)activate(item);});}
  });
});