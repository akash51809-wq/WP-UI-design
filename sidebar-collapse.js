(function(){
  function initSidebarCollapse(){
    const sidebar=document.querySelector('.sidebar');
    if(!sidebar || sidebar.querySelector('.sidebar-collapse-btn')) return;
    const btn=document.createElement('button');
    btn.className='sidebar-collapse-btn';
    btn.type='button';
    btn.setAttribute('aria-label','Collapse sidebar');
    btn.setAttribute('title','Collapse / Expand menu');
    btn.textContent='‹';
    sidebar.style.position='fixed';
    sidebar.appendChild(btn);
    const saved=localStorage.getItem('sidebarCollapsed')==='1';
    if(saved){sidebar.classList.add('collapsed');document.body.classList.add('sidebar-collapsed');btn.textContent='›';btn.setAttribute('aria-label','Expand sidebar');}
    btn.addEventListener('click',function(){
      const collapsed=sidebar.classList.toggle('collapsed');
      document.body.classList.toggle('sidebar-collapsed',collapsed);
      localStorage.setItem('sidebarCollapsed',collapsed?'1':'0');
      btn.textContent=collapsed?'›':'‹';
      btn.setAttribute('aria-label',collapsed?'Expand sidebar':'Collapse sidebar');
    });
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',initSidebarCollapse); else initSidebarCollapse();
})();
