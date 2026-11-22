import Hero from "@/components/home/Hero";
import BookingBar from "@/components/home/BookingBar";
import RoomsSection from "@/components/home/RoomsSection";
import StorySection from "@/components/home/StorySection";
import FacilitiesSection from "@/components/home/FacilitiesSection";
import ReviewsSection from "@/components/home/ReviewsSection";
import GalleryPreview from "@/components/home/GalleryPreview";
import ContactCta from "@/components/home/ContactCta";

export default function HomePage() {
  return <main><Hero/><BookingBar/><RoomsSection/><StorySection/><FacilitiesSection/><ReviewsSection/><GalleryPreview/><ContactCta/></main>;
}
