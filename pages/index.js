import Head from 'next/head'
import SearchBox from '@/components/SearchBox'
import FamousPlaces from '@/components/FamousPlaces'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Weather App - Next</title>
      </Head>

       <div className='home'>
        <div className='container'>
          <SearchBox placeholder='Search for a city...' />
          <FamousPlaces />
        </div>
        <hr /> 
        <div>
          <div className='row justify-content-center'>
          <div className="card-body">
          <div className='row'>
            <form className='user'>
              <div className='form-group'>
                <input type="email" className='form-control form-control-user' placeholder='Enter Email Address...' />
              </div>
              <div className='form-group'>
                <input type="password" className='form-control form-control-user' placeholder='Password' />
              </div>
              <Link href='' legacyBehavior>
                <a className='btn btn-primary btn-user btn-block'>Login</a>
              </Link>
              <hr />
              <div className='text-center'>
                <Link href='' legacyBehavior>
                  <a className='small'>Forgot Password?</a>
                </Link>
              </div>
              <div className='text-center'>
                <Link href='' legacyBehavior>
                  <a className='small'>Create an Account!</a>
                </Link>
              </div>
              
            </form>
            </div>
          </div>
          </div>
          </div>

        </div>
      

    </div>
  )
}
