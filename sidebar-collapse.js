(function(){
  function initApp(){
    var sidebar=document.querySelector('.sidebar');
    var dashboard=document.getElementById('dashboard-section');

    /* Emergency render guard: never leave the app on a blank white page. */
    document.documentElement.style.height='100%';
    document.body.style.height='100vh';
    document.body.style.margin='0';
    document.body.style.display='flex';
    if(dashboard){
      dashboard.style.display='flex';
      dashboard.style.flexDirection='column';
      dashboard.style.visibility='visible';
      dashboard.style.opacity='1';
    }

    if(!sidebar) return;
    if(sidebar.querySelector('.sidebar-collapse-btn')) return;

    var btn=document.createElement('button');
    btn.className='sidebar-collapse-btn';
    btn.type='button';
    btn.setAttribute('aria-label','Collapse sidebar');
    btn.setAttribute('title','Collapse / Expand menu');
    btn.textContent='‹';
    sidebar.style.position='fixed';
    sidebar.appendChild(btn);

    var saved=false;
    try{saved=localStorage.getItem('sidebarCollapsed')==='1';}catch(e){}
    if(saved){
      sidebar.classList.add('collapsed');
      document.body.classList.add('sidebar-collapsed');
      btn.textContent='›';
      btn.setAttribute('aria-label','Expand sidebar');
    }

    btn.addEventListener('click',function(){
      var collapsed=sidebar.classList.toggle('collapsed');
      document.body.classList.toggle('sidebar-collapsed',collapsed);
      try{localStorage.setItem('sidebarCollapsed',collapsed?'1':'0');}catch(e){}
      btn.textContent=collapsed?'›':'‹';
      btn.setAttribute('aria-label',collapsed?'Expand sidebar':'Collapse sidebar');
    });
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',initApp); else initApp();
})();
