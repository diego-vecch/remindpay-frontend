/* import '../../styles/Header.css' */

/** Este es el Header del homepage en modo claro.
 *
 */

export function Header (): JSX.Element {
  return (

    <div className='flex justify-between items-end w-full h-80 pb-10 px-2'>
      <div className=' flex justify-center w-full'>
        <h4 className='text-purple-dark text-7xl font-secondary'>YOU FORGOT TO
          <span className='flex justify-end'>PAY??</span>
        </h4>
      </div>
    </div>

  )
}
