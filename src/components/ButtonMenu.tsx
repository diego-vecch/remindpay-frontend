type propMenu = {
  name: string
}
export default function ButtonMenu ({ name }: propMenu): JSX.Element {
  return (
    <div>
      <button className='text-sm vy-sm:text-base vy-sm:font-bold px-2 w-16 md:px-6 md:w-24 lg:w-32 py-1 bg-blue-regular rounded-md hover:bg-violet-700 active:bg-violet-700  text-purple-light focus:outline-none focus:ring focus:ring-violet-100'>{name}
      </button>
    </div>
  )
}
