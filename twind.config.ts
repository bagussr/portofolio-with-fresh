import { Options } from '$fresh/plugins/twind.ts';

export default {
  selfURL: import.meta.url,
  preflight: preflight => ({
    ...preflight,
    body: {
      backgroundColor: '#f8f9fa',
      fontFamily: 'Merriweather',
      overflowX: 'hidden',
    },
    '@media (max-width: 1400px)': {
      body: {
        display: 'none',
      },
      html: {
        position: 'relative',
        'min-width': '100vw',
        minHeight: '100vh',
        '&::after': {
          content:
            '"Please for better experience use this app on a device with a larger screen."',
          position: 'absolute',
          transform: 'translate(-50%,-50%)',
          top: '50%',
          left: '50%',
          textAlign: 'center',
          border: '1px solid',
          borderColor: 'black',
          borderRadius: '10px',
          padding: '10px 15px',
        },
      },
    },
    '@fontface': [
      {
        fontFamily: 'Merriweather',
        fontWeight: '400',
        src: 'https://fonts.googleapis.com/css2?family=Merriweather&display=swap',
      },
      {
        fontFamily: 'Merriweather',
        fontWeight: '300',
        src: 'https://fonts.googleapis.com/css2?family=Merriweather:wght@300&display=swap',
      },
    ],
  }),
  theme: {
    extend: {
      fontFamily: {
        meriweather: 'Merriweather, serif',
      },
      colors: {
        brand: {
          primary: '#00a8e8',
          secondary: '#007ea7',
          background: '#003459',
          black: '#00171f',
          blue: '#284b63',
          green: '#3c6e71',
          gray: '#d9d9d9',
          brown: '#914110',
          sky: '#0074B7',
        },
      },
    },
  },
  plugins: {
    btn: 'px-5 py-3 bg-brand-background text-white rounded rounded-lg font-semibold text-md shadow shadow-lg relative cursor-pointer flex gap-x-3 items-center hover:bg-[#004F87]',
    'btn-outline':
      'px-5 py-3   rounded rounded-lg font-semibold text-md shadow shadow-lg relative cursor-pointer flex gap-x-3 items-center border border-2 ',
    input:
      ' rounded rounded-md border border-brand-background px-5 py-2 w-full',
  },
} as Options;
