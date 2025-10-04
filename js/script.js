// Global Variables
let currentImageIndex = 0
let galleryImages = []

// Car Data
const carsData = [
  {
    id: 1,
    name: "AutoDrive X1 SUV",
    price: "$45,999",
    category: "suv",
    type: "luxury suv",
    model: "x1",
    image: "images/image66.jpg",
    video: "videos/video13.mp4",
    description: "Powerful SUV with advanced safety features and spacious interior.",
    features: ["All-Wheel Drive", "Panoramic Sunroof", "Premium Sound System"],
    specs: { engine: "3.5L V6", horsepower: "295 HP", mpg: "24/31" },
  },
  {
    id: 2,
    name: "AutoDrive S3 Sedan",
    price: "$38,999",
    category: "sedan",
    type: "luxury sedan",
    model: "s3",
    image: "images/autodrive s3 sedan.jpg",
    video: "videos/video16.mp4",
    description: "Luxury sedan combining elegance with performance.",
    features: ["Leather Interior", "Adaptive Cruise Control", "Wireless Charging"],
    specs: { engine: "2.0L Turbo", horsepower: "252 HP", mpg: "28/36" },
  },
  {
    id: 3,
    name: "AutoDrive E5 Electric",
    price: "$52,999",
    category: "electric",
    type: "electric vehicle",
    model: "e5",
    image: "images/image3.jpg",
    video: "videos/video12.mp4",
    description: "Zero-emission electric vehicle with cutting-edge technology.",
    features: ["Autopilot", "Fast Charging", "Premium Interior"],
    specs: { engine: "Dual Motor", horsepower: "416 HP", range: "405 miles" },
  },
  {
    id: 4,
    name: "AutoDrive X2 SUV",
    price: "$48,999",
    category: "suv",
    type: "premium suv",
    model: "x2",
    image: "images/autodrivex2suv.jpg",
    video: "videos/video14.mp4",
    description: "Premium SUV with luxury features and off-road capabilities.",
    features: ["Off-Road Package", "Premium Audio", "Heated Seats"],
    specs: { engine: "3.0L V6", horsepower: "340 HP", mpg: "22/29" },
  },
  {
    id: 5,
    name: "AutoDrive S4 Sedan",
    price: "$42,999",
    category: "sedan",
    type: "sport sedan",
    model: "s4",
    image: "images/autos4 sedan.jpg",
    video: "videos/video17.mp4",
    description: "Sport sedan with dynamic performance and comfort.",
    features: ["Sport Mode", "Premium Brakes", "Navigation System"],
    specs: { engine: "2.5L Turbo", horsepower: "310 HP", mpg: "25/33" },
  },
  {
    id: 6,
    name: "AutoDrive E7 Electric",
    price: "$58,999",
    category: "electric",
    type: "electric suv",
    model: "e7",
    image: "images/image5.jpg",
    video: "videos/video11.mp4",
    description: "Advanced electric SUV with autonomous driving features.",
    features: ["Full Self-Driving", "Air Suspension", "Premium Glass Roof"],
    specs: { engine: "Tri Motor", horsepower: "516 HP", range: "516 miles" },
  },
  {
    id: 7,
    name: "AutoDrive GT Coupe",
    price: "$65,999",
    category: "coupe",
    type: "sports coupe",
    model: "gt",
    image: "images/image7.jpg",
    video: "videos/video1.mp4",
    description: "High-performance sports coupe with racing-inspired design.",
    features: ["Carbon Fiber Body", "Track Mode", "Brembo Brakes"],
    specs: { engine: "4.0L V8", horsepower: "503 HP", mpg: "18/25" },
  },
  {
    id: 8,
    name: "AutoDrive Hybrid X3",
    price: "$46,999",
    category: "hybrid",
    type: "hybrid suv",
    model: "x3",
    image: "images/image8.jpg",
    video: "videos/video18.mp4",
    description: "Eco-friendly hybrid SUV with exceptional fuel efficiency.",
    features: ["Hybrid Technology", "Eco Mode", "Smart AWD"],
    specs: { engine: "2.5L Hybrid", horsepower: "243 HP", mpg: "40/36" },
  },
]

// Gallery Images Data
const galleryImagesData = [
  {
    src: "images/image1.jpg",
    type: "image",
    title: "AutoDrive X1 SUV",
  },
  {
    src: "images/image2.jpg",
    type: "image",
    title: "AutoDrive S3 Sedan",
  },
  {
    src: "images/image3.jpg",
    type: "image",
    title: "AutoDrive E5 Electric",
  },
  { src: "videos/video10.mp4", type: "video", title: "SUV Test Drive" },
  {
    src: "images/image4.jpg",
    type: "image",
    title: "AutoDrive X2 SUV",
  },
  {
    src: "images/image5.jpg",
    type: "image",
    title: "AutoDrive S4 Sedan",
  },
  {
    src: "videos/video2.mp4",
    type: "video",
    title: "Sedan Performance",
  },
  {
    src: "images/image2.jpg",
    type: "image",
    title: "AutoDrive E7 Electric",
  },
  {
    src: "images/image6.jpg",
    type: "image",
    title: "AutoDrive GT Coupe",
  },
  {
    src: "videos/video5.mp4",
    type: "video",
    title: "Electric Vehicle Features",
  },
  {
    src: "images/image7.jpg",
    type: "image",
    title: "AutoDrive Hybrid X3",
  },
  {
    src: "images/image8.jpg",
    type: "image",
    title: "Luxury Interior",
  },
  {
    src: "images/image9.jpg",
    type: "image",
    title: "Night Drive",
  },
  {
    src: "images/image66.jpg",
    type: "image",
    title: "City Cruising",
  },
  {
    src: "images/image3.jpg",
    type: "image",
    title: "Mountain Adventure",
  },
  {
    src: "images/luxuarydash board.jpg",
    type: "image",
    title: "Luxury Dashboard",
  },
  {
    src: "images/image1.jpg",
    type: "image",
    title: "Electric Charging",
  },
  {
    src: "images/image2.jpg",
    type: "image",
    title: "Sports Car Detail",
  },
  {
    src: "images/image3.jpg",
    type: "image",
    title: "Showroom Display",
  },
  {
    src: "images/image4.jpg",
    type: "image",
    title: "Highway Cruising",
  },
  {
    src: "videos/video6.mp4",
    type: "video",
    title: "Luxury Interior Tour",
  },
  {
    src: "videos/video7.mp4",
    type: "video",
    title: "Performance Testing",
  },
  {
    src: "videos/video8.mp4",
    type: "video",
    title: "Technology Features",
  },
  {
    src: "images/image4.jpg",
    type: "image",
    title: "Premium Wheels",
  },
  {
    src: "images/image5.jpg",
    type: "image",
    title: "Engine Detail",
  },
]

// DOM Content Loaded
document.addEventListener("DOMContentLoaded", () => {
  initializeNavigation()
  initializeScrollAnimations()
  initializeChatbot()
  initializeNewsletter()
  initializeWishlistCount()
  initializeHeroSlider()
  initializeTestDriveModal()
  // Chat modal removed
  initializeBrochureDownload()
  initializeRoutingButtons()

  // Debug background video
  const bgVideo = document.getElementById('bg-video')
  if (bgVideo) {
    bgVideo.addEventListener('loadeddata', () => {
      console.log('Background video loaded:', bgVideo.src)
    })
    bgVideo.addEventListener('error', (e) => {
      console.log('Background video error:', e, 'Current src:', bgVideo.src)
    })
    bgVideo.addEventListener('canplay', () => {
      console.log('Background video can play')
    })
  }

  // Page-specific initializations
  if (document.getElementById("cars-container")) {
    initializeCarsPage()
  }

  if (document.getElementById("gallery-grid")) {
    initializeGallery()
  }

  if (document.getElementById("contact-form")) {
    initializeContactForm()
  }

  if (document.getElementById("testdrive-contact-form")) {
    initializeTestDriveForm()
  }

  if (document.getElementById("offer-contact-form")) {
    initializeOfferForm()
  }

  if (document.querySelector(".faq-item")) {
    initializeFAQ()
  }

  // Initialize animated counters
  animateCounters()
})

// Test Drive Modal
function initializeTestDriveModal() {
  // Create modal once and append to body
  const existing = document.getElementById('testdrive-modal')
  if (!existing) {
    const modal = document.createElement('div')
    modal.className = 'testdrive-modal'
    modal.id = 'testdrive-modal'
    modal.innerHTML = `
      <div class="testdrive-content" role="dialog" aria-modal="true" aria-labelledby="td-title">
        <div class="testdrive-header">
          <h3 id="td-title">Book a Test Drive</h3>
          <button class="testdrive-close" aria-label="Close">&times;</button>
        </div>
        <div class="testdrive-body">
          <form id="testdrive-form">
            <div class="td-grid">
              <div class="td-group full">
                <label for="td-name">Full Name</label>
                <input type="text" id="td-name" name="name" placeholder="John Doe" required>
              </div>
              <div class="td-group">
                <label for="td-phone">Phone Number</label>
                <input type="tel" id="td-phone" name="phone" placeholder="+1 555 123 4567" required>
              </div>
              <div class="td-group">
                <label for="td-model">Select Car Model</label>
                <select id="td-model" name="model" required>
                  <option value="" disabled selected>Select a model</option>
                  <option value="SUV">SUV</option>
                  <option value="Sedan">Sedan</option>
                  <option value="Electric">Electric</option>
                </select>
              </div>
              <div class="td-group full">
                <label for="td-datetime">Preferred Date & Time</label>
                <input type="datetime-local" id="td-datetime" name="datetime" required>
              </div>
            </div>
            <div class="td-actions">
              <button type="button" class="cancel-btn">Cancel</button>
              <button type="submit" class="submit-btn cta-button">Submit Request</button>
            </div>
            <div class="td-success" id="td-success">Your test drive request has been received!</div>
          </form>
        </div>
      </div>
    `
    document.body.appendChild(modal)
  }

  const modalRoot = document.getElementById('testdrive-modal')
  const closeBtn = modalRoot.querySelector('.testdrive-close')
  const cancelBtn = modalRoot.querySelector('.cancel-btn')
  const form = modalRoot.querySelector('#testdrive-form')
  const success = modalRoot.querySelector('#td-success')

  function openModal(prefillModel) {
    if (prefillModel) {
      const select = modalRoot.querySelector('#td-model')
      select.value = prefillModel
    }
    success.classList.remove('show')
    modalRoot.classList.add('active')
    // Focus first field
    setTimeout(() => modalRoot.querySelector('#td-name').focus(), 50)
  }
  function closeModal() {
    modalRoot.classList.remove('active')
  }

  // Note: We no longer intercept '.book-test-drive' clicks; they route directly

  // Close handlers
  closeBtn.addEventListener('click', closeModal)
  cancelBtn.addEventListener('click', closeModal)
  modalRoot.addEventListener('click', (e) => { if (e.target === modalRoot) closeModal() })
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal() })

  // Submit handler (front-end only)
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(form).entries())
    console.log('Test Drive Request:', data)
    success.classList.add('show')
    // Simple UX: reset after short delay
    setTimeout(() => {
      form.reset()
      closeModal()
    }, 1500)
  })
}

// Chat modal removed

// Brochure download
function initializeBrochureDownload() {
  document.querySelectorAll('.download-brochure').forEach((btn) => {
    const href = 'pdfs/autodrive-brochure.pdf'
    // Ensure proper href and download attribute on the element
    if (btn.tagName === 'A') {
      btn.setAttribute('href', href)
      btn.setAttribute('download', '')
    }
    btn.addEventListener('click', (e) => {
      // Allow native navigation for anchors; for buttons, trigger programmatic
      if (btn.tagName !== 'A') {
        e.preventDefault()
        const link = document.createElement('a')
        link.href = href
        link.download = ''
        document.body.appendChild(link)
        link.click()
        link.remove()
      }
    })
  })
}

// Home Page Hero Slider
function initializeHeroSlider() {
  const slider = document.getElementById("hero-slider")
  if (!slider) return

  const slides = Array.from(slider.querySelectorAll('.hero-slide'))
  const dotsContainer = document.getElementById('hero-slider-dots')
  const prevBtn = document.getElementById('hero-prev')
  const nextBtn = document.getElementById('hero-next')
  let current = 0
  let timer = null
  const intervalMs = 5000

  // Build dots
  slides.forEach((_, i) => {
    const dot = document.createElement('button')
    dot.setAttribute('aria-label', `Go to slide ${i + 1}`)
    dot.addEventListener('click', () => goTo(i, true))
    dotsContainer.appendChild(dot)
  })

  const dots = Array.from(dotsContainer.querySelectorAll('button'))

  function setActive(index) {
    slides.forEach((s, i) => s.classList.toggle('active', i === index))
    dots.forEach((d, i) => d.classList.toggle('active', i === index))
  }

  function goTo(index, user = false) {
    current = (index + slides.length) % slides.length
    setActive(current)
    if (user) restart()
  }

  function next() { goTo(current + 1) }
  function prev() { goTo(current - 1) }

  function start() {
    stop()
    timer = setInterval(next, intervalMs)
  }
  function stop() {
    if (timer) clearInterval(timer)
    timer = null
  }
  function restart() { start() }

  // Keyboard accessibility
  slider.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') { next(); e.preventDefault() }
    if (e.key === 'ArrowLeft')  { prev(); e.preventDefault() }
  })
  slider.tabIndex = 0

  // Buttons
  if (prevBtn) prevBtn.addEventListener('click', () => goTo(current - 1, true))
  if (nextBtn) nextBtn.addEventListener('click', () => goTo(current + 1, true))

  // Touch support
  let touchStartX = 0
  let touchDeltaX = 0
  slider.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX
    touchDeltaX = 0
    stop()
  }, { passive: true })
  slider.addEventListener('touchmove', (e) => {
    touchDeltaX = e.touches[0].clientX - touchStartX
  }, { passive: true })
  slider.addEventListener('touchend', () => {
    if (Math.abs(touchDeltaX) > 50) {
      if (touchDeltaX < 0) next(); else prev()
    }
    start()
  })

  // Hover pause on desktop
  slider.addEventListener('mouseenter', stop)
  slider.addEventListener('mouseleave', start)

  // Init
  setActive(current)
  start()
}

// Navigation Functions
function initializeNavigation() {
  const navbar = document.getElementById("navbar")
  const hamburger = document.getElementById("hamburger")
  const navMenu = document.getElementById("nav-menu")

  // Navbar scroll effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled")
    } else {
      navbar.classList.remove("scrolled")
    }
  })

  // Mobile menu toggle
  if (hamburger) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active")
      navMenu.classList.toggle("active")
    })
  }

  // Close mobile menu when clicking on links
  const navLinks = document.querySelectorAll(".nav-link")
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active")
      navMenu.classList.remove("active")
    })
  })
}

// Navbar wishlist counter
function initializeWishlistCount() {
  const badge = document.getElementById("wishlist-count")
  if (!badge) return
  const key = "autodrive_wishlist"
  const store = JSON.parse(localStorage.getItem(key) || "[]")
  badge.textContent = store.length
  // Observe storage changes
  window.addEventListener("storage", () => {
    const updated = JSON.parse(localStorage.getItem(key) || "[]")
    badge.textContent = updated.length
  })
}

// Scroll Animations
function initializeScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible")

        if (entry.target.classList.contains("stat-item")) {
          const counter = entry.target.querySelector(".stat-number")
          if (counter && !counter.classList.contains("animated")) {
            counter.classList.add("animated")
            animateCounter(counter)
          }
        }
      }
    })
  }, observerOptions)

  const fadeElements = document.querySelectorAll(".fade-in")
  fadeElements.forEach((el) => observer.observe(el))
}

// Cars Page Functions
function initializeCarsPage() {
  displayCars(carsData)
  initializeCarFilters()
  initializeCarSearch()
  initializeCarSort()
}

function displayCars(cars) {
  const container = document.getElementById("cars-container")
  if (!container) return

  container.innerHTML = ""

  cars.forEach((car) => {
    const carCard = createCarCard(car)
    container.appendChild(carCard)
    // Ensure visibility for dynamically inserted elements
    setTimeout(() => carCard.classList.add("visible"), 50)
  })
}

function createCarCard(car) {
  const card = document.createElement("div")
  card.className = "car-card fade-in"
  card.id = `car-${car.id}`
  card.dataset.category = car.category
  card.dataset.name = car.name.toLowerCase()
  card.dataset.type = car.type.toLowerCase()
  card.dataset.model = car.model.toLowerCase()
  card.dataset.price = Number.parseFloat(car.price.replace(/[$,]/g, ""))

  card.innerHTML = `
    <div class="car-media">
      <img src="${car.image}" alt="${car.name}" class="car-image" loading="lazy">
      <video class="car-video" muted loop preload="metadata" playsinline poster="${getPosterFromSrc(car.video)}">
        <source src="${car.video}" type="video/mp4">
      </video>
      <div class="media-overlay">
        <button class="play-btn"><i class="fas fa-play"></i></button>
      </div>
      <div class="car-badge">${car.category.toUpperCase()}</div>
    </div>
    <div class="car-info">
      <h3 class="car-name">${car.name}</h3>
      <p class="car-price">${car.price}</p>
      <p class="car-description">${car.description}</p>
      <div class="car-features">
        ${car.features.map((feature) => `<span class="feature-tag">${feature}</span>`).join("")}
      </div>
      <div class="car-specs">
        <div class="spec-item">
          <i class="fas fa-cog"></i>
          <span>${car.specs.engine}</span>
        </div>
        <div class="spec-item">
          <i class="fas fa-tachometer-alt"></i>
          <span>${car.specs.horsepower}</span>
        </div>
        <div class="spec-item">
          <i class="fas fa-gas-pump"></i>
          <span>${car.specs.mpg || car.specs.range}</span>
        </div>
      </div>
      <div class="car-actions">
        <a class="book-test-drive book-now-btn primary" href="contact.html#testdrive-form">
          <i class="fas fa-calendar-alt"></i>
          Book Test Drive
        </a>
        <a class="view-details details-btn secondary" href="details.html?id=${car.id}" data-car-id="${car.id}">
          <i class="fas fa-info-circle"></i>
          View Details
        </a>
        <a class="download-brochure details-btn secondary" href="pdfs/autodrive-brochure.pdf" download>
          <i class="fas fa-file-download"></i>
          Download Brochure
        </a>
        <button class="wishlist-btn ${isInWishlist(car.id) ? 'active' : ''}" onclick="toggleWishlist(${car.id})" title="${isInWishlist(car.id) ? 'Remove from wishlist' : 'Add to wishlist'}">
          <i class="${isInWishlist(car.id) ? 'fas' : 'far'} fa-heart"></i>
        </button>
      </div>
    </div>
  `

  // Add video hover functionality
  const video = card.querySelector(".car-video")
  const image = card.querySelector(".car-image")
  const playBtn = card.querySelector(".play-btn")

  // Ensure video is loaded
  if (video) {
    video.addEventListener('loadeddata', () => {
      console.log('Video loaded:', video.src)
    })
    
    video.addEventListener('error', (e) => {
      console.log('Video error:', e, 'Source:', video.src)
    })
  }

  card.addEventListener("mouseenter", () => {
    if (video) {
      // Resolve actual source even if <video>.src is empty (common when using <source>)
      const sourceEl = video.querySelector('source')
      const src = video.currentSrc || (sourceEl ? sourceEl.getAttribute('src') : '')
      if (src) {
        // Force load to ensure play works after dynamic opacity change
        if (video.readyState < 2) {
          video.load()
        }
        video.style.opacity = "1"
        image.style.opacity = "0"
        video.play().catch(e => console.log('Video play failed:', e, 'Source:', src))
      } else {
        console.log('Video source missing for card:', car.id)
      }
    }
  })

  card.addEventListener("mouseleave", () => {
    if (video) {
      console.log('Mouse leave - pausing video')
      video.style.opacity = "0"
      image.style.opacity = "1"
      video.pause()
      video.currentTime = 0
    }
  })

  playBtn.addEventListener("click", (e) => {
    e.stopPropagation()
    if (video.paused) {
      video.play()
      playBtn.innerHTML = '<i class="fas fa-pause"></i>'
    } else {
      video.pause()
      playBtn.innerHTML = '<i class="fas fa-play"></i>'
    }
  })

  return card
}

function initializeCarFilters() {
  const filterButtons = document.querySelectorAll(".filter-btn")

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Update active button
      filterButtons.forEach((btn) => btn.classList.remove("active"))
      this.classList.add("active")

      // Filter cars
      const filter = this.dataset.filter
      filterCars(filter)
    })
  })
}

function filterCars(category) {
  const carCards = document.querySelectorAll(".car-card")

  carCards.forEach((card) => {
    if (category === "all" || card.dataset.category === category) {
      card.style.display = "block"
      setTimeout(() => card.classList.add("visible"), 100)
    } else {
      card.style.display = "none"
    }
  })
}

function initializeCarSearch() {
  const searchInput = document.getElementById("car-search")
  if (!searchInput) return

  searchInput.addEventListener(
    "input",
    debounce(function () {
      const searchTerm = this.value.toLowerCase().trim()
      const carCards = document.querySelectorAll(".car-card")

      carCards.forEach((card) => {
        const carName = card.dataset.name
        const carPrice = card.dataset.price
        const carType = card.dataset.type || ""
        const carModel = card.dataset.model || ""

        // Search by name, price range, type, or model
        const matchesName = carName.includes(searchTerm)
        const matchesType = carType.includes(searchTerm)
        const matchesModel = carModel.includes(searchTerm)
        const matchesPrice = searchTerm.includes("$")
          ? card.querySelector(".car-price").textContent.toLowerCase().includes(searchTerm)
          : false

        // Price range searches
        let matchesPriceRange = false
        if (searchTerm.includes("under") || searchTerm.includes("below")) {
          const priceMatch = searchTerm.match(/(\d+)/)
          if (priceMatch) {
            const searchPrice = Number.parseInt(priceMatch[1]) * 1000
            matchesPriceRange = carPrice < searchPrice
          }
        } else if (searchTerm.includes("over") || searchTerm.includes("above")) {
          const priceMatch = searchTerm.match(/(\d+)/)
          if (priceMatch) {
            const searchPrice = Number.parseInt(priceMatch[1]) * 1000
            matchesPriceRange = carPrice > searchPrice
          }
        }

        if (matchesName || matchesType || matchesModel || matchesPrice || matchesPriceRange || searchTerm === "") {
          card.style.display = "block"
          card.style.opacity = "1"
          card.style.transform = "translateY(0)"
        } else {
          card.style.opacity = "0"
          card.style.transform = "translateY(20px)"
          setTimeout(() => {
            if (card.style.opacity === "0") {
              card.style.display = "none"
            }
          }, 300)
        }
      })
    }, 300),
  )
}

function initializeCarSort() {
  const sortSelect = document.getElementById("price-sort")
  if (!sortSelect) return

  sortSelect.addEventListener("change", function () {
    const sortValue = this.value
    if (!sortValue) return

    const container = document.getElementById("cars-container")
    const carCards = Array.from(container.children)

    carCards.sort((a, b) => {
      const priceA = Number.parseFloat(a.dataset.price)
      const priceB = Number.parseFloat(b.dataset.price)

      if (sortValue === "low-high") {
        return priceA - priceB
      } else {
        return priceB - priceA
      }
    })

    // Re-append sorted cards
    carCards.forEach((card) => container.appendChild(card))
  })
}

// Gallery Functions
function initializeGallery() {
  const galleryGrid = document.getElementById("gallery-grid")
  if (!galleryGrid) return

  galleryImages = galleryImagesData

  // Initialize gallery filter buttons
  initializeGalleryFilters()

  galleryImages.forEach((item, index) => {
    const galleryItem = document.createElement("div")
    galleryItem.className = `gallery-item fade-in ${item.type}`
    galleryItem.dataset.type = item.type

    if (item.type === "video") {
      galleryItem.innerHTML = `
        <video muted loop preload="metadata" playsinline poster="${getPosterFromSrc(item.src)}">
          <source src="${item.src}" type="video/mp4">
        </video>
        <div class="gallery-overlay">
          <i class="fas fa-play"></i>
          <span>${item.title}</span>
        </div>
      `

      const video = galleryItem.querySelector("video")
      galleryItem.addEventListener("mouseenter", () => {
        video.play().catch(() => {
          // Handle autoplay restrictions
          console.log("Video autoplay prevented")
        })
      })
      galleryItem.addEventListener("mouseleave", () => {
        video.pause()
        video.currentTime = 0
      })
    } else {
      galleryItem.innerHTML = `
        <img src="${item.src}" alt="${item.title}" loading="lazy">
        <div class="gallery-overlay">
          <i class="fas fa-search-plus"></i>
          <span>${item.title}</span>
        </div>
      `
    }

    galleryItem.addEventListener("click", () => openLightbox(index))
    galleryGrid.appendChild(galleryItem)
    // Make newly added gallery items visible (fade-in)
    setTimeout(() => galleryItem.classList.add("visible"), 50)
  })

  initializeLightbox()
}

// Derive a simple poster URL for videos (fallback to a placeholder if not available)
function getPosterFromSrc(videoSrc) {
  const fallback = "images/image4.jpg"
  // If your posters follow a naming convention, transform here
  // e.g., videos/video10.mp4 -> images/video10.jpg
  try {
    const name = videoSrc.split("/").pop().split(".")[0]
    return `images/${name}.jpg`
  } catch (_) {
    return fallback
  }
}

function initializeGalleryFilters() {
  const filterButtons = document.querySelectorAll(".gallery-filter-btn")

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Update active button
      filterButtons.forEach((btn) => btn.classList.remove("active"))
      this.classList.add("active")

      // Filter gallery items
      const filter = this.dataset.filter
      filterGalleryItems(filter)
    })
  })
}

function filterGalleryItems(filter) {
  const galleryItems = document.querySelectorAll(".gallery-item")

  galleryItems.forEach((item) => {
    if (filter === "all" || item.dataset.type === filter) {
      item.style.display = "block"
      setTimeout(() => item.classList.add("visible"), 100)
    } else {
      item.style.display = "none"
    }
  })
}

function initializeLightbox() {
  const lightbox = document.getElementById("lightbox")
  const lightboxClose = document.getElementById("lightbox-close")
  const lightboxPrev = document.getElementById("lightbox-prev")
  const lightboxNext = document.getElementById("lightbox-next")

  if (!lightbox) return

  lightboxClose.addEventListener("click", closeLightbox)
  lightboxPrev.addEventListener("click", () => changeLightboxImage(-1))
  lightboxNext.addEventListener("click", () => changeLightboxImage(1))

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      closeLightbox()
    }
  })

  // Keyboard support handled when opened to enable focus trap
}

function openLightbox(index) {
  const lightbox = document.getElementById("lightbox")
  const lightboxContent = lightbox.querySelector(".lightbox-content")
  const item = galleryImages[index]

  currentImageIndex = index

  // Clear previous content
  const existingMedia = lightboxContent.querySelector("img, video")
  if (existingMedia) existingMedia.remove()

  if (item.type === "video") {
    const video = document.createElement("video")
    video.src = item.src
    video.controls = true
    video.autoplay = true
    video.playsInline = true
    video.preload = "metadata"
    video.style.maxWidth = "90vw"
    video.style.maxHeight = "80vh"
    lightboxContent.insertBefore(video, lightboxContent.querySelector(".lightbox-nav"))
  } else {
    const img = document.createElement("img")
    img.src = item.src
    img.alt = item.title
    img.id = "lightbox-image"
    lightboxContent.insertBefore(img, lightboxContent.querySelector(".lightbox-nav"))
  }

  lightbox.style.display = "flex"
  // Focus trap for lightbox
  const focusableSelectors = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  const focusable = lightbox.querySelectorAll(focusableSelectors)
  const firstEl = focusable[0]
  const lastEl = focusable[focusable.length - 1]
  firstEl && firstEl.focus()

  const keyHandler = (e) => {
    if (e.key === "Escape") closeLightbox()
    if (e.key === "ArrowLeft") changeLightboxImage(-1)
    if (e.key === "ArrowRight") changeLightboxImage(1)
    if (e.key === "Tab" && focusable.length) {
      if (e.shiftKey && document.activeElement === firstEl) {
        e.preventDefault(); lastEl.focus()
      } else if (!e.shiftKey && document.activeElement === lastEl) {
        e.preventDefault(); firstEl.focus()
      }
    }
  }
  document.addEventListener("keydown", keyHandler)
  lightbox.addEventListener("hide", () => document.removeEventListener("keydown", keyHandler), { once: true })
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox")
  lightbox.style.display = "none"
  lightbox.dispatchEvent(new Event("hide"))
}

function changeLightboxImage(direction) {
  currentImageIndex += direction

  if (currentImageIndex >= galleryImages.length) {
    currentImageIndex = 0
  } else if (currentImageIndex < 0) {
    currentImageIndex = galleryImages.length - 1
  }

  openLightbox(currentImageIndex)
}

// Contact Form Functions
function initializeContactForm() {
  const contactForm = document.getElementById("contact-form")
  if (!contactForm) return

  // Check for pre-filled message from URL parameters
  const urlParams = new URLSearchParams(window.location.search)
  const preMessage = urlParams.get("message")
  if (preMessage) {
    const messageField = contactForm.querySelector('textarea[name="message"]')
    if (messageField) {
      messageField.value = decodeURIComponent(preMessage)
    }
  }

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault()

    const submitBtn = this.querySelector(".submit-btn")
    const btnText = submitBtn.querySelector(".btn-text")
    const btnLoading = submitBtn.querySelector(".btn-loading")

    // Show loading state
    btnText.style.display = "none"
    btnLoading.style.display = "inline-flex"
    submitBtn.disabled = true

    // Get form data
    const formData = new FormData(this)
    const name = formData.get("name").trim()
    const email = formData.get("email").trim()
    const phone = formData.get("phone").trim()
    const message = formData.get("message").trim()

    // Inline validation helpers
    clearInlineErrors(contactForm)
    let hasError = false
    if (!name || name.length < 2) {
      setInlineError(contactForm, 'name', 'Please enter a valid name (min 2 characters).')
      hasError = true
    }
    if (!email || !isValidEmail(email)) {
      setInlineError(contactForm, 'email', 'Please enter a valid email address.')
      hasError = true
    }
    if (phone && !/^\d{10,}$/.test(phone)) {
      setInlineError(contactForm, 'phone', 'Please enter a valid phone (numbers only, 10+ digits).')
      hasError = true
    }
    if (!message || message.length < 10) {
      setInlineError(contactForm, 'message', 'Please enter a message (min 10 characters).')
      hasError = true
    }
    if (hasError) {
      showFormMessage("Please fix the errors below and try again.", "error")
      resetSubmitButton(submitBtn, btnText, btnLoading)
      return
    }

    // Simulate form submission delay
    setTimeout(() => {
      // Show success message
      showFormMessage("Your message has been sent successfully! We will get back to you within 24 hours.", "success")
      const success = document.createElement('div')
      success.className = 'form-success'
      success.textContent = 'Thanks! Your message was sent.'
      contactForm.appendChild(success)
      this.reset()
      resetSubmitButton(submitBtn, btnText, btnLoading)
    }, 2000)
  })
}

// Test Drive Form Functions
function initializeTestDriveForm() {
  const testDriveForm = document.getElementById("testdrive-contact-form")
  if (!testDriveForm) return

  testDriveForm.addEventListener("submit", function (e) {
    e.preventDefault()

    const submitBtn = this.querySelector(".submit-btn")
    const btnText = submitBtn.querySelector(".btn-text")
    const btnLoading = submitBtn.querySelector(".btn-loading")

    // Show loading state
    btnText.style.display = "none"
    btnLoading.style.display = "inline-flex"
    submitBtn.disabled = true

    // Get form data
    const formData = new FormData(this)
    const name = formData.get("name").trim()
    const email = formData.get("email").trim()
    const phone = formData.get("phone").trim()
    const model = formData.get("model")
    const datetime = formData.get("datetime")
    const message = formData.get("message").trim()

    // Validation
    clearInlineErrors(testDriveForm)
    let hasError = false
    if (!name || name.length < 2) {
      setInlineError(testDriveForm, 'name', 'Please enter a valid name (min 2 characters).')
      hasError = true
    }
    if (!email || !isValidEmail(email)) {
      setInlineError(testDriveForm, 'email', 'Please enter a valid email address.')
      hasError = true
    }
    if (!phone || !/^\d{10,}$/.test(phone)) {
      setInlineError(testDriveForm, 'phone', 'Please enter a valid phone (numbers only, 10+ digits).')
      hasError = true
    }
    if (!model) {
      setInlineError(testDriveForm, 'model', 'Please select a car model.')
      hasError = true
    }
    if (!datetime) {
      setInlineError(testDriveForm, 'datetime', 'Please select a date and time.')
      hasError = true
    }
    if (hasError) {
      showFormMessage("Please fix the errors above.", "error", "testdrive")
      resetSubmitButton(submitBtn, btnText, btnLoading)
      return
    }

    // Simulate form submission delay
    setTimeout(() => {
      // Show success message
      showFormMessage("✅ Thank you! Your test drive request has been submitted.", "success", "testdrive")
      this.reset()
      resetSubmitButton(submitBtn, btnText, btnLoading)
    }, 2000)
  })
}

// Offer Form Functions
function initializeOfferForm() {
  const offerForm = document.getElementById("offer-contact-form")
  if (!offerForm) return

  offerForm.addEventListener("submit", function (e) {
    e.preventDefault()

    const submitBtn = this.querySelector(".submit-btn")
    const btnText = submitBtn.querySelector(".btn-text")
    const btnLoading = submitBtn.querySelector(".btn-loading")

    // Show loading state
    btnText.style.display = "none"
    btnLoading.style.display = "inline-flex"
    submitBtn.disabled = true

    // Get form data
    const formData = new FormData(this)
    const name = formData.get("name").trim()
    const email = formData.get("email").trim()
    const phone = formData.get("phone").trim()
    const offer = formData.get("offer")
    const message = formData.get("message").trim()

    // Validation
    clearInlineErrors(offerForm)
    let hasError = false
    if (!name || name.length < 2) {
      setInlineError(offerForm, 'name', 'Please enter a valid name (min 2 characters).')
      hasError = true
    }
    if (!email || !isValidEmail(email)) {
      setInlineError(offerForm, 'email', 'Please enter a valid email address.')
      hasError = true
    }
    if (!phone || !/^\d{10,}$/.test(phone)) {
      setInlineError(offerForm, 'phone', 'Please enter a valid phone (numbers only, 10+ digits).')
      hasError = true
    }
    if (!offer) {
      setInlineError(offerForm, 'offer', 'Please select an offer.')
      hasError = true
    }
    if (!message || message.length < 10) {
      setInlineError(offerForm, 'message', 'Please enter a message (min 10 characters).')
      hasError = true
    }
    if (hasError) {
      showFormMessage("Please fix the errors above.", "error", "offer")
      resetSubmitButton(submitBtn, btnText, btnLoading)
      return
    }

    // Simulate form submission delay
    setTimeout(() => {
      // Show success message
      showFormMessage("✅ Thank you! Your offer request has been submitted.", "success", "offer")
      this.reset()
      resetSubmitButton(submitBtn, btnText, btnLoading)
    }, 2000)
  })
}

function showFormMessage(message, type, formId = null) {
  // Determine the correct message container based on form ID or current context
  let messagesContainer
  if (formId === 'testdrive') {
    messagesContainer = document.getElementById("testdrive-form-messages")
  } else if (formId === 'offer') {
    messagesContainer = document.getElementById("offer-form-messages")
  } else {
    messagesContainer = document.getElementById("contact-form-messages") || document.getElementById("form-messages")
  }
  
  if (!messagesContainer) return

  // Clear existing messages
  messagesContainer.innerHTML = ""

  const messageDiv = document.createElement("div")
  messageDiv.className = `form-message ${type}`

  if (type === "success") {
    messageDiv.innerHTML = `
      <i class="fas fa-check-circle"></i>
      <span>${message}</span>
    `
  } else {
    messageDiv.innerHTML = `
      <i class="fas fa-exclamation-triangle"></i>
      <span>${message}</span>
    `
  }

  messagesContainer.appendChild(messageDiv)

  // Auto-remove after 8 seconds for success, 5 seconds for error
  setTimeout(
    () => {
      messageDiv.remove()
    },
    type === "success" ? 8000 : 5000,
  )
}

function clearInlineErrors(form) {
  form.querySelectorAll('.form-error').forEach((e) => e.remove())
  form.querySelectorAll('.invalid').forEach((el) => el.classList.remove('invalid'))
}

function setInlineError(form, fieldName, errorText) {
  const field = form.querySelector(`[name="${fieldName}"]`) || form.querySelector(`#${fieldName}`)
  if (!field) return
  field.classList.add('invalid')
  const error = document.createElement('div')
  error.className = 'form-error'
  error.textContent = errorText
  field.parentElement.appendChild(error)
}

function resetSubmitButton(submitBtn, btnText, btnLoading) {
  btnText.style.display = "inline"
  btnLoading.style.display = "none"
  submitBtn.disabled = false
}

// FAQ Functions
function initializeFAQ() {
  const faqItems = document.querySelectorAll(".faq-item")

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question")

    question.addEventListener("click", () => {
      const isActive = item.classList.contains("active")

      // Close all FAQ items
      faqItems.forEach((faqItem) => {
        faqItem.classList.remove("active")
      })

      // Open clicked item if it wasn't active
      if (!isActive) {
        item.classList.add("active")
      }
    })
  })
}

// Newsletter
function initializeNewsletter() {
  const form = document.getElementById("newsletter-form")
  if (!form) return

  form.addEventListener("submit", (e) => {
    e.preventDefault()
    const emailInput = document.getElementById("newsletter-email")
    const email = emailInput ? emailInput.value.trim() : ""
    // Inline validation
    const wrapper = form
    wrapper.querySelectorAll('.form-error').forEach((e) => e.remove())
    emailInput.classList.remove('invalid')
    if (!email || !isValidEmail(email)) {
      emailInput.classList.add('invalid')
      const err = document.createElement('div')
      err.className = 'form-error'
      err.textContent = 'Please enter a valid email address.'
      emailInput.parentElement.appendChild(err)
      return
    }
    // Simulate success message below form
    const ok = document.createElement('div')
    ok.className = 'form-success'
    ok.textContent = "Subscribed successfully! You'll receive our latest updates."
    form.appendChild(ok)
    setTimeout(() => ok.remove(), 6000)
    emailInput.value = ""
  })
}

// Chatbot Functions
function initializeChatbot() {
  const chatbotButton = document.getElementById("chatbot-button")
  const chatbotPopup = document.getElementById("chatbot-popup")
  const chatbotClose = document.getElementById("chatbot-close")
  const chatbotSend = document.getElementById("chatbot-send")
  const chatbotInput = document.getElementById("chatbot-input")

  if (!chatbotButton) return

  chatbotButton.addEventListener("click", () => {
    chatbotPopup.style.display = chatbotPopup.style.display === "flex" ? "none" : "flex"
  })

  chatbotClose.addEventListener("click", () => {
    chatbotPopup.style.display = "none"
  })

  chatbotSend.addEventListener("click", sendChatMessage)

  chatbotInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      sendChatMessage()
    }
  })
}

function sendChatMessage() {
  const chatbotInput = document.getElementById("chatbot-input")
  const chatbotMessages = document.getElementById("chatbot-messages")
  const message = chatbotInput.value.trim()

  if (!message) return

  // Add user message
  addChatMessage(message, "user")

  // Clear input
  chatbotInput.value = ""

  // Generate bot response
  setTimeout(() => {
    const response = generateChatbotResponse(message)
    addChatMessage(response, "bot")
  }, 500)
}

function addChatMessage(message, sender) {
  const chatbotMessages = document.getElementById("chatbot-messages")
  const messageDiv = document.createElement("div")
  messageDiv.className = sender === "user" ? "user-message" : "bot-message"
  messageDiv.innerHTML = `<p>${message}</p>`

  chatbotMessages.appendChild(messageDiv)
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight
}

function generateChatbotResponse(message) {
  const lowerMessage = message.toLowerCase()

  // SUV queries
  if (lowerMessage.includes("suv") || lowerMessage.includes("show me suv")) {
    const suvCars = carsData.filter((car) => car.category === "suv")
    const suvNames = suvCars.map((car) => car.name).join(", ")
    return `Our SUV collection includes: ${suvNames}. Would you like to know more about any specific model?`
  }

  // Electric car queries
  if (lowerMessage.includes("electric") || lowerMessage.includes("electric car")) {
    const electricCars = carsData.filter((car) => car.category === "electric")
    const electricNames = electricCars.map((car) => car.name).join(", ")
    return `Yes! We have these electric vehicles: ${electricNames}. They offer zero emissions and cutting-edge technology.`
  }

  // Sedan queries
  if (lowerMessage.includes("sedan") || lowerMessage.includes("price of sedan")) {
    const sedanCars = carsData.filter((car) => car.category === "sedan")
    const sedanInfo = sedanCars.map((car) => `${car.name} - ${car.price}`).join(", ")
    return `Our sedan collection: ${sedanInfo}. These combine luxury with performance.`
  }

  // Price queries
  if (lowerMessage.includes("price") || lowerMessage.includes("cost")) {
    return "Our vehicles range from $38,999 to $58,999. Would you like specific pricing for SUVs, sedans, or electric vehicles?"
  }

  // General greetings
  if (lowerMessage.includes("hello") || lowerMessage.includes("hi")) {
    return "Hello! I'm here to help you learn about our AutoDrive vehicles. Ask me about our SUVs, sedans, or electric cars!"
  }

  // Default response
  return 'I can help you with information about our SUVs, sedans, and electric vehicles. Try asking "Show me SUVs" or "Do you have electric cars?"'
}

// Utility Functions
function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Routing buttons initializer
function initializeRoutingButtons() {
  // Book Test Drive → contact.html#testdrive-form
  document.querySelectorAll('.book-test-drive').forEach((el) => {
    if (el.tagName === 'A') {
      el.setAttribute('href', 'contact.html#testdrive-form')
    }
    el.addEventListener('click', (e) => {
      // Let anchor navigate; for non-anchors, programmatic
      if (el.tagName !== 'A') {
        e.preventDefault()
        window.location.href = 'contact.html#testdrive-form'
      }
    })
  })

  // Chat with Expert removed

  // Download Brochure handled in initializeBrochureDownload

  // View Details → showCarDetails(data-car-id)
  document.querySelectorAll('.view-details').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault()
      const id = Number.parseInt(el.getAttribute('data-car-id'))
      if (Number.isFinite(id)) {
        showCarDetails(id)
      } else {
        alert('Car details are unavailable for this item.')
      }
    })
  })
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Handle URL parameters for car filtering
window.addEventListener("load", () => {
  const urlParams = new URLSearchParams(window.location.search)
  const filter = urlParams.get("filter")

  if (filter && document.getElementById("cars-container")) {
    // Find and click the appropriate filter button
    const filterButton = document.querySelector(`[data-filter="${filter}"]`)
    if (filterButton) {
      filterButton.click()
    }
  }
})

// Animated counter functionality
function animateCounters() {
  const counters = document.querySelectorAll(".stat-number")

  counters.forEach((counter) => {
    const target = Number.parseInt(counter.getAttribute("data-target"))
    const increment = target / 100
    let current = 0

    const updateCounter = () => {
      if (current < target) {
        current += increment
        counter.textContent = Math.ceil(current)
        setTimeout(updateCounter, 20)
      } else {
        counter.textContent = target
      }
    }

    updateCounter()
  })
}

function animateCounter(counter) {
  const target = Number.parseInt(counter.getAttribute("data-target"))
  const increment = target / 100
  let current = 0

  const updateCounter = () => {
    if (current < target) {
      current += increment
      counter.textContent = Math.ceil(current)
      setTimeout(updateCounter, 20)
    } else {
      counter.textContent = target
    }
  }

  updateCounter()
}

// Test drive booking function
function bookTestDrive(carName) {
  alert(`Thank you for your interest in the ${carName}! We'll contact you soon to schedule your test drive.`)
}

// Form validation helper functions
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Car details modal function
function showCarDetails(carId) {
  // Redirect to details page instead of showing modal
  window.location.href = `details.html?id=${carId}`
}

function contactAboutCar(carName) {
  const message = `I'm interested in learning more about the ${carName}. Please contact me with additional information.`

  // If on contact page, fill the form
  const messageField = document.querySelector('#contact-form textarea[name="message"]')
  if (messageField) {
    messageField.value = message
    messageField.scrollIntoView({ behavior: "smooth" })
  } else {
    // Otherwise, redirect to contact page with pre-filled message
    window.location.href = `contact.html?message=${encodeURIComponent(message)}`
  }
}

// Wishlist store (localStorage)
function isInWishlist(carId) {
  const key = "autodrive_wishlist"
  const store = JSON.parse(localStorage.getItem(key) || "[]")
  return store.includes(carId)
}

function toggleWishlist(carId) {
  const key = "autodrive_wishlist"
  const store = JSON.parse(localStorage.getItem(key) || "[]")
  const exists = store.includes(carId)
  const next = exists ? store.filter((id) => id !== carId) : [...store, carId]
  localStorage.setItem(key, JSON.stringify(next))
  
  // Update navbar badge if present
  const badge = document.getElementById("wishlist-count")
  if (badge) badge.textContent = next.length
  
  // Toggle heart icon in place
  const heartButtons = document.querySelectorAll(`button[onclick="toggleWishlist(${carId})"] i`)
  heartButtons.forEach((icon) => {
    icon.classList.toggle("fas")
    icon.classList.toggle("far")
  })
  
  // Update button state
  const wishlistButtons = document.querySelectorAll(`button[onclick="toggleWishlist(${carId})"]`)
  wishlistButtons.forEach((btn) => {
    btn.classList.toggle("active")
    btn.title = exists ? "Add to wishlist" : "Remove from wishlist"
  })
  
  // Show notification
  showWishlistNotification(exists ? "Removed from wishlist" : "Added to wishlist", exists ? "info" : "success")
}

function showWishlistNotification(message, type = 'info') {
  const notification = document.createElement('div')
  notification.className = `notification notification-${type}`
  notification.innerHTML = `
    <i class="fas fa-${type === 'success' ? 'heart' : 'info-circle'}"></i>
    <span>${message}</span>
  `
  
  document.body.appendChild(notification)
  
  setTimeout(() => {
    notification.classList.add('show')
  }, 100)
  
  setTimeout(() => {
    notification.classList.remove('show')
    setTimeout(() => {
      if (document.body.contains(notification)) {
        document.body.removeChild(notification)
      }
    }, 300)
  }, 3000)
}
