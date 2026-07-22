import { icons, type LucideProps } from "lucide-react";

type IconProps = LucideProps & {
  name: string;
};

export default function Icon({ name, ...props }: IconProps) {
  const LucideIcon = icons[name as keyof typeof icons];
  if (!LucideIcon) return null;
  return <LucideIcon {...props} />;
}
