export function IconHamburguerMenu (): JSX.Element {
  return (
    <button
      className='flex px-3 py-2 border-2 rounded text-purple-dark border-purple-dark  hover:text-white hover:border-purple-half-dark'
    >
      <svg
        className='fill-current h-3 w-3'
        viewBox='0 0 20 20'
        xmlns='http://www.w3.org/2000/svg'
      >
        <title>Menu</title>
        <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
      </svg>
    </button>
  )
}

export const LogoNavbar: React.FC = (props) => (
  <svg
    width={68}
    height={59}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g filter='url(#a)'>
      <path
        d='M56.912 2.571h-3.304V0h-3.304v2.571H40.39V0h-3.305v2.571h-3.304c-1.822 0-3.304 1.154-3.304 2.572v18c0 1.418 1.481 2.571 3.304 2.571h23.13c1.823 0 3.305-1.153 3.305-2.571v-18c0-1.418-1.482-2.572-3.305-2.572ZM55.26 21.857h-9.913v-7.714h9.913v7.714ZM56.912 9h-23.13V6.429h23.13V9Z'
        fill='#440298'
      />
    </g>
    <path
      d='m50.987 18.265-3.397-3.23-1.46 1.387 4.857 4.617L61 11.517l-1.458-1.387-8.555 8.135Z'
      fill='#7F39D9'
    />
    <g filter='url(#b)'>
      <path
        d='M38.304 28.61v-6.986c0-6.267-4.275-11.547-10.066-13.134a3.894 3.894 0 0 0-3.63-2.45 3.894 3.894 0 0 0-3.629 2.45c-5.791 1.59-10.066 6.867-10.066 13.133v6.986l-3.34 3.325A1.94 1.94 0 0 0 7 33.313v3.896c0 .517.206 1.012.573 1.377.367.366.865.57 1.384.57H40.26a1.96 1.96 0 0 0 1.383-.57c.367-.365.573-.86.573-1.377v-3.896a1.932 1.932 0 0 0-.573-1.377l-3.34-3.326Zm0 6.65H10.913v-1.142l3.34-3.325a1.939 1.939 0 0 0 .573-1.377v-7.793c0-5.37 4.389-9.74 9.783-9.74 5.394 0 9.782 4.37 9.782 9.74v7.793c0 .518.206 1.013.574 1.377l3.34 3.325v1.142ZM24.61 45a5.847 5.847 0 0 0 3.381-1.071 5.807 5.807 0 0 0 2.132-2.825H19.095a5.807 5.807 0 0 0 2.132 2.825A5.847 5.847 0 0 0 24.609 45Z'
        fill='#440298'
      />
    </g>
    <defs>
      <filter
        id='a'
        x={23.477}
        y={0}
        width={43.739}
        height={39.714}
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dy={7} />
        <feGaussianBlur stdDeviation={3.5} />
        <feComposite in2='hardAlpha' operator='out' />
        <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0' />
        <feBlend
          in2='BackgroundImageFix'
          result='effect1_dropShadow_1202_214'
        />
        <feBlend
          in='SourceGraphic'
          in2='effect1_dropShadow_1202_214'
          result='shape'
        />
      </filter>
      <filter
        id='b'
        x={0}
        y={6.039}
        width={49.218}
        height={52.961}
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dy={7} />
        <feGaussianBlur stdDeviation={3.5} />
        <feComposite in2='hardAlpha' operator='out' />
        <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0' />
        <feBlend
          in2='BackgroundImageFix'
          result='effect1_dropShadow_1202_214'
        />
        <feBlend
          in='SourceGraphic'
          in2='effect1_dropShadow_1202_214'
          result='shape'
        />
      </filter>
    </defs>
  </svg>
)

export function IconDarkMode (): JSX.Element {
  return (
    <>
      <div className=' rounded-full vy-sm:w-10 vy-sm:h-10 bg-blue-regular hover:bg-violet-700 flex justify-center items-center'>
        <svg
          width='30'
          height='32'
          viewBox='0 0 30 32'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M15.3747 29.2559H15.2497C13.5354 29.2424 11.8409 28.8737 10.2654 28.1715C8.68999 27.4694 7.26528 26.4478 6.07473 25.1667C3.86703 22.7148 2.61208 19.5006 2.55206 16.1443C2.49204 12.788 3.63121 9.52756 5.74973 6.99223C7.11458 5.40372 8.83039 4.18309 10.7497 3.43524C10.9737 3.34574 11.2177 3.32508 11.4527 3.37572C11.6876 3.42636 11.9036 3.54617 12.0747 3.72084C12.2332 3.88872 12.3449 4.09816 12.3977 4.3268C12.4506 4.55544 12.4426 4.7947 12.3747 5.01901C11.6897 6.96748 11.5539 9.07846 11.9835 11.1042C12.413 13.13 13.39 14.9865 14.7997 16.4559C16.2226 17.9155 18.0145 18.9267 19.9679 19.3724C21.9213 19.8181 23.9562 19.6801 25.8372 18.9744C26.0611 18.8925 26.3028 18.8786 26.534 18.9341C26.7653 18.9897 26.9765 19.1125 27.143 19.2882C27.3095 19.4638 27.4245 19.6851 27.4744 19.9261C27.5242 20.1671 27.507 20.4178 27.4247 20.649C26.7862 22.4194 25.7886 24.0265 24.4997 25.3614C23.3008 26.6028 21.8774 27.586 20.3114 28.2543C18.7455 28.9227 17.0678 29.2631 15.3747 29.2559ZM9.32473 7.08311C8.69682 7.54045 8.12214 8.07193 7.61223 8.66688C5.8929 10.713 4.9665 13.3493 5.01269 16.0645C5.05889 18.7798 6.07438 21.3805 7.86223 23.3622C8.82288 24.3984 9.97381 25.2241 11.247 25.7904C12.5201 26.3568 13.8897 26.6523 15.2747 26.6596H15.3747C17.0325 26.6586 18.6661 26.2471 20.14 25.4591C21.6139 24.6712 22.8857 23.5295 23.8497 22.1289C21.8852 22.3933 19.8884 22.1865 18.0128 21.5245C16.1371 20.8625 14.4326 19.7628 13.03 18.3099C11.6274 16.857 10.5641 15.0896 9.92183 13.1434C9.27951 11.1973 9.07525 9.12406 9.32473 7.08311Z'
            fill='#C293FF'
          />
        </svg>
      </div>
    </>
  )
}
