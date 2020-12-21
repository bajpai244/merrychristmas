import { Flex, Input, Button } from 'theme-ui'
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Merry Christmas</title>
      </Head>
      <Flex sx={{ width: '100vw', height: '100vh' }}>
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
          <h1 sx={{ textAlign: 'center', mb: [0], fontSize: [9] }}>
            <span sx={{ color: 'blue' }}>Ho</span>
            <span sx={{ color: 'yellow' }}>ho</span>
            <span sx={{ color: 'purple' }}>ho!</span>
          </h1>
          <h1 sx={{ textAlign: 'center', mt: [0] }}>
            How many <span sx={{ color: 'red' }}> Hack Clubbers </span> can you
            find?
          </h1>
          <Input
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
            }}>
            Submit!
          </Button>
        </div>
      </Flex>
    </div>
  )
}
