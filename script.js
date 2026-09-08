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
  topUserMeta.innerHTML=targetId==='reports-section' ? '<span>Customer: princegoyal2011@gmail.com</span>' : '<span class="live-dot"></span> सिस्टम कनेक्टेड';
 });
});

const messageBox=document.getElementById('messageBox');
const previewMessage=document.getElementById('previewMessage');
const charCount=document.getElementById('charCount');
const whatsappAccount=document.getElementById('whatsappAccount');
const previewNumber=document.getElementById('previewNumber');
const emojiBtn=document.getElementById('emojiBtn');
const attachBtn=document.getElementById('attachBtn');
const attachmentInput=document.getElementById('attachmentInput');
const scheduleBtn=document.getElementById('scheduleBtn');
const schedulePanel=document.getElementById('schedulePanel');
const scheduleDateTime=document.getElementById('scheduleDateTime');
const applyScheduleBtn=document.getElementById('applyScheduleBtn');
const scheduleStatus=document.getElementById('scheduleStatus');
const sendMessageBtn=document.getElementById('sendMessageBtn');
const uploadExcelBtn=document.getElementById('uploadExcelBtn');
const excelInput=document.getElementById('excelInput');
const removeDuplicatesBtn=document.getElementById('removeDuplicatesBtn');
const toNumber=document.getElementById('toNumber');

function updatePreview(){
 if(!messageBox) return;
 const text=messageBox.value.trim();
 if(previewMessage) previewMessage.textContent=text || 'Your message preview will appear here...';
 if(charCount) charCount.textContent=`${messageBox.value.length} / 4096`;
}

if(messageBox) messageBox.addEventListener('input',updatePreview);
if(whatsappAccount){
 const syncAccount=()=>{
  const selected=whatsappAccount.options[whatsappAccount.selectedIndex];
  const value=selected.value || '';
  if(previewNumber) previewNumber.textContent='+'+value.replace(/^(\d{2})/,'$1 ');
 };
 whatsappAccount.addEventListener('change',syncAccount);
 syncAccount();
}

if(emojiBtn){
 emojiBtn.addEventListener('click',()=>{
  const emoji='😊';
  const start=messageBox.selectionStart;
  const end=messageBox.selectionEnd;
  messageBox.value=messageBox.value.slice(0,start)+emoji+messageBox.value.slice(end);
  messageBox.focus();
  messageBox.selectionStart=messageBox.selectionEnd=start+emoji.length;
  updatePreview();
 });
}

if(attachBtn && attachmentInput){
 attachBtn.addEventListener('click',()=>attachmentInput.click());
 attachmentInput.addEventListener('change',()=>{
  if(attachmentInput.files.length) attachBtn.textContent='✓';
 });
}

if(uploadExcelBtn && excelInput){
 uploadExcelBtn.addEventListener('click',()=>excelInput.click());
 excelInput.addEventListener('change',()=>{
  if(excelInput.files.length) uploadExcelBtn.innerHTML='<span>✓</span> '+excelInput.files[0].name;
 });
}

if(removeDuplicatesBtn && toNumber){
 removeDuplicatesBtn.addEventListener('click',()=>{
  const numbers=toNumber.value.split(',').map(v=>v.trim()).filter(Boolean);
  const unique=[...new Set(numbers)];
  toNumber.value=unique.join(', ');
  removeDuplicatesBtn.innerHTML='<span>✓</span> Duplicates Removed';
  setTimeout(()=>removeDuplicatesBtn.innerHTML='<span>⌘</span> Remove Duplicates',1600);
 });
}

if(scheduleBtn && schedulePanel){
 scheduleBtn.addEventListener('click',()=>schedulePanel.classList.toggle('open'));
}
if(applyScheduleBtn && scheduleDateTime){
 applyScheduleBtn.addEventListener('click',()=>{
  if(!scheduleDateTime.value){scheduleStatus.textContent='Choose date & time';return;}
  const date=new Date(scheduleDateTime.value);
  scheduleStatus.textContent='Scheduled • '+date.toLocaleString([], {day:'2-digit',month:'short',hour:'2-digit',minute:'2-digit'});
  schedulePanel.classList.remove('open');
 });
}

document.addEventListener('click',(event)=>{
 if(schedulePanel && scheduleBtn && !schedulePanel.contains(event.target) && !scheduleBtn.contains(event.target)) schedulePanel.classList.remove('open');
});

if(sendMessageBtn){
 sendMessageBtn.addEventListener('click',()=>{
  const original=sendMessageBtn.textContent;
  sendMessageBtn.textContent='✓';
  setTimeout(()=>sendMessageBtn.textContent=original,1100);
 });
}

updatePreview();
