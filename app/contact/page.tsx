import ContactTop from './contact-top'
import ContactBottom from './contact-bottom'
import AnimatedSection from '../components/AnimatedSection'

export default function Contact() {
    return (
        <div className="min-h-screen bg-black text-white">
            < div className="border-[#1f1f1f]" >
                <div id="about" className="w-9/10 md:max-w-2xl lg:max-w-7xl mx-auto py-20 flex flex-col">

                    <AnimatedSection>

                        {/* Contact Top */}
                        <ContactTop />

                        {/* Contact Bottom */}
                        <ContactBottom />

                    </AnimatedSection>
                </div>
            </div>
        </div>
    )
}
