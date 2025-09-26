import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

type LogoProps = {
  href?: string;
  size?: number;
  withText?: boolean;
  className?: string;
};

export function Logo({ href = "/", size = 36, withText = true, className }: LogoProps) {
  const image = (
    <div className={`flex items-center gap-2 ${className || ""}`}>
      <Image src={siteConfig.logo} alt="SkyPrep logo" width={size} height={size} priority />
      {withText && <span className="font-semibold text-[--color-foreground]">SkyPrep</span>}
    </div>
  );

  if (!href) return image;
  return (
    <Link href={href} aria-label="SkyPrep home">
      {image}
    </Link>
  );
}


