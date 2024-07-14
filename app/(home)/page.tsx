
import { VortexDemo } from "./components/VortexDemo";
import TextGenerateEffectDemo from './components/TextGenerateEffectDemo';
import StickyScrollRevealDemo from './components/StickyScrollRevealDemo'
import { ParallaxScrollDemo } from "./components/ParallaxScrollSecondDemo";
import { BackgroundBeamsDemo } from "./components/BackgroundBeamsDemo";
import { CanvasRevealEffectDemo } from "./components/CanvasRevealEffectDemo";
import  {InfiniteMovingCardsDemo} from "./components/InfiniteMovingCardsDemo";
import { LayoutGridDemo } from "./components/LayoutGridDemo";
import { WavyBackgroundDemo } from "./components/WavyBackgroundDemo";
import { SparklesPreview } from "./components/SparklesPreview";


export default function Home() {
  return (
    
      <>
      <VortexDemo />
      <TextGenerateEffectDemo />
      <StickyScrollRevealDemo />
      <ParallaxScrollDemo/>
      <LayoutGridDemo/>
      {/* <CanvasRevealEffectDemo/> */}
      <InfiniteMovingCardsDemo />
      <BackgroundBeamsDemo />
      <SparklesPreview />
      <WavyBackgroundDemo/>
     
      </>
  );
}
