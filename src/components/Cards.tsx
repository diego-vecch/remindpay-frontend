import Image from 'next/image'
type PropsCard = {
  title: string
  msg: string
  featuredMsg?: string
  icon: string
  size?: number
}
export const Cards: React.FC<PropsCard> = ({ title, msg, icon, featuredMsg, size = 22 }) => (
  <div className='text-center bg-purple-half-dark pt-5 pb-4 px-4 rounded-md h-[258px] lg:h-56 w-72 justify-center items-start mt-0'>
    <header className='w-full flex justify-center items-start mt-0 pt-1'>
      <Image width={size} height={22} src={icon} alt='Icons' className='' />
    </header>
    <section className='pt-5'>
      <h2 className='text-yellow-100 font-semibold pb-4'>{title}</h2>
      <p className='text-purple-50'>
        <span className='text-yellow-300'>{featuredMsg} </span>
        {msg}
      </p>
    </section>
  </div>
)
