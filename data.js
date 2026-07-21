/* ============================================================
   KIRAN P, MD — WARD REFERENCE — CONTENT
   ------------------------------------------------------------
   PAGES  = sections shown on the home page & top nav.
            Each page pulls in one or more CATEGORIES (by id).
   CATEGORIES = groups of topics. Each topic:
       { t:"Title", body:`<h4>..</h4><ul><li>..</li></ul>` }
     Dot-phrase topics use `copy` (plain text) instead of body:
       { t:"Title", note:"optional intro", copy:`text to copy` }
   To add a topic: copy a block. To add a category: copy a block
   and add its id to a page's `cats`. Search updates automatically.
   ============================================================ */

const PAGES = [
  { id:"procedures", ico:"🩺", title:"Procedures", short:"Procedures",
    desc:"Setup, landmarks, technique, and complications.", cats:["procedures"] },
  { id:"pocus", ico:"📟", title:"Bedside Ultrasound", short:"PoCUS",
    desc:"PoCUS foundations, lung, IVC/volume, fluid responsiveness.", cats:["pocus"] },
  { id:"approaches", ico:"🧭", title:"Approaches", short:"Approaches",
    desc:"Cross-cover calls, electrolytes & acid-base, neurology, common diagnoses, and goals of care.",
    cats:["crosscover","lytes","neuro","diagnoses","goc"] },
  { id:"meds", ico:"💊", title:"Medications & Ward Calls", short:"Meds & Calls",
    desc:"Medication cheat sheet, common symptoms & management, and abbreviations.",
    cats:["wardmeds","reference"] },
  { id:"trials", ico:"📊", title:"Landmark Trials", short:"Trials",
    desc:"Practice-changing studies by system — the bottom line and a link to each.",
    cats:["tr-cards","tr-pulm","tr-renal","tr-endo","tr-gi","tr-id","tr-heme","tr-neuro"] },
  { id:"pearls", ico:"💡", title:"Clinical Pearls", short:"Pearls",
    desc:"Pearls picked up on the wards, organized by system. Add your own in data.js.",
    cats:["pl-cards","pl-pulm","pl-renal","pl-endo","pl-gi","pl-id","pl-heme","pl-neuro","pl-gen"] },
  { id:"dotphrases", ico:"📝", title:"Dot Phrases", short:"Dot Phrases",
    desc:"Copy-paste note & order templates for common IM issues.", cats:["dotphrases"] },
];

const CATEGORIES = [

/* ========================= PROCEDURES ========================= */
{
  id:"procedures", ico:"🩺", name:"Procedures",
  desc:"Setup, landmarks, technique, and complications — from bootcamp + bedside.",
  topics:[
    {t:"Pre / post-procedure checklist", body:`
      <h4>Before every procedure</h4>
      <ul>
        <li>Bloodwork: CBC, coags/INR, platelets</li>
        <li>Review meds — anticoagulants/antiplatelets & last dose (LMWH/DOAC hold times)</li>
        <li>Indication utility: <em>Do I need this now? Can it wait? Will it change management?</em></li>
        <li>Informed consent signed & on chart</li>
        <li>Adjust bed to proper height; position patient</li>
      </ul>
      <h4>After</h4>
      <ul>
        <li>Communicate what was done with nursing</li>
        <li>Document (see procedure note)</li>
        <li>Order tests on the samples; order post-procedure imaging as needed</li>
      </ul>
      <h4>Procedure note</h4>
      <ul>
        <li>Service · what procedure · who supervised</li>
        <li>What happened: attempts, samples, volume off, what you did</li>
        <li>Findings (clear / serosanguinous / sanguinous) · complications</li>
        <li>Samples sent & for what</li>
      </ul>
      <div class="pill">Large-gauge needle = 16–18 G.</div>`},

    {t:"Central line (CVC)", body:`
      <p class="lead">Internal jugular is default; femoral if coagulopathic (compressible), subclavian if IJ not possible (e.g. C-collar).</p>
      <h4>Indications</h4>
      <ul>
        <li>Pressors, poor peripheral IV access, dialysis</li>
        <li>Caustic/high-rate infusions: bicarb, calcium, potassium (higher infusion-rate limits centrally)</li>
        <li>TPN, special monitoring, device placement (e.g. transvenous pacer), volume resuscitation</li>
      </ul>
      <h4>Contraindications</h4>
      <ul>
        <li><b>No absolute</b> contraindications. Relative: overlying infection, vascular injury/thrombus in target vein, abnormal anatomy (mitigated by PoCUS), uncooperative patient</li>
        <li>Bleeding risk: no strict platelet/INR threshold in guidelines — practically may give FFP to reverse AC; prefer compressible sites (IJ/femoral) over subclavian if coagulopathic</li>
      </ul>
      <h4>Catheter length by site</h4>
      <ul><li>Right IJ ≈ <b>16 cm</b> · Left IJ ≈ <b>20 cm</b> · Femoral ≈ <b>24 cm</b></li></ul>
      <h4>Kit / setup</h4>
      <ul>
        <li>CVC kit, sterile gloves + gown, NS flush ×3, chlorhexidine scrub ×3, sterile probe cover</li>
        <li>Position: change bed angle so carotid isn't directly under the IJ; slight Trendelenburg; precedex/dexmedetomidine for anxiety; head of bed facing feet</li>
        <li>Prime everything: uncap needle & pull back on plunger, run guidewire to confirm smooth, scalpel, dilator, catheter — caps/locks on <b>all ports except the middle</b>, flush all 3 lumens with NS. Line up in order of use: <b>finder needle → wire → dilator → scalpel → catheter</b></li>
      </ul>
      <h4>Ultrasound landmarking (IJ)</h4>
      <ul>
        <li>Linear probe, vascular preset, <b>marker to patient's left</b></li>
        <li>IJ = lateral to carotid, thin-walled, easily collapsible, respirophasic, non-pulsatile</li>
        <li>Orient approach so vein is <b>beside</b> the carotid, not on top of it</li>
        <li>Mark skin-to-vein depth → expect flashback at that distance (past it = through the vein)</li>
      </ul>
      <h4>Technique</h4>
      <ul>
        <li>Local → bleb → anesthetize down to & just above vein under US (probe & needle at ~90°)</li>
        <li>"Creep" the needle with negative pressure until flashback → stabilize → pull back to confirm still in vein</li>
        <li>Thread wire → <b>visualize wire in vein (short + long axis) BEFORE dilating</b></li>
        <li>Skin nick at the angle of the wire, cutting <em>against</em> the wire; dilate gently (brute force kinks the wire) — only ⅓ (max ½) of dilator length; confirm wire still moves smoothly</li>
        <li>Thread catheter over wire, pulling wire back until it exits the port → hub catheter → remove wire</li>
        <li>Bleed-back each port (one at a time), aspirate to clear air, then flush; keep others clamped/locked</li>
        <li>CXR for any line placed in the thorax</li>
      </ul>
      <h4>Confirming placement (IJ)</h4>
      <ul><li>Tip at cavo-atrial junction, at/just above the carina, above the pericardial reflection (lower = tamponade risk); ideally oriented vertically in SVC</li></ul>
      <details><summary>Complications</summary><div class="inner">
        <ul>
          <li><b>Arterial puncture</b> — finder needle: pressure, sit up, reattempt. Wire: remove + pressure. <b>Dilator: heavy pressure + STAT vascular surgery. Catheter: leave it in, STAT vascular surgery.</b></li>
          <li><b>Pneumothorax</b> — puncturing pleura; low with US; usually on post-procedure CXR. Small/apical: observe. Large/tension: chest tube/pigtail</li>
          <li><b>Lost wire</b> — call vascular surgery/IR; clamp with Kelly near skin if still visible</li>
          <li><b>Local hematoma</b> — stable: monitor. Expanding/mass effect: compression + vascular surgery</li>
        </ul>
      </div></details>`},

    {t:"Thoracentesis", body:`
      <p class="lead">Lung US with abdominal preset. Seated & leaning forward ideal; or supine at 30° with ipsilateral arm overhead.</p>
      <h4>Indications / contraindications</h4>
      <ul>
        <li>Diagnostic and/or therapeutic (relieve WOB via lung recruitment)</li>
        <li>CI: irreversible coagulopathy (wait to hold AC if possible), platelets &lt;20 (target &gt;50; newer evidence supports INR&gt;3 / plt&gt;25), overlying infection, unsafe anatomy. Mechanically ventilated = higher tension-PTX risk</li>
        <li>Labs: total protein, LDH</li>
      </ul>
      <h4>Ultrasound & marking</h4>
      <ul>
        <li>Curvilinear to find best rib space → linear array to refine & see vessels; ensure needle enters <b>inferior margin of the rib space</b> (neurovascular bundle sits below each rib)</li>
        <li>Go <b>≥10 cm lateral of the posterior midline</b> (bundle more exposed medially); fluid pocket ≥1.5 cm deep, wider than 2 intercostal spaces, ≥1 rib space above diaphragm</li>
        <li>Run power Doppler along the needle path; note probe angle = angle of approach</li>
      </ul>
      <h4>Technique</h4>
      <ul>
        <li>Freeze down to the rib & periosteum; <b>walk the needle over the superior surface of the rib</b>, freezing the track (bleb of lido in skin, advance/withdraw/inject to pleural space, then inject into pleural space)</li>
        <li>Real needle: advance with <b>negative pressure</b> — anchor left hand (needle) to the patient, anchor right elbow to your body</li>
        <li>At pleural space: lock right arm, advance left-hand catheter into the space while withdrawing needle</li>
        <li>Advance catheter 3–5 mm more; if it won't advance you're likely interstitial → restart</li>
        <li>Ask patient to <b>hum</b> on catheter removal (↑ intrathoracic pressure, ↓ PTX). Petroleum jelly + gauze, pull quickly</li>
        <li>Chest tube = Seldinger technique</li>
      </ul>
      <div class="flag"><b>Post-thora CXR</b> to check for: interval/residual effusion, tubing/catheter placement, pneumothorax.</div>
      <h4>Samples</h4>
      <ul><li>Cell count, protein, LDH, cytology ±AFB, flow cytometry (malignancy), cultures + Gram stain/sensitivity, glucose. ~50 cc/vial, 4 vials generous; label with name/sample type/patient sticker/date</li></ul>
      <details><summary>Complications</summary><div class="inner">
        <ul>
          <li><b>Coughing</b> (lung re-expanding) → stop drainage, rest, resume slowly</li>
          <li><b>Pleuritic chest pain</b> (very negative pressure / trapped lung / PTX) → stop suction; if resolves try gravity drainage; if recurs, abort</li>
          <li><b>Intercostal vessel hemorrhage</b> → resuscitate, CT chest w/ contrast, thoracic surgery/IR. Walk needle ABOVE the rib</li>
          <li><b>Pneumothorax</b> (shear as lung re-expands / ex-vacuo) → manage as any PTX</li>
        </ul>
      </div></details>`},

    {t:"Paracentesis", body:`
      <p class="lead">Curvilinear, abdominal preset. Semi-Fowler's; tilt to the side so fluid pools (puncture side up).</p>
      <h4>Indications / contraindications</h4>
      <ul>
        <li>Diagnostic (SAAG &gt;11 g/L = portal HTN; r/o SBP; cytology) or therapeutic (tense ascites)</li>
        <li>CI: irreversible coagulopathy (therapeutic AC for another reason), platelets &lt;20 (target &gt;50), overlying infection, unsafe anatomy. <b>Elevated INR from ESLD is OK</b> — per AASLD, elevated PT/thrombocytopenia is not a contraindication and routine correction isn't recommended</li>
      </ul>
      <h4>Ultrasound</h4>
      <ul>
        <li>Confirm free-flowing fluid filling crevices between bowel; scan for the largest pocket with least soft-tissue thickness</li>
        <li>Sensitive locations: RUQ (Morrison's, caudal liver tip, paracolic gutter), LUQ (subdiaphragmatic, spleno-renal, caudal spleen tip), suprapubic (recto-vesical / pouch of Douglas)</li>
        <li>Avoid superficial/epigastric vessels (color/power Doppler); measure skin-to-peritoneum depth; tell patient not to move after marking</li>
      </ul>
      <h4>Technique</h4>
      <ul>
        <li>Go obliquely (Z-track) — tract pinches off on withdrawal to avoid leak</li>
        <li>Freeze to peritoneum, aspirating/injecting as you advance → flashback; mark that depth on the needle</li>
        <li>Nick skin the width of catheter → advance catheter slowly with negative pressure → flashback → advance 5–10 mm more</li>
        <li>If catheter won't advance over needle = interstitial → restart</li>
      </ul>
      <details><summary>Complications</summary><div class="inner">
        <ul>
          <li><b>Ascitic leak</b> (~5%) → turn patient onto puncture side, ostomy bag; if &gt;48 h, drain more or suture</li>
          <li><b>Hemorrhage</b> (&lt;1%, often inferior epigastric a.) → resuscitate, CT w/ contrast, IR embolization (Child-Pugh B/C poor surgical candidates)</li>
          <li><b>Bowel perforation</b> (&lt;0.1%) → small-bore: often conservative; large-bore draining bowel content: leave in, call GenSurg; erect CXR for free air; abx CTX + metronidazole</li>
        </ul>
      </div></details>`},

    {t:"Lumbar puncture", body:`
      <p class="lead">Sitting is easier but you can't measure opening pressure.</p>
      <h4>Indications</h4>
      <ul><li>CNS infection, NPH tap test, SAH, paraneoplastic; inflammatory/demyelinating (MS, GBS); IT drug delivery; IIH pressure relief</li></ul>
      <h4>Contraindications</h4>
      <ul>
        <li>INR &gt;1.5, platelets &lt;50, coagulopathy (incl. meds) — <b>no wiggle room if coagulopathic</b></li>
        <li>↑ICP / space-occupying lesion → <b>CT head before LP</b> (papilledema, focal deficit, new seizure, immunocompromised, CNS disease hx)</li>
        <li>Prior lumbar surgery, overlying infection, uncooperative, high peripheral blast count (seeding risk)</li>
      </ul>
      <h4>Technique</h4>
      <ul>
        <li>Palpate PSIS across to midline = L4; enter just above (L3–L4). US helps confirm midline / larger habitus</li>
        <li>Bevel toward ceiling; ~15° toward the umbilicus</li>
        <li>Layers: skin → subcut → muscle → supraspinous → interspinous → ligamentum flavum → epidural → dura → subarachnoid (2 "pops")</li>
        <li>Feel the pop through ligamentum flavum → remove stylet to check for CSF</li>
      </ul>
      <div class="flag"><b>Replace the stylet before withdrawing</b> the needle (keeps dural tear small → fewer post-LP headaches).</div>
      <details><summary>Complications</summary><div class="inner">
        <ul>
          <li><b>Post-LP headache</b> → atraumatic needle, replace stylet; caffeine; epidural blood patch (anesthesia). No evidence for bed rest</li>
          <li><b>Epidural hematoma</b> → shouldn't happen with pre-procedure bloodwork; STAT MRI spine + neurosurgery</li>
          <li><b>Cerebral herniation</b> → rare, poor outcomes; pre-LP CT in high-risk; if suspected → mannitol/hypertonic, airway, neurosurg/ICU</li>
        </ul>
      </div></details>`},

    {t:"Arthrocentesis", body:`
      <h4>Indications</h4>
      <ul><li>Diagnostic: septic arthritis, crystals, hemarthrosis. Therapeutic: decompress/irrigate, intra-articular steroid/anesthetic</li></ul>
      <h4>Contraindications</h4>
      <ul>
        <li><b>Prosthetic joint — never tap without ortho</b> (introduces infection to hardware)</li>
        <li>Overlying cellulitis; thrombocytopenia (relative). AC alone is not an absolute CI</li>
      </ul>
      <h4>Technique</h4>
      <ul>
        <li>Knee slightly bent ~15–20° with support underneath</li>
        <li>US or palpation to find largest fluid pocket; medial approach at middle/superior patella, find medial edge</li>
      </ul>
      <h4>Complications</h4>
      <ul><li>Iatrogenic infection → treat as septic arthritis (fluid analysis, empiric IV abx, ortho washout). Hemarthrosis → usually self-limiting (RICE)</li></ul>`},

    {t:"Needle decompression", body:`
      <ul>
        <li><b>14-gauge</b> needle</li>
        <li><b>4th intercostal space, anterior/mid-axillary line</b></li>
      </ul>`},
  ]
},

/* ========================= POCUS ========================= */
{
  id:"pocus", ico:"📟", name:"Bedside Ultrasound (PoCUS)",
  desc:"An adjunct to the exam, not a standalone test. Have a focused question — don't fish.",
  topics:[
    {t:"PoCUS foundations", body:`
      <h4>Rules</h4>
      <ul>
        <li>Adjunct to the clinical exam; a limited exam — have a focused question, don't fish</li>
        <li>Be disciplined & systematic; compare to other imaging (e.g. CT)</li>
      </ul>
      <h4>Fundamentals</h4>
      <ul>
        <li>Set up: transducer choice → preset → patient position</li>
        <li>Hold low, fingers/base of hand anchored on patient</li>
        <li>External/internal landmarks; windows & obstacles; slow, methodical movements</li>
        <li>Lower frequency → deeper structures</li>
      </ul>
      <h4>Transducers</h4>
      <ul>
        <li>Linear (high freq 5–10 MHz): superficial/vascular</li>
        <li>Curvilinear (low 2–5 MHz): abdomen, lung, large habitus</li>
        <li>Phased array (1–4 MHz): cardiac</li>
        <li>Indicator to screen: abdo → probe marker to patient right/head; cardiac reversed but keep probe to patient right</li>
      </ul>
      <h4>Echogenicity</h4>
      <ul><li>Hyperechoic/white = all energy returns (solid, casts shadow) · Anechoic/black = fluid · Hypoechoic/grey = solid organs. Fresh blood/complex effusions may not be anechoic</li></ul>
      <p class="lead">Minimum criteria = the minimum images needed to interrogate an organ (e.g. IVC needs long + short axis).</p>`},

    {t:"Lung ultrasound", body:`
      <p class="lead">Curvilinear or phased array, abdominal preset, marker to head, perpendicular to pleura. Picks up ~20 cc effusion vs ~200 cc for CXR.</p>
      <h4>Findings</h4>
      <ul>
        <li><b>A-lines</b>: horizontal reverberation artifact; only 1 is the true pleural line. No alveolar/interstitial pathology; also seen in PTX, COPD/asthma. 93% Sp for PCWP &lt;18</li>
        <li><b>B-lines</b>: vertical, from pleura, move down screen, obliterate A-lines → interstitial process (cardiogenic edema, early/atypical PNA, ILD, DAH)</li>
        <li><b>Consolidation/hepatization</b>: lung looks like liver → infection or atelectasis</li>
        <li><b>Pleural effusion</b>: posterior costophrenic recess</li>
        <li><b>Spine sign</b>: seeing spine above the diaphragm suggests effusion (air-filled lung blocks the beam)</li>
      </ul>
      <h4>Protocol</h4>
      <ul><li>4–6 points per hemithorax incl. 2 posterior; Point 4 = PLAPS (posterolateral, mid-post axillary at costophrenic angle — find liver/spleen as landmark)</li></ul>`},

    {t:"IVC & volume assessment", body:`
      <div class="pill">Normal end-expiratory IVC 1.5–2.5 cm; normal collapse &lt;50% with inspiration. Normal aorta ≤3 cm.</div>
      <h4>IVC</h4>
      <ul>
        <li><b>Always assess in 2 planes.</b> Probe just inferior to xiphoid, longitudinal; measure ~2 cm distal to hepatic vein junction (or ~3 cm from RA if junction unclear)</li>
        <li>ID by: proximity to liver, respiratory variability (↓ insp, ↑ exp), termination at RA, thin wall</li>
        <li>Assess collapsibility index, IVC max, sphericity (circular vs ovoid)</li>
        <li>Pitfalls: ascites, big respiratory effort, hepatic mass, positive-pressure ventilation</li>
      </ul>
      <h4>JVP by US</h4>
      <ul><li>Start transverse near clavicle (superior = flat/harder); find point where IJ tapers = JVP. Don't over-compress; image IJ at widest diameter; avoid heel-toe (false apex)</li></ul>`},

    {t:"Fluid responsiveness", body:`
      <p class="lead">You cannot look at the IVC alone — CVP is a static marker blind to the Frank-Starling slope.</p>
      <h4>Concept</h4>
      <ul>
        <li>Preload-dependent (steep part of Starling curve) → fluid responsive; flat part → won't respond. Also depends on contractility & afterload (e.g. sepsis = low preload/afterload)</li>
        <li>With fixed RA pressure, ↑ venous return by shifting stressed:unstressed volume (vasopressors) or ↑ total volume (fluids)</li>
      </ul>
      <h4>Dynamic assessment</h4>
      <ul>
        <li>Echo for contractility (poor LV/RV → volume not the best idea)</li>
        <li>IVC respiratory variability: hypovolemia → ↑ variability → fluids; minimal variability → harder to predict</li>
        <li>LVOT VTI (~stroke volume); cardiac output after passive leg raise</li>
      </ul>`},
  ]
},

/* ========================= CROSS-COVER / ACUTE ========================= */
{
  id:"crosscover", ico:"🌙", name:"Cross-Cover & Acute Calls",
  desc:"The pages you get overnight — a fast, structured first move.",
  topics:[
    {t:"Acute dyspnea", body:`
      <h4>Differential</h4>
      <ul>
        <li>Pulmonary: PNA, aspiration, atelectasis, malignancy, anaphylaxis, angioedema, PTX, COPD/asthma, PE</li>
        <li>Cardiac: CHF, arrhythmia, pericarditis/tamponade, ACS</li>
        <li>Metabolic: anemia, acidosis, toxins</li>
      </ul>
      <h4>First move</h4>
      <ul><li>Baseline labs: VBG, ECG, BNP, trop, CXR → then bedside PoCUS. Does the CXR match the O₂ need? Trending 1–3 L vs sudden change sets urgency</li></ul>
      <div class="flag">COPD exacerbation: if acidotic → BiPAP; high pCO₂ → tell senior. <b>~25% of COPDe have a concurrent PE.</b></div>
      <h4>PE</h4>
      <ul><li>Thrombolysis if: hypotension/shock, worsening RV dysfunction, extensive clot, free-floating RH thrombus, arrest</li></ul>
      <h4>Anaphylaxis — "HIVES"</h4>
      <ul>
        <li>Antihistamine (e.g. ranitidine 50 mg IV q8h ×3), IV fluids, Ventolin (1–2 puffs q15min PRN)</li>
        <li><b>Epinephrine 0.5 mg IM</b>, steroids (methylprednisolone 125 mg IV ×1)</li>
      </ul>`},

    {t:"Acute meningitis", body:`
      <p class="lead">Think meningitis if persistently altered (vs fluctuating delirium).</p>
      <h4>Empiric treatment</h4>
      <ul>
        <li><b>Ceftriaxone 2 g IV q12h</b> + <b>dexamethasone 10 mg IV q6h</b></li>
        <li>± Vancomycin (25 mg/kg load, then 5–20 mg/kg q8–12h, renally adjusted)</li>
        <li>± Acyclovir 10 mg/kg IV q8h · ± Ampicillin 2 g IV q4h (Listeria cover)</li>
      </ul>
      <h4>LP notes</h4>
      <ul>
        <li>CT before LP if: papilledema, focal deficit, new seizure, CNS disease hx, immunocompromised</li>
        <li>Platelets &gt;50, INR &lt;1.5 before LP; PoCUS to assist</li>
        <li>Send: cell count, cytology, glucose, protein; + HSV/VZV/enterovirus, mycobacterial/TB</li>
      </ul>`},

    {t:"Seizure at bedside", body:`
      <h4>Acute management</h4>
      <ul>
        <li>Lorazepam 2 mg IV q3–5 min PRN (10 mg midazolam IM/nasal/buccal if no IV)</li>
        <li>Phenytoin 15–20 mg/kg IV over ≥30 min</li>
        <li>Status pathway: <b>benzo → benzo → IV ASM → IV ASM → call ICU</b> (call immediately if ABC compromise)</li>
      </ul>
      <div class="pill">Give a rescue benzo if: convulsive seizure with resp/hemodynamic compromise, seizure &gt;5 min, ≥3 seizures in 30 min, or status.</div>
      <h4>Is it a seizure?</h4>
      <ul>
        <li>Suggestive: stereotyped, synchronous, non-suppressible, lateral tongue bite, post-ictal confusion, incontinence, Todd's paralysis (transient focal deficit)</li>
        <li>Post-ictal exam: transient asymmetric reflexes, forced gaze, upgoing toe can confirm</li>
        <li>Lower seizure threshold (meds): imipenem, clozapine, bupropion, 4th/5th-gen cephalosporins</li>
      </ul>`},

    {t:"Delirium & agitation", body:`
      <p class="lead">Acute, fluctuating disturbance of attention & awareness. Order <b>CAM</b>. Screen with DIMS-R — don't forget urinary retention & constipation.</p>
      <h4>Approach</h4>
      <ul>
        <li>Treat the underlying cause; supportive: hydration, pain control, O₂, bowel/bladder, temperature, re-orientation</li>
        <li>Avoid: polypharmacy, catheters, immobility</li>
        <li>Test attention: WORLD backwards, serial 7s, days/months backwards, audible tapping</li>
      </ul>
      <h4>Medications</h4>
      <ul>
        <li>Cooperative (PO): <b>quetiapine 6.25 mg dinner / 12.5 mg qHS</b>; risperidone (less sedating); olanzapine; loxapine</li>
        <li>Injectable: loxapine 2.5 mg SQ/IM q1h; haloperidol; methotrimeprazine (nozinan); benzo if violent/agitated</li>
        <li>Trazodone 12.5–25 mg q4h/q8h/qHS (low-dose sedative)</li>
      </ul>`},
  ]
},

/* ========================= ELECTROLYTES & ACID-BASE ========================= */
{
  id:"lytes", ico:"🧪", name:"Electrolytes & Acid-Base",
  desc:"Thresholds, repletion, and correction traps.",
  topics:[
    {t:"Hyperkalemia", body:`
      <p class="lead">ABC-MOVIE, and treat the setting. Watch discordant Cr/K: necrotic legs, ischemic bowel, malignancy, meds (ACEi/ARB, spironolactone/finerenone, TMP-SMX, K supplements).</p>
      <h4>Treatment</h4>
      <ul>
        <li><b>Calcium gluconate 1 g IV</b> immediately (stabilize myocardium) — give first</li>
        <li><b>D50W 25–50 cc</b>, then <b>regular insulin 10 units IV (0.1 u/kg) AFTER the D50</b></li>
        <li>Bicarb: 3 amps (3 × 50 mmol NaHCO₃) in 1 L D5W — esp. if acidemic/low bicarb</li>
        <li>Salbutamol 20–30 puffs (not always practical)</li>
        <li>Remove K (volume status is key): furosemide if euvolemic/hypervolemic; if dry, <b>volume replete</b> (will pee out K); Kayexalate (slow); dialysis is the final option</li>
      </ul>
      <div class="flag">K shifts back out in 4–6 h — the shift buys time, it doesn't remove potassium.</div>`},

    {t:"Hypokalemia", body:`
      <ul>
        <li>1 mEq/L serum deficit ≈ <b>200–300 mEq total body</b> deficit</li>
        <li>Peripheral max <b>40 mmol/L</b> (phlebitis); give larger concentrations centrally</li>
        <li>Replete magnesium too — needed for K reabsorption</li>
      </ul>`},

    {t:"Hyponatremia", body:`
      <div class="flag">Call attending if Na &lt;110 — high risk of overcorrection/seizures; may need critical care.</div>
      <h4>Correction limit</h4>
      <ul>
        <li>Assume chronic unless a Na within 48 h says otherwise → correct <b>≤6–8 mEq / 24 h</b> (central pontine myelinolysis risk; manifests 2–6 days later)</li>
        <li>Careful with K — giving Na turns off RAAS and you'll start dumping K</li>
      </ul>
      <h4>Initial management</h4>
      <ul>
        <li>Stop all IV fluids running; ideally Uosm & UNa before any fluids; repeat Na STAT</li>
        <li>Na deficit = TBW × (desired − actual) → <b>undercut it</b> (overestimates; risk of dumping free water once ADH turns off)</li>
        <li>Foley — call if urine output &gt;150 cc/h</li>
        <li>Hypertonic 3% only for seizure / severe ↓LOC / SIADH, small aliquots</li>
        <li>Moderate: fluid restrict + hold offending meds may suffice</li>
        <li><b>DDAVP</b> raises urine osmolality & prevents overcorrection ("DDAVP lock" + hypertonic)</li>
      </ul>
      <div class="pill">SIADH: normal saline makes it <b>worse</b> (urine osm fixed high → net free-water gain). Hypertonic ⅓ volume is better.</div>`},

    {t:"Acid-base approach", body:`
      <h4>Steps</h4>
      <ul>
        <li>1. Primary: acidemia (pH &lt;7.4) vs alkalemia (&gt;7.4)</li>
        <li>2. The "-osis": metabolic (bicarb) vs respiratory (CO₂)</li>
        <li>3. Anion gap (always) — normal ~12 (note: source says calc against ~22 threshold — use local normal)</li>
        <li>4. Delta-delta (if AG ↑): ΔAG/Δbicarb → bicarb higher than expected = concurrent metabolic alkalosis; lower = concurrent NAGMA</li>
        <li>5. Compensation: met acidosis 1:1 · met alkalosis 1:0.7 · resp acidosis 1:0.3 · resp alkalosis 1:0.5</li>
      </ul>
      <h4>AGMA workup — 5 tests</h4>
      <ul><li>Lactate, ketones, osmolar gap (cutoff 10), urea, salicylates</li></ul>
      <h4>MUDPILE CATS</h4>
      <ul><li>Methanol, metformin, urea, DKA, paraldehyde, propylene glycol, paracetamol, INH, lactate, ethylene glycol, arsenic, toluene, salicylates</li>
      <li>Ingestion history + <em>timing</em> matters (AG may not be elevated initially); include osmolality. For overdose → call poison control; ABCs + antidote, decontaminate, eliminate</li></ul>`},
  ]
},

/* ========================= NEUROLOGY ========================= */
{
  id:"neuro", ico:"🧠", name:"Neurology",
  desc:"Mental status, the DIMS approach, and seizure/epilepsy workup.",
  topics:[
    {t:"Mental status exam & DIMS", body:`
      <p class="lead">Gestalt of normal vs abnormal is very sensitive — "mental status grossly normal." Separate <b>attention</b> from <b>language</b> (drives DIMS vs structural workup).</p>
      <h4>Components</h4>
      <ul>
        <li><b>LOC</b>: awake / drowsy but easily roused / drowsy hard to rouse (sternal rub) / unarousable</li>
        <li><b>Attention</b>: tracking, obeying commands (tell — don't show; avoid reflexive grip); orientation; serial 7s / days / <b>months backwards</b>; hemineglect ("whose arm is this?")</li>
        <li><b>Language</b>: fluency, naming (elbow, glasses, pinky), comprehension (1–3 step commands), repetition</li>
        <li><b>Memory</b> (higher order): delayed recall; remote (last 3 presidents, world events)</li>
      </ul>
      <h4>DIMS — for diffuse processes / inattention</h4>
      <ul>
        <li><b>D</b>rugs, non-CNS <b>I</b>nfection, <b>M</b>etabolic, <b>S</b>tructural (+ add epilepsy)</li>
        <li>Drugs / non-CNS infection / metabolic usually <b>don't</b> give focal deficits</li>
        <li>Structural lesions usually don't give <b>isolated inattention</b></li>
        <li><b>Aphasia is highly localizing</b> → EEG and/or CT/CTA</li>
        <li>Isolated amnesia → short ddx: TGA, opioid amnestic syndrome, neurodegenerative</li>
      </ul>
      <div class="pill">Calling neurology about a confused patient: isolate attention, language, memory. GCS is mainly useful in acute/trauma/triage.</div>`},

    {t:"Seizures & epilepsy", body:`
      <p class="lead">Clinical diagnosis — no confirmatory or exclusion test.</p>
      <h4>Is it a seizure?</h4>
      <ul>
        <li>Suggestive: stereotyped, synchronous, intrusive, non-suppressible, bilateral involvement with lost awareness</li>
        <li>Aura (usually temporal): abnormal smells/sounds, déjà vu, fear/panic, rising sensation</li>
        <li>During: forced head/eye turn, unilateral stiffening, lip-smacking, automatisms, speech arrest, tonic-clonic</li>
        <li>Post-ictal: confusion (duration ~ spell length), <b>lateral</b> tongue bite, incontinence, transient deficits, Todd's paralysis (asymmetric reflexes, upgoing toe)</li>
        <li>Mimics: syncope (pallor, hyperventilation, classic triggers), panic attack</li>
      </ul>
      <h4>Investigations (low yield)</h4>
      <ul><li>CK, lactate, prolactin, low phosphate — non-specific. <b>EEG is not confirmatory</b>; improve yield: EEG close to spell, sleep deprivation, hyperventilation, photic; 3 EEGs. Drug levels validated as troughs; free levels for protein-bound (VPA, carbamazepine, phenytoin)</li></ul>
      <h4>Epilepsy</h4>
      <ul>
        <li>≥2 unprovoked seizures &gt;24 h apart, OR 1 unprovoked with ≥60% recurrence risk</li>
        <li>After 1st unprovoked seizure: no treatment (doesn't reduce lifetime risk beyond ~2 y); MRI + EEG standard</li>
        <li>Threshold-lowering: metabolic (Na, glucose, Ca), drugs (stimulants, alcohol/benzo withdrawal), infection; meds — <b>imipenem, clozapine, bupropion, 4th/5th-gen cephalosporins</b></li>
      </ul>
      <h4>Rescue & ASM</h4>
      <ul>
        <li>Most abort in 1–2 min. Rescue if: convulsive + resp/hemodynamic compromise, &gt;5 min, ≥3 in 30 min, or status</li>
        <li>Lorazepam 1–2 mg IV (4 mg, or midazolam 10 mg IM, for status). Status: benzo → benzo → IV ASM → IV ASM → ICU</li>
        <li>ASM by comorbidity: migraine (VPA, keppra, topiramate), bipolar (VPA, lamotrigine), trigeminal neuralgia (carbamazepine); mind interactions, organ toxicity, teratogenicity</li>
      </ul>`},
  ]
},

/* ========================= COMMON DIAGNOSES ========================= */
{
  id:"diagnoses", ico:"📋", name:"Common Diagnoses",
  desc:"First-day workup and management skeletons.",
  topics:[
    {t:"DKA / HHS", body:`
      <p class="lead">DKA = insulin insufficient for demand → lipolysis/ketones/AGMA + hyperglycemia/osmotic diuresis. HHS = partial deficiency (enough to suppress lipolysis).</p>
      <h4>Etiology (the I's)</h4>
      <ul><li>Infection, iatrogenic (drug change), infant, intra-abdominal (pancreatitis), intoxication (EtOH/cocaine), initial presentation, insulin deficiency, ischemia</li></ul>
      <h4>Severity</h4>
      <ul><li>pH: 7.25–7.30 mild · 7–7.24 mod · &lt;7 severe · &gt;7.3 HHS. Ketones &lt;0.6 in HHS. Mental status: alert→drowsy→stupor/coma</li></ul>
      <h4>Fluids</h4>
      <ul><li>Deficit: DKA 3–6 L, HHS 8–10 L. Bolus 1–2 L RL → <b>1 L/1 h → 500 cc/h ×4 h → 250 cc/h ×4 h</b>; individualize maintenance</li></ul>
      <h4>Potassium</h4>
      <ul>
        <li>&lt;3.3: hold insulin + replace K · 3.3–4.5: KCl 40 mmol/L · 4.5–5.5: 20 mmol/L · &gt;5.5: none</li>
        <li>Max PIV 40 mmol/L, ≤10 mmol/h (≤20 via CVC); add Mg; replace phosphate only if &lt;1 or symptomatic</li>
      </ul>
      <h4>Insulin / close the gap</h4>
      <ul>
        <li>Start only if <b>K &gt;3.3</b>: 0.1 u/kg/h (no bolus unless sick); HHS 0.05 u/kg/h</li>
        <li>CBG q1h; keep mild hyperglycemia 10–15 until gap closes → then D5NS/D5½NS</li>
        <li><b>Don't drop insulin if CBG &lt;14 but gap still open → just add sugar.</b> Bicarb only if pH &lt;6.9</li>
      </ul>
      <h4>SC transition</h4>
      <ul><li>Gap closed + daytime + tolerating PO + improving. Overlap SC with infusion ×2 h; TDD 0.3–0.5 u/kg/day, 50/50 basal/bolus + sliding scale</li></ul>`},

    {t:"Acute coronary syndrome", body:`
      <p class="lead">Consult flow: vitals → ECG → labs → CXR → prior angio/echo → notes → clarify with ED.</p>
      <div class="pill">3-2-1 r/o: 3 cardiac (ACS, dissection, pericarditis/tamponade), 2 pulmonary (PE, PTX), 1 GI (esophageal rupture).</div>
      <h4>Antiplatelets</h4>
      <ul>
        <li><b>ASA 160 mg load → 81 mg OD</b></li>
        <li><b>Ticagrelor 180 mg → 90 mg BID</b> (or clopidogrel 300–600 load → 75 OD). NSTEMI + angio &lt;24 h → hold 2nd antiplatelet</li>
      </ul>
      <h4>Anticoagulation</h4>
      <ul><li>IV UFH preferred (enoxaparin 1 mg/kg SC q12h alternative). Stop once revascularized → DVT prophylaxis unless other indication / LV thrombus; nonrevascularized → AC 48 h UFH then enox ×10 d / to discharge</li></ul>
      <h4>Anti-ischemic (not mandatory)</h4>
      <ul>
        <li>NG spray PRN → patch 0.2–1.2 mg/h → IV infusion (caution if hypotensive/RV infarct)</li>
        <li>Metoprolol 12.5–25 mg PO BID (titrate by 12.5); amlodipine/CCB 2.5–10 mg OD</li>
      </ul>
      <h4>Also</h4>
      <ul><li>Ramipril 2.5–5 mg BID (≤10/day); high-intensity statin (atorvastatin 80 / rosuvastatin 40); cardiac rehab</li>
      <li>Vitals: bradycardia (vagal / AV block) or tachycardia (poor prognosis). RV infarct = preload dependent → cautious fluids, limit nitrates/BB. Don't target 100% O₂</li></ul>
      <h4>MI definition & types</h4>
      <ul>
        <li>MI = troponin &gt;99th percentile <b>+ ≥1 of</b>: ischemic symptoms, new ischemic ECG changes, pathologic Q waves, new RWMA / loss of viable myocardium, or coronary thrombus on angiography</li>
        <li>Type 1: plaque rupture/dissection/erosion. Type 2: supply-demand mismatch (spasm, embolism, anemia, arrhythmia, HTN/hypotension). Types 3–5: sudden death / PCI / CABG-related</li>
        <li>STEMI: compare ST to the TP line; if remote from PCI → fibrinolysis within 30 min. ECG evolution: normal → hyperacute T → ST elevation → Q wave + inverted T → resolves. NSTEMI: ST depressions/TWI <b>don't localize</b></li>
      </ul>
      <details><summary>ACS consult template</summary><div class="inner">
        <ul>
          <li><b>ID</b> · <b>PMHx</b> — primary cardiologist, prior testing (stress, CCTA, cath, echo, Holter)</li>
          <li>Cardiac risk factors · meds/allergies · <b>FHx</b> (premature ASCVD, sudden death) · social (smoking, driving)</li>
          <li><b>Physical</b>: vitals, cardioresp, PoCUS · <b>Investigations</b>: labs/CXR, ECG (baseline, current, serial)</li>
          <li><b>Assessment</b>: is this type-1 ACS? Cardiac chest pain + troponin rise ±fall + dynamic/concerning ECG. If not → discuss non-invasive risk stratification with fellow/staff</li>
          <li>Risk stratify: Killip class, TIMI, GRACE. Highlight therapies already given (ASA? clopidogrel/ticagrelor? enox?)</li>
          <li>Current status: stable/unstable · arrhythmia, decompensated HF, cardiogenic shock · chest pain ongoing / provokable / free</li>
        </ul>
      </div></details>`},

    {t:"GI bleed", body:`
      <h4>Risk & transfusion</h4>
      <ul>
        <li>Risk scores: Glasgow-Blatchford (intervention/death), AIMS65 (mortality)</li>
        <li>Restrictive transfusion <b>Hb &lt;70</b> (&lt;80 if hypotensive, CV disease, or ACS); platelets &gt;30 (&gt;50 if scope planned); <b>TXA not recommended</b></li>
      </ul>
      <h4>Pre-scope</h4>
      <ul>
        <li>Erythromycin 3 mg/kg IV over 45 min, 30–60 min pre-scope (prokinetic, improves visualization)</li>
        <li>PPI reasonable (esp. if ulcer likely); early scope <b>6–24 h</b> better than urgent &lt;6 h; &lt;12 h if cirrhotic</li>
      </ul>
      <h4>Cirrhotic UGIB</h4>
      <ul><li>Octreotide (continue 2–5 d if variceal), ceftriaxone 1 g q24h ≤5 d, scope &lt;12 h; band ligation + NSBB for 2° prophylaxis; discontinue PPI once variceal confirmed</li></ul>
      <h4>LGIB</h4>
      <ul>
        <li>Exclude upper source (hematochezia + instability may be UGIB); endoscopic hemostasis safe if INR &lt;2.5; platelets &gt;30 (&gt;50 if scope)</li>
        <li>CTA localizes arterial vs venous → IR embolization if extravasation</li>
        <li>ASA: continue if 2° prophylaxis; don't hold for GIB or routine endoscopy. DAPT: restart within 3–5 d if held (avoid &lt;1 yr post-DES, &lt;30 d post-BMS, &lt;90 d post-ACS)</li>
      </ul>
      <h4>Reversal</h4>
      <ul><li>Warfarin + INR &gt;2 + massive bleed → <b>PCC</b> (not FFP); avoid vitamin K in acute bleed. DOAC → hold at presentation</li></ul>`},

    {t:"Stroke & TIA", body:`
      <p class="lead">Hyperacute, "negative" symptoms, awareness usually retained. Soft clues for hemorrhage: impaired awareness, vomiting, high BP.</p>
      <h4>Hot stroke</h4>
      <ul>
        <li>Last seen well? AC status/last dose? Disabling deficit? Baseline function? → <b>code stroke</b></li>
        <li>Order STAT non-contrast CT head + CTA arch-to-vertex ± CT perfusion → call radiology → prep transfer</li>
        <li>NIHSS screens big cortical issues (LOC, orientation, commands, gaze, fields, face, arms…)</li>
      </ul>
      <h4>Management principles</h4>
      <ul>
        <li>Maximize perfusion: HOB flat, IV fluids, permissive HTN &lt;220/120</li>
        <li>Post: no reperfusion &lt;220/120; post-TNK &lt;185/110; post-EVT SBP 160–180</li>
        <li>Hold home antihypertensives (continue β-blocker to avoid rebound); hold diabetes meds, ISS if dysphagia; large MCA/PCA or cerebellar → avoid sedating PRNs, Na &gt;140–145 (3% infusion), HOB up</li>
      </ul>
      <h4>TIA / minor stroke</h4>
      <ul><li>Medical emergency (recurrence front-loaded). NIHSS ≤6 within 72 h → <b>ASA + clopidogrel ×3 weeks</b> then ASA alone. TNK for eligible acute ischemic stroke</li></ul>`},

    {t:"Respiratory failure", body:`
      <h4>Hypoxemia mechanisms</h4>
      <ul>
        <li>Low FiO₂ (altitude); alveolar hypoventilation (opioids, brainstem, OHS, NM weakness); <b>V/Q mismatch</b> (high V/Q = PE/emphysema; low V/Q = obstructive/PNA/mucus); <b>shunt</b> (PNA, atelectasis, ARDS, cardiac/pulmonary AVM — doesn't correct with O₂); impaired diffusion (fibrosis, edema, sepsis)</li>
        <li>Saturation gap → methemoglobinemia or CO poisoning (dapsone → metHb: low sat, minimal WOB → get ABG)</li>
      </ul>
      <h4>Oxygen delivery</h4>
      <ul>
        <li>Nasal cannula ~4%/L, FiO₂ 0.23–0.35 · Simple mask 6–10 L (≥5) 0.30–0.50 · Venturi 0.24–0.6 · Non-rebreather 0.5–0.85</li>
        <li>HFNC: FiO₂ up to 1.0, 10–60 L/min; ROX &gt;4.88 low intubation risk, &lt;3.85 high</li>
        <li>NIPPV (call ICU): WOB, pH &lt;7.25, pCO₂ &gt;45, mixed failure. CI: can't protect airway, aspiration risk, arrest, facial abnormality, untreated PTX</li>
      </ul>`},

    {t:"Acute kidney injury", body:`
      <p class="lead">Oliguria &lt;500 cc/day; anuria &lt;100 cc/day.</p>
      <h4>Pre-renal</h4>
      <ul><li>True loss (hemorrhage, GI, diuretics, burns) or ↓ effective volume (CHF, cirrhosis, nephrosis, sepsis); macro (RAS, dissection); micro-afferent (NSAIDs, ASA, SGLT2i)</li></ul>
      <h4>Renal</h4>
      <ul>
        <li><b>ATN</b> (ischemia, contrast, aminoglycosides, cisplatin, tenofovir, vanco, pigments) — granular casts + fluid response distinguish from pre-renal</li>
        <li><b>AIN</b> (abx, diuretics, NSAIDs, PPIs, allopurinol) — sterile pyuria</li>
        <li>Glomerular: nephritic (active sediment → GN workup: ANA/ENA/ANCA, anti-GBM, C3/C4, cryo, Hep/HIV, cultures, urgent nephro ± biopsy) vs nephrotic "PALE" (proteinuria &gt;3.5, ↓alb, ↑lipids, edema)</li>
        <li>TLS: hydrate + reduce uric acid (allopurinol/rasburicase); fluids ± lasix</li>
      </ul>
      <h4>Post-renal</h4>
      <ul><li>Foley, renal US vs CT-KUB. Beware post-obstructive diuresis (&gt;3 L/day → replace with ½ NS, taper to ~50%)</li></ul>
      <h4>Contrast nephropathy</h4>
      <ul><li>SCr rises 24–48 h, recovers 3–7 d; risk: DM nephropathy, CKD, CHF, high-dose/arterial contrast, myeloma</li></ul>`},

    {t:"Elevated LFTs", body:`
      <p class="lead">Bilirubin &gt;40–60 ≈ jaundice. Hepatocellular vs cholestatic via <b>R-factor</b> (R&gt;5 HC, R&lt;2 cholestatic). Isolated GGT ≈ alcohol.</p>
      <h4>Common causes</h4>
      <ul><li>MASLD, alcohol, drug-induced (acetaminophen, statins, MTX, INH, rifampin, allopurinol, amiodarone, supplements), viral hepatitis, biliary obstruction</li></ul>
      <h4>Workup</h4>
      <ul>
        <li>CBC, lytes, Cr, LFTs, albumin, total/direct bili, INR, glucose, lipids, abdo US w/ Doppler</li>
        <li>Etiology: viral serologies, autoimmune (ANA, ASMA, anti-LKM1, AMA, IgG), ferritin/iron, ceruloplasmin, A1AT, tylenol & EtOH levels, tTG, TSH</li>
        <li>"1000s club" short ddx: ischemic hepatitis, tylenol, acute viral, autoimmune, Wilson's, Budd-Chiari, acute alcoholic hepatitis</li>
      </ul>
      <div class="flag">Escalate: synthetic failure (INR &gt;1.5, plt &lt;150, alb &lt;35, hypoglycemia, encephalopathy/asterixis, bili &gt;34) → MELD-Na ≥15 → transplant referral; calculate Child-Pugh.</div>`},

    {t:"Dysphagia", body:`
      <ul>
        <li>Distinguish oropharyngeal (→ SLP assessment) vs esophageal; history is key</li>
        <li>Alarm symptoms: regurgitation, GI bleed, abdominal mass, weight loss, anemia, age &gt;50</li>
        <li>Scope yields: GERD/esophagitis (17–30%), stricture (2–40%), normal (24–30%), cancer (3–8%)</li>
        <li>Rx: empiric PPI + strong consideration for EGD; if symptoms resolve on PPI, reassess need for EGD; manometry if persistent with normal EGD</li>
      </ul>`},
  ]
},

/* ========================= GOALS OF CARE ========================= */
{
  id:"goc", ico:"🕊️", name:"Goals of Care",
  desc:"The serious-illness conversation.",
  topics:[
    {t:"Goals of care conversation", body:`
      <p class="lead">Serious Illness Conversation Guide (Bernacki). Most patients want the truth about prognosis; you won't harm by talking about EOL.</p>
      <h4>Who to target</h4>
      <ul>
        <li>Solid tumor + mets / hypercalcemia / cord compression; CHF III–IV with ≥2 admissions; dialysis + 75+; COPD on home O₂ FEV1 &lt;35%</li>
        <li>"Would you be surprised if this patient died in the next year?" = no; or ≥80 with comorbidities & frail (CFS ≥6)</li>
      </ul>
      <h4>Framework</h4>
      <ul>
        <li>Set up (place, supports present); check understanding of disease & trajectory</li>
        <li>Explore fears/concerns, what to avoid; explain treatment ladder: comfort → medical mgmt → ICU → intubation → CPR</li>
        <li>Make a recommendation tied to their stated goals</li>
        <li><b>"I wish… I worry… I wonder…"</b> — align / be truthful / softly recommend</li>
      </ul>
      <div class="flag">Post-CPR survival to discharge: moderate frailty (CFS &gt;5) ~1%; advanced age ~3% survival, ~2% with neuro recovery.</div>`},
  ]
},

/* ========================= MEDICATIONS & SYMPTOM MGMT ========================= */
{
  id:"wardmeds", ico:"💊", name:"Medications & Symptom Management",
  desc:"Quick-grab regimens. Always confirm against local protocol / pharmacy.",
  topics:[
    {t:"Medication cheat sheet (by indication)", body:`
      <div class="flag">Typical adult dosing — <b>always confirm against local protocol/pharmacy before giving.</b></div>
      <details><summary>Seizures / status</summary><div class="inner"><ul>
        <li>Lorazepam 1–2 mg IV (4 mg for status); midazolam 10 mg IM</li>
        <li>Pathway: benzo → benzo → IV ASM → IV ASM → ICU</li>
        <li>Maintenance: levetiracetam, lamotrigine, valproate, topiramate, carbamazepine (choose by comorbidity)</li>
      </ul></div></details>
      <details><summary>Hyperkalemia</summary><div class="inner"><ul>
        <li>Calcium gluconate 1 g IV first · D50W 25–50 cc · regular insulin 10 u IV after D50</li>
        <li>Bicarb 3 amps in 1 L D5W (if acidemic) · salbutamol 20–30 puffs · furosemide if not dry · Kayexalate (slow) · dialysis last</li>
      </ul></div></details>
      <details><summary>K / Na repletion</summary><div class="inner"><ul>
        <li>KCl peripheral max 40 mmol/L; 1 mEq/L deficit ≈ 200–300 mEq total body</li>
        <li>3% saline only for seizure/severe ↓LOC or SIADH; correct Na ≤6–8 mEq/24 h; DDAVP to prevent overcorrection</li>
      </ul></div></details>
      <details><summary>DKA / HHS</summary><div class="inner"><ul>
        <li>Fluids: 1–2 L RL bolus → 1 L/1 h → 500 cc/h ×4 → 250 cc/h ×4</li>
        <li>K: &lt;3.3 hold insulin+replace; 3.3–4.5 → 40; 4.5–5.5 → 20; &gt;5.5 none</li>
        <li>Insulin 0.1 u/kg/h (K&gt;3.3; HHS 0.05); dextrose when glucose 10–15; bicarb only pH&lt;6.9</li>
      </ul></div></details>
      <details><summary>ACS</summary><div class="inner"><ul>
        <li>ASA 160 → 81 OD; ticagrelor 180 → 90 BID (or clopidogrel 300–600 → 75)</li>
        <li>UFH IV (or enoxaparin 1 mg/kg SC q12h); NG PRN→patch→IV; metoprolol 12.5–25 BID; ramipril 2.5–5 BID; atorvastatin 80 / rosuvastatin 40</li>
      </ul></div></details>
      <details><summary>Stroke / TIA</summary><div class="inner"><ul>
        <li>Minor stroke/TIA (NIHSS ≤6, &lt;72 h): ASA + clopidogrel ×3 wk → ASA</li>
        <li>TNK for eligible acute ischemic stroke; 3% NaCl for edema (Na &gt;140–145)</li>
      </ul></div></details>
      <details><summary>GI bleed</summary><div class="inner"><ul>
        <li>Erythromycin 3 mg/kg IV pre-scope; PPI; octreotide + ceftriaxone 1 g q24h (cirrhotic)</li>
        <li>Transfuse Hb &lt;70 (&lt;80 if CV/ACS); platelets &gt;30 (&gt;50 if scope); PCC if INR&gt;2 + massive bleed</li>
      </ul></div></details>
      <details><summary>Delirium / palliative</summary><div class="inner"><ul>
        <li>Quetiapine 6.25 dinner / 12.5 qHS; loxapine 2.5 mg SQ/IM q1h; trazodone 12.5–25 mg</li>
        <li>Pain: acetaminophen RTC, morphine, hydromorphone (5× morphine); nausea: haloperidol 0.5–1 mg, olanzapine 2.5 qHS</li>
      </ul></div></details>`},

    {t:"Common symptoms and management", body:`
      <h4>Pain ladder</h4>
      <ul>
        <li>Non-opioid: round-the-clock acetaminophen; magnesium (migraine/neuropathic); gabapentin; steroids (pain/nausea/edema)</li>
        <li><b>Avoid tramadol</b> (serotonin syndrome, hypoglycemia, ↓seizure threshold) and <b>T3/codeine</b> (variable metabolism) — just use morphine. <b>Hydromorphone ≈ 5× morphine.</b></li>
        <li>Advanced: dexmedetomidine, lidocaine, ketamine, propofol, intrathecal pumps. Naloxone microdose 0.01–0.04</li>
      </ul>
      <h4>Nausea</h4>
      <ul>
        <li>Haloperidol 0.5–1 mg (very effective); olanzapine 2.5 mg qHS; metoclopramide (prokinetic — avoid in obstruction, don't combine with diphenhydramine); dexamethasone (esp. headache); Gravol (vertigo, sedating); ondansetron (constipation, ↑QTc); isopropyl-alcohol wipes (evidence-based)</li>
      </ul>
      <h4>Dyspnea & secretions</h4>
      <ul><li>Opioids + bedside fan (trigeminal). Type 1 (hypopharyngeal) secretions → glycopyrrolate (suctioning ineffective)</li></ul>
      <h4>End-of-life signs</h4>
      <ul><li>Cyanosis (look around the knees), rhythmic mandibular breathing, loss of radial pulses (very sensitive), secretions. Use EOL order sets; pre-communicate double effect</li></ul>`},
  ]
},

/* ========================= REFERENCE ========================= */
{
  id:"reference", ico:"📖", name:"Reference",
  desc:"Abbreviations used across these notes.",
  topics:[
    {t:"Abbreviations", body:`
      <ul>
        <li><b>DIMS</b> Drugs, Infection, Metabolic, Structural · <b>DIMS-R</b> + retention/constipation</li>
        <li><b>aLOC/LOC/GCS</b> level of consciousness · <b>CAM</b> Confusion Assessment Method</li>
        <li><b>AG / AGMA / NAGMA</b> anion gap (± metabolic acidosis) · <b>CPM</b> central pontine myelinolysis</li>
        <li><b>SIADH</b> · <b>DDAVP</b> desmopressin · <b>TLS</b> tumour lysis syndrome · <b>ATN/AIN</b></li>
        <li><b>DKA/HHS</b> · <b>TDD</b> total daily dose · <b>ISS</b> insulin sliding scale · <b>CBG</b> capillary glucose</li>
        <li><b>NIPPV/HFNC/ROX</b> · <b>OHS</b> obesity hypoventilation · <b>V/Q</b> ventilation/perfusion</li>
        <li><b>NIHSS · TIA · TNK</b> tenecteplase · <b>EVT</b> · <b>ICH/SAH/IVH</b></li>
        <li><b>ACS/MI · RWMA · DAPT · NSBB · PPI · DES/BMS · AC · DVTp</b></li>
        <li><b>GIB/UGIB/LGIB</b> · <b>MELD · CFS</b> Clinical Frailty Scale · <b>GOC/EOL</b> · <b>HM</b> hydromorphone</li>
      </ul>`},
  ]
},

/* ========================= TRIALS ========================= */
{
  id:"tr-cards", ico:"🫀", name:"Cardiology",
  desc:"",
  topics:[
    {t:"SPRINT (2015)", body:`<p class="lead">Intensive SBP target &lt;120 vs &lt;140 in high-risk non-diabetic hypertensives.</p><h4>Bottom line</h4><ul><li>↓ CV events and all-cause mortality; more AKI, hypotension, and syncope</li></ul><p><a href="https://pubmed.ncbi.nlm.nih.gov/?term=SPRINT+intensive+blood+pressure+control" target="_blank" rel="noopener">View on PubMed →</a></p>`},
    {t:"RALES (1999)", body:`<p class="lead">Spironolactone added to standard therapy in severe HFrEF.</p><h4>Bottom line</h4><ul><li>~30% ↓ mortality; watch for hyperkalemia/gynecomastia</li></ul><p><a href="https://pubmed.ncbi.nlm.nih.gov/?term=RALES+spironolactone+heart+failure" target="_blank" rel="noopener">View on PubMed →</a></p>`},
    {t:"PARADIGM-HF (2014)", body:`<p class="lead">Sacubitril/valsartan (ARNI) vs enalapril in HFrEF.</p><h4>Bottom line</h4><ul><li>↓ CV death & HF hospitalization (~20%) — established ARNI as first-line</li></ul><p><a href="https://pubmed.ncbi.nlm.nih.gov/?term=PARADIGM-HF+sacubitril+valsartan" target="_blank" rel="noopener">View on PubMed →</a></p>`},
    {t:"DAPA-HF (2019)", body:`<p class="lead">Dapagliflozin (SGLT2i) in HFrEF, with and without diabetes.</p><h4>Bottom line</h4><ul><li>↓ worsening HF and CV death — SGLT2i now a pillar of HFrEF therapy</li></ul><p><a href="https://pubmed.ncbi.nlm.nih.gov/?term=DAPA-HF+dapagliflozin+heart+failure" target="_blank" rel="noopener">View on PubMed →</a></p>`},
    {t:"ISCHEMIA (2020)", body:`<p class="lead">Stable CAD + moderate-severe ischemia: routine invasive vs optimal medical therapy.</p><h4>Bottom line</h4><ul><li>No reduction in CV events/death with routine invasive strategy — OMT first is reasonable</li></ul><p><a href="https://pubmed.ncbi.nlm.nih.gov/?term=ISCHEMIA+trial+invasive+stable+coronary" target="_blank" rel="noopener">View on PubMed →</a></p>`},
    {t:"AFFIRM (2002)", body:`<p class="lead">Rate vs rhythm control in atrial fibrillation.</p><h4>Bottom line</h4><ul><li>No survival difference — rate control a reasonable default in many patients</li></ul><p><a href="https://pubmed.ncbi.nlm.nih.gov/?term=AFFIRM+rate+rhythm+atrial+fibrillation" target="_blank" rel="noopener">View on PubMed →</a></p>`},
    {t:"COMPASS (2017)", body:`<p class="lead">Rivaroxaban 2.5 mg BID + ASA vs ASA alone in stable CAD/PAD.</p><h4>Bottom line</h4><ul><li>↓ MACE and mortality; more major bleeding</li></ul><p><a href="https://pubmed.ncbi.nlm.nih.gov/?term=COMPASS+rivaroxaban+aspirin+stable+cardiovascular" target="_blank" rel="noopener">View on PubMed →</a></p>`},
  ]
},
{
  id:"tr-pulm", ico:"🫁", name:"Pulmonary & Critical Care",
  desc:"",
  topics:[
    {t:"ARDSNet / ARMA (2000)", body:`<p class="lead">Low tidal volume (6 mL/kg) vs 12 mL/kg in ARDS.</p><h4>Bottom line</h4><ul><li>↓ mortality — the foundation of lung-protective ventilation</li></ul><p><a href="https://pubmed.ncbi.nlm.nih.gov/?term=ARDS+network+low+tidal+volume+ventilation" target="_blank" rel="noopener">View on PubMed →</a></p>`},
    {t:"PROSEVA (2013)", body:`<p class="lead">Prone positioning ≥16 h/day in severe ARDS (P/F &lt;150).</p><h4>Bottom line</h4><ul><li>Significant ↓ mortality — prone early in severe ARDS</li></ul><p><a href="https://pubmed.ncbi.nlm.nih.gov/?term=PROSEVA+prone+positioning+ARDS" target="_blank" rel="noopener">View on PubMed →</a></p>`},
    {t:"RECOVERY — Dexamethasone (2021)", body:`<p class="lead">Dexamethasone in COVID-19 requiring oxygen or ventilation.</p><h4>Bottom line</h4><ul><li>↓ mortality in those needing O₂/ventilation; no benefit (possible harm) if no O₂ need</li></ul><p><a href="https://pubmed.ncbi.nlm.nih.gov/?term=RECOVERY+dexamethasone+covid-19" target="_blank" rel="noopener">View on PubMed →</a></p>`},
    {t:"ProCESS / ARISE / ProMISe (2014–15)", body:`<p class="lead">Protocolized early goal-directed therapy (EGDT) vs usual care in septic shock.</p><h4>Bottom line</h4><ul><li>No benefit of protocolized EGDT over good usual care — retired the mandatory Rivers protocol</li></ul><p><a href="https://pubmed.ncbi.nlm.nih.gov/?term=ProCESS+ARISE+ProMISe+early+goal+directed+therapy+sepsis" target="_blank" rel="noopener">View on PubMed →</a></p>`},
    {t:"TTM (2013)", body:`<p class="lead">Targeted temperature 33 °C vs 36 °C after out-of-hospital cardiac arrest.</p><h4>Bottom line</h4><ul><li>No difference in survival/neuro outcome — 36 °C acceptable; avoid fever</li></ul><p><a href="https://pubmed.ncbi.nlm.nih.gov/?term=targeted+temperature+management+33+36+cardiac+arrest" target="_blank" rel="noopener">View on PubMed →</a></p>`},
  ]
},
{
  id:"tr-renal", ico:"🫘", name:"Nephrology",
  desc:"",
  topics:[
    {t:"CREDENCE (2019)", body:`<p class="lead">Canagliflozin in diabetic CKD with albuminuria.</p><h4>Bottom line</h4><ul><li>↓ kidney failure, doubling of creatinine, and CV events</li></ul><p><a href="https://pubmed.ncbi.nlm.nih.gov/?term=CREDENCE+canagliflozin+diabetic+kidney" target="_blank" rel="noopener">View on PubMed →</a></p>`},
    {t:"DAPA-CKD (2020)", body:`<p class="lead">Dapagliflozin in CKD, with and without diabetes.</p><h4>Bottom line</h4><ul><li>↓ CKD progression and mortality — SGLT2i for proteinuric CKD broadly</li></ul><p><a href="https://pubmed.ncbi.nlm.nih.gov/?term=DAPA-CKD+dapagliflozin+chronic+kidney+disease" target="_blank" rel="noopener">View on PubMed →</a></p>`},
    {t:"STARRT-AKI (2020)", body:`<p class="lead">Accelerated vs standard timing of renal replacement therapy in AKI.</p><h4>Bottom line</h4><ul><li>No mortality benefit to early RRT; more dialysis dependence — wait for a clear indication</li></ul><p><a href="https://pubmed.ncbi.nlm.nih.gov/?term=STARRT-AKI+timing+renal+replacement+therapy" target="_blank" rel="noopener">View on PubMed →</a></p>`},
  ]
},
{
  id:"tr-endo", ico:"🍬", name:"Endocrine",
  desc:"",
  topics:[
    {t:"UKPDS (1998)", body:`<p class="lead">Intensive glucose control in newly diagnosed type 2 diabetes.</p><h4>Bottom line</h4><ul><li>↓ microvascular complications; legacy effect over long-term follow-up</li></ul><p><a href="https://pubmed.ncbi.nlm.nih.gov/?term=UKPDS+intensive+blood+glucose+type+2+diabetes" target="_blank" rel="noopener">View on PubMed →</a></p>`},
    {t:"ACCORD (2008)", body:`<p class="lead">Intensive glucose (HbA1c &lt;6%) vs standard in high-risk T2DM.</p><h4>Bottom line</h4><ul><li>↑ mortality with intensive control — stopped early; avoid over-tight targets in high-risk patients</li></ul><p><a href="https://pubmed.ncbi.nlm.nih.gov/?term=ACCORD+intensive+glucose+lowering+type+2+diabetes" target="_blank" rel="noopener">View on PubMed →</a></p>`},
    {t:"EMPA-REG OUTCOME (2015)", body:`<p class="lead">Empagliflozin in T2DM with established CV disease.</p><h4>Bottom line</h4><ul><li>↓ CV death and HF hospitalization — first SGLT2i CV-outcome benefit</li></ul><p><a href="https://pubmed.ncbi.nlm.nih.gov/?term=EMPA-REG+OUTCOME+empagliflozin" target="_blank" rel="noopener">View on PubMed →</a></p>`},
    {t:"LEADER (2016)", body:`<p class="lead">Liraglutide (GLP-1 RA) in T2DM at high CV risk.</p><h4>Bottom line</h4><ul><li>↓ CV events and mortality — GLP-1 RA CV benefit</li></ul><p><a href="https://pubmed.ncbi.nlm.nih.gov/?term=LEADER+liraglutide+cardiovascular+outcomes" target="_blank" rel="noopener">View on PubMed →</a></p>`},
  ]
},
{
  id:"tr-gi", ico:"🫄", name:"GI & Hepatology",
  desc:"",
  topics:[
    {t:"Transfusion in GI bleed — Villanueva (2013)", body:`<p class="lead">Restrictive (Hb &lt;70) vs liberal (Hb &lt;90) transfusion in acute UGIB.</p><h4>Bottom line</h4><ul><li>Restrictive strategy ↑ survival and ↓ rebleeding — basis of the Hb &lt;70 threshold</li></ul><p><a href="https://pubmed.ncbi.nlm.nih.gov/?term=Villanueva+transfusion+strategies+acute+upper+gastrointestinal+bleeding" target="_blank" rel="noopener">View on PubMed →</a></p>`},
    {t:"Early TIPS — García-Pagán (2010)", body:`<p class="lead">Early TIPS vs standard therapy in high-risk cirrhotic variceal bleeding.</p><h4>Bottom line</h4><ul><li>↓ rebleeding and mortality — consider early TIPS in high-risk patients</li></ul><p><a href="https://pubmed.ncbi.nlm.nih.gov/?term=early+TIPS+variceal+bleeding+cirrhosis+Garcia-Pagan" target="_blank" rel="noopener">View on PubMed →</a></p>`},
    {t:"STOPAH (2015)", body:`<p class="lead">Prednisolone and/or pentoxifylline in severe alcoholic hepatitis.</p><h4>Bottom line</h4><ul><li>Prednisolone gave a modest 28-day survival signal (not significant overall); no long-term benefit; pentoxifylline ineffective</li></ul><p><a href="https://pubmed.ncbi.nlm.nih.gov/?term=STOPAH+prednisolone+pentoxifylline+alcoholic+hepatitis" target="_blank" rel="noopener">View on PubMed →</a></p>`},
  ]
},
{
  id:"tr-id", ico:"🦠", name:"Infectious Disease",
  desc:"",
  topics:[
    {t:"POET (2019)", body:`<p class="lead">Oral step-down vs continued IV antibiotics for stable left-sided endocarditis.</p><h4>Bottom line</h4><ul><li>Oral step-down non-inferior in selected, stabilized patients</li></ul><p><a href="https://pubmed.ncbi.nlm.nih.gov/?term=POET+partial+oral+antibiotic+endocarditis" target="_blank" rel="noopener">View on PubMed →</a></p>`},
    {t:"OVIVA (2019)", body:`<p class="lead">Oral vs IV antibiotics for bone and joint infection (first 6 weeks).</p><h4>Bottom line</h4><ul><li>Oral non-inferior to IV — supports earlier oral switch in bone/joint infection</li></ul><p><a href="https://pubmed.ncbi.nlm.nih.gov/?term=OVIVA+oral+versus+intravenous+antibiotics+bone+joint+infection" target="_blank" rel="noopener">View on PubMed →</a></p>`},
  ]
},
{
  id:"tr-heme", ico:"🩸", name:"Hematology",
  desc:"",
  topics:[
    {t:"TRICC (1999)", body:`<p class="lead">Restrictive (Hb 70) vs liberal (Hb 100) transfusion in critically ill patients.</p><h4>Bottom line</h4><ul><li>Restrictive at least as good — established restrictive transfusion in the ICU</li></ul><p><a href="https://pubmed.ncbi.nlm.nih.gov/?term=TRICC+transfusion+requirements+critical+care" target="_blank" rel="noopener">View on PubMed →</a></p>`},
    {t:"RE-LY (2009)", body:`<p class="lead">Dabigatran vs warfarin in non-valvular atrial fibrillation.</p><h4>Bottom line</h4><ul><li>Dabigatran 150 mg ↓ stroke vs warfarin — first DOAC vs warfarin AF trial</li></ul><p><a href="https://pubmed.ncbi.nlm.nih.gov/?term=RE-LY+dabigatran+warfarin+atrial+fibrillation" target="_blank" rel="noopener">View on PubMed →</a></p>`},
    {t:"ARISTOTLE (2011)", body:`<p class="lead">Apixaban vs warfarin in atrial fibrillation.</p><h4>Bottom line</h4><ul><li>↓ stroke, ↓ major bleeding, and ↓ mortality vs warfarin</li></ul><p><a href="https://pubmed.ncbi.nlm.nih.gov/?term=ARISTOTLE+apixaban+warfarin+atrial+fibrillation" target="_blank" rel="noopener">View on PubMed →</a></p>`},
  ]
},
{
  id:"tr-neuro", ico:"🧠", name:"Neurology",
  desc:"",
  topics:[
    {t:"NINDS (1995)", body:`<p class="lead">IV tPA within 3 h of acute ischemic stroke.</p><h4>Bottom line</h4><ul><li>Improved 90-day functional outcomes — launched thrombolysis for stroke</li></ul><p><a href="https://pubmed.ncbi.nlm.nih.gov/?term=NINDS+tissue+plasminogen+activator+acute+ischemic+stroke" target="_blank" rel="noopener">View on PubMed →</a></p>`},
    {t:"DAWN (2018)", body:`<p class="lead">Mechanical thrombectomy 6–24 h post-stroke with clinical-imaging mismatch.</p><h4>Bottom line</h4><ul><li>Large benefit — extended the thrombectomy window in selected patients</li></ul><p><a href="https://pubmed.ncbi.nlm.nih.gov/?term=DAWN+thrombectomy+stroke+mismatch" target="_blank" rel="noopener">View on PubMed →</a></p>`},
    {t:"POINT / CHANCE (2018 / 2013)", body:`<p class="lead">Short-course DAPT (ASA + clopidogrel) after minor stroke or high-risk TIA.</p><h4>Bottom line</h4><ul><li>↓ recurrent stroke; benefit early, so keep the course short (~21 days) to limit bleeding</li></ul><p><a href="https://pubmed.ncbi.nlm.nih.gov/?term=POINT+clopidogrel+aspirin+minor+stroke+TIA" target="_blank" rel="noopener">View on PubMed →</a></p>`},
  ]
},

/* ========================= CLINICAL PEARLS (by system — add your own) ========================= */
{
  id:"pl-cards", ico:"🫀", name:"Cardiology",
  desc:"",
  topics:[
    {t:"AF with RVR — find the driver", body:`<ul><li>New AF with RVR that won't rate-control? Hunt for the driver — sepsis, PE, pain, hypovolemia, thyrotoxicosis — before piling on more nodal agents.</li></ul>`},
  ]
},
{
  id:"pl-pulm", ico:"🫁", name:"Pulmonary",
  desc:"",
  topics:[
    {t:"COPD exacerbation — think PE", body:`<ul><li>~1 in 4 COPD exacerbations has a concurrent PE. Keep it on the differential when the picture doesn't quite fit.</li></ul>`},
  ]
},
{
  id:"pl-renal", ico:"🫘", name:"Nephrology",
  desc:"",
  topics:[
    {t:"Muddy-brown casts = ATN", body:`<ul><li>Granular ("muddy-brown") casts plus no response to a fluid challenge point to ATN over pre-renal AKI.</li></ul>`},
  ]
},
{
  id:"pl-endo", ico:"🍬", name:"Endocrine",
  desc:"",
  topics:[
    {t:"Euglycemic DKA on SGLT2i", body:`<ul><li>Euglycemic DKA is real on SGLT2 inhibitors — check a gas and ketones even when the glucose looks normal.</li></ul>`},
  ]
},
{
  id:"pl-gi", ico:"🫄", name:"GI & Hepatology",
  desc:"",
  topics:[
    {t:"Cirrhotic GI bleed → antibiotics", body:`<ul><li>Every cirrhotic with a GI bleed gets prophylactic ceftriaxone — it lowers mortality, not just infection risk.</li></ul>`},
  ]
},
{
  id:"pl-id", ico:"🦠", name:"Infectious Disease",
  desc:"",
  topics:[
    {t:"Neutropenic fever — 60 minutes", body:`<ul><li>Neutropenic fever is an emergency: draw cultures and give the first dose of empiric anti-pseudomonal beta-lactam within 60 minutes.</li></ul>`},
  ]
},
{
  id:"pl-heme", ico:"🩸", name:"Heme / Onc",
  desc:"",
  topics:[
    {t:"Smear early in cytopenias", body:`<ul><li>Order a peripheral smear early in any new cytopenia — schistocytes flip the workup toward a thrombotic microangiopathy.</li></ul>`},
  ]
},
{
  id:"pl-neuro", ico:"🧠", name:"Neurology",
  desc:"",
  topics:[
    {t:"Check glucose in stroke", body:`<ul><li>Always check a glucose in suspected stroke — hypoglycemia is a classic, reversible stroke mimic.</li></ul>`},
  ]
},
{
  id:"pl-gen", ico:"⭐", name:"General / Cross-cover",
  desc:"",
  topics:[
    {t:"Cross-cover is about trends", body:`<ul><li>Overnight cross-cover is about trends: is this new, or the same as it was this morning? Compare before you act.</li></ul>`},
  ]
},

/* ========================= DOT PHRASES ========================= */
{
  id:"dotphrases", ico:"📝", name:"Dot Phrases",
  desc:"Copy-paste note & order scaffolds. Fill the [ ] and *** placeholders. Verify all doses locally.",
  topics:[
    {t:".chestpain — Chest pain (cross-cover)", note:"Called to bedside for chest pain.", copy:
`CROSS-COVER NOTE — Chest pain
Called at [time] for chest pain. Assessed at bedside.
HPI: onset [ ], character [ ], radiation [ ], associated [SOB/diaphoresis/nausea], exertional [ ], prior similar [ ].
Vitals: T__ HR__ BP__(both arms if dissection concern) RR__ SpO2__.
Exam: CVS [ ], Resp [ ], legs [ ].
r/o (3-2-1): ACS, dissection, pericarditis/tamponade | PE, PTX | esophageal.
Done: ECG (compared to prior) [ ], troponin [ ], CXR [ ]. Given: [ASA / NTG / analgesia].
Impression: [ ].
Plan: [serial ECG/trop, tele, cardiology if ___, reassess]. Will update MRP.`},

    {t:".sob — Shortness of breath (cross-cover)", note:"Called to bedside for dyspnea.", copy:
`CROSS-COVER NOTE — Dyspnea
Called at [time] for SOB / rising O2 requirement (from __ to __).
HPI: onset [sudden/gradual], orthopnea/PND [ ], cough/sputum [ ], chest pain [ ], leg swelling [ ].
Vitals: T__ HR__ BP__ RR__ SpO2__ (__ O2). Work of breathing: [ ].
Exam: Resp [air entry, crackles, wheeze], CVS [JVP, edema], legs [ ].
DDx: CHF, PNA, COPD/asthma, PE, PTX, aspiration, anaphylaxis, ACS.
Done: VBG/ABG [ ], ECG [ ], CXR [ ], BNP/trop [ ], PoCUS [ ]. Given: [O2 titrated / diuretic / bronchodilator].
Impression: [ ].
Plan: [O2 target ___, treat cause, reassess, escalate/ICU if ___].`},

    {t:".ams — Altered mental status / delirium", note:"Called for confusion/agitation.", copy:
`CROSS-COVER NOTE — Altered mental status
Called at [time] for [confusion/agitation]. Baseline cognition: [ ].
Vitals incl. glucose: T__ HR__ BP__ RR__ SpO2__ CBG__.
Exam: LOC [ ]; attention (WORLD backwards / months backwards) [ ]; focal deficits [ ]; CAM [ ].
DIMS-R workup: Drugs (new/sedating, opioids, benzo/EtOH withdrawal) [ ]; Infection (urine, chest, lines) [ ]; Metabolic (glucose, Na, Ca, uremia, O2/CO2) [ ]; Structural (focal signs → imaging) [ ]; Retention/constipation [ ].
Done: [glucose, lytes, CBC, ___].
Impression: [likely hypo/hyperactive delirium 2° to ___ vs ___].
Plan: treat cause; non-pharm measures; sedation if unsafe: quetiapine 6.25–12.5 / loxapine 2.5 IM PRN. Reassess.`},

    {t:".aki — Acute kidney injury", note:"New AKI workup note.", copy:
`AKI NOTE
Baseline Cr [ ] → current [ ] ([__ x baseline], KDIGO stage [ ]). UO: [ ] cc (oliguric if <500/day).
Pre-renal: volume/fluid losses [ ], effective volume (CHF/cirrhosis/sepsis) [ ], meds (NSAID/ACEi-ARB/diuretic/SGLT2i) [ ].
Renal: recent contrast [ ], nephrotoxins [ ], sepsis/ischemia [ ], urine sediment [ ].
Post-renal: retention/obstruction — bladder scan [ ], foley [ ], renal US [ ].
Done: lytes, urea/Cr, urinalysis + micro, urine lytes (FeNa/FeUrea), bladder scan, renal US [ ].
Impression: [pre-renal / ATN / obstructive / other].
Plan: hold nephrotoxins, adjust renally-cleared meds, [fluids vs diurese], monitor lytes/UO, nephro if [ ].`},

    {t:".sepsis — Sepsis / infection", note:"Suspected sepsis bundle.", copy:
`SEPSIS NOTE
Suspected source: [urine / chest / abdo / skin / line / CNS / unknown]. qSOFA/NEWS: [ ].
Vitals: T__ HR__ BP__ (MAP __) RR__ SpO2__. Lactate: [ ].
Done: cultures x2 (+ site-specific) BEFORE abx, CBC, lytes, Cr, lactate, VBG, urinalysis, CXR [ ].
Given: empiric antibiotics [___ per local guideline for suspected source], IV fluids [___ cc/kg balanced crystalloid], source control [ ].
Impression: [sepsis 2° to ___].
Plan: reassess perfusion/lactate; vasopressors + ICU if hypotensive despite fluids; de-escalate abx per cultures at 48h; document source-control plan.`},

    {t:".lytes — Electrolyte repletion orders", note:"Common ward repletion scaffold — confirm renal function.", copy:
`ELECTROLYTE REPLETION (confirm renal function first)
Potassium: [ ] — target [ ]. PO KCl preferred; IV max 40 mmol/L peripheral, ≤10 mmol/h (≤20 via CVC). Replete Mg alongside.
Magnesium: [ ] — MgSO4 [ ] g IV.
Phosphate: [ ] — replace if <1 or symptomatic (NaPhos/KPhos).
Calcium: [corrected __] — [ ].
Recheck lytes at [ ]. Hold/renally-dose if AKI/CKD.`},

    {t:".goc — Goals of care / code status note", note:"Document a GoC conversation.", copy:
`GOALS OF CARE / CODE STATUS NOTE
Present: [patient / SDM: name, relationship]. Capacity: [ ].
Understanding of illness: [ ]. Trajectory discussed: [ ].
Values/goals: [ ]. Fears / things to avoid: [ ].
Discussed treatment ladder: comfort → medical management → ICU → intubation → CPR.
Outcome / agreed plan:
  - Resuscitation (CPR): [Full / DNR]
  - Intubation / ICU: [yes / no / trial]
  - Escalation ceiling: [ward-based medical management / etc.]
Recommendation given (aligned to goals): [ ].
Follow-up: revisit as needed; family/SDM informed. Documented in chart.`},

    {t:".procnote — Procedure note", note:"Generic bedside procedure note.", copy:
`PROCEDURE NOTE
Procedure: [ ]. Date/time: [ ]. Service: [ ]. Supervised by: [ ].
Indication: [ ]. Consent: obtained (risks/benefits/alternatives discussed).
Pre-procedure: timeout done; site confirmed; relevant labs [INR/plt] [ ].
Technique: sterile prep + drape; local anaesthetic [ ]; ultrasound guidance [yes/no]; [details, attempts].
Findings: [fluid appearance / etc.]. Volume removed: [ ].
Samples sent: [ ].
Complications: [none / ___]. EBL: [ ].
Post: [ CXR ordered / patient tolerated well ]. Plan: [ ].`},
  ]
},

];
