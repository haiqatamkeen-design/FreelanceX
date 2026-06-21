/* ===================== DATA ===================== */
const FREELANCERS = [
  {id:1,name:"Sarah Khan",title:"Senior UI/UX Designer",avatar:"https://i.pravatar.cc/96?img=47",rating:4.9,reviews:218,jobs:312,rate:75,level:"Expert",skills:["Figma","Adobe XD","Prototyping","Wireframing","Design Systems"],bio:"Award-winning UI/UX designer with 8+ years crafting elegant digital experiences for Fortune 500 brands. I specialise in user research, interaction design, and scalable design systems.",portfolio:["https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=200&fit=crop","https://images.unsplash.com/photo-1586717799252-bd134ad00e26?w=400&h=200&fit=crop","https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=200&fit=crop","https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=400&h=200&fit=crop","https://images.unsplash.com/photo-1545235617-9465d2a55698?w=400&h=200&fit=crop","https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=400&h=200&fit=crop"]},
  {id:2,name:"Alex Rodriguez",title:"Full-Stack Developer",avatar:"https://i.pravatar.cc/96?img=12",rating:4.8,reviews:184,jobs:274,rate:90,level:"Expert",skills:["React","Node.js","PostgreSQL","AWS","TypeScript","Docker"],bio:"Full-stack engineer specialising in scalable web applications. Former lead engineer at a Y Combinator startup. I build fast, secure and maintainable code.",portfolio:["https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=200&fit=crop","https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=200&fit=crop","https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&h=200&fit=crop","https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop","https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?w=400&h=200&fit=crop","https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=200&fit=crop"]},
  {id:3,name:"Priya Sharma",title:"Content Strategist & Copywriter",avatar:"https://i.pravatar.cc/96?img=38",rating:5.0,reviews:97,jobs:145,rate:55,level:"Expert",skills:["Copywriting","SEO Writing","Brand Voice","Content Strategy","Blogging"],bio:"I craft compelling content that converts. With a background in journalism and digital marketing, I help brands tell their story in a way that resonates.",portfolio:["https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=200&fit=crop","https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?w=400&h=200&fit=crop","https://images.unsplash.com/photo-1519791883288-dc8bd696e667?w=400&h=200&fit=crop","https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=200&fit=crop","https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=200&fit=crop","https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=200&fit=crop"]},
  {id:4,name:"James Wu",title:"Mobile App Developer",avatar:"https://i.pravatar.cc/96?img=68",rating:4.7,reviews:132,jobs:198,rate:80,level:"Expert",skills:["React Native","iOS","Android","Flutter","Firebase"],bio:"I build polished cross-platform mobile apps. 6 years experience, 40+ apps shipped, 10M+ downloads across the App Store and Google Play.",portfolio:["https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=200&fit=crop","https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=200&fit=crop","https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=400&h=200&fit=crop","https://images.unsplash.com/photo-1522125670776-3c7abb882bc2?w=400&h=200&fit=crop","https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?w=400&h=200&fit=crop","https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=200&fit=crop"]},
  {id:5,name:"Maria Costa",title:"Brand Designer & Illustrator",avatar:"https://i.pravatar.cc/96?img=5",rating:4.9,reviews:76,jobs:112,rate:65,level:"Mid",skills:["Logo Design","Branding","Illustration","Photoshop","Illustrator"],bio:"Creative director turned freelancer. I help startups and SMBs build memorable brand identities through thoughtful design and strategic thinking.",portfolio:["https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=200&fit=crop","https://images.unsplash.com/photo-1636761559038-4d6a73540eaf?w=400&h=200&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=200&fit=crop","https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=400&h=200&fit=crop","https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=400&h=200&fit=crop","https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=200&fit=crop"]},
  {id:6,name:"David Kim",title:"Data Scientist & ML Engineer",avatar:"https://i.pravatar.cc/96?img=59",rating:4.8,reviews:61,jobs:89,rate:95,level:"Expert",skills:["Python","Machine Learning","TensorFlow","Data Analysis","NLP"],bio:"PhD in Computer Science. I build intelligent systems that extract insights and automate decisions using cutting-edge ML techniques.",portfolio:["https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop","https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=200&fit=crop","https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&h=200&fit=crop","https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?w=400&h=200&fit=crop","https://images.unsplash.com/photo-1543286386-713bdd548da4?w=400&h=200&fit=crop","https://images.unsplash.com/photo-1579762593175-20226054cad0?w=400&h=200&fit=crop"]},
  {id:7,name:"Lisa Turner",title:"Digital Marketing Specialist",avatar:"https://i.pravatar.cc/96?img=25",rating:4.6,reviews:149,jobs:220,rate:50,level:"Mid",skills:["SEO","Google Ads","Social Media","Analytics","Email Marketing"],bio:"Results-driven marketer with 7 years growing brands online. I focus on ROI — every campaign I run is data-backed and tested.",portfolio:["https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=400&h=200&fit=crop","https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=200&fit=crop","https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop","https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=400&h=200&fit=crop","https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=400&h=200&fit=crop","https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=200&fit=crop"]},
  {id:8,name:"Omar Hassan",title:"WordPress & Shopify Developer",avatar:"https://i.pravatar.cc/96?img=53",rating:4.7,reviews:203,jobs:315,rate:35,level:"Mid",skills:["WordPress","Shopify","WooCommerce","PHP","CSS"],bio:"I specialise in building fast, beautiful WordPress and Shopify stores. 300+ sites delivered. Responsive design and performance are my top priorities.",portfolio:["https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=200&fit=crop","https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop","https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?w=400&h=200&fit=crop","https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=200&fit=crop","https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=200&fit=crop","https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=200&fit=crop"]},
];

const GIGS = [
  {id:1,freelancerId:1,title:"I will design a stunning UI/UX for your web or mobile app",category:"Logo Design",price:149,delivery:5,rating:4.9,reviews:218,orders:312,badge:"Best Seller",image:"https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=360&fit=crop",packages:{basic:{name:"Basic",price:149,desc:"3 screens, wireframes included",features:["3 UI Screens","Wireframes","1 Revision","Source Files"],delivery:"5 days"},standard:{name:"Standard",price:349,desc:"8 screens, interactive prototype",features:["8 UI Screens","Interactive Prototype","3 Revisions","Source Files","Design System"],delivery:"7 days"},premium:{name:"Premium",price:699,desc:"Full app design + design system",features:["Full App Design","Design System","Unlimited Revisions","Source Files","Prototype","1 Month Support"],delivery:"14 days"}}},
  {id:2,freelancerId:2,title:"I will build a full-stack web application with React and Node.js",category:"Web Development",price:299,delivery:7,rating:4.8,reviews:184,orders:274,badge:"Top Rated",image:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=360&fit=crop",packages:{basic:{name:"Basic",price:299,desc:"Landing page with backend API",features:["Responsive Design","REST API","User Auth","Deployment"],delivery:"7 days"},standard:{name:"Standard",price:799,desc:"Full web app with database",features:["All Basic features","Database Integration","Admin Panel","Payment Gateway","Testing"],delivery:"14 days"},premium:{name:"Premium",price:1499,desc:"Enterprise-grade application",features:["All Standard features","Microservices","CI/CD Pipeline","Documentation","3 Months Support"],delivery:"30 days"}}},
  {id:3,freelancerId:3,title:"I will write compelling website copy that converts visitors to customers",category:"Content Writing",price:79,delivery:3,rating:5.0,reviews:97,orders:145,badge:"",image:"https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&h=360&fit=crop",packages:{basic:{name:"Basic",price:79,desc:"Homepage copy (500 words)",features:["500 Words","SEO Optimized","1 Revision"],delivery:"3 days"},standard:{name:"Standard",price:199,desc:"Full website copy (5 pages)",features:["5 Pages","SEO Optimized","Keyword Research","3 Revisions"],delivery:"7 days"},premium:{name:"Premium",price:399,desc:"Complete content strategy + copy",features:["10 Pages","Content Strategy","Keyword Research","Unlimited Revisions","Blog Posts x3"],delivery:"14 days"}}},
  {id:4,freelancerId:4,title:"I will develop a cross-platform mobile app with React Native",category:"Mobile Development",price:499,delivery:14,rating:4.7,reviews:132,orders:198,badge:"",image:"https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=360&fit=crop",packages:{basic:{name:"Basic",price:499,desc:"Simple 5-screen app",features:["5 Screens","iOS & Android","Basic Navigation","Source Code"],delivery:"14 days"},standard:{name:"Standard",price:999,desc:"Full featured app with backend",features:["15 Screens","Push Notifications","User Auth","API Integration","App Store Submission"],delivery:"21 days"},premium:{name:"Premium",price:2499,desc:"Enterprise mobile solution",features:["Unlimited Screens","Custom Backend","Payments","Analytics","3 Months Support"],delivery:"45 days"}}},
  {id:5,freelancerId:5,title:"I will create a complete brand identity including logo and guidelines",category:"Logo Design",price:249,delivery:5,rating:4.9,reviews:76,orders:112,badge:"Rising Star",image:"https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=360&fit=crop",packages:{basic:{name:"Basic",price:249,desc:"Logo + 2 variations",features:["Primary Logo","2 Variations","PNG & SVG Files","1 Revision"],delivery:"5 days"},standard:{name:"Standard",price:499,desc:"Full brand identity kit",features:["Logo Suite","Color Palette","Typography","Brand Guidelines","Social Kit"],delivery:"10 days"},premium:{name:"Premium",price:999,desc:"Complete brand system",features:["All Standard","Stationery Design","Marketing Templates","Brand Strategy","Unlimited Revisions"],delivery:"21 days"}}},
  {id:6,freelancerId:6,title:"I will build and deploy a machine learning model for your business",category:"Data Science",price:399,delivery:10,rating:4.8,reviews:61,orders:89,badge:"",image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=360&fit=crop",packages:{basic:{name:"Basic",price:399,desc:"Data analysis + report",features:["Data Cleaning","EDA Report","Visualisations","Insights Summary"],delivery:"5 days"},standard:{name:"Standard",price:899,desc:"ML model with deployment",features:["Custom ML Model","API Endpoint","Performance Report","Documentation"],delivery:"14 days"},premium:{name:"Premium",price:1999,desc:"End-to-end AI pipeline",features:["Production ML Pipeline","MLOps Setup","A/B Testing","Monthly Monitoring","Training"],delivery:"30 days"}}},
  {id:7,freelancerId:7,title:"I will run a complete SEO campaign to grow your organic traffic",category:"SEO",price:199,delivery:30,rating:4.6,reviews:149,orders:220,badge:"",image:"https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&h=360&fit=crop",packages:{basic:{name:"Basic",price:199,desc:"SEO audit and strategy",features:["Technical Audit","Keyword Research","Competitor Analysis","Action Plan"],delivery:"7 days"},standard:{name:"Standard",price:499,desc:"On-page + off-page SEO",features:["All Basic","On-Page Optimisation","10 Backlinks","Monthly Report","Google Analytics Setup"],delivery:"30 days"},premium:{name:"Premium",price:999,desc:"Full SEO management (3 months)",features:["All Standard","Content Calendar","40 Backlinks","Local SEO","Weekly Reports","Strategy Calls"],delivery:"90 days"}}},
  {id:8,freelancerId:8,title:"I will build a professional WordPress or Shopify website",category:"Web Development",price:149,delivery:5,rating:4.7,reviews:203,orders:315,badge:"Best Seller",image:"https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=360&fit=crop",packages:{basic:{name:"Basic",price:149,desc:"5-page WordPress site",features:["5 Pages","Responsive Design","Contact Form","Basic SEO","1 Revision"],delivery:"5 days"},standard:{name:"Standard",price:399,desc:"Full site + WooCommerce",features:["10 Pages","WooCommerce Store","Payment Gateway","Speed Optimization","3 Revisions"],delivery:"10 days"},premium:{name:"Premium",price:799,desc:"Premium site + 1 month support",features:["Unlimited Pages","Custom Design","Advanced SEO","Speed Optimization","1 Month Support","Maintenance"],delivery:"21 days"}}},
  {id:9,freelancerId:1,title:"I will create a complete design system for your product team",category:"Logo Design",price:599,delivery:10,rating:4.9,reviews:44,orders:67,badge:"",image:"https://images.unsplash.com/photo-1586717799252-bd134ad00e26?w=600&h=360&fit=crop",packages:{basic:{name:"Basic",price:599,desc:"Core component library",features:["50+ Components","Design Tokens","Figma File","1 Revision"],delivery:"10 days"},standard:{name:"Standard",price:999,desc:"Full design system",features:["100+ Components","Design Tokens","Documentation","Dev Handoff","3 Revisions"],delivery:"21 days"},premium:{name:"Premium",price:1799,desc:"Enterprise design system",features:["Complete System","Design Tokens","Storybook Integration","Onboarding Call","Unlimited Revisions"],delivery:"45 days"}}},
  {id:10,freelancerId:2,title:"I will build a SaaS dashboard with advanced analytics",category:"Web Development",price:899,delivery:14,rating:4.9,reviews:58,orders:72,badge:"",image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=360&fit=crop",packages:{basic:{name:"Basic",price:899,desc:"Core dashboard + charts",features:["5 Chart Types","User Auth","Responsive","REST API"],delivery:"14 days"},standard:{name:"Standard",price:1699,desc:"Full analytics platform",features:["Advanced Charts","Custom Filters","Export CSV","Real-time Updates","Role Management"],delivery:"21 days"},premium:{name:"Premium",price:2999,desc:"Enterprise analytics suite",features:["All Standard","Custom Branding","White Label","SSO","3 Months Support"],delivery:"45 days"}}},
  {id:11,freelancerId:7,title:"I will manage your social media and grow your following",category:"SEO",price:299,delivery:30,rating:4.7,reviews:88,orders:134,badge:"",image:"https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=360&fit=crop",packages:{basic:{name:"Basic",price:299,desc:"10 posts / month",features:["10 Posts","Caption Copy","Hashtag Strategy","1 Platform"],delivery:"30 days"},standard:{name:"Standard",price:599,desc:"20 posts + engagement",features:["20 Posts","3 Platforms","Community Management","Monthly Report"],delivery:"30 days"},premium:{name:"Premium",price:999,desc:"Full social management",features:["Daily Posts","5 Platforms","Paid Ad Management","Influencer Outreach","Weekly Reports"],delivery:"30 days"}}},
  {id:12,freelancerId:5,title:"I will illustrate custom icons and illustrations for your brand",category:"Logo Design",price:129,delivery:4,rating:4.8,reviews:52,orders:78,badge:"",image:"https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&h=360&fit=crop",packages:{basic:{name:"Basic",price:129,desc:"10 custom icons",features:["10 Icons","2 Styles","SVG & PNG","2 Revisions"],delivery:"4 days"},standard:{name:"Standard",price:299,desc:"30 icons + spot illustrations",features:["30 Icons","3 Spot Illustrations","Multiple Formats","Style Guide","3 Revisions"],delivery:"7 days"},premium:{name:"Premium",price:699,desc:"Full illustration suite",features:["Unlimited Icons","10 Illustrations","Animated Versions","Usage License","Unlimited Revisions"],delivery:"14 days"}}},
];

const PROJECTS = [
  {id:1,title:"E-commerce Platform Redesign",category:"Web Development",budget:"$2,000 – $5,000",deadline:"2026-07-01",scope:"Large",experience:"Expert",skills:["React","Node.js","UX Design"],description:"Looking for a skilled team to redesign our existing e-commerce platform. Must be mobile-first, fast-loading and integrate with our existing Stripe and inventory system.",bids:[
    {freelancerId:2,amount:3800,time:"3 weeks",message:"I've built 15+ e-commerce platforms with similar tech stacks. My approach would be to start with a UX audit, then systematically rebuild each module. I can deliver in 3 weeks with daily updates."},
    {freelancerId:8,amount:2500,time:"4 weeks",message:"Experienced WordPress/WooCommerce developer here. I can migrate your store to a modern headless architecture while maintaining all existing functionality."},
    {freelancerId:1,amount:1200,time:"2 weeks",message:"I'll handle the complete UX/UI redesign including wireframes, prototypes and final designs. The development handoff will be fully spec'd in Figma."},
  ]},
  {id:2,title:"AI Chatbot for Customer Support",category:"AI & Data Science",budget:"$1,000 – $3,000",deadline:"2026-06-15",scope:"Medium",experience:"Expert",skills:["Python","NLP","LLM","API"],description:"We need a smart chatbot for our SaaS product that can handle 80% of tier-1 support tickets automatically using our documentation as context.",bids:[
    {freelancerId:6,amount:2200,time:"3 weeks",message:"I've built RAG-based chatbots for 5 SaaS companies. Using LangChain + OpenAI, I can have a working MVP in 2 weeks and production-ready in 3. Success rate in my last project was 84% ticket deflection."},
    {freelancerId:2,amount:1800,time:"4 weeks",message:"Full-stack developer with NLP experience. I'll build the chatbot using the latest GPT models and fine-tune it on your documentation for maximum accuracy."},
  ]},
];

/* ===================== STATE ===================== */
let currentPage = 'home';
let currentStep = 1;
let selectedScope = '';
let budgetType = 'fixed';
let projectData = {};
let activePackage = 'basic';
let currentGig = null;
let currentFreelancer = null;
let currentProject = null;

/* ===================== INIT ===================== */
document.addEventListener('DOMContentLoaded', () => {
  renderFeaturedGigs();
  renderTopFreelancers();
  renderBrowseGigs(GIGS);
  renderFreelancersGrid(FREELANCERS);
  window.addEventListener('scroll', handleScroll);
  document.getElementById('projDeadline').min = new Date().toISOString().split('T')[0];
});

function handleScroll() {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('scrolled', window.scrollY > 20);
}

/* ===================== PAGE ROUTER ===================== */
function showPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const el = document.getElementById('page-' + page);
  if (el) el.classList.add('active');
  currentPage = page;
  window.scrollTo({top:0, behavior:'smooth'});
}

/* ===================== RENDER FEATURED GIGS ===================== */
function renderFeaturedGigs() {
  const container = document.getElementById('featuredGigs');
  const featured = GIGS.slice(0,8);
  container.innerHTML = featured.map(g => gigCard(g)).join('');
}

function gigCard(g) {
  const seller = FREELANCERS.find(f => f.id === g.freelancerId);
  return `<div class="gig-card" onclick="showGigDetail(${g.id})">
    <div class="gig-thumb">
      <img src="${g.image}" alt="${g.title}" loading="lazy">
      ${g.badge ? `<span class="gig-badge">${g.badge}</span>` : ''}
    </div>
    <div class="gig-body">
      <div class="gig-seller">
        <img src="${seller.avatar}" alt="${seller.name}" class="gig-avatar">
        <span class="gig-seller-name">${seller.name}</span>
        <span class="gig-seller-level">${seller.level}</span>
      </div>
      <div class="gig-title">${g.title}</div>
      <div class="gig-rating">
        <span class="gig-stars">★</span>
        <strong>${g.rating}</strong>
        <span class="gig-reviews">(${g.reviews})</span>
      </div>
      <div class="gig-footer">
        <span class="gig-from">Starting at</span>
        <span class="gig-price">$${g.price}</span>
      </div>
    </div>
  </div>`;
}

/* ===================== RENDER TOP FREELANCERS ===================== */
function renderTopFreelancers() {
  const container = document.getElementById('topFreelancers');
  container.innerHTML = FREELANCERS.slice(0,6).map(f => `
    <div class="freelancer-card" onclick="showProfile(${f.id})">
      <img src="${f.avatar}" alt="${f.name}" class="fl-avatar">
      <div class="fl-name">${f.name}</div>
      <div class="fl-role">${f.title}</div>
      <div class="fl-rating">
        <span class="fl-rating-stars">★</span>
        <strong>${f.rating}</strong>
        <span style="color:var(--text-3);font-size:12px">(${f.reviews})</span>
      </div>
      <div class="fl-skills">
        ${f.skills.slice(0,3).map(s => `<span class="fl-skill">${s}</span>`).join('')}
      </div>
      <div class="fl-rate">From $${f.rate}/hr</div>
    </div>`).join('');
}

/* ===================== BROWSE GIGS ===================== */
function renderBrowseGigs(gigs) {
  const container = document.getElementById('browseGigs');
  if (!gigs.length) { container.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:60px;color:var(--text-3)"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin:0 auto 12px;display:block"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg><p>No services found. Try adjusting your filters.</p></div>'; return; }
  container.innerHTML = gigs.map(g => gigCard(g)).join('');
  document.getElementById('resultsCount').textContent = `Showing ${gigs.length} service${gigs.length !== 1 ? 's' : ''}`;
}

function applyFilters() {
  const cat = document.querySelector('input[name=cat]:checked')?.value || '';
  const budget = document.querySelector('input[name=budget]:checked')?.value || '';
  const delivery = document.querySelector('input[name=delivery]:checked')?.value || '';
  const rating = document.querySelector('input[name=rating]:checked')?.value || '';
  const sort = document.getElementById('sortSelect').value;

  let filtered = [...GIGS];
  if (cat) filtered = filtered.filter(g => g.category === cat || (cat === 'Logo Design' && g.category === 'Logo Design'));
  if (budget) {
    if (budget === '0-50') filtered = filtered.filter(g => g.price < 50);
    else if (budget === '50-150') filtered = filtered.filter(g => g.price >= 50 && g.price <= 150);
    else if (budget === '150-500') filtered = filtered.filter(g => g.price > 150 && g.price <= 500);
    else if (budget === '500+') filtered = filtered.filter(g => g.price > 500);
  }
  if (delivery) filtered = filtered.filter(g => g.delivery <= parseInt(delivery));
  if (rating) filtered = filtered.filter(g => g.rating >= parseFloat(rating));

  if (sort === 'price-low') filtered.sort((a,b) => a.price - b.price);
  else if (sort === 'price-high') filtered.sort((a,b) => b.price - a.price);
  else if (sort === 'rating') filtered.sort((a,b) => b.rating - a.rating);
  else if (sort === 'orders') filtered.sort((a,b) => b.orders - a.orders);

  renderBrowseGigs(filtered);
}

/* ===================== FILTER BY CATEGORY (HOME) ===================== */
function filterByCategory(cat) {
  showPage('browse');
  document.getElementById('browseTitle').textContent = cat;
  document.getElementById('browseSubtitle').textContent = `Top freelance services in ${cat}`;
  const radio = document.querySelector(`input[name=cat][value="${cat}"]`);
  if (radio) { radio.checked = true; applyFilters(); }
  else renderBrowseGigs(GIGS.filter(g => g.category === cat || g.title.toLowerCase().includes(cat.toLowerCase())));
}

/* ===================== SEARCH ===================== */
function doHeroSearch() {
  const q = document.getElementById('heroSearch').value.trim();
  if (!q) return;
  showPage('browse');
  document.getElementById('browseTitle').textContent = `Results for "${q}"`;
  const filtered = GIGS.filter(g =>
    g.title.toLowerCase().includes(q.toLowerCase()) ||
    g.category.toLowerCase().includes(q.toLowerCase()) ||
    FREELANCERS.find(f => f.id === g.freelancerId)?.skills.some(s => s.toLowerCase().includes(q.toLowerCase()))
  );
  renderBrowseGigs(filtered);
}

function searchServices() {
  const q = document.getElementById('navSearchInput').value.trim();
  if (!q) return;
  showPage('browse');
  document.getElementById('browseTitle').textContent = `Results for "${q}"`;
  const filtered = GIGS.filter(g =>
    g.title.toLowerCase().includes(q.toLowerCase()) ||
    g.category.toLowerCase().includes(q.toLowerCase())
  );
  renderBrowseGigs(filtered);
}

document.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    if (document.activeElement.id === 'heroSearch') doHeroSearch();
    if (document.activeElement.id === 'navSearchInput') searchServices();
  }
});

/* ===================== GIG DETAIL ===================== */
function showGigDetail(gigId) {
  const g = GIGS.find(x => x.id === gigId);
  const seller = FREELANCERS.find(f => f.id === g.freelancerId);
  currentGig = g;
  activePackage = 'basic';

  const reviewsHtml = generateReviews(seller);
  const pkg = g.packages.basic;

  document.getElementById('gigDetailContent').innerHTML = `
    <div class="gig-detail-main">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;font-size:13px;color:var(--text-3);cursor:pointer" onclick="showPage('browse')">
        ← Back to Search
      </div>
      <h1 class="gig-detail-title">${g.title}</h1>
      <div class="gig-detail-meta">
        <div class="gig-meta-seller" onclick="showProfile(${seller.id})" style="cursor:pointer">
          <img src="${seller.avatar}" alt="${seller.name}">
          <span>${seller.name}</span>
          <span class="gig-seller-level">${seller.level}</span>
        </div>
        <div class="gig-meta-rating">
          <span class="stars">★ ${g.rating}</span>
          <span>(${g.reviews} reviews)</span>
        </div>
        <div class="gig-meta-orders">${g.orders} orders completed</div>
      </div>
      <div class="gig-gallery"><img src="${g.image}" alt="${g.title}" style="width:100%;height:100%;object-fit:cover;border-radius:var(--radius-lg)"></div>

      <div class="gig-tabs">
        <div class="gig-tab active" onclick="switchGigTab(this,'overview')">Overview</div>
        <div class="gig-tab" onclick="switchGigTab(this,'reviews')">Reviews (${g.reviews})</div>
        <div class="gig-tab" onclick="switchGigTab(this,'seller')">About Seller</div>
      </div>

      <div id="tab-overview" class="gig-tab-content active">
        <div class="gig-description">
          <p>Looking for a ${g.category.toLowerCase()} expert who delivers results? You've come to the right place.</p>
          <h4>What you'll get</h4>
          <ul>
            ${pkg.features.map(f => `<li>${f}</li>`).join('')}
          </ul>
          <h4>My Process</h4>
          <p>I follow a structured, client-first workflow: discovery → proposal → execution → review → delivery. I provide regular updates and am available for questions throughout the project.</p>
          <h4>Why choose me?</h4>
          <p>${seller.bio}</p>
        </div>
      </div>
      <div id="tab-reviews" class="gig-tab-content">
        <div class="reviews-list">${reviewsHtml}</div>
      </div>
      <div id="tab-seller" class="gig-tab-content">
        <div style="display:flex;gap:20px;align-items:flex-start;flex-wrap:wrap">
          <img src="${seller.avatar}" alt="${seller.name}" style="width:80px;height:80px;border-radius:50%">
          <div style="flex:1">
            <div style="font-weight:800;font-size:20px;margin-bottom:4px">${seller.name}</div>
            <div style="color:var(--text-3);margin-bottom:12px">${seller.title}</div>
            <div style="display:flex;gap:20px;margin-bottom:14px;flex-wrap:wrap">
              <span style="font-size:13px;color:var(--text-2)">★ ${seller.rating} (${seller.reviews} reviews)</span>
              <span style="font-size:13px;color:var(--text-2)">${seller.jobs} jobs completed</span>
              <span style="font-size:13px;color:var(--text-2)">$${seller.rate}/hr</span>
            </div>
            <p style="color:var(--text-2);line-height:1.7;font-size:14px">${seller.bio}</p>
          </div>
        </div>
        <div class="fl-skills" style="margin-top:16px">
          ${seller.skills.map(s => `<span class="fl-skill">${s}</span>`).join('')}
        </div>
        <button class="btn-outline" style="margin-top:16px" onclick="showProfile(${seller.id})">View Full Profile</button>
      </div>
    </div>

    <div class="gig-order-card" id="orderCard">
      <div class="package-tabs">
        <button class="pkg-tab active" onclick="switchPackage('basic',${g.id})">Basic</button>
        <button class="pkg-tab" onclick="switchPackage('standard',${g.id})">Standard</button>
        <button class="pkg-tab" onclick="switchPackage('premium',${g.id})">Premium</button>
      </div>
      <div id="packageContent">${renderPackage(g.packages.basic, g.packages.basic)}</div>
      <button class="order-btn" onclick="showToast('Order placed! You will be redirected to checkout.','success')">Continue ($${g.packages.basic.price})</button>
      <button class="chat-btn" onclick="showToast('Chat feature coming soon with backend integration!','')">Contact Seller</button>
      <div class="seller-quick" onclick="showProfile(${seller.id})">
        <img src="${seller.avatar}" alt="${seller.name}">
        <div class="seller-quick-info">
          <div class="name">${seller.name}</div>
          <div class="level">${seller.level} ${g.category} Professional</div>
        </div>
        <span class="seller-quick-arrow">›</span>
      </div>
    </div>`;

  showPage('gig-detail');
}

function renderPackage(pkg, allPkg) {
  return `<div class="pkg-name">${pkg.name}</div>
    <div class="pkg-price">$${pkg.price}</div>
    <div class="pkg-desc">${pkg.desc}</div>
    <div class="pkg-meta">
      <div class="pkg-meta-item">Delivery: ${pkg.delivery}</div>
      <div class="pkg-meta-item">Unlimited Revisions</div>
    </div>
    <ul class="pkg-features">
      ${pkg.features.map(f => `<li>${f}</li>`).join('')}
    </ul>`;
}

function switchPackage(type, gigId) {
  const g = GIGS.find(x => x.id === gigId);
  activePackage = type;
  document.querySelectorAll('.pkg-tab').forEach((t,i) => {
    t.classList.toggle('active', ['basic','standard','premium'][i] === type);
  });
  document.getElementById('packageContent').innerHTML = renderPackage(g.packages[type]);
  document.querySelector('.order-btn').textContent = `Continue ($${g.packages[type].price})`;
  document.querySelector('.order-btn').onclick = () => showToast(`Order placed for ${g.packages[type].name} package!`,'success');
}

function switchGigTab(el, tab) {
  document.querySelectorAll('.gig-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.gig-tab-content').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('tab-' + tab)?.classList.add('active');
}

function generateReviews(seller) {
  const names = ["Michael R.","Sophie L.","David T.","Emma W.","Carlos M.","Aisha B."];
  const avatarIds = [11, 26, 33, 44, 22, 17];
  const texts = [
    "Absolutely incredible work! Delivered ahead of schedule and the quality exceeded my expectations. Will definitely hire again.",
    "Professional, responsive and talented. The project came out even better than what I envisioned. Highly recommended!",
    "Great communication throughout the project. Made the process very smooth and painless. 5 stars!",
    "Top-notch quality and attention to detail. Really understood what I needed without lengthy explanations.",
    "Superb work! The results have already made a measurable impact on our business. Worth every penny.",
  ];
  return texts.map((text, i) => `
    <div class="review-item">
      <div class="review-header">
        <img src="https://i.pravatar.cc/40?img=${avatarIds[i]}" alt="${names[i]}">
        <div>
          <div class="review-name">${names[i]}</div>
          <div class="review-date">${['2 days ago','1 week ago','2 weeks ago','1 month ago','2 months ago'][i]}</div>
        </div>
        <div style="margin-left:auto;color:var(--accent)">★★★★★</div>
      </div>
      <div class="review-text">${text}</div>
    </div>`).join('');
}

/* ===================== FREELANCER PROFILE ===================== */
function showProfile(fId) {
  const f = FREELANCERS.find(x => x.id === fId);
  currentFreelancer = f;
  const myGigs = GIGS.filter(g => g.freelancerId === fId);

  document.getElementById('profileContent').innerHTML = `
    <div class="profile-layout">
      <div class="profile-sidebar">
        <img src="${f.avatar}" alt="${f.name}" class="profile-avatar">
        <div class="profile-name">${f.name}</div>
        <div class="profile-title">${f.title}</div>
        <div class="profile-rating">
          <span style="color:var(--accent);font-size:18px">★</span>
          <strong style="font-size:18px">${f.rating}</strong>
          <span style="color:var(--text-3);font-size:14px">(${f.reviews} reviews)</span>
        </div>
        <div class="profile-stats">
          <div class="profile-stat"><div class="num">${f.jobs}</div><div class="lbl">Jobs Done</div></div>
          <div class="profile-stat"><div class="num">$${f.rate}/hr</div><div class="lbl">Hourly Rate</div></div>
          <div class="profile-stat"><div class="num">${f.level}</div><div class="lbl">Level</div></div>
          <div class="profile-stat"><div class="num">99%</div><div class="lbl">Job Success</div></div>
        </div>
        <div class="profile-skills-section">
          <h4>Skills</h4>
          <div class="skills-wrap">
            ${f.skills.map(s => `<span class="skill-tag">${s}</span>`).join('')}
          </div>
        </div>
        <button class="contact-freelancer-btn" onclick="showToast('Messaging system will be available after backend integration.', '')">Message ${f.name.split(' ')[0]}</button>
        <button class="btn-outline" style="width:100%;padding:11px" onclick="showToast('Invite sent to ${f.name}!','success')">Invite to Project</button>
      </div>

      <div class="profile-main">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:20px;font-size:13px;color:var(--text-3);cursor:pointer" onclick="showPage('freelancers')">
          ← Back to Freelancers
        </div>

        <div class="profile-section">
          <h3>About</h3>
          <p class="about-text">${f.bio}</p>
        </div>

        <div class="profile-section">
          <h3>Portfolio</h3>
          <div class="portfolio-grid">
            ${f.portfolio.map(url => `<div class="portfolio-item" onclick="showToast('Portfolio detail view coming soon — backend integration required.', '')"><img src="${url}" alt="Portfolio item" style="width:100%;height:100%;object-fit:cover"></div>`).join('')}
          </div>
        </div>

        <div class="profile-section">
          <h3>Active Services (${myGigs.length})</h3>
          <div class="services-mini-grid">
            ${myGigs.map(g => `
              <div class="gig-card" onclick="showGigDetail(${g.id})" style="margin:0">
                <div class="gig-thumb" style="height:120px"><img src="${g.image}" alt="${g.title}" style="width:100%;height:100%;object-fit:cover"></div>
                <div class="gig-body">
                  <div class="gig-title">${g.title}</div>
                  <div class="gig-rating"><span class="gig-stars">★</span> <strong>${g.rating}</strong> <span class="gig-reviews">(${g.reviews})</span></div>
                  <div class="gig-footer"><span class="gig-from">From</span><span class="gig-price">$${g.price}</span></div>
                </div>
              </div>`).join('')}
          </div>
        </div>

        <div class="profile-section">
          <h3>Reviews</h3>
          <div class="reviews-list">${generateReviews(f)}</div>
        </div>
      </div>
    </div>`;

  showPage('profile');
}

/* ===================== FREELANCERS GRID ===================== */
function renderFreelancersGrid(list) {
  const container = document.getElementById('freelancersGrid');
  const levelBadge = l => l === 'Expert' ? 'badge-expert' : l === 'Mid' ? 'badge-mid' : 'badge-entry';
  container.innerHTML = list.map(f => `
    <div class="fl-full-card" onclick="showProfile(${f.id})">
      <img src="${f.avatar}" alt="${f.name}" class="fl-full-avatar">
      <div class="fl-full-info">
        <div class="fl-full-name">${f.name}</div>
        <div class="fl-full-role">${f.title}</div>
        <div class="fl-full-rating">
          <span style="color:var(--accent)">★ ${f.rating}</span>
          <span style="color:var(--text-3)">(${f.reviews} reviews)</span>
        </div>
        <div class="fl-full-skills">
          ${f.skills.slice(0,3).map(s => `<span class="fl-skill">${s}</span>`).join('')}
        </div>
        <div class="fl-full-footer">
          <span style="font-weight:700;color:var(--text);font-size:14px">$${f.rate}/hr</span>
          <span class="fl-level-badge ${levelBadge(f.level)}">${f.level}</span>
        </div>
      </div>
    </div>`).join('');
  document.getElementById('freelancerCount').textContent = `Showing ${list.length} freelancer${list.length !== 1 ? 's' : ''}`;
}

function applyFreelancerFilters() {
  const selectedSkills = [...document.querySelectorAll('.filter-sidebar input[type=checkbox]:checked')].map(c => c.value);
  const rate = document.querySelector('input[name=rate]:checked')?.value || '';
  const exp = document.querySelector('input[name=exp]:checked')?.value || '';
  const sort = document.getElementById('freelancerSort').value;

  let list = [...FREELANCERS];
  if (selectedSkills.length) list = list.filter(f => selectedSkills.every(s => f.skills.includes(s)));
  if (rate) {
    if (rate === '0-25') list = list.filter(f => f.rate < 25);
    else if (rate === '25-75') list = list.filter(f => f.rate >= 25 && f.rate <= 75);
    else if (rate === '75+') list = list.filter(f => f.rate > 75);
  }
  if (exp) list = list.filter(f => f.level === exp);

  if (sort === 'rating') list.sort((a,b) => b.rating - a.rating);
  else if (sort === 'rate-low') list.sort((a,b) => a.rate - b.rate);
  else if (sort === 'rate-high') list.sort((a,b) => b.rate - a.rate);
  else if (sort === 'jobs') list.sort((a,b) => b.jobs - a.jobs);

  renderFreelancersGrid(list);
}

/* ===================== POST PROJECT ===================== */
function nextStep(step) {
  if (step === 1) {
    if (!document.getElementById('projTitle').value.trim()) { showToast('Please enter a project title','error'); return; }
    if (!document.getElementById('projCat').value) { showToast('Please select a category','error'); return; }
    if (!document.getElementById('projDesc').value.trim()) { showToast('Please add a project description','error'); return; }
  }
  if (step === 2 && !selectedScope) { showToast('Please select a project scope','error'); return; }
  if (step === 3) {
    const min = document.getElementById('budgetMin').value;
    const max = document.getElementById('budgetMax').value;
    if (!min || !max) { showToast('Please enter a budget range','error'); return; }
    if (parseInt(min) >= parseInt(max)) { showToast('Max budget must be greater than min','error'); return; }
    buildReviewCard();
  }
  document.getElementById(`postStep${step}`).classList.remove('active');
  document.getElementById(`postStep${step+1}`).classList.add('active');
  updateSteps(step+1);
}

function prevStep(step) {
  document.getElementById(`postStep${step}`).classList.remove('active');
  document.getElementById(`postStep${step-1}`).classList.add('active');
  updateSteps(step-1);
}

function updateSteps(active) {
  document.querySelectorAll('.step').forEach(s => {
    const n = parseInt(s.dataset.step);
    s.classList.toggle('active', n === active);
    s.classList.toggle('done', n < active);
  });
}

function selectScope(el, scope) {
  document.querySelectorAll('.scope-card').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
  selectedScope = scope;
}

function setBudgetType(type) {
  budgetType = type;
  document.getElementById('fixedBtn').classList.toggle('active', type === 'fixed');
  document.getElementById('hourlyBtn').classList.toggle('active', type === 'hourly');
}

function buildReviewCard() {
  const title = document.getElementById('projTitle').value;
  const cat = document.getElementById('projCat').value;
  const desc = document.getElementById('projDesc').value;
  const skills = document.getElementById('projSkills').value;
  const exp = document.querySelector('input[name=projExp]:checked')?.value || 'Mid';
  const min = document.getElementById('budgetMin').value;
  const max = document.getElementById('budgetMax').value;
  const deadline = document.getElementById('projDeadline').value;

  document.getElementById('reviewCard').innerHTML = `
    <div class="review-row"><span class="review-label">Title</span><span class="review-val">${title}</span></div>
    <div class="review-row"><span class="review-label">Category</span><span class="review-val">${cat}</span></div>
    <div class="review-row"><span class="review-label">Description</span><span class="review-val">${desc.substring(0,200)}${desc.length > 200 ? '...' : ''}</span></div>
    <div class="review-row"><span class="review-label">Skills</span><span class="review-val">${skills || 'Not specified'}</span></div>
    <div class="review-row"><span class="review-label">Scope</span><span class="review-val">${selectedScope}</span></div>
    <div class="review-row"><span class="review-label">Experience</span><span class="review-val">${exp} Level</span></div>
    <div class="review-row"><span class="review-label">Budget</span><span class="review-val">$${min} – $${max} (${budgetType})</span></div>
    <div class="review-row"><span class="review-label">Deadline</span><span class="review-val">${deadline || 'Flexible'}</span></div>
  `;
}

function triggerUpload() {
  showToast('File upload will work once backend storage is connected.', '');
}

function submitProject() {
  if (!document.getElementById('agreeTerms').checked) {
    showToast('Please agree to the Terms of Service','error'); return;
  }
  const newProject = {
    id: PROJECTS.length + 1,
    title: document.getElementById('projTitle').value,
    category: document.getElementById('projCat').value,
    budget: `$${document.getElementById('budgetMin').value} – $${document.getElementById('budgetMax').value}`,
    deadline: document.getElementById('projDeadline').value,
    scope: selectedScope,
    experience: document.querySelector('input[name=projExp]:checked')?.value || 'Mid',
    skills: document.getElementById('projSkills').value.split(',').map(s => s.trim()).filter(Boolean),
    description: document.getElementById('projDesc').value,
    bids: [],
  };
  PROJECTS.push(newProject);
  showToast('Project posted successfully! Freelancers will start bidding soon.','success');
  setTimeout(() => showProjectBids(newProject.id), 1200);
}

/* ===================== PROJECT BIDS ===================== */
function showProjectBids(projId) {
  const p = PROJECTS.find(x => x.id === projId);
  currentProject = p;

  const bidsHtml = p.bids.length ? p.bids.map(b => {
    const f = FREELANCERS.find(x => x.id === b.freelancerId);
    return `<div class="bid-card">
      <div class="bid-header">
        <img src="${f.avatar}" alt="${f.name}" class="bid-avatar">
        <div>
          <div class="bid-name">${f.name}</div>
          <div class="bid-meta">★ ${f.rating} (${f.reviews} reviews) · ${f.level} · ${f.jobs} jobs</div>
        </div>
        <div class="bid-price">
          <div class="bid-amount">$${b.amount}</div>
          <div class="bid-time">Delivery: ${b.time}</div>
        </div>
      </div>
      <div class="bid-message">"${b.message}"</div>
      <div class="bid-footer">
        ${f.skills.slice(0,3).map(s => `<span class="bid-skill">${s}</span>`).join('')}
        <button class="btn-primary-sm" style="margin-left:auto" onclick="showToast('${f.name.split(' ')[0]} has been accepted. Chat will open shortly.','success')">Accept Bid</button>
        <button class="btn-outline-sm" onclick="showProfile(${f.id})">View Profile</button>
      </div>
    </div>`;
  }).join('') : `<div style="text-align:center;padding:60px;color:var(--text-3)">
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" stroke-width="1.5" style="margin:0 auto 12px;display:block"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>
    <h3 style="margin-bottom:8px;color:var(--text)">Waiting for bids</h3>
    <p>Your project is live! Freelancers will submit proposals soon.</p>
  </div>`;

  document.getElementById('bidsContent').innerHTML = `
    <div class="bids-layout">
      <div style="margin-bottom:20px;font-size:13px;color:var(--text-3);cursor:pointer" onclick="showPage('post-project')">← Post Another Project</div>
      <div class="bids-header">
        <h2>${p.title}</h2>
        <div class="meta">
          <span class="bids-meta-item">${p.category}</span>
          <span class="bids-meta-item">${p.budget}</span>
          <span class="bids-meta-item">${p.scope} scope</span>
          <span class="bids-meta-item">${p.experience} level</span>
          ${p.deadline ? `<span class="bids-meta-item">Due ${p.deadline}</span>` : ''}
        </div>
      </div>
      <h3 style="margin-bottom:16px;font-weight:700;font-size:18px">${p.bids.length} Proposal${p.bids.length !== 1 ? 's' : ''} Received</h3>
      ${bidsHtml}
    </div>`;

  showPage('bids');
}

/* ===================== MODALS ===================== */
function openModal(id) {
  document.getElementById(id).classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal(id) {
  document.getElementById(id).classList.remove('open');
  document.body.style.overflow = '';
}
function closeModalOutside(e, id) {
  if (e.target.id === id) closeModal(id);
}
function switchModal(closeId, openId) {
  closeModal(closeId);
  setTimeout(() => openModal(openId), 200);
}
function switchRole(el, role) {
  el.closest('.modal-tabs').querySelectorAll('.modal-tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
}
function fakeLogin() {
  const modals = document.querySelectorAll('.modal-overlay.open');
  modals.forEach(m => closeModal(m.id));
  showToast('Welcome to Freelance-X! Authentication will work after backend integration.','success');
}

/* ===================== MOBILE NAV ===================== */
function toggleMobile() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('open');
}

/* ===================== TOAST ===================== */
function showToast(msg, type='') {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className = 'toast' + (type ? ' ' + type : '');
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3500);
}
