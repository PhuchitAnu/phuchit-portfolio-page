export default function ContactTop() {
    return (
        <div>
            {/* Contact Top */}
            <div className="flex flex-col gap-5 px-20 w-7/10">
                <div className='flex items-center gap-2 bg-[#1f1f1f] px-4 py-1 rounded-full self-start'>
                    <span className='w-2 h-2 bg-green-500 rounded-full inline-flex'>
                    </span>
                    <h1 className='text-sm'>OPEN TO WORK</h1>
                </div>
                <div className='flex flex-col gap-8'>
                    <h1 className='text-6xl font-bold'>Let&apos;s build something <span className='text-transparent bg-clip-text bg-linear-to-r from-gray-400 to-white dark:from-[#9999A1] dark:to-white'>extraordinary.</span></h1>
                    <p className='text-[#9999A1]'>I&apos;m currently looking for new opportunities as a Junior Full Stack Developer. Whether you have a question, a project idea, or just want to say hi, feel free to reach out. My inbox is always open.</p>
                </div>
            </div>
        </div>
    )
}
