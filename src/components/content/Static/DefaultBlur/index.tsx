import Image, { StaticImageData } from 'next/image'

interface DefaultBlurProps {
  src: StaticImageData
}

const DefaultBlur = ({ src }: DefaultBlurProps) => {
  return (
    <div>
      <div className='w-[500px] h-[600px] relative'>
        <Image
          src={src}
          fill
          alt='image'
          className='object-cover'
          placeholder='blur'
        />
      </div>
    </div>
  )
}

export default DefaultBlur
