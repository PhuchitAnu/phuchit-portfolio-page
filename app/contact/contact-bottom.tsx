"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { FaArrowRight, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import { Toaster, toast } from "sonner";

export default function ContactBottom() {

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

    const formValues = useRef<HTMLFormElement>(null)

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formValues.current) {
            console.error("Form element is missing")
            return
        }

        if (!serviceID || !templateID || !publicKey) {
            console.error("EmailJS env variables are missing")
            return
        }

        emailjs.sendForm(serviceID, templateID, formValues.current, publicKey).then(
            () => {
                toast.success("Email sent successfully", {
                    duration: 5000,
                })
                formValues.current?.reset()
            },
            (error) => {
                toast.error("Failed to send email, please try again", {
                    duration: 5000,
                })
                console.log(error)
            }
        )
    }

    return (
        <div className="pt-10">
            <div>
                <Toaster />
            </div>
            {/* Contact Bottom */}
            <div className='flex flex-col items-center gap-6 w-full'>
                <div className='w-full'>
                    <form ref={formValues} onSubmit={sendEmail}>
                        <Card className="w-full border-[#1f1f1f] bg-[#0A0A0A]">
                            <CardContent>
                                <FieldGroup>
                                    <FieldSet>
                                        <FieldGroup>
                                            {/* NAME + EMAIL */}
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <Field>
                                                    <FieldLabel className="text-white text-xs">
                                                        YOUR NAME
                                                    </FieldLabel>
                                                    <Input
                                                        name="name"
                                                        placeholder="John Doe"
                                                        required
                                                        className="bg-[#1f1f1f] border-[#555555] py-5 text-white"
                                                    />
                                                </Field>

                                                <Field>
                                                    <FieldLabel className="text-white text-xs">
                                                        YOUR EMAIL
                                                    </FieldLabel>
                                                    <Input
                                                        type="email"
                                                        name="email"
                                                        placeholder="m@example.com"
                                                        required
                                                        className="bg-[#1f1f1f] border-[#555555] py-5 text-white"
                                                    />
                                                </Field>
                                            </div>

                                            {/* SUBJECT */}
                                            <Field>
                                                <FieldLabel className="text-white text-xs">
                                                    SUBJECT
                                                </FieldLabel>
                                                <Select name="subject" defaultValue="">
                                                    <SelectTrigger
                                                        className="bg-[#1f1f1f] border-[#555555] py-5 text-white"
                                                    >
                                                        <SelectValue placeholder="Project Inquiry" />
                                                    </SelectTrigger>
                                                    <SelectContent className="bg-[#1f1f1f] border-[#555555]">
                                                        <SelectItem
                                                            value="project-inquiry"
                                                            className="text-white data-highlighted:text-white data-highlighted:bg-[#2a2a2a] data-[state=checked]:bg-[#333333]"
                                                        >
                                                            Project Inquiry
                                                        </SelectItem>
                                                        <SelectItem
                                                            value="freelance-opportunity"
                                                            className="text-white data-highlighted:text-white data-highlighted:bg-[#2a2a2a] data-[state=checked]:bg-[#333333]"
                                                        >
                                                            Freelance Opportunity
                                                        </SelectItem>
                                                        <SelectItem
                                                            value="job-offer"
                                                            className="text-white data-highlighted:text-white data-highlighted:bg-[#2a2a2a] data-[state=checked]:bg-[#333333]"
                                                        >
                                                            Job Offer
                                                        </SelectItem>
                                                        <SelectItem
                                                            value="other"
                                                            className="text-white data-highlighted:text-white data-highlighted:bg-[#2a2a2a] data-[state=checked]:bg-[#333333]"
                                                        >
                                                            Other
                                                        </SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </Field>

                                            {/* MESSAGE */}
                                            <Field>
                                                <FieldLabel className="text-white text-xs">
                                                    YOUR MESSAGE
                                                </FieldLabel>
                                                <Textarea
                                                    name="message"
                                                    placeholder="Type your message here"
                                                    className="min-h-[150px] resize-none bg-[#1f1f1f] border-[#555555] text-white"
                                                />
                                            </Field>
                                        </FieldGroup>
                                    </FieldSet>
                                </FieldGroup>
                            </CardContent>
                            <CardFooter>
                                <Button
                                    type="submit"
                                    className="group w-full flex gap-3 bg-white text-black hover:bg-[#dadada]"
                                >
                                    <span>Send Message</span>
                                    <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                                </Button>
                            </CardFooter>
                        </Card>
                    </form>

                </div>
                <div className='flex gap-4 md:gap-6'>
                    <div>
                        <Link target="_blank" href="https://github.com/PhuchitAnu/">
                            <Card className='w-26 h-26 md:w-52 md:h-52 lg:w-32 lg:h-32 border-[#1f1f1f] bg-[#0A0A0A] hover:bg-[#1f1f1f] transition-all duration-300 flex items-center justify-center'>
                                <CardContent className='group flex flex-col gap-4 items-center text-white'>
                                    <FaGithub className="text-3xl group-hover:scale-110 transition-all duration-300" />
                                    <h1 className='text-xs'>GitHub</h1>
                                </CardContent>
                            </Card>
                        </Link>
                    </div>
                    <div>
                        <Link target="_blank" href="https://linkedin.com/in/phuchit-anu/">
                            <Card className='w-26 h-26 md:w-52 md:h-52 lg:w-32 lg:h-32 border-[#1f1f1f] bg-[#0A0A0A] hover:bg-[#1f1f1f] transition-all duration-300 flex items-center justify-center'>
                                <CardContent className='group flex flex-col gap-4 items-center text-white'>
                                    <FaLinkedin className="text-3xl group-hover:scale-110 transition-all duration-300" />
                                    <h1 className='text-xs'>Linkedin</h1>
                                </CardContent>
                            </Card>
                        </Link>
                    </div>
                    <div>
                        <Link target="_blank" href="https://www.instagram.com/nutt__tt/">
                            <Card className='w-26 h-26 md:w-52 md:h-52 lg:w-32 lg:h-32 border-[#1f1f1f] bg-[#0A0A0A] hover:bg-[#1f1f1f] transition-all duration-300 flex items-center justify-center'>
                                <CardContent className='group flex flex-col gap-4 items-center text-white'>
                                    <FaInstagram className="text-3xl group-hover:scale-110 transition-all duration-300" />
                                    <h1 className='text-xs'>Instagram</h1>
                                </CardContent>
                            </Card>
                        </Link>
                    </div>

                </div>
            </div>
        </div >
    )
}
