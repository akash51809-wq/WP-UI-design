(function(){
  function addSendMessageDesign(){
    var section=document.getElementById('send-message-section');
    if(!section || section.dataset.sendDesigned==='1') return;
    section.dataset.sendDesigned='1';

    section.innerHTML=`
      <div class="send-ref-page">
        <div class="send-ref-head">
          <div>
            <span class="send-ref-kicker">WHATSAPP MESSAGING</span>
            <h2>Send WhatsApp Message</h2>
            <p>Send messages to one or multiple WhatsApp numbers quickly.</p>
          </div>
          <div class="send-ref-head-actions">
            <span class="send-ref-status"><i></i> WhatsApp Connected</span>
            <button type="button" class="send-ref-primary" id="refSendMessage">➤ Send Message</button>
          </div>
        </div>

        <div class="send-ref-layout">
          <div class="send-ref-main">
            <div class="send-ref-card recipient-card">
              <div class="send-ref-card-title"><div><b>Choose WhatsApp</b><small>Select the connected WhatsApp account</small></div><span class="ref-step">01</span></div>
              <div class="send-ref-grid two">
                <label class="send-ref-field"><span>WHATSAPP ACCOUNT</span><select id="refWhatsapp"><option>Choose WhatsApp</option><option>Prince Goyal · +91 98765 43210</option><option>Business Account · +91 98123 45678</option></select></label>
                <label class="send-ref-field"><span>MOBILE NUMBER</span><input id="refMobile" type="text" placeholder="Enter mobile number"></label>
              </div>
              <div class="send-ref-source-row">
                <button type="button" class="send-ref-source" id="refExcel"><strong>▣</strong><span><b>Excel</b><small>Upload recipient list</small></span></button>
                <button type="button" class="send-ref-source" id="refRemoveDuplicates"><strong>⌘</strong><span><b>Remove Duplicates</b><small>Clean duplicate numbers</small></span></button>
                <input id="refExcelInput" type="file" accept=".xlsx,.xls,.csv" hidden>
              </div>
              <div class="ref-recipient-count" id="refRecipientCount">0 recipients selected</div>
            </div>

            <div class="send-ref-card message-card">
              <div class="send-ref-card-title"><div><b>Type Message</b><small>Write your WhatsApp message</small></div><span class="ref-step">02</span></div>
              <div class="ref-message-toolbar">
                <button type="button" title="Emoji">☺</button><button type="button" title="Attachment" id="refAttachment">📎</button><button type="button" title="Template">▧</button><button type="button" title="Schedule">◷</button>
                <span id="refCharCount">0 / 4096</span>
                <input id="refAttachmentInput" type="file" hidden>
              </div>
              <textarea id="refMessageBox" class="ref-message-box" maxlength="4096" placeholder="Type your message here..."></textarea>
              <div class="ref-message-footer"><span>📎 Attachment supported</span><span>Maximum 4096 characters</span></div>
            </div>

            <div class="send-ref-card live-preview-card">
              <div class="send-ref-card-title"><div><b>Live Preview</b><small>See exactly how your message will look</small></div><span class="ref-live"><i></i> Live</span></div>
              <div class="ref-preview-area">
                <div class="ref-phone">
                  <div class="ref-phone-head"><div class="ref-phone-avatar">PG</div><div><b>Prince Goyal</b><small>online</small></div><span>⋮</span></div>
                  <div class="ref-phone-wall"><div class="ref-preview-bubble" id="refPreviewMessage">Your message preview will appear here...</div></div>
                  <div class="ref-phone-bottom"><span>☺</span><span>📎</span><div></div><b>➤</b></div>
                </div>
              </div>
            </div>
          </div>

          <aside class="send-ref-help">
            <div class="send-ref-help-card">
              <div class="help-head"><div class="help-icon">?</div><div><span>QUICK GUIDE</span><h3>How to Use</h3></div></div>
              <div class="help-step"><div>1</div><section><b>Choose WhatsApp</b><p>Select your connected WhatsApp account from the dropdown.</p></section></div>
              <div class="help-step"><div>2</div><section><b>Add Mobile Number</b><p>Enter a number manually or upload multiple numbers through Excel.</p></section></div>
              <div class="help-step"><div>3</div><section><b>Remove Duplicates</b><p>Use the button to automatically clean repeated numbers from your list.</p></section></div>
              <div class="help-step"><div>4</div><section><b>Type Message</b><p>Write your message, add an attachment or select a template.</p></section></div>
              <div class="help-step"><div>5</div><section><b>Preview & Send</b><p>Check the live preview and press Send Message when ready.</p></section></div>
              <div class="help-tip"><b>💡 Pro Tip</b><span>For bulk messaging, Excel upload is faster and keeps your recipient list organized.</span></div>
            </div>
          </aside>
        </div>
      </div>`;

    if(!document.getElementById('send-ref-style')){
      var style=document.createElement('style');
      style.id='send-ref-style';
      style.textContent=`
      .send-ref-page{width:100%;max-width:none;padding:0 0 28px;color:#101828}
      .send-ref-head{display:flex;justify-content:space-between;align-items:center;gap:18px;margin-bottom:16px;padding:2px 2px}
      .send-ref-kicker{font-size:10px;font-weight:800;letter-spacing:1.5px;color:#ff6508}
      .send-ref-head h2{margin:4px 0 3px;font-size:22px;line-height:1.2;color:#101828}
      .send-ref-head p{margin:0;color:#667085;font-size:12px}
      .send-ref-head-actions{display:flex;align-items:center;gap:12px}
      .send-ref-status{display:flex;align-items:center;gap:7px;padding:9px 12px;background:#ecfdf3;border:1px solid #abefc6;border-radius:10px;color:#027a48;font-size:11px;font-weight:700;box-shadow:0 3px 0 #b7dfc8}
      .send-ref-status i,.ref-live i{width:7px;height:7px;border-radius:50%;background:#12b76a;display:inline-block}
      .send-ref-primary{padding:11px 17px!important;border:1px solid #d94f00!important;border-radius:10px!important;background:#ff6508!important;color:#fff!important;font-weight:800!important;box-shadow:0 4px 0 #d94f00,0 8px 15px rgba(255,101,8,.2)!important;cursor:pointer}
      .send-ref-primary:hover{transform:translateY(-2px)!important;background:#f45d05!important}
      .send-ref-layout{display:grid;grid-template-columns:minmax(0,1fr) 315px;gap:16px;align-items:start}
      .send-ref-main{min-width:0;display:grid;gap:14px}
      .send-ref-card,.send-ref-help-card{background:#fff;border:1px solid #e4e7ec;border-radius:14px;box-shadow:0 6px 18px rgba(16,24,40,.08);overflow:hidden}
      .send-ref-card-title{display:flex;justify-content:space-between;align-items:center;padding:13px 16px;border-bottom:1px solid #eaecf0;background:#fff}
      .send-ref-card-title b{display:block;font-size:13px;color:#101828}.send-ref-card-title small{display:block;margin-top:3px;font-size:10px;color:#667085}.ref-step{display:grid;place-items:center;width:28px;height:28px;border-radius:8px;background:#fff1e8;color:#ff6508;font-size:10px;font-weight:900;border:1px solid #fed7aa}
      .send-ref-grid.two{display:grid;grid-template-columns:1.15fr 1fr;gap:12px;padding:14px 16px 10px}
      .send-ref-field{display:flex;flex-direction:column;gap:6px}.send-ref-field>span{font-size:9px;font-weight:800;letter-spacing:.7px;color:#475467}.send-ref-field input,.send-ref-field select{width:100%;height:42px;border:1px solid #d0d5dd;border-radius:9px;background:#fff;color:#344054;padding:0 11px;font-size:12px;outline:none;box-shadow:inset 0 1px 2px rgba(16,24,40,.04)}.send-ref-field input:focus,.send-ref-field select:focus{border-color:#ff6508;box-shadow:0 0 0 3px rgba(255,101,8,.1)}
      .send-ref-source-row{display:grid;grid-template-columns:1fr 1fr;gap:10px;padding:0 16px 10px}.send-ref-source{display:flex;align-items:center;gap:10px;text-align:left;min-height:58px;padding:9px 11px!important;background:#fff!important;border:1px solid #d0d5dd!important;border-radius:10px!important;box-shadow:0 3px 0 #c4c8ce,0 6px 10px rgba(16,24,40,.07)!important;cursor:pointer}.send-ref-source:hover{border-color:#ff6508!important;background:#fff7ed!important;transform:translateY(-2px)}.send-ref-source strong{width:35px;height:35px;display:grid;place-items:center;border-radius:9px;background:#fff1e8;color:#ff6508;font-size:16px}.send-ref-source span{min-width:0}.send-ref-source b{display:block;color:#344054;font-size:11px}.send-ref-source small{display:block;color:#98a2b3;font-size:9px;margin-top:2px}.ref-recipient-count{margin:0 16px 13px;padding:7px 9px;background:#f9fafb;border:1px solid #eaecf0;border-radius:8px;color:#667085;font-size:10px}
      .message-card{position:relative}.ref-message-toolbar{display:flex;align-items:center;gap:6px;padding:10px 16px 0}.ref-message-toolbar button{width:31px;height:29px;padding:0!important;border-radius:8px!important;font-size:14px}.ref-message-toolbar span{margin-left:auto;font-size:9px;color:#98a2b3}.ref-message-box{display:block;width:calc(100% - 32px);margin:8px 16px 0;min-height:118px;resize:vertical;border:1px solid #d0d5dd;border-radius:11px;background:#fff;color:#344054;padding:12px;font-size:12px;line-height:1.55;outline:none}.ref-message-box:focus{border-color:#ff6508;box-shadow:0 0 0 3px rgba(255,101,8,.1)}.ref-message-footer{display:flex;justify-content:space-between;padding:7px 16px 13px;color:#98a2b3;font-size:9px}
      .ref-live{display:flex;align-items:center;gap:6px;padding:5px 8px;border-radius:7px;background:#ecfdf3;color:#027a48;font-size:9px;font-weight:800}.ref-preview-area{padding:14px;background:#f8fafc;display:flex;justify-content:center}.ref-phone{width:min(100%,400px);border:5px solid #344054;border-radius:18px;background:#fff;overflow:hidden;box-shadow:0 8px 18px rgba(16,24,40,.12)}.ref-phone-head{height:48px;display:flex;align-items:center;gap:9px;padding:7px 11px;background:#fff;border-bottom:1px solid #eaecf0}.ref-phone-avatar{width:31px;height:31px;border-radius:50%;display:grid;place-items:center;background:#ff6508;color:#fff;font-size:10px;font-weight:900}.ref-phone-head b{font-size:11px;color:#344054}.ref-phone-head small{display:block;color:#12b76a;font-size:8px;margin-top:1px}.ref-phone-head>span{margin-left:auto;color:#667085}.ref-phone-wall{min-height:150px;padding:15px 12px;background:#f8fafc;display:flex;align-items:flex-end}.ref-preview-bubble{max-width:82%;padding:9px 11px;border-radius:10px 10px 3px 10px;background:#fff1e8;border:1px solid #fed7aa;color:#7a2e0b;font-size:10px;line-height:1.45;box-shadow:0 3px 8px rgba(16,24,40,.06)}.ref-phone-bottom{display:flex;align-items:center;gap:7px;padding:7px 9px;border-top:1px solid #eaecf0;background:#fff;color:#667085;font-size:12px}.ref-phone-bottom div{height:28px;flex:1;border:1px solid #d0d5dd;border-radius:14px;background:#f9fafb}.ref-phone-bottom b{width:28px;height:28px;border-radius:50%;display:grid;place-items:center;background:#ff6508;color:#fff;font-size:12px}
      .send-ref-help{position:sticky;top:10px}.send-ref-help-card{padding:0}.help-head{display:flex;align-items:center;gap:10px;padding:15px 15px 13px;background:#fff7ed;border-bottom:1px solid #fed7aa}.help-icon{width:34px;height:34px;border-radius:10px;display:grid;place-items:center;background:#ff6508;color:#fff;font-weight:900;font-size:16px;box-shadow:0 3px 0 #d94f00}.help-head span{font-size:8px;letter-spacing:1px;font-weight:800;color:#ff6508}.help-head h3{margin:2px 0 0;font-size:15px;color:#101828}.help-step{display:flex;gap:10px;padding:11px 13px;border-bottom:1px solid #f0f2f5}.help-step>div{flex:0 0 25px;width:25px;height:25px;border-radius:50%;display:grid;place-items:center;background:#fff1e8;border:1px solid #fed7aa;color:#ff6508;font-weight:900;font-size:10px}.help-step section{min-width:0}.help-step b{display:block;color:#344054;font-size:10px}.help-step p{margin:3px 0 0;color:#667085;font-size:9px;line-height:1.45}.help-tip{margin:12px;padding:10px;border-radius:9px;background:#fff7ed;border:1px solid #fed7aa;color:#7a2e0b}.help-tip b{display:block;font-size:9px;color:#ff6508;margin-bottom:3px}.help-tip span{font-size:9px;line-height:1.45;display:block}
      @media(max-width:900px){.send-ref-layout{grid-template-columns:1fr}.send-ref-help{position:static}.send-ref-grid.two{grid-template-columns:1fr}}
      @media(max-width:620px){.send-ref-head{align-items:flex-start;flex-direction:column}.send-ref-head-actions{width:100%;justify-content:space-between}.send-ref-source-row{grid-template-columns:1fr}.send-ref-head h2{font-size:19px}}
      `;
      document.head.appendChild(style);
    }

    var msg=document.getElementById('refMessageBox'), preview=document.getElementById('refPreviewMessage'), count=document.getElementById('refCharCount');
    if(msg){msg.addEventListener('input',function(){if(preview) preview.textContent=msg.value.trim()||'Your message preview will appear here...';if(count) count.textContent=msg.value.length+' / 4096';});}
    var excel=document.getElementById('refExcel'), excelInput=document.getElementById('refExcelInput');
    if(excel && excelInput){excel.addEventListener('click',function(){excelInput.click()});excelInput.addEventListener('change',function(){var n=excelInput.files&&excelInput.files[0]?excelInput.files[0].name:'';if(n) document.getElementById('refRecipientCount').textContent='Excel selected: '+n;});}
    var attachment=document.getElementById('refAttachment'), attachmentInput=document.getElementById('refAttachmentInput');
    if(attachment && attachmentInput){attachment.addEventListener('click',function(){attachmentInput.click()});attachmentInput.addEventListener('change',function(){var n=attachmentInput.files&&attachmentInput.files[0]?attachmentInput.files[0].name:'';if(n) attachment.textContent='✓';});}
    var duplicate=document.getElementById('refRemoveDuplicates');
    if(duplicate) duplicate.addEventListener('click',function(){var mobile=document.getElementById('refMobile');if(mobile&&mobile.value){var nums=mobile.value.split(/[,\s]+/).filter(Boolean);var clean=[...new Set(nums)];mobile.value=clean.join(', ');document.getElementById('refRecipientCount').textContent=clean.length+' unique recipient(s)';}else{document.getElementById('refRecipientCount').textContent='Enter recipient numbers first';}});
    var send=document.getElementById('refSendMessage');
    if(send) send.addEventListener('click',function(){var box=document.getElementById('refMessageBox');if(!box||!box.value.trim()){alert('Please type a message first.');return;}alert('Message is ready to send.');});
  }

  function initApp(){
    var sidebar=document.querySelector('.sidebar');
    var dashboard=document.getElementById('dashboard-section');
    document.documentElement.style.height='100%';
    document.body.style.height='100vh';
    document.body.style.margin='0';
    document.body.style.display='flex';
    if(dashboard){dashboard.style.display='flex';dashboard.style.flexDirection='column';dashboard.style.visibility='visible';dashboard.style.opacity='1';}
    addSendMessageDesign();
    if(!sidebar) return;
    if(sidebar.querySelector('.sidebar-collapse-btn')) return;
    var btn=document.createElement('button');btn.className='sidebar-collapse-btn';btn.type='button';btn.setAttribute('aria-label','Collapse sidebar');btn.setAttribute('title','Collapse / Expand menu');btn.textContent='‹';sidebar.style.position='fixed';sidebar.appendChild(btn);
    var saved=false;try{saved=localStorage.getItem('sidebarCollapsed')==='1';}catch(e){}
    if(saved){sidebar.classList.add('collapsed');document.body.classList.add('sidebar-collapsed');btn.textContent='›';btn.setAttribute('aria-label','Expand sidebar');}
    btn.addEventListener('click',function(){var collapsed=sidebar.classList.toggle('collapsed');document.body.classList.toggle('sidebar-collapsed',collapsed);try{localStorage.setItem('sidebarCollapsed',collapsed?'1':'0');}catch(e){}btn.textContent=collapsed?'›':'‹';btn.setAttribute('aria-label',collapsed?'Expand sidebar':'Collapse sidebar');});
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',initApp); else initApp();
})();
