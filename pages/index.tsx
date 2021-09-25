import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import Master from '../src/components/Master'

interface Props {
  theme: string
}

const Home: React.FC<Props | any> = (props) => {
  return <Master theme={props.theme}>index</Master>
}

export default Home

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookie = parseCookies(context)
  return {
    props: {
      theme: cookie.theme,
    },
  }
}
