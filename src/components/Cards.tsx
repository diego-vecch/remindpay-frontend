import Image from 'next/image'
interface PropsCard {
  title: string
  msg: string
  featuredMsg?: string
  icon: string
  size?: number
}
export const Cards: React.FC<PropsCard> = ({
  title,
  msg,
  icon,
  featuredMsg,
  size = 26
}) => (
  <div className=' bg-purple-half-dark py-8 px-8 rounded-xl h-[298px] lg:h-92 w-96 justify-center items-start mt-0'>
    <header className=' w-full flex justify-center items-start mt-0 pt-1'>
      <Image width={size} height={30} src={icon} alt='Icons' className='' />
    </header>
    <section className='pt-5'>
      <h2 className='text-center text-yellow-100 font-semibold pb-4 [text-wrap]:balance'>
        {title}
      </h2>
      <p className='text-purple-50'>
        <span className='text-yellow-300'>{featuredMsg} </span>
        {msg}
      </p>
    </section>
  </div>
)
