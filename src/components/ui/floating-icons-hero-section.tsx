"use client";

import * as React from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface IconProps {
  id: number;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  img?: string;
  label?: string;
  className: string;
}

export interface FloatingIconsHeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
  secondaryText?: string;
  secondaryHref?: string;
  icons: IconProps[];
}

const Icon = ({
  mouseX,
  mouseY,
  iconData,
  index,
}: {
  mouseX: React.MutableRefObject<number>;
  mouseY: React.MutableRefObject<number>;
  iconData: IconProps;
  index: number;
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  React.useEffect(() => {
    const handleMouseMove = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const distance = Math.sqrt(
          Math.pow(mouseX.current - (rect.left + rect.width / 2), 2) +
            Math.pow(mouseY.current - (rect.top + rect.height / 2), 2)
        );
        if (distance < 150) {
          const angle = Math.atan2(
            mouseY.current - (rect.top + rect.height / 2),
            mouseX.current - (rect.left + rect.width / 2)
          );
          const force = (1 - distance / 150) * 50;
          x.set(-Math.cos(angle) * force);
          y.set(-Math.sin(angle) * force);
        } else {
          x.set(0);
          y.set(0);
        }
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y, mouseX, mouseY]);

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn('absolute', iconData.className)}
    >
      <motion.div
        className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 p-3 rounded-3xl shadow-lg bg-white/80 backdrop-blur-md border border-gray-100"
        animate={{
          y: [0, -8, 0, 8, 0],
          x: [0, 6, 0, -6, 0],
          rotate: [0, 5, 0, -5, 0],
        }}
        transition={{
          duration: 5 + (index % 5),
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut',
        }}
      >
        {iconData.img ? (
          <img src={iconData.img} alt={iconData.label || ''} className="w-8 h-8 md:w-10 md:h-10 object-contain" draggable={false} />
        ) : (
          <iconData.icon className="w-8 h-8 md:w-10 md:h-10" />
        )}
      </motion.div>
    </motion.div>
  );
};

const FloatingIconsHero = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & FloatingIconsHeroProps
>(({ className, title, subtitle, ctaText, ctaHref, secondaryText, secondaryHref, icons, ...props }, ref) => {
  const mouseX = React.useRef(0);
  const mouseY = React.useRef(0);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    mouseX.current = event.clientX;
    mouseY.current = event.clientY;
  };

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      className={cn(
        'relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[var(--brand-cream)]',
        className
      )}
      {...props}
    >
      {/* Nav */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-10 py-7 z-20">
        <div className="text-xl font-black tracking-tight text-[var(--brand-graphite)]">
          1stbaseai<span className="text-[var(--brand-blue)]">.com</span>
        </div>
        <a
          href="#quiz"
          className="rounded-full bg-[var(--brand-graphite)] px-5 py-2.5 text-sm font-bold text-[var(--brand-cream)] transition-colors hover:bg-[var(--brand-graphite-2)]"
        >
          Book a session
        </a>
      </div>

      {/* Floating icons */}
      <div className="absolute inset-0 w-full h-full">
        {icons.map((iconData, index) => (
          <Icon key={iconData.id} mouseX={mouseX} mouseY={mouseY} iconData={iconData} index={index} />
        ))}
      </div>

      {/* Center content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-6 inline-block text-xs font-semibold uppercase tracking-widest text-[var(--brand-blue)]">
            Vancouver, WA · AI Education & Coaching
          </span>
          <h1 className="mb-6 text-5xl font-black leading-[0.9] tracking-tight text-[var(--brand-graphite)] md:text-7xl">
            {title}
          </h1>
          <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-[color:var(--brand-muted)]">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="rounded-full border-0 bg-[var(--brand-blue)] px-8 py-6 text-base font-bold text-[var(--brand-graphite)] hover:bg-[var(--brand-blue-deep)] hover:text-[var(--brand-cream)]">
              <a href={ctaHref}>{ctaText}</a>
            </Button>
            {secondaryText && secondaryHref && (
              <a href={secondaryHref} className="text-sm font-medium text-[color:var(--brand-muted)] transition-colors hover:text-[var(--brand-graphite)]">
                {secondaryText}
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
});

FloatingIconsHero.displayName = 'FloatingIconsHero';
export { FloatingIconsHero };
