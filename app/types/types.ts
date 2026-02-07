export interface VisualSlide {
  id: number;
  image: string;
}

export interface CarouselProps {
  slides: VisualSlide[];
}