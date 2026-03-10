import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex flex-col items-center">
        NextJS App Cooking
        <Button variant='default'
        className="w-fit"
        >
          Button
        </Button>
      </div>
    </div>
  );
}
