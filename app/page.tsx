
"use client";

import { useState } from "react";
export default function Home() {
    
const [menuOpen, setMenuOpen] = useState(false);
const [activeNav, setActiveNav] = useState("Home");
const [activeImage, setActiveImage] = useState(0);
const [showAllProjects, setShowAllProjects] = useState(false);
const [projectFilter, setProjectFilter] = useState("All");

const projects = [
  {
    no: 1,
    name: "Sakyamuni Project",
    client: "Manechokerling Development Committee",
    description: "Construction, fabrication, and erection of Lord Buddha statue.",
    status: "Completed",
  },
  {
    no: 2,
    name: "Adi Kavi Bhanu Bhakta Acharya Statue",
    client: "Tourism Department, Ministry of Foreign Affairs",
    description: "Construction of a 9-foot-tall statue using the lost-wax casting process.",
    status: "Completed",
  },
  {
    no: 3,
    name: "Budhanilkantha Statue",
    client: "Tourism Department, Ministry of Foreign Affairs",
    description: "Construction of a 10 × 4-foot stone Budhanilkantha statue.",
    status: "Completed",
  },
  {
    no: 4,
    name: "12-Foot Copper Gajur",
    client: "Manechokerling Development Committee",
    description: "Fabrication of a 12-foot copper Gajur with 24-carat gold coating.",
    status: "Completed",
  },
  {
    no: 5,
    name: "Repair of L.D. Kazi Statue",
    client: "Department of Buildings, Government of Sikkim",
    description: "Repair and restoration of the L.D. Kazi statue.",
    status: "Completed",
  },
  {
    no: 6,
    name: "Durga & Ganesh Statues",
    client: "Durga Mandir, Jorethang, South Sikkim",
    description: "Manufacture of 4-foot-high copper Durga and Ganesh statues using lost-wax casting.",
    status: "Completed",
  },
  {
    no: 7,
    name: "Saha-Ashra-Bhuj Avalokiteshvara (Chenrezig) Statues",
    client: "Ralang Monastery, South Sikkim",
    description: "Manufacture of 7-foot-tall thousand-hand Avalokiteshvara statues using the lost-wax process.",
    status: "Completed",
  },
  {
    no: 8,
    name: "Chhepami (Amitayus) Statue",
    client: "Ralang Monastery, South Sikkim",
    description: "Manufacture of a 4-foot copper Chhepami (Aparimita) statue using the lost-wax process.",
    status: "Completed",
  },
  {
    no: 9,
    name: "Shakti (Chakra Samvara) with Kali Statues",
    client: "Ralang Monastery, South Sikkim",
    description: "Manufacture of a 15-foot Shakti statue with four 4-foot-6-inch Kali statues in FRP.",
    status: "Completed",
  },
  {
    no: 10,
    name: "L.D. Kazi Memorial Gold Cup",
    client: "Chakhung Sports Association, West Sikkim",
    description: "Fabrication of a 2-foot memorial trophy using 24-carat gold and silver.",
    status: "Completed",
  },
  {
    no: 11,
    name: "Emblem of India & Sikkimese Gold-Coated Cap",
    client: "Building Department, Government of Sikkim",
    description: "Fabrication of the Three-Headed Lion Emblem of India for Governor House.",
    status: "Completed",
  },
  {
    no: 12,
    name: "Buddha Statue with Accompanying Statues",
    client: "Martam Meditation Monastery, East Sikkim",
    description: "Manufacture of a 9-foot Buddha statue with two 5-foot accompanying statues.",
    status: "Completed",
  },
  {
    no: 13,
    name: "Guru Padmasambhava Statue",
    client: "Gnadak Monastery, Namchi, South Sikkim",
    description: "Manufacture of a 15-foot Guru Padmasambhava statue.",
    status: "Completed",
  },
  {
    no: 14,
    name: "Chenrezig & Shakti Statues (Gold Coated)",
    client: "Not specified in supplied records",
    description: "Manufacture of Chenrezig and Shakti statues with 24-carat gold coating.",
    status: "Completed",
  },
  {
    no: 15,
    name: "Shakyamuni Buddha Statue",
    client: "Gnadak Monastery, Namchi, South Sikkim",
    description: "Manufacture of a 4-foot Shakyamuni Buddha statue.",
    status: "Completed",
  },
  {
    no: 16,
    name: "Chenrezig (Avalokiteshvara) Statue",
    client: "Himachal Pradesh Gumpa",
    description: "Manufacture of a 5-foot Chenrezig statue with background decoration and gold coating.",
    status: "Completed",
  },
  {
    no: 17,
    name: "Guru Rinpoche Statue",
    client: "Himachal Pradesh Gumpa",
    description: "Manufacture of a 25-foot Guru Rinpoche statue.",
    status: "Completed",
  },
  {
    no: 18,
    name: "Shakyamuni Buddha Statue",
    client: "Kalimpong, West Bengal",
    description: "Manufacture of a 4-foot Shakyamuni Buddha statue.",
    status: "Completed",
  },
  {
    no: 19,
    name: "Chenrezig (Avalokiteshvara) Statue",
    client: "Himachal Pradesh Gumpa",
    description: "Manufacture of a 5-foot Chenrezig statue with background decoration.",
    status: "Completed",
  },
  {
    no: 20,
    name: "Guru Rinpoche Statue",
    client: "Himachal Pradesh Gumpa",
    description: "Manufacture of a 25-foot Guru Rinpoche statue.",
    status: "Completed",
  },
  {
    no: 21,
    name: "92-Foot-4-Inch Metallic Chenrezig Statue",
    client: "Sangha Choeling Complex, West Sikkim",
    description: "Design, fabrication, and installation of a 92-foot-4-inch metallic Chenrezig statue.",
    status: "Completed",
  },
  {
    no: 22,
    name: "Myuthung Statue",
    client: "Sangha Choeling Complex, West Sikkim",
    description: "Manufacture of a 12-foot Myuthung statue.",
    status: "Completed",
  },
  {
    no: 23,
    name: "Thousand-Hand Avalokiteshvara Statue",
    client: "Sangha Choeling Complex, West Sikkim",
    description: "Manufacture of a 15-foot thousand-hand Avalokiteshvara statue.",
    status: "Completed",
  },
  {
    no: 24,
    name: "G20 Landmark Structure",
    client: "MG Marg, Gangtok",
    description: "Construction of a landmark and celebration structure for the G20 Conference.",
    status: "Completed",
  },
  {
    no: 25,
    name: "Mangerzung Statue",
    client: "Mangshari, West Sikkim",
    description: "Construction of a 35-foot-high copper embossed statue.",
    status: "Completed",
  },
  {
    no: 26,
    name: "Copper Statues for Soreng Monastery",
    client: "Soreng, West Sikkim",
    description: "Construction of three 8-foot-high copper statues.",
    status: "Completed",
  },
  {
    no: 27,
    name: "Gold-Coated Copper Statues",
    client: "Nandok Monastery, Namchi",
    description: "Construction of three 8-foot-high copper statues with gold coating.",
    status: "Completed",
  },
  {
    no: 28,
    name: "Four Harmonious Friends Statue",
    client: "Ridge Park, Gangtok",
    description: "Construction of a 24-foot-high copper embossed statue.",
    status: "Completed",
  },
  {
    no: 29,
    name: "Ashoka Stambh",
    client: "Ridge Park, Gangtok",
    description: "Construction of a 12-foot copper Ashoka Stambh using the casting process.",
    status: "Completed",
  },
  {
  no: 30,
  name: "Thekung Moonsoolung Statue",
  client: "Dzongu, North Sikkim",
  description: "Construction of a 35-foot-high copper embossed statue.",
  status: "Ongoing",
  progress: 70,
},
{
  no: 31,
  name: "Romlyang Tungrong (Stairway to Heaven)",
  client: "Daramdin, West Sikkim",
  description: "Construction of the Romlyang Tungrong landmark structure.",
  status: "Ongoing",
  progress: 80,
},
{
  no: 32,
  name: "Gyalwa Lhatsun Chenpo Statue",
  client: "Simik Lingzey, Gangtok District",
  description: "Construction of a 50-foot-high copper casting statue.",
  status: "Ongoing",
  progress: 40,
},
];


const projectPhotos = [
  { src: "/photos/Pelling.jpg", alt: "Pelling project" },
  { src: "/photos/Stairway.png", alt: "Stairway project" },
  { src: "/photos/buddha_park.png", alt: "Buddha Park project" },
  { src: "/photos/Ridge_Park_1.png", alt: "Ridge Park project" },
];
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-black/5 bg-[#faf8f4]/95 shadow-sm backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-3 md:px-6 md:py-4">
          <a href="#home" onClick={() => setActiveNav("Home")} className="flex shrink-0 items-center gap-3" aria-label="Shakya Metal Works home">
            <img
              src="/logo.svg"
              alt="Shakya Metal Works logo"
              className="h-11 w-11 object-contain md:h-12 md:w-12"
            />
            <span className="whitespace-nowrap text-lg font-bold tracking-tight md:text-xl">
              <span className="text-[#222222]">Shakya</span>{" "}
              <span className="text-brand-orange">Metal Works</span>
            </span>
          </a>

          <div className="flex items-center gap-3 lg:gap-5">
            <nav aria-label="Main navigation" className="hidden items-center gap-4 text-sm font-medium text-neutral-800 lg:flex xl:gap-6">
              {[
                ["Home", "#home"],
                ["About", "#about"],
                ["Our Work", "#project-portfolio"],
                ["Craftsmanship", "#crafts"],
                ["Projects", "#experience"],
                ["Awards", "#awards"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setActiveNav(label)}
                  className={`whitespace-nowrap border-b-2 px-1 py-2 transition-colors ${activeNav === label ? "border-brand-orange text-brand-orange" : "border-transparent hover:text-brand-orange"}`}
                >
                  {label}
                </a>
              ))}
            </nav>

            <a href="#contact" onClick={() => setActiveNav("Get in Touch")} className="hidden items-center gap-2 rounded-lg bg-brand-orange px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md lg:inline-flex">
              Get in Touch <span aria-hidden="true">→</span>
            </a>

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-black/10 bg-white text-2xl text-neutral-800 transition hover:border-brand-orange hover:text-brand-orange lg:hidden"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? "×" : "☰"}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav aria-label="Mobile navigation" className="border-t border-black/5 bg-[#faf8f4] px-5 py-4 shadow-lg lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-1 text-sm font-medium text-neutral-800">
              {[
                ["Home", "#home"],
                ["About", "#about"],
                ["Our Work", "#project-portfolio"],
                ["Craftsmanship", "#crafts"],
                ["Projects", "#experience"],
                ["Awards", "#awards"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => { setActiveNav(label); setMenuOpen(false); }}
                  className={`rounded-md px-3 py-3 transition-colors ${activeNav === label ? "bg-orange-50 text-brand-orange" : "hover:bg-orange-50 hover:text-brand-orange"}`}
                >
                  {label}
                </a>
              ))}
              <a href="#contact" onClick={() => { setActiveNav("Get in Touch"); setMenuOpen(false); }} className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-brand-orange px-5 py-3 font-semibold text-white">
                Get in Touch <span aria-hidden="true">→</span>
              </a>
            </div>
          </nav>
        )}
      </header>

      
<section
  id="home"
  className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:gap-12 md:py-24"
>
  <div>
    <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-brand-orange">
      Craftsmanship Since 1994
    </p>

    <h1 className="max-w-xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
      Shaping Your Vision.
      <span className="mt-2 block whitespace-normal text-brand-orange 2xl:whitespace-nowrap">
        Crafting with Purpose.
      </span>
    </h1>

    <p className="mt-6 max-w-lg text-base leading-8 text-muted md:text-lg">
      Discover thoughtfully crafted metalwork, ornaments and statues shaped
      with care, skill and attention to detail.
    </p>

    <div className="mt-8 flex flex-wrap gap-4">
      <a
        href="#crafts"
        className="rounded-md bg-brand-orange px-6 py-3 font-semibold text-white transition hover:opacity-90"
      >
        Explore Our Work
      </a>

      <a
        href="#contact"
        className="rounded-md border border-border px-6 py-3 font-semibold transition hover:bg-white"
      >
        Contact Us
      </a>
    </div>
  </div>

  <div className="w-full min-w-0">
    <div className="group relative overflow-hidden rounded-2xl border border-border bg-white p-2 shadow-sm">
        <button
            type="button"
            onClick={() =>
                setActiveImage(
                (activeImage - 1 + projectPhotos.length) % projectPhotos.length
                )
            }
            aria-label="Previous image"
            className="absolute left-4 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/70 text-foreground opacity-0 shadow-sm backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100 hover:bg-white focus-visible:opacity-100"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
            >
                <path d="m15 18-6-6 6-6" />
            </svg>
        </button>
        <button
            type="button"
            onClick={() =>
                setActiveImage((activeImage + 1) % projectPhotos.length)
            }
            aria-label="Next image"
            className="absolute right-4 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/70 text-foreground opacity-0 shadow-sm backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100 hover:bg-white focus-visible:opacity-100"
            >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
            >
                <path d="m9 18 6-6-6-6" />
            </svg>
        </button>

            <img
                id="hero-main-image"
                src={projectPhotos[activeImage].src}
                alt={projectPhotos[activeImage].alt}
                className="aspect-[4/3] w-full rounded-xl object-cover"
            />
    </div>

    <div className="mt-4 grid grid-cols-4 gap-3">
     
        <button
            type="button"
            onClick={() => setActiveImage(0)}
            className={`overflow-hidden rounded-lg border-2 p-1 ${
                activeImage === 0 ? "border-brand-orange" : "border-border"
            }`}
            aria-label="Show Pelling project"
            aria-pressed={activeImage === 0}
            >
            <img
                src={projectPhotos[0].src}
                alt=""
                className="aspect-square w-full rounded object-cover"
            />
        </button>


        <button
                type="button"
                onClick={() => setActiveImage(1)}
                className={`overflow-hidden rounded-lg border-2 p-1 ${
                    activeImage === 1 ? "border-brand-orange" : "border-border"
                }`}
                aria-label="Show Stairway project"
                aria-pressed={activeImage === 1}
                >
                <img
                    src={projectPhotos[1].src}
                    alt=""
                    className="aspect-square w-full rounded object-cover"
                />
            </button>

            <button
                    type="button"
                    onClick={() => setActiveImage(2)}
                    className={`overflow-hidden rounded-lg border-2 p-1 ${
                        activeImage === 2 ? "border-brand-orange" : "border-border"
                    }`}
                    aria-label="Show Buddha Park project"
                    aria-pressed={activeImage === 2}
                    >
                    <img
                        src={projectPhotos[2].src}
                        alt=""
                        className="aspect-square w-full rounded object-cover"
                    />
                </button>

                <button
                    type="button"
                    onClick={() => setActiveImage(3)}
                    className={`overflow-hidden rounded-lg border-2 p-1 ${
                        activeImage === 3 ? "border-brand-orange" : "border-border"
                    }`}
                    aria-label="Show Ridge Park project"
                    aria-pressed={activeImage === 3}
                    >
                    <img
                        src={projectPhotos[3].src}
                        alt=""
                        className="aspect-square w-full rounded object-cover"
                    />
                </button>
    </div>
  </div>
</section>


     
    
<section id="about" className="scroll-mt-20 border-t border-border bg-[#faf8f4]">
  <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">

    {/* Company introduction */}
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-orange">
          Our Story · Established 1994
        </p>

        <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
          Tradition in our hands.
          <span className="mt-2 block text-brand-orange">
            Excellence in every detail.
          </span>
        </h2>

        <p className="mt-6 leading-8 text-muted">
          Shakya Metal Works brings together traditional craftsmanship
          and skilled fabrication to create statues, ornaments, and
          landmark structures. Our work includes copper and silver
          craftsmanship, fibre-reinforced plastic (FRP) statues,
          lost-wax casting, gold-coated metalwork, and restoration.
        </p>

        <p className="mt-4 leading-8 text-muted">
          From intricate religious sculptures to large public landmarks,
          our project portfolio reflects a commitment to detail,
          craftsmanship, and enduring work.
        </p>

        <a
          href="#project-portfolio"
          className="mt-8 inline-flex items-center gap-2 font-semibold text-brand-orange transition hover:gap-3"
        >
          Explore our projects <span aria-hidden="true">→</span>
        </a>
      </div>

      <div className="relative">
        <div className="overflow-hidden rounded-2xl">
          <img
            src="/photos/buddha_park.png"
            alt="A project photograph from the Shakya Metal Works gallery"
            className="aspect-[4/3] w-full object-cover"
          />
        </div>
        <div className="absolute -bottom-5 left-4 rounded-xl bg-white px-5 py-4 shadow-lg sm:left-8">
          <p className="text-2xl font-bold">Buddha Park</p>
          <p className="mt-1 text-sm text-muted">Ravangla</p>
        </div>
      </div>
    </div>

    {/* Company highlights */}
    <div className="mt-20 grid grid-cols-1 gap-8 border-y border-border py-8 text-center sm:grid-cols-3 sm:gap-4 sm:text-left">
      <div>
        <p className="text-3xl font-bold">1994</p>
        <p className="mt-2 text-sm text-muted">Year established</p>
      </div>
      <div>
        <p className="text-3xl font-bold">29</p>
        <p className="mt-2 text-sm text-muted">Completed projects listed</p>
      </div>
      <div>
        <p className="text-3xl font-bold">3</p>
        <p className="mt-2 text-sm text-muted">Projects under execution</p>
      </div>
    </div>

    {/* Project portfolio */}
    <div id="project-portfolio" className="scroll-mt-24 pt-20">
      <div className="flex flex-col gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-orange">
            Our Work
          </p>
          <h3 className="mt-3 text-3xl font-bold md:text-4xl">
            Projects that make a mark.
          </h3>
        </div>
        <p className="max-w-none leading-7 text-muted">
          Explore a selection of our completed projects and the landmark structures currently taking shape.
        </p>
      </div>

      {/* Featured completed projects */}
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        <article className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
          <div className="overflow-hidden">
            <img
              src="/photos/Pelling.jpg"
              alt="Buddha Park project photograph"
              className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
          <div className="p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-orange">
              Completed · Pelling
            </p>
            <h4 className="mt-3 text-xl font-bold">
              Chenrezig Statue
            </h4>
            <p className="mt-3 text-sm leading-7 text-muted">
              Design, fabrication, and installation of a monumental
              Copper Chenrezig statue in Pelling, West Sikkim.
            </p>
          </div>
        </article>

        <article className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
          <div className="overflow-hidden">
            <img
              src="/photos/Ridge_Park_1.png"
              alt="Ridge Park project photograph"
              className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
          <div className="p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-orange">
              Completed · Ridge Park, Gangtok
            </p>
            <h4 className="mt-3 text-xl font-bold">
              Landmark Metal Structures
            </h4>
            <p className="mt-3 text-sm leading-7 text-muted">
              Completed works at Ridge Park include the Four Harmonious
              Friends copper embossed statue and the copper Ashoka Stambh.
            </p>
          </div>
        </article>

        <article className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
          <div className="overflow-hidden">
            <img
              src="/photos/g20.png"
              alt="Stairway to Heaven project photograph"
              className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
          <div className="p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-orange">
              Completed · MG Marg, Gangtok
            </p>
            <h4 className="mt-3 text-xl font-bold">
              G20 Landmark Structure
            </h4>
            <p className="mt-3 text-sm leading-7 text-muted">
              Construction of the landmark and celebration structure
              for the G20 Conference.
            </p>
          </div>
        </article>
      </div>

      


      {/* Ongoing projects */}
      <div className="mt-20">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-orange">
          Currently Under Execution
        </p>

        <h3 className="mt-3 text-3xl font-bold md:text-4xl">
          Work in progress.
        </h3>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Project 30 */}
          <article className="rounded-2xl border border-border bg-white p-6 md:p-8">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-orange">
                  Project 30
                </p>
                <h4 className="mt-2 text-xl font-bold">
                  Thekung Moonsoolung Statue
                </h4>
                <p className="mt-2 text-sm text-muted">
                  Dzongu, North Sikkim
                </p>
              </div>

              <span className="rounded-full bg-orange-50 px-3 py-1.5 text-xs font-semibold text-brand-orange">
                In progress
              </span>
            </div>

            <p className="mt-5 text-sm leading-7 text-muted">
              Construction of a 35-foot-high copper embossed statue.
            </p>

            <div className="mt-7 flex items-center justify-between text-sm">
              <span className="text-muted">Reported completion</span>
              <span className="text-lg font-bold">70%</span>
            </div>

            <div
              className="mt-3 h-2 overflow-hidden rounded-full bg-gray-100"
              role="progressbar"
              aria-label="Thekung Moonsoolung Statue completion"
              aria-valuenow={70}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div
                className="h-full rounded-full bg-brand-orange"
                style={{ width: "70%" }}
              />
            </div>
          </article>

          {/* Project 31 */}
          <article className="rounded-2xl border border-border bg-white p-6 md:p-8">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-orange">
                  Project 31
                </p>
                <h4 className="mt-2 text-xl font-bold">
                  Romlyang Tungrong
                </h4>
                <p className="mt-2 text-sm text-muted">
                  “Stairway to Heaven” · Daramdin, West Sikkim
                </p>
              </div>

              <span className="rounded-full bg-orange-50 px-3 py-1.5 text-xs font-semibold text-brand-orange">
                In progress
              </span>
            </div>

            <p className="mt-5 text-sm leading-7 text-muted">
              Construction of the Romlyang Tungrong landmark structure.
            </p>

            <div className="mt-7 flex items-center justify-between text-sm">
              <span className="text-muted">Reported completion</span>
              <span className="text-lg font-bold">80%</span>
            </div>

            <div
              className="mt-3 h-2 overflow-hidden rounded-full bg-gray-100"
              role="progressbar"
              aria-label="Romlyang Tungrong completion"
              aria-valuenow={80}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div
                className="h-full rounded-full bg-brand-orange"
                style={{ width: "80%" }}
              />
            </div>
          </article>

          {/* Project 32 */}
          <article className="rounded-2xl border border-border bg-white p-6 md:p-8">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-orange">
                  Project 32
                </p>
                <h4 className="mt-2 text-xl font-bold">
                  Gyalwa Lhatsun Chenpo Statue
                </h4>
                <p className="mt-2 text-sm text-muted">
                  Simik Lingzey, Gangtok District
                </p>
              </div>

              <span className="rounded-full bg-orange-50 px-3 py-1.5 text-xs font-semibold text-brand-orange">
                In progress
              </span>
            </div>

            <p className="mt-5 text-sm leading-7 text-muted">
              Construction of a 50-foot-high copper casting statue.
            </p>

            <div className="mt-7 flex items-center justify-between text-sm">
              <span className="text-muted">Reported completion</span>
              <span className="text-lg font-bold">40%</span>
            </div>

            <div
              className="mt-3 h-2 overflow-hidden rounded-full bg-gray-100"
              role="progressbar"
              aria-label="Gyalwa Lhatsun Chenpo Statue completion"
              aria-valuenow={40}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div
                className="h-full rounded-full bg-brand-orange"
                style={{ width: "40%" }}
              />
            </div>
          </article>
        </div>
      </div>


{/* Complete project directory */}
<div id="experience" className="mt-16 scroll-mt-24 border-t border-border pt-12">
  <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-orange">
        Our Experience
      </p>
      <h3 className="mt-3 text-3xl font-bold">
        Complete Project Portfolio
      </h3>
      <p className="mt-3 max-w-none leading-7 text-muted lg:whitespace-nowrap">
        Explore our recorded projects, the clients we have served, and the work we have undertaken over the years.
      </p>
    </div>

    <button
      type="button"
      onClick={() => setShowAllProjects(!showAllProjects)}
      className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-brand-orange px-5 py-3 font-semibold text-white transition hover:opacity-90"
      aria-expanded={showAllProjects}
    >
      {showAllProjects ? "Hide Projects" : "View All Projects"}
      <span aria-hidden="true">{showAllProjects ? "−" : "+"}</span>
    </button>
  </div>

  {showAllProjects && (
    <div className="mt-8">
      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        {["All", "Completed", "Ongoing"].map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setProjectFilter(filter)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
              projectFilter === filter
                ? "border-brand-orange bg-brand-orange text-white"
                : "border-border bg-white text-foreground hover:border-brand-orange"
            }`}
            aria-pressed={projectFilter === filter}
          >
            {filter === "All" ? "All Projects" : filter}
          </button>
        ))}
      </div>

      {/* Project count */}
      <p className="mt-5 text-sm text-muted" aria-live="polite">
        Showing {
          projects.filter(
            (project) =>
              projectFilter === "All" || project.status === projectFilter
          ).length
        } of {projects.length} project entries
      </p>

      {/* Project entries */}
      <div className="mt-4 space-y-3">
        {projects
          .filter(
            (project) =>
              projectFilter === "All" || project.status === projectFilter
          )
          .map((project) => (
            <article
              key={project.no}
              className="rounded-xl border border-border bg-white p-5 transition hover:border-brand-orange sm:p-6"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-orange">
                    Project {String(project.no).padStart(2, "0")}
                  </p>

                  <h4 className="mt-2 text-lg font-bold">
                    {project.name}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-muted">
                    {project.description}
                  </p>

                  <p className="mt-3 text-sm">
                    <span className="font-semibold">Client / Location: </span>
                    <span className="text-muted">{project.client}</span>
                  </p>
                </div>

                <div className="shrink-0 sm:w-32">
                  <span
                    className={`inline-flex rounded-full px-3 py-1.5 text-xs font-semibold ${
                      project.status === "Completed"
                        ? "bg-green-50 text-green-700"
                        : "bg-orange-50 text-orange-700"
                    }`}
                  >
                    {project.status}
                  </span>

                  {project.status === "Ongoing" && (
                    <div className="mt-4">
                      <div className="flex justify-between gap-2 text-xs">
                        <span className="text-muted">Progress</span>
                        <span className="font-bold">{project.progress}%</span>
                      </div>
                      <div
                        className="mt-2 h-1.5 overflow-hidden rounded-full bg-gray-100"
                        role="progressbar"
                        aria-label={`${project.name} completion`}
                        aria-valuenow={project.progress}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <div
                          className="h-full rounded-full bg-brand-orange"
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
      </div>
    </div>
  )}
</div>

    {/* Awards */}
    <div id="awards" className="mt-20 scroll-mt-28 overflow-hidden rounded-2xl bg-[#222222] p-7 text-white md:p-12">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-400">
        Awards & Recognition
      </p>
      <h3 className="mt-3 max-w-none text-3xl font-bold md:text-4xl lg:whitespace-nowrap">
        Honoured for our craft. Driven by our tradition.
      </h3>

      <div className="mt-8 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { name: "National Award", year: "1994–95" },
          { name: "Kala Shri", year: "1996" },
          { name: "State Award for Metal Works", year: "1999" },
          { name: "Kala Shri", year: "2002" },
          { name: "Kamala Devi Award for Metal Casting", year: "2009" },
        ].map((award) => (
          <div key={award.name + award.year} className="border-t border-white/20 py-5">
            <p className="font-semibold">{award.name}</p>
            <p className="mt-1 text-sm text-white/60">{award.year}</p>
          </div>
        ))}
      </div>

      <p className="mt-2 text-sm text-white/60">
        And many more recognitions over the years.
      </p>
    </div>
  </div>
  </div>
</section>



      <section id="crafts" className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">
          What We Do
        </p>

        <h2 className="mt-3 text-3xl font-bold md:text-4xl">
          Our Craftsmanship
        </h2>

        <p className="mt-4 max-w-none whitespace-normal leading-7 text-muted lg:whitespace-nowrap">
          Discover our work across ornaments, fiber, copper and silver, shaped with care and attention to detail.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <article className="group overflow-hidden rounded-xl border border-border bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1707222611620-41c17060c4de?auto=format&fit=crop&w=800&q=80"
                alt="Traditional Indian ornamental jewelry"
                className="aspect-[5/3] w-full object-cover transition duration-500 group-hover:scale-105 sm:aspect-[4/5]"
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold">Ornaments</h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                Decorative pieces showcasing intricate detail and craftsmanship.
              </p>
            </div>
          </article>

          <article className="group overflow-hidden rounded-xl border border-border bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1758466872633-07db29e91b64?auto=format&fit=crop&w=800&q=80"
                alt="Handcrafted woven fiber product"
                className="aspect-[5/3] w-full object-cover transition duration-500 group-hover:scale-105 sm:aspect-[4/5]"
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold">Fiber</h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                Fiber-based work highlighting texture and traditional techniques.
              </p>
            </div>
          </article>

          <article className="group overflow-hidden rounded-xl border border-border bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="overflow-hidden">
              <img
                src="https://images.pexels.com/photos/19262976/pexels-photo-19262976/free-photo-of-artisan-working-with-copper-plate.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Artisan working on handcrafted copper metalwork"
                className="aspect-[5/3] w-full object-cover transition duration-500 group-hover:scale-105 sm:aspect-[4/5]"
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold">Copper</h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                Copper craftsmanship with distinctive finishes and details.
              </p>
            </div>
          </article>

          <article className="group overflow-hidden rounded-xl border border-border bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1517857399767-a9dc28f5a734?auto=format&fit=crop&w=800&q=80"
                alt="Silver-colored handcrafted bangles"
                className="aspect-[5/3] w-full object-cover transition duration-500 group-hover:scale-105 sm:aspect-[4/5]"
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold">Silver</h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                Silver pieces presented with a focus on detail and finish.
              </p>
            </div>
          </article>
        </div>
      </section>


      

      <section id="contact" className="bg-neutral-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
            Get in Touch
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Let&apos;s talk craftsmanship.
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-neutral-300">
            Have a project in mind? We&apos;d love to hear from you.
          </p>

          <div className="mt-10 grid gap-10 border-t border-white/10 pt-8 md:grid-cols-2 md:gap-16">
            <div>
              <h3 className="text-lg font-semibold">Contact Information</h3>

              <div className="mt-6 grid gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <p className="text-sm font-medium text-amber-400">Visit Us</p>
                  <p className="mt-2 text-sm leading-6 text-neutral-200">
                    Sajong, Rumtek, East Sikkim – 737135
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium text-amber-400">Call Us</p>
                  <a
                    href="tel:+919749863399"
                    className="mt-2 inline-block text-sm text-neutral-200 transition hover:text-amber-400"
                  >
                    +91 97498-63399
                  </a>
                </div>

                <div>
                  <p className="text-sm font-medium text-amber-400">Email Us</p>
                  <a
                    href="mailto:shakyametalworks@gmail.com"
                    className="mt-2 inline-block break-all text-sm text-neutral-200 transition hover:text-amber-400"
                  >
                    shakyametalworks@gmail.com
                  </a>
                </div>

                <div>
                  <p className="text-sm font-medium text-amber-400">Business Hours</p>
                  <p className="mt-2 text-sm text-neutral-200">
                    9:00 AM – 4:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center border-t border-white/10 pt-8 md:border-l md:border-t-0 md:pl-10 md:pt-0">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-amber-400">
                Have an Enquiry?
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                We&apos;d love to hear from you.
              </h3>

              <p className="mt-4 max-w-lg text-sm leading-7 text-neutral-300">
                Contact us directly to discuss our ornaments, fiber products,
                copper work and silver craftsmanship.
              </p>

              <div className="mt-6 flex flex-wrap gap-3 lg:flex-nowrap">
                <a
                  href="https://wa.me/919749863399?text=Hello%20Shakya%20Metal%20Works%2C%20I%20would%20like%20to%20enquire%20about%20your%20products."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition hover:brightness-95"
                >
                  Enquire on WhatsApp
                </a>

                <a
                  href="https://www.facebook.com/bijoy.shakya.52"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-[#1877F2] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#166FE5]"
                >
                  Find us on Facebook
                </a>

                <a
                  href="https://www.instagram.com/shakyametalworks/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110"
                >
                  Follow us on Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>




      <footer className="bg-neutral-950 px-6 py-6 text-center text-sm text-neutral-400">
        © 2026 Shakya Metal Works. All rights reserved.
      </footer>

      <a
        href="https://wa.me/919749863399?text=Hello%20Shakya%20Metal%20Works%2C%20I%20would%20like%20to%20enquire%20about%20your%20products."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Enquire with Shakya Metal Works on WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105 hover:shadow-xl"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.15 1.6 5.96L0 24l6.3-1.65a11.9 11.9 0 0 0 5.76 1.47h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.45-8.44ZM12.07 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.74.98 1-3.65-.24-.38a9.86 9.86 0 0 1-1.52-5.26c0-5.47 4.45-9.92 9.92-9.92a9.86 9.86 0 0 1 7.02 2.91 9.86 9.86 0 0 1 2.9 7.03c0 5.47-4.45 9.92-9.93 9.92Zm5.44-7.43c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.66.15-.2.3-.76.97-.93 1.17-.17.2-.34.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.48-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.14-.13.3-.34.45-.5.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.66-1.6-.9-2.19-.23-.57-.47-.49-.66-.5h-.56c-.2 0-.52.08-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.87 1.21 3.07.15.2 2.09 3.19 5.06 4.47.71.3 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.41.25-.69.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
        </svg>
      </a>
    </main>

  );
}
