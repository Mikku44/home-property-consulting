import { useNavigation } from "react-router";

export default function Loading() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  // Return null if not loading to avoid blocking the UI
  if (!isLoading) return null;

  return (
     <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-background/80 backdrop-blur-xl">
      <div className="loader">
        <div className="square" id="sq1" />
        <div className="square" id="sq2" />
        <div className="square" id="sq3" />
        <div className="square" id="sq4" />
        <div className="square" id="sq5" />
        <div className="square" id="sq6" />
        <div className="square" id="sq7" />
        <div className="square" id="sq8" />
        <div className="square" id="sq9" />
      </div>
    </div>
  );
}