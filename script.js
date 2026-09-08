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
  topUserMeta.innerHTML=targetId==='reports-section' ? '<span>Customer: princegoyal2011@gmail.com</span>' : '<span>🟢 सिस्टम कनेक्टेड</span>';
 });
});

const messageBox=document.getElementById('messageBox');
const previewMessage=document.getElementById('previewMessage');
const charCount=document.getElementById('charCount');
if(messageBox){
 const updatePreview=()=>{
  const text=messageBox.value.trim();
  previewMessage.textContent=text || 'नमस्ते! यह आपका भेजा जाने वाला बल्क मैसेज का लाइव प्रीव्यू है। संदेश यहाँ इसी प्रकार दिखाई देगा।';
  charCount.textContent=`${messageBox.value.length} / 4096`;
 };
 messageBox.addEventListener('input',updatePreview);
 updatePreview();
}

document.querySelectorAll('.secondary-btn,.remove-btn').forEach(btn=>btn.addEventListener('click',()=>{
 if(messageBox){messageBox.value='';messageBox.dispatchEvent(new Event('input'));}
}));
