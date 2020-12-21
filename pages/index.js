import { useEffect } from 'react'
import { Flex, Input, Button } from 'theme-ui'
import Head from 'next/head'
import useSound from 'use-sound'

const Clicked = (num) => {
  const less =
    'Hey = your guess is < actual number of Hack Clubbers, try again!'
  const more =
    'Hey = your guess is > actual number of Hack Clubbers, try again!'
  if (num < 27) {
    alert(less)
  }
  if (num > 27) {
    alert(more)
  }
  if (num == 27) {
    alert('Woohoo!  You got it right!  Merry Christmas from Hack Club 🎅')
  }
}

export default function Home() {
  const [play] = useSound(
    'https://cloud-b76lt9t11.vercel.app/0christmas_-_harry_connick_jr._-_sleigh_ride.mp3'
  )

  useEffect(() => {
    play()
  })

  return (
    <div
      sx={{
        fontFamily: 'xmas',
        backgroundColor: 'yellow',
        backgroundImage: 'url(https://cloud-g8j7gwo2r.vercel.app/0image.png)',
        width: '100vw',
        height: '100vh',
      }}>
      <Head>
        <title>Merry Christmas</title>
      </Head>
      <Flex sx={{ width: '100vw' }}>
        <div
          sx={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
          }}>
          <img src='christmas.png' sx={{ width: '100%' }} />
        </div>
        <div
          sx={{
            flex: 1,
            px: [2],
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <h1 sx={{ textAlign: 'center', mb: [0], fontSize: [11] }}>
            <span sx={{ color: 'blue' }}>Ho</span>
            <span sx={{ color: 'red' }}>ho</span>
            <span sx={{ color: 'purple' }}>ho!</span>
          </h1>
          <h1 sx={{ textAlign: 'center', mt: [0], fontSize: [7] }}>
            How many <span sx={{ fontSize: [8] }}> Hack Clubbers </span> can you
            find?
          </h1>
          <Input
            id='inp'
            placeholder='Enter the number here (:'
            sx={{ borderRadius: ['5px'], width: [200], pl: [2] }}
          />
          <Button
            sx={{
              backgroundColor: 'green',
              mt: [4],
              borderRadius: [8],
              cursor: 'pointer',
              ':hover': {
                transform: 'scale(1.05)',
                transition: '0.2s',
              },
            }}
            onClick={() => {
              Clicked(document.getElementById('inp').value)
            }}>
            Submit!
          </Button>
          <p>{}</p>
        </div>
      </Flex>
    </div>
  )
}
