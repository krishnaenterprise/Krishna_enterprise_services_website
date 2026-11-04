const icons = {
  license:'<path d="M7 3h10l3 3v15H4V3z"/><path d="M8 11h8M8 15h6M14 3v4h4"/>',
  renewal:'<path d="M20 7v5h-5"/><path d="M4 17v-5h5"/><path d="M5.6 9A7 7 0 0 1 18 6l2 6M4 12l2 6a7 7 0 0 0 12.4-3"/>',
  duplicate:'<rect x="7" y="6" width="13" height="15" rx="2"/><path d="M4 17V4a1 1 0 0 1 1-1h11"/>',
  change:'<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L9 17l-4 1 1-4Z"/>',
  globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
  vehicle:'<path d="M5 17h14l1-7H4z"/><path d="m6 10 2-5h8l2 5M7 17v2m10-2v2M7 13h.01M17 13h.01"/>',
  card:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M7 15h4"/>',
  pin:'<path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2"/>',
  cancel:'<circle cx="12" cy="12" r="9"/><path d="m9 9 6 6m0-6-6 6"/>',
  file:'<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v5h5M9 13h6M9 17h6"/>',
  id:'<rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="8" cy="11" r="2"/><path d="M5.5 16a3 3 0 0 1 5 0M13 10h5M13 14h5"/>',
  globe2:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/>',
  home:'<path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10M9 20v-6h6v6"/>',
  land:'<path d="m3 7 6-4 6 4 6-4v14l-6 4-6-4-6 4z"/><path d="M9 3v14m6-10v14"/>',
  heart:'<path d="M20.8 8.8c0 5.5-8.8 11-8.8 11S3.2 14.3 3.2 8.8A4.8 4.8 0 0 1 12 6.1a4.8 4.8 0 0 1 8.8 2.7Z"/>',
  worker:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0M8 4l4-2 4 2"/>',
  money:'<circle cx="12" cy="12" r="9"/><path d="M15 8.5c-.5-1-1.5-1.5-3-1.5-1.7 0-3 1-3 2.3s1.3 2.2 3 2.2 3 1 3 2.3-1.3 2.2-3 2.2c-1.5 0-2.5-.5-3-1.5M12 5v14"/>',
  building:'<path d="M4 21V4l8-2 8 2v17M2 21h20M8 7h1m6 0h1M8 11h1m6 0h1M8 15h1m6 0h1M10 21v-3h4v3"/>',
  briefcase:'<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V4h8v3M3 12h18M10 12v2h4v-2"/>',
  chart:'<path d="M4 19V5M4 19h17M8 15l4-5 3 2 5-7"/>',
  shield:'<path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="m9 12 2 2 4-4"/>'
};
const rto = [
 ['Learner’s Licence','New learner licence','license'],['Permanent Licence','Driving licence','license'],['Licence Renewal','Renewal application','renewal'],['Duplicate Licence','Lost or damaged','duplicate'],['Change Licence Details','Update information','change'],['International Permit','International driving','globe'],['Issue NOC','Licence NOC request','file'],['Submit NOC','Submit NOC papers','file'],['Transfer Ownership','Vehicle ownership','vehicle'],['Vehicle Services','General vehicle help','vehicle'],['Duplicate RC','Lost or damaged RC','duplicate'],['RC Renewal','Registration renewal','renewal'],['Change Address','RC address update','pin'],['Hypothecation Cancel','Loan closure update','cancel'],['Issue Vehicle NOC','Vehicle NOC request','file'],['Submit Vehicle NOC','Submit vehicle NOC','file']
];
const docs = [
 ['Aadhaar Services','Aadhaar-related help','id'],['PAN Card','PAN application support','card'],['Voter ID Card','Elector ID assistance','id'],['Passport Application','Passport form support','globe'],['Caste Certificate','Certificate application','file'],['Income Certificate','Income proof application','file'],['Domicile Certificate','Residence certificate','home'],['Birth & Death Certificate','Vital records assistance','file'],['Land Records','Land record support','land'],['Ayushman Bharat Card','Health scheme card','heart'],['PM-Kisan Samman Nidhi','Farmer scheme assistance','land'],['e-Shram & Labour Card','Worker registration','worker'],['Pension Schemes','Scheme application help','money'],['PM Awas Yojana & Ujjwala','Housing & benefit schemes','home'],['GST Services','GST registration & returns','chart'],['Income Tax Return','ITR filing assistance','chart'],['Udyam / MSME Registration','Business registration','building']
];
const property = [
 ['Property Sellers','Selling process support','home'],['Property Buyers','Buying process support','building'],['Landlords & Tenants','Rental-related assistance','briefcase'],['Legal, Financial & Advisory','General advisory support','shield']
];
function renderCards(target, items){
 const root=document.getElementById(target);
 root.innerHTML=items.map(([name,desc,icon])=>`<article class="service-card"><span class="service-icon"><svg viewBox="0 0 24 24" aria-hidden="true">${icons[icon]||icons.file}</svg></span><span><strong>${name}</strong><small>${desc}</small></span></article>`).join('');
}
const web = [
 ['Business Website','Professional website for your business','globe'],
 ['Company / Portfolio Website','Showcase your company, work and services','building'],
 ['Landing Page','Focused page for a product or campaign','chart'],
 ['Mobile-Friendly Website','Responsive design for phones and tablets','vehicle']
];
const design = [
 ['Poster Design','Promotional and offer posters','file'],
 ['Banner Design','Business and event banners','chart'],
 ['Social Media Designs','WhatsApp and social media creatives','globe'],
 ['Visiting Card & Flyer','Business cards and promotional flyers','card']
];
renderCards('rto-grid',rto); renderCards('docs-grid',docs); renderCards('property-grid',property);
renderCards('web-grid',web); renderCards('design-grid',design);
document.getElementById('year').textContent=new Date().getFullYear();
const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));menuButton.textContent=open?'×':'☰';});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.textContent='☰';}));


// Service Assistant: show a relevant starter checklist and KES assistance estimate.
const serviceSelect = document.getElementById('enquiry-service');
const assistantInfo = document.getElementById('assistant-info');
const checklistRoot = document.getElementById('document-checklist');
const assistantTimes = {
  aadhaar: ['24–48 hours (KES assistance estimate)', 'This is the estimated time for our assistance / initial handling only. UIDAI review, appointment availability and actual update time are outside our control.'],
  rto: ['1–3 working days (KES assistance estimate)', 'RTO appointment availability, verification and department processing may take additional time.'],
  documents: ['1–3 working days (KES assistance estimate)', 'The issuing department / portal may take additional time for verification and approval.'],
  property: ['1–2 working days for initial assistance', 'Property searches, legal review, third-party responses and transaction timelines can vary.'],
  website: ['3–7 working days (project estimate)', 'Final delivery depends on content, images, revisions and the agreed project scope.'],
  design: ['1–2 working days (design estimate)', 'Timing depends on the content supplied and number of revisions.']
};
const checklists = {
  rto: ['Aadhaar card / ID proof', 'Current driving licence or vehicle RC (if applicable)', 'Vehicle registration number (if applicable)', 'Registered mobile number', 'Address proof (if required)', 'Application-specific papers / NOC (if applicable)'],
  aadhaar: ['Aadhaar number / Aadhaar card', 'Mobile number linked with Aadhaar (if available)', 'Supporting proof for the requested update (if required)', 'Appointment / acknowledgement slip (if already available)'],
  pan: ['Aadhaar card / number', 'Mobile number', 'Date of birth proof (if required)', 'Address and email details', 'Existing PAN card (for correction, if applicable)'],
  voter: ['Aadhaar / identity proof', 'Address proof', 'Recent photograph (if required)', 'Existing voter ID / EPIC number (if applicable)', 'Mobile number'],
  passport: ['Aadhaar / identity proof', 'Address proof', 'Date of birth proof', 'Existing passport (for re-issue, if applicable)', 'Email and mobile number'],
  certificate: ['Aadhaar / identity proof', 'Address proof', 'Relevant supporting proof (income / caste / residence / birth, as applicable)', 'Applicant / family details', 'Mobile number'],
  land: ['Survey / block number or property details', 'Existing land record / 7-12 / 8-A (if available)', 'Aadhaar / identity proof', 'Village / taluka details', 'Mobile number'],
  scheme: ['Aadhaar card', 'Bank passbook / account details (if applicable)', 'Relevant eligibility / category proof', 'Existing scheme / application number (if any)', 'Mobile number'],
  tax: ['PAN card', 'Aadhaar card', 'Bank account details', 'Income / business details and supporting statements', 'Previous return / GST details (if applicable)'],
  property: ['Aadhaar / identity proof', 'Property address and survey / plot details', 'Available title / ownership papers', 'Latest property tax / utility details (if available)', 'Contact details of parties involved'],
  website: ['Business / brand name', 'Logo and business photos (if available)', 'Services and business description', 'Contact number, email and address', 'Preferred website examples / domain details (if available)'],
  design: ['Business / event name', 'Text, offer or announcement to display', 'Logo / photo (if available)', 'Contact number and address to display', 'Preferred size / platform (Instagram, WhatsApp, print etc.)']
};
function getChecklistType(service) {
  const s = service.toLowerCase();
  if (s.includes('aadhaar')) return 'aadhaar';
  if (s.includes('pan')) return 'pan';
  if (s.includes('voter')) return 'voter';
  if (s.includes('passport')) return 'passport';
  if (s.includes('certificate')) return 'certificate';
  if (s.includes('land record')) return 'land';
  if (s.includes('pm-kisan') || s.includes('ayushman') || s.includes('labour') || s.includes('pension') || s.includes('awas') || s.includes('ujjwala')) return 'scheme';
  if (s.includes('gst') || s.includes('income tax') || s.includes('udyam')) return 'tax';
  if (s.includes('property') || s.includes('landlord') || s.includes('tenant')) return 'property';
  if (s.includes('website')) return 'website';
  if (s.includes('poster') || s.includes('banner') || s.includes('social media') || s.includes('visiting card') || s.includes('flyer')) return 'design';
  if (s.includes('licence') || s.includes('license') || s.includes('vehicle') || s.includes('rc') || s.includes('noc') || s.includes('ownership') || s.includes('hypothecation')) return 'rto';
  return 'documents';
}
function getTimeType(service, checklistType) {
  if (checklistType === 'aadhaar') return 'aadhaar';
  if (checklistType === 'rto') return 'rto';
  if (checklistType === 'property') return 'property';
  if (checklistType === 'website') return 'website';
  if (checklistType === 'design') return 'design';
  return 'documents';
}
function updateAssistant() {
  const service = serviceSelect.value;
  checklistRoot.innerHTML = '';
  if (!service) { assistantInfo.hidden = true; return; }
  const type = getChecklistType(service);
  const time = assistantTimes[getTimeType(service, type)];
  document.getElementById('assistant-time-value').textContent = time[0];
  document.getElementById('assistant-note').textContent = time[1];
  (checklists[type] || checklists.documents).forEach((item, i) => {
    const label = document.createElement('label');
    const input = document.createElement('input');
    input.type = 'checkbox'; input.name = 'documents'; input.value = item; input.id = `doc-check-${i}`;
    const span = document.createElement('span'); span.textContent = item;
    label.append(input, span); checklistRoot.appendChild(label);
  });
  assistantInfo.hidden = false;
}
if (serviceSelect) serviceSelect.addEventListener('change', updateAssistant);

// Enquiries open WhatsApp with the customer's selected service and checklist.
const enquiryForm = document.getElementById('quick-enquiry-form');
if (enquiryForm) {
  enquiryForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('enquiry-name').value.trim();
    const phone = document.getElementById('enquiry-phone').value.trim();
    const service = serviceSelect.value;
    const message = document.getElementById('enquiry-message').value.trim();
    if (!name || !phone || !service) { enquiryForm.reportValidity(); return; }
    const digits = phone.replace(/\D/g, '');
    if (digits.length < 10 || digits.length > 13) {
      document.getElementById('enquiry-phone').setCustomValidity('Please enter a valid phone number.');
      document.getElementById('enquiry-phone').reportValidity();
      document.getElementById('enquiry-phone').setCustomValidity('');
      return;
    }
    const checked = [...checklistRoot.querySelectorAll('input[type="checkbox"]:checked')].map(el => el.value);
    const all = [...checklistRoot.querySelectorAll('input[type="checkbox"]')].map(el => el.value);
    const missing = all.filter(item => !checked.includes(item));
    const time = document.getElementById('assistant-time-value').textContent;
    const lines = [
      'Hello Krishna Enterprise & Services,', '', 'New Service Enquiry',
      `Name: ${name}`, `Customer Phone: ${phone}`, `Service: ${service}`,
      `Estimated KES assistance time: ${time}`,
      '', 'Documents / information I have:', checked.length ? checked.map(x => `✓ ${x}`).join('\n') : 'Not selected yet',
      '', 'Documents / information I may need help with:', missing.length ? missing.map(x => `• ${x}`).join('\n') : 'None marked missing',
      message ? `\nAdditional details: ${message}` : '',
      '', 'Please guide me about the next steps and applicable charges.'
    ].filter(Boolean);
    const url = `https://wa.me/918733042025?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(url, '_blank', 'noopener');
  });
}
