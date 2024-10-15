
import Image from 'next/image'
import rdImage from '@/app/assets/rd.png';



export const Header = () => {
    return (


        <header className="h-20 border border-slate-300 w-full px-10 gap-3 pl-4 flex items-center">

<Image className='flex justify-stretch place-items-end'
                src={rdImage}
                alt="Description of your image"
                width={45}  // Adjust the width based on your need
                height={45} // Adjust the height based on your need
            />
            <span className="font-bold text-3xl">Rapid Digits</span>
            

        </header>

    )
}
