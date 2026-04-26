// ScrollToTop.jsx
import React, { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.pageYOffset > 150); // يظهر بعد 300px
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null; // ما نعرض الزر إلا عند الحاجة

  return (
    <button
      onClick={handleClick}
      aria-label="Scroll to top"
      title="العودة للأعلى"
      style={{
        position: "fixed",
        right: 20,
        bottom: 24,
        width: 48,
        height: 48,
        display: "grid",
        placeItems: "center",
        borderRadius: "50%",
        border: "none",
        boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
        cursor: "pointer",
        background: "linear-gradient(180deg,#06b6d4,#0891b2)",
        color: "#fff",
        fontSize: 18,
      }}
    >
      {/* أيقونة بسيطة */}
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 4v16" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 10l6-6 6 6" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
}
