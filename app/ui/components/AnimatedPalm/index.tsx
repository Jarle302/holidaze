"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const AnimatedPalm = ({ className }: { className: string }) => {
  const path1 = useRef<SVGPathElement>(null);
  const path2 = useRef<SVGPathElement>(null);
  const path3 = useRef<SVGPathElement>(null);
  const path4 = useRef<SVGPathElement>(null);
  const container = useRef(null);
  const tl = useRef<gsap.core.Timeline>();
  useGSAP(() => {
    // gsap code here...
    tl.current = gsap
      .timeline({
        scrollTrigger: {
          trigger: container.current,
          scrub: true,
          start: "top center",
          end: "+=150",
          toggleActions: "restart pause reverse reset",
        },
      })
      .set(path1.current, {
        strokeDasharray: path1.current?.getTotalLength(),
        strokeDashoffset: path1.current?.getTotalLength(),
      })
      .set(path2.current, {
        strokeDasharray: path2.current?.getTotalLength(),
        strokeDashoffset: path2.current?.getTotalLength(),
      })
      .set(path3.current, {
        strokeDasharray: path3.current?.getTotalLength(),
        strokeDashoffset: path3.current?.getTotalLength(),
      })
      .set(path4.current, {
        strokeDasharray: path4.current?.getTotalLength(),
        strokeDashoffset: path4.current?.getTotalLength(),
      })
      .to(path1.current, {
        strokeDashoffset: 0,
        duration: 1,
        stroke: "#D99E82",
      })
      .to(path2.current, {
        strokeDashoffset: 0,
        duration: 1,
        stroke: "#3E721D",
      })
      .to(path3.current, {
        strokeDashoffset: 0,
        duration: 1,
        stroke: "#5C913B",
      })
      .to(path4.current, {
        strokeDashoffset: 0,
        duration: 1,
        stroke: "#C1694F",
      })
      .to(path1.current, { fill: "#D99E82", duration: 2 }, "<")
      .to(path2.current, { fill: "#3E721D", duration: 2 }, "<")
      .to(path3.current, { fill: "#5C913B", duration: 2 }, "<")
      .to(path4.current, { fill: "#C1694F", duration: 2 }, "<");
  }); // <-- automatically reverted

  return (
    <svg
      className={className}
      ref={container}
      width="172"
      height="172"
      viewBox="0 0 172 172"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        ref={path4}
        className="svg"
        d="M105.007 97.5819C104.761 93.8649 104.368 90.1592 103.827 86.4735C102.127 75.1233 99.1043 64.011 94.8205 53.3635C92.3027 47.1572 90.3151 43.6025 90.3151 43.6025L73.053 45.829C73.053 45.829 75.0453 49.9856 77.2001 58.1318C78.0744 61.438 78.9726 65.4131 79.7801 70.0523C80.191 72.3934 80.5732 74.8874 80.9172 77.5678C81.395 81.2992 81.7915 85.3651 82.0734 89.7463C82.2359 92.2212 82.3505 94.8012 82.427 97.4815C82.4557 98.4562 82.4986 99.3974 82.513 100.401C82.5429 103.578 82.3545 106.753 81.9492 109.904C81.5956 112.77 81.0796 115.623 80.4633 118.451C79.5897 122.443 78.5214 126.389 77.2622 130.276C76.3015 133.235 75.258 136.167 74.1328 139.067C72.4892 143.324 70.8361 147.151 69.4075 150.338C67.0091 155.684 65.2461 159.239 65.2461 159.98C65.2461 162.321 66.9183 166.707 78.6095 169.631C96.8941 174.198 98.6571 166.664 98.6571 166.664C98.6571 166.664 99.8181 163.138 101.17 156.191C101.839 152.76 102.551 148.523 103.196 143.396C103.583 140.329 103.941 136.956 104.257 133.286C104.912 125.557 105.263 117.804 105.308 110.047C105.317 108.872 105.346 107.735 105.346 106.526C105.346 103.468 105.203 100.501 105.007 97.5819Z"
        fill="none"
        strokeWidth={1}
      />
      <path
        ref={path1}
        className="svg"
        d="M87.4626 143.659C80.7593 142.493 76.4832 140.539 74.1373 139.077C72.4938 143.334 70.8407 147.161 69.4121 150.347C73.7886 152.731 79.3451 154.624 85.3747 155.67C88.8577 156.277 92.312 156.582 95.5561 156.582C97.5341 156.582 99.3927 156.425 101.175 156.2C101.844 152.77 102.556 148.532 103.201 143.405C101.079 144.155 95.8046 145.111 87.4626 143.659ZM92.527 121.332C87.3049 120.816 83.2868 119.669 80.4631 118.456C79.5895 122.447 78.5212 126.394 77.262 130.281C81.39 131.838 86.249 132.961 91.3326 133.463C93.3822 133.663 95.4176 133.768 97.4003 133.768C99.7988 133.768 102.073 133.582 104.256 133.296C104.581 129.473 104.854 125.331 105.045 120.849C102.044 121.494 97.8351 121.853 92.527 121.332ZM94.0033 111.141C97.9307 111.141 101.791 110.744 105.308 110.052C105.317 108.876 105.346 107.739 105.346 106.53C105.346 103.468 105.207 100.501 105.007 97.5816C102.479 98.2409 98.8671 98.8812 93.7692 98.9481C88.5901 98.9242 84.9447 98.2075 82.4268 97.4861C82.4554 98.4607 82.4984 99.4019 82.5128 100.405C82.5427 103.582 82.3543 106.757 81.949 109.908C85.5944 110.678 89.6173 111.117 93.7071 111.136L94.0033 111.141ZM92.8137 89.2731C96.566 88.7056 100.253 87.7694 103.822 86.4781C103.218 82.4451 102.445 78.4393 101.504 74.4715C99.1347 75.4462 95.7759 76.5307 91.0841 77.2044C87.7199 77.728 84.3055 77.8514 80.9122 77.5723C81.39 81.3037 81.7866 85.3696 82.0684 89.7508C82.7947 89.7795 83.454 89.8894 84.1993 89.8894C87.0087 89.8942 89.9327 89.6839 92.8137 89.2731ZM98.8862 64.83C97.691 60.9522 96.3329 57.1266 94.8155 53.3633C92.1593 54.6828 89.3796 55.7374 86.5166 56.5118C83.4765 57.3844 80.3513 57.9275 77.1951 58.1315C78.0694 61.4377 78.9677 65.4128 79.7751 70.0521C83.1552 69.7405 86.5024 69.1395 89.7798 68.2556C93.0239 67.3574 96.0387 66.1534 98.8862 64.83Z"
        fill="none"
        strokeWidth={1}
      />
      <path
        ref={path2}
        className="svg"
        d="M155.804 20.5687C155.594 20.2773 134.399 -8.0693 106.908 4.37203C94.5766 9.9477 86.6168 19.0589 83.731 30.817C78.356 23.3255 70.186 18.562 59.3978 16.6366C29.7804 11.3524 11.9784 44.1948 11.8016 44.5293C11.5436 45.0166 11.6535 45.6234 12.0691 45.9865C12.4848 46.3496 13.1059 46.3735 13.555 46.0581C13.6888 45.9626 27.1526 36.536 49.5938 40.5303C72.5319 44.6105 88.6139 48.6238 88.7764 48.662C88.9849 48.7126 89.2031 48.7069 89.4087 48.6456C89.6143 48.5844 89.8001 48.4697 89.9469 48.3133C90.0998 48.146 105.331 31.7821 119.345 25.442C140.075 16.0728 154.213 22.2935 154.347 22.3556C154.588 22.4639 154.858 22.4898 155.115 22.4293C155.372 22.3689 155.603 22.2254 155.77 22.0211C155.938 21.8178 156.032 21.5641 156.038 21.3007C156.044 21.0373 155.962 20.7795 155.804 20.5687Z"
        fill="none"
        strokeWidth={1}
      />
      <path
        ref={path3}
        className="svg"
        d="M133.224 36.4551C112.178 25.3324 95.7237 30.7552 85.4706 37.5062C73.1678 35.1794 50.4304 35.3132 31.1759 59.9952C7.36824 90.5109 28.2232 128.518 28.4382 128.9C28.614 129.209 28.8772 129.458 29.1945 129.617C29.5118 129.776 29.8691 129.837 30.2212 129.793C30.5734 129.749 30.9046 129.602 31.1731 129.37C31.4417 129.138 31.6355 128.831 31.7301 128.489C31.8018 128.231 39.0258 102.116 57.2912 80.1479C67.2004 68.2225 79.0301 57.1859 87.4295 49.8568C95.8479 51.2805 108.103 54.3813 120.138 61.1036C143.826 74.3524 154.701 96.7745 154.81 96.9991C154.968 97.3363 155.228 97.6155 155.553 97.7972C155.878 97.9789 156.251 98.0541 156.621 98.012C156.99 97.971 157.337 97.8173 157.614 97.5719C157.892 97.3265 158.088 97.0013 158.174 96.6408C158.27 96.2203 167.577 54.5963 133.224 36.4551Z"
        fill="none"
        strokeWidth={1}
      />
    </svg>
  );
};