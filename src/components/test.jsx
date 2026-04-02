import React, { useState, useEffect } from "react";

/* ─── tiny Win2K helpers ──────────────────────────────────────────── */

const TitleBar = ({ title, icon = "🖥️", onClose, onMinimize, onMaximize }) => (
  <div className="win-titlebar select-none">
    <div className="flex items-center gap-1">
      <span style={{ fontSize: 12 }}>{icon}</span>
      <span style={{ fontFamily: "Tahoma, Arial, sans-serif", fontSize: 11, fontWeight: "bold" }}>
        {title}
      </span>
    </div>
    <div className="flex gap-0.5">
      {onMinimize && (
        <button className="win-ctrl-btn" onClick={onMinimize} title="Minimize">_</button>
      )}
      {onMaximize && (
        <button className="win-ctrl-btn" onClick={onMaximize} title="Maximize">□</button>
      )}
      {onClose && (
        <button
          className="win-ctrl-btn"
          onClick={onClose}
          title="Close"
          style={{ background: "#c0392b", color: "white", borderColor: "#e74c3c #7f1d1d #7f1d1d #e74c3c" }}
        >
          ✕
        </button>
      )}
    </div>
  </div>
);

const MenuBar = ({ items }) => (
  <div className="win-menubar">
    {items.map((item, i) => (
      <a key={i} className="win-menuitem" href={item.href || "#"} onClick={item.onClick}>
        {item.label}
      </a>
    ))}
  </div>
);

const WinButton = ({ children, href, download, onClick, primary, className = "" }) => {
  const cls = `win-btn ${primary ? "win-btn-default" : ""} ${className}`;
  if (href)
    return <a href={href} download={download} className={cls} onClick={onClick}>{children}</a>;
  return <button className={cls} onClick={onClick}>{children}</button>;
};

const ProgressBar = ({ value, color }) => (
  <div className="win-progress-track" style={{ height: 14 }}>
    <div
      style={{
        width: `${value}%`,
        height: "100%",
        background: color || "repeating-linear-gradient(to right,#000080 0px,#000080 8px,#1084d0 8px,#1084d0 16px)",
      }}
    />
  </div>
);

const Window = ({ title, icon, children, menuItems, statusText, className = "", style = {}, onClose, onMinimize }) => (
  <div className="win-window" style={style}>
    <TitleBar title={title} icon={icon} onClose={onClose} onMinimize={onMinimize} onMaximize={() => {}} />
    {menuItems && <MenuBar items={menuItems} />}
    <div className={`p-2 bg-[#d4d0c8] ${className}`}>{children}</div>
    {statusText && (
      <div className="win-statusbar">
        <div className="win-statusbar-panel">{statusText}</div>
        <div className="win-statusbar-panel" style={{ flex: "0 0 120px" }}>
          {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </div>
      </div>
    )}
  </div>
);

const DialogBox = ({ title, message, onOk, onCancel }) => (
  <div
    style={{
      position: "fixed", inset: 0, background: "rgba(0,0,0,0.3)",
      display: "flex", alignItems: "center", justifyContent: "center", zIndex: 9998,
    }}
  >
    <div className="win-window" style={{ width: 300 }}>
      <TitleBar title={title} icon="⚠️" onClose={onCancel} />
      <div className="p-4 bg-[#d4d0c8]">
        <p style={{ fontSize: 11, marginBottom: 12 }}>{message}</p>
        <div className="flex justify-end gap-2">
          <WinButton primary onClick={onOk}>OK</WinButton>
          {onCancel && <WinButton onClick={onCancel}>Cancel</WinButton>}
        </div>
      </div>
    </div>
  </div>
);

/* ─── skill colours ───────────────────────────────────────────────── */
const SKILL_COLORS = [
  "#000080", "#1084d0", "#006400", "#8b4513",
  "#800000", "#008080", "#4b0082", "#696969",
];

/* ─── Desktop Icon ────────────────────────────────────────────────── */
const DesktopIcon = ({ icon, label, onClick }) => (
  <div className="win-icon" onDoubleClick={onClick}>
    <div style={{ fontSize: 32, lineHeight: 1, filter: "drop-shadow(1px 1px 0 #000)" }}>{icon}</div>
    <span className="win-icon-label">{label}</span>
  </div>
);

/* ─── Taskbar Clock ───────────────────────────────────────────────── */
const TaskbarClock = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  return (
    <div
      className="win-sunken"
      style={{
        marginLeft: "auto", padding: "1px 8px", fontSize: 11,
        fontFamily: "Tahoma, Arial, sans-serif", minWidth: 56, textAlign: "center",
        background: "#d4d0c8",
      }}
    >
      {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
    </div>
  );
};

/* ══════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ══════════════════════════════════════════════════════════════════ */
const ModernPortfolio = () => {
  const [language, setLanguage] = useState("es");
  const [dialog, setDialog] = useState(null);
  const [activeWindow, setActiveWindow] = useState("portfolio");
  const [minimized, setMinimized] = useState({});

  useEffect(() => {
    const l = navigator.language.startsWith("es") ? "es" : "en";
    setLanguage(l);
  }, []);

  const toggleLanguage = () => setLanguage((l) => (l === "es" ? "en" : "es"));

  /* ── i18n ────────────────────────────────────────────────────── */
  const content = {
    es: {
      nav: { home: "Inicio", projects: "Proyectos", about: "Sobre mí", contact: "Contactar" },
      hero: {
        role: "Desarrollador Full Stack",
        description:
          "Especializado en la creación de soluciones tecnológicas innovadoras y experiencias digitales excepcionales. Transformo ideas en aplicaciones web modernas y eficientes.",
        viewProjects: "Ver Proyectos",
        downloadCV: "Descargar CV",
      },
      stats: [
        { icon: "💻", title: "20+ Proyectos", description: "Entregados con éxito" },
        { icon: "✨", title: "4 años", description: "De experiencia" },
        { icon: "🚀", title: "Disponible", description: "Para proyectos" },
      ],
      projects: {
        title: "Proyectos Destacados",
        items: [
          { title: "Sistema de Pasarela de Pago", description: "Plataforma de procesamiento de pagos integrada con múltiples proveedores", tags: ["React", "Node.js", "Stripe"], imageUrl: "./img/pagos.png" },
          { title: "Landing Page Moderna", description: "Página de aterrizaje con diseño moderno y animaciones fluidas", tags: ["React", "Framer"], imageUrl: "./img/webS.png" },
          { title: "App de gestión de Tareas", description: "Aplicación Web para gestión eficiente de tareas y proyectos en equipo.", tags: ["React", "Framer Motion"], imageUrl: "./img/to-do.png" },
        ],
      },
      skills: {
        title: "Habilidades Técnicas",
        items: [
          { name: "React", level: 90 }, { name: "JavaScript", level: 85 },
          { name: "Wordpress", level: 90 }, { name: "Python", level: 70 },
          { name: "Node.js", level: 80 }, { name: "Tailwind CSS", level: 85 },
          { name: "MongoDB", level: 65 }, { name: "Data Analysis", level: 55 },
        ],
      },
      contact: {
        title: "Contacto",
        github: { title: "GitHub", description: "Revisa mis proyectos" },
        linkedin: { title: "LinkedIn", description: "Conecta conmigo" },
        email: { title: "Email", description: "willensonr.g@gmail.com" },
      },
      footer: {
        copyright: `© ${new Date().getFullYear()} Willenson Rafael. Todos los derechos reservados.`,
      },
    },
    en: {
      nav: { home: "Home", projects: "Projects", about: "About me", contact: "Contact" },
      hero: {
        role: "Full Stack Developer",
        description:
          "Specialized in creating innovative technological solutions and exceptional digital experiences. I transform ideas into modern and efficient web applications.",
        viewProjects: "View Projects",
        downloadCV: "Download CV",
      },
      stats: [
        { icon: "💻", title: "20+ Projects", description: "Successfully delivered" },
        { icon: "✨", title: "4 years", description: "Of experience" },
        { icon: "🚀", title: "Available", description: "For projects" },
      ],
      projects: {
        title: "Featured Projects",
        items: [
          { title: "Payment Gateway System", description: "Payment processing platform integrated with multiple providers", tags: ["React", "Node.js", "Stripe"], imageUrl: "./img/pagos.png" },
          { title: "Modern Landing Page", description: "Landing page with modern design and smooth animations", tags: ["React", "Framer"], imageUrl: "./img/webS.png" },
          { title: "Task Management App", description: "Web application for efficient management of tasks and team projects", tags: ["React", "Framer Motion"], imageUrl: "./img/to-do.png" },
        ],
      },
      skills: {
        title: "Technical Skills",
        items: [
          { name: "React", level: 90 }, { name: "JavaScript", level: 85 },
          { name: "Wordpress", level: 90 }, { name: "Python", level: 70 },
          { name: "Node.js", level: 80 }, { name: "Tailwind CSS", level: 85 },
          { name: "MongoDB", level: 65 }, { name: "Data Analysis", level: 55 },
        ],
      },
      contact: {
        title: "Contact",
        github: { title: "GitHub", description: "Check out my projects" },
        linkedin: { title: "LinkedIn", description: "Connect with me" },
        email: { title: "Email", description: "willensonr.g@gmail.com" },
      },
      footer: {
        copyright: `© ${new Date().getFullYear()} Willenson Rafael. All rights reserved.`,
      },
    },
  };

  const t = content[language];

  const menuItems = [
    { label: t.nav.home, href: "#inicio" },
    { label: t.nav.projects, href: "/projects" },
    { label: t.nav.about, href: "/about" },
    {
      label: language === "es" ? "EN" : "ES",
      onClick: (e) => { e.preventDefault(); toggleLanguage(); },
    },
    {
      label: t.nav.contact,
      href: "mailto:Willensonr.g@gmail.com",
    },
  ];

  const toggleMinimize = (id) =>
    setMinimized((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <div
      className="scanlines"
      style={{
        minHeight: "100vh",
        background: "#008080",
        paddingBottom: 40,
        paddingTop: 8,
        paddingLeft: 8,
        paddingRight: 8,
        fontFamily: "Tahoma, 'MS Sans Serif', Arial, sans-serif",
        fontSize: 11,
        position: "relative",
      }}
    >
      {/* ── Desktop Icons (top-left) ── */}
      <div style={{ position: "fixed", top: 8, left: 8, display: "flex", flexDirection: "column", gap: 8, zIndex: 10 }}>
        <DesktopIcon icon="🖥️" label="Portfolio" onClick={() => setMinimized((p) => ({ ...p, portfolio: false }))} />
        <DesktopIcon icon="📁" label="Projects" onClick={() => { window.location.href = "/projects"; }} />
        <DesktopIcon icon="👤" label="About Me" onClick={() => { window.location.href = "/about"; }} />
        <DesktopIcon icon="📧" label="Contact" onClick={() => { window.location.href = "mailto:Willensonr.g@gmail.com"; }} />
        <DesktopIcon icon="📄" label="CV.pdf" onClick={() => { window.location.href = "/CV-Willenson-Guillen-Developer.pdf"; }} />
      </div>

      {/* ── Main Content Area ── */}
      <div style={{ marginLeft: 90, marginRight: 4, paddingBottom: 36 }}>

        {/* ════ HERO WINDOW ════════════════════════════════════════════ */}
        {!minimized.portfolio && (
          <Window
            title="Willenson R. Guillen Inirio — Portfolio"
            icon="🖥️"
            menuItems={menuItems}
            statusText="Bienvenido / Welcome"
            onMinimize={() => toggleMinimize("portfolio")}
            style={{ marginBottom: 12 }}
          >
            <div id="inicio" style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {/* Left: hero text */}
              <div style={{ flex: "1 1 340px" }}>
                <div className="win-groupbox" style={{ marginBottom: 8 }}>
                  <legend>Perfil / Profile</legend>
                  <div style={{ fontFamily: "Tahoma, Arial, sans-serif" }}>
                    <p style={{ fontSize: 18, fontWeight: "bold", margin: "4px 0 2px", color: "#000080" }}>
                      Willenson R. Guillen Inirio
                    </p>
                    <p style={{ fontSize: 13, fontWeight: "bold", color: "#000080", marginBottom: 6 }}>
                      {t.hero.role}
                    </p>
                    <div className="win-sunken" style={{ background: "white", padding: "6px 8px", marginBottom: 8, fontSize: 11 }}>
                      {t.hero.description}
                    </div>
                    <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                      <WinButton primary href="/projects">{t.hero.viewProjects}</WinButton>
                      <WinButton
                        href="/CV-Willenson-Guillen-Developer.pdf"
                        download="/CV-Willenson-Guillen-Developer.pdf"
                      >
                        {t.hero.downloadCV}
                      </WinButton>
                      <WinButton
                        href="https://github.com/WillensonG"
                        onClick={(e) => { e.preventDefault(); window.open("https://github.com/WillensonG", "_blank"); }}
                      >
                        GitHub ↗
                      </WinButton>
                      <WinButton
                        href="https://www.linkedin.com/in/willensón-rafael-guillén-inirio/"
                        onClick={(e) => { e.preventDefault(); window.open("https://www.linkedin.com/in/willensón-rafael-guillén-inirio/", "_blank"); }}
                      >
                        LinkedIn ↗
                      </WinButton>
                    </div>
                  </div>
                </div>

                {/* Tech stack tags */}
                <div className="win-groupbox">
                  <legend>Tech Stack</legend>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                    {["React", "Laravel", "Node.js", "Python", "WordPress", "MongoDB", "Tailwind CSS", "AI"].map((tech) => (
                      <span
                        key={tech}
                        className="win-raised"
                        style={{ padding: "1px 6px", fontSize: 10, background: "#d4d0c8", cursor: "default" }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: stats panel */}
              <div style={{ flex: "0 0 220px" }}>
                <div className="win-window" style={{ height: "100%" }}>
                  <div className="win-titlebar" style={{ fontSize: 10 }}>
                    <span>📊 Statistics</span>
                  </div>
                  <div style={{ padding: 8, background: "#d4d0c8" }}>
                    {t.stats.map((stat, i) => (
                      <div key={i} style={{ marginBottom: 10 }}>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 2 }}>
                          <span style={{ fontWeight: "bold" }}>
                            {stat.icon} {stat.title}
                          </span>
                        </div>
                        <div className="win-sunken" style={{ background: "white", padding: "2px 6px", fontSize: 10 }}>
                          {stat.description}
                        </div>
                      </div>
                    ))}

                    {/* Contact info */}
                    <div
                      className="win-sunken"
                      style={{ background: "white", padding: "4px 6px", fontSize: 10, marginTop: 4 }}
                    >
                      <p style={{ margin: "1px 0" }}>📍 Santo Domingo, RD</p>
                      <p style={{ margin: "1px 0", color: "#000080" }}>
                        <a href="mailto:willensonr.g@gmail.com" style={{ color: "#000080" }}>
                          ✉ willensonr.g@gmail.com
                        </a>
                      </p>
                      <p style={{ margin: "1px 0", color: "#000080" }}>
                        <a href="tel:+18097773462" style={{ color: "#000080" }}>
                          📞 +1 (809) 777-3462
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Window>
        )}

        {/* ════ PROJECTS WINDOW ════════════════════════════════════════ */}
        {!minimized.projects && (
          <Window
            title={t.projects.title}
            icon="📁"
            onMinimize={() => toggleMinimize("projects")}
            style={{ marginBottom: 12 }}
            id="proyectos"
          >
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {t.projects.items.map((project, i) => (
                <div
                  key={i}
                  className="win-window"
                  style={{ flex: "1 1 220px", minWidth: 200 }}
                >
                  <div className="win-titlebar" style={{ fontSize: 10 }}>
                    <span>📄 {project.title}</span>
                  </div>
                  <div style={{ background: "#d4d0c8", padding: 6 }}>
                    {/* Screenshot frame */}
                    <div
                      className="win-sunken"
                      style={{
                        height: 120, overflow: "hidden", marginBottom: 6,
                        background: "#000080", display: "flex", alignItems: "center", justifyContent: "center",
                      }}
                    >
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.parentElement.style.background = "#000080";
                        }}
                      />
                    </div>
                    <div
                      className="win-sunken"
                      style={{ background: "white", padding: "4px 6px", fontSize: 10, marginBottom: 6, minHeight: 40 }}
                    >
                      {project.description}
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 3, marginBottom: 6 }}>
                      {project.tags.map((tag, ti) => (
                        <span
                          key={ti}
                          className="win-raised"
                          style={{ fontSize: 9, padding: "1px 5px", background: "#d4d0c8" }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <WinButton
                      href="https://github.com/WillensonG"
                      onClick={(e) => { e.preventDefault(); window.open("https://github.com/WillensonG", "_blank"); }}
                    >
                      View on GitHub ↗
                    </WinButton>
                  </div>
                </div>
              ))}
            </div>
          </Window>
        )}

        {/* ════ SKILLS WINDOW ══════════════════════════════════════════ */}
        {!minimized.skills && (
          <Window
            title={t.skills.title}
            icon="🛠️"
            onMinimize={() => toggleMinimize("skills")}
            style={{ marginBottom: 12 }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: 6 }}>
              {t.skills.items.map((skill, i) => (
                <div key={i} style={{ padding: "4px 0" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 2 }}>
                    <span style={{ fontSize: 11 }}>{skill.name}</span>
                    <span style={{ fontSize: 10, color: "#000080", fontWeight: "bold" }}>{skill.level}%</span>
                  </div>
                  <ProgressBar value={skill.level} color={`repeating-linear-gradient(to right,${SKILL_COLORS[i % SKILL_COLORS.length]} 0px,${SKILL_COLORS[i % SKILL_COLORS.length]} 8px,${SKILL_COLORS[(i + 1) % SKILL_COLORS.length]} 8px,${SKILL_COLORS[(i + 1) % SKILL_COLORS.length]} 16px)`} />
                </div>
              ))}
            </div>
          </Window>
        )}

        {/* ════ CONTACT WINDOW ═════════════════════════════════════════ */}
        {!minimized.contact && (
          <Window
            title={t.contact.title}
            icon="📧"
            onMinimize={() => toggleMinimize("contact")}
            style={{ marginBottom: 12 }}
            id="contacto"
          >
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {[
                {
                  icon: "🐙",
                  ...t.contact.github,
                  href: "https://github.com/WillensonG",
                },
                {
                  icon: "💼",
                  ...t.contact.linkedin,
                  href: "https://www.linkedin.com/in/willensón-rafael-guillén-inirio/",
                },
                {
                  icon: "✉️",
                  ...t.contact.email,
                  href: "mailto:willensonr.g@gmail.com",
                },
              ].map((c, i) => (
                <a
                  key={i}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="win-raised"
                  style={{
                    flex: "1 1 180px",
                    padding: 10,
                    background: "#d4d0c8",
                    textDecoration: "none",
                    color: "#000",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "#000080"; e.currentTarget.style.color = "#fff"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "#d4d0c8"; e.currentTarget.style.color = "#000"; }}
                >
                  <span style={{ fontSize: 24 }}>{c.icon}</span>
                  <div>
                    <div style={{ fontWeight: "bold", fontSize: 11 }}>{c.title}</div>
                    <div style={{ fontSize: 10 }}>{c.description}</div>
                  </div>
                </a>
              ))}
            </div>
          </Window>
        )}

        {/* ════ FOOTER / ABOUT WINDOW ══════════════════════════════════ */}
        <Window
          title="About — Willenson Rafael"
          icon="ℹ️"
          style={{ marginBottom: 12 }}
        >
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center" }}>
            <div className="win-sunken" style={{ flex: "1 1 300px", background: "white", padding: "6px 10px", fontSize: 10 }}>
              <span style={{ fontWeight: "bold", color: "#000080" }}>Willenson Rafael</span>
              {" — "}
              {language === "es"
                ? "Desarrollador web apasionado por crear experiencias digitales extraordinarias."
                : "Web developer passionate about creating extraordinary digital experiences."}
            </div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              <WinButton href="#inicio">{t.nav.home}</WinButton>
              <WinButton href="/projects">{t.nav.projects}</WinButton>
              <WinButton href="/about">{t.nav.about}</WinButton>
              <WinButton onClick={toggleLanguage}>
                🌐 {language === "es" ? "English" : "Español"}
              </WinButton>
            </div>
          </div>
          <div
            className="win-sunken"
            style={{ background: "white", padding: "3px 8px", marginTop: 6, fontSize: 9, color: "#808080" }}
          >
            {t.footer.copyright} &nbsp;|&nbsp;
            <a href="#" style={{ color: "#000080" }}>Privacy Policy</a>
            &nbsp;|&nbsp;
            <a href="#" style={{ color: "#000080" }}>Terms of Use</a>
          </div>
        </Window>
      </div>

      {/* ════ TASKBAR ════════════════════════════════════════════════ */}
      <div className="win-taskbar">
        {/* Start Button */}
        <button
          className="win-start-btn"
          onClick={() => setDialog({ title: "Start Menu", message: language === "es" ? "¡Hola! Soy Willenson, desarrollador Full Stack. ¿En qué puedo ayudarte?" : "Hello! I'm Willenson, Full Stack Developer. How can I help you?" })}
        >
          <span style={{ fontSize: 14 }}>🪟</span>
          <span>Start</span>
        </button>

        {/* Divider */}
        <div className="win-raised" style={{ width: 2, height: 20, padding: 0 }} />

        {/* Window pills */}
        {[
          { id: "portfolio", label: "🖥️ Portfolio" },
          { id: "projects", label: "📁 " + t.projects.title },
          { id: "skills", label: "🛠️ " + t.skills.title },
          { id: "contact", label: "📧 " + t.contact.title },
        ].map(({ id, label }) => (
          <button
            key={id}
            className={minimized[id] ? "win-btn" : "win-sunken"}
            style={{
              fontSize: 10, height: 22, padding: "0 8px",
              background: minimized[id] ? "#d4d0c8" : "#c0bdb4",
              maxWidth: 160, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
            }}
            onClick={() => toggleMinimize(id)}
          >
            {label}
          </button>
        ))}

        <TaskbarClock />
      </div>

      {/* ── Dialog ── */}
      {dialog && (
        <DialogBox
          title={dialog.title}
          message={dialog.message}
          onOk={() => setDialog(null)}
          onCancel={() => setDialog(null)}
        />
      )}
    </div>
  );
};

export default ModernPortfolio;
