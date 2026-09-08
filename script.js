const menuItems=document.querySelectorAll('#sidebarMenu li');
const sections=document.querySelectorAll('.content-body-area');
const topNavTitle=document.getElementById('topNavTitle');
const topUserMeta=document.getElementById('topUserMeta');

menuItems.forEach(item=>{
    item.addEventListener('click',()=>{
        menuItems.forEach(i=>i.classList.remove('active'));
        sections.forEach(s=>s.classList.remove('active-section'));
        item.classList.add('active');
        const targetId=item.getAttribute('data-target');
        const targetSection=document.getElementById(targetId);
        if(targetSection) targetSection.classList.add('active-section');
        topNavTitle.innerText=item.querySelector('a').innerText.trim();
        topUserMeta.innerHTML=targetId==='reports-section'
            ? '<span>Customer: princegoyal2011@gmail.com</span>'
            : '<span>🟢 सिस्टम कनेक्टेड</span>';
    });
});