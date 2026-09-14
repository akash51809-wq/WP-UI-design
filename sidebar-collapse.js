(function(){
  function addSendMessageDesign(){
    var section=document.getElementById('send-message-section');
    if(!section || section.dataset.sendDesigned==='2') return;
    section.dataset.sendDesigned='2';

    section.innerHTML=`
      <div class="send3d-page">
        <div class="send3d-layout">
          <aside class="send3d-tools">
            <div class="send3d-panel-head">
              <span class="send3d-eyebrow">SEND MESSAGE</span>
              <h2>Choose WhatsApp</h2>
            </div>

            <label class="send3d-label">Choose WhatsApp</label>
            <select id="whatsappAccount" class="send3d-select">
              <option>Choose WhatsApp</option>
              <option>Prince Goyal · +91 98765 43210</option>
              <option>Business Account · +91 98123 45678</option>
            </select>

            <label class="send3d-label">Mobile Number</label>
            <input id="toNumber" class="send3d-input" type="text" placeholder="Enter mobile number">

            <div class="send3d-mini-actions">
              <button type="button" id="uploadExcelBtn" class="send3d-icon-action" data-tip="Upload Excel" aria-label="Upload Excel">
                <span class="mini-icon">▤</span><small>Excel</small>
              </button>
              <button type="button" id="removeDuplicatesBtn" class="send3d-icon-action" data-tip="Remove duplicates" aria-label="Remove duplicates">
                <span class="mini-icon">⇄</span><small>Clean</small>
              </button>
              <input id="excelInput" type="file" accept=".xlsx,.xls,.csv" hidden>
            </div>

            <div class="send3d-attachment-row">
              <span class="send3d-label">Attachment</span>
              <button type="button" id="attachBtn" class="send3d-round-action" data-tip="Attach file" aria-label="Attach file">⌕</button>
              <input id="attachmentInput" type="file" hidden>
            </div>

            <div class="send3d-recipient-status" id="recipientStatus">No recipients selected</div>

            <div class="send3d-side-note">
              <span>01</span>
              <div><b>Recipients</b><small>Add one number or import a list from Excel.</small></div>
            </div>
          </aside>

          <main class="send3d-compose">
            <div class="send3d-compose-top">
              <div>
                <span class="send3d-eyebrow">WHATSAPP MESSAGE</span>
                <h1>Type Message</h1>
                <p>Compose your message and preview it before sending.</p>
              </div>
              <span class="send3d-connected"><i></i> Connected</span>
            </div>

            <div class="send3d-editor">
              <textarea id="messageBox" maxlength="4096" placeholder="Type a message..."></textarea>
              <div class="send3d-editor-bottom">
                <span class="send3d-hint">WhatsApp message</span>
                <div class="send3d-editor-actions">
                  <button type="button" id="emojiBtn" class="send3d-circle" data-tip="Emoji" aria-label="Emoji">☺</button>
                  <button type="button" id="templateBtn" class="send3d-circle" data-tip="Message template" aria-label="Message template">▧</button>
                  <button type="button" id="attachEditorBtn" class="send3d-circle" data-tip="Attachment" aria-label="Attachment">⌕</button>
                  <button type="button" id="scheduleBtn" class="send3d-circle" data-tip="Schedule message" aria-label="Schedule message">◷</button>
                  <button type="button" id="micBtn" class="send3d-circle" data-tip="Voice message" aria-label="Voice message">♩</button>
                  <button type="button" id="sendMessageBtn" class="send3d-send" data-tip="Send message" aria-label="Send message">➤</button>
                </div>
              </div>
              <div class="send3d-editor-meta"><span id="attachmentStatus">No attachment</span><span id="charCount">0 / 4096</span></div>
              <input id="attachEditorInput" type="file" hidden>
            </div>

            <div class="send3d-preview-head">
              <div><span class="send3d-eyebrow">LIVE PREVIEW</span><h3>Message Preview</h3></div>
              <span class="send3d-live"><i></i> Live</span>
            </div>
            <div class="send3d-preview">
              <div class="send3d-phone">
                <div class="send3d-phone-top">
                  <div class="send3d-avatar">PG</div>
                  <div><b>Prince Goyal</b><small>online</small></div>
                  <span>⋮</span>
                </div>
                <div class="send3d-chat-wall">
                  <div class="send3d-date">TODAY</div>
                  <div class="send3d-bubble" id="previewMessage">Your message preview will appear here...</div>
                </div>
                <div class="send3d-phone-input"><span>☺</span><div></div><b>➤</b></div>
              </div>
            </div>
          </main>

          <aside class="send3d-howto">
            <div class="send3d-howto-head">
              <div class="send3d-help-icon">?</div>
              <div><span class="send3d-eyebrow">QUICK GUIDE</span><h2>How to Use</h2></div>
            </div>
            <div class="send3d-step"><b>1</b><div><strong>Choose WhatsApp</strong><p>Select the connected WhatsApp account.</p></div></div>
            <div class="send3d-step"><b>2</b><div><strong>Add Number</strong><p>Enter a mobile number manually.</p></div></div>
            <div class="send3d-step"><b>3</b><div><strong>Upload Excel</strong><p>Import multiple recipients in one click.</p></div></div>
            <div class="send3d-step"><b>4</b><div><strong>Type Message</strong><p>Write your message in the editor.</p></div></div>
            <div class="send3d-step"><b>5</b><div><strong>Preview & Send</strong><p>Check the preview and send when ready.</p></div></div>
            <div class="send3d-tip"><span>✦</span><div><b>Pro Tip</b><p>Use Excel for bulk recipients and Remove Duplicates before sending.</p></div></div>
          </aside>
        </div>
      </div>`;

    if(!document.getElementById('send3d-style')){
      var style=document.createElement('style');
      style.id='send3d-style';
      style.textContent=`
      .send3d-page{width:100%;min-height:calc(100vh - 92px);padding:0 0 22px;color:#eef2f5}
      .send3d-layout{display:grid;grid-template-columns:252px minmax(430px,1fr) 292px;gap:14px;align-items:stretch}
      .send3d-tools,.send3d-compose,.send3d-howto{min-width:0;border-radius:16px;border:1px solid #454b53;background:linear-gradient(145deg,#343940,#24282e);box-shadow:8px 10px 20px rgba(16,24,40,.18),inset 1px 1px 0 rgba(255,255,255,.08),inset -2px -2px 5px rgba(0,0,0,.2);overflow:hidden}
      .send3d-tools{padding:15px 14px}.send3d-panel-head{margin-bottom:17px}.send3d-eyebrow{display:block;color:#ff8a43;font-size:8px;font-weight:900;letter-spacing:1.5px}.send3d-panel-head h2{font-size:14px;margin:4px 0 0;color:#fff}.send3d-label{display:block;margin:10px 2px 6px;color:#d2d7dc;font-size:9px;font-weight:800}.send3d-select,.send3d-input{width:100%;height:39px;border-radius:11px;border:1px solid #535a63;background:linear-gradient(145deg,#292e35,#3a3f47);color:#f5f7f9;padding:0 10px;font-size:10px;outline:0;box-shadow:inset 3px 3px 7px rgba(0,0,0,.35),inset -1px -1px 2px rgba(255,255,255,.04),0 2px 0 #171a1e}.send3d-input::placeholder{color:#858d96}.send3d-select:focus,.send3d-input:focus{border-color:#ff8740;box-shadow:0 0 0 2px rgba(255,101,8,.18),inset 3px 3px 7px rgba(0,0,0,.35)}
      .send3d-mini-actions{display:flex;gap:10px;margin:14px 0 8px}.send3d-icon-action{position:relative;width:52px;height:52px!important;min-width:52px!important;padding:0!important;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;border:1px solid #565d66!important;border-radius:12px!important;background:linear-gradient(145deg,#41464e,#292d33)!important;color:#f3f5f7!important;box-shadow:5px 6px 10px rgba(0,0,0,.35),inset 1px 1px 1px rgba(255,255,255,.08),inset -2px -2px 3px rgba(0,0,0,.35)!important;cursor:pointer}.send3d-icon-action:active,.send3d-circle:active,.send3d-send:active,.send3d-round-action:active{transform:translateY(2px);box-shadow:2px 3px 5px rgba(0,0,0,.35)!important}.send3d-icon-action .mini-icon{width:25px;height:25px;display:grid;place-items:center;border-radius:7px;background:#ff6508;color:#fff;font-size:13px;font-weight:900;box-shadow:0 2px 0 #c84d00}.send3d-icon-action small{font-size:7px;color:#d9dde1}.send3d-icon-action:hover{border-color:#ff8740!important}.send3d-icon-action[data-tip]:hover:after,.send3d-circle[data-tip]:hover:after,.send3d-send[data-tip]:hover:after,.send3d-round-action[data-tip]:hover:after{content:attr(data-tip);position:absolute;left:50%;bottom:calc(100% + 8px);transform:translateX(-50%);white-space:nowrap;z-index:50;background:#15181c;color:#fff;border:1px solid #535a63;border-radius:6px;padding:5px 7px;font-size:8px;font-weight:700;box-shadow:0 5px 14px rgba(0,0,0,.3);pointer-events:none}.send3d-round-action[data-tip]:hover:after{bottom:auto;top:calc(100% + 7px)}
      .send3d-attachment-row{position:relative;display:flex;align-items:center;justify-content:space-between;margin-top:12px}.send3d-attachment-row .send3d-label{margin:0}.send3d-round-action{position:relative;width:42px;height:42px!important;min-width:42px!important;padding:0!important;border-radius:50%!important;border:1px solid #626973!important;background:linear-gradient(145deg,#454a52,#292e34)!important;color:#fff!important;font-size:17px;box-shadow:4px 5px 9px rgba(0,0,0,.38),inset 1px 1px 1px rgba(255,255,255,.08)!important;cursor:pointer}.send3d-round-action:hover{color:#ff8a43!important;border-color:#ff8740!important}.send3d-recipient-status{margin-top:13px;padding:8px 9px;border-radius:8px;background:#292e34;border:1px solid #484e57;color:#9da5ae;font-size:8px;box-shadow:inset 2px 2px 5px rgba(0,0,0,.25)}.send3d-side-note{display:flex;gap:9px;margin-top:16px;padding-top:14px;border-top:1px solid #474d55}.send3d-side-note>span{width:24px;height:24px;border-radius:7px;display:grid;place-items:center;background:#ff6508;color:#fff;font-size:8px;font-weight:900;box-shadow:0 2px 0 #c84d00}.send3d-side-note b{display:block;font-size:9px;color:#e9ecef}.send3d-side-note small{display:block;margin-top:3px;color:#929aa4;font-size:7px;line-height:1.4}
      .send3d-compose{padding:17px;display:flex;flex-direction:column;background:linear-gradient(145deg,#373c43,#25292f)}.send3d-compose-top{display:flex;align-items:flex-start;justify-content:space-between;gap:10px}.send3d-compose-top h1{font-size:18px;margin:3px 0;color:#fff}.send3d-compose-top p{margin:0;color:#9fa7b0;font-size:9px}.send3d-connected,.send3d-live{display:flex;align-items:center;gap:5px;border-radius:9px;padding:6px 8px;background:#24282d;border:1px solid #4c535c;color:#b9c0c7;font-size:8px;font-weight:800;box-shadow:inset 2px 2px 4px rgba(0,0,0,.25)}.send3d-connected i,.send3d-live i{width:6px;height:6px;border-radius:50%;background:#20d477;box-shadow:0 0 7px rgba(32,212,119,.6)}
      .send3d-editor{position:relative;margin-top:14px;min-height:245px;border-radius:16px;border:1px solid #515861;background:linear-gradient(145deg,#2c3138,#20242a);box-shadow:inset 4px 4px 10px rgba(0,0,0,.35),inset -2px -2px 4px rgba(255,255,255,.035),0 5px 0 #171a1e;overflow:hidden}.send3d-editor textarea{display:block;width:100%;height:185px;resize:none;border:0;outline:0;background:transparent;color:#f4f6f8;padding:17px;font-size:12px;line-height:1.65;font-family:inherit}.send3d-editor textarea::placeholder{color:#7f8790}.send3d-editor-bottom{display:flex;align-items:center;justify-content:space-between;gap:8px;padding:8px 11px 7px;border-top:1px solid #454b53;background:linear-gradient(180deg,#30353c,#272b31)}.send3d-hint{font-size:8px;color:#858e97}.send3d-editor-actions{display:flex;align-items:center;gap:6px;position:relative}.send3d-circle{position:relative;width:31px;height:31px!important;min-width:31px!important;padding:0!important;display:grid;place-items:center;border-radius:50%!important;border:1px solid #5a616a!important;background:linear-gradient(145deg,#464b53,#292e34)!important;color:#e6e9ec!important;font-size:12px;box-shadow:3px 4px 7px rgba(0,0,0,.35),inset 1px 1px 1px rgba(255,255,255,.07)!important;cursor:pointer}.send3d-circle:hover{color:#ff8a43!important;border-color:#ff8740!important;transform:translateY(-1px)}.send3d-send{position:relative;width:38px;height:38px!important;min-width:38px!important;padding:0!important;display:grid;place-items:center;border-radius:50%!important;border:1px solid #d95400!important;background:linear-gradient(145deg,#ff8a3d,#e95400)!important;color:#fff!important;font-size:14px;font-weight:900;box-shadow:4px 5px 9px rgba(0,0,0,.38),inset 1px 1px 1px rgba(255,255,255,.22),0 2px 0 #a83f00!important;cursor:pointer}.send3d-send:hover{transform:translateY(-2px);filter:brightness(1.05)}.send3d-editor-meta{display:flex;justify-content:space-between;padding:5px 12px;color:#707984;font-size:7px;background:#22262c}
      .send3d-preview-head{display:flex;align-items:center;justify-content:space-between;margin:15px 1px 8px}.send3d-preview-head h3{font-size:12px;margin:3px 0;color:#fff}.send3d-preview{flex:1;min-height:180px;display:flex;align-items:center;justify-content:center;border-radius:13px;background:linear-gradient(145deg,#2c3138,#20242a);border:1px solid #4b525a;box-shadow:inset 3px 3px 8px rgba(0,0,0,.3);padding:12px}.send3d-phone{width:min(100%,310px);border-radius:14px;border:4px solid #171a1e;background:#f7f7f7;overflow:hidden;box-shadow:7px 9px 15px rgba(0,0,0,.35)}.send3d-phone-top{height:43px;display:flex;align-items:center;gap:7px;padding:6px 9px;background:#fff;border-bottom:1px solid #ddd}.send3d-avatar{width:28px;height:28px;border-radius:50%;display:grid;place-items:center;background:#ff6508;color:#fff;font-size:8px;font-weight:900}.send3d-phone-top b{font-size:9px;color:#34383d}.send3d-phone-top small{display:block;font-size:7px;color:#20a965;margin-top:1px}.send3d-phone-top>span{margin-left:auto;color:#777}.send3d-chat-wall{min-height:105px;padding:12px;background:#eee;display:flex;flex-direction:column;justify-content:flex-end;gap:8px}.send3d-date{align-self:center;padding:3px 6px;border-radius:5px;background:#ddd;color:#777;font-size:6px;font-weight:800}.send3d-bubble{align-self:flex-end;max-width:78%;padding:8px 9px;border-radius:9px 9px 2px 9px;background:#fff1e8;border:1px solid #ffd1b3;color:#6c2b0c;font-size:8px;line-height:1.4;box-shadow:0 3px 6px rgba(0,0,0,.1)}.send3d-phone-input{display:flex;align-items:center;gap:5px;padding:6px 7px;background:#fff;border-top:1px solid #ddd;color:#777;font-size:9px}.send3d-phone-input div{height:23px;flex:1;border:1px solid #ddd;border-radius:12px;background:#f8f8f8}.send3d-phone-input b{width:23px;height:23px;border-radius:50%;display:grid;place-items:center;background:#ff6508;color:#fff;font-size:9px}
      .send3d-howto{position:sticky;top:8px;height:max-content;background:linear-gradient(145deg,#343940,#25292f)}.send3d-howto-head{display:flex;align-items:center;gap:9px;padding:15px 13px;background:linear-gradient(145deg,#3d4249,#292e34);border-bottom:1px solid #50565f;box-shadow:inset 0 1px 0 rgba(255,255,255,.06)}.send3d-help-icon{width:35px;height:35px;display:grid;place-items:center;border-radius:11px;background:linear-gradient(145deg,#ff8a3d,#df5200);color:#fff;font-weight:900;font-size:16px;box-shadow:4px 5px 8px rgba(0,0,0,.35),inset 1px 1px 1px rgba(255,255,255,.22),0 2px 0 #a43d00}.send3d-howto-head h2{margin:3px 0 0;font-size:15px;color:#fff}.send3d-step{display:flex;gap:9px;padding:12px 12px;border-bottom:1px solid #424850}.send3d-step>b{flex:0 0 25px;width:25px;height:25px;display:grid;place-items:center;border-radius:8px;background:linear-gradient(145deg,#454a52,#292e34);border:1px solid #5a6169;color:#ff8a43;font-size:10px;box-shadow:3px 4px 7px rgba(0,0,0,.3),inset 1px 1px rgba(255,255,255,.06)}.send3d-step strong{display:block;color:#e9ecef;font-size:9px}.send3d-step p{margin:3px 0 0;color:#929aa3;font-size:7.5px;line-height:1.45}.send3d-tip{display:flex;gap:8px;margin:12px;padding:10px;border-radius:10px;background:linear-gradient(145deg,#3b302a,#2c2928);border:1px solid #654634;box-shadow:inset 2px 2px 5px rgba(0,0,0,.25),3px 4px 7px rgba(0,0,0,.22)}.send3d-tip>span{color:#ff8a43;font-size:15px}.send3d-tip b{display:block;color:#ff9b5c;font-size:8px}.send3d-tip p{margin:3px 0 0;color:#b1a59f;font-size:7.5px;line-height:1.45}
      @media(max-width:1100px){.send3d-layout{grid-template-columns:220px minmax(380px,1fr) 260px}.send3d-tools{padding:13px 11px}.send3d-compose{padding:14px}.send3d-howto-head{padding:13px 10px}}
      @media(max-width:900px){.send3d-layout{grid-template-columns:220px minmax(0,1fr)}.send3d-howto{grid-column:1/-1;position:static}.send3d-howto{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.send3d-howto-head{grid-column:1/-1}.send3d-tip{grid-column:1/-1}}
      @media(max-width:650px){.send3d-layout{grid-template-columns:1fr}.send3d-howto{display:block}.send3d-editor{min-height:220px}.send3d-editor textarea{height:165px}.send3d-compose-top{flex-direction:column}.send3d-editor-bottom{align-items:flex-end}.send3d-hint{display:none}}
      `;
      document.head.appendChild(style);
    }

    var message=document.getElementById('messageBox'),preview=document.getElementById('previewMessage'),count=document.getElementById('charCount');
    if(message){message.addEventListener('input',function(){if(preview)preview.textContent=message.value.trim()||'Your message preview will appear here...';if(count)count.textContent=message.value.length+' / 4096';});}

    var excel=document.getElementById('uploadExcelBtn'),excelInput=document.getElementById('excelInput');
    if(excel&&excelInput){excel.addEventListener('click',function(){excelInput.click()});excelInput.addEventListener('change',function(){var f=excelInput.files&&excelInput.files[0];if(f){var s=document.getElementById('recipientStatus');if(s)s.textContent='Excel selected: '+f.name;}});}

    var attach=document.getElementById('attachBtn'),attachInput=document.getElementById('attachmentInput'),editorAttach=document.getElementById('attachEditorBtn'),editorAttachInput=document.getElementById('attachEditorInput');
    function wireAttachment(button,input){if(button&&input){button.addEventListener('click',function(){input.click()});input.addEventListener('change',function(){var f=input.files&&input.files[0];if(f){var st=document.getElementById('attachmentStatus');if(st)st.textContent='Attached: '+f.name;button.textContent='✓';}});}}
    wireAttachment(attach,attachInput);wireAttachment(editorAttach,editorAttachInput);

    var duplicate=document.getElementById('removeDuplicatesBtn');
    if(duplicate)duplicate.addEventListener('click',function(){var mobile=document.getElementById('toNumber');var status=document.getElementById('recipientStatus');if(!mobile||!mobile.value.trim()){if(status)status.textContent='Enter recipient numbers first';return;}var nums=mobile.value.split(/[,\s]+/).filter(Boolean);var clean=[...new Set(nums)];mobile.value=clean.join(', ');if(status)status.textContent=clean.length+' unique recipient(s)';});

    document.getElementById('emojiBtn')?.addEventListener('click',function(){var box=document.getElementById('messageBox');if(box){box.value+='😊';box.dispatchEvent(new Event('input'));box.focus();}});
    document.getElementById('sendMessageBtn')?.addEventListener('click',function(){var box=document.getElementById('messageBox');if(!box||!box.value.trim()){alert('Please type a message first.');return;}this.textContent='✓';setTimeout(()=>this.textContent='➤',1000);});
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
    if(!sidebar)return;
    if(sidebar.querySelector('.sidebar-collapse-btn'))return;
    var btn=document.createElement('button');btn.className='sidebar-collapse-btn';btn.type='button';btn.setAttribute('aria-label','Collapse sidebar');btn.setAttribute('title','Collapse / Expand menu');btn.textContent='‹';sidebar.style.position='fixed';sidebar.appendChild(btn);
    var saved=false;try{saved=localStorage.getItem('sidebarCollapsed')==='1';}catch(e){}
    if(saved){sidebar.classList.add('collapsed');document.body.classList.add('sidebar-collapsed');btn.textContent='›';btn.setAttribute('aria-label','Expand sidebar');}
    btn.addEventListener('click',function(){var collapsed=sidebar.classList.toggle('collapsed');document.body.classList.toggle('sidebar-collapsed',collapsed);try{localStorage.setItem('sidebarCollapsed',collapsed?'1':'0');}catch(e){}btn.textContent=collapsed?'›':'‹';btn.setAttribute('aria-label',collapsed?'Expand sidebar':'Collapse sidebar');});
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',initApp);else initApp();
})();