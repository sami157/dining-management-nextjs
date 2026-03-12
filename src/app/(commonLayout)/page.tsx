import getAllUsers from "@/components/custom/_actions";
import MealSheet from "@/components/custom/MealSheet";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";

export default async function Home() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['users'],
    queryFn: getAllUsers,
  })
  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <MealSheet />
      </HydrationBoundary>
    </>
  );
}
