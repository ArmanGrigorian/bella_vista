import Heading from "@/components/shared/Heading";
import Paragraph from "@/components/shared/Paragraph";

export default function Header() {
  return (
    <header className="max-w-2k bg-home mx-auto flex min-h-dvh flex-col items-center justify-center bg-cover bg-center bg-no-repeat p-6">
      <hgroup className="rounded-xl border-3 border-primary p-5 text-center shadow-xl backdrop-blur-[2px] lg:p-7">
        <Heading tag="h1" className="text-shadow-lg font-secondary">
          Welcome to Bella Vista
        </Heading>
        <Paragraph className="text-shadow-lg">
          Authentic Italian Cuisine int the Heart of the City
        </Paragraph>
      </hgroup>
    </header>
  );
}
