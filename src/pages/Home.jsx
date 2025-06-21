import { AboutSection } from "../Components/AboutSection"
import { ContactSection } from "../Components/ContactSection"
import { Footer } from "../Components/Footer"
import { HeroSection } from "../Components/HeroSection"
import { Navbar } from "../Components/Navbar"
import { Projects } from "../Components/Projects"
import { SkillsSection } from "../Components/SkillsSection"
import { StarBackground } from "../Components/StarBackground"
import { ThemeToggle } from "../Components/ThemeToggle"

export const Home = () => {
    return( 
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/*Theme*/}
            <ThemeToggle />
            {/*Toggle and Back*/}
            <StarBackground />
            {/*Navbar*/}
            <Navbar />
            {/*Main Content*/}
            <main>
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                {/* <Projects /> */}
                <ContactSection />
            </main>
            {/*footer*/}
            <Footer />
        </div>
    )
}