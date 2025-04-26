"use client";

import { useRef, useEffect } from "react";
import "../styles/InteractiveAvatar.css";

const InteractiveAvatar = () => {
  const avatarRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!avatarRef.current) return;

      const avatar = avatarRef.current.getBoundingClientRect();
      const avatarCenterX = avatar.left + avatar.width / 2;
      const avatarCenterY = avatar.top + avatar.height / 2;

      // Angle between mouse and center
      const angle = Math.atan2(e.clientY - avatarCenterY, e.clientX - avatarCenterX);

      const maxMovement = 10; // maximum movement in pixels

      const moveX = Math.cos(angle) * maxMovement;
      const moveY = Math.sin(angle) * maxMovement;

      // Move the whole avatar based on mouse position
      avatarRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="avatar-container">
      <div className="avatar-head">
        {/* Avatar Image */}
        <img
          src="/assets/images/avatar.png"
          alt="Avatar"
          className="avatar-img"
          ref={avatarRef}
        />
      </div>
    </div>
  );
};

export default InteractiveAvatar;
