
import { useEffect, useRef } from "react";
import Button from "./Button";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

const Hero = ({ title, subtitle, ctaText, onCtaClick }: HeroProps) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      titleRef.current?.classList.add("animate-fade-in");
      titleRef.current?.style.setProperty("opacity", "1");
    }, 100);

    const timeout2 = setTimeout(() => {
      subtitleRef.current?.classList.add("animate-fade-in");
      subtitleRef.current?.style.setProperty("opacity", "1");
    }, 300);

    const timeout3 = setTimeout(() => {
      ctaRef.current?.classList.add("animate-fade-in");
      ctaRef.current?.style.setProperty("opacity", "1");
    }, 500);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center text-center px-4 py-20 md:py-32 bg-gradient-to-br from-[#33C3F0] to-[#0FA0CE] text-white">
      <h1 
        ref={titleRef} 
        className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl mb-6 opacity-0 balance-text"
      >
        {title}
      </h1>
      <p 
        ref={subtitleRef}
        className="text-lg md:text-xl text-white/90 max-w-xl mb-10 opacity-0 balance-text"
      >
        {subtitle}
      </p>
      {ctaText && (
        <div ref={ctaRef} className="opacity-0">
          <Button 
            variant="secondary" 
            size="lg" 
            onClick={onCtaClick}
            className="px-8 font-bold rounded-full hover:scale-105"
          >
            {ctaText}
          </Button>
        </div>
      )}
    </div>
  );
};

export default Hero;
