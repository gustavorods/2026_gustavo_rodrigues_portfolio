import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const { t } = useLanguage();
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState("");

  const navItems = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.education, href: "#education" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.contact, href: "#contact" },
  ];

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Intersection Observer for scroll spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    const sections = ["about", "skills", "projects", "education", "experience", "contact"];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 glass-nav ${
        scrolled ? "shadow-md py-1" : "py-2"
      }`}
    >
      {/* Scroll Progress Indicator */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-sky-400 via-blue-500 to-sky-600 origin-left"
        style={{ scaleX }}
      />

      <div className="apple-container flex items-center justify-between h-12">
        <a href="#" className="text-sm font-bold tracking-wider text-foreground transition-all duration-300 hover:scale-105">
          GR
        </a>

        {/* Desktop Navigation Links */}
        <div
          className="hidden md:flex items-center gap-1 relative"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {navItems.map((item, idx) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                onMouseEnter={() => setHoveredIndex(idx)}
                className={`relative px-4 py-1.5 text-xs font-semibold tracking-wide transition-colors duration-300 rounded-full ${
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {/* Sliding Hover Pill */}
                {hoveredIndex === idx && (
                  <motion.span
                    layoutId="navbar-hover-pill"
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                    className="absolute inset-0 bg-secondary/80 rounded-full -z-10"
                  />
                )}

                {/* Text Content */}
                <span className="relative z-10">{item.label}</span>

                {/* Active Section Dot Indicator */}
                {isActive && (
                  <motion.span
                    layoutId="navbar-active-dot"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-sky-500"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <LanguageSwitcher />

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-secondary transition-colors duration-300 flex items-center justify-center w-8 h-8"
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={isDark ? "dark" : "light"}
                initial={{ rotate: -90, scale: 0, opacity: 0 }}
                animate={{ rotate: 0, scale: 1, opacity: 1 }}
                exit={{ rotate: 90, scale: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              >
                {isDark ? <Sun size={16} /> : <Moon size={16} />}
              </motion.div>
            </AnimatePresence>
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-full hover:bg-secondary transition-colors duration-300"
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden border-t bg-background/95 backdrop-blur-lg"
          >
            <div className="apple-container py-4 flex flex-col gap-3">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`text-sm font-semibold py-2 px-3 rounded-lg transition-all duration-300 flex items-center justify-between ${
                      isActive
                        ? "bg-secondary text-foreground"
                        : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                    )}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
