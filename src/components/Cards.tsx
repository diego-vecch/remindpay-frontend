import Image from 'next/image'
type PropsCard = {
  title: string
  msg: string
  featuredMsg?: string
  icon: string
}
export const Cards: React.FC<PropsCard> = ({ title, msg, icon, featuredMsg }) => (
  <div className='text-center bg-purple-half-dark py-5 rounded-md px-2'>
    <Image width={22} height={22} src={icon} alt='Campana' className='m-auto pb-4' />
    <h2 className='text-yellow-100 font-semibold pb-4'>{title}</h2>
    <p className='text-purple-50'>
      <span className='text-yellow-300'>{featuredMsg}</span>
      {msg}
    </p>
  </div>
)
