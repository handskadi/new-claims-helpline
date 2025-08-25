"use client";

export default function AnimatedArrow() {
  return (
    <div className="arrow">
      <span></span>
      <span></span>
      <span></span>
      <style jsx>{`
        .arrow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(-90deg);
          cursor: pointer;
        }

        .arrow span {
          display: block;
          width: 10px;
          height: 10px;
          border-bottom: 3px solid #33E5F5;
          border-right: 3px solid #33E5F5;
          transform: rotate(45deg);
          margin: -6px;
          animation: animate 2s infinite;
        }

        .arrow span:nth-child(2) {
          animation-delay: -0.2s;
        }

        .arrow span:nth-child(3) {
          animation-delay: -0.4s;
        }

        @keyframes animate {
          0% {
            opacity: 0;
            transform: rotate(45deg) translate(-10px, -10px);
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: rotate(45deg) translate(10px, 10px);
          }
        }
      `}</style>
    </div>
  );
}
