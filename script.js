// ========================================
// FORM & FUNCTION
// Interactive Website JavaScript
// ========================================


// ========================================
// ROOM INFORMATION
// ========================================

const roomData = {
  living: {
    title: "Living Room",

    description:
      "This living room uses an open furniture arrangement, warm neutral colors, layered lighting, and soft textures to create a comfortable place for conversation and relaxation.",

    palette:
      "Cream, olive, walnut, and warm white",

    furniture:
      "Sectional sofa, accent chair, coffee table, rug, and floor lamp",

    materials:
      "Linen, wood, wool, glass, and woven fabric",

    layout:
      "Seating faces a central focal point while leaving clear walking paths",

    tip:
      "Keep the main walkway open between entrances and seating areas",

    image:
      "images/living-room.svg",

    alt:
      "Selected living room interior design"
  },

  bedroom: {
    title: "Bedroom",

    description:
      "This bedroom uses soft colors, comfortable textiles, organized storage, and warm lighting to create a peaceful space for resting and relaxing.",

    palette:
      "Soft beige, muted green, white, and natural wood",

    furniture:
      "Bed, nightstands, dresser, bench, and reading chair",

    materials:
      "Cotton, linen, wood, wool, and soft upholstery",

    layout:
      "The bed serves as the main focal point with balanced furniture placed around it",

    tip:
      "Leave enough space around the bed so users can move comfortably",

    image:
      "images/bedroom.svg",

    alt:
      "Selected bedroom interior design"
  },

  kitchen: {
    title: "Kitchen",

    description:
      "This kitchen combines practical storage, durable materials, useful lighting, and an efficient layout to support cooking, cleaning, and movement.",

    palette:
      "Warm white, sage green, charcoal, and light wood",

    furniture:
      "Kitchen island, stools, cabinets, shelving, and dining table",

    materials:
      "Wood, stone, tile, metal, and glass",

    layout:
      "The refrigerator, sink, and stove are positioned to support an efficient work area",

    tip:
      "Keep frequently used items close to the main food preparation area",

    image:
      "images/kitchen.svg",

    alt:
      "Selected kitchen interior design"
  },

  bathroom: {
    title: "Bathroom",

    description:
      "This bathroom uses moisture-resistant materials, useful storage, calming colors, and soft details to create a clean and spa-inspired environment.",

    palette:
      "White, sand, muted blue, and natural wood",

    furniture:
      "Vanity, mirror, shelving, storage cabinet, and stool",

    materials:
      "Tile, stone, glass, wood, and metal",

    layout:
      "Fixtures are arranged to preserve open floor space and support everyday routines",

    tip:
      "Use vertical storage to organize products without taking up floor space",

    image:
      "images/bathroom.svg",

    alt:
      "Selected bathroom interior design"
  }
};


// ========================================
// STYLE INFORMATION
// ========================================

const styleData = {
  modern: {
    description:
      "Modern design uses clean lines, simple shapes, neutral colors, and functional furniture to create an organized and polished space.",

    palette:
      "Cream, black, warm white, and natural wood"
  },

  minimalist: {
    description:
      "Minimalist design focuses on simplicity, open space, limited decoration, and only the furniture and objects that serve a clear purpose.",

    palette:
      "White, light gray, beige, and pale wood"
  },

  coastal: {
    description:
      "Coastal design uses light colors, natural materials, soft textures, and ocean-inspired details to create a bright and relaxed atmosphere.",

    palette:
      "White, sand, soft blue, and natural tan"
  },

  contemporary: {
    description:
      "Contemporary design combines current trends with smooth shapes, bold accents, layered textures, and a balance of comfort and visual interest.",

    palette:
      "Warm gray, cream, charcoal, and muted green"
  }
};


// ========================================
// SELECT HTML ELEMENTS
// ========================================

const roomButtons = document.querySelectorAll(".room-button");
const styleButtons = document.querySelectorAll(".style-button");

const roomImage = document.getElementById("roomImage");
const roomTitle = document.getElementById("roomTitle");
const roomDescription = document.getElementById("roomDescription");
const roomPalette = document.getElementById("roomPalette");
const roomFurniture = document.getElementById("roomFurniture");
const roomMaterials = document.getElementById("roomMaterials");
const roomLayout = document.getElementById("roomLayout");
const roomTip = document.getElementById("roomTip");

const showcaseSection = document.getElementById("showcase");


// ========================================
// CURRENT ROOM
// ========================================

let selectedRoom = "living";


// ========================================
// UPDATE SELECTED ROOM
// ========================================

function updateRoom(roomName) {
  const room = roomData[roomName];

  if (!room) {
    return;
  }

  selectedRoom = roomName;

  if (roomTitle) {
    roomTitle.textContent = room.title;
  }

  if (roomDescription) {
    roomDescription.textContent = room.description;
  }

  if (roomPalette) {
    roomPalette.textContent = room.palette;
  }

  if (roomFurniture) {
    roomFurniture.textContent = room.furniture;
  }

  if (roomMaterials) {
    roomMaterials.textContent = room.materials;
  }

  if (roomLayout) {
    roomLayout.textContent = room.layout;
  }

  if (roomTip) {
    roomTip.textContent = room.tip;
  }

  if (roomImage) {
    roomImage.src = room.image;
    roomImage.alt = room.alt;
  }

  // Reset style buttons to Modern whenever a new room is selected.
  styleButtons.forEach((button) => {
    button.classList.remove("active");

    if (button.dataset.style === "modern") {
      button.classList.add("active");
    }
  });

  // Scroll to the selected room details.
  if (showcaseSection) {
    showcaseSection.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}


// ========================================
// ROOM BUTTON EVENTS
// ========================================

roomButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const roomName = button.dataset.room;

    updateRoom(roomName);
  });
});


// ========================================
// STYLE BUTTON EVENTS
// ========================================

styleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const styleName = button.dataset.style;
    const style = styleData[styleName];
    const room = roomData[selectedRoom];

    if (!style || !room) {
      return;
    }

    styleButtons.forEach((styleButton) => {
      styleButton.classList.remove("active");
    });

    button.classList.add("active");

    if (roomDescription) {
      roomDescription.textContent =
        `${room.title} — ${style.description}`;
    }

    if (roomPalette) {
      roomPalette.textContent = style.palette;
    }
  });
});


// ========================================
// BEFORE AND AFTER TRANSFORMATION
// ========================================

const toggleDesignButton = document.getElementById("toggleDesign");
const transformationImage =
  document.getElementById("transformationImage");
const transformationStatus =
  document.getElementById("transformationStatus");
const transformationTitle =
  document.getElementById("transformationTitle");
const transformationText =
  document.getElementById("transformationText");

let showingAfterDesign = false;

if (toggleDesignButton) {
  toggleDesignButton.addEventListener("click", () => {
    showingAfterDesign = !showingAfterDesign;

    if (showingAfterDesign) {
      if (transformationImage) {
        transformationImage.src = "images/after-room.svg";
        transformationImage.alt =
          "Room after interior design transformation";
      }

      if (transformationStatus) {
        transformationStatus.textContent = "AFTER";
      }

      if (transformationTitle) {
        transformationTitle.textContent =
          "A balanced and complete room";
      }

      if (transformationText) {
        transformationText.textContent =
          "The redesigned room includes a clear focal point, balanced furniture placement, layered lighting, coordinated colors, and decorative details that make the space feel comfortable and complete.";
      }

      toggleDesignButton.textContent = "Show Before Design";
    } else {
      if (transformationImage) {
        transformationImage.src = "images/before-room.svg";
        transformationImage.alt =
          "Room before interior design transformation";
      }

      if (transformationStatus) {
        transformationStatus.textContent = "BEFORE";
      }

      if (transformationTitle) {
        transformationTitle.textContent =
          "An unfinished room";
      }

      if (transformationText) {
        transformationText.textContent =
          "The room lacks a clear focal point, balanced furniture placement, layered lighting, and decorative details that make the space feel complete.";
      }

      toggleDesignButton.textContent = "Show After Design";
    }
  });
}


// ========================================
// MOBILE NAVIGATION MENU
// ========================================

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const navigationLinks = document.querySelectorAll(".main-nav a");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const menuIsOpen = mainNav.classList.toggle("open");

    menuToggle.setAttribute(
      "aria-expanded",
      menuIsOpen.toString()
    );

    if (menuIsOpen) {
      menuToggle.setAttribute(
        "aria-label",
        "Close navigation"
      );
    } else {
      menuToggle.setAttribute(
        "aria-label",
        "Open navigation"
      );
    }
  });

  navigationLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

      menuToggle.setAttribute(
        "aria-label",
        "Open navigation"
      );
    });
  });
}


// ========================================
// BACK TO TOP BUTTON REVISION
// ========================================

const backToTopButton = document.getElementById("backToTop");

function updateBackToTopButton() {
  if (!backToTopButton) {
    return;
  }

  if (window.scrollY > 300) {
    backToTopButton.classList.add("visible");
  } else {
    backToTopButton.classList.remove("visible");
  }
}

if (backToTopButton) {
  window.addEventListener("scroll", updateBackToTopButton);

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  updateBackToTopButton();
}


// ========================================
// SMOOTH SCROLLING FOR PAGE LINKS
// ========================================

const pageLinks = document.querySelectorAll('a[href^="#"]');

pageLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");

    if (!targetId || targetId === "#") {
      return;
    }

    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      event.preventDefault();

      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});


// ========================================
// RESET MOBILE MENU WHEN SCREEN RESIZES
// ========================================

window.addEventListener("resize", () => {
  if (
    window.innerWidth > 768 &&
    mainNav &&
    menuToggle
  ) {
    mainNav.classList.remove("open");

    menuToggle.setAttribute(
      "aria-expanded",
      "false"
    );

    menuToggle.setAttribute(
      "aria-label",
      "Open navigation"
    );
  }
});
