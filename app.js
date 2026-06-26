const ARTWORKS = {
  canvas: [
    {
      id: 'canvas-colored-painting-ii',
      title: 'CANVAS COLORED PAINTING II',
      year: '2026',
      medium: 'Oil, chalk, and charcoal on canvas, 55″ × 63″',
      image: 'images/canvas/canvas-colored-painting-ii.jpg',
      images: []
    },
    {
      id: 'gesso-colored-painting',
      title: 'GESSO COLORED PAINTING',
      year: '2026',
      medium: 'Oil on canvas, 55″ × 61″',
      image: 'images/canvas/gesso-colored-painting.jpg',
      images: []
    },
    {
      id: 'new-patek',
      title: 'NEW PATEK',
      year: '2026',
      medium: 'Oil on canvas, 43″ × 60″',
      image: 'images/canvas/new-patek.jpg',
      images: []
    },
    {
      id: 'lukas-dunford',
      title: 'LUKAS DUNFORD',
      year: '',
      medium: '',
      image: 'images/canvas/lukas-dunford.jpg',
      images: []
    },
    {
      id: 'canvas-colored-painting',
      title: 'CANVAS COLORED PAINTING',
      year: '',
      medium: 'Oil and charcoal on canvas, 36″ × 38″',
      image: 'images/canvas/canvas-colored-painting-1.jpg',
      images: [
        'images/canvas/canvas-colored-painting-1.jpg',
        'images/canvas/canvas-colored-painting-2.jpg',
        'images/canvas/canvas-colored-painting-3.jpg',
        'images/canvas/canvas-colored-painting-4.jpg',
        'images/canvas/canvas-colored-painting-5.jpg'
      ]
    },
    {
      id: 'studio-interior',
      title: 'STUDIO INTERIOR',
      year: '',
      medium: '',
      image: 'images/canvas/studio-interior.jpg',
      images: []
    },
    {
      id: 'magnum-flitzum',
      title: 'MAGNUM FLITZUM',
      year: '',
      medium: '',
      image: 'images/canvas/magnum-flitzum.jpg',
      images: []
    }
  ],
  space: [
    {
      id: 'david',
      title: 'DAVID',
      year: '',
      medium: '',
      image: 'images/space/david.jpg',
      images: []
    },
    {
      id: 'conetreal',
      title: 'CONETRÉAL',
      year: '',
      medium: '',
      image: 'images/space/conetreal.jpg',
      images: []
    }
  ],
  illustration: [
    {
      id: 'cant-sell-culture',
      title: "CAN'T SELL CULTURE",
      year: '',
      medium: '',
      image: 'images/illustration/cant-sell-culture.jpg',
      images: []
    }
  ]
};

function getRoute() {
  const hash = window.location.hash.slice(1) || 'canvas';
  const parts = hash.split('/');
  return { section: parts[0], id: parts[1] || null };
}

function setActiveNav(section) {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.section === section);
  });
}

function renderGalleryGrid(section, columns) {
  const works = ARTWORKS[section] || [];
  if (works.length === 0) return '';
  const gridClass = columns === 2 ? 'gallery-grid-2' : 'gallery-grid';
  const items = works.map(work => `
    <a href="#${section}/${work.id}" class="gallery-item">
      <img src="${work.image}" alt="${work.title}">
      <div class="gallery-caption">${work.title}</div>
    </a>
  `).join('');
  return `<div class="${gridClass}">${items}</div>`;
}

function renderDetail(section, id) {
  const works = ARTWORKS[section] || [];
  const work = works.find(w => w.id === id);
  if (!work) {
    window.location.hash = section;
    return '';
  }

  const sectionLabel = section.toUpperCase();
  const meta = [work.year, work.medium].filter(Boolean);
  const allImages = work.images && work.images.length > 0 ? work.images : [work.image];

  return `
    <a href="#${section}" class="detail-back">← ${sectionLabel}</a>
    <div class="detail-title">${work.title}</div>
    ${meta.length ? `<div class="detail-meta">${meta.map(m => `<div>${m}</div>`).join('')}</div>` : ''}
    <div class="detail-images">
      ${allImages.map(src => `<img src="${src}" alt="${work.title}" class="detail-image">`).join('')}
    </div>
  `;
}

function renderAbout() {
  return `
    <div class="about-section">
      <div class="about-section-heading">ARTIST STATEMENT</div>
      <div class="about-body">
        <p>To be a creator is to be a medium. I begin my work with an encounter of weighted probability: something both within and without my control. The work then becomes a process of interpreting this tension. I clarify it, dilute it, open it to others whilst taking care to retain its essential quality. I see this as a means of interfacing with nature–not only flora and fauna, but the space we walk through every day, the time which passes through us, our inner worlds of memory and love.</p>
        <p>I pursue this by pushing the ontological qualities of my materials. I look for a blue which is not a blue, a mark which neither adds nor removes. I want a composition which sits on the knife's edge between being something, and being nothing at all.</p>
      </div>
    </div>
    <div class="about-section">
      <div class="about-section-heading">CONTACT</div>
      <div class="about-contact">evan.c.marion@gmail.com</div>
    </div>
    <div class="about-section">
      <div class="about-section-heading">SELECTED EXHIBITIONS</div>
      <ul class="exhibitions-list">
        <li class="exhibition-item">
          <span class="exhibition-year">2026</span>
          <span>ArtPrize, <em>Cura Contemporary</em>, Grand Rapids, MI (forthcoming)</span>
        </li>
        <li class="exhibition-item">
          <span class="exhibition-year">2026</span>
          <span>Studio Art Senior Majors Exhibition, <em>Jaffe-Friede Gallery</em>, Hanover, NH</span>
        </li>
      </ul>
    </div>
  `;
}

function renderSection(section) {
  switch (section) {
    case 'canvas':       return renderGalleryGrid('canvas', 3);
    case 'space':        return renderGalleryGrid('space', 2);
    case 'illustration': return renderGalleryGrid('illustration', 3);
    case 'about':        return renderAbout();
    default:             return renderGalleryGrid('canvas', 3);
  }
}

function render() {
  const { section, id } = getRoute();
  const content = document.getElementById('content');

  setActiveNav(section);

  if (id) {
    content.innerHTML = renderDetail(section, id);
  } else {
    content.innerHTML = renderSection(section);
  }

  window.scrollTo(0, 0);
}

window.addEventListener('hashchange', render);
window.addEventListener('load', render);
