'use client'

import { Facebook, Linkedin, Twitter } from 'lucide-react'
import { SocialIcon } from './social-icons'

export function SocialLinks() {
    return (
        <div className="flex gap-4">
            <SocialIcon
                href="https://www.facebook.com/joshcheetham"
                icon={Facebook}
                bgColor="bg-[#1877F2]"
                delay={0.2}
            />
            <SocialIcon
                href="https://www.linkedin.com/in/joshcheetham"
                icon={Linkedin}
                bgColor="bg-[#0A66C2]"
                delay={0.3}
            />
            <SocialIcon
                href="https://www.twitter.com/joshcheetham"
                icon={Twitter}
                bgColor="bg-[#1DA1F2]"
                delay={0.4}
            />
        </div>
    )
}