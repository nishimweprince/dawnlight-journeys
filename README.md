# Dawnlight Journeys

Welcome to **Dawnlight Journeys**, a travel experience designed to provide unforgettable safaris and adventures in Uganda and Rwanda. This project aims to bring the beauty of Africa to life, combining luxury, adventure, and cultural immersion. Whether you're trekking through lush rainforests, photographing incredible wildlife, or engaging with vibrant local communities, Dawnlight Journeys offers a unique experience tailored to every traveler.

Dawnlight Journeys is led by a team of passionate travel enthusiasts and developers committed to creating seamless and immersive digital experiences. The project is developed and maintained by **Nishimwe Prince** and contributors, with the parent company specializing in eco-tourism and cultural travel.

---

## Architecture Overview

The **Dawnlight Journeys** project is built using modern web technologies to ensure a fast, reliable, and visually stunning web application. Here's a high-level overview of the architecture:

### Tech Stack
- **Frontend Framework:** [Next.js](https://nextjs.org/) for server-side rendering and a seamless user experience.
- **Styling:** Tailwind CSS is used for a consistent and modern design system.
- **Icons and UI Components:** Libraries like `react-icons` and custom components enhance the UI/UX.
- **Data Handling:** JSON and APIs for dynamic content delivery.

### Key Components
1. **Layout (`app/layout.tsx`):**
   - Houses global elements like the Navbar and Footer.
   - Defines metadata for SEO and social sharing.
   - Integrates WhatsApp chat functionality for direct customer support.

2. **Navigation (`src/components/navbar.tsx`):**
   - Provides intuitive navigation to key sections like "Destinations," "Safaris," and "Experiences."
   - Mobile-friendly with responsive design.

3. **Pages:**
   - **`app/page.tsx`**: The homepage featuring a hero section, curated experiences, and contact information.
   - **`app/destinations/[slug]/page.tsx`**: Dynamic pages for specific destinations, showcasing detailed itineraries and highlights.
   - **`app/safaris/page.tsx`**: A showcase of safari packages, complete with FAQs and booking options.
   - **`app/experiences/page.tsx`**: Highlights unique experiences like wildlife photography and cultural immersion.

4. **UI Components:**
   - **Carousel:** Enables smooth image sliders for showcasing destinations and experiences.
   - **Scroll Area:** Provides custom scrollable areas for better content organization.
   - **Drawer and Dialog:** Used for interactive modals and pop-ups.

5. **Global Styles (`app/globals.css`):**
   - Implements a cohesive design system with custom CSS variables.

---

## Navigation

### Touring the Deployed Website

Navigating the Dawnlight Journeys website is straightforward and user-friendly. Here's a quick guide:

1. **Homepage:**
   - Start your journey with an inspiring hero section that introduces the essence of Dawnlight Journeys.
   - Explore curated sections like "Destinations," "Safaris," and "Experiences."

2. **Destinations Page:**
   - Browse through exotic destinations in Uganda and Rwanda.
   - Each destination offers a detailed overview, including itineraries, highlights, and FAQs.

3. **Safaris Page:**
   - Discover a variety of safari packages, from gorilla trekking to river cruises.
   - Packages include detailed descriptions, highlights, and direct booking links.

4. **Experiences Page:**
   - Go beyond safaris with unique experiences like cultural immersion and culinary adventures.
   - Each experience is designed to provide a deeper connection to Africa's rich heritage.

5. **WhatsApp Support:**
   - A floating WhatsApp icon is available on all pages for instant customer support.

### Tips for Navigation
- Use the **Navbar** to quickly jump between sections.
- Hover over interactive elements for helpful tooltips and animations.
- Explore the FAQs section for detailed answers to common questions.

---

## Contributing

We welcome contributions to improve the Dawnlight Journeys project! Whether you're a developer, designer, or travel enthusiast, your input is valuable. Feel free to fork the repository, submit issues, or create pull requests.

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

Thank you for exploring Dawnlight Journeys. Let the adventure begin!