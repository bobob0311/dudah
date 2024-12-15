import styled from "./BackGround.module.css";

export default function BackGround() {
  return (
    <div className={styled.page}>
      <div className={styled.top}></div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="420"
        height="519"
        viewBox="0 0 393 519"
        fill="none"
      >
        <g filter="url(#filter0_f_175_314)">
          <ellipse
            cx="195"
            cy="259.5"
            rx="79.5"
            ry="88"
            transform="rotate(-90 195 259.5)"
            fill="url(#paint0_linear_175_314)"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_175_314"
            x="-73"
            y="0"
            width="536"
            height="519"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="90"
              result="effect1_foregroundBlur_175_314"
            />
          </filter>
          <linearGradient
            id="paint0_linear_175_314"
            x1="246.429"
            y1="197.829"
            x2="147.82"
            y2="319.796"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.215" stop-color="#B2EDFF" />
            <stop offset="0.6075" stop-color="#85B1FD" />
            <stop offset="1" stop-color="#5975FA" />
          </linearGradient>
        </defs>
      </svg>
      <div className={styled.bottom}></div>
    </div>
  );
}
