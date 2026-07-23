const rooms = {
  living: {
    title: "Living Room",
    image: "images/living-room.svg",
    alt: "Selected living room design",
    description: "This living room uses an open furniture arrangement, warm neutral colors, layered lighting, and soft textures to create a comfortable place for conversation and relaxation.",
    palette: "Cream, olive, walnut, and warm white",
    furniture: "Sectional sofa, accent chair, coffee table, rug, and floor lamp",
    materials: "Linen, wood, wool, glass, and woven fabric",
    layout: "Seating faces a central focal point while leaving clear walking paths",
    tip: "Keep the main walkway open between entrances and seating areas"
  },
  bedroom: {
    title: "Bedroom",
    image: "images/bedroom.svg",
    alt: "Selected bedroom design",
    description: "This bedroom creates a restful atmosphere through soft colors, limited visual clutter, comfortable textiles, and lighting that can shift from practical to relaxing.",
    palette: "Warm white, beige, dusty rose, and light oak",
    furniture: "Upholstered bed, nightstands, dresser, bench, and bedside lamps",
    materials: "Cotton, boucle, oak, linen, and woven fiber",
    layout: "The bed is centered as the focal point with balanced storage on both sides",
    tip: "Use closed storage to reduce visual clutter and support relaxation"
  },
  kitchen: {
    title: "Kitchen",
    image: "images/kitchen.svg",
    alt: "Selected kitchen design",
    description: "This kitchen supports efficient movement by placing food storage, preparation space, and cooking areas within easy reach while using durable, easy-to-clean materials.",
    palette: "Ivory, sage green, natural oak, and brushed metal",
    furniture: "Island seating, cabinetry, open shelves, pendant lights, and stools",
    materials: "Quartz, ceramic tile, wood, glass, and brushed metal",
    layout: "The work areas create an efficient path between the sink, stove, and refrigerator",
    tip: "Store frequently used items close to the area where they are needed"
  },
  bathroom: {
    title: "Bathroom",
    image: "images/bathroom.svg",
    alt: "Selected bathroom design",
    description: "This bathroom combines practical storage and moisture-resistant materials with soft lighting, natural textures, and a simple palette for a calm spa-like feeling.",
    palette: "Stone, white, eucalyptus green, and natural wood",
    furniture: "Floating vanity, mirror, shelving, storage baskets, and wall lighting",
    materials: "Ceramic tile, glass, cotton, stone, and sealed wood",
    layout: "The vanity, shower, and storage are arranged to keep the floor open and accessible",
    tip: "Use closed storage for clutter and open storage for attractive everyday items"
  }
};

const styles = {
  modern: {
    description: "Clean lines, useful furniture, and a warm neutral palette create a polished but comfortable room.",
    palette: "Warm neutrals with black, olive, or walnut accents"
  },
  minimalist: {
    description: "Fewer objects, hidden storage, and open space keep the room calm, functional, and easy to maintain.",
    palette: "White, beige, light gray, and pale natural wood"
  },
  coastal: {
    description: "Light colors, natural fibers, and airy details make the room feel relaxed, bright, and connected to nature.",
    palette: "Soft white, sand, pale blue, and weathered wood"
  },
  contemporary: {
    description: "Current shapes, layered textures, and bold accents give the room a fresh and expressive appearance.",
    palette: "Neutral foundation with bold accent colors and mixed finishes"
  }
};

let currentRoom = "living";

const roomImage = document.getElementById("roomImage");
const roomTitle = document.getElementById("roomTitle");
const roomDescription = document.getElementById("roomDescription");
const roomPalette = document.getElementById("roomPalette");
const roomFurniture = document.getElementById("roomFurniture");
const roomMaterials = document.getElementById("roomMaterials");
const roomLayout = document.getElementById("roomLayout");
const roomTip = document.getElementById("roomTip");

document.querySelectorAll(".room-button").forEach((button) => {
  button.addEventListener("click", () => {
    currentRoom = button.dataset.room;
    const room = rooms[currentRoom];

    roomImage.src = room.image;
    roomImage.alt = room.alt;
    roomTitle.textContent = room.title;
    roomDescription.textContent = room.description;
    roomPalette.textContent = room.palette;
    roomFurniture.textContent = room.furniture;
    roomMaterials.textContent = room.materials;
    roomLayout.textContent = room.layout;
    roomTip.textContent = room.tip;

    document.querySelectorAll(".style-button").forEach((item) => item.classList.remove("active"));
    document.querySelector('[data-style="modern"]').classList.add("active");

    document.getElementById("showcase").scrollIntoView({ behavior: "smooth" });
  });
});

document.querySelectorAll(".style-button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".style-button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    const selectedStyle = styles[button.dataset.style];
    roomDescription.textContent = `${rooms[currentRoom].title}: ${selectedStyle.description}`;
    roomPalette.textContent = selectedStyle.palette;
  });
});

const toggleDesign = document.getElementById("toggleDesign");
const transformationImage = document.getElementById("transformationImage");
const transformationStatus = document.getElementById("transformationStatus");
const transformationTitle = document.getElementById("transformationTitle");
const transformationText = document.getElementById("transformationText");

let showingAfter = false;

toggleDesign.addEventListener("click", () => {
  showingAfter = !showingAfter;

  if (showingAfter) {
    transformationImage.src = "images/after-room.svg";
    transformationImage.alt = "Room after interior design transformation";
    transformationStatus.textContent = "AFTER";
    transformationTitle.textContent = "A complete, functional room";
    transformationText.textContent = "A clear focal point, improved furniture placement, layered lighting, a cohesive color palette, and added texture make the room feel intentional and comfortable.";
    toggleDesign.textContent = "Show Before Design";
  } else {
    transformationImage.src = "images/before-room.svg";
    transformationImage.alt = "Room before interior design transformation";
    transformationStatus.textContent = "BEFORE";
    transformationTitle.textContent = "An unfinished room";
    transformationText.textContent = "The room lacks a clear focal point, balanced furniture placement, layered lighting, and decorative details that make the space feel complete.";
    toggleDesign.textContent = "Show After Design";
  }
});

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});
